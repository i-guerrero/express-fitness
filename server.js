// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTENING
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
