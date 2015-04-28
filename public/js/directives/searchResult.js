/**
 * Created by Alex on 4/25/2015.
 */


//Directives
weatherApp.directive('searchResult',['weatherService',function(weatherService){


    return {

        templateUrl: 'pages/forecastResultContainer.html',
        scope: {

            weatherDay: '=',
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@",
            weatherImgLink: "=",
            numberOfDays: "="

        },
        restrict:  'E',
        replace: false

    };


}]);
