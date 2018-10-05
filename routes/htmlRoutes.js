
var path = require("path");

module.exports = function(app) {

  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("<h1>404</h1>");
  });
};