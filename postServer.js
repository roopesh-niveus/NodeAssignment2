/*
postServer.js is file in which,
Create a POST api which acccepts a JSON data. Return an array of data.
this takes the form inputs as json and then converts it to array and returns.
*/

const express = require('express');
const app = express();
const bp=require('body-parser');


app.use(bp.urlencoded({extended:true}))


//default get api from which post api can be triggered
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index2.html')
})

//post api 
app.post('/users',(req,res)=>{
  console.log(req.body);
  const jsonData = req.body;
const arr = Object.values(jsonData);

  res.send(arr);
})

app.listen(3000, () => console.log('API server listening on port 3000'));
