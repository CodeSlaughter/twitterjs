const express = require( 'express' );

const app = express();
const nunjucks = require('nunjucks');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.render('index.html', locals, function (err, output) {
    //     console.log(output);
    // });
    // app.set("viewEngine", "html");
    // app.engine("html", nunjucks.render);
    // nunjucks.configure('views', {noCache: true});


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views');



app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(res, req);
    next();
});

app.get('/',function(req, res){
    console.log("get running");
    //res.render(__dirname + '/views/index.html');  
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
});
