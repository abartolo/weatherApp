/**
 * Created by Alex on 4/25/2015.
 */
//Controllers
weatherApp.controller('homepageController',['$scope', '$resource', '$location','weatherService',function($scope,$resource,$location,weatherService){
    $scope.cityName = "";

    //No need since we are only changing value when we click search. We always want input to be empty when the page is loaded.
    //$scope.$watch('cityName',function(){
    //      weatherService.city = $scope.cityName;
    //});
    $scope.goToForecast = function(){
        weatherService.city = $scope.cityName;
        $location.path('/forecast');
    };
}]);