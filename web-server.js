/**
 * Created by Alex on 4/23/2015.
 * Description: This is should be the webserver for my NodeJS project.
 *  Running "node web-server.js" should start the server and on localhost be able
 *  to run my application
 */

var express = require('express');
var app = express();
var path = require('path');



//**********Routes*********
//sends index.html when requested
app.get('/',function(req,res){

    res.sendFile(path.join(__dirname + '/public/index.html'));

});

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
app.get('/js/app.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/app.js'));

});

app.listen(3000);

console.log('NodeJS - Listening in port 3000');



