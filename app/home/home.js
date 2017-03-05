'use strict';

angular.module('bucleApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [
  '$anchorScroll',
  '$location',
  '$scope',
  'Poems',
  function($anchorScroll, $location, $scope, Poems) {
    $scope.page = 1;
    $scope.poems = Poems.slice(0, $scope.page*5);

    $scope.goArchives = function () {
      $location.path('archives');
    };
    $scope.goPoem = function (id) {
      $location.path('poem/' + id);
    };
    $scope.goNext = function (page) {
      $scope.page += 1;
      $scope.poems = Poems.slice(0, $scope.page*5);
      // $location.hash(2);
    };
}]);
