const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (io) {
router.use(express.static('public'));

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render ('index', {tweets:tweets, showForm: true});
});

router.get('/users/:name', function(req, res) {
    var person = req.params.name;
    var tweets = tweetBank.find( {name: person} );
    res.render( 'index', { tweets: tweets, showForm: true, input: person},);
  });

router.get('/tweets/:id', function(req, res) {
    var num = (req.params.id)*1;
    var tweets2 = tweetBank.find( {id: num} );
    res.render( 'index', { tweets: tweets2, showForm: false } );
});

router.post('/tweets', urlencodedParser, function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });

  return router;
};