//Import CSS and Images
import "./css/styles.css";
import "./images/down-arrow.png";
import "./images/logo_transparent.png";

//Import Fetch
import { promiseAll } from "./apiCalls.js";
import { postData } from "./apiCalls.js";

//Import Classes
import Traveler from "./Traveler";
import TravelerTrips from "./TravelerTrips";

//Gloabl Variables
let travelersData;
let tripsData;
let destinationData;
let traveler;
let travelerTrips;
let departureDate;

//Query Selectors
const profileName = document.querySelector(".profile-name");
const pastTrips = document.querySelector(".past-trips");
const totalAmountSpent = document.querySelector(".amount-spent");
const destinationList = document.getElementById("destinations");
const searchButton = document.querySelector(".search");
const newTrip = document.querySelector(".booking-trip");
const departureDateInput = document.querySelector(".departure-date-input");
const durationInput = document.querySelector(".duration-input");
const passengersInput = document.querySelector(".passengers-input");
const pendingTrips = document.querySelector(".pending-trips");
const destinationInput = document.querySelector(".destinations-input");
const bookingForm = document.querySelector(".booking-form");

//Event Listeners
window.addEventListener("load", promiseAll);
searchButton.addEventListener("click", displayNewTrip);
bookingForm.addEventListener("input", enableButton);

//Functions
function getRandomIndex(travelersData) {
  return Math.floor(Math.random() * travelersData.length);
}

promiseAll().then((responses) => {
  assignData(responses);
  traveler = new Traveler(travelersData[getRandomIndex(travelersData)]);
  travelerTrips = new TravelerTrips(
    tripsData.filter((trip) => trip.userID === traveler.id)
  );
  displayDashboard();
});

function assignData(responses) {
  travelersData = responses[0].travelers;
  tripsData = responses[1].trips;
  destinationData = responses[2].destinations;
}

function displayDashboard() {
  profileName.innerText = `Hi, ${traveler.getFirstName()}!`;
  totalAmountSpent.innerText = `Total Amount Spent In 2022:
  ${travelerTrips.calculateTotalCost(destinationData)}`;
  destinationData.forEach((destination) => {
    destinationList.innerHTML += `<option value=${destination.destination}>${destination.destination}</option>`;
  });

  travelerTrips.trips.forEach((trip) => {
    if (trip.status === "approved") {
      pastTrips.innerHTML += `
      <ul>
        <li>Destination: ${
          findDestination().find(
            (destination) => destination.id === trip.destinationID
          ).destination
        }</li>
        <li>Duration: ${trip.duration} days</li>
        <li>Date: ${trip.date}</li>
        <li>Status: ${trip.status}</li>
      </ul>`;
    }
  });
}

function findDestination() {
  const destinations = travelerTrips.trips.reduce((allDestinations, trip) => {
    destinationData.forEach((destination) => {
      if (trip.destinationID === destination.id) {
        allDestinations.push(destination);
      }
    });
    return allDestinations;
  }, []);
  return destinations;
}

function enableButton() {
  if (
    destinationList.options[destinationList.selectedIndex].text &&
    durationInput.value &&
    departureDateInput.value &&
    passengersInput.value
  ) {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
}
function calculateCostOfNewTrip() {
  const travelerNewDestination = destinationData.find(
    (destination) =>
      destination.destination ===
      destinationList.options[destinationList.selectedIndex].text
  );
  const lodgingAmount =
    travelerNewDestination.estimatedLodgingCostPerDay * durationInput.value;
  const flightAmount =
    travelerNewDestination.estimatedFlightCostPerPerson * passengersInput.value;
  const totalAmount = lodgingAmount + flightAmount;
  return (totalAmount * 1.1).toFixed();
}

function displayNewTrip() {
  departureDate = departureDateInput.value.split("-").join("/");
  newTrip.innerHTML = "";
  newTrip.innerHTML = `
  <div class='new-trip-info'
  <ul clas='new-trip'>
    <li>Destination: ${
      destinationList.options[destinationList.selectedIndex].text
    }</li>
    <li>Duration: ${durationInput.value} days</li>
    <li>Date: ${departureDate}</li>
    <li>Travelers: ${passengersInput.value}</li>
    <li>Cost: $${calculateCostOfNewTrip()}</li>
  </ul>
  <button class='submit-button'>Submit Trip</button>
  </div>`;
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", displayPendingTrips);
}

function activatePostCall(event) {
  event.preventDefault();
  let newTripDestinationId = destinationData.find(
    (destination) =>
      destination.destination ===
      destinationList.options[destinationList.selectedIndex].text
  ).id;
  let data = {
    id: tripsData.length + 1,
    userID: traveler.id,
    destinationID: parseInt(newTripDestinationId),
    travelers: parseInt(passengersInput.value),
    date: departureDate,
    duration: parseInt(durationInput.value),
    status: "pending",
    suggestedActivities: [],
  };
  postData(data).then((responses) => {
    assignData(responses);
    travelerTrips = new TravelerTrips(
      tripsData.filter((trip) => trip.userID === traveler.id)
    );
  });
}

function displayPendingTrips() {
  activatePostCall(event);
  pendingTrips.innerHTML += `<ul>
    <li>Destination: ${
      destinationList.options[destinationList.selectedIndex].text
    }</li>
    <li>Duration: ${durationInput.value} days</li>
    <li>Date: ${departureDate}</li>
    <li>Status: pending</li>
  </ul>`;
  newTrip.innerHTML = "";
  newTrip.innerHTML = `<p class="book-with-us">BOOK WITH US</p>`;
  durationInput.value = "";
  departureDateInput.value = "";
  passengersInput.value = "";
  enableButton();
}
