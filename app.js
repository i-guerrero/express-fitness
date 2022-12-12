// DEPENDENCIES
const express = require("express");
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventController = require("./controllers/special-events.controller");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController);

app.use("/machines", machinesController);

app.use("/persons", personsController);

app.use("/plans", plansController);

app.use("/special-events", specialEventController);

// 404 Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
