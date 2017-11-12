const http = require("http");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const databaseService = require("./databaseService.js");
//exphbs not being used atm
const hbs = require("express-handlebars");
//body parser not being used atm
const bodyParser = require("body-parser");
var app = express();
var Schema = mongoose.Schema;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//view engine setup - handlebars
app.engine('hbs',hbs({
    extname:'hbs',
    //defaultLayout: 'layout',
    //layoutsDir: path.join(__dirname, '/views/layouts/')
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//redirects requires for homepage
app.get('/', (req, res) => {
    console.log("User" + req.url + "tried to connect");
    res.render("index");
});
app.get('/blog', (req, res) =>{
    console.log('User + req.url + "tried to connect');
    res.render('blog');
});
app.get('/dashboard', (req, res) => {
    console.log('User + req.url + "tried to connect');
    databaseService.userLogin('test', 'test').then(() => {
        res.render('dashboard');
    })
});
//listening for connection attempts
app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('Server started on port 3000...');
});