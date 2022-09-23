// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.css";
import { promiseAll } from "./apiCalls.js";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/down-arrow.svg";

//Gloabl Variables
let travelData;
let tripsData;
let traveler;

//Event Listeners
window.addEventListener("load", promiseAll);

//Functions

promiseAll().then((responses) => {
  travelData = responses[0].travelers;
  tripsData = responses[1].trips;
  traveler = new Traveler();
});
