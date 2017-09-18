const express = require( 'express' );

const app = express();

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(res, req);
    next();
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
});
