'use strict';

angular.module('bucleApp.licenses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/licenses', {
    templateUrl: 'licenses/licenses.html',
    controller: 'LicensesCtrl'
  });
}])

.controller('LicensesCtrl', [
  '$location',
  '$scope',
  '$window',
  'Licenses',
  function($location, $scope, $window, Licenses) {

    $window.scrollTo(0, 0);

    $scope.licenses = Licenses;

    $scope.goLicense = function (link) {
      $window.open(link, '_blank');
    };

}]);
