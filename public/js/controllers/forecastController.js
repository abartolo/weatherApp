/**
 * Created by Alex on 4/25/2015.
 */
weatherApp.controller('forecastController',['$scope','$resource', '$filter', '$routeParams','weatherService',function($scope,$resource, $filter,$routeParams,weatherService){
    $scope.cityName = weatherService.city;
    $scope.days = $routeParams.days || '2';

    console.log($scope.days);


    $scope.weatherResult = weatherService.getWeatherResult($scope.cityName,$scope.days);

    $scope.weatherIconUrl = weatherService.getWeatherIconApiUrl;

    //Get URL to be passed to Directive. Directive will use NG- to display.

    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(date){
        //return $filter('date')(new Date(date * 1000));
        return new Date(date * 1000);
    };

}]);


