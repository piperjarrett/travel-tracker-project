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

  it("should calculate the total cost the traveler has spent in the last year with a 10% booking fee for each", () => {
    destinations = [
      {
        id: 22,
        destination: "Rome, Italy",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 650,
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people standing inside a colosseum during the day",
      },
      {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt:
          "people crossing the street during the day surrounded by tall buildings and advertisements",
      },
      {
        id: 16,
        destination: "Bangkok, Thailand",
        estimatedLodgingCostPerDay: 35,
        estimatedFlightCostPerPerson: 988,
        image:
          "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        alt: "ornate buildings with a garden during the day",
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
    ];
    expect(travelerTrips.calculateTotalCost(destinations)).to.equal("$4543");
  });
});
