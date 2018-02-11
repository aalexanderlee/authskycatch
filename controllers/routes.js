var express = require("express");
var router = express.Router();
var passport = require("passport");
var sequelize = require("sequelize");

var db = require("../models");

// The "/" path will lead to landing.handlebars
router.get("/", function(req, res) {
  res.render("landing");
});

// "/signup" path will lead to signup.handlebars
router.get("/signup", function(req, res) {
  res.render("signup");
});

// "/login" path will lead to login.handlebars
router.get("/login", function(req, res) {
  res.render("login");
});

// "/signup" post path will render either home.handlebars or signup.handlebars based on success or failure
router.post("/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/home",
    failureRedirect: "/signup"
  })
);

router.post("/login",
  passport.authenticate("local-signin", {
    successRedirect: "/home",
    failureRedirect: "/login"
  })
);

router.get("/home", isLoggedIn, function(req, res) {
  

});
