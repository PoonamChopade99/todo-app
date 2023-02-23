const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

// const Todo = mongoose.model("Todo", TodoSchema);

module.exports = mongoose.model("todo", TodoSchema);
