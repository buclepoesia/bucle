'use strict';

angular.module('bucleApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [
  '$interval',
  '$location',
  '$scope',
  '$window',
  'Device',
  'Page',
  'Poems',
  'Quotes',
  function($interval, $location, $scope, $window, Device, Page, Poems, Quotes) {

    $window.scrollTo(0, 0);
    $scope.page = 1;
    $scope.poems = Poems.slice(0, $scope.page * Page.elements);
    $scope.homePattern = 'img/home.jpg';
    $scope.bgPattern = 'img/bg.jpeg';
    var quoteIndex = 1;
    $scope.quote = Quotes[0].quote;
    $scope.writer = Quotes[0].writer;

    $interval(function () {
      quoteIndex = Quotes.length === quoteIndex ? 0 : quoteIndex;

      $scope.quote = Quotes[quoteIndex].quote;
      $scope.writer = Quotes[quoteIndex].writer;
      quoteIndex += 1;
    }, 6000);

    var showNext = function () {
      return Poems.length > $scope.page * Page.elements;
    };

    $scope.showNext = showNext ();
    $scope.goTexts = function () {
      $location.path('texts');
    };

    $scope.goPoem = function (poem) {
      if (poem.isPoetryBook) {
        $location.path('work/' + poem.id);
      } else {
        $location.path('text/' + poem.id);
      }
    };

    $scope.goNext = function (page) {
      $scope.page += 1;
      $scope.poems = Poems.slice(0, $scope.page * Page.elements);
      $scope.showNext = showNext ();
      var pos = (window.innerHeight - 40) * ($scope.page * Page.elements - 4);
      $window.scrollTo(0, pos);
    };

    $scope.getSrc = function (src) {
      return Device.getSrc(src);
    };
}]);
