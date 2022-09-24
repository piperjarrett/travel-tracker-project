import { expect } from "chai";
import TravelerTrips from "../src/TravelerTrips";
import { trips } from "../src/data/travelerTripTestData";

describe("travelerTrips", () => {
  let travelerTrips;
  let destinations;

  beforeEach(() => {
    travelerTrips = new TravelerTrips(trips);
  });

  it("should be an instance of TravelerTrips", () => {
    expect(travelerTrips).to.be.an.instanceOf(TravelerTrips);
  });

  it("should hold all the trip objects in an array for a traveler", () => {
    expect(travelerTrips.trips).to.deep.equal(trips);
  });

  it("should calculate the total cost of all the travelers trips with a 10% booking fee for each", () => {
    destinations = [
      {
        id: 47,
        destination: "Zürich, Switzerland",
        estimatedLodgingCostPerDay: 1100,
        estimatedFlightCostPerPerson: 110,
        image:
          "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80",
        alt: "landscape photo of cityscape",
      },
      {
        id: 35,
        destination: "Anchorage, Alaska",
        estimatedLodgingCostPerDay: 200,
        estimatedFlightCostPerPerson: 100,
        image:
          "https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "man riding on kayak surrounded by mountains",
      },
      {
        id: 26,
        destination: "London, England",
        estimatedLodgingCostPerDay: 100,
        estimatedFlightCostPerPerson: 1000,
        image:
          "https://images.unsplash.com/photo-1549471156-52ee71691122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "city with bridge under night sky",
      },
      {
        id: 27,
        destination: "San Francisco, California",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "golden gate bridge during the day time",
      },
    ];
    expect(travelerTrips.calculateTotalCost(destinations)).to.equal("$31625");
  });
});
