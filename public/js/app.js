
//MODULE
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);


//Routes
weatherApp.config(function($routeProvider){
    $routeProvider
        .when('/',{

            templateUrl: 'pages/homepage.html',
            controller: 'homepageController'
        })
        .when('/forecast/',{

            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days',{

            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });
});












