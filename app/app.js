'use strict';

// Declare app level module which depends on views, and components
angular.module('bucleApp', [
  'ngAnimate',
  'ngMeta',
  'ngParallax',
  'ngRoute',
  'angular-click-outside',
  'fox.scrollReveal',
  'bucleApp.core',
  'bucleApp.home',
  'bucleApp.licenses',
  'bucleApp.text',
  'bucleApp.project',
  'bucleApp.texts',
  'bucleApp.work',
  'bucleApp.works',
  'bucleApp.writer',
  'bucleApp.writers'
])
.config([
  '$locationProvider',
  '$routeProvider',
  'ngMetaProvider',
  function($locationProvider, $routeProvider, ngMetaProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});

    ngMetaProvider.useTitleSuffix(true);
    ngMetaProvider.setDefaultTitle('Bucle');
    ngMetaProvider.setDefaultTitleSuffix(' | Bucle Poesía');
    ngMetaProvider.setDefaultTag('description', 'Poesía de cultura libre');
    ngMetaProvider.setDefaultTag('author', 'Bucle Poesía');
    ngMetaProvider.setDefaultTag('keywords', 'Bucle, Poesía, Poema, Poetry, Poems, Literatura, Letras, Cultura, Cultura Libre, Creative commons');
}])
.run([
  'ngMeta',
  function(ngMeta) {
    ngMeta.init();
}]);;
