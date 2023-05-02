/*
postServer.js is file in which,
Create a POST api which acccepts a JSON data. Return an array of data.
*/

const express = require("express");
const app = express();

app.use(express.json());

let data = [];
//default get api
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
