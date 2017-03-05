'use strict';
angular.module('bucleApp.core')

.directive('fullSize', [function() {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var height = screen.height - 80;
        var width = screen.width;
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
        var height = screen.height - 40;
        var width = screen.width;
        iElm.css('height', height + 'px');
        // iElm.css('width', width + 'px');
      }
    };
  }
]);
