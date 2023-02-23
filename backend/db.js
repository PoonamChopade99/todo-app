const mongoose = require("mongoose");

mongoose
  .connect(process.env.dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

const conn = mongoose.connection;

module.exports = conn;
