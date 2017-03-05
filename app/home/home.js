'use strict';

angular.module('bucleApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [
  '$location',
  '$scope',
  '$window',
  'Page',
  'Poems',
  function($location, $scope, $window, Page, Poems) {
    $scope.page = 1;
    $scope.poems = Poems.slice(0, $scope.page * Page.elements);
    $scope.bgPattern = '../img/bg.png';

    var showNext = function () {
      return Poems.length > $scope.page * Page.elements;
    };
    $scope.showNext = showNext ();
    $scope.goArchives = function () {
      $location.path('archives');
    };
    $scope.goPoem = function (id) {
      $location.path('poem/' + id);
    };
    $scope.goNext = function (page) {
      $scope.page += 1;
      $scope.poems = Poems.slice(0, $scope.page * Page.elements);
      $scope.showNext = showNext ();
      var pos = (window.innerHeight - 40) * ($scope.page * Page.elements - 4);
      $window.scrollTo(0, pos);
    };
}]);
