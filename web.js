var express = require('express');

var app = express();


/* Serve static content */
app.configure(function () {
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + "/public"));
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/Progress', function(req, res) {
    res.render('progress');
});

app.get('/Nutrition', function(req, res) {
    res.render('nutrition');
});

app.get('/Activity', function(req, res) {
    res.render('activity2');
});

var port = process.env.PORT || 8080
app.listen(port, function () {
    console.log(" - listening on " + port);
});
