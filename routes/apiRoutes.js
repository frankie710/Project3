var db = require("../models");
// var request = require("request");
// var parser = require("xml2json");

module.exports = function (app) {

    app.get("/api/todos", function (req, res) {
        db.Todo.findAll({
        }).then(function (dbTodo) {
            res.json(dbTodo);
        })
    })

    app.get("/api/users", function (req, res) {
        db.User.findAll({
        }).then(function (dbUser) {
            res.json(dbUser);
        })
    })

    app.post("/api/todos", function (req, res) {
        db.Todo.create({
            task: req.body.task
        }).then(function (dbTodo) {
            res.send(dbTodo);
        });
    });

    app.post("/api/users", function (req, res) {
        db.User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            email: req.body.email
        }).then(function (dbUser) {
            res.send(dbUser);
        });
    });

};