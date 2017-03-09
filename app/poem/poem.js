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
  'Device',
  'Poems',
  'Writers',
  function($location, $routeParams, $scope, $window, Device, Poems, Writers) {
    $window.scrollTo(0, 0);

    var id = parseInt($routeParams.id);
    var poem = Poems.filter( function(objPoem) {
      return objPoem.id == id;
    });
    $scope.poem = poem[0];

    var writer = Writers.filter( function(objWriter) {
      return objWriter.id == $scope.poem.writer;
    });
    $scope.writer = writer[0];

    var index = Poems.map(function(obj) {
      return obj.id;
    }).indexOf(id);

    var indexPrevious = index === Poems.length - 1 ? 0 : index + 1;
    var indexNext = index === 0 ? Poems.length - 1 : index - 1;
    $scope.poemPrevious = Poems[indexPrevious];
    $scope.poemNext = Poems[indexNext];

    $scope.getSrc = function (src) {
      return Device.getSrc(src);
    };
    $scope.goPoem = function (poemId) {
      $location.path('poem/' + poemId);
    };
    $scope.goWriter = function (writerId) {
      $location.path('writer/' + writerId);
    };
}]);
