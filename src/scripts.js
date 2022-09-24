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

//Event Listeners
window.addEventListener("load", promiseAll);

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
  totalAmountSpent.innerText = `Total Amount Spent: ${travelerTrips.calculateTotalCost(
    destinationData
  )}`;
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
