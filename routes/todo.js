// const todo = require("express").Router();
// const Todo = require("../models/todo");
// const validator = require("validatorjs");

// todo.route("/get").get(async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.status(200).json({
//       message: "Todos fetched successfully",
//       success: true,
//       todos,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// todo.route("/add").post(async (req, res) => {
//   console.log(req.body);
//   try {
//     const title = req.body.title;
//     const rules = {
//       title: "required",
//     };
//     const validation = new validator(req.body, rules);
//     if (validation.fails()) {
//       res.status(400).json({ message: "Title is required" });
//     }
//     const newTodo = new Todo({
//       title,
//     });
//     const addedtodo = await newTodo.save();
//     console.log(addedtodo);
//     // send addedtodo to the client with status 200 and message
//     res.status(200).json({
//       message: "Todo added successfully",
//       success: true,
//       addedtodo,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = todo;

const todo = require("express").Router();
const todoController = require("../controller/todoController");
const validator = require("validatorjs");
const Todo = require("../models/todo");

todo.route("/").get((req, res) => {
  res.send("Hello World from server todo route");
});

todo.route("/add").post( async (req, res) => {
  try{
    let title = {
      title: req.body.title,
    }

    const rules = {
      title: "required",
    }

    const validation = new validator(title, rules);

    if(validation.fails()){
      res.status(400).json({message: "Title is required"})
    }

    const newTodo = new Todo({
      title: req.body.title,
    });

    const addedTodo = await newTodo.save();

    res.status(200).json({
      message: "Todo added successfully",
      success: true,
      addedTodo,
    });


  }catch(err){
    console.log(err);
  }
});









// todo.route("/add").post(todoController.addTodo);
todo.route("/update/:id").put(todoController.updateTodo);

module.exports = todo;
