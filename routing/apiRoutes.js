//here we link the data sources that hold arrays of information in your api

var activeData = require("../app/activeCalls");
var waitingData = require("../app/callerData");

//routing

module.exports = function(app) {
//API GET REQUESTS
//below the code handles when the user "visits" a page.
//each case below is when a user visits a link on the page


app.get("/api/active", function(req, res) {
    res.json(activeData);
  });

  app.get("/api/waiting", function(req, res) {
    res.json(waitingData);
  });

  //below the code handles when a user submits data
  //in each of the cases below, when a user submits data the JSON is 
  //pushed into the apporpriate JS array

  app.post("/api/active", function (req, res) {
      //if theres less than 10 calls then there's enough lines to support it
      if (activeData.length < 10) {
        activeData.push(req.body);
        res.json(true);
      }
      else {
          waitingData.push(req.body);
          res.json(false);
      }
  })

}