/**
 * Created by erlend on 06.01.2016.
 */
// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var App = angular.module('App', ['ngRoute']);

// configure our routes
App.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/hjem.html',
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html'
        })

        .when('/forprosjekt', {
            templateUrl : 'pages/forprosjekt.html'
        })

        .when('/case_veidekke', {
            templateUrl : 'pages/case_veidekke.html'
        })

        .when('/kontor', {
            templateUrl : 'pages/kontor.html'
        })

        .when('/produkter', {
            templateUrl : 'pages/produkter.html'
        })

        .when('/konferanserom', {
            templateUrl : 'pages/konferanserom.html'
        })

        .when('/reklamefremvisning', {
            templateUrl : 'pages/reklamefremvisning.html'
        })

        .when('/digitale_logoskilt', {
            templateUrl : 'pages/digitale_logoskilt.html'
        })

        .when('/digitale_veiskilt', {
            templateUrl : 'pages/digitale_veiskilt.html'
        })

        .when('/nye_losninger', {
            templateUrl : 'pages/digitale_veiskilt.html'
        })

        .when('/integrasjon', {
            templateUrl : 'pages/integrasjon.html'
        });

    // route for the contact pag
});

// create the controller and inject Angular's $scope
App.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.date = new Date();


    $scope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) { //resets scroll on route change!
        window.scrollTo(0, 0);
    });

});



