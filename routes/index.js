var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.send('router.post in index.js called!')
    //email.send();
});
module.exports = router;
