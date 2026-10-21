/* Prototipo A · «Pestañas»: una barra arriba con todas las secciones; cada una se ve sola, sin scroll infinito. */
(function () {
  'use strict';
  var C = window.CONTENIDO, E = window.ESCENAS;
  var S = C.secciones, main = document.getElementById('escenario');
  var lista = document.querySelector('.pestanas ol');
  var SUBS = [{ id: 'idea', t: 'La idea' }, { id: 'como', t: 'Cómo se hace' }, { id: 'constructor', t: 'Constructor de prompts' }, { id: 'prompts', t: 'Prompts de la sesión' }, { id: 'descargar', t: 'Descargar' }];

  lista.innerHTML = S.map(function (s) { return '<li><a href="#/' + s.id + '" data-id="' + s.id + '"><span class="n">' + s.n + '</span>' + s.corto + '</a></li>'; }).join('');

  function navega(idx) {
    var prev = S[idx - 1], next = S[idx + 1];
    return '<nav class="sigue" aria-label="Anterior y siguiente">' +
      (prev ? '<a class="sigue__a" href="#/' + prev.id + '"><small>← Anterior</small><span>' + prev.n + ' · ' + prev.t + '</span></a>' : '<span></span>') +
      (next ? '<a class="sigue__a sigue__a--sig" href="#/' + next.id + '"><small>Siguiente →</small><span>' + next.n + ' · ' + next.t + '</span></a>' : '<span></span>') + '</nav>';
  }

  function inicio(idx) {
    var I = C.inicio;
    return '<section class="escena escena--inicio" aria-labelledby="t-inicio">' +
      '<div class="portada">' + E.capasPortada('100%') +
      '<div class="portada__texto entra"><p class="kicker">' + I.kicker + '</p><h1 id="t-inicio">' + I.titulo + '</h1><p class="portada__sub">' + I.sub + '</p>' +
      '<div class="portada__cta"><a class="btn" href="#/mapa">Empezar por el mapa →</a><a class="btn btn--claro" href="#/pedir-bien">Ir a «Pedir bien»</a></div></div></div>' +
      '<div class="escena__cuerpo">' + E.inicio.datos() +
      '<h2 class="h-sec">Tres ideas para quedarse</h2>' + E.inicio.ideas() +
      '<h2 class="h-sec">Las 11 secciones</h2><ol class="mapa">' + S.map(function (s) { return '<li><a href="#/' + s.id + '"><span class="n">' + s.n + '</span><b>' + s.t + '</b><span>' + s.x + '</span></a></li>'; }).join('') + '</ol>' +
      navega(idx) + '</div></section>';
  }

  function pedir(idx, sub) {
    var s = S[idx];
    sub = SUBS.some(function (x) { return x.id === sub; }) ? sub : 'idea';
    var panel = sub === 'descargar'
      ? '<div class="descarga"><p class="lead">Esta sección, para guardarla o imprimirla.</p><div class="descarga__btns"><span class="btn" aria-disabled="true">PDF de «Pedir bien»</span><span class="btn btn--claro" aria-disabled="true">Chuleta de prompts (1 página)</span></div><p class="nota">En el prototipo los botones no descargan todavía: los PDF se generan al montar la versión final.</p></div>'
      : E.pedir[sub]();
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' +
      '<header class="cabecera"><div class="cabecera__texto entra"><p class="kicker">' + s.n + ' · Sección</p><h1 id="t-' + s.id + '">' + s.t + '</h1><p>' + s.x + '</p></div>' +
      '<figure class="cabecera__img entra-img"><img src="' + E.base + 'img/pedir-bien.webp" alt="Una persona dicta un mensaje de voz al móvil junto a su portátil" width="1800" height="1018"></figure></header>' +
      '<nav class="subpestanas" aria-label="Partes de la sección">' + SUBS.map(function (x) { return '<a href="#/' + s.id + '/' + x.id + '"' + (x.id === sub ? ' aria-current="page"' : '') + '>' + x.t + '</a>'; }).join('') + '</nav>' +
      '<div class="escena__cuerpo panel entra" data-sub="' + sub + '">' + panel + '</div>' +
      '<div class="escena__cuerpo">' + navega(idx) + '</div></section>';
  }

  function pendiente(idx) {
    var s = S[idx];
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' +
      '<header class="cabecera cabecera--sola"><div class="cabecera__texto entra"><p class="kicker">' + s.n + ' · Sección</p><h1 id="t-' + s.id + '">' + s.t + '</h1><p>' + s.x + '</p>' +
      '<p class="nota">En los prototipos solo están completas «Inicio» y «Pedir bien». El resto se monta cuando elijas el formato.</p>' +
      '<div class="portada__cta"><a class="btn" href="#/pedir-bien">Ver «Pedir bien»</a></div></div>' +
      '<div class="cabecera__marca" aria-hidden="true"><span>' + s.n + '</span></div></header>' +
      '<div class="escena__cuerpo">' + navega(idx) + '</div></section>';
  }

  function descargas() {
    return '<section class="escena" aria-labelledby="t-desc"><header class="cabecera cabecera--sola"><div class="cabecera__texto entra"><p class="kicker">Descargas</p><h1 id="t-desc">Llévatelo</h1><p>El resumen completo en PDF y en Word, un PDF por sección y la chuleta de prompts.</p><p class="nota">En el prototipo todavía no hay archivos.</p></div></header></section>';
  }

  function pinta() {
    var h = (location.hash || '#/inicio').replace(/^#\/?/, '').split('/');
    var id = h[0] || 'inicio', sub = h[1];
    var idx = S.findIndex(function (s) { return s.id === id; });
    var html;
    if (id === 'descargas') { html = descargas(); idx = -1; }
    else { if (idx < 0) idx = 0; var s = S[idx]; html = s.id === 'inicio' ? inicio(idx) : s.id === 'pedir-bien' ? pedir(idx, sub) : pendiente(idx); }
    var mismaSeccion = main.dataset.id === (idx >= 0 ? S[idx].id : id);
    main.innerHTML = html; main.dataset.id = idx >= 0 ? S[idx].id : id;
    E.activar(main);
    lista.querySelectorAll('a').forEach(function (a) { if (a.dataset.id === main.dataset.id) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: E.reduce ? 'auto' : 'smooth' }); } else a.removeAttribute('aria-current'); });
    document.querySelector('.barra__progreso i').style.transform = 'scaleX(' + ((idx + 1) / S.length) + ')';
    document.title = (idx >= 0 ? S[idx].t + ' · ' : '') + 'Formación Claude · Prototipo A';
    if (!mismaSeccion) { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
    else { var p = main.querySelector('.subpestanas'); if (p && p.getBoundingClientRect().top < 0) p.scrollIntoView({ block: 'start' }); }
  }
  window.addEventListener('hashchange', pinta);
  pinta();
})();
