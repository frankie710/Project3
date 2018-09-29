
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/login.html"))
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("<h1>404</h1>");
  });
};