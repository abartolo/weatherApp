
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


//Controllers
weatherApp.controller('homepageController',['$scope', '$resource','cityService',function($scope,$resource,cityService){
    $scope.cityName = cityService.city;

    $scope.$watch('cityName',function(){
        cityService.city = $scope.cityName;
    });



}]);

weatherApp.controller('forecastController',['$scope','$resource', '$filter', '$routeParams','cityService',function($scope,$resource, $filter,$routeParams,cityService){
    $scope.cityName = cityService.city;
    $scope.days = $routeParams.days || '2';

    console.log($scope.days);

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        { callback: 'JSON_CALLBACK'},
        { get: { method: 'JSONP'}}
    );

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.cityName,
        cnt:$scope.days
    });

    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(date){
        //return $filter('date')(new Date(date * 1000));
        return new Date(date * 1000);
    };
}]);

//Services
weatherApp.service('cityService',function(){
    this.city = "Elizabeth,NJ";
});



//Directives
weatherApp.directive('searchResult',function(){


    return {

        templateUrl: 'directives/forecastResultContainer.html',
        scope: {

            weatherDay: '=',
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"

        },
        restrict:  'E',
        replace: true



    };


});




