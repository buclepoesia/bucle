'use strict';

angular.module('bucleApp.core')

.directive('isMobile', [
  'Device',
  function (Device) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        if (Device.isMobile()) {
          angular.element(element).addClass('is-mobile');
        }
      }
    };
  }
]);
