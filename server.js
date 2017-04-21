const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();



//Configure View Engine
app.set("views", "./views");
app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));


app.get('/', function(req, res) {
    res.render("index");
});

app.get('/rsvp', function(req, res) {
    res.render("rsvp");
});

app.post('/rsvp', function(req, res) {
    console.log(req.body);
    res.render("success");
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});