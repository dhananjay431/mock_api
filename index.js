const express = require("express");
const path = require("path");
const { faker } = require("@faker-js/faker");
var bodyParser = require("body-parser");

const app = express();
var plug = require("./plugins");
var model = require("./model");
var jsontoxml = require("./jsontoxml")
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.all("/data/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));

  var qr = {};
  if (req.method == "GET") {
    qr = JSON.parse(req.query.q || "{}");
  }
  if (req.method == "POST") {
    console.log("req.body=>", req.body);
    qr = req.body;
  }

  var _d = {};
  if (id != 0)
    _d = plug.evaluate(
      Array(id)
        .fill({})
        .map((d) => {
          return JSON.parse(JSON.stringify(qr));
        })
    );
  else {
    _d = plug.evaluate(qr);
  }
  if(req.query.t == "xml"){
    res.set('Content-Type', 'text/xml') ;
    res.send(jsontoxml.jsontoxml(_d) );
  }
  else{
    res.send(_d);
  }
});

app.get("/user/:id?", (req, res) => {
  var id = 10;
  id = Number(req.params.id || faker.datatype.number({ min: 1, max: 100 }));

  var qr = Array(id)
    .fill({})
    .map((d) =>  JSON.parse(JSON.stringify(model.user)));

    if(req.query.t == "xml"){
      res.set('Content-Type', 'text/xml') ;
      res.send(jsontoxml.jsontoxml(plug.evaluate(qr)) );
    }
    else{
      res.send(plug.evaluate(qr) );
    }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});