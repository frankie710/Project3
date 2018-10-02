const mysql = require("MySQL");
const PassportLocalStrategy = require("passport-local").Strategy;
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});


connection.query("USE ");
module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    connection.query("select * from users where id = " + id, function (err, rows) {
      done(err, rows[0]);
    });
  });



  passport.use("local-login", new PassportLocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  },

    function (req, email, password, done) {

      connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", function (err, rows) {
        if (err)
          return done(err);
        if (!rows.length) {
          return done(null, false, req.flash("loginMessage", "Not a valid user name."));

        }

        // if the user is found but the password is wrong
        if (!(rows[0].password == password))
          return done(null, false, req.flash("loginMessage", "Incorrect login info."));

        return done(null, rows[0]);

      });


    }));

};

