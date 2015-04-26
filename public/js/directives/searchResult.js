/**
 * Created by Alex on 4/25/2015.
 */


//Directives
weatherApp.directive('searchResult',function(){


    return {

        templateUrl: 'pages/forecastResultContainer.html',
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
