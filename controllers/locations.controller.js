const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const peopleArray = require("../models/person.model");

// Data manipulation
const locationWithPeopleArray = locationsArray.map((location) => {
  const locationCopy = JSON.parse(JSON.stringify(location));
  locationCopy.people = peopleArray.filter((person) => {
    return (
      person.mainLocation === locationCopy.zip ||
      // Case for 23 Broadway
      (person.mainLocation === "10011" && locationCopy.zip === "11011")
    );
  });
  return locationCopy;
});

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

locations.get("/people", (req, res) => {
  res.json(locationWithPeopleArray);
});

module.exports = locations;
