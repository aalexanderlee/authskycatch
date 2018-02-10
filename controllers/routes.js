var express = require("express");
var router = express.Router();
var passport = require("passport");
var sequelize = require("sequelize");

var db = require("../models");

// The "/" path will lead to landing.js
router.get("/", function(req, res) {
  res.render("landing");
});

// "/signup" path will lead to signup.js
router.get("/signup", function(req, res) {
  res.render("signup");
});

// "/login" path will lead to login.js
router.get("/login", function(req, res) {
  res.render("login");
});
