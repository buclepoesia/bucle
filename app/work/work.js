'use strict';

angular.module('bucleApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work/:id', {
    templateUrl: 'work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', [
  '$anchorScroll',
  '$location',
  '$routeParams',
  '$scope',
  '$window',
  'Works',
  'Writers',
  function($anchorScroll, $location, $routeParams, $scope, $window, Works, Writers) {
    $window.scrollTo(0, 0);

    var id = $routeParams.id;
    var work = Works.filter( function(objWork) {
      return objWork.id == id;
    });
    $scope.work = work[0];

    var writerId = $scope.work.writerId;
    var writer = Writers.filter( function(writerObj) {
      return writerObj.id == writerId;
    });
    $scope.writer = writer[0];

    $scope.goPoem = function(poemId) {
      $location.hash(poemId);
    };

    $scope.goWriter = function (writerId) {
      $location.path('writer/' + writerId);
    };
}]);
