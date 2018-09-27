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

    app.post("/api/todos", function (req, res) {
        db.Todo.create({
            task: req.body.task
        }).then(function (dbTodo) {
            res.send(dbTodo);
        });
    });

};