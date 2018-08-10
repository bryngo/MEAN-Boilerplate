var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var mime = require('mime');
var ObjectID = require('mongodb').ObjectID;


/**
 * @route: /
 */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'Home',
        message: 'Hi! Welcome to your new website!'
    });
});

/* catches all error pages */
router.get('*', (req, res, next) => {
  res.render('error', {
    title: "uh oh.",
    reason: "Something went wrong, and I don't know why!"
  });
});


// Export to make this externally visible
module.exports = router;
