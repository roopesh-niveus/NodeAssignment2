/* getServer.js is a js file in which,
   Express server is created 
   GET api that returns query param, path param and return both values with info as json
   

*/

const express = require("express");
const app = express();
const path = require("path");
const port = 8079;

//defualt get api without param and query
app.get("/", (req, res) => {
  const url = path.join(__dirname + "/index1.html");
  res.sendFile(url);
});

//get api with params and query
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const name = req.query.name;
  const message =
    "This response includes both a path parameter and a query parameter";

  const response = {
    id: id,
    name: name,
    message: message,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
