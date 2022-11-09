const todo = require("express").Router();

todo.route("/todo").get((req, res)=>{
    res.send("Hello from todo get request");
});

todo.route("/todo").post((req, res)=>{
    console.log(req.body);
    res.send("Hello from todo post request");
});

module.exports = todo;