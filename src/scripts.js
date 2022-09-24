//Import CSS and Images
import "./css/styles.css";
import "./images/down-arrow.svg";

//Import Fetch
import { promiseAll } from "./apiCalls.js";

//Import Classes
import Traveler from "./Traveler";
import TravelerTrips from "./TravelerTrips";

//Gloabl Variables
let travelersData;
let tripsData;
let destinationData;
let traveler;
let travelerTrips;

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

//Event Listeners
window.addEventListener("load", promiseAll);
searchButton.addEventListener("click", displayNewTrip);

//Functions
function getRandomIndex(travelersData) {
  return Math.floor(Math.random() * travelersData.length);
}

promiseAll().then((responses) => {
  travelersData = responses[0].travelers;
  tripsData = responses[1].trips;
  destinationData = responses[2].destinations;
  traveler = new Traveler(travelersData[getRandomIndex(travelersData)]);
  travelerTrips = new TravelerTrips(
    tripsData.filter((trip) => trip.userID === traveler.id)
  );
  displayDashboard();
});

function displayDashboard() {
  profileName.innerText = `Hi, ${traveler.getFirstName()}!`;
  totalAmountSpent.innerText = `Total Amount Spent In 2022:
  ${travelerTrips.calculateTotalCost(destinationData)}`;
  destinationData.forEach((destination) => {
    console.log(typeof destination.destination);
    destinationList.innerHTML += `<option value=${destination.destination}>${destination.destination}</option>`;
  });
  travelerTrips.trips.forEach((trip) => {
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
  return totalAmount * 1.1;
}

function displayNewTrip() {
  let departureDate = departureDateInput.value.split("-").join("/");
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

function displayPendingTrips() {
  pendingTrips.innerHTML += `<ul>
    <li>Destination: ${
      destinationList.options[destinationList.selectedIndex].text
    }</li>
    <li>Duration: ${durationInput.value} days days</li>
    <li>Date: ${departureDateInput.value}</li>
    <li>Status: pending</li>
  </ul>`;
  newTrip.innerHTML = "";
  newTrip.innerHTML = `<p class="book-with-us">BOOK WITH US</p>`;
}
