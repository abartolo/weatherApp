/**
 * Created by Alex on 4/25/2015.
 */

//cityService
weatherApp.service('weatherService',['$resource',function($resource){

    var self = this;

    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        { callback: 'JSON_CALLBACK'},
        { get: { method: 'JSONP'}}
    );

    this.city = "";


    this.getWeatherResult = function(cityName,forecastDays) {

        return weatherAPI.get({
            q: cityName,
            cnt: forecastDays
        });
    };

    this.getWeatherIconApiByNumber = function(imgNumber){
        return 'http://openweathermap.org/img/w/' + imgNumber + '.png';
    };

    this.getWeatherIconApiUrl = 'http://openweathermap.org/img/w/';



}]);