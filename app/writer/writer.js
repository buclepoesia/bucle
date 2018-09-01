'use strict';

angular.module('bucleApp.writer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/writer/:id', {
    templateUrl: 'writer/writer.html',
    controller: 'WriterCtrl'
  });
}])

.controller('WriterCtrl', [
  '$location',
  '$routeParams',
  '$scope',
  '$window',
  'Poems',
  'Writers',
  function($location, $routeParams, $scope, $window, Poems, Writers) {
    $window.scrollTo(0, 0);

    var writerId = $routeParams.id;
    var writer = Writers.filter( function(writerObj) {
      return writerObj.id == writerId;
    });
    $scope.writer = writer[0];

    $scope.getPoem = function (poemId) {
      var poem = Poems.filter( function(poemObj) {
        return poemObj.id == poemId;
      });
      return poem[0];
    };

    $scope.goPoem = function (id) {
      var poem = $scope.getPoem(id);
      if (poem.isPoetryBook) {
        $location.path('work/' + poem.id);
      } else {
        $location.path('text/' + poem.id);
      }
    };
}]);
