var path = require("path");

//routing

module.exports = function (app) {
  //html GET requests
  //below the code requests all the users page or anything on the user
  //would see when interacting with the application


  app.get("/directory", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/directory.html"));
  });

  app.get("/calllist", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/callList.html"));
  });

  //if no matching route is found, default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/directory.html"));

  });
}