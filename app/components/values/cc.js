'use strict';
angular.module('bucleApp.core')

.constant('CC', [
  {
    type: 'by-nc-nd',
    html: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">{{TITLE}}</span> por <a xmlns:cc="http://creativecommons.org/ns#" href="{{AUTHOR_URL}}" property="cc:attributionName" rel="cc:attributionURL">{{AUTHOR}}</a> se distribuye bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Licencia Creative Commons Atribución-NoComercial-SinDerivar 4.0 Internacional</a>.',
  },
  {
    type: 'by-sa',
    html: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">{{TITLE}}</span> por <a xmlns:cc="http://creativecommons.org/ns#" href="{{AUTHOR_URL}}" property="cc:attributionName" rel="cc:attributionURL">{{AUTHOR}}</a> se distribuye bajo una <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional</a>.',
  }
]);
