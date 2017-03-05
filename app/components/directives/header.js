'use strict';
angular.module('bucleApp.core')

.directive('customHeader', [
  function () {
    return {
      templateUrl: 'components/templates/header.html',
      replace: true
    };
  }
]);
