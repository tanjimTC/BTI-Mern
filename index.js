const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
require("dotenv").config();
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());

const uri = process.env.DB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/binary", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });

  const responseFromDB = await newTodo.save();

  res.status(200).json({
    message: "Todo created successfully",
    success: true,
    responseFromDB,
  });
});

app.get("/binary", async (req, res) => {
    console.log("GET request received");
  const todos = await Todo.find();
  res.status(200).json({
    message: "Todos fetched successfully",
    success: true,
    todos,
  });
});


app.delete("/binary/:id" , async (req, res)=>{
    // habi jabi
    const id =  req.params.id;
    console.log(id);
});




app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
