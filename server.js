require('dotenv').config();
const express = require('express');
const app = express();
const { mongoose } = require('mongoose');
const { query } = require('./query');

app.use(express.json());


mongoose.connect(process.env.DB, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});


app.listen(process.env.PORT, function() {
  console.log("Server is on");
});