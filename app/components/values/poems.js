'use strict';
angular.module('bucleApp.core', [])

.constant('Poems', [
  {
    id: "la-magnitud",
    title: "la magnitud",
    writerId: "mat",
    img: "img/la-magnitud.jpg",
    date: "2 de septiembre 2017",
    license: "by-nc-nd",
    poem: [
      [
        "la montaña",
        "es una frazada que reposa",
        "conteniendo el aire"
      ],
      [
        "los árboles",
        "enredaderas",
        "trepan y mueren",
        "progresivamente",
        "en la escalada"
      ],
      [
        "avanzan arbustos",
        "un cordón de estrellas",
        "que se dan a la fuga"
      ],
      [
        "yuyos reptan",
        "enmudecen",
        "someten a las piedras",
        "se ubican entre medio"
      ],
      [
        "en la cima",
        "rocas",
        "deambulan",
        "retuercen",
        "rechinan",
        "increpan al sol",
        "y la noche",
        "serán vistas",
        "hasta ser divididas",
      ]
    ]
  },
  {
    id: "la-noche-llega",
    writerId: "mat",
    title: "la noche llega",
    img: "img/la-noche-llega.jpeg",
    date: "2 de julio 2017",
    license: "by-nc-nd",
    poem: [
      [
        "se acuesta",
        "sobre las piedras",
        "con el viento",
        "que inclina",
        "las llamas",
        "y el humo"
      ],
      [
        "las hojas",
        "de eucalipto",
        "sobre los leños",
        "con el arroyo",
        "que acompaña",
        "la bajada del cerro"
      ],
      [
        "podemos cruzar",
        "el valle",
        "con la mirada",
        "bordear",
        "con los dedos",
        "la figura",
        "del otro cerro"
      ],
      [
        "podemos curvar",
        "la vía láctea",
        "unir los extremos",
        "con la luz",
        "oscura",
        "de la luna"
      ],
      [
        "así",
        "hasta que",
        "empiece el día",
        "pensemos",
        "en volver",
        "para cruzar",
        "varias calles",
        "llenar la heladera",
        "responder el correo",
        "unir",
        "con los dedos",
        "el cerro",
        "y la ciudad"
      ],
    ]
  },
  {
    id: "piso-doce",
    writerId: "mat",
    title: "piso doce",
    img: "img/piso-doce.jpeg",
    date: "12 de junio 2017",
    license: "by-nc-nd",
    poem: [
      [
        "abre la puerta",
        "la pintura fresca",
        "la habitación vacía",
        "el aire es un cubo",
        "lo llaman",
        "la primer noche de un pueblo en extinción",
      ]
    ]
  },
  {
    id: "bondi",
    writerId: "mat",
    title: "Bondi",
    img: "img/bondi.jpg",
    date: "2 de marzo 2017",
    license: "by-nc-nd",
    poem: [
      [
        "El espacio a la espera del bondi",
        "lo llamo la sombra del naranjo."
      ]
    ]
  },
  {
    id: "antes",
    writerId: "mat",
    title: "Antes",
    img: "img/antes.jpeg",
    date: "22 de febrero 2017",
    license: "by-sa",
    poem: [
      [
        "Hace 150 años",
        "sólo había pasto."
      ]
    ]
  },
  {
    id: "en-la-medianera",
    writerId: "mat",
    title: "En la medianera",
    img: "img/en-la-medianera.jpeg",
    date: "15 de febrero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "Un fernet en la terraza,",
        "mitad de botella recortada,",
        "los antebrazos en la medianera,",
        "los ojos en los dos."
      ]
    ]
  },
  {
    id: "capaz-de-sobrevivir",
    writerId: "mat",
    title: "Capaz de sobrevivir",
    img: "img/capaz-de-sobrevivir.jpg",
    date: "4 de febrero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "Entonces",
        "lo que me vino a la mente",
        "fueron unas imagenes",
        "diminutas",
        "terrestriales",
        "el pibe limpiando vidrios",
        "la señora del perro",
        "la piba del bondi."
      ],
      [
        "En el pueblo",
        "todos tienen nombre",
        "acá no."
      ],
      [
        "Entonces",
        "tomamos algo",
        "vimos una peli",
        "al té no le puse azúcar",
        "y hablamos",
        "hasta que la ventana",
        "se hizo grande",
        "el sol espeso."
      ],
      [
        "Menos mal que estás acá",
        "no te fuiste",
        "ya sé",
        "hay veces que la pasas mal",
        "quisieras aplastarlos",
        "pero sos",
        "como un universo."
      ],
      [
        "La muerte",
        "te hubiera quedado",
        "ridícula."
      ]
    ]
  },
  {
    id: "es-el-rey",
    writerId: "mat",
    title: "Es el rey",
    img: "img/es-el-rey.jpg",
    date: "28 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "El sol aparece",
        "detrás de la montaña.",
        "Es el amanecer."
      ],
      [
        "Nosotros lo llamamos",
        "el palacio de la condena."
      ]
    ]
  },
  {
    id: "malpaso-es-tu-nuevo-nombre",
    writerId: "mat",
    title: "malpaso es tu nuevo nombre",
    img: "img/malpaso-es-tu-nuevo-nombre.jpeg",
    date: "19 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "el sol nos pegaba",
        "fuerte en los ojos",
        "entendimos:",
        "en la distancia",
        "sigue siendo grande",
      ],
      [
        "después",
        "nos quedamos sin voz",
        "por estar en silencio"
      ],
      [
        "llegó la lluvia",
        "no tuvimos sed"
      ],
      [
        "hicimos la noche",
        "en un refugio",
        "era de ramas",
        "malpaso ya estaba dentro",
        "nos dijo:",
        "la fiebre",
        "todavía",
        "no les llegó a la cabeza",
        "descansen tranquilos"
      ],
      [
        "prendimos fuego nuestras cosas",
        "para tener",
        "luz",
        "nos vimos con malpaso",
        "frente a frente",
        "no nos corrió la mirada",
        "se fue",
        "quedaron sus huellas",
        "el vaso con que tomó de nosotros",
        "un hueco en la tierra",
        "es como si siguiera",
        "estando"
      ],
      [
        "me dijiste:",
        "vi morir sueños ",
        "en mis brazos",
        "la absolución",
        "nos está quebrando",
        "recuerdas como nos envolvía",
        "los ojos",
        "los hombros",
        "como desplegaba",
        "sus alas",
        "desprotectoras",
        "como la enviamos",
        "colina abajo"
      ],
      [
        "hay esperanza",
        "en alguna parte",
        "donde las flores",
        "crecen debajo",
        "de la tierra",
        "escuchame:",
        "por qué tenés",
        "los ojos tan quemados",
        "seguís viendo",
        "el mismo incendio",
      ],
      [
        "hace tiempo",
        "fuimos creativos",
        "cuando le rompimos la cara",
        "a malpaso",
        "le dijiste:",
        "no puedo llevarte a casa",
        "así sangrando",
      ],
      [
        "mientras pisamos",
        "el suelo mojado",
        "le metimos un dedo ",
        "en el ojo",
        "nos dijo:",
        "aún los amo",
        "y caímos al piso",
        "inmovilizados",
        "vimos como las hormigas",
        "se llevan nuestros rostros"
      ]
    ]
  },
  {
    id: "dialogo-de-dos-tormentas",
    writerId: "mat",
    title: "diálogo de dos tormentas",
    img: "img/dialogo-de-dos-tormentas.jpeg",
    date: "15 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "me dijo:",
        "qué harías después",
        "de una pequeña",
        "excursión",
        "al infierno",
        "qué sería",
        "el regreso",
        "después de tener",
        "la sangre hervida",
        "después de conocer",
        "la ebullición"
      ],
      [
        "le dije:",
        "caminaría",
        "sobre nuestro monte",
        "sería una pared",
        "que condensaría",
        "lo que quede",
        "de nuestros cuerpos",
        "al volver",
        "vería tu superficie",
        "fría",
        "estable",
        "desearía",
        "sumergirme",
        "en una gran tormenta",
        "de arena"
      ],
      [
        "me dijo:",
        "miraría tus pies cortados",
        "desde abajo",
        "la gravedad",
        "podría",
        "conectarme",
        "a tu",
        "elevación",
        "pero esa",
        "es una fuerza",
        "que no nos conoce",
        "nos prohíbe ser",
        "la órbita del otro",
        "serás el errante"
      ],
      [
        "le dije:",
        "qué harías después",
        "de una pequeña",
        "excursión",
        "a la locura"
      ],
      [
        "me dijo:",
        "ya fuimos",
        "volvimos",
        "mil veces",
        "esta vez",
        "será un nuevo",
        "emprendimiento",
        "ya nunca verás",
        "con que vendré",
        "de este viaje",
        "allá nada se pierde",
        "y al volver",
        "quizá",
        "haya alguna",
        "sombra",
        "de nubes de arenas",
        "no lo sabré"
      ],
      [
        "le dije:",
        "escucharía",
        "el eco",
        "tu respiración",
        "abundante",
        "como un fuelle",
        "desde lo profundo ",
        "de la montaña",
        "habré sabido",
        "de dónde se nutren ",
        "los manantiales del valle",
        "y el mar",
        "te habrá provisto",
        "de una sola certeza",
        "el oleaje ",
        "puede ser tu tortura"
      ]
    ]
  },
  {
    id: "ingravidez",
    writerId: "mat",
    title: "Ingravidez",
    img: "img/ingravidez.jpeg",
    date: "8 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "abre paso",
        "sobre el devenir",
        "del río",
        "flotando los hombros",
        "al otro lado",
        "los dedos de los pies ",
        "aparecen como un cerro",
        "en el valle",
        "sobre la superficie",
        "del río"
      ],
      [
        "los oídos",
        "debajo de la línea",
        "del río",
        "los brazos",
        "encierran",
        "cada uno",
        "una botella",
        "llena de aire",
        "el cuerpo flota",
        "en la dirección",
        "del río"
      ],
      [
        "las gotas de luz",
        "que amansan el cuerpo",
        "el viento",
        "como una brisa",
        "como una muerte tranquila",
        "una viaje",
        "de quien se ha abandonado",
        "un hielo que se hace agua",
        "un cuerpo que se hace río",
        "el silencio biológico",
        "que avanza en el cuerpo",
        "el mensaje",
        "que surca el agua",
        "como todo pasa",
        "como todo es olvido"
      ],
      [
        "unos pibes en cuero",
        "descalzos sobre el puente",
        "señalan el cuerpo que flota",
        "gritan los pibes",
        "levantan los brazos",
        "el cuerpo relajado",
        "ahora",
        "hace pie",
        "en el río",
        "les pasa las botellas",
        "llenas de aire",
        "para que el otro",
        "siga su viaje"
      ]
    ]
  },
  {
    id: "paisaje",
    writerId: "mat",
    title: "Paisaje",
    img: "img/paisaje.jpg",
    date: "5 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "así",
        "como si nada",
        "como si",
        "todo",
        "las horas",
        "pasan",
        "en carreta",
        "en el polvito",
        "levantándose",
        "en el fondo",
        "con la pesada",
        "lentitud",
        "del sigilo",
        "del agua",
        "mansa",
        "le devuelvo",
        "el mate",
        "para que vierta",
        "agua",
        "y le digo",
        "el río ",
        "debería llamarse",
        "como vos"
      ]
    ]
  },
  {
    id: "variacion",
    writerId: "mat",
    title: "Variación",
    img: "img/variacion.jpg",
    date: "1 de enero 2017",
    license: "by-nc-nd",
    poem: [
      [
        "en invierno",
        "el puente es grande",
        "el río chico"
      ],
      [
        "piedras",
        "secas",
        "la orilla",
        "lejos",
        "no se distinguen",
        "el agua",
        "de las algas"
      ],
      [
        "el río",
        "esa lágrima ",
        "espesa",
        "lenta",
        "que baja",
        "por el rostro",
        "arcilloso"
      ],
      [
        "escucho",
        "el río que viene",
        "y va",
        "le dicen",
        "el bote",
        "a remo",
        "de la vía láctea"
      ],
      [
        "después del invierno",
        "el puente es grande",
        "el río moja las piedras",
        "la orilla se acerca",
        "a las casas",
        "de los que viven cerca"
      ],
      [
        "el río",
        "el tren de burbujas",
        "que baña la costa",
        "como un silbido",
        "agudo estirado",
        "sobre la gran pared",
        "de arcilla"
      ],
      [
        "escucho el río que viene",
        "que lleva un tronco viejo ",
        "ahora le dicen",
        "la bici que viene en bajada"
      ],
      [
        "lejos está el invierno",
        "la seca temporada",
        "de películas en el cine",
        "de los bares sin cerveza helada",
        "de los pastos secos",
        "los árboles sin golondrinas",
        "el puente es tan grande",
        "el río se esmera en pasar por debajo",
        "le cuesta la correntada abandonar la fuerza",
        "las piedras miran la orilla por debajo",
        "escucho los troncos y las algas venir",
        "las casas que no saben resistir el río",
        "al río le dicen la gravedad anunciada",
        "la vía láctea que viene en bajada"
      ],
      [
        "después",
        "el invierno",
        "vuelve",
        "lo llaman",
        "el remanso"
      ]
    ]
  }
]);
