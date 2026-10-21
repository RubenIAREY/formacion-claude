/* Contenido maestro de la web «Formación Claude» (20/10/2026). De aquí salen la web, los PDF y el Word.
   Fuente: _fuentes/extraccion-formacion-claude.md. Sin nombres de asistentes ni datos confidenciales.
   Bloques: p, lead, h, ul, claves, pasos, cita, nota, aviso, tabla, prompts, datos, ideas, tarjetas, linea, antes, mapa, interactivo.
   Un bloque {t:'interactivo', id, fallback:[...]} pinta una herramienta en la web y su versión en texto en el PDF y el Word. */
(function (root) {
  'use strict';
  var C = {
    meta: {
      titulo: 'Formación Claude',
      fecha: '20 de octubre de 2026',
      fechaCorta: '20 oct 2026',
      formadores: 'Diego Renedo (Aurgi) y Rubén López (Reynasa)',
      url: 'https://rubeniarey.github.io/formacion-claude/',
      aviso: 'Resumen de Reynasa sobre la formación. Claude y Anthropic son marcas de Anthropic; esta web no es una página oficial de Anthropic. Los datos marcados «dicho en la sesión» no se han comprobado.',
    },

    secciones: [
      // ---------------------------------------------------------------- 01
      {
        id: 'inicio', n: '01', t: 'Inicio', corto: 'Inicio',
        x: 'Claude no es otro chat: es una plantilla de doctorandos trabajando para ti.',
        img: 'inicio', video: 'inicio', capas: true,
        subs: [
          { id: 'minuto', t: 'En un minuto', blocks: [
            { t: 'lead', x: 'Tres horas para ver qué hace Claude hoy, en la empresa real: conectado a tu correo, a tus datos y a tu navegador, y haciendo software propio sin saber programar.' },
            { t: 'datos', items: [
              { n: 'Mar 20 oct', l: '2026, en sala y por Teams' },
              { n: '3 horas', l: 'de conceptos y demos en directo' },
              { n: '11', l: 'secciones, cada una con su PDF' },
              { n: '25+', l: 'prompts reales para copiar' },
            ] },
            { t: 'ideas', items: [
              { k: 'No es el futuro', x: '«No es el futuro, es tecnología que tenemos». Excel sin fórmulas, PowerPoint sin abrirlo y el correo ordenado solo.' },
              { k: 'Dos grandes partes', x: '<b>Claude</b> trabaja con tu correo, tus documentos, tu navegador y tus datos. <b>Claude Code</b> hace software propio: apps, scripts y tareas diarias.' },
              { k: 'Pregúntale a él', x: '«La solución tiene la solución a su uso». Nadie lleva más de unos meses con esto: lo que no sepas, pregúntaselo a Claude.' },
            ] },
            { t: 'cita', x: 'Claude nos pone una plantilla entera de trabajadores. Son un equipo de doctorandos que nos hacen el trabajo.', who: 'Diego Renedo' },
          ] },
          { id: 'mapa-web', t: 'Las 11 secciones', blocks: [
            { t: 'p', x: 'Pulsa una sección en la barra de arriba o aquí abajo. Cada una se ve sola, tiene su propio enlace para compartir y su PDF.', imp: 'En la web, cada sección se ve sola y tiene su propio enlace para compartir y su PDF.' },
            { t: 'mapa' },
          ] },
          { id: 'antes', t: 'Antes y después', blocks: [
            { t: 'p', x: 'Algunos tiempos que se contaron en la sala. Son <b>datos dichos en la sesión</b>, sin comprobar, pero dan la medida del cambio.' },
            { t: 'antes', items: [
              { t: 'Informe de analítica web', antes: '4 o 5 días con segmentos, 8 Excel y tablas dinámicas', despues: 'unos 15 minutos con la extensión de Chrome' },
              { t: 'App interna para un equipo', antes: 'medio año y un experto caro', despues: '«en 2 tardes», compilada en tiempo real' },
              { t: '70.000 descripciones de producto', antes: 'una o varias personas durante uno o dos años', despues: '4 días, revisando el 15 % por muestreo' },
              { t: 'Base de datos de talleres', antes: 'se compraba, y cara', despues: '7.175 talleres en alrededor de una hora' },
              { t: 'Informe con datos públicos', antes: 'bucear en webs de estadística y bajar Excel', despues: '7 páginas en directo, con el estilo de la empresa' },
            ] },
          ] },
          { id: 'quien', t: 'Quién y cómo', blocks: [
            { t: 'tarjetas', items: [
              { k: 'Formadores', x: '<b>Diego Renedo</b> (Aurgi) llevó la presentación y casi todas las demos. <b>Rubén López</b> (Reynasa) aportó sus casos: vídeo automatizado, agentes por correo, Plaud y la evolución de los modelos.' },
              { k: 'Para quién', x: 'Un equipo de Grupo Mutua, en la sala y por Teams.' },
              { k: 'Formato', x: 'Ideas, demos en directo y resultados ya preparados, con preguntas abiertas toda la mañana.' },
              { k: 'Esta web', x: 'Arriba tienes las secciones. Con el botón <b>Colores</b> la ves con los colores de Reynasa, Aurgi o Mutua. En <b>Descargas</b>, todo en PDF, Word y PowerPoint.' },
            ] },
            { t: 'nota', x: 'Diego prometió pasar su presentación, y Rubén ofreció la transcripción completa de la sesión a quien se la pida.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 02
      {
        id: 'mapa', n: '02', t: 'El mapa de Claude', corto: 'El mapa',
        x: 'Las piezas, para qué sirve cada una y cómo encajan.',
        img: 'mapa', video: 'mapa',
        subs: [
          { id: 'piezas', t: 'Las piezas', blocks: [
            { t: 'lead', x: 'Por fuera Claude es sencillo, «como la página de Google, con un campo para que escribas». Por dentro tiene <b>piezas que se suman</b>.' },
            { t: 'tarjetas', items: [
              { k: 'Chat', tag: 'claude.ai', x: 'Pedir con tus palabras. También puede preparar un borrador de correo.' },
              { k: 'Cowork', tag: 'App de escritorio', x: 'Trabaja con tus carpetas y tus conexiones. Hay que usar la app, no la web.' },
              { k: 'Extensión de Chrome', tag: 'Navegador', x: 'Maneja tu navegador con tu sesión: Analytics, webs públicas, sistemas sin conector.' },
              { k: 'Claude Code', tag: 'Software', x: 'Hace programas: scripts, apps, webs, tareas programadas y extracción de datos.' },
              { k: 'Conectores y MCP', tag: 'La llave', x: 'Gmail, Calendar, Drive, Slack, bases de datos, Plaud… «El MCP es la llave que conecta las soluciones».' },
              { k: 'Skills', tag: 'Contexto', x: 'Instrucciones e información que no tienes que repetir: tu empresa, tu estilo, tu marca.' },
              { k: 'Proyectos', tag: 'Orden', x: 'Una parte concreta de tu trabajo con sus documentos y carpetas.' },
              { k: 'Artefactos', tag: 'Prototipos', x: 'Páginas interactivas que se pueden compartir por enlace.' },
            ] },
          ] },
          { id: 'dos', t: 'Dos grandes partes', blocks: [
            { t: 'tabla', head: ['', 'Claude (chat y Cowork)', 'Claude Code'], rows: [
              ['Para qué', 'Trabajar con tu correo, documentos, navegador y datos', '«Hacer puro software»'],
              ['Ejemplos', 'Un informe, ordenar el correo, una presentación', 'Una app propia, un script, una tarea cada mañana, una app de móvil, un CRM con login'],
              ['Cómo se pide', 'Con tus palabras', 'Igual: lo que le explicarías a IT se lo explicas a Claude «y que él te lo cree»'],
            ] },
            { t: 'h', x: 'Satelital o del núcleo de IT' },
            { t: 'claves', items: [
              { k: 'Soluciones satelitales', x: 'Son solo para ti o para tu equipo, corren en tu entorno y no tocan los sistemas de la empresa. Las haces tú.' },
              { k: 'Si es del núcleo', x: 'Haz un prototipo (MVP) y llévaselo a IT: «me hace falta un software de calendario y quiero que sea como este».' },
              { k: 'Para producción', x: 'IT lo asegura contra el servicio o la API que toque. «100 %» se puede: los equipos grandes de IT ya trabajan así y revisan el código creado.' },
            ] },
            { t: 'cita', x: 'Vais a ver que es casi más complicado pensar qué le puedo pedir que que te lo haga.', who: 'Diego Renedo' },
          ] },
          { id: 'cerebro', t: 'El cerebro de la empresa', blocks: [
            { t: 'cita', x: 'Cuando tenemos los conectores, la extensión de Chrome, las skills, los repositorios conectados y acceso a Internet, realmente tenemos el cerebro de nuestro negocio.', who: 'Diego Renedo' },
            { t: 'p', x: 'Con ese cerebro se puede hacer cualquier informe, documento o aplicación con la información de la compañía. Por ejemplo, un plan de marketing que va solo a la carpeta de promociones y a la base de datos de producto.' },
            { t: 'nota', x: '¿Tu empresa no te deja conectar la información? Habla con IT, explícale bien tu objetivo y pide los accesos que necesitas (acceso remoto o VPN). «El desconocimiento crea miedo», dijo un asistente: conocer lo que hacen otras compañías ayuda a pedirlo bien.' },
          ] },
          { id: 'oficios', t: 'Para qué oficio', blocks: [
            { t: 'lead', x: '«Ya no hay expertos en la temática, sino <b>cómo le pido</b> a la tecnología desarrollar una solución».' },
            { t: 'p', x: 'La diapositiva tenía 37 oficios, «podrían ser 57». No va de despidos: va de poder apoyarte en un oficio que no es el tuyo. Pulsa uno y verás un prompt de ejemplo.', imp: 'La diapositiva tenía 37 oficios, «podrían ser 57». No va de despidos: va de poder apoyarte en un oficio que no es el tuyo. En la web, cada oficio trae un prompt de ejemplo.' },
            { t: 'interactivo', id: 'oficios', fallback: [
              { t: 'ul', items: ['Contable', 'Asistente', 'Analista de negocio', 'Back office', 'Control financiero', 'Jefe de proyectos', 'Analista de precios', 'Estudio de mercado', 'Apoyo jurídico', 'Análisis de competencia', 'Business intelligence', 'SEO y GEO'] },
            ] },
            { t: 'nota', x: 'Los prompts de esta herramienta son ejemplos nuestros, inspirados en la sesión.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 03
      {
        id: 'modelos', n: '03', t: 'Modelos y planes', corto: 'Modelos',
        x: 'Qué modelo usar, qué plan contratar y cómo hemos llegado aquí.',
        img: 'modelos', video: 'modelos',
        subs: [
          { id: 'modelos', t: 'Los modelos', blocks: [
            { t: 'cita', x: 'En Opus tenéis un doctorado, y en Fable, un doctorado experto que le dedica tiempo.', who: 'Diego Renedo' },
            { t: 'tarjetas', items: [
              { k: 'Haiku', tag: 'El más ligero', x: 'Rápido y barato, para tareas sencillas.' },
              { k: 'Sonnet', tag: 'Intermedio', x: 'Buen equilibrio para el trabajo diario.' },
              { k: 'Opus', tag: '«Un doctorado»', x: 'El de uso diario de los formadores, con el plan de 100. «Es más inteligente y por eso entiende mejor lo que quieres decir».' },
              { k: 'Fable', tag: '«Doctorado experto»', x: 'Para lo muy exigente: un cálculo estructural o una consulta médica compleja. «Ahí sí que te funden los tokens».' },
            ] },
            { t: 'nota', x: 'En la sala se usó la metáfora de la carrera: los modelos pequeños, «de primero» o «de tercero o cuarto de carrera»; Opus, un doctorado. En la gama de Claude, Haiku es el más ligero, luego Sonnet y luego Opus.' },
          ] },
          { id: 'elige', t: '¿Qué modelo y qué plan?', blocks: [
            { t: 'p', x: 'Dinos qué vas a hacer y con qué frecuencia, y te decimos lo que se recomendó en la sesión.' },
            { t: 'interactivo', id: 'comparador', fallback: [
              { t: 'tabla', head: ['Si vas a…', 'Modelo', 'Plan'], rows: [
                ['Correo, resúmenes y documentos', 'Opus', '100 € (con 20 «estás frito»)'],
                ['Informes, análisis y consultoría', 'Opus', '100 €'],
                ['Programar apps y tareas con Claude Code', 'Opus', '100 €, o 200-300 € si es todo el día'],
                ['Cálculo muy exigente', 'Fable', '200-300 €'],
              ] },
            ] },
          ] },
          { id: 'planes', t: 'Planes y tokens', blocks: [
            { t: 'tabla', head: ['Plan', 'Qué se dijo'], rows: [
              ['20 €', '«Con la cuenta de 20 estás frito, no eres capaz de trabajar».'],
              ['100 €', '«Casi tarifa plana» con Opus: «ahí no vais a tener miedo de hacer nada».'],
              ['200-300 €', 'Lo más profesional, para un uso muy intensivo.'],
            ] },
            { t: 'claves', items: [
              { k: 'Las tareas largas gastan', x: 'Una tarea que tarda sigue gastando tokens «por detrás».' },
              { k: 'Fable, con cabeza', x: 'Úsalo solo para lo más exigente. Para el día a día, Opus «es más que suficiente».' },
              { k: '¿Y Copilot?', x: 'Según Rubén, incorporará los modelos de frontera. Lo de dónde se guardan los datos (en Europa) quedó en el aire.' },
            ] },
            { t: 'nota', x: 'Precios y planes dichos en la sesión, sin comprobar. Consulta la tarifa vigente antes de contratar.' },
          ] },
          { id: 'linea', t: 'Línea del tiempo', blocks: [
            { t: 'linea', items: [
              { n: 'Feb 2025', t: 'Sale Claude Code', x: '«Casi como una aplicación tipo ChatGPT».' },
              { n: '2T 2026', t: 'Uso masivo en Aurgi', x: 'Llevaban unos cuatro meses con ello, quitando el verano.' },
              { n: 'Jul 2026', t: 'Opus 5', x: '«El salto a hablar con un doctor». Se acaban las alucinaciones y la ingeniería de prompts.' },
              { n: '26 sep 2026', t: 'Opus 5.5', x: 'El modelo de uso diario durante la formación.' },
              { n: 'Ahora', t: 'Fable', x: 'El más potente, para lo más exigente.' },
            ] },
            { t: 'cita', x: 'Eso se ha acabado, ya prácticamente no alucina.', who: 'Diego Renedo' },
            { t: 'nota', x: 'Fechas tal como se dijeron en la sesión.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 04
      {
        id: 'pedir-bien', n: '04', t: 'Pedir bien', corto: 'Pedir bien',
        x: 'Lo cuentas con tus palabras: objetivo, contexto y fuente.',
        img: 'pedir-bien', video: 'pedir-bien',
        subs: [
          { id: 'idea', t: 'La idea', blocks: [
            { t: 'lead', x: 'Se acabó la «ingeniería de prompts». Ya no hace falta ordenar el texto ni usar fórmulas: <b>lo cuentas con tus palabras</b> y lo entiende.' },
            { t: 'claves', items: [
              { k: 'Dile el objetivo', x: 'No le expliques tanto el camino como lo que quieres conseguir, con un poco de contexto.' },
              { k: 'Tú dices el qué', x: 'No tienes que entender cómo se hace. Solo tienes que decírselo.' },
              { k: 'Dale la fuente', x: 'O pídesela primero: «¿cuáles son las mejores fuentes sobre esto?», y luego trabaja contra la mejor.' },
              { k: 'Conoce lo que preguntas', x: 'Si no conoces bien la web o el dato, empieza por pedirle una auditoría de esa página.' },
              { k: 'Aprende tus coletillas', x: 'Si siempre dices «dale» para que siga, se queda con tu «dale».' },
              { k: 'Si duda, pregunta', x: 'No da las cosas por hechas: si le falta un dato, te lo pregunta.' },
            ] },
            { t: 'nota', x: 'El truco de la profundidad: al principio Diego pedía los informes «como si fuera una gran consultora» (en la sala citó a Roland Berger) y el informe pasaba de 7 a 27 páginas. Hoy, si pides una consultoría o una auditoría, ya la hace con esa profundidad.' },
            { t: 'cita', x: 'Lo cuentas con tus palabras, con tu forma de decírselo, y va a entenderlo perfectamente.', who: 'Diego Renedo' },
          ] },
          { id: 'como', t: 'Cómo se hace', blocks: [
            { t: 'pasos', items: [
              { k: 'Objetivo', x: 'Qué quieres conseguir y para qué lo necesitas.' },
              { k: 'Contexto', x: 'Qué sabes ya, para quién es y qué te interesa (solo una línea de negocio, solo una marca…).' },
              { k: 'Fuente', x: 'Dónde están los datos: una web pública, tu Analytics abierto en Chrome, Drive, tu correo. Si no lo sabes, pídele las fuentes.' },
              { k: 'Formato y destino', x: 'PDF, Word, PowerPoint editable o Excel, en el chat o en tu carpeta de Drive. Si no dices nada, tiende a darte HTML.' },
              { k: 'Itera', x: 'No te leas 27 páginas: pregúntale por lo que ha detectado, por qué pasa y qué harías.' },
            ] },
            { t: 'h', x: 'Y luego, itera contra el resultado' },
            { t: 'ul', estilo: 'iterar', items: [
              '¿Qué has detectado? Dámelo en 5 puntos.',
              '¿Por qué no convierte? ¿Qué harías para que convierta?',
              '¿Qué harías el mes que viene? ¿Qué riesgos ves?',
              'Sobre mis intereses, redúcemelo en 5 puntos y dime cuál es el clave.',
            ] },
            { t: 'cita', x: 'Es importante decirle el objetivo que tienes.', who: 'Rubén López' },
          ] },
          { id: 'constructor', t: 'Constructor de prompts', blocks: [
            { t: 'p', x: 'Rellena tu caso y copia el prompt. Se escribe solo mientras rellenas.' },
            { t: 'interactivo', id: 'constructor', fallback: [
              { t: 'p', x: 'Plantilla: «Quiero [tu objetivo]. Para que tengas contexto: [contexto]. Usa como fuente [la web, Analytics, Drive, tu correo…] o, si no lo sabes, dime antes cuáles son las mejores fuentes. Céntrate en [periodo o filtro]. Hazlo con la profundidad de una consultoría: resumen ejecutivo, tablas y conclusiones. Entrégamelo en [PDF, Word, PowerPoint editable, Excel] y déjalo [en mi carpeta de Drive / en mi correo como borrador]. Cuando esté bien, prográmalo para que se repita [cada lunes]. Si te falta algún dato, pregúntame antes de empezar.»' },
            ] },
          ] },
          { id: 'prompts', t: 'Prompts de la sesión', blocks: [
            { t: 'prompts', items: [
              { t: 'Informe de analítica web', tag: 'Extensión de Chrome', p: 'Tengo abierto Google Analytics en Chrome, tengo ya la extensión puesta y logueada. Saca la analítica de julio de 2026: canales, países, ciudades, páginas, landings más vistas y qué categorías de landing convierten. Filtra por servicio y taller. Hazme un informe en PDF con resumen ejecutivo, tablas y conclusiones, y súbelo a mi carpeta de Drive.', r: 'Un PDF de 7 páginas en unos 15 minutos. A mano, el mismo análisis llevaba 4 o 5 días.' },
              { t: 'Datos de una web pública', tag: 'En directo', p: 'Hazme un informe del consumo de combustible para automóvil. Quiero conocer mes a mes cómo ha evolucionado respecto a años anteriores. Hazlo en PDF.', r: 'Con la web de estadísticas (CORES) abierta, navegó, aplicó filtros y bajó los Excel. Salió un informe de 7 páginas con el estilo de Reynasa, porque ese equipo tiene una skill de marca.' },
              { t: 'Ventas desde tu base de datos', tag: 'Con un conector', p: 'Sácame de [tu base de datos] la venta de [producto] de julio por [centro], compárala con junio y mándame el resumen a mi correo.', r: 'En unos minutos llega un correo con la comparativa y una tabla que explica cómo lo ha calculado. Hay que explicarle qué significa cada dato (qué fecha, con o sin IVA).' },
              { t: 'Organizar un viaje', tag: 'Navegador', p: 'Métete en Skyscanner y mírame un vuelo a Oporto para dentro de 3 días, para las cuatro personas que están en la información del correo.', r: 'Busca a las personas en el correo, elige vuelos y asientos y te deja el pago a ti: Claude no acepta contraseñas ni datos de tarjeta. Ojo con los datos personales de terceros (DNI).' },
              { t: 'Resumen con un objetivo', tag: 'Cualquier web', p: 'Entra, lee y hazme un resumen en 50 palabras de lo que es y de qué podríamos hacer en base al objetivo que antes te he dicho.', r: 'Hace exactamente eso: 50 palabras orientadas a tu objetivo.' },
              { t: 'Que se repita solo', tag: 'Tarea programada', p: 'Cuando el informe esté bien, prográmalo para que me lo saque todos los lunes a primera hora y lo deje en mi carpeta de Drive.', r: 'Lo que hoy pides una vez, mañana lo tienes cada semana sin pedirlo.' },
            ] },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 05
      {
        id: 'conectar', n: '05', t: 'Conectar Claude a tu día a día', corto: 'Conectar',
        x: 'Conectores, MCP y la extensión que navega con tu sesión.',
        img: 'conectar', video: 'conectar',
        subs: [
          { id: 'conectores', t: 'Conectores y MCP', blocks: [
            { t: 'cita', x: 'El MCP es la llave que conecta las soluciones.', who: 'Diego Renedo' },
            { t: 'pasos', items: [
              { k: 'Abre Conectores', x: 'En Claude, el botón «Conectores»: Gmail, Calendar, Slack, Drive… Son bibliotecas que crecen cada semana (hay hasta de Higgsfield o de Plaud).' },
              { k: 'Da los permisos justos', x: 'La primera vez te pregunta qué permites: leer, escribir, dejar borradores… Con todos los permisos puede mandar correos.' },
              { k: 'Pregunta como siempre', x: '«¿Qué tengo importante esta mañana?», «prepárame un borrador», «organízame las etiquetas».' },
            ] },
            { t: 'claves', items: [
              { k: 'MCP no nativos', x: 'Aunque no haya conector oficial, se puede conectar. Rubén conectó Google Analytics y Search Console: «me da la vida para el análisis de la web».' },
              { k: 'Bases de datos', x: 'Con un MCP a tu base de datos preguntas «la venta de ayer», por centros, por categorías o comparada con el año pasado.' },
              { k: 'Los datos hay que explicarlos', x: 'La interpretación sigue siendo humana: dile qué fecha cuenta y si el importe va con o sin IVA.' },
            ] },
          ] },
          { id: 'cowork', t: 'Cowork', blocks: [
            { t: 'p', x: 'Para que actúe en tus carpetas y en tus aplicaciones, casi siempre se usa <b>Cowork</b>, y Cowork <b>se usa en la app de escritorio</b>: «tienes que bajar la aplicación, no usarla en web». Así accede a tus carpetas y a tus conexiones.' },
            { t: 'nota', x: 'Matiz de Rubén: para algo sencillo, como dejar un borrador de correo, también vale el chat. No siempre necesitas Cowork.' },
            { t: 'cita', x: 'Ya no hay que saber cómo se maneja, hay que hacer un prompt.', who: 'Diego Renedo, sobre Google Analytics' },
          ] },
          { id: 'chrome', t: 'La extensión de Chrome', blocks: [
            { t: 'lead', x: 'Instala la extensión de Claude en Chrome, inicia sesión y <b>maneja tu navegador</b>: abre pestañas, navega y entra donde tú ya has entrado.' },
            { t: 'claves', items: [
              { k: 'Con tu sesión', x: 'No necesita tu usuario ni tu contraseña: deja la aplicación abierta en Chrome con tu sesión y entra «logueado».' },
              { k: 'Sin conector, también', x: 'En un sistema que no tiene conector ve los botones, los va pulsando y analiza la estructura. La primera vez le lleva un rato.' },
              { k: 'No le molestes', x: 'Si haces scroll o pinchas mientras trabaja, le estorbas: «se pone a trabajar con un ratón que no es el tuyo».' },
              { k: 'Google y Microsoft', x: 'Funciona en los dos entornos. Si un sistema corre en Chrome, lo puede manejar. Y no rompe ni desconfigura nada.' },
              { k: 'Pagos y contraseñas', x: 'No acepta contraseñas (te pide cambiarlas si se las das) ni datos de tarjeta. Lo arriesgado te lo deja a ti.' },
            ] },
          ] },
          { id: 'casos', t: 'Casos de la sesión', blocks: [
            { t: 'tarjetas', items: [
              { k: 'Consultoría de analítica', tag: 'Chrome + Analytics', x: 'Un informe de 7 páginas con canales, ciudades, landings y conversión, en unos 15 minutos. Después, iterar: «¿por qué no convierte?». Se puede programar cada lunes.' },
              { k: 'Combustible con datos públicos', tag: 'En directo', x: 'Desde la web de estadísticas CORES: navegó el árbol, aplicó filtros, bajó los Excel e hizo 7 páginas con la evolución mensual.' },
              { k: 'Ventas comparadas', tag: 'MCP', x: 'De la base de datos al correo: venta por centro, comparada con el mes anterior, con la tabla de cómo lo calculó.' },
              { k: 'Un viaje de empresa', tag: 'Navegador', x: 'Busca a los viajeros en el correo, compara vuelos y deja todo listo para que pagues tú.' },
            ] },
            { t: 'aviso', x: 'Si una tarea usa datos personales de otras personas (DNI, teléfonos…), piensa antes si debes y puedes usarlos.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 06
      {
        id: 'skills', n: '06', t: 'Skills y el cerebro de la empresa', corto: 'Skills',
        x: 'El contexto que no tienes que repetir cada mañana.',
        img: 'skills', video: 'skills',
        subs: [
          { id: 'que-son', t: 'Qué son', blocks: [
            { t: 'lead', x: 'No quieres explicarle cada mañana «los 20 gigas de información de la empresa». Una <b>skill</b> son instrucciones o información que, al invocarla, «corre primero».' },
            { t: 'pasos', items: [
              { k: 'Créala hablando', x: '«Quiero que me hagas una skill que se llame Bienvenido [empresa], que tenga toda esta información».' },
              { k: 'Que sea corta', x: 'Que no pase de unas <b>2 páginas</b>: escueta, casi en formato índice. Si le metes 15 gigas, explota.' },
              { k: 'Úsala', x: 'Ahora las lanza solo cuando hablas del tema (a la derecha ves cuáles ha usado), o con la barra «/». A veces hay que pedirle que deje una.' },
            ] },
          ] },
          { id: 'tipos', t: 'Tipos de skill', blocks: [
            { t: 'tarjetas', items: [
              { k: 'Índice de tus carpetas', tag: 'Contexto', x: 'Dice qué hay en cada carpeta de un repositorio grande. Truco de Rubén: pídele primero un inventario de dónde está cada cosa, y con eso haces la skill.' },
              { k: 'Estilo y marca', tag: 'Look & feel', x: 'Colores, logo y tipografía para que todos los PDF y presentaciones salgan con tu imagen y dejen de «parecer Claude».' },
              { k: 'Sistema de diseño', tag: 'Presentaciones', x: '«Te paso una presentación que me gusta: sácame el sistema de diseño, colores con su código, tipografía y tamaños». Se guarda como skill.' },
              { k: 'Tu forma de responder', tag: 'Estilo', x: '«Mira mi correo y cómo respondo, y responde como yo», hasta con tus palabras en inglés. «Después de un rato te conoce mejor que tú».' },
              { k: 'Un proceso del área', tag: 'Procesos', x: 'Alguien que domina un proceso lo deja en una skill y otra persona lo ejecuta para repetirlo igual.' },
            ] },
            { t: 'nota', x: 'La skill es el estilo y la forma de expresarse; el prompt es lo que genera el archivo. Así lo resumió un asistente.' },
          ] },
          { id: 'generador', t: 'Genera tu skill índice', blocks: [
            { t: 'p', x: 'Escribe tus carpetas y qué hay en cada una. Te devolvemos el esqueleto de una skill índice para pegarle a Claude.' },
            { t: 'interactivo', id: 'skill-indice', fallback: [
              { t: 'p', x: 'Estructura de una skill índice: nombre y para qué sirve; «Dónde está cada cosa», con una línea por carpeta (carpeta y qué hay); y unas normas: lee solo la carpeta que necesites, no inventes lo que no esté y respeta los permisos de cada carpeta. Máximo, unas 2 páginas.' },
            ] },
          ] },
          { id: 'accesos', t: 'Accesos y compartir', blocks: [
            { t: 'claves', items: [
              { k: 'Tu rol manda', x: '«El límite de tu acceso viene con tu rol o tu usuario». Claude lo procesa más rápido, pero no llega más lejos que tú.' },
              { k: 'Ordena antes', x: 'Lo importante es cómo está organizada la información por niveles de confidencialidad.' },
              { k: 'IT pone límites', x: 'En empresas grandes IT controla comandos y descargas. Se puede trabajar con Microsoft Entra ID y Bitbucket.' },
              { k: 'Para compartirlas', x: 'Mejor que la skill apunte a un sitio común (GitHub, Drive o SharePoint) que a una carpeta de tu ordenador. También se pueden enviar por correo.' },
            ] },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 07
      {
        id: 'correo', n: '07', t: 'Correo, documentos y presentaciones', corto: 'Correo y docs',
        x: 'Todo a borrador, e informes y presentaciones con tu marca.',
        img: 'correo', video: 'correo',
        subs: [
          { id: 'correo', t: 'Correo', blocks: [
            { t: 'lead', x: 'Distingue lo importante de lo publicitario, lo repetitivo y las respuestas automáticas. Con el calendario, tu correo es «una base de datos de información brutal».' },
            { t: 'aviso', x: '<b>Regla de oro: todo a borrador.</b> «Cuidado, que es de botón rápido»: si le dices que responda, puede enviar sin que lo leas. Pide que las respuestas se queden en borrador (puedes ponerlo en una skill) y revisa destinatarios antes de enviar.' },
            { t: 'prompts', items: [
              { t: 'Lo importante de hoy', tag: 'Correo', p: 'Hazme el resumen de los correos importantes de esta mañana.', r: '' },
              { t: 'Lo que se te escapa', tag: 'Correo', p: 'Revísame la última semana y dime si tengo cosas sin contestar.', r: '' },
              { t: 'Respuestas en borrador', tag: 'Correo', p: 'Hazme una propuesta de respuesta en formato borrador para los correos que me quedan sin contestar.', r: '' },
              { t: 'Ordenar la bandeja', tag: 'Correo', p: 'Propónme una estructura de etiquetas para mi correo y, cuando la apruebe, ordena los correos de los últimos 15 días.', r: '' },
            ] },
            { t: 'nota', x: 'Caso de Rubén: sus agentes le llenan el correo, así que escribe «ordena correo agentes» y una skill mueve cada mensaje a la carpeta de su agente.' },
          ] },
          { id: 'documentos', t: 'Informes y formatos', blocks: [
            { t: 'tabla', head: ['Si pides…', 'Lo que hace'], rows: [
              ['Nada en concreto', 'Tiende a darte HTML. «Difícilmente compartible y difícil para el móvil».'],
              ['Un documento', 'Word, si no dices otra cosa.'],
              ['PDF', 'Lo genera y, si Drive está conectado, lo deja en tu carpeta.'],
              ['PowerPoint editable', 'También: lo propuso una asistente en la sala.'],
            ] },
            { t: 'p', x: 'Los documentos «parecen muy Claude»: burbujas, porcentajes y colores. Se arregla con una skill de estilo de la casa, para que salgan con tu marca.' },
          ] },
          { id: 'presentaciones', t: 'Presentaciones con tu marca', blocks: [
            { t: 'pasos', items: [
              { k: 'Saca tu sistema de diseño', x: 'Pásale una presentación que te guste y pídele colores con su código, tipografía, tamaños y una plantilla de unas 10 diapositivas (portada, intermedias, contenido, huecos para fotos e índice).' },
              { k: 'Guárdalo como skill', x: 'Que apunte a un repositorio con el logo y una presentación de prueba.' },
              { k: 'Pide la presentación', x: '«Hazme la presentación de la reunión de este mes», con la carpeta de las anteriores. Sale con el orden y el número de diapositivas de siempre.' },
            ] },
            { t: 'cita', x: 'Así deja de parecer Claude: se parece a las viejas tuyas.', who: 'Diego Renedo' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 08
      {
        id: 'claude-code', n: '08', t: 'Claude Code para no programadores', corto: 'Claude Code',
        x: 'Software propio sin saber programar.',
        img: 'claude-code', video: 'claude-code',
        subs: [
          { id: 'que-es', t: 'Qué es', blocks: [
            { t: 'lead', x: 'La parte de Claude para hacer software: una app propia, un script, una tarea que se ejecute cada mañana, una app de móvil o un programa con usuario y contraseña.' },
            { t: 'tarjetas', items: [
              { k: 'App de escritorio', tag: 'La de Rubén', x: 'Para quien no programa. «Todo funciona igual».' },
              { k: 'VS Code + extensión', tag: 'La de Diego', x: 'Visual Studio Code con la extensión de Claude de Anthropic. «Es más para programadores».' },
              { k: 'Desde la web', tag: 'Code', x: 'También se puede entrar por Code en Claude, aunque a Diego no le parece del todo cómodo.' },
            ] },
            { t: 'cita', x: 'No necesitáis conocer los softwares que os instaláis.', who: 'Diego Renedo' },
            { t: 'p', x: 'Python, Node, Flutter, Docker, HTML… «Os acabáis de convertir en expertos de todas estas tecnologías». Si no sabes qué usar, te lo propone, y te lo descarga.' },
          ] },
          { id: 'empezar', t: 'Instalar y empezar', blocks: [
            { t: 'pasos', items: [
              { k: 'Instala Claude Code', x: 'La app de escritorio, o VS Code con la extensión de Claude (en Extensiones, la de Anthropic). Aparece el icono a la izquierda: nueva sesión y a escribir.' },
              { k: 'Instala Python y Git', x: 'Python desde su web oficial (la parte de descargas), porque los scripts los hará en Python. Git, para poder volver atrás.' },
              { k: 'Crea tu carpeta de trabajo', x: 'Una carpeta (por ejemplo, «Claude») con subcarpetas para apps, extracción de datos… Según la carpeta que abras, verás unas sesiones u otras.' },
              { k: 'Dile qué quieres', x: 'Una app de móvil, una web, un programa para tu ordenador o un software con URL y usuario. Y cómo quieres trabajar: «al tirón» o paso a paso.' },
              { k: 'Si te atascas, pregúntale', x: '«Cuando tengáis dudas, preguntadle a Cowork»: mándale una captura de pantalla.' },
            ] },
            { t: 'nota', x: 'Se puede manejar desde el móvil: «te lo pones en el móvil y le dices: prográmame una aplicación».' },
          ] },
          { id: 'permisos', t: 'Permisos', blocks: [
            { t: 'p', x: 'Claude Code pregunta antes de actuar, y tú decides cuánto. Mueve el selector para ver cada modo.' },
            { t: 'interactivo', id: 'semaforo', fallback: [
              { t: 'tabla', head: ['Modo', 'Qué hace', 'Cuándo'], rows: [
                ['Manual (por defecto)', '«Os va a pedir permiso para todo».', 'Para empezar.'],
                ['Automático', 'Decide solo lo rutinario.', 'Cuando ya te fías del proyecto.'],
                ['Bypass permissions', 'Pregunta lo conceptual al principio y llega al final sin preguntar.', 'Solo en una carpeta de pruebas y con Git.'],
              ] },
            ] },
          ] },
          { id: 'git', t: 'Git y GitHub', blocks: [
            { t: 'cita', x: 'El commit es un guardar como.', who: 'Diego Renedo' },
            { t: 'claves', items: [
              { k: 'Commits', x: 'Si una versión nueva rompe algo, vuelves a la anterior. Claude se encarga de hacerlos «sin que os enteréis».' },
              { k: 'GitHub', x: 'Para compartir entre varios: repositorios públicos o privados, páginas web con un enlace y skills compartidas. Te das de alta con tu cuenta de Google y es gratis.' },
              { k: 'Enlaces privados', x: '«Un dominio súper feo con un token»: si no te lo comparten, no lo tienes.' },
              { k: 'En entornos Microsoft', x: 'También funciona con Azure, Bitbucket y Entra ID.' },
            ] },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 09
      {
        id: 'datos', n: '09', t: 'Datos: extraer, limpiar y vigilar', corto: 'Datos',
        x: 'De la web a tu Excel, y que se repita solo.',
        img: 'datos', video: 'datos',
        subs: [
          { id: 'extraer', t: 'Extraer de la web', blocks: [
            { t: 'lead', x: 'Las bases de datos «antes se compraban». Ahora le pides el qué y Claude Code monta el script, lo lanza, lo vigila y te deja un Excel que se rellena en tiempo real.' },
            { t: 'prompts', items: [
              { t: 'Talleres de una zona', tag: 'Claude Code', p: 'Quiero una base de datos de los talleres de Madrid y Guadalajara: nombre, teléfono, dirección, web, categoría, valoración y coordenadas. Móntate un script en Node que recorra Google Maps por cuadrículas y vaya guardando en un Excel con tres hojas. Haz las consultas con esperas aleatorias de 3 a 25 segundos y guarda cada poco, para poder seguir si se corta.', r: 'Un Excel con <b>7.175 talleres</b> en alrededor de una hora, separados en mecánicos, carroceros y cristales.' },
            ] },
            { t: 'claves', items: [
              { k: 'Sé un poco listo', x: 'Si es grande, que vaya guardando por el camino y pueda reanudar.' },
              { k: 'No se lo inventa', x: '«Si hay alguna cosa que no tiene capacidad, no se lo inventa».' },
              { k: 'Con interfaz', x: 'Puede hacerte una ventanita: eliges categoría y provincia y te deja el Excel.' },
            ] },
            { t: 'aviso', x: 'Respeta las condiciones de uso de cada web y no te saltes sus protecciones (captchas, bloqueos). Si la base tiene datos de contacto y la vas a usar para campañas, cumple la normativa de protección de datos y de comunicaciones comerciales.' },
          ] },
          { id: 'limpiar', t: 'Limpiar y confiar', blocks: [
            { t: 'p', x: 'Lo mismo sirve para tus datos internos: una base de datos sucia en SharePoint o un Excel heredado.' },
            { t: 'ul', items: ['Normalizar nombres (quitar «S.L.», buscar el nombre comercial).', 'Separar por tipo y llevarlo a un mapa.', 'Encadenar scripts sencillos: sacar las URL de las fotos, descargarlas y renombrarlas por EAN.'] },
            { t: 'h', x: 'La confianza se gana con catas' },
            { t: 'p', x: 'Al principio verificas: abres la URL de origen, compruebas que coinciden el precio, el EAN y la descripción, haces una cata y te fías. «Esas catas de revisión las puedes hacer con todo», dijo un asistente.' },
          ] },
          { id: 'vigilar', t: 'Vigilar y programar', blocks: [
            { t: 'p', x: 'Ejemplo de la sesión, en abstracto: seguir cada día los precios públicos de un catálogo de la competencia.' },
            { t: 'prompts', items: [
              { t: 'Seguimiento diario de precios', tag: 'Tarea programada', p: 'Quiero seguir los precios de [catálogo público]. Sácame el catálogo entero con referencia, EAN, marca, nombre, precio con y sin IVA y disponibilidad, y déjalo en un Excel fechado. Que vaya guardando por el camino para poder reanudar. Cuando funcione, quiero que se ejecute solo todos los días a las 7:00 y me deje el fichero del día.', r: 'Cada fila lleva la URL de origen para comprobarla, y se cruza por EAN con tu catálogo.' },
            ] },
            { t: 'h', x: 'Planifica tu tarea' },
            { t: 'interactivo', id: 'planificador', fallback: [
              { t: 'p', x: 'Frase tipo: «Cuando funcione, quiero que se ejecute solo [cada día / cada lunes] a las [hora] y me deje [el fichero] en [la carpeta]. Si mi ordenador está apagado, hazlo desde GitHub».' },
            ] },
            { t: 'nota', x: 'Las tareas pueden correr en tu equipo o desde GitHub, sin tu ordenador. Rubén tiene un calendario que se actualiza tres veces al día con una rutina de Claude.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 10
      {
        id: 'construir', n: '10', t: 'Construir cosas', corto: 'Construir',
        x: 'Apps, webs, vídeo y agentes que trabajan por correo.',
        img: 'construir', video: 'construir',
        subs: [
          { id: 'apps', t: 'Apps internas y móviles', blocks: [
            { t: 'pasos', items: [
              { k: 'Del ZIP a una URL', x: 'Las primeras apps eran un ZIP que había que instalar en cada ordenador. Ahora se hacen en GitHub como una URL con dominio, login, roles y administrador.' },
              { k: 'Piensa como informático', x: 'Pide <b>registros (logs)</b> de todo: quién entra, cuándo, cuánto lo usa. Sirven para mejorar.' },
              { k: 'Mejora por versiones', x: 'Primero sin roles, luego con roles, estadísticas, administrador…' },
            ] },
            { t: 'tarjetas', items: [
              { k: 'Del folio a una app con roles', tag: 'RR. HH.', x: 'Quien entrevista ve el CV y los datos; quien da de alta tiene su formulario; un botón prepara el correo para la gestoría en el formato exacto. Con datos personales, cumple la normativa.' },
              { k: 'Una app de móvil en 2 tardes', tag: 'APK con Flutter', x: 'Pides un APK, Claude descarga Flutter y compila en tiempo real; te la descargas, la pruebas y cambias colores o botones en un rato.' },
            ] },
            { t: 'cita', x: 'La intención es sacar más trabajo y no despedir a nadie.', who: 'Diego Renedo' },
          ] },
          { id: 'it', t: '¿Lo hago yo o va a IT?', blocks: [
            { t: 'p', x: 'Cuatro preguntas para saber si es una solución satelital que te haces tú o algo que tiene que pasar por IT.' },
            { t: 'interactivo', id: 'arbol', fallback: [
              { t: 'tabla', head: ['Situación', 'Qué hacer'], rows: [
                ['Solo para ti, sin datos personales y sin tocar sistemas', 'Hazlo tú: es satelital.'],
                ['Se conecta a sistemas de la empresa o lo usará mucha gente', 'Haz un prototipo y llévaselo a IT para que lo asegure.'],
                ['Usa datos personales o confidenciales', 'Antes, habla con IT y con protección de datos.'],
              ] },
            ] },
          ] },
          { id: 'webs', t: 'Webs y tienda', blocks: [
            { t: 'tarjetas', items: [
              { k: 'Un buscador en una tarde', tag: 'Web', x: '«Hazme un buscador de neumáticos» con los datos sacados antes: un catálogo en una URL que filtra por medida «sin que se lo pidas», con ficha, foto y precio.' },
              { k: 'Tu tienda online', tag: 'E-commerce', x: 'Dominio, servidor, estudio de la competencia, la web y las campañas. Para cobrar, Claude te propone Stripe y Cowork configura la pasarela.' },
              { k: 'WhatsApp en la web, sin IT', tag: 'Tag Manager', x: '«Hazme un plugin de WhatsApp para la web» y, si la web tiene Tag Manager, Cowork lo mete sin pedir ayuda a IT.' },
              { k: 'Licitaciones públicas', tag: 'Tablero', x: 'Un tablero tipo Trello que recoge licitaciones del BOE y de ayuntamientos, con fechas, importes y pliegos.' },
              { k: 'Campañas de Google Ads', tag: 'Marketing', x: 'Con Semrush abierto: «dime las keywords con sentido para mi negocio y configúrame campañas con un CPC máximo de 0,50». «Ya no las hacemos a mano».' },
            ] },
            { t: 'cita', x: 'Creedos que sois capaces de hacer webs profesionales.', who: 'Diego Renedo' },
          ] },
          { id: 'video', t: 'Vídeo y agentes', blocks: [
            { t: 'claves', items: [
              { k: 'Claude conecta, no genera vídeo', x: 'Se conecta a herramientas especializadas (Higgsfield para imagen, vídeo y voz) y edita con HyperFrames o Remotion. Son de pago, «pero tampoco es tanto dinero».' },
              { k: 'Un canal de YouTube automatizado', x: 'Rubén manda un audio desde el móvil; Claude investiga en Analytics, Search Console y YouTube, monta el vídeo con su voz y su avatar, lo sube y saca los shorts para las redes.' },
              { k: 'Agentes que trabajan por correo', x: 'Un agente con su propio buzón al que cualquier persona escribe y que responde con la tarea hecha en 20 o 30 minutos. Aprende con skills hechas a partir de grabaciones del trabajo de cada área.' },
              { k: 'Reuniones grabadas', x: 'Con Plaud y su MCP, Claude accede a la transcripción y al resumen, y te recuerda los compromisos. Diego lo usa en el coche: «cuando llegas tienes el PowerPoint hecho».' },
            ] },
            { t: 'aviso', x: 'Con vídeos e imágenes de terceros, asegúrate de tener derecho a usarlos: no hay un número de segundos que lo haga seguro. Y si grabas una reunión, avisa a quienes participan.' },
          ] },
        ],
      },

      // ---------------------------------------------------------------- 11
      {
        id: 'seguridad', n: '11', t: 'Seguridad, costes y lo que viene', corto: 'Seguridad',
        x: 'Checklist, riesgos, hacia dónde va y tus deberes.',
        img: 'seguridad', video: 'seguridad',
        subs: [
          { id: 'checklist', t: 'Checklist', blocks: [
            { t: 'p', x: 'Ve marcando. Se guarda en este navegador.', imp: 'Para repasar antes de conectar nada. En la web se puede ir marcando.' },
            { t: 'interactivo', id: 'checklist', fallback: [] },
          ] },
          { id: 'riesgos', t: 'Lo que hay que vigilar', blocks: [
            { t: 'tarjetas', items: [
              { k: 'Puede equivocarse', tag: 'Fiabilidad', x: 'Cada vez menos, pero se hacen catas. «Claude puede cometer errores… ¿y tu compañero de trabajo no?». «Esto no toma las decisiones por ti».' },
              { k: 'Datos de personas', tag: 'RGPD', x: 'DNI, currículos, Seguridad Social, salarios o teléfonos: aunque la app sea solo tuya, necesita base legal y cuidado.' },
              { k: 'Equipo personal', tag: 'Pruebas', x: 'Probar en casa está bien, pero «no utilices documentos de la compañía».' },
              { k: 'Licencias', tag: 'Legal', x: 'Una cuenta por persona, como dicen las condiciones de cada servicio.' },
              { k: 'Webs y contenidos ajenos', tag: 'Legal', x: 'Respeta las condiciones de uso, sin saltarte captchas ni bloqueos, y los derechos de imágenes y vídeos.' },
              { k: 'Trabajar más horas', tag: 'Personas', x: '«Acabas trabajando el fin de semana». Productivo por 3, sí, pero con límites.' },
            ] },
          ] },
          { id: 'futuro', t: 'Hacia dónde va', blocks: [
            { t: 'linea', items: [
              { n: 'Hace 3 años', t: 'Tareas de 5 minutos', x: 'Redactar un correo.' },
              { n: 'Hoy', t: 'Tareas de una semana', x: 'Coge 25 documentos de tu empresa y te crea un PowerPoint.' },
              { n: '2027', t: 'Tareas de meses', x: '«Toda esa exponencialidad converge en 2027».' },
            ] },
            { t: 'claves', items: [
              { k: 'Cada 3 o 4 meses', x: 'Los modelos duplican capacidades en los exámenes que se les hacen (antes, cada seis meses).' },
              { k: 'Menos alucinaciones', x: 'Cada modelo nuevo alucina mucho menos que el anterior.' },
              { k: 'El software tradicional', x: 'Diseño, edición, formularios… «Claude edita, Claude hace».' },
            ] },
            { t: 'cita', x: 'O te formas en esto o estás fuera completamente.', who: 'Rubén López' },
            { t: 'nota', x: 'Datos y previsiones dichos en la sesión, sin comprobar.' },
          ] },
          { id: 'deberes', t: 'Deberes', blocks: [
            { t: 'pasos', items: [
              { k: 'Instala', x: 'La app de escritorio de Claude (para Cowork), la extensión de Chrome, Python y Git. Si te animas, Claude Code.' },
              { k: 'Conecta', x: 'Tu correo, tu calendario y lo que uses a diario.' },
              { k: 'Ordena tu correo', x: 'Pide una estructura de etiquetas, crea una skill de respuesta y revisa lo pendiente de los últimos 15 días, todo a borrador.' },
              { k: 'Haz tus skills', x: 'De contexto, de estilo y de índice. Cortas.' },
              { k: 'Piensa tu caso', x: '«Dormirlo un par de noches y cada uno pensar cómo se adapta» a su trabajo.' },
              { k: 'Si tu empresa lo limita', x: 'Habla con IT y ciberseguridad con un objetivo claro.' },
            ] },
            { t: 'cita', x: 'Preguntadle a Claude, que os va a dar las soluciones.', who: 'Diego Renedo, al cerrar' },
          ] },
          { id: 'test', t: 'Ponte a prueba', blocks: [
            { t: 'p', x: 'Diez preguntas sobre lo que vimos. Elige una respuesta en cada una.' },
            { t: 'interactivo', id: 'test', fallback: [] },
          ] },
        ],
      },
    ],

    // Datos de las herramientas interactivas
    oficios: [
      { k: 'Contable', p: 'Cruza los apuntes de este Excel con los extractos del banco que te adjunto, dime qué no cuadra y prepárame una tabla con las diferencias.' },
      { k: 'Asistente', p: 'Revisa mi correo y mi calendario de la próxima semana, dime qué reuniones chocan y prepárame un borrador para moverlas.' },
      { k: 'Analista de negocio', p: 'Con los datos de ventas de esta carpeta, dime qué productos crecen, cuáles caen y por qué, en un informe de una página.' },
      { k: 'Back office', p: 'Te paso 40 PDF de pedidos. Sácame en un Excel el número de pedido, cliente, importe y fecha de entrega.' },
      { k: 'Control financiero', p: 'Compara el presupuesto con el gasto real por partida y explícame las tres desviaciones más grandes.' },
      { k: 'Jefe de proyectos', p: 'Con las actas de estas reuniones, hazme un plan con tareas, responsables y fechas, y dime qué compromisos se han quedado sin hacer.' },
      { k: 'Analista de precios', p: 'Compara nuestros precios de estas 50 referencias con los públicos de la competencia y dime dónde estamos caros.' },
      { k: 'Estudio de mercado', p: 'Hazme un análisis del mercado de [sector] en España: tamaño, tendencias y principales actores, con fuentes, antes de contratar una consultora.' },
      { k: 'Apoyo jurídico', p: 'Resume este contrato en una página, señala las cláusulas de riesgo y dime qué preguntaría a un abogado.' },
      { k: 'Análisis de competencia', p: 'Analiza las webs de estos tres competidores: qué ofrecen, a qué precio y qué hacen mejor que nosotros.' },
      { k: 'Business intelligence', p: 'Con esta base de datos, hazme un panel con las ventas por mes, por centro y por categoría.' },
      { k: 'SEO y GEO', p: 'Dime qué buscan los clientes sobre [tema] y propónme 10 artículos que nos hagan aparecer en Google y en las respuestas de las IA.' },
    ],
    test: [
      { q: '¿Qué es un commit?', o: ['Un tipo de skill', 'Un «guardar como» para poder volver atrás', 'Un conector de correo'], a: 1 },
      { q: '¿Para qué sirve un MCP?', o: ['Es la llave que conecta Claude con otras herramientas', 'Es un modelo más potente que Opus', 'Es el plan de 100 €'], a: 0 },
      { q: '¿Cuánto debería ocupar una skill?', o: ['Todo lo que puedas meter', 'Unas 2 páginas como mucho, tipo índice', 'Exactamente 20 gigas'], a: 1 },
      { q: '¿Qué hace el modo «bypass permissions»?', o: ['Pide permiso para todo', 'Pregunta al principio y llega al final sin preguntar', 'Bloquea Claude Code'], a: 1 },
      { q: '¿Qué conviene hacer con las respuestas de correo?', o: ['Que se envíen solas', 'Que se queden primero en borrador', 'Borrarlas'], a: 1 },
      { q: '¿Qué hace Claude si le das una contraseña?', o: ['La guarda para la próxima vez', 'No la acepta y te pide que la cambies', 'La comparte con IT'], a: 1 },
      { q: 'Además del objetivo, ¿qué conviene darle?', o: ['La fuente, o pedirle las mejores fuentes', 'Un prompt muy ordenado con fórmulas', 'Nada más'], a: 0 },
      { q: '¿Cómo entra la extensión de Chrome en tus aplicaciones?', o: ['Con tu usuario y contraseña escritos en el chat', 'Con tu sesión ya iniciada en Chrome', 'No puede entrar'], a: 1 },
      { q: 'Si no le dices el formato, ¿qué tiende a darte?', o: ['HTML', 'Un audio', 'Nada'], a: 0 },
      { q: '¿Qué plan se recomendó para trabajar sin miedo?', o: ['El de 20 €', 'El de 100 €', 'Ninguno'], a: 1 },
    ],
    checklist: [
      { g: 'Antes de conectar', items: ['Uso mi cuenta de la empresa: lo que ve Claude es lo que ve mi usuario.', 'En un equipo personal no meto documentos de la compañía.', 'Sé qué información es confidencial y dónde está.'] },
      { g: 'Antes de dar permisos', items: ['Las respuestas de correo se quedan en borrador.', 'No le doy contraseñas ni datos de tarjeta.', 'El modo sin permisos, solo en una carpeta de pruebas.', 'Uso Git para poder volver atrás.'] },
      { g: 'Con datos de personas', items: ['Si uso datos personales, tengo base legal y lo he consultado.', 'Para envíos comerciales, cumplo la normativa y las condiciones del canal.', 'Aviso cuando grabo una reunión.'] },
      { g: 'Antes de pasar a producción', items: ['Lo reviso con IT y lo aseguran contra su servicio o API.', 'Tiene login, roles y registros (logs).', 'He hecho catas del resultado.'] },
      { g: 'Contenidos y servicios de terceros', items: ['Respeto las condiciones de uso de las webs.', 'Tengo derecho a usar las imágenes y los vídeos.', 'Una licencia por persona.'] },
    ],
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = C; else root.CONTENIDO = C;
})(this);
