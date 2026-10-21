/* Contenido de los prototipos. Sale de _fuentes/extraccion-formacion-claude.md (sin nombres de asistentes ni datos confidenciales). */
window.CONTENIDO = {
  meta: {
    titulo: 'Formación Claude',
    fecha: '20 de octubre de 2026',
    formadores: 'Diego Renedo (Aurgi) y Rubén López (Reynasa)',
  },
  secciones: [
    { id: 'inicio', n: '01', t: 'Inicio', corto: 'Inicio', x: 'De chat a plantilla de doctorandos: la idea en un minuto.', listo: true },
    { id: 'mapa', n: '02', t: 'El mapa de Claude', corto: 'El mapa', x: 'Chat, Cowork, la extensión de Chrome, Claude Code, conectores y skills.' },
    { id: 'modelos', n: '03', t: 'Modelos y planes', corto: 'Modelos', x: 'Haiku, Sonnet, Opus y Fable, y qué plan elegir.' },
    { id: 'pedir-bien', n: '04', t: 'Pedir bien', corto: 'Pedir bien', x: 'Lo cuentas con tus palabras: objetivo, contexto y fuente.', listo: true, img: 'pedir-bien' },
    { id: 'conectar', n: '05', t: 'Conectar Claude a tu día a día', corto: 'Conectar', x: 'Conectores, MCP y la extensión que navega con tu sesión.' },
    { id: 'skills', n: '06', t: 'Skills y el cerebro de la empresa', corto: 'Skills', x: 'El contexto que no tienes que repetir.' },
    { id: 'correo', n: '07', t: 'Correo, documentos y presentaciones', corto: 'Correo y docs', x: 'Todo a borrador, e informes con tu marca.' },
    { id: 'claude-code', n: '08', t: 'Claude Code para no programadores', corto: 'Claude Code', x: 'Software propio sin saber programar.' },
    { id: 'datos', n: '09', t: 'Datos: extraer, limpiar y vigilar', corto: 'Datos', x: 'Webs públicas, bases sucias y tareas que se repiten solas.' },
    { id: 'construir', n: '10', t: 'Construir cosas', corto: 'Construir', x: 'Apps, webs, vídeo y agentes que trabajan por correo.' },
    { id: 'seguridad', n: '11', t: 'Seguridad, costes y lo que viene', corto: 'Seguridad', x: 'Checklist, cuánto cuesta y hacia dónde va.' },
  ],

  inicio: {
    kicker: 'Formación Claude · Grupo Mutua · 20 de octubre de 2026',
    titulo: 'Claude no es otro chat. Es una <em>plantilla de doctorandos</em> trabajando para ti.',
    sub: 'Lo que vimos en la formación de Diego Renedo (Aurgi) y Rubén López (Reynasa): las piezas, los prompts reales y cómo empezar mañana.',
    datos: [
      { n: 'Mar 20 oct', l: '2026, en sala y por Teams' },
      { n: '3 horas', l: 'de conceptos y demos en directo' },
      { n: '11', l: 'secciones, cada una con su PDF' },
      { n: '25+', l: 'prompts reales para copiar' },
    ],
    ideas: [
      { k: 'No es el futuro', x: '«No es el futuro, es tecnología que tenemos». Excel sin fórmulas, PowerPoint sin abrirlo y el correo ordenado solo.' },
      { k: 'Dos grandes partes', x: '<b>Claude</b> trabaja con tu correo, tus documentos, tu navegador y tus datos. <b>Claude Code</b> hace software propio: apps, scripts y tareas diarias.' },
      { k: 'Pregúntale a él', x: '«La solución tiene la solución a su uso». Nadie lleva más de unos meses con esto: lo que no sepas, pregúntaselo a Claude.' },
    ],
  },

  pedir: {
    lead: 'Se acabó la «ingeniería de prompts». Ya no hace falta ordenar el texto ni usar fórmulas: <b>lo cuentas con tus palabras</b> y lo entiende.',
    claves: [
      { k: 'Dile el objetivo', x: 'No le expliques tanto el camino como lo que quieres conseguir, con un poco de contexto.' },
      { k: 'Tú dices el qué', x: 'No tienes que entender cómo se hace. Solo tienes que decírselo.' },
      { k: 'Dale la fuente', x: 'O pídesela primero: «¿cuáles son las mejores fuentes sobre esto?», y luego trabaja contra la mejor.' },
      { k: 'Conoce lo que preguntas', x: 'Si no conoces bien la web o el dato, empieza por pedirle una auditoría de esa página.' },
      { k: 'Aprende tus coletillas', x: 'Si siempre dices «dale» para que siga, se queda con tu «dale».' },
      { k: 'Si duda, pregunta', x: 'No da las cosas por hechas: si le falta un dato (¿llevas maleta?), te lo pregunta.' },
    ],
    profundidad: 'El truco de la profundidad: al principio Diego le pedía los informes «como si fuera una gran consultora» y el informe pasaba de 7 a 27 páginas. Hoy, si le pides una consultoría o una auditoría, ya la hace con esa profundidad.',
    pasos: [
      { k: 'Objetivo', x: 'Qué quieres conseguir y para qué lo necesitas.' },
      { k: 'Contexto', x: 'Qué sabes ya, para quién es y qué te interesa (solo una línea de negocio, solo una marca…).' },
      { k: 'Fuente', x: 'Dónde están los datos: una web pública, tu Analytics abierto en Chrome, Drive, tu correo. Si no lo sabes, pídele las fuentes.' },
      { k: 'Formato y destino', x: 'PDF, Word, PowerPoint editable o Excel, en el chat o en tu carpeta de Drive. Si no dices nada, tiende a darte HTML.' },
      { k: 'Itera', x: 'No te leas 27 páginas: pregúntale por lo que has detectado, por qué pasa y qué harías.' },
    ],
    iterar: [
      '¿Qué has detectado? Dámelo en 5 puntos.',
      '¿Por qué no convierte? ¿Qué harías para que convierta?',
      '¿Qué harías el mes que viene? ¿Qué riesgos ves?',
      'Sobre mis intereses, redúcemelo en 5 puntos y dime cuál es el clave.',
    ],
    citas: [
      { x: 'Lo cuentas con tus palabras, con tu forma de decírselo, y va a entenderlo perfectamente.', who: 'Diego Renedo' },
      { x: 'Es importante decirle el objetivo que tienes.', who: 'Rubén López' },
      { x: 'Tú no dices cómo, dices el qué.', who: 'Diego Renedo' },
    ],
    prompts: [
      { t: 'Informe de analítica web', tag: 'Extensión de Chrome', p: 'Tengo abierto Google Analytics en Chrome, tengo ya la extensión puesta y logueada. Saca la analítica de julio de 2026: canales, países, ciudades, páginas, landings más vistas y qué categorías de landing convierten. Filtra por servicio y taller. Hazme un informe en PDF con resumen ejecutivo, tablas y conclusiones, y súbelo a mi carpeta de Drive.', r: 'Un PDF de 7 páginas en unos 15 minutos. A mano, el mismo análisis llevaba 4 o 5 días.' },
      { t: 'Datos de una web pública', tag: 'En directo', p: 'Hazme un informe del consumo de combustible para automóvil. Quiero conocer mes a mes cómo ha evolucionado respecto a años anteriores. Hazlo en PDF.', r: 'Con la web de estadísticas abierta, navegó, aplicó filtros y bajó los Excel. Salió un informe de 7 páginas con el estilo de Reynasa, porque ese equipo tiene una skill de marca.' },
      { t: 'Ventas desde tu base de datos', tag: 'Con un conector', p: 'Sácame de [tu base de datos] la venta de [producto] de julio por [centro], compárala con junio y mándame el resumen a mi correo.', r: 'En unos minutos llega un correo con la comparativa y una tabla que explica cómo lo ha calculado. Ojo: hay que explicarle qué significa cada dato (qué fecha, con o sin IVA).' },
      { t: 'Organizar un viaje', tag: 'Navegador', p: 'Métete en Skyscanner y mírame un vuelo a Oporto para dentro de 3 días, para las cuatro personas que están en la información del correo.', r: 'Busca a las personas en el correo, elige vuelos y asientos y te deja el pago a ti. Claude no acepta contraseñas ni datos de tarjeta.' },
      { t: 'Resumen con un objetivo', tag: 'Cualquier web', p: 'Entra, lee y hazme un resumen en 50 palabras de lo que es y de qué podríamos hacer en base al objetivo que antes te he dicho.', r: 'Hace exactamente eso: 50 palabras orientadas a tu objetivo.' },
      { t: 'Que se repita solo', tag: 'Tarea programada', p: 'Cuando el informe esté bien, prográmalo para que me lo saque todos los lunes a primera hora y lo deje en mi carpeta de Drive.', r: 'Lo que hoy pides una vez, mañana lo tienes cada semana sin pedirlo.' },
    ],
  },
};
