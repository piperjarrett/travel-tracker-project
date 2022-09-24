class TravelerTrips {
  constructor(travelersTrips) {
    this.trips = travelersTrips;
  }

  calculateTotalCost(destinations) {
    let lodgingFee;
    let flightFee;
    let totalFee;
    const totalCost = this.trips.reduce((total, trip) => {
      destinations.forEach((destination) => {
        if (trip.destinationID === destination.id) {
          lodgingFee = destination.estimatedLodgingCostPerDay * trip.duration;
          flightFee = destination.estimatedFlightCostPerPerson * trip.travelers;
          totalFee = (lodgingFee + flightFee) * 1.1;
          total += totalFee;
        }
      });

      return total;
    }, 0);
    return `$${totalCost.toFixed()}`;
  }
}

export default TravelerTrips;
