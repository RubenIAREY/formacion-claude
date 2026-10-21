/* Estilo «Escenas» · piezas comunes: textos de las secciones, constructor de prompts, copiar y capas con profundidad. */
(function () {
  'use strict';
  var C = window.CONTENIDO;
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/escenas\.js.*$/, '');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ICO_COPIAR = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  var E = window.ESCENAS = { base: BASE, reduce: reduce, esc: esc };

  E.capasPortada = function (alto) {
    return '<div class="capas entra-capas" data-capas style="height:' + alto + '">' +
      '<img class="capa capa--fondo" data-prof="8" src="' + BASE + 'img/portada-fondo.webp" alt="" width="2000" height="1131" fetchpriority="high">' +
      '<img class="capa capa--sujeto" data-prof="22" src="' + BASE + 'img/portada-sujeto.webp" alt="" width="1300" height="863">' +
      '<img class="capa capa--hojas" data-prof="40" src="' + BASE + 'img/portada-hojas.webp" alt="" width="900" height="598">' +
      '</div>';
  };

  E.inicio = {
    datos: function () { return '<div class="datos">' + C.inicio.datos.map(function (d) { return '<div><b>' + d.n + '</b><span>' + d.l + '</span></div>'; }).join('') + '</div>'; },
    ideas: function () { return '<div class="ideas3">' + C.inicio.ideas.map(function (i) { return '<article><h3>' + i.k + '</h3><p>' + i.x + '</p></article>'; }).join('') + '</div>'; },
  };

  E.pedir = {
    idea: function () {
      var P = C.pedir;
      return '<p class="lead">' + P.lead + '</p>' +
        '<ul class="claves">' + P.claves.map(function (k) { return '<li><b>' + k.k + '</b><span>' + k.x + '</span></li>'; }).join('') + '</ul>' +
        '<p class="nota">' + P.profundidad + '</p>' +
        '<blockquote class="cita"><p>«' + P.citas[0].x + '»</p><cite>' + P.citas[0].who + '</cite></blockquote>';
    },
    como: function () {
      var P = C.pedir;
      return '<ol class="pasos">' + P.pasos.map(function (p) { return '<li><b>' + p.k + '</b><span>' + p.x + '</span></li>'; }).join('') + '</ol>' +
        '<h3 class="sub-h">Y luego, itera contra el resultado</h3>' +
        '<ul class="preguntas-iterar">' + P.iterar.map(function (q) { return '<li>' + q + '</li>'; }).join('') + '</ul>' +
        '<blockquote class="cita"><p>«' + P.citas[2].x + '»</p><cite>' + P.citas[2].who + '</cite></blockquote>';
    },
    constructor: function () {
      return '<div class="constructor" data-constructor>' +
        '<form class="constructor__form" onsubmit="return false">' +
        '<label class="campo"><span>¿Qué quieres conseguir? <small>El objetivo, con tus palabras</small></span><textarea name="objetivo" rows="3" placeholder="Por ejemplo: saber qué páginas de la web traen más clientes y por qué…"></textarea></label>' +
        '<label class="campo"><span>Un poco de contexto <small>Opcional</small></span><textarea name="contexto" rows="2" placeholder="Para quién es, qué sabes ya, qué te interesa…"></textarea></label>' +
        '<label class="campo"><span>¿De dónde salen los datos?</span><select name="fuente">' +
        '<option value="">No lo sé: que me proponga las mejores fuentes</option>' +
        '<option>la web pública que tengo abierta en Chrome</option>' +
        '<option>mi Google Analytics, abierto en Chrome con mi sesión</option>' +
        '<option>los documentos de mi carpeta de Drive</option>' +
        '<option>mi correo</option>' +
        '<option>el Excel que te adjunto</option></select></label>' +
        '<label class="campo"><span>Periodo o filtro <small>Opcional</small></span><input name="filtro" type="text" autocomplete="off" placeholder="julio de 2026, solo una marca, comparado con el año pasado…"></label>' +
        '<fieldset class="campo"><legend>Formato</legend><div class="opciones">' +
        ['PDF', 'Word', 'PowerPoint editable', 'Excel', 'aquí en el chat'].map(function (f, i) { return '<label><input type="checkbox" name="formato" value="' + f + '"' + (i === 0 ? ' checked' : '') + '><span>' + f + '</span></label>'; }).join('') +
        '</div></fieldset>' +
        '<label class="campo"><span>¿Dónde lo dejo?</span><select name="destino"><option>en mi carpeta de Drive</option><option>en mi correo, como borrador</option><option>aquí, en el chat</option></select></label>' +
        '<fieldset class="campo"><legend>Profundidad</legend><div class="opciones">' +
        '<label><input type="radio" name="prof" value="normal"><span>Normal</span></label>' +
        '<label><input type="radio" name="prof" value="consultora" checked><span>De consultora</span></label></div></fieldset>' +
        '<label class="campo"><span>¿Que se repita solo?</span><select name="repetir"><option value="">No, solo esta vez</option><option>todos los lunes a primera hora</option><option>todos los días a las 7:00</option><option>el primer día de cada mes</option></select></label>' +
        '</form>' +
        '<div class="constructor__salida"><div class="salida"><div class="salida__cab"><span class="chip chip--claude">Tu prompt</span><button type="button" class="copiar" data-copiar-salida>' + ICO_COPIAR + 'Copiar</button></div>' +
        '<p class="salida__texto" aria-live="polite"></p></div>' +
        '<p class="nota">Pégalo en Claude tal cual. Cuando tengas el resultado, sigue con las preguntas de «Cómo se hace» para iterar.</p></div>' +
        '</div>';
    },
    prompts: function () {
      return '<div class="prompts">' + C.pedir.prompts.map(function (p) {
        return '<article class="prompt"><div class="prompt__cab"><h3>' + p.t + '</h3><span class="chip">' + p.tag + '</span></div>' +
          '<p class="prompt__texto">' + esc(p.p) + '</p>' +
          '<p class="prompt__res"><b>Qué salió:</b> ' + p.r + '</p>' +
          '<button type="button" class="copiar" data-copiar="' + esc(p.p) + '">' + ICO_COPIAR + 'Copiar el prompt</button></article>';
      }).join('') + '</div>';
    },
  };

  // Constructor: compone el prompt en lenguaje natural mientras escribes.
  function componer(f) {
    var v = function (n) { var e = f.elements[n]; return e ? String(e.value || '').trim() : ''; };
    var obj = v('objetivo').replace(/[.\s]+$/, '');
    var partes = [];
    partes.push(obj ? 'Quiero ' + obj.charAt(0).toLowerCase() + obj.slice(1) + '.' : 'Quiero [tu objetivo].');
    if (v('contexto')) partes.push('Para que tengas contexto: ' + v('contexto').replace(/[.\s]+$/, '') + '.');
    partes.push(v('fuente') ? 'Usa como fuente ' + v('fuente') + '.' : 'Antes de empezar, dime cuáles son las mejores fuentes sobre esto y trabaja con la más fiable.');
    if (v('filtro')) partes.push('Céntrate en ' + v('filtro').replace(/[.\s]+$/, '') + '.');
    var prof = f.querySelector('input[name="prof"]:checked');
    if (prof && prof.value === 'consultora') partes.push('Hazlo con la profundidad de una consultoría: resumen ejecutivo, tablas y conclusiones.');
    var fm = Array.prototype.slice.call(f.querySelectorAll('input[name="formato"]:checked')).map(function (i) { return i.value; });
    var lista = fm.length > 1 ? fm.slice(0, -1).join(', ') + ' y ' + fm[fm.length - 1] : (fm[0] || 'PDF');
    partes.push('Entrégamelo en ' + lista + ' y déjalo ' + v('destino') + '.');
    if (v('repetir')) partes.push('Cuando esté bien, prográmalo para que se repita ' + v('repetir') + ' sin que te lo pida.');
    partes.push('Si te falta algún dato, pregúntame antes de empezar.');
    return partes.join(' ');
  }

  function copiar(btn, texto) {
    var ok = function () { var t = btn.innerHTML; btn.classList.add('ok'); btn.innerHTML = 'Copiado'; setTimeout(function () { btn.classList.remove('ok'); btn.innerHTML = t; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, ok);
    else { var a = document.createElement('textarea'); a.value = texto; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) {} a.remove(); ok(); }
  }

  E.activar = function (raiz) {
    raiz = raiz || document;
    raiz.querySelectorAll('[data-constructor]').forEach(function (c) {
      if (c.dataset.listo) return; c.dataset.listo = '1';
      var f = c.querySelector('form'), out = c.querySelector('.salida__texto');
      var pinta = function () { out.textContent = componer(f); };
      f.addEventListener('input', pinta); f.addEventListener('change', pinta); pinta();
      c.querySelector('[data-copiar-salida]').addEventListener('click', function (e) { copiar(e.currentTarget, out.textContent); });
    });
    raiz.querySelectorAll('[data-copiar]').forEach(function (b) {
      if (b.dataset.listo) return; b.dataset.listo = '1';
      b.addEventListener('click', function () { copiar(b, b.getAttribute('data-copiar')); });
    });
    // Profundidad: las capas siguen al ratón (o a la inclinación) con distinta fuerza.
    if (!reduce && matchMedia('(pointer: fine)').matches) raiz.querySelectorAll('[data-capas]').forEach(function (h) {
      if (h.dataset.listo) return; h.dataset.listo = '1';
      var capas = h.querySelectorAll('[data-prof]');
      setTimeout(function () { h.classList.remove('entra-capas'); }, 1800); // que la entrada no pise el movimiento
      h.addEventListener('pointermove', function (e) {
        var r = h.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        capas.forEach(function (c) { var p = +c.dataset.prof; c.style.transform = 'translate3d(' + (-x * p).toFixed(1) + 'px,' + (-y * p * .6).toFixed(1) + 'px,0)'; });
      });
      h.addEventListener('pointerleave', function () { capas.forEach(function (c) { c.style.transform = ''; }); });
    });
  };
})();
