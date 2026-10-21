# Formación Claude · Reynasa × Aurgi × Grupo Mutua

Resumen completo, en texto, de la formación sobre Claude del 20 de octubre de 2026, impartida por Diego Renedo (Aurgi) y Rubén López (Reynasa) para un equipo de Grupo Mutua. Es la versión para leer con una IA de la web https://rubeniarey.github.io/formacion-claude/

Úsalo como contexto: si tienes una duda sobre cómo hacer algo con Claude, pregunta con este documento cargado (por ejemplo, en un proyecto de Claude llamado «Formación»). Resumen de Reynasa sobre la formación. Claude y Anthropic son marcas de Anthropic; esta web no es una página oficial de Anthropic. Los datos marcados «dicho en la sesión» no se han comprobado.

Descargas: https://rubeniarey.github.io/formacion-claude/descargas/ (la presentación que se proyectó en la sesión y una versión corporativa, las dos en PDF y PowerPoint; el resumen en PDF y Word; la chuleta de prompts y un PDF por sección).

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

> Nota: La presentación que proyectó Diego está en Descargas, en PDF y PowerPoint. Rubén ofreció además la transcripción completa de la sesión a quien se la pida.

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

## Anexo · La presentación de la sesión, en texto

«Cómo trabajo con Claude», de Diego Renedo, tal como se proyectó (34 diapositivas). En PDF y PowerPoint en https://rubeniarey.github.io/formacion-claude/descargas/

### Diapositiva 1

MUTUAMAD MOTOR NETWORK · AURGI · MOTORTOWN · REYNASA · AUTINGO
Cómo trabajo con Claude
No es un chat al que se le hacen preguntas. Es una plantilla entera de trabajadores a la que se le encargan cosas — y cabe en tu portátil.
PRIMERA PARTE
Cowork
El equipo de secretarios. Informes, correos, datos, papeles.
SEGUNDA PARTE
Claude Code
El equipo de IT. Aquí ya no se piden cosas: se construyen.
Diego Renedo
Curso interno · agosto de 2026
Se pasa con ← y →, o pinchando
a izquierda y derecha de la pantalla.

### Diapositiva 2

2 · ANTES DE EMPEZAR · POR QUÉ ESTO NO ES «UN CURSO MÁS»
No es una herramienta nueva. Es otra forma de trabajar con lo digital.
Hasta ahora el ordenador era algo que manejabas: abrir programas, rellenar casillas, copiar y pegar. Esto no se maneja: se le encarga. Y vuelve con el trabajo hecho.
1
Es tecnología de alto rendimiento
No es un chat que contesta: es una máquina que ejecuta. Entra en tus ficheros, en la base de datos y en la web, y vuelve con el resultado. Lo de tres horas sale en tres minutos.
2
Y lo que cambia no es la herramienta: es la relación
Dejas de operar programas y empiezas a encargar resultados. Se parece más a dirigir un equipo que a usar un software. Eso es lo que hay que aprender aquí, y no dónde está cada botón.
3
No es el futuro: es lo de este año
Nada de lo que vas a ver hoy es una demo de congreso. Está hecho, funcionando y con su enlace, y se hizo en esta casa.
4
Y todavía no hay dónde aprenderlo
No hay un curso oficial, ni un máster, ni un tutorial que aguante dos meses. Lo que hay es gente usándolo todos los días. De ahí sale esta clase.
No hay manual. Te lo enchufas.
LA CUENTA QUE NO CUADRA
Un máster dura 18 meses. Claude Code lleva 17 abierto a todos. Y el modelo con el que trabajamos hoy lleva un mes. Ningún curso llega a tiempo.
LA LÍNEA DE TIEMPO ENTERA · DE AQUÍ A HOY, 20 MESES
feb 2025
Claude Code
solo en pruebas
may 2025
abierto a todo
el mundo
Q2 2026
lo empezamos aquí
Aurgi · Motortown
9 jun 2026
sale Fable 5
el «modo sport»
24 jul 2026
sale Opus 5
el salto de nivel
ago 2026
el modo auto pasa
a ser el normal
22 sep 2026
sale Opus 5.5
el que usamos hoy
Nadie tiene diez años de experiencia en esto. Nadie tiene ni dos.
Por eso no hay cursos: no ha habido tiempo de escribirlos.

### Diapositiva 3

3 · QUÉ ACABAS DE FICHAR
Claude no es un chat.
Son dos equipos en tu nómina.
COWORK
· en el mismo cuadro que el chat
Tu equipo de secretarios
Diligentes, incansables y con la carpeta preparada antes de que la pidas.
Se lee 400 correos y un PDF de 90 páginas. Y te lo resume.
Redacta, ordena, archiva y te prepara la reunión de mañana.
Se conecta a tu Drive, Gmail, Slack, Trello, Metabase…
Sigue trabajando con el portátil cerrado.
«Enseguida, señor.»
CLAUDE CODE
· app de escritorio o VS Code
Tu equipo de IT
Los frikis de informática. Sin ticket, sin cola y sin «ábrenos una incidencia».
Escribe el código, lo prueba, lo arregla y lo sube.
Entra en la BBDD y saca la consulta que pediste en marzo.
Automatiza eso que haces a mano cada lunes.
Vive en tu terminal, con acceso real a tus ficheros.
compilando…
Mismo cerebro. Dos uniformes. Un solo jefe: tú.
Y ninguno de los dos se pide vacaciones en agosto.

### Diapositiva 4

4 · COWORK · A QUIÉN LE QUITA EL TRABAJO
Las 37 profesiones que ya no tienes que subcontratar.
Cowork no hace «cositas de ordenador». Hace el trabajo que hoy pagas por horas: leer, cuadrar, redactar, cruzar y dejarlo presentable.
Burns lo vio venir.
Agente de atención al cliente
Técnico de conciliación bancaria
Contable general
Operador de introducción de datos
Cuentas a pagar
Analista de costes
Asistente de dirección
Planificador de demanda
Técnico fiscal / impuestos
Tesorería
Analista de negocio / BI
Técnico de recursos humanos
Responsable de cierre contable
Cuentas a cobrar
Consultor de logística
Administrativo / back office
Consolidación e intercompany
Técnico de nóminas / laboral
Comunicación interna
Apoyo a auditoría
Controller financiero
Analista de precios
Analista de operaciones
Gestor de cobros y riesgo de crédito
Jefe de proyecto / PMO
Documentalista / gestión del conocimiento
Cuentas anuales y memoria
Redactor de contenidos / copywriter
Traductor / adaptador de contenidos
Comprador / responsable de proveedores
Consultor estratégico
Analista de M&A / corporate finance
Investigador de mercado
Contabilidad de inmovilizado
Técnico de cumplimiento / apoyo jurídico
Community manager / gestor de reputación
Analista de competencia / inteligencia de mercado
37 oficios. Un solo sitio: la app de escritorio.
No sustituye a la persona: sustituye las tres horas de copiar y pegar.

### Diapositiva 5

5 · CONECTAR CLAUDE CON TU MUNDO
¿Cómo se entera Claude de lo que pasa en tu empresa?
QUÉ ES UN MCP
Un enchufe. El cable que une a Claude con una herramienta que ya usas —Gmail, Drive, Slack, Microsoft 365, BigQuery—. Lo enchufas una vez y desde entonces Claude entra ahí y trabaja como tú: busca, lee, cruza y escribe.
Ajustes → Conectores. Dentro de Claude, no en la herramienta.
Buscas la herramienta y pulsas «Conectar».
Aceptas los permisos en la pantalla de la propia herramienta. Ya está: nada que instalar, ningún ticket a IT.
Claude solo ve lo que tú le has enchufado. Lo que no conectas, para él no existe.
Y ENTONCES YA LE PUEDES PEDIR
«Saca de Metabase la venta de neumáticos de julio por autocentro, compárala con junio y mándame el resumen a mi correo.»
Dos enchufes en la misma frase: Metabase y Gmail.
«¿Y esto lo enchufo dónde?»
Gmail
Calendar
Drive
Slack
Microsoft 365
BigQuery
Metabase
+ cientos
¿Y SI ESA HERRAMIENTA NO TIENE MCP?
A través de la extensión de Chrome.
Si se usa con navegador, Claude la usa contigo: entra por tu sesión ya abierta, navega, rellena y lee la pantalla. Power BI, Trello, el portal del proveedor, ese ERP con veinte años… lo que no tiene conector, tiene navegador.

### Diapositiva 6

6 · EJEMPLO PRÁCTICO · EMPLEO: ANALISTA DIGITAL
Analytics abierto, una frase, y el informe hecho.
EL PROMPT · TAL CUAL, SIN TRUCOS
Tengo abierto Google Analytics en Chrome, propiedad www.autingo.es. Saca la analítica de julio de 2026: canales, países y ciudades, páginas y landings más vistas, y qué categorías de landing convierten (filtra por /servicio, /taller-mecanico, /problemas y /recambios). Hazme un informe en PDF con resumen ejecutivo, tablas y conclusiones, y súbelo a mi carpeta de Drive «Curso Claude».
Tú dejas Analytics abierto en el navegador, con la propiedad buena. Nada más.
Claude entra por la extensión de Chrome: cambia el rango a julio, abre cada informe, filtra por ruta y se lee las tablas.
Devuelve el PDF y lo deja en Drive. Cero copiar y pegar, cero exportar a Excel.
Los cinco números de abajo y el PDF del enlace salieron exactamente así, sin abrir un Excel. Lo importante es la última frase del prompt: decirle dónde tiene que dejar el resultado.
El analista de guardia.
EMPLEO DE LA DIAPO
Analista digital
98.540
SESIONES
EN JULIO
70,3 %
BÚSQUEDA
ORGÁNICA
38.676
CITAS
CONCERTADAS
80 %
DE LAS CITAS SALEN
DE /SERVICIO
43.702
LANDINGS
DISTINTAS
Abrir el informe completo  →
6 páginas · PDF en Drive · carpeta «Curso Claude»

### Diapositiva 7

7 · CASO PRÁCTICO · EMPLEO: ANALISTA DE MERCADO
Una web pública, una frase escrita de cualquier manera, y un informe de nueve páginas.
EL PROMPT · LITERAL, TAL Y COMO LO ESCRIBÍ
hazme un informe del consumo de combustible para automovil https://www.cores.es/es/estadisticas, quiero conocer mes a mes, como ha evolucionado respecto a años anteriores, hazlo en pdf
Tú das la fuente y la idea. Ni te descargas nada, ni le dices qué ficheros hay ahí dentro, ni cuidas la ortografía.
Él entra, baja las estadísticas oficiales y cruza 90 meses: de enero de 2019 a junio de 2026, separando gasolinas de gasóleos y por comunidad autónoma.
Y devuelve el PDF montado: resumen ejecutivo, gráficos, tablas año a año y conclusiones. Nueve páginas.
Lo que no le pregunté —y es lo que salva el informe: cuatro de los seis meses caen respecto a 2025, y con eso podrías salir a contar que el consumo se hunde. El informe avisa de que es efecto calendario (días laborables, y la Semana Santa cinco semanas antes que en 2025) y que lo que hay que mirar es el acumulado. Eso ya no es un gráfico: es criterio.
Consumo de combustible. Sin depósito.
EMPLEO DE LA DIAPO
Analista de mercado
14,35 Mt
ENERO-JUNIO 2026 · EL MEJOR
PRIMER SEMESTRE DESDE 2010
+6,9 %
JUNIO · TERCER MEJOR
JUNIO DE LA SERIE
+7,3 / −1,0
% GASOLINAS FRENTE
A GASÓLEOS
74,2 %
YA SOLO ES GASÓLEO
(81,2 % EN 2019)
90
MESES CRUZADOS
DE UNA WEB PÚBLICA
Abrir el informe  →
9 páginas · datos de CORES · PDF en Drive

### Diapositiva 8

8 · EL CONTEXTO · QUÉ SON LOS SKILLS
Sin contexto improvisa. Con un skill, sabe de tu casa.
Los conectores le dan acceso. Los skills le dan criterio: saber qué mirar, cómo lo llamamos aquí y cómo lo quieres tú.
QUÉ ES UN SKILL
El manual de la casa. Una carpeta de instrucciones que Claude abre solo cuando toca el tema: cómo llamáis a las cosas aquí, dónde están los datos buenos, qué formato quieres y qué errores no repetir.
PARA QUÉ SIRVE
No volver a explicar lo mismo cada lunes.
Que salga siempre igual: mismas fuentes, mismo formato.
Que lo aprendido no se pierda al cerrar el chat.
Pasárselo a otro: un skill es un archivo.
CÓMO TENER LOS TUYOS
Trabaja el asunto una vez a fondo con Claude.
Dile: «hazme un skill de esto». Te da un .skill.
Lo guardas y se activa solo cuando hablas del tema.
Entrar a la reunión sin contexto.
EJEMPLO
Un skill para los datos económicos de Aurgi
Se lo pides una vez. Lo usas todos los meses.
Hazme un skill que se llame «económico Aurgi». Tiene que saber que somos 162 autocentros (98 Aurgi + 64 Motortown), que los datos viven en Metabase, y qué tablas y campos valen para venta, margen y ticket medio. Que use nuestros nombres —autocentro, no «tienda»—, que responda siempre con el mes cerrado y comparativa con el año anterior, y que incluya los cinco cuadros que pido siempre. Apunta dentro los errores a no repetir.

### Diapositiva 9

9 · REPOSITORIOS DE TRABAJO
El skill dice cómo. El repositorio guarda el qué.
Un skill no tiene por qué ser un texto suelto: puede apuntar a una carpeta con todo lo de casa —tarifas, cierres, contratos, plantillas, históricos— y abrir solo lo que hace falta en cada pregunta.
«Todo esto lo tengo aquí.»
En tu equipo
CARPETA LOCAL
La conectas a la sesión con «Add folder», o la abres con Claude Code desde VS Code. Para lo que no debe salir de tu máquina.
Compartida
DRIVE · SHAREPOINT
Todo el equipo mira la misma versión. El skill apunta a la carpeta, no a tu copia del escritorio. Si alguien actualiza el fichero, Claude ya lee el nuevo.
En la base de datos
METABASE · BIGQUERY
Aquí no hay ficheros: hay consultas. El skill guarda qué tablas valen, cómo se preguntan y qué filtros pones siempre.
El skill no guarda la información: guarda el mapa. Por eso puede haber 20 GB detrás y seguir yendo rápido — abre el fichero que toca, no los novecientos.
Antes de enchufar la carpeta: si dentro hay datos de personas —nóminas, DNI, historiales—, déjalo escrito en el skill: qué se puede usar y qué no sale de ahí.
EJEMPLO
Darle biblioteca al skill económico
El índice se hace una vez; se usa siempre.
Vincula el skill «económico Aurgi» a la carpeta compartida de Drive Dirección/Económico. Dentro están: los cierres mensuales en /cierres, las tarifas de proveedor en /tarifas, el presupuesto en /presupuesto y las plantillas de informe en /plantillas. Recórrela, hazme un índice de qué hay en cada sitio y guárdalo dentro del skill. Cuando te pida un mes, abre solo el cierre de ese mes y la plantilla: no te leas la carpeta entera.

### Diapositiva 10

10 · TODO JUNTO
Ya no son piezas sueltas: es el cerebro de tu negocio.
Cinco lóbulos y un único sitio donde preguntar. Lo de dentro y lo de fuera, el criterio de casa y la memoria de todo lo que habéis hecho.
Antes el mapa era otro.
01
Conectores
Los datos de casa: Gmail, Drive, Slack, Metabase, BigQuery.
02
Extensión de Chrome
Todo lo que no tiene conector: Power BI, Trello, el portal del proveedor, el ERP viejo.
03
Skills
El criterio: cómo se llaman las cosas aquí y cómo las quieres.
04
Repositorios
La memoria: carpetas, cierres, tarifas, contratos y la base de datos.
05
Internet
Lo de fuera: mercado, competencia, normativa, precios del sector.
Y todo eso, a un prompt de distancia.
El mismo cerebro, tres oficios distintos. Ninguno pide una reunión previa.
CONTROLLER
«Cierra el mes: cuadra Metabase con el presupuesto y dame las desviaciones de más de 5.000 €.»
COMPRADOR
«Compara la tarifa nueva del proveedor con la del año pasado y dime dónde perdemos margen.»
ANALISTA DIGITAL
«Sácame la analítica de julio de autingo.es y déjame el PDF en Drive.» — hecho en la diapo 6.

### Diapositiva 11

11 · EL CORREO
La bandeja, ordenada por quién te está esperando.
Etiquetar, ver quién te escribe de verdad, sacar lo que dejaste sin contestar y traerte el borrador ya redactado. Con tu forma de escribir, no la de un robot.
El sistema anterior.
Etiquetas automáticas
Quién te escribe
Sin responder
Borradores listos
Tu estilo
EL PROMPT
Revisa mi correo y dime qué he dejado sin contestar de la última semana y qué exige respuesta urgente. Etiqueta lo que sea proveedores, cobros y boletines. Y hazme un skill que escriba como yo, a partir de mis correos enviados, para que los borradores salgan con mi tono.
BORRADOR QUE PROPONE · EN TU TONO
«Buenos días Ana: lo reviso hoy y te confirmo el precio cerrado antes de las 14:00. Un saludo!!»
Saludo con nombre, frase corta, compromiso con hora. Aprendido de tus propios correos.
LO QUE TE DEVUELVE
ejemplo ilustrativo
Talleres Berbel S.L.
Presupuesto flota — 6 días sin respuesta
Te piden precio cerrado antes del viernes. Borrador preparado.
URGENTE
Neumáticos Duarte
Facturas vencidas mayo–junio — 4 días
Reclaman 3 facturas. Falta confirmar fecha de pago.
URGENTE
Ana Vidal · RRHH
Turnos de agosto — 3 días
Esperan tu visto bueno para cerrar el cuadrante.
URGENTE
18 correos de proveedores
etiquetados «Proveedores / Cobros»
Ninguno pide respuesta hoy.
ORDENADO
34 boletines y avisos
etiquetados «Leer luego»
Fuera de la bandeja principal.
ORDENADO
Tres respuestas que faltaban. Once minutos, no una mañana.
Ejemplo ilustrativo: los remitentes y las cifras son inventados.

### Diapositiva 12

12 · QUÉ MODELO ELIJO
Tú solo eliges el modo. El resto ya viene puesto.
No hay que estudiarse un catálogo: Opus 5.5 o Sonnet 5.5 para casi todo y Fable 5.1 cuando el problema pesa de verdad. Con eso tienes resuelto el día a día.
LO QUE YA SABE · DE ALUMNO DE ESO A SÚPER EXPERTO EN SEIS AÑOS
ESO
GPT-3 · 2020
Bachillerato
ChatGPT · 2022
Universitario
GPT-4 · 2023
Doctorado
o1 · 2024
Experto
2025
Súper experto
Opus 5.5 · el que usas
Todos esos mandos, y tú tocas uno.
POR DEFECTO
Opus 5.5
MODO NORMAL
Rinde casi al nivel de Fable y cuesta bastante menos. Vale para casi todo lo que haces: analizar, redactar, cruzar datos, sacar el informe. Déjalo puesto y olvídate.
Para casi todo, todos los días.
Fable 5.1
MODO SPORT
El más potente. Para el trabajo serio y muy agéntico: muchas variables, un análisis retorcido, una tarea larga de muchos pasos. Es el más caro y el que antes se come tus límites semanales. Úsalo a propósito, no de fábrica.
Para el problema que se te atraganta.
Sonnet 5.5 · Haiku 5.5
MODO ECO
Sonnet 5.5 se acerca mucho a Opus: muy capaz, más rápido y más barato, y vale para la mayoría de tareas. Haiku 5.5, solo para lo muy básico y de volumen: resumir, clasificar, ordenar.
Sonnet para el día a día, Haiku para lo mecánico.
Opus o Sonnet para casi todo. Fable cuando notes que el problema pesa.
Nunca al revés: empezar en sport es quedarse sin gasolina a media mañana.
LA CUENTA QUE USAMOS
100 € al mes
Con eso ya tienes todo: Opus puesto el día entero y Fable cuando haga falta, sin mirar el contador.

### Diapositiva 13

13 · GUARDAR VERSIONES · GIT
Cada commit es una versión congelada a la que puedes volver.
Es el equivalente a ir guardando, pero con memoria: guarda el estado completo de la carpeta y te deja volver a cualquier punto anterior. Si algo se tuerce, no has perdido la mañana.
Una versión, bien conservada.
Instalas Git una vez. Se descarga de git-scm.com y se acabó; no hay que aprender nada más.
Le dices a Claude: «inicia un repositorio aquí». Él monta el sitio donde se guardan las versiones.
Cada vez que acabes algo: «haz commit». Con una frase de qué has hecho. Eso es todo el trabajo que te toca.
Sin commit, «guardar» es machacar lo anterior. Con commit, guardas y conservas lo de antes.
HISTORIAL DEL PROYECTO
lo que se guarda solo
a4f1c2
hace 10 min
diapo 11 montada
9c3b8e
hace 2 h
precios fuera, huecos ajustados
1d7e40
ayer 18:40
informe de analítica en PDF
7b02aa
ayer 16:55
diapo 3: nube de profesiones
Y con esto puedes decir: «vuelve a como estaba ayer a las 18:40» — y vuelve. Entero, no a trozos.
EJEMPLO
Trabajar sin miedo a romper nada
Dos frases: una antes y una después.
Antes de tocar nada, haz commit de cómo está ahora. Luego cambia el cálculo de márgenes del informe y vuelve a montarlo. Si no me convence, volvemos al commit anterior. Y dime en una línea qué ha cambiado entre los dos.

### Diapositiva 14

14 · GITHUB
Como Drive, pero para proyectos. Y encima publica.
Git guarda las versiones en tu equipo. GitHub las guarda en la nube, se las abre a quien tú digas y —esto es lo que nadie espera— convierte la carpeta en una web con enlace.
«Y ya está publicado.»
Copia de seguridad
COMO DRIVE
Tu repositorio fuera del portátil. Si el ordenador se muere, el trabajo no. Y con todo el historial de commits, no solo la última versión.
Compartir sin pisarse
PERMISOS POR PERSONA
Das acceso a quien quieras, igual que en Drive. Cada uno hace sus commits y GitHub cuadra los cambios. Se ve quién tocó qué y cuándo.
Publicar con un enlace
GITHUB PAGES
La carpeta pasa a ser una página web con URL, que mandas por correo y se abre en cualquier móvil. Sin servidor y sin pedir nada a IT. Gratis si el repositorio es público; desde uno privado, con plan de pago.
https://tu-usuario.github.io/informe-julio/
y ya se puede mandar
Ojo con lo que publicas: el repositorio privado es gratis, pero publicar la web desde uno privado es de pago. En el plan gratuito la web sale de un repositorio público, y entonces se ve todo el repositorio, no solo la web. Y la página siempre es pública: nada de datos de clientes, de empleados ni cifras internas.
EJEMPLO
De carpeta a enlace, en una frase
Ni tocar GitHub ni saber qué es un push.
Sube este proyecto a GitHub en un repositorio privado, y publica solo la carpeta /web como página para que pueda mandarle el enlace a Antonio. Antes de publicar, revisa que no haya datos de clientes en lo que se sube. Cuando esté, dime la URL.

### Diapositiva 15

SEGUNDA PARTE
Claude Code
El equipo de IT, dentro de la app de escritorio o de VS Code. Aquí ya no se piden informes: se construyen herramientas.
$ claude
vibe coding: lo describes en español y él lo construye
Les acabas de caer bien.
Qué es VS Code
Vibe coding
Del Excel a la app
Probar y arreglar
Publicarlo
Hasta aquí, los secretarios.
A partir de aquí, los frikis.

### Diapositiva 16

SEGUNDA PARTE · EL KIT
Lo que hay que tener instalado
No preguntes para qué sirve cada uno. Se instalan una tarde, con el siguiente-siguiente-siguiente, y ya están ahí el día que él los necesite.
VS Code
Claude Code
Git
GitHub
Node.js
npm
Python
uv
Docker
WSL / Ubuntu
Terminal
Chrome
SQLite
PostgreSQL
Jupyter
Postman
Pandoc
FFmpeg
18 descargas. No vas a abrir ni la mitad en tu vida — las abre él.
Si le falta algo, te lo dice.
Y te pone el enlace.

### Diapositiva 17

17 · CLAUDE CODE · ASÍ SE VE POR DENTRO
No hay que aprenderse VS Code: hay que saber dónde está el icono y dónde se escribe.
Esta es la pantalla entera. Un editor de texto con tus ficheros a la izquierda, el código en medio y Claude en un panel a la derecha. Nada más.
1
El icono de Claude, en la barra de la izquierda. Lo pinchas —o Ctrl+Esc— y se abre el panel. Ya está dentro de la carpeta que tienes abierta.
2
El cuadro donde escribes. En español, como se lo pedirías a un compañero. Ese cuadro es todo el manual: no hay menús que aprender.
3
Y el botón de debajo: el modo. Decide cuánto te pregunta antes de tocar algo — y de eso va la diapositiva siguiente.
Abrir Claude
Ctrl+Esc
Cambiar de modo
Shift+Tab
Fíjate en el explorador: él ve la misma carpeta que tú. No hay que subirle ficheros ni pegarle nada — abre, lee y escribe donde tú trabajas.
informe-julio
— Visual Studio Code
▤
⌕
⑂
▷
1
⚙
EXPLORADOR
▾ INFORME-JULIO
ventas.csv
analiza.py
grafico.png
informe.html
▸ .git
analiza.py
ventas.csv
# venta de julio por autocentro
import pandas as pd
df = pd.read_csv("ventas.csv")
jul = df[df.mes == 7]
top = jul.groupby("autocentro")
.sum().sort_values()
top.plot.barh()
savefig("grafico.png")
Claude
Opus 5.5
saca la venta de julio por autocentro y hazme el gráfico
He leído ventas.csv (162 autocentros).
Escribo analiza.py y lo ejecuto…
✓ grafico.png · 4 s
ordénalo de mayor a menor y ponme los cinco primeros
Hecho. analiza.py cambiado y vuelto a ejecutar.
✓ grafico.png · ✓ top5.csv
2
Escribe lo que quieres
3
modo
Auto
⑂ main
✓ 0 problemas
Python 3.13 · UTF-8
Un editor, un icono y un cuadro de texto. El resto lo escribe él.
La primera vez impone. La segunda ya le hablas como al de sistemas.

### Diapositiva 18

SEGUNDA PARTE · PERMISOS
Que deje de preguntar a cada paso
De serie te pide permiso para cada fichero que toca y cada comando que lanza. El primer día tranquiliza. Al tercero te vas a por un café, vuelves y sigue ahí quieto, esperando a que le digas que sí. Se arregla en dos clics.
DE MÁS CORTITO A MÁS SUELTO
1
Manual
default
Solo lee. Para todo lo demás, pregunta.
2
Plan
plan
Investiga y te propone un plan. No toca nada hasta que lo apruebas.
3
Editar automáticamente
acceptEdits
Edita ficheros y crea carpetas sin preguntar. Los comandos, aún los pide.
4
Auto
auto
Lo hace todo, con un revisor de seguridad detrás que corta lo raro. Este es el bueno.
5
Bypass permissions
bypassPermissions
Todo, sin red. Ni siquiera protege .git. Solo en máquina aislada.
CÓMO SE CAMBIA, EN VS CODE
1
Pincha el indicador de modo, justo debajo del cuadro donde escribes, y elige.
2
Para que arranque siempre así: Ajustes de VS Code → claudeCode.initialPermissionMode
3
«Bypass permissions» ni aparece en la lista hasta que marcas Allow dangerously skip permissions en los ajustes de la extensión. Está escondido a propósito.
Y SI VAS POR TERMINAL
claude --permission-mode auto
Shift + Tab va rotando de modo sin salir de la sesión.
Trabaja del tirón
Un informe que toca 40 ficheros son 200 permisos que darle. En Auto son cero.
Puedes irte
Le sueltas el encargo, te vas a la reunión y al volver está hecho. No te espera.
Dejas de decir «sí» sin leer
Cuando te pregunta 200 veces, aceptas en automático. Eso sí es peligroso.
Bypass es quitarle los frenos: no protege de nada, ni de que se cuele una instrucción en una web que esté leyendo. Anthropic solo lo recomienda en contenedores o máquinas virtuales sin internet. Para trabajar: Auto.
Desde el 14 de agosto de 2026, Auto viene puesto de serie en Pro, Max y Team.

### Diapositiva 19

19 · CLAUDE CODE · A QUIÉN LE QUITA EL TRABAJO
Y estos 18 perfiles de IT que ya no tienes que pedir por ticket.
En la primera parte le quitábamos trabajo a la oficina. Aquí se lo quitamos a sistemas: lo que antes era abrir una petición y esperar al trimestre que viene, ahora lo describes en español y sale el martes.
Analista web / de medición
Desarrollador de software
Consultor funcional de ERP contable
Analista de datos
Técnico de tagging
Product owner / analista funcional
Responsable de calidad de dato
Ingeniero de datos
Técnico de integraciones contables
Gestor de tienda online
Técnico de QA
Desarrollador de BI
Desarrollador de automatizaciones (RPA)
Webmaster / gestor de CMS
SEO técnico
Administrador de automatización y monitorización
Maquetador / front-end
Analista de catálogo / PIM
No es que sobre IT. Es que desaparece la cola de espera.
Y el que abre el ticket
y el que lo cierra son el mismo.

### Diapositiva 20

20 · CASO PRÁCTICO 1 · EMPLEO: INGENIERO DE DATOS
«Quiero una base de datos de los talleres de Madrid». Y sale un Excel con 7.175.
EL PROMPT · TAL CUAL, PEGADO EN VS CODE
Quiero una base de datos de todos los talleres de las provincias de Madrid y Guadalajara: nombre, teléfono, dirección, web, categoría, valoración y coordenadas. Móntame un script en Node que recorra Google Maps por cuadrículas y vaya guardando en un Excel con tres hojas: mecánicos, chapa y pintura, y cristales. Que aguante cortes: si lo paro y lo vuelvo a lanzar, que siga por donde iba y no duplique fichas. Al terminar dime cuántas ha sacado y qué cobertura tiene cada columna.
1
Tú no dices cómo, dices qué. Él elige la herramienta, crea la carpeta del proyecto, instala lo que falta y escribe el script. Tú no tocas una línea.
2
Lo lanza y lo vigila él. Con los permisos en Auto no te pregunta cuatrocientas veces: va cuadrícula por cuadrícula guardando el Excel cada pasada.
3
Se atasca y lo arregla. «Se ha parado en Alcobendas» — mira el log, corrige y reanuda. Eso es vibe coding: no depurar tú, describir el síntoma.
4
Te entrega el fichero y la cobertura. 7.175 fichas y qué porcentaje tiene teléfono. No te maquilla los huecos.
5
Y lo repites cambiando una palabra. «Ahora Valencia y Castellón». Mismo script, otro Excel, sin volver a explicar nada.
Léelo antes de repetirlo: raspar Google Maps va contra sus condiciones de uso — para algo recurrente, su API oficial de pago o fuentes abiertas. Y los móviles de autónomos son datos personales: uso interno, sin publicar y sin mandar comerciales [POL-MMNSEG-001-1.0].
Los 7.175, uno a uno.
EMPLEO DE LA DIAPO
Ingeniero de datos
LO QUE DEVUELVE
3 hojas
· mecánicos, chapa, cristales
12 columnas
· con teléfono, web, valoración y coordenadas
1 portada
· de dónde salen y cómo se usan
7.175
talleres
en el fichero
5.457
mecánicos · 1.140 chapa
· 578 cristales
6.664
con teléfono
(el 93 %)
4.033
con página
web
100 %
con coordenadas
para el mapa
Abrir el Excel  →
3 hojas · xlsx en Drive · carpeta «Curso Claude»

### Diapositiva 21

21 · CASO PRÁCTICO 2 · EMPLEO: ANALISTA DE PRECIOS
Los precios de la competencia. Todos los días, a las siete de la mañana.
EL PROMPT · TAL CUAL, PEGADO EN VS CODE
Quiero seguir los precios de recambios de moto de endado.com. Sácame el catálogo entero de moto con referencia, EAN, marca, nombre, precio con y sin IVA y disponibilidad, y déjalo en un Excel fechado. Son más de veinte mil productos: que vaya guardando por el camino y que si se corta pueda reanudar. Cuando funcione, quiero que se ejecute solo todos los días a las siete y me deje el fichero del día.
1
Se busca la vida para el catálogo. No va página por página: encuentra el buscador interno del propio sitio y le pide la lista. Como corta a mil resultados, parte el catálogo por rangos de referencia hasta que cabe. 24.176 productos.
2
Lee la ficha, no la pantalla. Cada producto lleva su precio, IVA y stock en los datos de la propia página. Ni capturas, ni copiar y pegar, ni equivocarse leyendo.
3
Aguanta 24.000 fichas. Guarda cada 200, reescribe el Excel cada 5.000, reintenta lo que falla y con --resume sigue donde iba. Eso es lo que separa un juguete de una herramienta.
4
Y se programa solo. Tarea diaria a las 07:00 en el equipo y el mismo trabajo en GitHub: si tu portátil está apagado, corre en la nube igual.
5
Como guarda cada día, tienes histórico. Comparando dos fotos sabes qué ha subido, qué ha bajado y qué se ha quedado sin stock. Eso ya no lo hace un becario.
Aquí no hay datos personales: solo producto, precio y disponibilidad, públicos en la web. Aun así, ritmo educado para no cargarle el servidor a nadie, y el fichero es para decidir nuestros precios, no para republicarlo.
24.176 veces, sin quejarse.
EMPLEO DE LA DIAPO
Analista de precios
FOTOS QUE YA TIENE GUARDADAS
25 jun
29 jun
6 jul
13 jul
20 jul
27 jul
3 ago
10 ago
24.176
productos de moto
en cada pasada
82
marcas
distintas
2.138
cambios de precio
en cuatro semanas
40 %
en stock · el resto
lo sirven bajo pedido
0
minutos tuyos
al día
Abrir el Excel  →
foto del 10 de agosto · xlsx en Drive

### Diapositiva 22

22 · CASO PRÁCTICO 3 · EMPLEO: DESARROLLADOR DE APPS
Tu propia app. Y la vas moldeando hablando.
Flutter es la herramienta: escribes una vez y sale para Android, para iPhone y para web. Se programa en un lenguaje que se llama Dart. No lo sabes. No te hace falta.
LO QUE LE DICES · LO QUE CAMBIA
Hazme una app para llevar mis coches: la ITV, los kilómetros y lo que me gasto en cada uno.
Elige Flutter, monta el proyecto y en un rato ya abre en tu móvil. Fea, pero abre.
Al abrir quiero ver el coche de siempre, los km estimados y cuándo le toca la ITV.
Las tres tarjetas de arriba. Tú no dices «tarjetas»: dices qué quieres ver.
Los tres botones grandes que sean los que uso: papeles, intervenciones y la ITV.
Aparece «Más utilizados», con sus iconos y su color cada uno.
Este verde no me gusta. Más oscuro, y la cabecera con una curva.
Repinta la app entera, no un botón. Diez segundos y lo ves en el móvil.
Abajo ponme «Mis coches», que tengo tres. Y «Avisos».
La barra de abajo con cuatro pestañas. Cada frase es una versión nueva.
Fíjate en la matrícula de la captura: está cambiada a propósito. Una matrícula identifica a una persona, así que es un dato personal — en pruebas, en demos y en cursos, siempre con datos de pega [POL-MMNSEG-001-1.0].
Esto no es un dibujo.
Es la app, funcionando.
Y acaba aquí: en el móvil de todos.
Ninguna de esas frases lleva una palabra técnica. Y cada una es una versión de la app.
Antes eso era una reunión de requisitos.
Ahora son treinta segundos y un «más oscuro».

### Diapositiva 23

23 · PRESENTACIONES · EMPLEO: DISEÑADOR DE PRESENTACIONES
Una presentación que te gusta, y todas las demás salen iguales.
EL PROMPT · TAL CUAL
Te paso esta presentación que me gusta. Sácame el sistema de diseño: colores con su código, tipografías, tamaños y los tipos de diapositiva que usa. Guárdamelo como skill, con una plantilla en blanco y otra de ejemplo. A partir de ahora, cuando te pida una presentación, la haces con esto.
1
Le das la que te gusta. Un PDF, un PowerPoint o directamente la web de la marca. No hace falta que sea tuya: hace falta que te guste.
2
Saca la receta, no la copia. «Azul rótulo #16336F, amarillo #F5B400, Saira Condensed para los titulares, Archivo para el texto.» Con el código exacto, no «un azul oscuro».
3
Lo guarda en un skill. Plantilla en blanco, una de ejemplo, la guía de marca y los logos — todo en la misma carpeta, para siempre.
4
Y ya no vuelves a maquetar. «Hazme la presentación de enero, doce diapositivas, estilo industrial.» Sale con la marca puesta.
5
Y sirve para todo lo demás. El mismo truco con el formato de un informe, con una plantilla de Word o con cómo firmamos los correos. Una vez descrito, se repite solo.
De dónde copias importa: el sistema te vale de inspiración; su logotipo, su nombre y sus fotos, no.
EJEMPLO REAL: EL KIT DE REYNASA
REYNASA
03 · INDUSTRIAL
CIFRAS
Titular de la
sección
00
ETIQUETA
00
ETIQUETA
00
ETIQUETA
La plantilla en blanco: el sistema, sin un dato dentro.
Saira Condensed titulares y cifras · Archivo texto y etiquetas
LOS TIPOS DE DIAPOSITIVA QUE TRAE
Portada
Índice
Separador
Contenido
Cifras
Servicios
Cita
Red
Dos columnas
Cierre
El diseño se decide una vez. Las otras cuarenta presentaciones ya salen iguales.
Y nadie vuelve a discutir
cuál era el azul de la casa.

### Diapositiva 24

24 · CASO PRÁCTICO 4 · EMPLEO: TÉCNICO DE CATÁLOGO
Mil referencias de la competencia, con su EAN y su foto.
EL PROMPT · TAL CUAL, Y FÍJATE EN LAS DOS ÚLTIMAS FRASES
Saca de muchoneumatico.com un Excel de 1.000 filas que cruce EAN con la URL de su imagen, muestreado por todo el catálogo. Solo lectura sobre páginas públicas. Antes de la pasada larga enséñame de dónde lees el EAN y espera mi OK. Al acabar verifica y muéstrame la evidencia, incluido lo que no te haya preguntado.
1
«Solo lectura sobre páginas públicas». Lo pones tú, en la primera línea. No es un adorno: es el límite del encargo.
2
«Enséñame de dónde lees el EAN y espera mi OK». El freno de mano. Si lo estaba leyendo del sitio equivocado, lo ves en veinte filas y no en mil.
3
«Muestreado por todo el catálogo». No las mil primeras: mil repartidas. Por eso salen 34 marcas y no las tres de la primera página.
4
«Incluido lo que no te haya preguntado». Y ahí salta el hallazgo: 1.000 filas pero solo 369 imágenes distintas. Muchos modelos comparten foto. Eso no lo preguntaste.
Con las fotos, ojo: son imágenes de producto de un tercero. Sirven para cuadrar catálogo y comparar; para publicarlas en nuestra web, no. Para eso, las del fabricante.
Mil neumáticos. Sin quemar ninguno.
LO QUE DEVUELVE
8 columnas · EAN, SKU, marca, modelo, nombre, precio, URL del producto y URL de la imagen
Una por marca.
Y las otras 21, dentro.
1.000
filas · una
por referencia
1.000
EAN únicos, todos
de 13 dígitos
34
marcas
distintas
369
imágenes distintas
para 1.000 filas
125 €
precio mediano
(de 29 a 936)
Abrir el Excel  →
1.000 filas · xlsx en Drive

### Diapositiva 25

25 · CASO PRÁCTICO 5 · EMPLEO: PUBLICADOR WEB
Y esas mil referencias, ahora una web que cualquiera consulta con un enlace.
EL PROMPT · TAL CUAL, Y FÍJATE EN LO QUE NO ES UN INFORME
Publica esos 1.000 neumáticos como catálogo web en mi GitHub, con URL compartible: buscar por medida o EAN, pinchar y ver la ficha con la foto. Es para consultar, no un informe. Un solo HTML sin dependencias, público con noindex. Dime la cobertura del parseo de medidas antes de darlo por bueno, avísame si expone contenido de terceros, y al acabar verifica contra la URL real y enséñame las pruebas.
1
«Es para consultar, no un informe». No pides un PDF que se lee una vez: pides una herramienta que se usa. Buscas, pinchas, ves la ficha.
2
«Un HTML sin dependencias, público con noindex». Se abre solo, sin servidor ni instalar nada. Público para quien tenga el enlace, pero fuera de Google.
3
«Dime la cobertura antes de darlo por bueno». El punto de control: que te diga cuántas medidas ha sabido leer antes de publicar, no después.
4
«Verifica contra la URL real y enséñame las pruebas». El que publica también comprueba que la web abre y busca de verdad. No te fías de su palabra.
Terceros: las fotos no se rehospedan — la ficha enlaza a su web de origen. Vale para consultar y comparar, no para publicarlo como catálogo propio.
rebedoalejandro-alt.github.io/catalogo-ean
⌕
205/55 R16
1.000 refs
Bridgestone Turanza
205/55 R16 91V
EAN 3286341…
92 €
Michelin Primacy 4
205/55 R16 94V
EAN 3528704…
128 €
rebedoalejandro-alt.github.io/catalogo-ean
CÓMO SE USA
Buscas por medida o EAN → abres la ficha → al producto de origen
El mejor catálogo.
De la historia.
1.000
referencias,
una web
34
marcas
distintas
2 vías
por medida
o por EAN
noindex
público, pero
fuera de Google
0
servidores · un
HTML que se abre solo
Abrir el catálogo  →
enlace real · público, noindex

### Diapositiva 26

26 · CASO PRÁCTICO 6 · EMPLEO: TÉCNICO DE COMPRAS PÚBLICAS
Las licitaciones públicas, fichadas cada mañana por un programa que nos hemos hecho nosotros.
EL PROMPT · LO QUE LE PEDÍ, EN CRISTIANO
Móntame un programa que cada mañana mire las licitaciones públicas de PLACSP y me deje en un tablero Kanban solo las de recambios, neumáticos y aceites. Fíltralas por CPV y palabras clave y tírame el ruido (mantenimiento integral, taller). De cada una, bájame los pliegos. Que pueda arrastrarlas de «nueva» a «presentada». Que la ingesta corra sola cada mañana y que el panel se abra en mi propio ordenador, sin servidor.
1
«Solo recambios, neumáticos y aceites». Filtra por CPV + palabras clave. De miles de anuncios al día te quedan tus tres familias.
2
«Tírame el ruido». Aun con exclusiones se cuela algún falso positivo (unas «cubiertas» que eran un tejado) → por eso arrastras tú. La máquina propone, decides tú.
3
«Bájame los pliegos». No solo el aviso: se trae los PDF del expediente (577 documentos) para no entrar a mano en cada uno.
4
«Que corra sola y sin servidor». Tarea programada a las 07:00 en tu propio equipo, y el panel se abre en 127.0.0.1: sin nube, sin login y sin pedir nada a IT.
Datos públicos de PLACSP: solo organismos e importes, cero datos personales. En el curso el panel va de solo lectura.
127.0.0.1:8765  ·  en tu ordenador
Nueva (135)
NEUMÁTICOS
Cubiertas para vehículos del Ejército
10.000.000 € · 📎 4
ACEITES
Combustible y lubricantes · Ayto. Firgas
119.928 € · 📎 13
Preparando (1)
RECAMBIOS
Bandeja de aceite · Navantia
48.400 € · 📎 0
Presentada (1)
RECAMBIOS
Repuestos de flota · Cabildo de Tenerife
540.000 € · 📎 18
panel-licitaciones.html · doble clic y abre
QUÉ ES ESTO EXACTAMENTE
Un programa nuestro, no un Excel ni un informe: 11 ficheros de Python, 914 líneas y su propia base de datos. Sin proveedor y sin licencias.
«Excellent…»
Otro contrato a la vista.
138
licitaciones
filtradas
577
pliegos
descargados
122,9 M€
importe base
sumado
cada día
ingesta programada
a las 07:00
914
líneas de código
hechas en casa
Bajar el panel  →
carpeta «Curso Claude» en Drive

### Diapositiva 27

27 · CASO PRÁCTICO 7 · EMPLEO: DESARROLLADOR WEB
Un botón de WhatsApp en toda la web… sin tocar la web.
EL PROMPT · Y FÍJATE EN LAS DOS ÚLTIMAS FRASES
Hazme un botón flotante de WhatsApp para aurgi.com: verde, abajo a la derecha, que al pulsarlo abra WhatsApp con el mensaje ya escrito. Que no cargue nada de fuera. Que pueda meterlo yo por Tag Manager, sin tocar la web. Déjame el número y el texto en un sitio fácil de cambiar, y dame algo para probarlo antes de publicar.
1
Un solo fichero, 107 líneas, 5,5 KB. El logo va como SVG dentro: cero peticiones externas, ni librerías, ni CDN. Da igual con qué esté hecha la web.
2
Se instala en Tag Manager, no en la web. Etiqueta de HTML personalizado, activación en All Pages, Vista previa y Enviar. Nadie toca el código de aurgi.com — ni hay que pedírselo al proveedor.
3
Lo que vas a querer cambiar, arriba y en claro. Un bloque CONFIG: número, mensaje, texto del botón, lado y color. Se cambia, se vuelve a pegar y se publica.
4
Y los detalles que no se me ocurrió pedir: en el móvil el primer toque enseña la etiqueta y el segundo abre WhatsApp (para que no se abra sin querer), aria-label y foco para teclado, y un z-index altísimo para quedar por encima del aviso de cookies.
1.
Etiquetas → Nueva
›
2.
HTML personalizado
›
3.
Activación: All Pages
›
4.
Vista previa → Enviar
El número está cambiado a propósito en esta diapositiva y en el enlace de abajo: es un teléfono de contacto y en formación va siempre con datos de pega. El de verdad, solo en el CONFIG.
aurgi.com
AURGI
Neumáticos
Revisiones
Cita previa
Talleres
Usamos cookies para mejorar tu experiencia · Aceptar
¿Hablamos?
EL BLOQUE QUE SE TOCA
var CONFIG = {
telefono: '34600000000', // de pega
mensaje:  'Hola, me gustaría…',
etiqueta: '¿Hablamos?',
posicion: 'right',
color:    '#25D366',
zIndex:   2147483000
};
107
líneas · un solo
fichero de 5,5 KB
0
peticiones externas
y 0 librerías
1
etiqueta en GTM
y a todas las páginas
0
cambios en el código
de la web
2 jul
hecho en una
tarde de 2026
Probar el botón  →
bájalo y ábrelo · versión curso, número de pega

### Diapositiva 28

28 · CREACIÓN GRÁFICA · EMPLEO: DELINEANTE E INFOGRAFISTA 3D
Y además dibuja: el 3D de un centro logístico entero, hecho con código.
Nueve láminas de la misma escena — de fuera, de dentro y en sección. Ninguna se ha dibujado: se han escrito.
EL PROMPT · Y FÍJATE EN LA ÚLTIMA FRASE
Móntame en Blender, con Python, el centro logístico: la nave con sus muelles y la parcela, y dentro las zonas por color (recambio, neumático de urgencia, gran volumen, servicio técnico). Las estanterías, paramétricas: 14 niveles a 400 mm bajo 6,50 m de altura libre. Renderiza sin abrir el programa —de fuera, de dentro y una sección— y si algo no cabe, dímelo en el propio dibujo.
1
Blender es gratis y se conduce con Python. No hay que aprender a usarlo: él escribe el script que levanta la nave, las estanterías, la luz y la cámara.
2
Y lo renderiza sin abrirlo. Una línea de terminal y salen las nueve láminas mientras tú sigues a lo tuyo.
3
No es un dibujo: es un parámetro. Cambias «14 niveles a 400» por «12 a 450» y se redibuja entero. A mano habría que rehacerlo.
4
Y comprueba lo que dibuja. El aviso rojo de la sección no lo escribí yo, lo calculó él: «la cubeta alta iría a 6,59 m y NO cabe bajo los 6,50 libres».
$ blender -b escena.blend -P nave.py -o //render/lamina -f 1
ahí está la conexión
1 / 9
La nave, los muelles y la parcela.
No es una imagen bonita: es el proyecto, calculado y dibujado.
Y «súbelo 50 cm» ya no obliga a dibujarlo otra vez.

### Diapositiva 29

29 · CASO REAL EN REYNASA · AGENTES CON CORREO PROPIO
Dos compañeros más, con correo propio: ATLAS y Rex.
Cualquier persona de la empresa les escribe como a un compañero: adjunta el PDF o el Excel y dice lo que necesita. Lo hacen, lo revisan y contestan en el mismo hilo. Y queda registrado quién lo pidió, qué, cuándo y cuánto tardó.
ATLAS atlas@reynasa.com
Revisa su correo cada 5 minutos y atiende varios a la vez; cuando merece la pena, reparte el encargo entre ayudantes. Devuelve Excel, PDF, webs, imágenes o vídeo, revisados antes de enviarlos. Cada noche deja un informe de lo que ha hecho.
Rex rex@reynasa.com
El otro agente, con su propio buzón. También revisa el correo cada 5 minutos.
1Recibe el correo y los adjuntos
2Lee el PDF, el Excel o la imagen
3Contrasta, calcula o investiga
4Produce el archivo
5Lo revisa antes de enviar
6Responde en el mismo hilo
Funcionan en un ordenador de Reynasa, con Hermes Agent (ATLAS) y OpenClaw (Rex) como capa de agente y ChatGPT como modelo. La idea es la misma que la de Claude: carpeta, instrucciones y herramientas.
638
peticiones a ATLAS del 1 de julio al 16 de octubre
94,5 %
resueltas y entregadas (603)
37
personas o buzones que lo usan
×2,8
de julio a septiembre: de 89 a 247 al mes
LLEGAN CINCO CORREOS A LA VEZ · EJEMPLO
Factura de AJUSA
SIGAUS de septiembre
Pedido de PDF a Excel
Clientes que han bajado
¿Formato del informe?
un correo, un responsable
mini-ATLAS 1 · principal
con 2 ayudantes
Respondido
mini-ATLAS 2 · principal
con 2 ayudantes
Respondido
mini-ATLAS 3 · principal
trabaja solo
Respondido
mini-ATLAS 4 · principal
trabaja solo
Respondido
mini-ATLAS de refuerzo
solo lo sencillo
Respondido
4 ayudantes compartidos: dos con la factura y dos con el SIGAUS. Preparan partes del trabajo y no envían nada. Hoy caben 8 correos a la vez (6 principales y 2 de refuerzo); si llegan más, esperan en cola.
No es un chat: es un compañero al que se le encargan cosas por correo.
Datos: informe de ATLAS del 1 de julio al 16 de octubre de 2026 (corte a las 11:06).

### Diapositiva 30

30 · CASO REAL EN REYNASA · TODO QUEDA A LA VISTA
Cada encargo queda registrado: quién, qué, cuándo y cuánto tardó.
Una web que ATLAS actualiza cada noche con cada petición. De ahí sale esta foto: las familias de trabajo que más se repiten y quién las pide.
LO QUE MÁS SE PIDE	RESUELTAS	PERSONAS	QUIÉN LO PIDE SOBRE TODO (PETICIONES)
Contraste de albaranes, recepciones, facturas y pedidos	414	10	Adrian García Chavez (180), Alba Jurado Méndez (67), Laura Lopez Fernandez (63)
Conversión de PDF a Excel o CSV	50	10	Alejandra Lira Castillo (16), Ioana Raluca Costache (11), Adrian García Chavez (7), Patricia Micó Derks (7)
Análisis comercial de ventas, rutas y clientes	25	7	Luis Miguel López Terrés (8), Samuel Navarro (6), Juan María Merino Martínez (5)
Cálculo y auditoría de SIGAUS, GENCi y cargos ambientales	21	5	Raquel Salazar Marchante (9), Laura Lopez Fernandez (7)
Descripciones técnicas para el catálogo web	18	1	Juan María Merino Martínez (18)
Clientes en descenso y oportunidades de venta cruzada	15	11	Luis Miguel López Terrés (3); Francisco Javier Coronel, Victor Ramon Zafra Ruíz y Carlos Carmona (2 cada uno)
Documentación operativa y traducción técnica	10	3	Ioana Raluca Costache (5), Juan María Merino Martínez (4)
Campañas, SEO y vídeo promocional	8	2	Juan María Merino Martínez (8)
DATOS REUTILIZABLES A ESCALA
Catálogo EAN cruzado con el ERP
Para Patricia Micó, Guillermo López, Ioana Raluca Costache y Katherine Guitian: 37.949 filas, 36.083 parejas completas y facturas de 2.237 filas pasadas a Excel.
EL QUE MÁS CONSTRUYE
Catálogo técnico multimarca
Para Juan María Merino: 308 fotos y 113 referencias completadas de 197. Lo que no tiene evidencia se deja en blanco, no se inventa.
PARA DECIDIR
Analítica comercial
Para Samuel Navarro, Francisco Javier Coronel, Victor Ramon Zafra, Carlos Carmona y Javier Martinez Agüero: rutas, clasificación ABC y clientes en descenso, con presentaciones listas.
El valor no es solo que lo haga: es que se ve todo lo que hace.
Informe de ATLAS (16 de octubre de 2026): 603 intervenciones resueltas en 15 familias de trabajo.

### Diapositiva 31

31 · CASO REAL EN REYNASA · ASÍ CONTESTA
Así contesta ATLAS: en el mismo hilo y con el Excel adjunto.
Un encargo real del 16 de octubre: contrastar una factura de proveedor con lo que ha leído el sistema. Esto es lo que recibe quien lo pidió, tal cual.
CADA 5 MINUTOS
Rex y ATLAS revisan su correo y contestan en el mismo hilo.
PARA TODA LA EMPRESA
Puede responder a cualquier persona que le escriba.
SIN DESVELAR DATOS
Programado para no desvelar datos personales ni de otros departamentos.
Y DICE LO QUE NO SABE
«No acredita la recepción física»: contrasta papeles, no la mercancía.
No contesta «hecho»: cuenta qué ha mirado, qué no cuadra y qué no puede asegurar.
Correo real de ATLAS a Adrián García (16 de octubre de 2026).

### Diapositiva 32

32 · HACIA DÓNDE VA · Y NO SE FRENA
No se frena: se acelera. Y la IA ya ayuda a hacer la siguiente IA.
El instituto METR mide el tamaño de los encargos que un modelo termina solo, sin que nadie le ayude, en lo que tardaría una persona experta. No es cuánto tarda la IA: es cuánto trabajo humano saca de una vez.
1 seg
1 min
1 hora
1 jornada
1 semana
1 mes
6 meses
2019
2021
2023
2025
2027
2029
ritmo hasta 2024: ×2 cada 7 meses
desde 2024: ×2 cada 3–4 meses
GPT-2 · segundos
GPT-4 · 5 min
o1 · 40 min
Claude 3.7 · 1 h
Opus 4.6 · 12 h
Opus 5.5 · ≈1 semana
estimado en la tendencia
Fuente: METR. Opus 5.5: METR lo califica de «mejora dentro de la tendencia» y no publica cifra; el punto es una estimación sobre la tendencia.
5 minutos
2023 · GPT-4. Contestar una pregunta, redactar un párrafo.
≈1 semana
Hoy · Opus 5.5. Un encargo que a una persona le llevaría una semana: leer, cruzar, producir y revisar. Suele tardar mucho menos.
1 a 6 meses
2028, si sigue el ritmo. Proyectos enteros. Extrapolación, no previsión.
SE ACELERA
Se duplicaba cada 7 meses. Desde 2024, cada 3 o 4.
POR QUÉ
Los modelos ya ayudan a desarrollar los siguientes: ≈1,5× según el informe de I+D que cita METR.
LA BRECHA
Cada modelo trae capacidades nuevas que nadie anuncia. Quien está al día multiplica lo que hace su equipo; quien espera, se queda igual.
No hace falta ser experto en IA. Hace falta que alguien esté al día.
METR, Time Horizon 1.1 (ene 2026) y evaluación de Opus 5.5 (22 sep 2026).

### Diapositiva 33

33 · HACIA DÓNDE VA · TODO A LA VEZ
Y no solo METR: todo se acelera a la vez.
Siete medidas de campos que no tienen nada que ver: programación, matemáticas, ciencia, el propio desarrollo de la IA, ciberseguridad, agentes y uso. Todas planas durante años, y todas disparadas en 2026.
100
0
100 = último dato de cada curva
2022
2023
2024
2025
2026
2027
2027
si sigue el ritmo
· mi lectura ·
Matemáticas
Programación (METR)
I+D de IA (Anthropic)
Agentes (OpenAI)
Uso (Google)
Ciberseguridad
Ciencia (TasteVal)
Cada curva, escalada a su último dato = 100. Valores aproximados leídos de las gráficas de METR, Epoch AI, Anthropic, OpenAI, Google y TasteVal. Desde 2027: mi lectura.
NO ES SOLO METR
Siete campos sin relación entre sí dibujan la misma curva.
LA IA YA HACE IA
Claude lidera el 26 % del I+D de Anthropic. En febrero, menos del 1 %.
2027 · MI LECTURA
Si sigue el ritmo, lo que hoy lleva meses llevará semanas.
No hace falta ser experto en IA. Hace falta que alguien esté al día.
Fuentes: METR, Epoch AI, Anthropic, OpenAI, Google I/O 2026 y TasteVal (2022–oct 2026).

### Diapositiva 34

34 · Y PARA ACABAR · LA LETRA PEQUEÑA
Debajo del cuadro de texto, todos los días, pone lo mismo.
Escríbele a Claude…
↑
Claude es IA y puede cometer errores. Por favor, verifica las respuestas.
¿Y tu compañero
de trabajo no?
Lo bueno no es que no se equivoque: es que te deja comprobarlo — y hoy lo has visto tres veces.
✓
La lámina de sección que avisó, ella sola, de que la cubeta alta no cabe bajo los 6,50 m.
✓
El «enséñame de dónde lees el EAN y espera mi OK»: el freno de mano antes de las mil filas, no después.
✓
Las «cubiertas» que eran un tejado y se colaron en el tablero. La máquina propone; arrastras tú.
Y el lunes: coge una sola cosa que hagas a mano todas las semanas y pídele que te la monte. No hace falta más para empezar.
Tu compañero.
Este no lleva aviso legal.
Que lo ponga es buena señal: te puedes fiar bastante.
Y encima no se ofende cuando le repasas el trabajo.
