'use strict';

angular.module('bucleApp.writers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/writers', {
    templateUrl: 'writers/writers.html',
    controller: 'WritersCtrl'
  });
}])

.controller('WritersCtrl', [
  '$location',
  '$scope',
  '$window',
  'Writers',
  function($location, $scope, $window, Writers) {
    $window.scrollTo(0, 0);

    $scope.writers = Writers;
    console.log(  $scope.writers)

    $scope.goPoem = function (id) {
      $location.path('writer/' + id);
    };
}]);
