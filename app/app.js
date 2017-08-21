'use strict';

/* Global variables */
var Global_OMDb_API = {};
Global_OMDb_API.url = 'http://www.omdbapi.com/?s=';
Global_OMDb_API.key = '62171b8b';

var OMDbSearch = angular.module("OMDbSearch", [
    'ngRoute'
]);

/* App configurations */
OMDbSearch.config(function($routeProvider, $locationProvider) {
    /* Routing */
    $routeProvider
        .when('/', {
            controller: 'SearchCtrl',
            templateUrl: 'views/templates/search.html'
        })
        .otherwise({
            redirectTo: '/'
        })

    $locationProvider.html5Mode(true).hashPrefix('!');
});
