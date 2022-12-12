const express = require("express");
const specialEvent = express.Router();
const specialEventArray = require("../models/special-event.model");

specialEvent.get("/", (req, res) => {
  res.json(specialEventArray);
});

module.exports = specialEvent;
