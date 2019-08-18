var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport = require('passport');
>>>>>>> 9e710a80627944dd89a9b1a7552f96d54e660c3c

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
