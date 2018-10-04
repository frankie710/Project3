const mysql = require("MySQL");
const PassportLocalStrategy = require("passport-local").Strategy;
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});


connection.query("USE User");
module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    connection.query("select * from users where id = " + id, function (err, rows) {
      done(err, rows[0]);
    });
  });


  passport.use("local-signup", new PassportLocalStrategy({
    
    usernameField : "email",
    passwordField : "password",
    passReqToCallback : true 
},
function(req, email, password, done) {


    connection.query("select * from users where email = '"+email+"'",function(err,rows){
  console.log(rows);
  console.log("above row object");
  if (err)
            return done(err);
   if (rows.length) {
            return done(null, false, req.flash("signupMessage", "The email address has already been taken."));
        } else {

    
            var newUserMysql = new Object();
    
    newUserMysql.email    = email;
            newUserMysql.password = password; 
  
    var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
      console.log(insertQuery);
    connection.query(insertQuery,function(err,rows){
    newUserMysql.id = rows.insertId;
    
    return done(null, newUserMysql);
    });	
        }	
});
}));
};
