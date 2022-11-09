// express
// cors
// body-parser
// helmet
// mongoose
// nodemon
// dotenv
// express-promise-router

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require("helmet");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());

// route
app.use("/todos" , require("./routes/todo"));


const port = process.env.PORT || 5000;

app.listen(port , () =>{
    console.log(`Server is running on port: http://localhost:${port}`);
});