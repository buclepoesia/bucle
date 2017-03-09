'use strict';

angular.module('bucleApp.core')

.service('Device', [
  function () {
    var md = new MobileDetect(window.navigator.userAgent);
    return {
      isMobile: function () {
        return (md.mobile() ? true : false);
      },
      getSrc: function (src) {
        if (md.mobile()) {
          var splitted = src.split('/');
          splitted[1] = 'mobile-' + splitted[1];
          src = splitted.join('/');
        }
        return src;
      }
    }
  }
]);
