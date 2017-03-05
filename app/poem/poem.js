'use strict';

angular.module('bucleApp.poem', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/poem/:id', {
    templateUrl: 'poem/poem.html',
    controller: 'PoemCtrl'
  });
}])

.controller('PoemCtrl', [
  '$location',
  '$routeParams',
  '$scope',
  '$window',
  'Poems',
  function($location, $routeParams, $scope, $window, Poems) {
    $window.scrollTo(0, 0);

    var id = parseInt($routeParams.id);
    var poem = Poems.filter( function(obj) {
      return obj.id == id;
    });
    var index = Poems.map(function(obj) {
      return obj.id;
    }).indexOf(id);
    var indexPrevious = index === Poems.length - 1 ? 0 : index + 1;
    var indexNext = index === 0 ? Poems.length - 1 : index - 1;
    $scope.poem = poem[0];
    $scope.poemPrevious = Poems[indexPrevious];
    $scope.poemNext = Poems[indexNext];

    $scope.goPoem = function (id) {
      $location.path('poem/' + id);
    };
}]);
