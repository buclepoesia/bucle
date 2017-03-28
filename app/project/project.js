'use strict';

angular.module('bucleApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: 'project/project.html',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', [
  '$location',
  '$scope',
  '$window',
  'Writers',
  function($location, $scope, $window, Writers) {
    $window.scrollTo(0, 0);

    $scope.writers = Writers;

    $scope.goPoem = function (id) {
      $location.path('writer/' + id);
    };
}]);
