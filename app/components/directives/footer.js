'use strict';

angular.module('bucleApp.core')

.directive('customFooter', [
  function () {
    return {
      templateUrl: 'components/templates/footer.html',
      replace: true
    };
  }
]);
