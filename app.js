/* Formación Claude · web por pestañas (estilo «Escenas»).
   Cada sección se ve sola (#/seccion/subpestaña). ?tema=reynasa|aurgi|mutua cambia los colores.
   ?imprimir=<seccion>|todo pinta la versión para PDF (la usa herramientas/build-pdf.mjs). */
(function () {
  'use strict';
  var C = window.CONTENIDO, S = C.secciones, M = C.meta;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var q = new URLSearchParams(location.search);
  var IMPRIMIR = q.get('imprimir');
  var main = document.getElementById('escenario');
  var ICO = {
    copiar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    bajar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    enlace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
  };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function dd(i) { return String(i + 1).padStart(2, '0'); }
  function idx(id) { return S.findIndex(function (s) { return s.id === id; }); }
  function pdfDe(id) { return 'descargas/secciones/' + dd(idx(id)) + '-' + id + '.pdf'; }
  var LOGO = {
    reynasa: '<img class="l-reynasa" src="assets/logos/reynasa.png" alt="Reynasa Recambios" width="900" height="224">',
    aurgi: '<img class="l-aurgi" src="assets/logos/aurgi.png" alt="Aurgi" width="700" height="222">',
    mutua: '<img class="l-mutua" src="assets/logos/mutua.png" alt="Mutua Madrileña" width="900" height="148">',
    claude: '<img class="l-claude" src="assets/logos/claude.png" alt="Claude" width="700" height="153">',
  };
  function alianza() {
    return '<div class="alianza"><span>Impartida por</span>' + LOGO.aurgi + LOGO.reynasa + '<i aria-hidden="true"></i><span>para</span>' + LOGO.mutua + '<i aria-hidden="true"></i><span>sobre</span>' + LOGO.claude + '</div>';
  }

  // ------------------------------------------------------------ colores
  var TEMAS = { reynasa: 'Reynasa', aurgi: 'Aurgi', mutua: 'Mutua' };
  function leeTema() { var t = q.get('tema'); if (TEMAS[t]) return t; try { t = localStorage.getItem('formacion-claude-tema'); } catch (e) {} return TEMAS[t] ? t : 'reynasa'; }
  function ponTema(t, guardar) {
    document.documentElement.setAttribute('data-tema', t);
    document.querySelectorAll('.tema').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.tema === t)); });
    document.querySelectorAll('.barra .marcas [data-empresa]').forEach(function (img) { img.classList.toggle('l-otra', img.dataset.empresa !== t); });
    if (guardar) { try { localStorage.setItem('formacion-claude-tema', t); } catch (e) {} }
  }

  // ------------------------------------------------------------ bloques
  function bloque(b, imp) {
    switch (b.t) {
      case 'p': return '<p class="p">' + (imp && b.imp || b.x) + '</p>';
      case 'lead': return '<p class="lead">' + b.x + '</p>';
      case 'h': return '<h3 class="h">' + b.x + '</h3>';
      case 'ul': return b.estilo === 'iterar' ? '<ul class="iterar">' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' : '<ul class="lista">' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      case 'claves': return '<ul class="claves">' + b.items.map(function (k) { return '<li><b>' + k.k + '</b><span>' + k.x + '</span></li>'; }).join('') + '</ul>';
      case 'pasos': return '<ol class="pasos">' + b.items.map(function (k) { return '<li><b>' + k.k + '</b><span>' + k.x + '</span></li>'; }).join('') + '</ol>';
      case 'cita': return '<blockquote class="cita"><p>«' + b.x + '»</p><cite>' + b.who + '</cite></blockquote>';
      case 'nota': return '<p class="nota">' + b.x + '</p>';
      case 'aviso': return '<p class="aviso">' + b.x + '</p>';
      case 'tabla': return '<div class="tabla-env"><table class="tabla"><thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td data-l="' + esc(b.head[i] || '') + '">' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'datos': return '<div class="datos">' + b.items.map(function (d) { return '<div><b>' + d.n + '</b><span>' + d.l + '</span></div>'; }).join('') + '</div>';
      case 'ideas': return '<div class="ideas">' + b.items.map(function (i) { return '<article><h3>' + i.k + '</h3><p>' + i.x + '</p></article>'; }).join('') + '</div>';
      case 'tarjetas': return '<div class="tarjetas">' + b.items.map(function (i) { return '<article class="tarjeta"><div class="tarjeta__cab"><h3>' + i.k + '</h3>' + (i.tag ? '<span class="chip chip--marca">' + i.tag + '</span>' : '') + '</div><p>' + i.x + '</p></article>'; }).join('') + '</div>';
      case 'linea': return '<ol class="linea">' + b.items.map(function (i) { return '<li><small>' + i.n + '</small><b>' + i.t + '</b><span>' + i.x + '</span></li>'; }).join('') + '</ol>';
      case 'antes': return '<div class="antes">' + b.items.map(function (i) { return '<button type="button" class="giro" aria-pressed="false"><span class="giro__in"><span class="giro__cara giro__cara--a"><small>Antes</small><b>' + i.t + '</b><span>' + i.antes + '</span><span class="giro__pista">Pulsa para ver el después →</span></span><span class="giro__cara giro__cara--b"><small>Ahora</small><b>' + i.t + '</b><span>' + i.despues + '</span><span class="giro__pista">← Volver</span></span></span></button>'; }).join('') + '</div>';
      case 'mapa': return '<ol class="mapa">' + S.map(function (s) { return '<li><a href="#/' + s.id + '"><img src="assets/img/' + (imp ? 'imp/' + s.img + '.jpg' : s.img + '-m.webp') + '" alt="" width="800" height="452" loading="lazy"><b>' + s.n + ' · ' + s.t + '</b><span>' + s.x + '</span></a></li>'; }).join('') + '</ol>';
      case 'prompts': return '<div class="prompts">' + b.items.map(function (p) { return '<article class="prompt"><div class="prompt__cab"><h3>' + p.t + '</h3><span class="chip chip--claude">' + p.tag + '</span></div><p class="prompt__texto">' + esc(p.p) + '</p>' + (p.r ? '<p class="prompt__res"><b>Qué salió:</b> ' + p.r + '</p>' : '') + '<button type="button" class="copiar" data-copiar="' + esc(p.p) + '">' + ICO.copiar + 'Copiar el prompt</button></article>'; }).join('') + '</div>';
      case 'interactivo': return imp ? (b.fallback || []).map(function (x) { return bloque(x, imp); }).join('') + (b.id === 'checklist' ? checklistTexto() : '') + (b.id === 'test' ? testTexto() : '') : '<div class="herramienta" data-herramienta="' + b.id + '">' + (H[b.id] ? H[b.id].html() : '') + '</div>';
      default: return '';
    }
  }

  // ------------------------------------------------------------ herramientas
  function opciones(nombre, tipo, items, marcado) { return '<div class="opciones">' + items.map(function (it, i) { var v = typeof it === 'string' ? it : it.v; var t = typeof it === 'string' ? it : it.t; return '<label><input type="' + tipo + '" name="' + nombre + '" value="' + esc(v) + '"' + ((Array.isArray(marcado) ? marcado.indexOf(i) >= 0 : marcado === i) ? ' checked' : '') + '><span>' + t + '</span></label>'; }).join('') + '</div>'; }
  function copiaBtn(attr) { return '<button type="button" class="copiar" ' + attr + '>' + ICO.copiar + 'Copiar</button>'; }
  function valor(f, n) { var e = f.elements[n]; if (!e) return ''; if (e.length && !e.tagName) { for (var i = 0; i < e.length; i++) if (e[i].checked) return e[i].value; return ''; } return String(e.value || '').trim(); }
  function marcados(f, n) { return Array.prototype.slice.call(f.querySelectorAll('input[name="' + n + '"]:checked')).map(function (i) { return i.value; }); }
  function ylista(a) { return a.length > 1 ? a.slice(0, -1).join(', ') + ' y ' + a[a.length - 1] : (a[0] || ''); }
  function sinPunto(s) { return s.replace(/[.\s]+$/, ''); }

  var H = {
    constructor: {
      html: function () {
        return '<div class="dos-col"><form class="form" onsubmit="return false">' +
          '<label class="campo"><span>¿Qué quieres conseguir? <small>El objetivo, con tus palabras</small></span><textarea name="objetivo" rows="3" placeholder="Por ejemplo: saber qué páginas de la web traen más clientes y por qué…"></textarea></label>' +
          '<label class="campo"><span>Un poco de contexto <small>Opcional</small></span><textarea name="contexto" rows="2" placeholder="Para quién es, qué sabes ya, qué te interesa…"></textarea></label>' +
          '<label class="campo"><span>¿De dónde salen los datos?</span><select name="fuente"><option value="">No lo sé: que me proponga las mejores fuentes</option><option>la web pública que tengo abierta en Chrome</option><option>mi Google Analytics, abierto en Chrome con mi sesión</option><option>los documentos de mi carpeta de Drive</option><option>mi correo</option><option>el Excel que te adjunto</option></select></label>' +
          '<label class="campo"><span>Periodo o filtro <small>Opcional</small></span><input name="filtro" type="text" autocomplete="off" placeholder="julio de 2026, solo una marca, comparado con el año pasado…"></label>' +
          '<fieldset class="campo"><legend>Formato</legend>' + opciones('formato', 'checkbox', ['PDF', 'Word', 'PowerPoint editable', 'Excel', 'aquí en el chat'], [0]) + '</fieldset>' +
          '<label class="campo"><span>¿Dónde lo dejo?</span><select name="destino"><option>en mi carpeta de Drive</option><option>en mi correo, como borrador</option><option>aquí, en el chat</option></select></label>' +
          '<fieldset class="campo"><legend>Profundidad</legend>' + opciones('prof', 'radio', [{ v: 'normal', t: 'Normal' }, { v: 'consultora', t: 'De consultora' }], 1) + '</fieldset>' +
          '<label class="campo"><span>¿Que se repita solo?</span><select name="repetir"><option value="">No, solo esta vez</option><option>todos los lunes a primera hora</option><option>todos los días a las 7:00</option><option>el primer día de cada mes</option></select></label>' +
          '</form><div class="salida"><div class="salida__cab"><span class="chip chip--claude">Tu prompt</span>' + copiaBtn('data-copiar-de=".salida__texto"') + '</div><p class="salida__texto" aria-live="polite"></p></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.salida__texto');
        function pinta() {
          var obj = sinPunto(valor(f, 'objetivo')), p = [];
          p.push(obj ? 'Quiero ' + obj.charAt(0).toLowerCase() + obj.slice(1) + '.' : 'Quiero [tu objetivo].');
          if (valor(f, 'contexto')) p.push('Para que tengas contexto: ' + sinPunto(valor(f, 'contexto')) + '.');
          p.push(valor(f, 'fuente') ? 'Usa como fuente ' + valor(f, 'fuente') + '.' : 'Antes de empezar, dime cuáles son las mejores fuentes sobre esto y trabaja con la más fiable.');
          if (valor(f, 'filtro')) p.push('Céntrate en ' + sinPunto(valor(f, 'filtro')) + '.');
          if (valor(f, 'prof') === 'consultora') p.push('Hazlo con la profundidad de una consultoría: resumen ejecutivo, tablas y conclusiones.');
          p.push('Entrégamelo en ' + (ylista(marcados(f, 'formato')) || 'PDF') + ' y déjalo ' + valor(f, 'destino') + '.');
          if (valor(f, 'repetir')) p.push('Cuando esté bien, prográmalo para que se repita ' + valor(f, 'repetir') + ' sin que te lo pida.');
          p.push('Si te falta algún dato, pregúntame antes de empezar.');
          out.textContent = p.join(' ');
        }
        f.addEventListener('input', pinta); f.addEventListener('change', pinta); pinta();
      },
    },

    comparador: {
      html: function () {
        return '<div class="dos-col"><form class="form" onsubmit="return false">' +
          '<fieldset class="campo"><legend>¿Para qué lo vas a usar sobre todo?</legend>' + opciones('tarea', 'radio', [{ v: 'dia', t: 'Correo, resúmenes y documentos' }, { v: 'informes', t: 'Informes y análisis' }, { v: 'software', t: 'Apps y tareas con Claude Code' }, { v: 'exigente', t: 'Cálculo muy exigente' }], 0) + '</fieldset>' +
          '<fieldset class="campo"><legend>¿Con qué frecuencia?</legend>' + opciones('uso', 'radio', [{ v: 'poco', t: 'De vez en cuando' }, { v: 'diario', t: 'A diario' }, { v: 'intenso', t: 'Todo el día' }], 1) + '</fieldset>' +
          '</form><div class="resultado" aria-live="polite"></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.resultado');
        var MOD = { dia: ['Opus', 'Para el día a día, Opus «es más que suficiente». Haiku o Sonnet sirven para tareas sencillas.'], informes: ['Opus', '«Es más inteligente y por eso entiende mejor lo que quieres decir».'], software: ['Opus', 'El modelo de uso diario de los formadores, también en Claude Code.'], exigente: ['Fable', '«Un doctorado experto que le dedica tiempo». Pero «ahí sí que te funden los tokens».'] };
        function pinta() {
          var t = valor(f, 'tarea'), u = valor(f, 'uso'), m = MOD[t];
          var plan = t === 'exigente' || u === 'intenso' ? '200-300 €' : '100 €';
          var nota = u === 'poco' && t !== 'exigente' ? 'Con el de 20 € puedes probar, pero «con la cuenta de 20 estás frito» en cuanto trabajas de verdad.' : plan === '100 €' ? 'Con el de 100 € «ahí no vais a tener miedo de hacer nada».' : 'Para un uso muy intensivo o para lo más exigente, el plan profesional.';
          out.innerHTML = '<span class="chip chip--claude">Recomendación de la sesión</span><p class="big">' + m[0] + ' · plan de ' + plan + '</p><p>' + m[1] + '</p><p>' + nota + '</p><p style="font-size:13px">Precios dichos en la sesión, sin comprobar.</p>';
        }
        f.addEventListener('change', pinta); pinta();
      },
    },

    oficios: {
      html: function () {
        return '<div class="oficios" role="group" aria-label="Oficios">' + C.oficios.map(function (o, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-i="' + i + '">' + o.k + '</button>'; }).join('') + '</div>' +
          '<div class="salida" style="margin-top:12px;position:static"><div class="salida__cab"><span class="chip chip--claude">Prompt de ejemplo</span>' + copiaBtn('data-copiar-de=".salida__texto"') + '</div><p class="salida__texto" aria-live="polite"></p></div>';
      },
      activa: function (el) {
        var out = el.querySelector('.salida__texto');
        function pinta(i) { el.querySelectorAll('.oficios button').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.i === i)); }); out.textContent = C.oficios[i].p; }
        el.querySelectorAll('.oficios button').forEach(function (b) { b.addEventListener('click', function () { pinta(+b.dataset.i); }); });
        pinta(0);
      },
    },

    semaforo: {
      html: function () {
        var M3 = [{ v: 0, t: 'Manual', c: '#2f8a3e' }, { v: 1, t: 'Automático', c: '#e0a100' }, { v: 2, t: 'Bypass', c: '#c9372c' }];
        return '<div class="semaforo"><div class="semaforo__rango" role="radiogroup" aria-label="Modo de permisos">' + M3.map(function (m, i) { return '<label><input type="radio" name="modo" value="' + m.v + '"' + (i === 0 ? ' checked' : '') + '><span style="--c:' + m.c + '">' + m.t + '</span></label>'; }).join('') + '</div><div class="resultado" aria-live="polite"></div></div>';
      },
      activa: function (el) {
        var out = el.querySelector('.resultado');
        var T = [
          ['Manual (por defecto)', '«Os va a pedir permiso para todo». Lees y apruebas cada paso.', 'Para empezar y para cualquier cosa que toque archivos importantes.'],
          ['Automático', 'Decide solo lo rutinario y te pregunta lo delicado.', 'Cuando ya te fías del proyecto y de la carpeta.'],
          ['Bypass permissions', 'Hace unas preguntas conceptuales al principio y llega hasta el final sin preguntar.', 'Solo en una carpeta de pruebas, con Git para poder volver atrás. Nunca con datos de la empresa.'],
        ];
        function pinta() { var t = T[+el.querySelector('input:checked').value]; out.innerHTML = '<h3>' + t[0] + '</h3><p>' + t[1] + '</p><p><b>Cuándo usarlo:</b> ' + t[2] + '</p>'; }
        el.addEventListener('change', pinta); pinta();
      },
    },

    'skill-indice': {
      html: function () {
        return '<div class="dos-col"><form class="form" onsubmit="return false">' +
          '<label class="campo"><span>Nombre de la skill</span><input name="nombre" type="text" autocomplete="off" value="Índice de Prestaciones"></label>' +
          '<label class="campo"><span>¿Para qué sirve?</span><input name="para" type="text" autocomplete="off" value="encontrar rápido la documentación del equipo"></label>' +
          '<label class="campo"><span>Tus carpetas <small>Una por línea: carpeta — qué hay</small></span><textarea name="carpetas" rows="6">Procedimientos — manuales y protocolos vigentes\nInformes — informes mensuales y presentaciones\nProveedores — contratos y condiciones\nPlantillas — modelos de correo y documentos</textarea></label>' +
          '</form><div class="salida"><div class="salida__cab"><span class="chip chip--claude">Tu skill índice</span>' + copiaBtn('data-copiar-de=".salida__texto"') + '</div><p class="salida__texto salida__texto--mono" aria-live="polite"></p></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.salida__texto');
        function slug(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'indice'; }
        function pinta() {
          var n = valor(f, 'nombre') || 'Índice', para = sinPunto(valor(f, 'para') || 'encontrar la información');
          var lineas = valor(f, 'carpetas').split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { var p = l.split(/\s+[—-]\s+/); return '- `' + p[0] + '`' + (p[1] ? ': ' + p[1] : ''); });
          out.textContent = '---\nname: ' + slug(n) + '\ndescription: ' + n + '. Úsala para ' + para + '.\n---\n\n# ' + n + '\n\nPara qué: ' + para + '.\n\n## Dónde está cada cosa\n' + (lineas.join('\n') || '- `carpeta`: qué hay') + '\n\n## Cómo usarla\n- Lee solo la carpeta que necesites; no cargues todo.\n- Si un dato no está, dilo; no lo inventes.\n- Respeta los permisos de cada carpeta.\n- Respuestas cortas y con la ruta del archivo.';
        }
        f.addEventListener('input', pinta); pinta();
      },
    },

    planificador: {
      html: function () {
        return '<div class="dos-col"><form class="form" onsubmit="return false">' +
          '<label class="campo"><span>¿Qué tiene que hacer?</span><input name="que" type="text" autocomplete="off" value="sacar el informe de precios"></label>' +
          '<fieldset class="campo"><legend>¿Cada cuánto?</legend>' + opciones('frec', 'radio', ['todos los días', 'todos los lunes', 'el primer día de cada mes'], 0) + '</fieldset>' +
          '<label class="campo"><span>¿A qué hora?</span><select name="hora"><option>7:00</option><option>8:00</option><option>9:00</option><option>14:00</option><option>20:00</option></select></label>' +
          '<label class="campo"><span>¿Dónde lo deja?</span><select name="donde"><option>en un Excel fechado en mi carpeta</option><option>en mi carpeta de Drive</option><option>en mi correo, como borrador</option></select></label>' +
          '<fieldset class="campo"><legend>¿Y si el ordenador está apagado?</legend>' + opciones('nube', 'radio', [{ v: 'si', t: 'Que lo haga desde GitHub' }, { v: 'no', t: 'Solo con mi ordenador' }], 0) + '</fieldset>' +
          '</form><div class="salida"><div class="salida__cab"><span class="chip chip--claude">Pídeselo así</span>' + copiaBtn('data-copiar-de=".salida__texto"') + '</div><p class="salida__texto" aria-live="polite"></p></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.salida__texto');
        function pinta() { out.textContent = 'Cuando funcione, quiero que se ejecute solo ' + valor(f, 'frec') + ' a las ' + valor(f, 'hora') + ': ' + sinPunto(valor(f, 'que') || 'la tarea') + ', y que lo deje ' + valor(f, 'donde') + '. Guarda por el camino para poder reanudar si se corta.' + (valor(f, 'nube') === 'si' ? ' Si mi ordenador está apagado, hazlo desde GitHub.' : ''); }
        f.addEventListener('input', pinta); f.addEventListener('change', pinta); pinta();
      },
    },

    arbol: {
      html: function () {
        var P = [['solo', '¿Lo vas a usar solo tú (o tu equipo)?'], ['personales', '¿Usa datos personales o confidenciales?'], ['sistemas', '¿Tiene que conectarse a sistemas de la empresa?'], ['muchos', '¿Lo van a usar muchas personas o clientes?']];
        return '<div class="dos-col"><form class="form" onsubmit="return false">' + P.map(function (p, i) { return '<fieldset class="campo"><legend>' + p[1] + '</legend>' + opciones(p[0], 'radio', [{ v: 'si', t: 'Sí' }, { v: 'no', t: 'No' }], i === 0 ? 0 : 1) + '</fieldset>'; }).join('') + '</form><div class="resultado" aria-live="polite"></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.resultado');
        function pinta() {
          var r;
          if (valor(f, 'personales') === 'si') r = ['Habla antes con IT y con protección de datos', 'Aunque sea solo para ti, los datos personales o confidenciales necesitan base legal y cuidado.', '#c9372c'];
          else if (valor(f, 'sistemas') === 'si' || valor(f, 'muchos') === 'si' || valor(f, 'solo') === 'no') r = ['Haz un prototipo y llévaselo a IT', '«Me hace falta esto y quiero que sea como este». IT lo asegura contra su servicio o API antes de pasarlo a producción.', '#e0a100'];
          else r = ['Hazlo tú: es una solución satelital', 'Corre en tu entorno y no toca nada de la empresa. Pide registros (logs) y usa Git para poder volver atrás.', '#2f8a3e'];
          out.innerHTML = '<span class="chip" style="background:' + r[2] + ';color:#fff">Resultado</span><h3>' + r[0] + '</h3><p>' + r[1] + '</p>';
        }
        f.addEventListener('change', pinta); pinta();
      },
    },

    checklist: {
      html: function () {
        var n = 0;
        return '<div class="check__prog"><span data-cuenta>0 de 0</span><span class="check__barra" aria-hidden="true"><i></i></span></div>' + C.checklist.map(function (g) { return '<div class="check__grupo"><h3>' + g.g + '</h3>' + g.items.map(function (it) { var i = n++; return '<label><input type="checkbox" data-i="' + i + '"><span>' + it + '</span></label>'; }).join('') + '</div>'; }).join('');
      },
      activa: function (el) {
        var cajas = el.querySelectorAll('input[type="checkbox"]'), clave = 'formacion-claude-checklist', est = [];
        try { est = JSON.parse(localStorage.getItem(clave) || '[]'); } catch (e) {}
        cajas.forEach(function (c) { c.checked = est.indexOf(+c.dataset.i) >= 0; });
        function cuenta() {
          var hechos = Array.prototype.filter.call(cajas, function (c) { return c.checked; });
          el.querySelector('[data-cuenta]').textContent = hechos.length + ' de ' + cajas.length;
          el.querySelector('.check__barra i').style.transform = 'scaleX(' + (hechos.length / cajas.length) + ')';
          try { localStorage.setItem(clave, JSON.stringify(hechos.map(function (c) { return +c.dataset.i; }))); } catch (e) {}
        }
        el.addEventListener('change', cuenta); cuenta();
      },
    },

    test: {
      html: function () {
        return '<form class="preguntas" onsubmit="return false">' + C.test.map(function (t, i) { return '<fieldset class="pregunta" data-q="' + i + '"><legend>' + (i + 1) + '. ' + t.q + '</legend>' + opciones('q' + i, 'radio', t.o.map(function (o, j) { return { v: String(j), t: o }; }), -1) + '<p class="pregunta__sol" hidden></p></fieldset>'; }).join('') + '<div class="resultado" aria-live="polite"><p>Responde y te decimos cómo vas.</p></div></form>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.resultado');
        f.addEventListener('change', function (e) {
          var fs = e.target.closest('.pregunta'), i = +fs.dataset.q, t = C.test[i], ok = +e.target.value === t.a;
          fs.classList.toggle('bien', ok); fs.classList.toggle('mal', !ok);
          var sol = fs.querySelector('.pregunta__sol'); sol.hidden = false; sol.textContent = ok ? '¡Bien!' : 'La buena: ' + t.o[t.a] + '.';
          var hechas = f.querySelectorAll('.pregunta.bien, .pregunta.mal').length, bien = f.querySelectorAll('.pregunta.bien').length;
          out.innerHTML = '<p class="big">' + bien + ' de ' + C.test.length + '</p><p>' + (hechas < C.test.length ? 'Llevas ' + hechas + ' respondidas.' : bien >= 8 ? 'Te has quedado con lo importante.' : 'Repasa las secciones de las que fallaste: cada una tiene su PDF.') + '</p>';
        });
      },
    },
  };
  function checklistTexto() { return C.checklist.map(function (g) { return '<h3 class="h">' + g.g + '</h3><ul class="lista">' + g.items.map(function (i) { return '<li>☐ ' + i + '</li>'; }).join('') + '</ul>'; }).join(''); }
  function testTexto() { return '<ol class="lista">' + C.test.map(function (t) { return '<li><b>' + t.q + '</b><br>' + t.o.map(function (o, j) { return (j === t.a ? '✔ ' : '· ') + o; }).join('<br>') + '</li>'; }).join('') + '</ol>'; }

  // ------------------------------------------------------------ escenas
  function cabecera(s, i, imp) {
    var medio = imp || reduce
      ? '<figure class="medio"><img src="assets/img/' + (imp ? 'imp/' + s.img + '.jpg' : s.img + '.webp') + '" alt="" width="1600" height="905"></figure>'
      : '<figure class="medio"><video src="assets/video/' + s.video + '.mp4" poster="assets/img/' + s.img + '.webp" muted loop playsinline autoplay preload="metadata" aria-hidden="true"></video></figure>';
    return '<header class="cabecera"><div class="cabecera__texto"><p class="kicker">' + s.n + ' · Sección</p><h1 id="t-' + s.id + '">' + s.t + '</h1><p>' + s.x + '</p>' +
      '<div class="cabecera__acc"><a class="btn" href="' + pdfDe(s.id) + '" download>' + ICO.bajar + 'PDF de la sección</a><button type="button" class="btn btn--claro" data-enlace="' + s.id + '">' + ICO.enlace + 'Copiar enlace</button></div></div>' + medio + '</header>';
  }
  function portada(s, imp) {
    if (imp) return '<div class="portada-imp"><div class="portada-imp__texto"><p class="kicker">Formación Claude · Grupo Mutua · ' + M.fecha + '</p><h1 id="t-inicio">Claude no es otro chat. Es una <em>plantilla de doctorandos</em> trabajando para ti.</h1><p class="portada__sub">Lo que vimos en la formación de ' + M.formadores + ': las piezas, los prompts reales y cómo empezar mañana.</p>' + alianza() + '</div>' +
      '<div class="portada-imp__img"><img src="assets/img/imp/portada.jpg" alt="" width="1100" height="622"></div></div>';
    var fondo = imp || reduce ? '<img class="portada__fondo" src="assets/img/inicio.webp" alt="" width="1600" height="905">' : '<video class="portada__fondo" src="assets/video/inicio.mp4" poster="assets/img/inicio.webp" muted loop playsinline autoplay preload="metadata" aria-hidden="true"></video>';
    return '<div class="portada" data-capas>' + fondo +
      '<img class="capa capa--sujeto" data-prof="22" src="assets/img/portada-sujeto.webp" alt="" width="1300" height="863">' +
      '<img class="capa capa--hojas" data-prof="40" src="assets/img/portada-hojas.webp" alt="" width="900" height="598">' +
      '<div class="portada__texto"><p class="kicker">Formación Claude · Grupo Mutua · ' + M.fecha + '</p><h1 id="t-inicio">Claude no es otro chat. Es una <em>plantilla de doctorandos</em> trabajando para ti.</h1>' +
      '<p class="portada__sub">Lo que vimos en la formación de ' + M.formadores + ': las piezas, los prompts reales y cómo empezar mañana.</p>' + alianza() +
      (imp ? '' : '<div class="cabecera__acc"><a class="btn" href="#/mapa">Empezar por el mapa →</a><a class="btn btn--claro" href="#/inicio/mapa-web">Ver las 11 secciones</a></div>') + '</div></div>';
  }
  function navega(i) {
    var a = S[i - 1], b = S[i + 1];
    return '<nav class="sigue" aria-label="Anterior y siguiente">' + (a ? '<a href="#/' + a.id + '"><small>← Anterior</small><span>' + a.n + ' · ' + a.t + '</span></a>' : '<span></span>') + (b ? '<a class="sig" href="#/' + b.id + '"><small>Siguiente →</small><span>' + b.n + ' · ' + b.t + '</span></a>' : '<a class="sig" href="#/descargas"><small>Para terminar →</small><span>Descargas</span></a>') + '</nav>';
  }
  function escena(i, sub) {
    var s = S[i];
    var sb = s.subs.find(function (x) { return x.id === sub; }) || s.subs[0];
    var cab = s.id === 'inicio' ? portada(s) : cabecera(s, i);
    var subs = '<nav class="subpestanas" aria-label="Partes de «' + esc(s.t) + '»">' + s.subs.map(function (x, k) { return '<a href="#/' + s.id + '/' + x.id + '"' + (x === sb ? ' aria-current="page"' : '') + '><span class="n">' + (k + 1) + '</span>' + x.t + '</a>'; }).join('') + '</nav>';
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' + cab + subs + '<div class="cuerpo"><div class="panel" id="panel">' + sb.blocks.map(function (b) { return bloque(b, false); }).join('') + '</div>' + navega(i) + '</div></section>';
  }
  function escenaImp(i) {
    var s = S[i];
    var cab = s.id === 'inicio' ? portada(s, true) : cabecera(s, i, true);
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' + cab + '<div class="cuerpo">' + s.subs.map(function (x) { return '<div class="bloque-sub"><h2>' + x.t + '</h2><div class="panel">' + x.blocks.map(function (b) { return bloque(b, true); }).join('') + '</div></div>'; }).join('') + '</div></section>';
  }
  function descargas() {
    var tam = window.TAMANOS || {};
    function t(f) { return tam[f] ? ' · ' + tam[f] : ''; }
    // Bloque de una presentación: texto, botones de PDF y PowerPoint y cuatro miniaturas
    function presentacion(id, kicker, titulo, texto, archivo, pdfPrimero) {
      var pdf = '<a class="btn' + (pdfPrimero ? '' : ' btn--claro') + '" href="descargas/' + archivo + '.pdf" download>' + ICO.bajar + 'PDF' + t(archivo + '.pdf') + '</a>';
      var ppt = '<a class="btn' + (pdfPrimero ? ' btn--claro' : '') + '" href="descargas/' + archivo + '.pptx" download>' + ICO.bajar + 'PowerPoint' + t(archivo + '.pptx') + '</a>';
      return '<section class="presentacion presentacion--' + id + '" aria-labelledby="t-' + id + '"><div class="presentacion__texto"><p class="kicker">' + kicker + '</p><h2 id="t-' + id + '">' + titulo + '</h2><p>' + texto + '</p>' +
        '<div class="presentacion__acc">' + (pdfPrimero ? pdf + ppt : ppt + pdf) + '</div></div>' +
        '<div class="presentacion__mini" aria-hidden="true">' + [1, 2, 3, 4].map(function (n) { return '<img src="assets/img/' + (id === 'sesion' ? 'sesion-' : 'diapo-') + n + '.webp" alt="" width="640" height="360" loading="lazy">'; }).join('') + '</div></section>';
    }
    return '<section class="escena" aria-labelledby="t-desc"><header class="cabecera"><div class="cabecera__texto"><p class="kicker">Descargas</p><h1 id="t-desc">Llévatelo</h1><p>Las dos presentaciones (la que se proyectó en la sesión y la corporativa), todo el resumen en PDF y en Word, la chuleta de prompts y cada sección en su propio PDF.</p></div><figure class="medio"><img src="assets/img/correo.webp" alt="" width="1600" height="905"></figure></header>' +
      '<div class="cuerpo"><div class="descargas">' +
      presentacion('sesion', 'La que se vio en la sala · 34 diapositivas', 'La presentación de la sesión', '«Cómo trabajo con Claude», la presentación de Diego Renedo que se proyectó en la formación, tal cual. En PDF para verla en cualquier sitio y en PowerPoint para proyectarla o adjuntarla.', 'Formacion-Claude-presentacion-sesion', true) +
      presentacion('corporativa', 'Versión corporativa · 50 diapositivas', 'El resumen, en diapositivas', 'Toda la formación ordenada sección a sección, con los colores y los logos de Reynasa, Aurgi y Mutua. En PowerPoint editable para reutilizarla, y en PDF.', 'Formacion-Claude-presentacion-corporativa', false) +
      '<div class="descargas__top">' +
      '<a class="descarga" href="descargas/Formacion-Claude-completa.pdf" download><b>PDF completo</b><span>Las 11 secciones' + t('Formacion-Claude-completa.pdf') + '</span></a>' +
      '<a class="descarga" href="descargas/Formacion-Claude-completa.docx" download><b>Word completo</b><span>Para editarlo y reutilizarlo' + t('Formacion-Claude-completa.docx') + '</span></a>' +
      '<a class="descarga descarga--claro" href="descargas/Chuleta-de-prompts.pdf" download><b>Chuleta de prompts</b><span>Los prompts de la sesión, para tenerlos a mano' + t('Chuleta-de-prompts.pdf') + '</span></a>' +
      '<a class="descarga descarga--claro" href="formacion.md"><b>Para tu Claude</b><span>Toda la formación en texto: pásale el enlace o súbelo a un proyecto «Formación»</span></a></div>' +
      '<h2 class="h">Cada sección, en su PDF</h2><ul class="lista-pdf">' + S.map(function (s) { var f = pdfDe(s.id); return '<li><a href="' + f + '" download><span>' + s.n + ' · ' + s.t + '</span><small>PDF' + t(f.replace('descargas/', '')) + '</small></a></li>'; }).join('') + '</ul>' +
      '<p class="nota">' + M.aviso + '</p></div></div></section>';
  }

  // Chuleta: todos los prompts de la sesión en una hoja, más las preguntas para iterar
  function chuleta() {
    var items = [];
    S.forEach(function (s) { s.subs.forEach(function (x) { x.blocks.forEach(function (b) { if (b.t === 'prompts') b.items.forEach(function (p) { items.push({ t: p.t + ' · ' + s.corto, p: p.p }); }); }); }); });
    items.push({ t: 'Para iterar contra el resultado', p: '¿Qué has detectado? Dámelo en 5 puntos. · ¿Por qué no convierte? ¿Qué harías? · ¿Qué harías el mes que viene? ¿Qué riesgos ves? · Sobre mis intereses, redúcemelo en 5 puntos y dime cuál es el clave.' });
    items.push({ t: 'La plantilla', p: 'Quiero [objetivo]. Contexto: [qué sé y para quién es]. Fuente: [web, Analytics, Drive, correo] o dime antes las mejores fuentes. Céntrate en [filtro]. Entrégamelo en [formato] y déjalo en [sitio]. Si te falta algún dato, pregúntame.' });
    return '<section class="chuleta"><div class="chuleta__cab"><div><p class="kicker">Formación Claude · ' + M.fecha + '</p><h1>Chuleta de prompts</h1></div>' + alianza() + '</div><div class="chuleta__rejilla">' + items.map(function (i) { return '<div class="chuleta__item"><b>' + esc(i.t) + '</b><p>' + esc(i.p) + '</p></div>'; }).join('') + '</div><p class="chuleta__pie">Lo cuentas con tus palabras: objetivo, contexto y fuente. Todo a borrador. ' + M.url + '</p></section>';
  }

  // ------------------------------------------------------------ comportamiento
  function copiar(btn, texto) {
    var ok = function () { var h = btn.innerHTML; btn.classList.add('ok'); btn.textContent = 'Copiado'; setTimeout(function () { btn.classList.remove('ok'); btn.innerHTML = h; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, ok);
    else { var a = document.createElement('textarea'); a.value = texto; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) {} a.remove(); ok(); }
  }
  function activar(raiz) {
    raiz.querySelectorAll('[data-herramienta]').forEach(function (el) { var h = H[el.dataset.herramienta]; if (h && h.activa) h.activa(el); });
    raiz.querySelectorAll('.giro').forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); }); });
    if (!reduce && matchMedia('(pointer: fine)').matches) raiz.querySelectorAll('[data-capas]').forEach(function (h) {
      var capas = h.querySelectorAll('[data-prof]');
      setTimeout(function () { capas.forEach(function (c) { c.style.animation = 'none'; }); }, 1500);
      h.addEventListener('pointermove', function (e) { var r = h.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; capas.forEach(function (c) { var p = +c.dataset.prof; c.style.transform = 'translate3d(' + (-x * p).toFixed(1) + 'px,' + (-y * p * .6).toFixed(1) + 'px,0)'; }); });
      h.addEventListener('pointerleave', function () { capas.forEach(function (c) { c.style.transform = ''; }); });
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copiar]'); if (b) return copiar(b, b.getAttribute('data-copiar'));
    b = e.target.closest('[data-copiar-de]'); if (b) { var t = b.closest('.salida').querySelector(b.getAttribute('data-copiar-de')); return copiar(b, t.textContent); }
    b = e.target.closest('[data-enlace]'); if (b) return copiar(b, M.url + b.getAttribute('data-enlace') + '/');
  });

  // ------------------------------------------------------------ arranque
  ponTema(leeTema(), false);
  if (IMPRIMIR) {
    document.documentElement.setAttribute('data-tema', 'reynasa');
    document.body.classList.add('modo-imp');
    if (IMPRIMIR === 'chuleta') main.innerHTML = chuleta();
    else main.innerHTML = (IMPRIMIR === 'todo' ? S.map(function (_, i) { return i; }) : [idx(IMPRIMIR)]).map(escenaImp).join('');
    var imgs = Array.prototype.slice.call(document.images);
    // Al imprimir no hay perezosas: se cargan todas y se espera a que estén decodificadas
    imgs.forEach(function (im) { im.loading = 'eager'; });
    Promise.all(imgs.map(function (im) { return im.decode().catch(function () {}); })).then(function () { window.__listo = true; });
    return;
  }

  var pest = document.querySelector('.pestanas ol');
  pest.innerHTML = S.map(function (s) { return '<li><a href="#/' + s.id + '" data-id="' + s.id + '"><span class="n">' + s.n + '</span>' + s.corto + '</a></li>'; }).join('');
  var btnColores = document.querySelector('[data-colores]'), panelColores = document.getElementById('panel-colores');
  btnColores.addEventListener('click', function () { var abre = panelColores.hidden; panelColores.hidden = !abre; btnColores.setAttribute('aria-expanded', String(abre)); });
  document.addEventListener('click', function (e) { if (!panelColores.hidden && !e.target.closest('.colores')) { panelColores.hidden = true; btnColores.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panelColores.hidden) { panelColores.hidden = true; btnColores.setAttribute('aria-expanded', 'false'); btnColores.focus(); } });
  panelColores.querySelectorAll('.tema').forEach(function (b) { b.addEventListener('click', function () { ponTema(b.dataset.tema, true); }); });

  var actual = null;
  function pinta() {
    var h = (location.hash || '#/inicio').replace(/^#\/?/, '').split('/');
    var id = h[0] || 'inicio', sub = h[1], i = idx(id);
    var titulo;
    if (id === 'descargas') { main.innerHTML = descargas(); titulo = 'Descargas'; i = S.length; }
    else {
      if (i < 0) { i = 0; id = 'inicio'; }
      if (actual === id && sub) {
        // misma sección: solo cambia la subpestaña, sin volver a cargar el vídeo
        var s = S[i], sb = s.subs.find(function (x) { return x.id === sub; }) || s.subs[0];
        main.querySelectorAll('.subpestanas a').forEach(function (a) { if (a.getAttribute('href') === '#/' + id + '/' + sb.id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
        var p = document.getElementById('panel'); p.innerHTML = sb.blocks.map(function (b) { return bloque(b, false); }).join(''); activar(p);
        var sp = main.querySelector('.subpestanas'); if (sp.getBoundingClientRect().top > window.innerHeight * .5 || sp.getBoundingClientRect().top < 0) sp.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        document.title = sb.t + ' · ' + s.t + ' · ' + M.titulo;
        return;
      }
      main.innerHTML = escena(i, sub); titulo = S[i].t;
    }
    actual = id; activar(main);
    pest.querySelectorAll('a').forEach(function (a) { if (a.dataset.id === id) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' }); } else a.removeAttribute('aria-current'); });
    document.querySelector('.barra__progreso i').style.transform = 'scaleX(' + Math.min(1, (i + 1) / S.length) + ')';
    document.title = (titulo === 'Inicio' ? '' : titulo + ' · ') + M.titulo + ' · Reynasa × Aurgi × Grupo Mutua';
    window.scrollTo(0, 0); main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', pinta);
  pinta();
})();
