'use strict';

angular.module('bucleApp.core')

.directive('ccElement', [
  '$sce',
  'Cc',
  'Writers',
  function ($sce, Cc, Writers) {
    return {
      templateUrl: 'components/templates/cc.html',
      link: function(scope, element, attrs) {
        scope.work = JSON.parse(attrs.work);
        scope.license = Cc.get(scope.work.license);
        var writerId = scope.work.writerId;
        var writer = Writers.filter( function(writerObj) {
          return writerObj.id == writerId;
        });
        writer = writer[0];
        var html = scope.license.html;
        html = html.replace("{{TITLE}}", scope.work.title);
        html = html.replace("{{AUTHOR}}", writer.name);
        html = html.replace("{{AUTHOR_URL}}", writer.url);
        scope.html = $sce.trustAsHtml(html);
      },
      replace: true
    };
  }
]);
