// import "core-js";
// importing express from node_modules folder
// const express = require("express");
import express from "express";

// app that is executing express
const app = express();
// port number
const PORT = 3001;

// call back, server created
const handleListening = () =>
  console.log(`listening on : http://localhost:${PORT}`);

// two objects of express : request and respond
const handleHome = (req, res) =>
  res.send("Hello from http! nodemon is executed. fuiuuuuuck plzzz");
// to make our homepage as normal website, we should respond html and css to our request
const handleProfile = (req, res) => res.send("welcome to my profile");
// "/" is the main url, and executing express through GET method of http, and this means that I am requesting something!
app.get("/", handleHome);

app.get("/profile", handleProfile);

// this app is declared to execute the express
// listen to the port number and execute the handleListening function
app.listen(PORT, handleListening);
