/*
postServer.js is file in which,
Create a POST api which acccepts a JSON data. Return an array of data.
this takes the form inputs as json and then converts it to array and returns.
*/

const express = require("express");
const app = express();

app.use(express.json());

let data = [];
// let id = 0;
//default get api from which post api can be triggered
app.get("/", (req, res) => {
  res.send("api working");
});
app.get("/api/data", (req, res) => {
  res.json(data);
});

//post api
app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json(data);
});

app.listen(3030, () => {
  console.log("API server listening on port 3000");
});
