//external libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//local files
const { mongoose } = require("./db/mongoose");
const routes = require("./routes/routes");

const PORT = process.env.PORT || 4000;

//configure middleware
app.use(cors());
app.use(bodyParser.json());
routes(app);

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
})

module.exports = { app };