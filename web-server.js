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
app.get('/directives/forecastResultContainer.html',function(req,res){

    res.sendFile(path.join(__dirname + '/public/directives/forecastResultContainer.html'));

});

//sends app.js when requested
app.get('/js/app.js',function(req,res){

    res.sendFile(path.join(__dirname + '/public/js/app.js'));

});

app.listen(3000);

console.log('NodeJS - Listening in port 3000');



