import { expect } from "chai";
import Traveler from "../src/Traveler";
import { travelers } from "../src/data/travelerTestData";
describe("traveler", () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelers[0]);
  });

  it("should have a parameter to take in travelerData", () => {
    expect(travelers[0]).to.be.an("object");
  });

  it("should have an id", () => {
    expect(traveler.id).to.equal(1);
  });

  it("should have a name", () => {
    expect(traveler.name).to.equal("Ham Leadbeater");
  });

  it("should have a travel type", () => {
    expect(traveler.travelerType).to.equal("relaxer");
  });

  it("should have a function to retun the first name", () => {
    expect(traveler.getFirstName()).to.equal("Ham");
  });
});
