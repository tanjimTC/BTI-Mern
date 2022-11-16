const validator = require("validatorjs");
const Todo = require("../models/todo");

let todoController = {
  addTodo: async (req, res) => {
    try {
      const title = req.body.title;
      const rules = {
        title: "required",
      };
      const validation = new validator(req.body, rules);
      if (validation.fails()) {
        res.status(400).json({ message: "Title is required" });
      }
      const newTodo = new Todo({
        title,
      });
      const addedtodo = await newTodo.save();
      console.log(addedtodo);
      // send addedtodo to the client with status 200 and message
      res.status(200).json({
        message: "Todo added successfully",
        success: true,
        addedtodo,
      });
    } catch (err) {
      console.log(err);
    }
  },

  updateTodo: async (req, res) => {
    try {
      const id = req.params.id;
      const title = req.body.title;
      const rules = {
        title: "required",
      };
      const validation = new validator(req.body, rules);
      if (validation.fails()) {
        res.status(400).json({ message: "Title is required" });
      }
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );
      res.status(200).json({
        message: "Todo updated successfully",
        success: true,
        updatedTodo,
      });
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedTodo = await Todo.findByIdAndDelete(id);
      res.status(200).json({
        message: "Todo deleted successfully",
        success: true,
        deletedTodo,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = todoController;
