let tea = require('./tea.js');
var express = require('express');
let bodyParser = require('body-parser');
var app = express();
const path = require('path');
const fs = require('fs');
 
function getOrz(req, res) {
  res.send('Hello World');
  res.end();
}

let teaDataArray = [];

function newTea(inputData){
  console.log(inputData);
  let teaData = new tea.Tea(inputData.name, inputData.cal);
  teaDataArray.push(teaData);
}


function main() {
  newTea({
    "name": "black tea",
    "cal": 100
  });
  newTea({
    "name": "olong tea",
    "cal": 0
  });

  //app.get('/orz', getOrz);
  app.use(bodyParser.json());
  app.use(express.static('www'));


  app.get('/drink/tea', (req, res) => {
    res.send(teaDataArray);
    res.end();
  });

  app.get('/drink/tea/:tea_id', (req, res) => {
    console.log(req.params);
  });

  app.post('/drink/tea', (req, res) => {
    console.log("post /drink/tea");
    console.log(req.body);
    newTea(req.body);

    res.send("OK");
    res.end();

    /*let buf = new Buffer();
    req.on('data', (chunk) => {
      console.log("on data");
      console.log(chunk);
      buf += chunk;
    });

    req.on('end', (e) => {
      console.log("end");
      let dataStr = buf.toString();
      let inputData = JSON.parse(dataStr);
      console.log(inputData);
      res.end();
    });
    */
  });

  app.put('/drink/tea/{tea_id}', (req, res) => {
    
  });

  app.delete('/drink/tea/{tea_id}', (req, res) => {
    
  });
   
  app.listen(3000)
}

main();

