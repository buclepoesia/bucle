'use strict';

angular.module('bucleApp.core')

.service('Cc', [
  'CC',
  function (CC) {
    return {
      get: function (type) {
        var license = CC.filter( function(obkLicense) {
          return obkLicense.type == type;
        });
        return license[0];
      }
    }
  }
]);
