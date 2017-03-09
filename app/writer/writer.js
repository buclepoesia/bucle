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
  'Writers',
  function($location, $routeParams, $scope, $window, Writers) {
    $window.scrollTo(0, 0);

    var id = parseInt($routeParams.id);
    var writer = Writers.filter( function(obj) {
      return obj.id == id;
    });
    $scope.writer = writer[0];
}]);
