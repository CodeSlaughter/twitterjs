const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render ('index', {tweets:tweets});
});

router.get('/users/:name', function(req, res) {
    var person = req.params.name;
    var tweets = tweetBank.find( {name: person} );
    res.render( 'index', { tweets: tweets }, {showForm: true} );
  });

router.get('/tweets/:id', function(req, res) {
    var num = (req.params.id)*1;
    var tweets2 = tweetBank.find( {id: num} );
    res.render( 'index', { tweets: tweets2 } );
});

module.exports = router;