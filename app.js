var http = require("http");
var express = require("express");
var path = require("path");
var hbs = require("express-handlebars");
//body parser not being used atm
var bodyParser = require("body-parser");
var app = express();

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
    console.log("User" + req.url + "tried to connect")
    res.render("index",{
        jobTitle:'full stack web developer'
    });
});
//listening for connection attempts
app.listen(3000, function(req, res){
    console.log("Server started on port 3000...")
})
