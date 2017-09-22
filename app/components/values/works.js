'use strict';
angular.module('bucleApp.core')

.constant('Works', [
  {
    id: "conspirar-contra-la-rutina-es-pasar-por-un-puente-sin-agua",
    title: "conspirar contra la rutina es pasar por un puente sin agua",
    writerId: "mat",
    date: "2 de septiembre 2017",
    img: "img/la-magnitud.jpg",
    license: "by-nc-nd",
    poems: [
      {
        id: "como-dos-feriados",
        title: "como dos feriados",
        poem: [
          [
            "llegar a casa",
            "a horario",
            "cuesta caro"
          ]
        ]
      },
      {
        id: "de-pura-lluvia",
        title: "de pura lluvia",
        poem: [
          [
            "la tarde ",
            "es un sol",
            "que te interpela",
            "paralelo a los ojos",
            "como si por primera vez",
            "estuvieras frente a frente",
            "con vos mismo"
          ],
        ]
      },
      {
        id: "de-accion-inhospita",
        title: "de acción inhóspita",
        poem: [
          [
            "rebelarse es",
            "recitar el abecedario",
            "al revés"
          ]
        ]
      }
    ]
  }
]);
