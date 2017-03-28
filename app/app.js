'use strict';

// Declare app level module which depends on views, and components
angular.module('bucleApp', [
  'ngAnimate',
  'ngParallax',
  'ngRoute',
  'angular-click-outside',
  'bucleApp.core',
  'bucleApp.home',
  'bucleApp.poem',
  'bucleApp.project',
  'bucleApp.texts',
  'bucleApp.writer',
  'bucleApp.writers'
])
.config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
