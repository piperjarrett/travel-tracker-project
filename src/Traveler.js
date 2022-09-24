class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }
}

export default Traveler;
