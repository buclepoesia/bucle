'use strict';
angular.module('bucleApp.core')

.directive('fullSize', [
  '$window',
  function($window) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = $window.innerHeight;
        angular.element($window).bind('resize', function () {
          height = $window.innerHeight;
          iElm.css('height', height + 'px');
          $scope.$digest();
        });
        iElm.css('height', height + 'px');
      }
    };
  }
]);
