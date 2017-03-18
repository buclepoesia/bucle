'use strict';
angular.module('bucleApp.core')

.constant('Writers', [
  {
    id: 1,
    name: 'Mat',
    img: '',
    description: [
      'La escritura es un hobby más, la mayoría de los textos surgen de diambular en algún taller de la Ciudad de Córdoba.',
      'Entre los textos también escribe código, software le dice.'
    ],
    texts: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  }
]);
