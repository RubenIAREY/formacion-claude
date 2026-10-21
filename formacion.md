# Formación Claude · Reynasa × Aurgi × Grupo Mutua

Resumen completo, en texto, de la formación sobre Claude del 20 de octubre de 2026, impartida por Diego Renedo (Aurgi) y Rubén López (Reynasa) para un equipo de Grupo Mutua. Es la versión para leer con una IA de la web https://rubeniarey.github.io/formacion-claude/

Úsalo como contexto: si tienes una duda sobre cómo hacer algo con Claude, pregunta con este documento cargado (por ejemplo, en un proyecto de Claude llamado «Formación»). Resumen de Reynasa sobre la formación. Claude y Anthropic son marcas de Anthropic; esta web no es una página oficial de Anthropic. Los datos marcados «dicho en la sesión» no se han comprobado.

Descargas: https://rubeniarey.github.io/formacion-claude/descargas/ (presentación en PowerPoint y PDF, resumen en PDF y Word, chuleta de prompts y un PDF por sección).

## Índice

01. Inicio: Claude no es otro chat: es una plantilla de doctorandos trabajando para ti.
02. El mapa de Claude: Las piezas, para qué sirve cada una y cómo encajan.
03. Modelos y planes: Qué modelo usar, qué plan contratar y cómo hemos llegado aquí.
04. Pedir bien: Lo cuentas con tus palabras: objetivo, contexto y fuente.
05. Conectar Claude a tu día a día: Conectores, MCP y la extensión que navega con tu sesión.
06. Skills y el cerebro de la empresa: El contexto que no tienes que repetir cada mañana.
07. Correo, documentos y presentaciones: Todo a borrador, e informes y presentaciones con tu marca.
08. Claude Code para no programadores: Software propio sin saber programar.
09. Datos: extraer, limpiar y vigilar: De la web a tu Excel, y que se repita solo.
10. Construir cosas: Apps, webs, vídeo y agentes que trabajan por correo.
11. Seguridad, costes y lo que viene: Checklist, riesgos, hacia dónde va y tus deberes.

## 01 · Inicio

Claude no es otro chat: es una plantilla de doctorandos trabajando para ti.

Enlace: https://rubeniarey.github.io/formacion-claude/inicio/

### En un minuto

Tres horas para ver qué hace Claude hoy, en la empresa real: conectado a tu correo, a tus datos y a tu navegador, y haciendo software propio sin saber programar.

- **Mar 20 oct**: 2026, en sala y por Teams
- **3 horas**: de conceptos y demos en directo
- **11**: secciones, cada una con su PDF
- **25+**: prompts reales para copiar

- **No es el futuro**: «No es el futuro, es tecnología que tenemos». Excel sin fórmulas, PowerPoint sin abrirlo y el correo ordenado solo.
- **Dos grandes partes**: **Claude** trabaja con tu correo, tus documentos, tu navegador y tus datos. **Claude Code** hace software propio: apps, scripts y tareas diarias.
- **Pregúntale a él**: «La solución tiene la solución a su uso». Nadie lleva más de unos meses con esto: lo que no sepas, pregúntaselo a Claude.

> «Claude nos pone una plantilla entera de trabajadores. Son un equipo de doctorandos que nos hacen el trabajo.» (Diego Renedo)

### Antes y después

Algunos tiempos que se contaron en la sala. Son **datos dichos en la sesión**, sin comprobar, pero dan la medida del cambio.

| Tarea | Antes | Ahora, con Claude |
| --- | --- | --- |
| Informe de analítica web | 4 o 5 días con segmentos, 8 Excel y tablas dinámicas | unos 15 minutos con la extensión de Chrome |
| App interna para un equipo | medio año y un experto caro | «en 2 tardes», compilada en tiempo real |
| 70.000 descripciones de producto | una o varias personas durante uno o dos años | 4 días, revisando el 15 % por muestreo |
| Base de datos de talleres | se compraba, y cara | 7.175 talleres en alrededor de una hora |
| Informe con datos públicos | bucear en webs de estadística y bajar Excel | 7 páginas en directo, con el estilo de la empresa |

### Quién y cómo

- **Formadores**: **Diego Renedo** (Aurgi) llevó la presentación y casi todas las demos. **Rubén López** (Reynasa) aportó sus casos: vídeo automatizado, agentes por correo, Plaud y la evolución de los modelos.
- **Para quién**: Un equipo de Grupo Mutua, en la sala y por Teams.
- **Formato**: Ideas, demos en directo y resultados ya preparados, con preguntas abiertas toda la mañana.
- **Esta web**: Arriba tienes las secciones. Con el botón **Colores** la ves con los colores de Reynasa, Aurgi o Mutua. En **Descargas**, todo en PDF, Word y PowerPoint.

> Nota: Diego prometió pasar su presentación, y Rubén ofreció la transcripción completa de la sesión a quien se la pida.

## 02 · El mapa de Claude

Las piezas, para qué sirve cada una y cómo encajan.

Enlace: https://rubeniarey.github.io/formacion-claude/mapa/

### Las piezas

Por fuera Claude es sencillo, «como la página de Google, con un campo para que escribas». Por dentro tiene **piezas que se suman**.

- **Chat** (claude.ai): Pedir con tus palabras. También puede preparar un borrador de correo.
- **Cowork** (App de escritorio): Trabaja con tus carpetas y tus conexiones. Hay que usar la app, no la web.
- **Extensión de Chrome** (Navegador): Maneja tu navegador con tu sesión: Analytics, webs públicas, sistemas sin conector.
- **Claude Code** (Software): Hace programas: scripts, apps, webs, tareas programadas y extracción de datos.
- **Conectores y MCP** (La llave): Gmail, Calendar, Drive, Slack, bases de datos, Plaud… «El MCP es la llave que conecta las soluciones».
- **Skills** (Contexto): Instrucciones e información que no tienes que repetir: tu empresa, tu estilo, tu marca.
- **Proyectos** (Orden): Una parte concreta de tu trabajo con sus documentos y carpetas.
- **Artefactos** (Prototipos): Páginas interactivas que se pueden compartir por enlace.

### Dos grandes partes

|   | Claude (chat y Cowork) | Claude Code |
| --- | --- | --- |
| Para qué | Trabajar con tu correo, documentos, navegador y datos | «Hacer puro software» |
| Ejemplos | Un informe, ordenar el correo, una presentación | Una app propia, un script, una tarea cada mañana, una app de móvil, un CRM con login |
| Cómo se pide | Con tus palabras | Igual: lo que le explicarías a IT se lo explicas a Claude «y que él te lo cree» |

#### Satelital o del núcleo de IT

- **Soluciones satelitales**: Son solo para ti o para tu equipo, corren en tu entorno y no tocan los sistemas de la empresa. Las haces tú.
- **Si es del núcleo**: Haz un prototipo (MVP) y llévaselo a IT: «me hace falta un software de calendario y quiero que sea como este».
- **Para producción**: IT lo asegura contra el servicio o la API que toque. «100 %» se puede: los equipos grandes de IT ya trabajan así y revisan el código creado.

> «Vais a ver que es casi más complicado pensar qué le puedo pedir que que te lo haga.» (Diego Renedo)

### El cerebro de la empresa

> «Cuando tenemos los conectores, la extensión de Chrome, las skills, los repositorios conectados y acceso a Internet, realmente tenemos el cerebro de nuestro negocio.» (Diego Renedo)

Con ese cerebro se puede hacer cualquier informe, documento o aplicación con la información de la compañía. Por ejemplo, un plan de marketing que va solo a la carpeta de promociones y a la base de datos de producto.

> Nota: ¿Tu empresa no te deja conectar la información? Habla con IT, explícale bien tu objetivo y pide los accesos que necesitas (acceso remoto o VPN). «El desconocimiento crea miedo», dijo un asistente: conocer lo que hacen otras compañías ayuda a pedirlo bien.

### Para qué oficio

«Ya no hay expertos en la temática, sino **cómo le pido** a la tecnología desarrollar una solución».

La diapositiva tenía 37 oficios, «podrían ser 57». No va de despidos: va de poder apoyarte en un oficio que no es el tuyo. En la web, cada oficio trae un prompt de ejemplo.

- Contable
- Asistente
- Analista de negocio
- Back office
- Control financiero
- Jefe de proyectos
- Analista de precios
- Estudio de mercado
- Apoyo jurídico
- Análisis de competencia
- Business intelligence
- SEO y GEO

- **Contable**: «Cruza los apuntes de este Excel con los extractos del banco que te adjunto, dime qué no cuadra y prepárame una tabla con las diferencias.»
- **Asistente**: «Revisa mi correo y mi calendario de la próxima semana, dime qué reuniones chocan y prepárame un borrador para moverlas.»
- **Analista de negocio**: «Con los datos de ventas de esta carpeta, dime qué productos crecen, cuáles caen y por qué, en un informe de una página.»
- **Back office**: «Te paso 40 PDF de pedidos. Sácame en un Excel el número de pedido, cliente, importe y fecha de entrega.»
- **Control financiero**: «Compara el presupuesto con el gasto real por partida y explícame las tres desviaciones más grandes.»
- **Jefe de proyectos**: «Con las actas de estas reuniones, hazme un plan con tareas, responsables y fechas, y dime qué compromisos se han quedado sin hacer.»
- **Analista de precios**: «Compara nuestros precios de estas 50 referencias con los públicos de la competencia y dime dónde estamos caros.»
- **Estudio de mercado**: «Hazme un análisis del mercado de [sector] en España: tamaño, tendencias y principales actores, con fuentes, antes de contratar una consultora.»
- **Apoyo jurídico**: «Resume este contrato en una página, señala las cláusulas de riesgo y dime qué preguntaría a un abogado.»
- **Análisis de competencia**: «Analiza las webs de estos tres competidores: qué ofrecen, a qué precio y qué hacen mejor que nosotros.»
- **Business intelligence**: «Con esta base de datos, hazme un panel con las ventas por mes, por centro y por categoría.»
- **SEO y GEO**: «Dime qué buscan los clientes sobre [tema] y propónme 10 artículos que nos hagan aparecer en Google y en las respuestas de las IA.»

> Nota: Los prompts de esta herramienta son ejemplos nuestros, inspirados en la sesión.

## 03 · Modelos y planes

Qué modelo usar, qué plan contratar y cómo hemos llegado aquí.

Enlace: https://rubeniarey.github.io/formacion-claude/modelos/

### Los modelos

> «En Opus tenéis un doctorado, y en Fable, un doctorado experto que le dedica tiempo.» (Diego Renedo)

- **Haiku** (El más ligero): Rápido y barato, para tareas sencillas.
- **Sonnet** (Intermedio): Buen equilibrio para el trabajo diario.
- **Opus** («Un doctorado»): El de uso diario de los formadores, con el plan de 100. «Es más inteligente y por eso entiende mejor lo que quieres decir».
- **Fable** («Doctorado experto»): Para lo muy exigente: un cálculo estructural o una consulta médica compleja. «Ahí sí que te funden los tokens».

> Nota: En la sala se usó la metáfora de la carrera: los modelos pequeños, «de primero» o «de tercero o cuarto de carrera»; Opus, un doctorado. En la gama de Claude, Haiku es el más ligero, luego Sonnet y luego Opus.

### ¿Qué modelo y qué plan?

Dinos qué vas a hacer y con qué frecuencia, y te decimos lo que se recomendó en la sesión.

| Si vas a… | Modelo | Plan |
| --- | --- | --- |
| Correo, resúmenes y documentos | Opus | 100 € (con 20 «estás frito») |
| Informes, análisis y consultoría | Opus | 100 € |
| Programar apps y tareas con Claude Code | Opus | 100 €, o 200-300 € si es todo el día |
| Cálculo muy exigente | Fable | 200-300 € |

### Planes y tokens

| Plan | Qué se dijo |
| --- | --- |
| 20 € | «Con la cuenta de 20 estás frito, no eres capaz de trabajar». |
| 100 € | «Casi tarifa plana» con Opus: «ahí no vais a tener miedo de hacer nada». |
| 200-300 € | Lo más profesional, para un uso muy intensivo. |

- **Las tareas largas gastan**: Una tarea que tarda sigue gastando tokens «por detrás».
- **Fable, con cabeza**: Úsalo solo para lo más exigente. Para el día a día, Opus «es más que suficiente».
- **¿Y Copilot?**: Según Rubén, incorporará los modelos de frontera. Lo de dónde se guardan los datos (en Europa) quedó en el aire.

> Nota: Precios y planes dichos en la sesión, sin comprobar. Consulta la tarifa vigente antes de contratar.

### Línea del tiempo

- **Feb 2025 · Sale Claude Code**: «Casi como una aplicación tipo ChatGPT».
- **2T 2026 · Uso masivo en Aurgi**: Llevaban unos cuatro meses con ello, quitando el verano.
- **Jul 2026 · Opus 5**: «El salto a hablar con un doctor». Se acaban las alucinaciones y la ingeniería de prompts.
- **26 sep 2026 · Opus 5.5**: El modelo de uso diario durante la formación.
- **Ahora · Fable**: El más potente, para lo más exigente.

> «Eso se ha acabado, ya prácticamente no alucina.» (Diego Renedo)

> Nota: Fechas tal como se dijeron en la sesión.

## 04 · Pedir bien

Lo cuentas con tus palabras: objetivo, contexto y fuente.

Enlace: https://rubeniarey.github.io/formacion-claude/pedir-bien/

### La idea

Se acabó la «ingeniería de prompts». Ya no hace falta ordenar el texto ni usar fórmulas: **lo cuentas con tus palabras** y lo entiende.

- **Dile el objetivo**: No le expliques tanto el camino como lo que quieres conseguir, con un poco de contexto.
- **Tú dices el qué**: No tienes que entender cómo se hace. Solo tienes que decírselo.
- **Dale la fuente**: O pídesela primero: «¿cuáles son las mejores fuentes sobre esto?», y luego trabaja contra la mejor.
- **Conoce lo que preguntas**: Si no conoces bien la web o el dato, empieza por pedirle una auditoría de esa página.
- **Aprende tus coletillas**: Si siempre dices «dale» para que siga, se queda con tu «dale».
- **Si duda, pregunta**: No da las cosas por hechas: si le falta un dato, te lo pregunta.

> Nota: El truco de la profundidad: al principio Diego pedía los informes «como si fuera una gran consultora» (en la sala citó a Roland Berger) y el informe pasaba de 7 a 27 páginas. Hoy, si pides una consultoría o una auditoría, ya la hace con esa profundidad.

> «Lo cuentas con tus palabras, con tu forma de decírselo, y va a entenderlo perfectamente.» (Diego Renedo)

### Cómo se hace

1. **Objetivo**: Qué quieres conseguir y para qué lo necesitas.
2. **Contexto**: Qué sabes ya, para quién es y qué te interesa (solo una línea de negocio, solo una marca…).
3. **Fuente**: Dónde están los datos: una web pública, tu Analytics abierto en Chrome, Drive, tu correo. Si no lo sabes, pídele las fuentes.
4. **Formato y destino**: PDF, Word, PowerPoint editable o Excel, en el chat o en tu carpeta de Drive. Si no dices nada, tiende a darte HTML.
5. **Itera**: No te leas 27 páginas: pregúntale por lo que ha detectado, por qué pasa y qué harías.

#### Y luego, itera contra el resultado

- ¿Qué has detectado? Dámelo en 5 puntos.
- ¿Por qué no convierte? ¿Qué harías para que convierta?
- ¿Qué harías el mes que viene? ¿Qué riesgos ves?
- Sobre mis intereses, redúcemelo en 5 puntos y dime cuál es el clave.

> «Es importante decirle el objetivo que tienes.» (Rubén López)

### Constructor de prompts

Rellena tu caso y copia el prompt. Se escribe solo mientras rellenas.

Plantilla: «Quiero [tu objetivo]. Para que tengas contexto: [contexto]. Usa como fuente [la web, Analytics, Drive, tu correo…] o, si no lo sabes, dime antes cuáles son las mejores fuentes. Céntrate en [periodo o filtro]. Hazlo con la profundidad de una consultoría: resumen ejecutivo, tablas y conclusiones. Entrégamelo en [PDF, Word, PowerPoint editable, Excel] y déjalo [en mi carpeta de Drive / en mi correo como borrador]. Cuando esté bien, prográmalo para que se repita [cada lunes]. Si te falta algún dato, pregúntame antes de empezar.»

### Prompts de la sesión

**Informe de analítica web** (Extensión de Chrome)

```text
Tengo abierto Google Analytics en Chrome, tengo ya la extensión puesta y logueada. Saca la analítica de julio de 2026: canales, países, ciudades, páginas, landings más vistas y qué categorías de landing convierten. Filtra por servicio y taller. Hazme un informe en PDF con resumen ejecutivo, tablas y conclusiones, y súbelo a mi carpeta de Drive.
```

Qué salió: Un PDF de 7 páginas en unos 15 minutos. A mano, el mismo análisis llevaba 4 o 5 días.

**Datos de una web pública** (En directo)

```text
Hazme un informe del consumo de combustible para automóvil. Quiero conocer mes a mes cómo ha evolucionado respecto a años anteriores. Hazlo en PDF.
```

Qué salió: Con la web de estadísticas (CORES) abierta, navegó, aplicó filtros y bajó los Excel. Salió un informe de 7 páginas con el estilo de Reynasa, porque ese equipo tiene una skill de marca.

**Ventas desde tu base de datos** (Con un conector)

```text
Sácame de [tu base de datos] la venta de [producto] de julio por [centro], compárala con junio y mándame el resumen a mi correo.
```

Qué salió: En unos minutos llega un correo con la comparativa y una tabla que explica cómo lo ha calculado. Hay que explicarle qué significa cada dato (qué fecha, con o sin IVA).

**Organizar un viaje** (Navegador)

```text
Métete en Skyscanner y mírame un vuelo a Oporto para dentro de 3 días, para las cuatro personas que están en la información del correo.
```

Qué salió: Busca a las personas en el correo, elige vuelos y asientos y te deja el pago a ti: Claude no acepta contraseñas ni datos de tarjeta. Ojo con los datos personales de terceros (DNI).

**Resumen con un objetivo** (Cualquier web)

```text
Entra, lee y hazme un resumen en 50 palabras de lo que es y de qué podríamos hacer en base al objetivo que antes te he dicho.
```

Qué salió: Hace exactamente eso: 50 palabras orientadas a tu objetivo.

**Que se repita solo** (Tarea programada)

```text
Cuando el informe esté bien, prográmalo para que me lo saque todos los lunes a primera hora y lo deje en mi carpeta de Drive.
```

Qué salió: Lo que hoy pides una vez, mañana lo tienes cada semana sin pedirlo.

## 05 · Conectar Claude a tu día a día

Conectores, MCP y la extensión que navega con tu sesión.

Enlace: https://rubeniarey.github.io/formacion-claude/conectar/

### Conectores y MCP

> «El MCP es la llave que conecta las soluciones.» (Diego Renedo)

1. **Abre Conectores**: En Claude, el botón «Conectores»: Gmail, Calendar, Slack, Drive… Son bibliotecas que crecen cada semana (hay hasta de Higgsfield o de Plaud).
2. **Da los permisos justos**: La primera vez te pregunta qué permites: leer, escribir, dejar borradores… Con todos los permisos puede mandar correos.
3. **Pregunta como siempre**: «¿Qué tengo importante esta mañana?», «prepárame un borrador», «organízame las etiquetas».

- **MCP no nativos**: Aunque no haya conector oficial, se puede conectar. Rubén conectó Google Analytics y Search Console: «me da la vida para el análisis de la web».
- **Bases de datos**: Con un MCP a tu base de datos preguntas «la venta de ayer», por centros, por categorías o comparada con el año pasado.
- **Los datos hay que explicarlos**: La interpretación sigue siendo humana: dile qué fecha cuenta y si el importe va con o sin IVA.

### Cowork

Para que actúe en tus carpetas y en tus aplicaciones, casi siempre se usa **Cowork**, y Cowork **se usa en la app de escritorio**: «tienes que bajar la aplicación, no usarla en web». Así accede a tus carpetas y a tus conexiones.

> Nota: Matiz de Rubén: para algo sencillo, como dejar un borrador de correo, también vale el chat. No siempre necesitas Cowork.

> «Ya no hay que saber cómo se maneja, hay que hacer un prompt.» (Diego Renedo, sobre Google Analytics)

### La extensión de Chrome

Instala la extensión de Claude en Chrome, inicia sesión y **maneja tu navegador**: abre pestañas, navega y entra donde tú ya has entrado.

- **Con tu sesión**: No necesita tu usuario ni tu contraseña: deja la aplicación abierta en Chrome con tu sesión y entra «logueado».
- **Sin conector, también**: En un sistema que no tiene conector ve los botones, los va pulsando y analiza la estructura. La primera vez le lleva un rato.
- **No le molestes**: Si haces scroll o pinchas mientras trabaja, le estorbas: «se pone a trabajar con un ratón que no es el tuyo».
- **Google y Microsoft**: Funciona en los dos entornos. Si un sistema corre en Chrome, lo puede manejar. Y no rompe ni desconfigura nada.
- **Pagos y contraseñas**: No acepta contraseñas (te pide cambiarlas si se las das) ni datos de tarjeta. Lo arriesgado te lo deja a ti.

### Casos de la sesión

- **Consultoría de analítica** (Chrome + Analytics): Un informe de 7 páginas con canales, ciudades, landings y conversión, en unos 15 minutos. Después, iterar: «¿por qué no convierte?». Se puede programar cada lunes.
- **Combustible con datos públicos** (En directo): Desde la web de estadísticas CORES: navegó el árbol, aplicó filtros, bajó los Excel e hizo 7 páginas con la evolución mensual.
- **Ventas comparadas** (MCP): De la base de datos al correo: venta por centro, comparada con el mes anterior, con la tabla de cómo lo calculó.
- **Un viaje de empresa** (Navegador): Busca a los viajeros en el correo, compara vuelos y deja todo listo para que pagues tú.

> Ojo: Si una tarea usa datos personales de otras personas (DNI, teléfonos…), piensa antes si debes y puedes usarlos.

## 06 · Skills y el cerebro de la empresa

El contexto que no tienes que repetir cada mañana.

Enlace: https://rubeniarey.github.io/formacion-claude/skills/

### Qué son

No quieres explicarle cada mañana «los 20 gigas de información de la empresa». Una **skill** son instrucciones o información que, al invocarla, «corre primero».

1. **Créala hablando**: «Quiero que me hagas una skill que se llame Bienvenido [empresa], que tenga toda esta información».
2. **Que sea corta**: Que no pase de unas **2 páginas**: escueta, casi en formato índice. Si le metes 15 gigas, explota.
3. **Úsala**: Ahora las lanza solo cuando hablas del tema (a la derecha ves cuáles ha usado), o con la barra «/». A veces hay que pedirle que deje una.

### Tipos de skill

- **Índice de tus carpetas** (Contexto): Dice qué hay en cada carpeta de un repositorio grande. Truco de Rubén: pídele primero un inventario de dónde está cada cosa, y con eso haces la skill.
- **Estilo y marca** (Look & feel): Colores, logo y tipografía para que todos los PDF y presentaciones salgan con tu imagen y dejen de «parecer Claude».
- **Sistema de diseño** (Presentaciones): «Te paso una presentación que me gusta: sácame el sistema de diseño, colores con su código, tipografía y tamaños». Se guarda como skill.
- **Tu forma de responder** (Estilo): «Mira mi correo y cómo respondo, y responde como yo», hasta con tus palabras en inglés. «Después de un rato te conoce mejor que tú».
- **Un proceso del área** (Procesos): Alguien que domina un proceso lo deja en una skill y otra persona lo ejecuta para repetirlo igual.

> Nota: La skill es el estilo y la forma de expresarse; el prompt es lo que genera el archivo. Así lo resumió un asistente.

### Genera tu skill índice

Escribe tus carpetas y qué hay en cada una. Te devolvemos el esqueleto de una skill índice para pegarle a Claude.

Estructura de una skill índice: nombre y para qué sirve; «Dónde está cada cosa», con una línea por carpeta (carpeta y qué hay); y unas normas: lee solo la carpeta que necesites, no inventes lo que no esté y respeta los permisos de cada carpeta. Máximo, unas 2 páginas.

### Accesos y compartir

- **Tu rol manda**: «El límite de tu acceso viene con tu rol o tu usuario». Claude lo procesa más rápido, pero no llega más lejos que tú.
- **Ordena antes**: Lo importante es cómo está organizada la información por niveles de confidencialidad.
- **IT pone límites**: En empresas grandes IT controla comandos y descargas. Se puede trabajar con Microsoft Entra ID y Bitbucket.
- **Para compartirlas**: Mejor que la skill apunte a un sitio común (GitHub, Drive o SharePoint) que a una carpeta de tu ordenador. También se pueden enviar por correo.

## 07 · Correo, documentos y presentaciones

Todo a borrador, e informes y presentaciones con tu marca.

Enlace: https://rubeniarey.github.io/formacion-claude/correo/

### Correo

Distingue lo importante de lo publicitario, lo repetitivo y las respuestas automáticas. Con el calendario, tu correo es «una base de datos de información brutal».

> Ojo: **Regla de oro: todo a borrador.** «Cuidado, que es de botón rápido»: si le dices que responda, puede enviar sin que lo leas. Pide que las respuestas se queden en borrador (puedes ponerlo en una skill) y revisa destinatarios antes de enviar.

**Lo importante de hoy** (Correo)

```text
Hazme el resumen de los correos importantes de esta mañana.
```

**Lo que se te escapa** (Correo)

```text
Revísame la última semana y dime si tengo cosas sin contestar.
```

**Respuestas en borrador** (Correo)

```text
Hazme una propuesta de respuesta en formato borrador para los correos que me quedan sin contestar.
```

**Ordenar la bandeja** (Correo)

```text
Propónme una estructura de etiquetas para mi correo y, cuando la apruebe, ordena los correos de los últimos 15 días.
```

> Nota: Caso de Rubén: sus agentes le llenan el correo, así que escribe «ordena correo agentes» y una skill mueve cada mensaje a la carpeta de su agente.

### Informes y formatos

| Si pides… | Lo que hace |
| --- | --- |
| Nada en concreto | Tiende a darte HTML. «Difícilmente compartible y difícil para el móvil». |
| Un documento | Word, si no dices otra cosa. |
| PDF | Lo genera y, si Drive está conectado, lo deja en tu carpeta. |
| PowerPoint editable | También: lo propuso una asistente en la sala. |

Los documentos «parecen muy Claude»: burbujas, porcentajes y colores. Se arregla con una skill de estilo de la casa, para que salgan con tu marca.

### Presentaciones con tu marca

1. **Saca tu sistema de diseño**: Pásale una presentación que te guste y pídele colores con su código, tipografía, tamaños y una plantilla de unas 10 diapositivas (portada, intermedias, contenido, huecos para fotos e índice).
2. **Guárdalo como skill**: Que apunte a un repositorio con el logo y una presentación de prueba.
3. **Pide la presentación**: «Hazme la presentación de la reunión de este mes», con la carpeta de las anteriores. Sale con el orden y el número de diapositivas de siempre.

> «Así deja de parecer Claude: se parece a las viejas tuyas.» (Diego Renedo)

## 08 · Claude Code para no programadores

Software propio sin saber programar.

Enlace: https://rubeniarey.github.io/formacion-claude/claude-code/

### Qué es

La parte de Claude para hacer software: una app propia, un script, una tarea que se ejecute cada mañana, una app de móvil o un programa con usuario y contraseña.

- **App de escritorio** (La de Rubén): Para quien no programa. «Todo funciona igual».
- **VS Code + extensión** (La de Diego): Visual Studio Code con la extensión de Claude de Anthropic. «Es más para programadores».
- **Desde la web** (Code): También se puede entrar por Code en Claude, aunque a Diego no le parece del todo cómodo.

> «No necesitáis conocer los softwares que os instaláis.» (Diego Renedo)

Python, Node, Flutter, Docker, HTML… «Os acabáis de convertir en expertos de todas estas tecnologías». Si no sabes qué usar, te lo propone, y te lo descarga.

### Instalar y empezar

1. **Instala Claude Code**: La app de escritorio, o VS Code con la extensión de Claude (en Extensiones, la de Anthropic). Aparece el icono a la izquierda: nueva sesión y a escribir.
2. **Instala Python y Git**: Python desde su web oficial (la parte de descargas), porque los scripts los hará en Python. Git, para poder volver atrás.
3. **Crea tu carpeta de trabajo**: Una carpeta (por ejemplo, «Claude») con subcarpetas para apps, extracción de datos… Según la carpeta que abras, verás unas sesiones u otras.
4. **Dile qué quieres**: Una app de móvil, una web, un programa para tu ordenador o un software con URL y usuario. Y cómo quieres trabajar: «al tirón» o paso a paso.
5. **Si te atascas, pregúntale**: «Cuando tengáis dudas, preguntadle a Cowork»: mándale una captura de pantalla.

> Nota: Se puede manejar desde el móvil: «te lo pones en el móvil y le dices: prográmame una aplicación».

### Permisos

Claude Code pregunta antes de actuar, y tú decides cuánto. Mueve el selector para ver cada modo.

| Modo | Qué hace | Cuándo |
| --- | --- | --- |
| Manual (por defecto) | «Os va a pedir permiso para todo». | Para empezar. |
| Automático | Decide solo lo rutinario. | Cuando ya te fías del proyecto. |
| Bypass permissions | Pregunta lo conceptual al principio y llega al final sin preguntar. | Solo en una carpeta de pruebas y con Git. |

### Git y GitHub

> «El commit es un guardar como.» (Diego Renedo)

- **Commits**: Si una versión nueva rompe algo, vuelves a la anterior. Claude se encarga de hacerlos «sin que os enteréis».
- **GitHub**: Para compartir entre varios: repositorios públicos o privados, páginas web con un enlace y skills compartidas. Te das de alta con tu cuenta de Google y es gratis.
- **Enlaces privados**: «Un dominio súper feo con un token»: si no te lo comparten, no lo tienes.
- **En entornos Microsoft**: También funciona con Azure, Bitbucket y Entra ID.

## 09 · Datos: extraer, limpiar y vigilar

De la web a tu Excel, y que se repita solo.

Enlace: https://rubeniarey.github.io/formacion-claude/datos/

### Extraer de la web

Las bases de datos «antes se compraban». Ahora le pides el qué y Claude Code monta el script, lo lanza, lo vigila y te deja un Excel que se rellena en tiempo real.

**Talleres de una zona** (Claude Code)

```text
Quiero una base de datos de los talleres de Madrid y Guadalajara: nombre, teléfono, dirección, web, categoría, valoración y coordenadas. Móntate un script en Node que recorra Google Maps por cuadrículas y vaya guardando en un Excel con tres hojas. Haz las consultas con esperas aleatorias de 3 a 25 segundos y guarda cada poco, para poder seguir si se corta.
```

Qué salió: Un Excel con **7.175 talleres** en alrededor de una hora, separados en mecánicos, carroceros y cristales.

- **Sé un poco listo**: Si es grande, que vaya guardando por el camino y pueda reanudar.
- **No se lo inventa**: «Si hay alguna cosa que no tiene capacidad, no se lo inventa».
- **Con interfaz**: Puede hacerte una ventanita: eliges categoría y provincia y te deja el Excel.

> Ojo: Respeta las condiciones de uso de cada web y no te saltes sus protecciones (captchas, bloqueos). Si la base tiene datos de contacto y la vas a usar para campañas, cumple la normativa de protección de datos y de comunicaciones comerciales.

### Limpiar y confiar

Lo mismo sirve para tus datos internos: una base de datos sucia en SharePoint o un Excel heredado.

- Normalizar nombres (quitar «S.L.», buscar el nombre comercial).
- Separar por tipo y llevarlo a un mapa.
- Encadenar scripts sencillos: sacar las URL de las fotos, descargarlas y renombrarlas por EAN.

#### La confianza se gana con catas

Al principio verificas: abres la URL de origen, compruebas que coinciden el precio, el EAN y la descripción, haces una cata y te fías. «Esas catas de revisión las puedes hacer con todo», dijo un asistente.

### Vigilar y programar

Ejemplo de la sesión, en abstracto: seguir cada día los precios públicos de un catálogo de la competencia.

**Seguimiento diario de precios** (Tarea programada)

```text
Quiero seguir los precios de [catálogo público]. Sácame el catálogo entero con referencia, EAN, marca, nombre, precio con y sin IVA y disponibilidad, y déjalo en un Excel fechado. Que vaya guardando por el camino para poder reanudar. Cuando funcione, quiero que se ejecute solo todos los días a las 7:00 y me deje el fichero del día.
```

Qué salió: Cada fila lleva la URL de origen para comprobarla, y se cruza por EAN con tu catálogo.

#### Planifica tu tarea

Frase tipo: «Cuando funcione, quiero que se ejecute solo [cada día / cada lunes] a las [hora] y me deje [el fichero] en [la carpeta]. Si mi ordenador está apagado, hazlo desde GitHub».

> Nota: Las tareas pueden correr en tu equipo o desde GitHub, sin tu ordenador. Rubén tiene un calendario que se actualiza tres veces al día con una rutina de Claude.

## 10 · Construir cosas

Apps, webs, vídeo y agentes que trabajan por correo.

Enlace: https://rubeniarey.github.io/formacion-claude/construir/

### Apps internas y móviles

1. **Del ZIP a una URL**: Las primeras apps eran un ZIP que había que instalar en cada ordenador. Ahora se hacen en GitHub como una URL con dominio, login, roles y administrador.
2. **Piensa como informático**: Pide **registros (logs)** de todo: quién entra, cuándo, cuánto lo usa. Sirven para mejorar.
3. **Mejora por versiones**: Primero sin roles, luego con roles, estadísticas, administrador…

- **Del folio a una app con roles** (RR. HH.): Quien entrevista ve el CV y los datos; quien da de alta tiene su formulario; un botón prepara el correo para la gestoría en el formato exacto. Con datos personales, cumple la normativa.
- **Una app de móvil en 2 tardes** (APK con Flutter): Pides un APK, Claude descarga Flutter y compila en tiempo real; te la descargas, la pruebas y cambias colores o botones en un rato.

> «La intención es sacar más trabajo y no despedir a nadie.» (Diego Renedo)

### ¿Lo hago yo o va a IT?

Cuatro preguntas para saber si es una solución satelital que te haces tú o algo que tiene que pasar por IT.

| Situación | Qué hacer |
| --- | --- |
| Solo para ti, sin datos personales y sin tocar sistemas | Hazlo tú: es satelital. |
| Se conecta a sistemas de la empresa o lo usará mucha gente | Haz un prototipo y llévaselo a IT para que lo asegure. |
| Usa datos personales o confidenciales | Antes, habla con IT y con protección de datos. |

### Webs y tienda

- **Un buscador en una tarde** (Web): «Hazme un buscador de neumáticos» con los datos sacados antes: un catálogo en una URL que filtra por medida «sin que se lo pidas», con ficha, foto y precio.
- **Tu tienda online** (E-commerce): Dominio, servidor, estudio de la competencia, la web y las campañas. Para cobrar, Claude te propone Stripe y Cowork configura la pasarela.
- **WhatsApp en la web, sin IT** (Tag Manager): «Hazme un plugin de WhatsApp para la web» y, si la web tiene Tag Manager, Cowork lo mete sin pedir ayuda a IT.
- **Licitaciones públicas** (Tablero): Un tablero tipo Trello que recoge licitaciones del BOE y de ayuntamientos, con fechas, importes y pliegos.
- **Campañas de Google Ads** (Marketing): Con Semrush abierto: «dime las keywords con sentido para mi negocio y configúrame campañas con un CPC máximo de 0,50». «Ya no las hacemos a mano».

> «Creedos que sois capaces de hacer webs profesionales.» (Diego Renedo)

### Vídeo y agentes

- **Claude conecta, no genera vídeo**: Se conecta a herramientas especializadas (Higgsfield para imagen, vídeo y voz) y edita con HyperFrames o Remotion. Son de pago, «pero tampoco es tanto dinero».
- **Un canal de YouTube automatizado**: Rubén manda un audio desde el móvil; Claude investiga en Analytics, Search Console y YouTube, monta el vídeo con su voz y su avatar, lo sube y saca los shorts para las redes.
- **Agentes que trabajan por correo**: Un agente con su propio buzón al que cualquier persona escribe y que responde con la tarea hecha en 20 o 30 minutos. Aprende con skills hechas a partir de grabaciones del trabajo de cada área.
- **Reuniones grabadas**: Con Plaud y su MCP, Claude accede a la transcripción y al resumen, y te recuerda los compromisos. Diego lo usa en el coche: «cuando llegas tienes el PowerPoint hecho».

> Ojo: Con vídeos e imágenes de terceros, asegúrate de tener derecho a usarlos: no hay un número de segundos que lo haga seguro. Y si grabas una reunión, avisa a quienes participan.

## 11 · Seguridad, costes y lo que viene

Checklist, riesgos, hacia dónde va y tus deberes.

Enlace: https://rubeniarey.github.io/formacion-claude/seguridad/

### Checklist

Para repasar antes de conectar nada. En la web se puede ir marcando.

#### Antes de conectar

- [ ] Uso mi cuenta de la empresa: lo que ve Claude es lo que ve mi usuario.
- [ ] En un equipo personal no meto documentos de la compañía.
- [ ] Sé qué información es confidencial y dónde está.

#### Antes de dar permisos

- [ ] Las respuestas de correo se quedan en borrador.
- [ ] No le doy contraseñas ni datos de tarjeta.
- [ ] El modo sin permisos, solo en una carpeta de pruebas.
- [ ] Uso Git para poder volver atrás.

#### Con datos de personas

- [ ] Si uso datos personales, tengo base legal y lo he consultado.
- [ ] Para envíos comerciales, cumplo la normativa y las condiciones del canal.
- [ ] Aviso cuando grabo una reunión.

#### Antes de pasar a producción

- [ ] Lo reviso con IT y lo aseguran contra su servicio o API.
- [ ] Tiene login, roles y registros (logs).
- [ ] He hecho catas del resultado.

#### Contenidos y servicios de terceros

- [ ] Respeto las condiciones de uso de las webs.
- [ ] Tengo derecho a usar las imágenes y los vídeos.
- [ ] Una licencia por persona.

### Lo que hay que vigilar

- **Puede equivocarse** (Fiabilidad): Cada vez menos, pero se hacen catas. «Claude puede cometer errores… ¿y tu compañero de trabajo no?». «Esto no toma las decisiones por ti».
- **Datos de personas** (RGPD): DNI, currículos, Seguridad Social, salarios o teléfonos: aunque la app sea solo tuya, necesita base legal y cuidado.
- **Equipo personal** (Pruebas): Probar en casa está bien, pero «no utilices documentos de la compañía».
- **Licencias** (Legal): Una cuenta por persona, como dicen las condiciones de cada servicio.
- **Webs y contenidos ajenos** (Legal): Respeta las condiciones de uso, sin saltarte captchas ni bloqueos, y los derechos de imágenes y vídeos.
- **Trabajar más horas** (Personas): «Acabas trabajando el fin de semana». Productivo por 3, sí, pero con límites.

### Hacia dónde va

- **Hace 3 años · Tareas de 5 minutos**: Redactar un correo.
- **Hoy · Tareas de una semana**: Coge 25 documentos de tu empresa y te crea un PowerPoint.
- **2027 · Tareas de meses**: «Toda esa exponencialidad converge en 2027».

- **Cada 3 o 4 meses**: Los modelos duplican capacidades en los exámenes que se les hacen (antes, cada seis meses).
- **Menos alucinaciones**: Cada modelo nuevo alucina mucho menos que el anterior.
- **El software tradicional**: Diseño, edición, formularios… «Claude edita, Claude hace».

> «O te formas en esto o estás fuera completamente.» (Rubén López)

> Nota: Datos y previsiones dichos en la sesión, sin comprobar.

### Deberes

1. **Instala**: La app de escritorio de Claude (para Cowork), la extensión de Chrome, Python y Git. Si te animas, Claude Code.
2. **Conecta**: Tu correo, tu calendario y lo que uses a diario.
3. **Ordena tu correo**: Pide una estructura de etiquetas, crea una skill de respuesta y revisa lo pendiente de los últimos 15 días, todo a borrador.
4. **Haz tus skills**: De contexto, de estilo y de índice. Cortas.
5. **Piensa tu caso**: «Dormirlo un par de noches y cada uno pensar cómo se adapta» a su trabajo.
6. **Si tu empresa lo limita**: Habla con IT y ciberseguridad con un objetivo claro.

> «Preguntadle a Claude, que os va a dar las soluciones.» (Diego Renedo, al cerrar)

### Ponte a prueba

Diez preguntas sobre lo que vimos. Elige una respuesta en cada una.

1. ¿Qué es un commit? Respuesta: Un «guardar como» para poder volver atrás
2. ¿Para qué sirve un MCP? Respuesta: Es la llave que conecta Claude con otras herramientas
3. ¿Cuánto debería ocupar una skill? Respuesta: Unas 2 páginas como mucho, tipo índice
4. ¿Qué hace el modo «bypass permissions»? Respuesta: Pregunta al principio y llega al final sin preguntar
5. ¿Qué conviene hacer con las respuestas de correo? Respuesta: Que se queden primero en borrador
6. ¿Qué hace Claude si le das una contraseña? Respuesta: No la acepta y te pide que la cambies
7. Además del objetivo, ¿qué conviene darle? Respuesta: La fuente, o pedirle las mejores fuentes
8. ¿Cómo entra la extensión de Chrome en tus aplicaciones? Respuesta: Con tu sesión ya iniciada en Chrome
9. Si no le dices el formato, ¿qué tiende a darte? Respuesta: HTML
10. ¿Qué plan se recomendó para trabajar sin miedo? Respuesta: El de 100 €
