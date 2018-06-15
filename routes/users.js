var express = require('express');
var router = express.Router();
var email = require('../public/email');
var path = require('path');

/* GET users listing. */

router.get('/', function (req, res, next) {
    console.log('//GET in users.js called')
    res.send('//GET in users.js called!');
});
router.post('/', function (req, res, next) {
    console.log('//POST in users.js called')
    res.send('//POST in users.js called!');
    //res.sendFile(path.join(__dirname, '../public/user.html'));
});
module.exports = router;
