'use strict';

angular.module('bucleApp.works', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/works', {
    templateUrl: 'works/works.html',
    controller: 'WorksCtrl'
  });
}])

.controller('WorksCtrl', [
  '$location',
  '$scope',
  '$window',
  'Works',
  function($location, $scope, $window, Works) {
    $window.scrollTo(0, 0);

    $scope.works = Works;

    $scope.goWork = function (id) {
      $location.path('work/' + id);
    };
}]);
