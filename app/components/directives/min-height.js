'use strict';
angular.module('bucleApp.core')

.directive('minHeight', [function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight;
        console.log(height)
        var minHeight = height - height*0.2 - 115 - 108;
        iElm.css('min-height', minHeight + 'px');
      }
    };
  }
]);
