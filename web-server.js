/**
 * Created by Alex on 4/23/2015.
 * Description: This is should be the Web Server for my NodeJS project.
 *  Running "node web-server.js" should start the server and on localhost be able
 *  to run my application
 */

var express = require('express');
var app = express();
var path = require('path');


//Static files to be served
app.use("/css",express.static('public/css'));
app.use("/js",express.static('public/js'));
app.use("/lib",express.static('public/lib'));
app.use("/font-awesome",express.static('public/font-awesome'));
app.use("/fonts",express.static('public/fonts'));
app.use("/img",express.static('public/img'));
app.use("/pages",express.static('public/pages'));


//**********Routes*********

//sends testing index file when requested
app.get('/testing',function(req,res){
    console.log("Sent TESTING Index2.html!");
    res.sendFile(path.join(__dirname + '/public/index2.html'));
});

//sends index.html when requested
app.get('/',function(req,res){
    console.log("Sent Index.html!");
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(3000);

console.log('NodeJS - Listening in port 3000');

/*
//sends homepage.html when requested
app.get('/pages/homepage.html',function(req,res){

    res.sendFile(path.join(__dirname + '/public/pages/homepage.html'));

});
//sends forecast.html when requested
app.get('/pages/forecast.html',function(req,res){

    res.sendFile(path.join(__dirname + '/public/pages/forecast.html'));

});

//sends forecastResultContainer.html when requested
app.get('/pages/forecastResultContainer.html',function(req,res){

    res.sendFile(path.join(__dirname + '/public/pages/forecastResultContainer.html'));

});

//sends homepage.js when requested
app.get('/js/controllers/homepageController.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/controllers/homepageController.js'));

});

//sends app.js when requested
app.get('/js/controllers/forecastController.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/controllers/forecastController.js'));

});

//sends searchResult.js when requested
app.get('/js/directives/searchResult.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/directives/searchResult.js'));

});
//sends weatherService.js when requested
app.get('/js/services/weatherService.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/services/weatherService.js'));

});
//sends app.js when requested
app.get('/js/app.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/app.js'));

});

//sends app.js when requested
app.get('/css/main.css',function(req,res){

    res.sendFile(path.join(__dirname + '/public/css/main.css'));

});
*/




