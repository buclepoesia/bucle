'use strict';

angular.module('bucleApp.archives', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/archives', {
    templateUrl: 'archives/archives.html',
    controller: 'ArchivesCtrl'
  });
}])

.controller('ArchivesCtrl', [
  '$location',
  '$scope',
  '$window',
  'Poems',
  function($location, $scope, $window, Poems) {
    $window.scrollTo(0, 0);

    $scope.poems = Poems;

    $scope.goPoem = function (id) {
      $location.path('poem/' + id);
    };
}]);
