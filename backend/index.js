require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db");

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// ----------------------------------------------
app.use("/todos", require("./routes/todo"));

// Default Route
app.get("/", (req, res) => {
  res.send("<h1>Server v.1.0</h1>");
});

// listing on port 5000 for api requests
app.listen(PORT, (req, res) => {
  console.log("Server is running on port : " + PORT);
});
