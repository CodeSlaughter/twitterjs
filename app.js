const express = require( 'express' );
const routes = require('./routes');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});
const socketio = require('socket.io');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views');


// app.use(routes, function (req, res, next) {
//     // do your logging here
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     console.log(res, req);
//     next();
// });

// app.use( '/', routes(io) );
// app.get('/',function(req, res){
//     console.log("get running");
//     //res.render(__dirname + '/views/index.html');  
//     res.render( 'index', {title: 'Hall of Fame', people: people, places: places} );
// });

// app.listen(3000, function(){
//     console.log("Listening on port 3000");
// });

const server = app.listen(3000);
const io = socketio.listen(server);

app.use( '/', routes(io) );