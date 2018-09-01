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
  'ngMeta',
  'Device',
  'Poems',
  'Works',
  'Writers',
  function($anchorScroll, $location, $routeParams, $scope, $window, ngMeta,
      Device, Poems, Works, Writers) {
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

    $scope.goPoemForThisWork = function(poemId) {
      $location.hash(poemId);
    };

    $scope.goWriter = function (writerId) {
      $location.path('writer/' + writerId);
    };

    ngMeta.setTitle($scope.work.title);
    ngMeta.setTag('author', $scope.writer.name);
    ngMeta.setTag('keywords', $scope.work.keywords);

    $scope.getSrc = function (src) {
      return Device.getSrc(src);
    };

    var index = Poems.map(function(obj) {
      return obj.id;
    }).indexOf(id);

    var indexPrevious = index === Poems.length - 1 ? 0 : index + 1;
    var indexNext = index === 0 ? Poems.length - 1 : index - 1;
    $scope.poemPrevious = Poems[indexPrevious];
    $scope.poemNext = Poems[indexNext];

    $scope.goPoem = function (poem) {
      if (poem.isPoetryBook) {
        $location.path('work/' + poem.id);
      } else {
        $location.path('text/' + poem.id);
      }
    };
}]);
