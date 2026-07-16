/ ==========================================================================
// NUTRIO - MÓDULO DE GIMNASIO — SOLO PESO CORPORAL (js/gym.js)
// ==========================================================================

// ---- Base de ejercicios de PESO CORPORAL con instrucciones ----
const GYM_EXERCISES = {
  pecho: [
    {
      id: 'pushup', name: 'Flexiones clásicas', icon: '💪', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Apoyá las palmas en el piso a la altura de los hombros, con el cuerpo recto como una tabla.',
        '<b>Bajada:</b> Flexioná los codos hasta que el pecho casi toque el piso. Los codos van a ~45° del cuerpo.',
        '<b>Subida:</b> Empujá fuerte hasta volver a la posición inicial. Apretá el pecho arriba del todo.',
        '<b>Tip:</b> Si es muy difícil, empezá con las rodillas apoyadas. Si es muy fácil, probá con los pies elevados.'
      ]
    },
    {
      id: 'pushup_wide', name: 'Flexiones abiertas', icon: '🦅', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Igual que la flexión clásica pero con las manos más anchas, ~1.5x el ancho de hombros.',
        '<b>Ejecución:</b> Bajá controlando y sentí cómo se estira el pecho. Subí apretando pectorales.',
        '<b>Beneficio:</b> Trabaja más la porción externa del pectoral y los deltoides anteriores.',
        '<b>Tip:</b> Mantené la cadera alineada, no la dejes caer ni la levantes demasiado.'
      ]
    },
    {
      id: 'diamond_pushup', name: 'Flexiones diamante', icon: '💎', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Manos juntas debajo del pecho, formando un diamante con los dedos índice y pulgar.',
        '<b>Ejecución:</b> Bajá lentamente y subí con control. Los codos van pegados al cuerpo.',
        '<b>Beneficio:</b> Enfatiza el tríceps y la porción interna del pectoral.',
        '<b>Tip:</b> Es más difícil que la flexión clásica. Si no podés hacer 10, empezá con menos repeticiones.'
      ]
    },
    {
      id: 'decline_pushup', name: 'Flexiones declinadas', icon: '⬆️', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Apoyá los pies en una silla, cama o escalón. Manos en el piso como en flexión clásica.',
        '<b>Ejecución:</b> Bajá y subí con control, manteniendo el cuerpo recto.',
        '<b>Beneficio:</b> Simula un press inclinado. Trabaja más la porción superior del pectoral.',
        '<b>Tip:</b> Cuanto más alto el soporte, más difícil. Empezá con algo bajo.'
      ]
    },
    {
      id: 'pike_pushup', name: 'Flexiones pike', icon: '🔺', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Desde posición de flexión, caminá los pies hacia las manos hasta que tu cuerpo forme una V invertida.',
        '<b>Ejecución:</b> Flexioná los codos llevando la coronilla hacia el piso y empujá de vuelta.',
        '<b>Beneficio:</b> Trabaja hombros (deltoides) de forma intensa sin equipo.',
        '<b>Tip:</b> Cuanto más vertical tu cuerpo, más hombro trabaja. Ajustá la inclinación a tu nivel.'
      ]
    }
  ],
  espalda: [
    {
      id: 'pullup', name: 'Dominadas', icon: '🔥', type: 'reps', defaultReps: 8, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Agarrá una barra o viga con las palmas mirando hacia adelante, manos un poco más anchas que los hombros.',
        '<b>Subida:</b> Tirá del cuerpo hacia arriba hasta que la barbilla pase la barra. Apretá los dorsales.',
        '<b>Bajada:</b> Bajá lento y controlado, estirando bien los dorsales arriba del todo.',
        '<b>Tip:</b> Si no podés hacer ninguna, usá una banda elástica de resistencia o hacé la versión australiana (ver abajo).'
      ]
    },
    {
      id: 'chinup', name: 'Chin-ups (supino)', icon: '💪', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Igual que la dominada pero con las palmas mirando hacia tu cara (agarre supino).',
        '<b>Ejecución:</b> Subí hasta que la barbilla pase la barra y bajá controlado.',
        '<b>Beneficio:</b> Trabaja más bíceps y el dorsal ancho con un rango diferente.',
        '<b>Tip:</b> Es generalmente más fácil que la dominada prona. Buena para empezar.'
      ]
    },
    {
      id: 'australian_pullup', name: 'Fila australiana', icon: '↔️', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Con una barra a la altura de la cintura (o usando una mesa estable), colgá el cuerpo debajo con los talones en el piso. El cuerpo debe quedar recto.',
        '<b>Ejecución:</b> Tirá del pecho hacia la barra apretando los omóplatos. Bajá controlado.',
        '<b>Beneficio:</b> Versión más fácil que la dominada. Ideal para principiantes.',
        '<b>Tip:</b> Cuanto más horizontal tu cuerpo, más difícil. Si es muy fácil, subí los pies a una silla.'
      ]
    },
    {
      id: 'inverted_row_high', name: 'Fila invertida alta', icon: '⬆️', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Igual que la fila australiana pero con la barra más alta (a la altura del pecho).',
        '<b>Ejecución:</b> Tirá del pecho hacia la barra, apretando los omóplatos juntos. Pausa 1 segundo arriba.',
        '<b>Beneficio:</b> Enfatiza la porción media de la espalda y los romboides.',
        '<b>Tip:</b> Mantené el core apretado y el cuerpo recto durante todo el movimiento.'
      ]
    },
    {
      id: 'superman_hold', name: 'Superman (isométrico)', icon: '🦸', type: 'time', defaultTime: 30, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca abajo, brazos extendidos hacia adelante.',
        '<b>Ejecución:</b> Levantá simultáneamente brazos, pecho y piernas del piso. Mantené la posición.',
        '<b>Beneficio:</b> Fortalece la espalda baja, glúteos y toda la cadena posterior sin impacto.',
        '<b>Tip:</b> Aprieta los glúteos para proteger la zona lumbar. Respirá normal.'
      ]
    }
  ],
  hombros: [
    {
      id: 'pike_pushup_sh', name: 'Pike pushup', icon: '🔺', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Flexión de puesta, pies caminados hacia las manos formando una V invertida.',
        '<b>Ejecución:</b> Flexioná los codos llevando la cabeza al piso entre las manos. Empujá de vuelta.',
        '<b>Beneficio:</b> El mejor ejercicio de peso corporal para deltoides anteriores.',
        '<b>Tip:</b> Mirá hacia las rodillas, no hacia las manos, para alinear la columna cervical.'
      ]
    },
    {
      id: 'handstand_hold', name: 'Pino contra la pared (isométrico)', icon: '🤸', type: 'time', defaultTime: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> De espaldas a una pared, apoyá las manos en el piso y caminás los pies por la pared hasta quedar vertical.',
        '<b>Ejecución:</b> Mantené la posición con el cuerpo recto, core apretado, brazos extendidos.',
        '<b>Beneficio:</b> Fortalece hombros, brazos y core de forma isométrica intensa.',
        '<b>Tip:</b> Empezá con tiempos cortos (10-15s). Usá una almohada debajo de la cabeza por seguridad.'
      ]
    },
    {
      id: 'lateral_raise_body', name: 'Elevaciones laterales (con elasto)', icon: '🦅', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, pisá el centro de una banda elástica. Tomá los extremos con las manos a los costados.',
        '<b>Ejecución:</b> Levantá los brazos a los costados hasta la altura de los hombros. Bajá lento.',
        '<b>Beneficio:</b> Aísla el deltoides lateral, el que más da ancho visual al hombro.',
        '<b>Tip:</b> Si no tenés banda elástica, usá botellas de agua de 1-2L en cada mano.'
      ]
    },
    {
      id: 'front_raise_body', name: 'Elevaciones frontales', icon: '➡️', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, con botellas de agua o banda elástica en las manos frente a los muslos.',
        '<b>Ejecución:</b> Levantá los brazos rectos al frente hasta la altura de los hombros. Bajá controlado.',
        '<b>Beneficio:</b> Trabaja el deltoides anterior. Complementa la elevación lateral.',
        '<b>Tip:</b> No uses demasiado peso; el hombro es delicado. Mejor más repeticiones con poco peso.'
      ]
    },
    {
      id: 'shrug_body', name: 'Encogimientos de hombros', icon: '⬆️', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado derecho, brazos a los costados. Podés sostener botellas o bolsas pesadas.',
        '<b>Ejecución:</b> Subí los hombros hacia las orejas como diciendo "no sé". Mantené 1 segundo arriba y bajá.',
        '<b>Beneficio:</b> Fortalece el trapecio superior y mejora la postura.',
        '<b>Tip:</b> No rotes los hombros hacia atrás ni adelante. Movimiento recto arriba y abajo.'
      ]
    }
  ],
  brazos: [
    {
      id: 'tricep_dip', name: 'Dips en silla/banco', icon: '🪑', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Apoyá las manos en el borde de una silla o banco, con los dedos hacia adelante. Piernas extendidas frente a vos.',
        '<b>Bajada:</b> Flexioná los codos hasta ~90°, bajando la cadera hacia el piso.',
        '<b>Subida:</b> Empujá hacia arriba apretando los tríceps. No uses las piernas para ayudarte.',
        '<b>Tip:</b> Si es muy difícil, doblá las rodillas y acercá los pies. Cuanto más lejos los pies, más difícil.'
      ]
    },
    {
      id: 'tricep_pushup', name: 'Flexiones tríceps (cerradas)', icon: '💪', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Igual que flexión clásica pero con las manos justo debajo de los hombros, codos pegados al cuerpo.',
        '<b>Ejecución:</b> Bajá manteniendo los codos pegados. Sentí cómo se quema el tríceps en la subida.',
        '<b>Beneficio:</b> Excelente aislamiento de tríceps con solo el peso del cuerpo.',
        '<b>Tip:</b> Si es muy difícil, hacelo desde las rodillas manteniendo los cientos pegados.'
      ]
    },
    {
      id: 'bicep_curl_body', name: 'Curl de bíceps (isométrico)', icon: '🏋️', type: 'time', defaultTime: 30, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, doblá el codo derecho a 90° con la palma hacia arriba. Poné la mano izquierda debajo del codo derecho.',
        '<b>Ejecución:</b> Intentá subir el codo derecho con toda tu fuerza. La mano izquierda lo impide (isometría).',
        '<b>Mantené 30 segundos por brazo, sintiendo cómo se quema el bíceps. Cambiá de brazo.',
        '<b>Tip:</b> También podés usar una banda elástica o botellas de agua para hacer curls normales.'
      ]
    },
    {
      id: 'hammer_curl_body', name: 'Curl martillo (con botellas)', icon: '🔨', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, sostené una botella de agua en cada mano con las palmas mirándose entre sí.',
        '<b>Ejecución:</b> Subí una botella hacia el hombro manteniendo el codo pegado al cuerpo. Bajá lento. Alterná.',
        '<b>Beneficio:</b> Trabaja el braquial y el bíceps braquial, dando más grosor al brazo.',
        '<b>Tip:</b> Llená las botellas con arena o agua para ajustar el peso. 1-2L por botella es un buen inicio.'
      ]
    },
    {
      id: 'diamond_pushup_bi', name: 'Flexiones diamante (tríceps)', icon: '💎', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Manos juntas bajo el pecho formando un diamante. Cuerpo recto.',
        '<b>Ejecución:</b> Bajá lentamente y empujá. Sentí el trabajo en el tríceps y la parte interna del pecho.',
        '<b>Beneficio:</b> Uno de los mejores ejercicios de peso corporal para tríceps.',
        '<b>Tip:</b> No abras los codos hacia afuera. Mantenelos pegados al cuerpo para proteger las articulaciones.'
      ]
    }
  ],
  piernas: [
    {
      id: 'squat', name: 'Sentadilla', icon: '🦵', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, pies al ancho de los hombros, puntas ligeramente hacia afuera.',
        '<b>Bajada:</b> Como si te sentaras en una silla. Rodillas siguen la línea de los pies. Bajá hasta que los muslos queden paralelos al piso (o más bajo si podés).',
        '<b>Subida:</b> Empujá con los talones y apretá los glúteos al subir.',
        '<b>Tip:</b> Mantené el pecho alto y la espalda recta. No dejes que las rodillas se vayan hacia adentro.'
      ]
    },
    {
      id: 'jump_squat', name: 'Sentadilla con salto', icon: '🚀', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Igual que la sentadilla normal.',
        '<b>Ejecución:</b> Bajá como en sentadilla, pero al subir explotá con un salto vertical. Aterrizá suavemente y volvé a bajar.',
        '<b>Beneficio:</b> Agrega potencia explosiva y trabaja más el cardio.',
        '<b>Tip:</b> Aterrizá con las rodillas ligeramente flexionadas para absorber el impacto. No hagas esto si tenés problemas de rodilla.'
      ]
    },
    {
      id: 'lunges', name: 'Zancadas', icon: '🚶', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado derecho, pies juntos.',
        '<b>Ejecución:</b> Da un paso grande hacia adelante con una pierna. Bajá la cadera hasta que ambas rodillas estén a ~90°. La rodilla trasera casi toca el piso. Volvé a pararte y cambiá de pierna.',
        '<b>Beneficio:</b> Excelente para cuádriceps, glúteos y equilibrio.',
        '<b>Tip:</b> Si te cuesta el equilibrio, hacé zancadas estáticas: alternás sin avanzar, subiendo y bajando.'
      ]
    },
    {
      id: 'reverse_lunges', name: 'Zancadas inversas', icon: '🔙', type: 'reps', defaultReps: 12, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado derecho, pies juntos.',
        '<b>Ejecución:</b> Da un paso hacia ATRÁS con una pierna y bajá la cadera. La rodilla delantera queda a 90°. Volvé a pararte y cambiá de pierna.',
        '<b>Beneficio:</b> Menos impacto en las rodillas que las zancadas normales. Trabaja glúteos y cuádriceps.',
        '<b>Tip:</b> Mantené el tronco erguido. Es excelente para principiantes y para quienes tienen molestias de rodilla.'
      ]
    },
    {
      id: 'calf_raise', name: 'Elevación de talones', icon: '🦶', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado en el borde de un escalón o superficie elevada, con los talones al aire.',
        '<b>Ejecución:</b> Subí lo más alto posible sobre las puntas de los pies. Pausa 1 segundo arriba. Bajá lentamente por debajo del nivel del escalón.',
        '<b>Beneficio:</b> Fortalece los gemelos y sóleos. Mejora la estabilidad del tobillo.',
        '<b>Tip:</b> Hacelo a una pierna por vez para más intensidad. Apoyate en una pared para equilibrio.'
      ]
    },
    {
      id: 'glute_bridge', name: 'Puente de glúteo', icon: '🌈', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca arriba, rodillas dobladas, pies apoyados en el piso al ancho de cadera.',
        '<b>Ejecución:</b> Aprieta los glúteos y levantá la cadera hasta que el cuerpo forme una línea recta de hombros a rodillas. Bajá controlado.',
        '<b>Beneficio:</b> Fortalece glúteos y isquios. Ayuda a mejorar la postura y reducir dolores lumbares.',
        '<b>Tip:</b> Para más dificultad, hacelo sobre una pierna sola o con una banda elástica encima de las rodillas.'
      ]
    },
    {
      id: 'wall_sit', name: 'Sentadilla contra la pared', icon: '🧱', type: 'time', defaultTime: 45, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Apoyá la espalda contra una pared y deslizate hasta que los muslos queden paralelos al piso (como sentarte en una silla invisible).',
        '<b>Ejecución:</b> Mantené la posición. Las rodillas deben estar a 90°. Respirá normal.',
        '<b>Beneficio:</b> Isométrico brutal para cuádriceps. Ideal para resistencia muscular.',
        '<b>Tip:</b> Poné una pelota entre las rodillas y apretá para sumar trabajo de aductores. Empezá con 30 segundos.'
      ]
    }
  ],
  core: [
    {
      id: 'plank', name: 'Plancha', icon: '🧘', type: 'time', defaultTime: 45, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Apoyá los antebrazos y las puntas de los pies en el piso. Cuerpo recto como una tabla.',
        '<b>Ejecución:</b> Aprieta el abdomen y los glúteos. Mantené la posición sin dejar que la cadera caiga o suba.',
        '<b>Beneficio:</b> Fortalece todo el core: recto abdominal, oblicuos, transverso y estabilizadores.',
        '<b>Tip:</b> Si es muy difícil, empezá apoyando las rodillas. Mirá un punto fijo en el piso frente a vos.'
      ]
    },
    {
      id: 'crunch', name: 'Crunch (encogimiento)', icon: '🔄', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca arriba, rodillas dobladas, pies en el piso. Manos detrás de la cabeza o cruzadas sobre el pecho.',
        '<b>Ejecución:</b> Levantá los hombros del piso contrayendo el abdomen. No tirés del cuello. Bajá controlado.',
        '<b>Beneficio:</b> Aísla el recto abdominal. Simple y efectivo.',
        '<b>Tip:</b> No levantes toda la espalda; solo los hombros. La punta baja de la espalda SIEMPRE queda apoyada.'
      ]
    },
    {
      id: 'leg_raise', name: 'Elevación de piernas', icon: '🦵', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca arriba, piernas rectas, manos debajo de los glúteos para apoyo.',
        '<b>Ejecución:</b> Levantá las piernas rectas hasta formar 90° con el torso. Bajá lento sin tocar el piso.',
        '<b>Beneficio:</b> Trabaja el recto abdominal inferior, una zona difícil de entrenar.',
        '<b>Tip:</b> Si te duele la espalda baja, doblá las rodillas. Mantené la zona lumbar pegada al piso.'
      ]
    },
    {
      id: 'russian_twist', name: 'Giro ruso', icon: '🔁', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Sentado en el piso, rodillas dobladas, torso levemente reclinado. Levantá los pies del piso (o apoyalos si es muy difícil).',
        '<b>Ejecución:</b> Girá el torso a un lado tocando el piso con ambas manos, luego al otro lado. Cada toque cuenta como 1 repetición.',
        '<b>Beneficio:</b> Trabaja oblicuos y transverso, mejorando la estabilidad rotacional.',
        '<b>Tip:</b> Para más dificultad, sostené una botella de agua con ambas manos mientras girás.'
      ]
    },
    {
      id: 'mountain_climb', name: 'Mountain climbers', icon: '⛰️', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Posición de flexión/plancha alta con brazos extendidos.',
        '<b>Ejecución:</b> Alterná llevando una rodilla al pecho rápidamente, como si correras en el lugar. Mantené la cadera baja.',
        '<b>Beneficio:</b> Cardio + core al mismo tiempo. Quema muchas calorías.',
        '<b>Tip:</b> Empezá lento y aumentá la velocidad. La clave es mantener la posición de plancha mientras movés las piernas.'
      ]
    },
    {
      id: 'dead_bug', name: 'Dead bug', icon: '🐛', type: 'reps', defaultReps: 16, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca arriba, brazos apuntando al techo, rodillas a 90° sobre las caderas.',
        '<b>Ejecución:</b> Extendé la pierna derecha y el brazo izquierdo al mismo tiempo, sin que toquen el piso. Volvé al centro y cambiá de lado.',
        '<b>Beneficio:</b> Entrena el core anti-rotacional. Muy seguro para la espalda baja.',
        '<b>Tip:</b> Lo más importante es mantener la zona lumbar PEGADA al piso durante todo el movimiento.'
      ]
    },
    {
      id: 'bicycle_crunch', name: 'Crunch en bicicleta', icon: '🚲', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Acostado boca arriba, manos detrás de la cabeza. Levantá las piernas con rodillas a 90°.',
        '<b>Ejecución:</b> Llevá el codo derecho a la rodilla izquierda mientras extendés la pierna derecha. Alterná girando el torso.',
        '<b>Beneficio:</b> Estudio científico lo ubica como uno de los mejores ejercicios para oblicuos.',
        '<b>Tip:</b> No tires del cuello. Es el torso el que gira, no los brazos. Más lento = más efectivo.'
      ]
    }
  ],
  cardio: [
    {
      id: 'burpees', name: 'Burpees', icon: '💥', type: 'reps', defaultReps: 10, defaultSets: 3,
      instructions: [
        '<b>Paso 1:</b> Parado, bajá a posición de sentadilla y poné las manos en el piso.',
        '<b>Paso 2:</b> Lanzá los pies hacia atrás para quedar en posición de flexión.',
        '<b>Paso 3:</b> Hacé una flexión (opcional pero recomendado).',
        '<b>Paso 4:</b> Traé los pies de vuelta hacia las manos.',
        '<b>Paso 5:</b> Saltá hacia arriba con los brazos arriba. Esa es 1 repetición.',
        '<b>Tip:</b> Es el ejercicio más completo sin equipo. Si es muy intenso, sacá el salto del paso 5.'
      ]
    },
    {
      id: 'jumping_jack', name: 'Jumping jacks', icon: '⭐', type: 'reps', defaultReps: 30, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, pies juntos, brazos a los costados.',
        '<b>Ejecución:</b> Salto abriendo las piernas más allá del ancho de hombros y al mismo tiempo levantá los brazos por encima de la cabeza. Volvé al centro con otro salto.',
        '<b>Beneficio:</b> Excelente calentamiento y trabajo cardiovascular de bajo impacto.',
        '<b>Tip:</b> Mantené un ritmo constante. Para bajo impacto, en vez de saltar, da un paso a cada lado.'
      ]
    },
    {
      id: 'high_knees', name: 'Rodillas altas', icon: '🏃', type: 'time', defaultTime: 30, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, pies al ancho de caderas.',
        '<b>Ejecución:</b> Corré en el lugar levantando las rodillas lo más alto posible (a la altura de la cadera o más). Usa los brazos como si corrieras.',
        '<b>Beneficio:</b> Cardio intenso que también trabaja flexores de cadera y core.',
        '<b>Tip:</b> Mantené el tronco erguido. No te inclines hacia adelante. Aumentá la velocidad progresivamente.'
      ]
    },
    {
      id: 'jump_rope', name: 'Cuerda para saltar (sin cuerda)', icon: '⏭️', type: 'time', defaultTime: 60, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado, pies juntos, rodillas ligeramente flexionadas. Simulá tener una cuerda.',
        '<b>Ejecución:</b> Saltá en el lugar con pequeños saltos, girando las muñecas como si tuvieras una cuerda. Mantené un ritmo constante.',
        '<b>Beneficio:</b> Cardio de alto impacto. Si tenés una cuerda real, mucho mejor.',
        '<b>Tip:</b> Saltá apenas lo necesario (1-2 cm). Aterrizá suavemente en las puntas de los pies.'
      ]
    },
    {
      id: 'squat_jack', name: 'Sentadilla con salto lateral', icon: '↔️', type: 'reps', defaultReps: 15, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Parado con los pies juntos.',
        '<b>Ejecución:</b> Da un salto a un lado cayendo en posición de sentadilla profunda. Saltá al otro lado volviendo a sentadilla.',
        '<b>Beneficio:</b> Combina trabajo de piernas con cardio explosivo.',
        '<b>Tip:</b> Mantené el pecho alto y la espalda recta. No dejes que las rodillas se colapsen hacia adentro.'
      ]
    },
    {
      id: 'plank_jack', name: 'Plancha con saltos', icon: '⚡', type: 'reps', defaultReps: 20, defaultSets: 3,
      instructions: [
        '<b>Posición inicial:</b> Posición de plancha (antebrazos o manos). Cuerpo recto.',
        '<b>Ejecución:</b> Saltá abriendo las piernas a los costados y volvé a juntarlas. Todo mientras mantenes la plancha.',
        '<b>Beneficio:</b> Cardio + core. Trabaja el abdomen isométricamente mientras haces trabajo cardiovascular.',
        '<b>Tip:</b> Mantené la cadera estable; no la dejes subir o bajar con el salto.'
      ]
    }
  ]
};

// ---- Fotos reales para el "cómo hacerlo" (reemplaza al muñequito) ----
// Cada ejercicio puede tener 2 fotos (posición inicial / posición final)
// que se muestran en loop (ver _photoLoopHTML). Las fotos vienen de
// free-exercise-db (github.com/yuhonas/free-exercise-db), una base de
// datos de dominio público (Unlicense), alojada gratis en GitHub:
//   https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/<ID>/0.jpg
//
// Ya cargué las que pude confirmar 1 a 1 contra esa base. Para el resto,
// dejé el ícono grande como respaldo (no inventé links para no arriesgar
// fotos rotas o que no correspondan al ejercicio).
//
// Para agregar más: buscá el ejercicio en https://yuhonas.github.io/free-exercise-db/,
// copiá las URLs de sus 2 fotos y agregá una línea acá, ej:
//   pushup: [FED_BASE + 'Pushups/0.jpg', FED_BASE + 'Pushups/1.jpg'],
// Si una URL no carga, el <img> se oculta solo y queda el ícono de fondo.
const FED_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
const EXERCISE_PHOTOS = {
  squat:          [FED_BASE + 'Bodyweight_Squat/0.jpg', FED_BASE + 'Bodyweight_Squat/1.jpg'],
  lunges:         [FED_BASE + 'Bodyweight_Walking_Lunge/0.jpg', FED_BASE + 'Bodyweight_Walking_Lunge/1.jpg'],
  reverse_lunges: [FED_BASE + 'Bodyweight_Walking_Lunge/0.jpg', FED_BASE + 'Bodyweight_Walking_Lunge/1.jpg'],
  tricep_dip:     [FED_BASE + 'Bench_Dips/0.jpg', FED_BASE + 'Bench_Dips/1.jpg'],
  bicycle_crunch: [FED_BASE + 'Air_Bike/0.jpg', FED_BASE + 'Air_Bike/1.jpg'],
  leg_raise:      [FED_BASE + 'Bent-Knee_Hip_Raise/0.jpg', FED_BASE + 'Bent-Knee_Hip_Raise/1.jpg']
};

// ---- Etiquetas amigables para cada grupo ----
const MUSCLE_LABELS = {
  pecho:   'Pecho',
  espalda: 'Espalda',
  hombros: 'Hombros',
  brazos:  'Brazos',
  piernas: 'Piernas',
  core:    'Core / Abdominales',
  cardio:  'Cardio'
};

// ---- Rutinas predefinidas (solo peso corporal) ----
const GYM_ROUTINES = [
  {
    id: 'push_upper',
    name: 'Push (Pecho / Hombros / Tríceps)',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'pecho',   exId: 'pushup' },
      { group: 'pecho',   exId: 'diamond_pushup' },
      { group: 'pecho',   exId: 'decline_pushup' },
      { group: 'hombros', exId: 'pike_pushup_sh' },
      { group: 'hombros', exId: 'lateral_raise_body' },
      { group: 'brazos',  exId: 'tricep_dip' },
    ]
  },
  {
    id: 'pull_upper',
    name: 'Pull (Espalda / Bíceps)',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'espalda', exId: 'pullup' },
      { group: 'espalda', exId: 'australian_pullup' },
      { group: 'espalda', exId: 'chinup' },
      { group: 'espalda', exId: 'superman_hold' },
      { group: 'brazos',  exId: 'hammer_curl_body' },
      { group: 'brazos',  exId: 'bicep_curl_body' },
    ]
  },
  {
    id: 'legs_core',
    name: 'Legs + Core',
    tag: 'Push-Pull-Legs',
    exercises: [
      { group: 'piernas', exId: 'squat' },
      { group: 'piernas', exId: 'lunges' },
      { group: 'piernas', exId: 'glute_bridge' },
      { group: 'piernas', exId: 'calf_raise' },
      { group: 'core',    exId: 'plank' },
      { group: 'core',    exId: 'russian_twist' },
    ]
  },
  {
    id: 'full_body',
    name: 'Full Body',
    tag: 'Full Body',
    exercises: [
      { group: 'pecho',   exId: 'pushup' },
      { group: 'espalda', exId: 'australian_pullup' },
      { group: 'piernas', exId: 'squat' },
      { group: 'piernas', exId: 'lunges' },
      { group: 'hombros', exId: 'pike_pushup_sh' },
      { group: 'brazos',  exId: 'tricep_dip' },
      { group: 'core',    exId: 'plank' },
    ]
  },
  {
    id: 'cardio_core',
    name: 'Cardio + Core',
    tag: 'Cardio',
    exercises: [
      { group: 'cardio', exId: 'burpees' },
      { group: 'cardio', exId: 'jumping_jack' },
      { group: 'cardio', exId: 'mountain_climb' },
      { group: 'core',   exId: 'plank' },
      { group: 'core',   exId: 'bicycle_crunch' },
      { group: 'core',   exId: 'dead_bug' },
    ]
  },
  {
    id: 'piernas_fuego',
    name: 'Piernas en fuego',
    tag: 'Piernas',
    exercises: [
      { group: 'piernas', exId: 'squat' },
      { group: 'piernas', exId: 'jump_squat' },
      { group: 'piernas', exId: 'reverse_lunges' },
      { group: 'piernas', exId: 'wall_sit' },
      { group: 'piernas', exId: 'glute_bridge' },
      { group: 'piernas', exId: 'calf_raise' },
    ]
  },
  {
    id: 'hiit_corto',
    name: 'HIIT Express (15 min)',
    tag: 'HIIT',
    exercises: [
      { group: 'cardio', exId: 'burpees' },
      { group: 'cardio', exId: 'high_knees' },
      { group: 'piernas', exId: 'jump_squat' },
      { group: 'core',   exId: 'mountain_climb' },
      { group: 'cardio', exId: 'jumping_jack' },
      { group: 'pecho',  exId: 'pushup' },
    ]
  }
];

// ==========================================================================
// Storage para Gym
// ==========================================================================
const GymStorage = {
  _keyWorkouts: 'nutrio_gym_workouts',
  _keyActive:   'nutrio_gym_active',

  getWorkouts() {
    const d = localStorage.getItem(this._keyWorkouts);
    return d ? JSON.parse(d) : [];
  },

  saveWorkouts(w) {
    localStorage.setItem(this._keyWorkouts, JSON.stringify(w));
  },

  getActive() {
    const d = localStorage.getItem(this._keyActive);
    return d ? JSON.parse(d) : null;
  },

  setActive(session) {
    localStorage.setItem(this._keyActive, JSON.stringify(session));
  },

  clearActive() {
    localStorage.removeItem(this._keyActive);
  },

  clearAll() {
    localStorage.removeItem(this._keyWorkouts);
    localStorage.removeItem(this._keyActive);
  }
};

// ==========================================================================
// Módulo principal de UI de Gym
// ==========================================================================
window.GymUI = {

  _currentTab: 'today',    // 'today' | 'routines' | 'exercises' | 'history'
  _selectedGroup: 'pecho',
  _activeSession: null,
  _sessionExercises: [],
  _expandedInstructions: {}, // Track which exercise instructions are shown

  // Arma el loop de fotos del ejercicio (ver EXERCISE_PHOTOS). Si no hay
  // fotos cargadas para este ejercicio, muestra el ícono grande como
  // respaldo en vez de una foto rota.
  _photoLoopHTML(ex) {
    const photos = EXERCISE_PHOTOS[ex.id];
    if (!photos) {
      return `<div class="gym-photo-loop gym-photo-fallback"><span class="gym-photo-fallback-icon" style="position:static; font-size:44px;">${ex.icon}</span></div>`;
    }
    return `
      <div class="gym-photo-loop">
        <span class="gym-photo-fallback-icon">${ex.icon}</span>
        <img src="${photos[0]}" alt="${ex.name} - paso 1" loading="lazy" onerror="this.style.display='none'">
        <img src="${photos[1]}" alt="${ex.name} - paso 2" loading="lazy" onerror="this.style.display='none'">
      </div>
    `;
  },

  // ---- Init ----
  init() {
    this._render();
  },

  // ---- Render principal ----
  _render() {
    const container = document.getElementById('gymContent');
    if (!container) return;

    // Verificar si hay sesión activa
    this._activeSession = GymStorage.getActive();

    container.innerHTML = `
      <h1>Gimnasio</h1>
      <p style="margin-bottom: 14px;">Ejercicios de peso corporal para entrenar donde sea. Sin equipo necesario.</p>

      ${this._activeSession ? this._renderActiveSession() : ''}

      <div class="gym-tabs">
        <button class="gym-tab ${this._currentTab === 'today' ? 'active' : ''}" onclick="GymUI._switchTab('today')">Hoy</button>
        <button class="gym-tab ${this._currentTab === 'routines' ? 'active' : ''}" onclick="GymUI._switchTab('routines')">Rutinas</button>
        <button class="gym-tab ${this._currentTab === 'exercises' ? 'active' : ''}" onclick="GymUI._switchTab('exercises')">Ejercicios</button>
        <button class="gym-tab ${this._currentTab === 'history' ? 'active' : ''}" onclick="GymUI._switchTab('history')">Historial</button>
      </div>

      <div id="gymTabContent">${this._renderTabContent()}</div>
    `;
  },

  _renderActiveSession() {
    const s = this._activeSession;
    const elapsed = this._formatElapsed(s.startTime);
    return `
      <div class="card gym-active-session" style="margin-top: 12px;">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div>
            <span class="gym-live-dot"></span>
            <span style="font-weight:700; font-size:15px;">Entrenamiento en curso</span>
            <div class="gym-session-info">🕐 ${elapsed} · ${s.routineName || 'Libre'}</div>
          </div>
          <button class="btn btn-primary gym-finish-btn" onclick="GymUI._finishSession()" style="width:auto; padding:10px 18px; font-size:13px; background:var(--primary); color:#fff;">Finalizar</button>
        </div>
      </div>
    `;
  },

  _formatElapsed(startTime) {
    const diff = Date.now() - startTime;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const m = mins % 60;
    return hrs > 0 ? `${hrs}h ${m}m` : `${m} min`;
  },

  // ---- Tabs ----
  _switchTab(tab) {
    this._currentTab = tab;
    this._render();
  },

  _renderTabContent() {
    switch (this._currentTab) {
      case 'today':    return this._renderToday();
      case 'routines': return this._renderRoutines();
      case 'exercises':return this._renderExercises();
      case 'history':  return this._renderHistory();
      default:         return '';
    }
  },

  // ==================================================================
  // TAB: HOY
  // ==================================================================
  _renderToday() {
    const workouts = GymStorage.getWorkouts();
    const today = new Date().toDateString();
    const todayWorkouts = workouts.filter(w => new Date(w.date).toDateString() === today);

    const totalReps = todayWorkouts.reduce((sum, w) => {
      return sum + (w.exercises || []).reduce((s, ex) => {
        if (ex.sets) {
          return s + ex.sets.reduce((ss, set) => ss + (set.reps || 0), 0);
        }
        return s;
      }, 0);
    }, 0);

    const totalExercises = todayWorkouts.reduce((sum, w) => sum + (w.exercises || []).length, 0);

    return `
      <div class="gym-stats-row">
        <div class="gym-stat-card">
          <div class="gym-stat-num">${todayWorkouts.length}</div>
          <div class="gym-stat-label">Entrenamientos</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${totalExercises}</div>
          <div class="gym-stat-label">Ejercicios</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${totalReps}</div>
          <div class="gym-stat-label">Repeticiones</div>
        </div>
      </div>

      <button class="btn btn-primary" style="margin-bottom: 14px;" onclick="GymUI._startQuickSession()">
        Iniciar entrenamiento libre
      </button>

      ${todayWorkouts.length === 0 ? `
        <div class="card" style="text-align:center; padding: 30px 20px; margin-top: 14px;">
          <div style="font-size: 40px; margin-bottom: 8px;">💪</div>
          <p style="font-size:14px; color:var(--text-muted);">Todavía no entrenaste hoy.<br>Arrancá con una rutina o un entrenamiento libre.</p>
        </div>
      ` : `
        <div class="gym-section-title">Entrenamientos de hoy</div>
        ${todayWorkouts.map(w => this._renderWorkoutCard(w)).join('')}
      `}
    `;
  },

  _renderWorkoutCard(w) {
    const exCount = (w.exercises || []).length;
    const elapsed = w.endTime
      ? this._formatElapsedStatic(w.startTime, w.endTime)
      : 'En curso...';
    return `
      <div class="card gym-workout-card tap-feedback" onclick="GymUI._viewWorkoutDetail('${w.id}')">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-weight:700; font-size:15px;">${w.routineName || 'Entrenamiento libre'}</div>
            <div class="gym-workout-meta">${exCount} ejercicios · ${elapsed} · ${this._formatDate(w.date)}</div>
          </div>
          <span style="font-size: 18px;">›</span>
        </div>
      </div>
    `;
  },

  _formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  },

  _formatElapsedStatic(start, end) {
    const diff = end - start;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const m = mins % 60;
    return hrs > 0 ? `${hrs}h ${m}m` : `${m} min`;
  },

  // ==================================================================
  // TAB: RUTINAS
  // ==================================================================
  _renderRoutines() {
    return `
      <div class="gym-section-title">Rutinas de peso corporal</div>
      <p style="margin-bottom: 14px; font-size:13px;">Rutinas diseñadas para hacer en cualquier lugar, sin equipo.</p>

      ${GYM_ROUTINES.map(r => {
        const exNames = r.exercises.map(e => {
          const ex = this._findExercise(e.group, e.exId);
          return ex ? ex.icon : '';
        }).join(' ');
        return `
          <div class="card gym-routine-card tap-feedback" onclick="GymUI._startRoutine('${r.id}')">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="flex:1; min-width:0;">
                <div style="font-weight:700; font-size:15px;">${r.name}</div>
                <div class="gym-routine-meta">${r.exercises.length} ejercicios · ${exNames}</div>
              </div>
              <span style="font-size: 18px; flex-shrink:0; margin-left: 8px;">▶</span>
            </div>
          </div>
        `;
      }).join('')}
    `;
  },

  // ==================================================================
  // TAB: EJERCICIOS (con instrucciones expandibles)
  // ==================================================================
  _renderExercises() {
    const groups = Object.keys(GYM_EXERCISES);
    return `
      <div class="gym-muscle-tabs">
        ${groups.map(g => `
          <button class="gym-muscle-tab ${this._selectedGroup === g ? 'active' : ''}" onclick="GymUI._selectGroup('${g}')">
            ${MUSCLE_LABELS[g]}
          </button>
        `).join('')}
      </div>

      <div class="gym-exercise-list">
        ${GYM_EXERCISES[this._selectedGroup].map(ex => {
          const key = `${this._selectedGroup}_${ex.id}`;
          const isExpanded = this._expandedInstructions[key];
          return `
          <div class="card gym-exercise-item">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="gym-exercise-icon">${ex.icon}</div>
              <div style="flex:1; min-width:0;">
                <div style="font-weight:700; font-size:14.5px;">${ex.name}</div>
                <div class="gym-exercise-meta">
                  ${ex.type === 'time' ? `${ex.defaultSets}x${ex.defaultTime}s` :
                    `${ex.defaultSets}x${ex.defaultReps} reps`}
                  &nbsp;·&nbsp; Peso corporal
                </div>
              </div>
            </div>

            <div class="gym-exercise-actions">
              <button class="gym-instructions-toggle" onclick="GymUI._toggleInstructions('${key}', this)">
                ${isExpanded ? '▲ Ocultar cómo hacerlo' : '▼ Cómo hacerlo'}
              </button>
              <button class="gym-instructions-toggle" style="background: var(--primary); color: #fff; border-color: var(--primary);" onclick="GymUI._addExerciseToSession('${this._selectedGroup}', '${ex.id}')">
                + Agregar
              </button>
            </div>

            ${isExpanded ? `
              ${this._photoLoopHTML(ex)}
              <div class="gym-instructions-box">
                ${ex.instructions.map((step, i) => `<div style="margin-bottom: ${i < ex.instructions.length - 1 ? '8px' : '0'}">${step}</div>`).join('')}
              </div>
            ` : ''}
          </div>
        `}).join('')}
      </div>
    `;
  },

  _toggleInstructions(key, btn) {
    this._expandedInstructions[key] = !this._expandedInstructions[key];
    this._render();
  },

  _selectGroup(g) {
    this._selectedGroup = g;
    this._render();
  },

  // ==================================================================
  // TAB: HISTORIAL
  // ==================================================================
  _renderHistory() {
    const workouts = GymStorage.getWorkouts().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (workouts.length === 0) {
      return `
        <div class="card" style="text-align:center; padding: 40px 20px;">
          <div style="font-size: 40px; margin-bottom: 8px;">📋</div>
          <p style="font-size:14px; color:var(--text-muted);">Todavía no registraste entrenamientos.<br>Los que completes van a aparecer acá.</p>
        </div>
      `;
    }

    // Agrupar por fecha
    const grouped = {};
    workouts.forEach(w => {
      const dateKey = new Date(w.date).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(w);
    });

    return Object.entries(grouped).map(([date, ws]) => `
      <div class="gym-section-title" style="text-transform:capitalize;">${date}</div>
      ${ws.map(w => this._renderWorkoutCard(w)).join('')}
    `).join('');
  },

  // ==================================================================
  // ACCIONES
  // ==================================================================
  _findExercise(group, exId) {
    const list = GYM_EXERCISES[group] || [];
    return list.find(e => e.id === exId) || null;
  },

  _startQuickSession() {
    this._activeSession = {
      id: 'ws_' + Date.now(),
      startTime: Date.now(),
      routineName: 'Entrenamiento libre',
      exercises: []
    };
    GymStorage.setActive(this._activeSession);
    this._currentTab = 'exercises';
    this._render();
  },

  _startRoutine(routineId) {
    const routine = GYM_ROUTINES.find(r => r.id === routineId);
    if (!routine) return;

    const exercises = routine.exercises.map(e => {
      const ex = this._findExercise(e.group, e.exId);
      if (!ex) return null;
      return {
        group: e.group,
        exId: ex.id,
        name: ex.name,
        icon: ex.icon,
        type: ex.type,
        instructions: ex.instructions || [],
        sets: Array.from({ length: ex.defaultSets || 3 }, () => ({
          reps: ex.defaultReps || 0,
          time: ex.defaultTime || 0,
          done: false
        }))
      };
    }).filter(Boolean);

    this._activeSession = {
      id: 'ws_' + Date.now(),
      startTime: Date.now(),
      routineName: routine.name,
      exercises
    };
    GymStorage.setActive(this._activeSession);
    this._currentTab = 'today';
    this._render();
  },

  _addExerciseToSession(group, exId) {
    const ex = this._findExercise(group, exId);
    if (!ex) return;

    if (!this._activeSession) {
      this._activeSession = {
        id: 'ws_' + Date.now(),
        startTime: Date.now(),
        routineName: 'Entrenamiento libre',
        exercises: []
      };
    }

    // Evitar duplicados
    if (this._activeSession.exercises.some(e => e.exId === exId)) return;

    this._activeSession.exercises.push({
      group,
      exId: ex.id,
      name: ex.name,
      icon: ex.icon,
      type: ex.type,
      instructions: ex.instructions || [],
      sets: Array.from({ length: ex.defaultSets || 3 }, () => ({
        reps: ex.defaultReps || 0,
        time: ex.defaultTime || 0,
        done: false
      }))
    });

    GymStorage.setActive(this._activeSession);
    this._currentTab = 'today';
    this._render();
  },

  _finishSession() {
    if (!this._activeSession) return;

    // Calcular resumen
    const session = this._activeSession;
    session.endTime = Date.now();

    // Mostrar modal de confirmación con resumen
    const totalSets = session.exercises.reduce((s, ex) => s + (ex.sets || []).length, 0);
    const completedSets = session.exercises.reduce((s, ex) => s + (ex.sets || []).filter(set => set.done).length, 0);

    const overlay = document.getElementById('gymFinishModal');
    const content = document.getElementById('gymFinishContent');

    content.innerHTML = `
      <div class="modal-sheet-handle"></div>
      <h2 style="margin-bottom: 16px;">Resumen del entrenamiento</h2>
      <div class="gym-finish-stats">
        <div class="gym-stat-card">
          <div class="gym-stat-num" style="font-size:15px;">${session.routineName || 'Libre'}</div>
          <div class="gym-stat-label">Rutina</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${this._formatElapsedStatic(session.startTime, session.endTime)}</div>
          <div class="gym-stat-label">Duración</div>
        </div>
      </div>
      <div class="gym-finish-stats" style="margin-top:10px;">
        <div class="gym-stat-card">
          <div class="gym-stat-num">${session.exercises.length}</div>
          <div class="gym-stat-label">Ejercicios</div>
        </div>
        <div class="gym-stat-card">
          <div class="gym-stat-num">${completedSets}/${totalSets}</div>
          <div class="gym-stat-label">Series completadas</div>
        </div>
      </div>

      ${session.exercises.map((ex, i) => `
        <div class="gym-finish-exercise">
          <span>${ex.icon} ${ex.name}</span>
          <span class="gym-finish-sets">${ex.sets.map((s, si) => `<span class="gym-set-badge ${s.done ? 'done' : ''}" onclick="GymUI._toggleFinishSet(${i}, ${si})">${s.done ? '✓' : '—'}</span>`).join('')}</span>
        </div>
      `).join('')}

      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="btn btn-glass" style="flex:1;" onclick="GymUI._cancelFinish()">Seguir entrenando</button>
        <button class="btn btn-primary" style="flex:1;" onclick="GymUI._confirmFinish()">Guardar</button>
      </div>
    `;

    overlay.classList.add('active');
  },

  _toggleFinishSet(exIdx, setIdx) {
    if (!this._activeSession) return;
    const set = this._activeSession.exercises[exIdx].sets[setIdx];
    set.done = !set.done;
    GymStorage.setActive(this._activeSession);
    // Re-render modal content
    this._finishSession();
  },

  _cancelFinish() {
    document.getElementById('gymFinishModal').classList.remove('active');
  },

  _confirmFinish() {
    if (!this._activeSession) return;
    this._activeSession.endTime = Date.now();
    this._activeSession.date = new Date().toISOString();

    const workouts = GymStorage.getWorkouts();
    workouts.push({ ...this._activeSession });
    GymStorage.saveWorkouts(workouts);

    GymStorage.clearActive();
    this._activeSession = null;
    document.getElementById('gymFinishModal').classList.remove('active');

    this._currentTab = 'today';
    this._render();
  },

  _viewWorkoutDetail(workoutId) {
    const workouts = GymStorage.getWorkouts();
    const w = workouts.find(wo => wo.id === workoutId);
    if (!w) return;

    const overlay = document.getElementById('gymFinishModal');
    const content = document.getElementById('gymFinishContent');

    content.innerHTML = `
      <div class="modal-sheet-handle"></div>
      <h2 style="margin-bottom: 4px;">${w.routineName || 'Entrenamiento libre'}</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">${this._formatDate(w.date)} · ${this._formatElapsedStatic(w.startTime, w.endTime || Date.now())}</p>

      ${(w.exercises || []).map(ex => `
        <div class="gym-finish-exercise">
          <div>
            <span>${ex.icon} ${ex.name}</span>
            <div class="gym-exercise-meta" style="margin-top:2px;">
              ${ex.sets.map((s, si) => {
                if (ex.type === 'time') return `${s.time || 0}s`;
                return `${s.reps || 0} reps`;
              }).join(' · ')}
            </div>
          </div>
        </div>
      `).join('')}

      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="btn btn-glass" style="flex:1;" onclick="GymUI._deleteWorkout('${w.id}')">Eliminar</button>
        <button class="btn btn-primary" style="flex:1;" onclick="GymUI._closeDetail()">Cerrar</button>
      </div>
    `;

    overlay.classList.add('active');
  },

  _deleteWorkout(id) {
    if (!confirm('¿Eliminás este entrenamiento?')) return;
    let workouts = GymStorage.getWorkouts();
    workouts = workouts.filter(w => w.id !== id);
    GymStorage.saveWorkouts(workouts);
    document.getElementById('gymFinishModal').classList.remove('active');
    this._render
