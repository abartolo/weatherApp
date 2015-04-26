/**
 * Created by Alex on 4/25/2015.
 */
weatherApp.controller('forecastController',['$scope','$resource', '$filter', '$routeParams','weatherService',function($scope,$resource, $filter,$routeParams,weatherService){
    $scope.cityName = weatherService.city;
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