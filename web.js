var express = require('express');

var app = express();


/* Serve static content */
app.configure(function () {
    app.use(express.static(__dirname + "/public"));
});


app.listen(8080, function () {
    console.log(" - listening on 8080 ");
});
