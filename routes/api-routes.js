// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user

    db.Todo.findAll({})
      .then(function(result) {
        return res.json(result);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos/new", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user


    // Then add the character to the database using sequelize
    db.Todo.create({
      text: req.body.name,
      complete: false
    }).then(function(result) {
      res.redirect("/");
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id?", function(req, res) {


    console.log("okkkkk working111111");

    // db.Todo.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // }).then(function(result) {
    //      res.json(result);
    // });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.post("/api/todos/:id?/:txt?", function(req, res) {

    db.Todo.update({ 
      text: req.params.txt,
      complete: true },
      { where: 
        { id: req.params.id } 
      }
    ).then(function(result) {
      res.redirect("/");
    });

  });
};
