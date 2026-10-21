/* Prototipo B · «Mosaico»: la portada es un panel de tarjetas; cada sección se abre a pantalla completa
   con la barra de secciones arriba, y dentro sus partes son fichas que se despliegan de una en una. */
(function () {
  'use strict';
  var C = window.CONTENIDO, E = window.ESCENAS;
  var S = C.secciones, mosaico = document.getElementById('mosaico'), hoja = document.getElementById('hoja');
  var cuerpo = hoja.querySelector('.hoja__cuerpo'), pills = hoja.querySelector('.hoja__secciones ol');
  var FICHAS = [
    { id: 'idea', t: 'La idea', x: 'Por qué ya no hace falta «ingeniería de prompts».' },
    { id: 'como', t: 'Cómo se hace', x: 'Cinco pasos y cuatro preguntas para iterar.' },
    { id: 'constructor', t: 'Constructor de prompts', x: 'Rellena tu caso y copia el prompt.' },
    { id: 'prompts', t: 'Prompts de la sesión', x: 'Seis prompts reales, listos para copiar.' },
    { id: 'descargar', t: 'Descargar', x: 'El PDF de la sección y la chuleta.' },
  ];
  var TAM = { 'pedir-bien': 'grande', mapa: 'ancha', seguridad: 'ancha', 'claude-code': 'alta' };

  // Portada: texto, escena con capas y el mosaico de secciones
  var I = C.inicio;
  mosaico.innerHTML = '<section class="intro" aria-labelledby="t-intro">' +
    '<div class="intro__texto entra"><p class="kicker">' + I.kicker + '</p><h1 id="t-intro">' + I.titulo + '</h1><p class="intro__sub">' + I.sub + '</p>' + E.inicio.datos() + '</div>' +
    '<div class="intro__escena">' + E.capasPortada('100%') + '</div></section>' +
    '<section class="rejilla-sec" aria-labelledby="t-rejilla"><h2 id="t-rejilla" class="visual-oculto">Secciones</h2><ol class="rejilla">' +
    S.map(function (s, i) {
      var t = TAM[s.id] || '';
      var fondo = s.img ? '<img class="tesela__img" src="' + E.base + 'img/' + s.img + '.webp" alt="" width="1800" height="1018" loading="lazy">' : '';
      return '<li class="tesela ' + (t ? 'tesela--' + t : '') + (s.img ? ' tesela--foto' : '') + ' tesela--c' + (i % 4) + '"><a href="#/' + s.id + '">' + fondo +
        '<span class="tesela__n">' + s.n + '</span><span class="tesela__txt"><b>' + (s.id === 'inicio' ? 'Lo esencial' : s.t) + '</b><span>' + s.x + '</span></span>' +
        (s.listo ? '<span class="chip chip--claude tesela__chip">Lista en el prototipo</span>' : '') + '</a></li>';
    }).join('') + '</ol></section>';
  E.activar(mosaico);
  pills.innerHTML = S.map(function (s) { return '<li><a href="#/' + s.id + '" data-id="' + s.id + '"><span class="n">' + s.n + '</span>' + s.corto + '</a></li>'; }).join('');

  function navega(idx) {
    var prev = S[idx - 1], next = S[idx + 1];
    return '<nav class="sigue" aria-label="Anterior y siguiente">' +
      (prev ? '<a href="#/' + prev.id + '"><small>← Anterior</small><span>' + prev.n + ' · ' + prev.t + '</span></a>' : '<span></span>') +
      (next ? '<a class="sig" href="#/' + next.id + '"><small>Siguiente →</small><span>' + next.n + ' · ' + next.t + '</span></a>' : '<span></span>') + '</nav>';
  }

  function seccion(idx, abierta) {
    var s = S[idx];
    var cab = '<header class="hcab"><div class="hcab__texto entra"><p class="kicker">' + s.n + ' · Sección</p><h2 id="hoja-t">' + (s.id === 'inicio' ? 'Lo esencial' : s.t) + '</h2><p>' + s.x + '</p></div>' +
      (s.img ? '<figure class="hcab__img"><img src="' + E.base + 'img/' + s.img + '-mesa.webp" alt="Mesa con libreta, móvil grabando una nota de voz y un café" width="1800" height="1018"></figure>' : '<div class="hcab__num" aria-hidden="true">' + s.n + '</div>') + '</header>';
    var dentro;
    if (s.id === 'pedir-bien') {
      dentro = '<div class="fichas">' + FICHAS.map(function (f) {
        var on = f.id === abierta;
        var contenido = f.id === 'descargar'
          ? '<div class="descarga"><span class="btn" aria-disabled="true">PDF de «Pedir bien»</span><span class="btn btn--claro" aria-disabled="true">Chuleta de prompts</span><p class="nota">En el prototipo los botones no descargan todavía.</p></div>'
          : E.pedir[f.id]();
        return '<article class="ficha' + (on ? ' ficha--abierta' : '') + '" id="f-' + f.id + '">' +
          '<a class="ficha__cab" href="#/' + s.id + (on ? '' : '/' + f.id) + '" aria-expanded="' + on + '"><b>' + f.t + '</b><span>' + f.x + '</span><i aria-hidden="true">' + (on ? '–' : '+') + '</i></a>' +
          (on ? '<div class="ficha__cuerpo entra">' + contenido + '</div>' : '') + '</article>';
      }).join('') + '</div>';
    } else if (s.id === 'inicio') {
      dentro = '<div class="hoja__bloque">' + E.inicio.ideas() + '</div>';
    } else {
      dentro = '<div class="hoja__bloque"><p class="nota">En los prototipos solo están completas «Lo esencial» y «Pedir bien». El resto se monta cuando elijas el formato.</p><p><a class="btn" href="#/pedir-bien">Ver «Pedir bien»</a></p></div>';
    }
    return cab + dentro + navega(idx);
  }

  var abiertaAntes = null;
  function pinta() {
    var h = (location.hash || '#/').replace(/^#\/?/, '').split('/');
    var id = h[0], sub = h[1];
    var idx = S.findIndex(function (s) { return s.id === id; });
    if (id === 'descargas') {
      cuerpo.innerHTML = '<header class="hcab"><div class="hcab__texto entra"><p class="kicker">Descargas</p><h2 id="hoja-t">Llévatelo</h2><p>El resumen completo en PDF y en Word, un PDF por sección y la chuleta de prompts. En el prototipo todavía no hay archivos.</p></div></header>';
      abre(null); return;
    }
    if (idx < 0) { cierra(); return; }
    var mismo = hoja.dataset.id === S[idx].id && !hoja.hidden;
    cuerpo.innerHTML = seccion(idx, sub);
    E.activar(cuerpo);
    abre(S[idx].id, mismo);
    if (mismo && sub) { var f = document.getElementById('f-' + sub); if (f) f.scrollIntoView({ block: 'start', behavior: E.reduce ? 'auto' : 'smooth' }); }
  }
  function abre(id, mismo) {
    hoja.dataset.id = id || '';
    pills.querySelectorAll('a').forEach(function (a) { if (a.dataset.id === id) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center' }); } else a.removeAttribute('aria-current'); });
    if (hoja.hidden) { hoja.hidden = false; document.body.classList.add('con-hoja'); requestAnimationFrame(function () { hoja.classList.add('hoja--visible'); }); }
    if (!mismo) { hoja.scrollTop = 0; hoja.focus({ preventScroll: true }); }
    document.title = (id ? (S.find(function (s) { return s.id === id; }) || {}).t + ' · ' : '') + 'Formación Claude · Prototipo B';
  }
  function cierra() {
    if (hoja.hidden) return;
    hoja.classList.remove('hoja--visible'); document.body.classList.remove('con-hoja');
    setTimeout(function () { hoja.hidden = true; }, E.reduce ? 0 : 380);
    document.title = 'Formación Claude · Prototipo B';
  }
  hoja.tabIndex = -1;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !hoja.hidden) location.hash = '#/'; });
  window.addEventListener('hashchange', pinta);
  pinta();
})();
