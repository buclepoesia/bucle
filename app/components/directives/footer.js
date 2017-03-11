'use strict';

angular.module('bucleApp.core')

.directive('customFooter', [
  function () {
    return {
      templateUrl: 'components/templates/footer.html',
      replace: true
    };
  }
])

.directive('mainFooter', [
  function () {
    return {
      templateUrl: 'components/templates/main-footer.html',
      link: function(scope, element, attrs) {
        scope.date = new Date();
      },
      replace: true
    };
  }
]);
