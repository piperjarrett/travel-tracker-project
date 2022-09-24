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
  console.log(getRandomIndex(travelersData));
  traveler = new Traveler(travelersData[getRandomIndex(travelersData)]);
  travelerTrips = new TravelerTrips(
    tripsData.filter((trip) => trip.userID === traveler.id)
  );
});
