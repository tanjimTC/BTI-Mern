const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title:  String,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;