const http = require("http");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
//exphbs not being used atm
const hbs = require("express-handlebars");
//body parser not being used atm
const bodyParser = require("body-parser");
const data
var app = express();
var Schema = mongoose.Schema;


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//view engine setup - handlebars
app.engine('hbs',hbs({
    extname:'hbs'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//redirects requires for homepage
app.get('/', (req, res) => {
    console.log("User" + req.url + "tried to connect");
    res.render("index",);
});
app.get('/sandbox', (req, res) =>{
    console.log("User" + req.url + "tried to connect");
    res.render('sandbox');
});
//listening for connection attempts
app.listen(3000, (req, res) => {
    console.log("Server started on port 3000...")
})
