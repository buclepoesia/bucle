'use strict';
angular.module('bucleApp.core')

.directive('minHeight', [
  '$window',
  function($window) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight;
        var minHeight = height - 140 - 88 - 60;
        angular.element($window).bind('resize', function () {
          height = $window.innerHeight;
          minHeight = height - 140 - 88 - 60;
          iElm.css('min-height', minHeight + 'px');
          $scope.$digest();
        });
        iElm.css('min-height', minHeight + 'px');
      }
    };
  }
])

.directive('minHeightPoem', [
  '$window',
  function($window) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight;
        var minHeight = height - 100 - 88 - 60;
        angular.element($window).bind('resize', function () {
          height = $window.innerHeight;
          minHeight = height - 100 - 88 - 60;
          iElm.css('min-height', minHeight + 'px');
          $scope.$digest();
        });
        iElm.css('min-height', minHeight + 'px');
      }
    };
  }
]);
