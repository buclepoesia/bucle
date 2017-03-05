'use strict';
angular.module('bucleApp.core')

.directive('fullSize', [function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight;
        var width = window.innerWidth;
        iElm.css('height', height + 'px');
        // iElm.css('width', width + 'px');
      }
    };
  }
])

.directive('fullSize2', [function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = window.innerHeight - 40;
        var width = window.innerWidth;
        iElm.css('height', height + 'px');
        // iElm.css('width', width + 'px');
      }
    };
  }
]);
