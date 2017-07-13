'use strict';
angular.module('bucleApp.core')

.directive('animateOnChange', [
  '$timeout',
  function ($timeout) {
    return function(scope, element, attr) {
      scope.$watch(attr.animateOnChange, function(newValue, oldValue) {
        if (newValue != oldValue) {
          element.addClass('changed');
        }
      });
    };
  }
]);
