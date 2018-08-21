'use strict';

angular.module('bucleApp.text', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/text/:id', {
    templateUrl: 'text/text.html',
    controller: 'TexrCtrl'
  });
}])

.controller('TexrCtrl', [
  '$location',
  '$routeParams',
  '$scope',
  '$window',
  'ngMeta',
  'Device',
  'Poems',
  'Writers',
  function($location, $routeParams, $scope, $window, ngMeta, Device, Poems, Writers) {

    $window.scrollTo(0, 0);

    var id = $routeParams.id;
    var poem = Poems.filter( function(objPoem) {
      return objPoem.id == id;
    });
    $scope.poem = poem[0];

    var writer = Writers.filter( function(objWriter) {
      return objWriter.id == $scope.poem.writerId;
    });
    $scope.writer = writer[0];

    var index = Poems.map(function(obj) {
      return obj.id;
    }).indexOf(id);

    var indexPrevious = index === Poems.length - 1 ? 0 : index + 1;
    var indexNext = index === 0 ? Poems.length - 1 : index - 1;
    $scope.poemPrevious = Poems[indexPrevious];
    $scope.poemNext = Poems[indexNext];

    ngMeta.setTitle($scope.poem.title);
    ngMeta.setTag('author', $scope.writer.name);
    ngMeta.setTag('keywords', $scope.poem.keywords);

    $scope.getSrc = function (src) {
      return Device.getSrc(src);
    };
    $scope.goPoem = function (poemId) {
      $location.path('text/' + poemId);
    };
    $scope.goWriter = function (writerId) {
      $location.path('writer/' + writerId);
    };
}]);
