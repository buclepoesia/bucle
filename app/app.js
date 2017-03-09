'use strict';

// Declare app level module which depends on views, and components
angular.module('bucleApp', [
  'ngParallax',
  'ngRoute',
  'bucleApp.archives',
  'bucleApp.core',
  'bucleApp.home',
  'bucleApp.poem',
  'bucleApp.writer'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
