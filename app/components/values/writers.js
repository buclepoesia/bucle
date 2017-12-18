'use strict';
angular.module('bucleApp.core')

.constant('Writers', [
  {
    id: 'mat',
    name: 'Mat',
    url: 'https://buclepoesia.github.io/#!/writer/mat',
    img: '',
    description: [
      'La escritura es un hobby más, la mayoría de los textos surgen de diambular en algún taller de la Ciudad de Córdoba.',
      'Entre los textos también escribe código, software le dice.'
    ],
    texts: [
      "las-vertientes-multiversales",
      "3-de-noviembre",
      "la-magnitud",
      "la-noche-llega",
      "piso-doce",
      "bondi",
      "antes",
      "en-la-medianera",
      "capaz-de-sobrevivir",
      "es-el-rey",
      "malpaso-es-tu-nuevo-nombre",
      "dialogo-de-dos-tormentas",
      "ingravidez",
      "paisaje",
      "variacion"
    ]
  }
]);
