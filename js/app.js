/* ==========================================================================
   MODO SHOP · Sitio público
   Catálogo, filtros, WhatsApp y modal de producto.
   No necesita servidor: funciona abriendo index.html.
   ========================================================================== */

(function () {
  'use strict';

  var CFG  = MODOSHOP.config;
  var TODO = MODOSHOP.productos.filter(function (p) { return !p.oculto; });

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Escapa texto que se inserta como HTML (nombres con &, comillas, etc.) */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------------------------------------------------------------- WhatsApp */

  function waLink(texto) {
    return 'https://wa.me/' + CFG.whatsapp + '?text=' + encodeURIComponent(texto);
  }

  function initWhatsApp() {
    $$('.js-wa-general').forEach(function (a) { a.href = waLink(CFG.mensajeGeneral); });
    $$('.js-wa-mayorista').forEach(function (a) { a.href = waLink(CFG.mensajeMayorista); });

    var num = $('#waNumero');       if (num) num.textContent = CFG.whatsappVisible;
    var ciu = $('#ciudad');         if (ciu) ciu.textContent = CFG.ciudad;
    var env = $('#datoEnvios');     if (env) env.textContent = CFG.envios;
  }

  /* Puntos de entrega en San Juan, tomados de la config */
  function initPuntos() {
    var ul = $('#puntosEntrega');
    if (!ul) return;
    ul.innerHTML = (CFG.puntosEntrega || []).map(function (p) {
      return '<li>' + p + '</li>';
    }).join('');
  }

  function initInstagram() {
    var btn = $('#btnIg');
    if (!btn) return;

    var user = (CFG.instagram || '').replace(/^@/, '').trim();
    if (user) {
      btn.href = 'https://instagram.com/' + user;
      btn.innerHTML = '<span class="ico-ig" aria-hidden="true"></span> @' + user;
    } else {
      btn.classList.add('is-off');
      btn.removeAttribute('href');
      btn.removeAttribute('target');
      btn.setAttribute('aria-disabled', 'true');
      btn.innerHTML = '<span class="ico-ig" aria-hidden="true"></span> Instagram · próximamente';
    }
  }

  /* ------------------------------------------------------------------ Stock */

  /* stock null  -> no definido (relojes): "consultar disponibilidad"
     stock 0     -> agotado
     stock 1     -> última unidad
     stock 2-3   -> pocas unidades
     stock 4+    -> disponible                                          */
  function estadoStock(p) {
    if (p.stock === null || p.stock === undefined) {
      return { clave: 'consultar', badge: 'A pedido', clase: 'badge-off',
               texto: 'Disponibilidad a confirmar por WhatsApp', s: 's-off' };
    }
    if (p.stock <= 0) {
      return { clave: 'agotado', badge: 'Agotado', clase: 'badge-off',
               texto: 'Sin stock por el momento', s: 's-off' };
    }
    if (p.stock === 1) {
      return { clave: 'ultima', badge: 'Última unidad', clase: 'badge-ultima',
               texto: 'Queda 1 unidad', s: 's-ultima' };
    }
    if (p.stock <= 3) {
      return { clave: 'poco', badge: 'Últimas ' + p.stock, clase: 'badge-poco',
               texto: 'Quedan ' + p.stock + ' unidades', s: 's-poco' };
    }
    return { clave: 'ok', badge: 'Disponible', clase: 'badge-ok',
             texto: p.stock + ' unidades disponibles', s: 's-ok' };
  }

  function textoPrecio(p) {
    if (typeof p.precio === 'number' && p.precio > 0) {
      return '$' + p.precio.toLocaleString('es-AR');
    }
    return 'Consultar precio';
  }

  /* ------------------------------------------------------------------ Cards */

  function crearCard(p) {
    var st = estadoStock(p);

    var card = document.createElement('article');
    card.className = 'card' + (st.clave === 'agotado' ? ' is-off' : '');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', p.nombre + ' — ver detalle');
    card.dataset.id = p.id;

    card.innerHTML =
      '<div class="card-img">' +
        '<span class="card-badge ' + st.clase + '">' + st.badge + '</span>' +
        '<img src="' + esc(p.img) + '" alt="' + esc(p.nombre) + '" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-marca">' + esc(p.marca) + '</span>' +
        '<h3 class="card-nom">' + esc(p.nombre) + '</h3>' +
        '<span class="card-meta">' + esc(p.presentacion) + (p.genero ? ' · ' + esc(p.genero) : '') + '</span>' +
        (p.dupe
          ? '<span class="card-dupe"><i aria-hidden="true"></i>' +
            esc(CFG.etiquetaDupe) + ' <b>' + esc(p.dupe) + '</b></span>'
          : p.original
            ? '<span class="card-dupe is-og"><i aria-hidden="true"></i>' +
              '<b>Creación propia de ' + esc(p.marca) + '</b></span>'
            : '') +
        '<div class="card-foot">' +
          '<span class="card-precio">' + textoPrecio(p) + '</span>' +
          '<a class="card-btn" href="' + waLink(CFG.mensajeProducto(p)) + '" target="_blank" rel="noopener">' +
            '<span class="ico-wa" aria-hidden="true"></span> Consultar' +
          '</a>' +
        '</div>' +
      '</div>';

    /* Si falla la imagen, dejamos un fondo con la inicial de la marca */
    var img = card.querySelector('.card-img img');
    img.addEventListener('error', function () {
      img.style.display = 'none';
      var ph = document.createElement('span');
      ph.textContent = p.marca.charAt(0);
      ph.style.cssText = 'font-size:64px;font-weight:800;color:#22303F;letter-spacing:-.04em';
      img.parentNode.appendChild(ph);
    });

    /* El botón de WhatsApp no debe abrir el modal */
    card.querySelector('.card-btn').addEventListener('click', function (e) { e.stopPropagation(); });

    card.addEventListener('click', function () { abrirModal(p); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(p); }
    });

    return card;
  }

  /* ------------------------------------------------------------------ Modal */

  var modal    = $('#modal');
  var ultimoFoco = null;

  function abrirModal(p) {
    var st = estadoStock(p);
    ultimoFoco = document.activeElement;

    $('#mImg').src = p.img;
    $('#mImg').alt = p.nombre;
    $('#mMarca').textContent  = p.marca;
    $('#mTitulo').textContent = p.nombre;
    $('#mDesc').textContent   = p.desc || '';

    var tags = [p.presentacion, p.genero, p.familia].filter(Boolean);
    $('#mTags').innerHTML = tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');

    var dupeEl = $('#mDupe');
    dupeEl.hidden = !(p.dupe || p.original);
    dupeEl.classList.toggle('is-og', !p.dupe && !!p.original);
    if (p.dupe) {
      dupeEl.innerHTML = '<span class="dupe-lbl">' + esc(CFG.etiquetaDupe) + '</span>' +
                         '<b>' + esc(p.dupe) + '</b>';
    } else if (p.original) {
      dupeEl.innerHTML = '<span class="dupe-lbl">Original</span>' +
                         '<b>Creación propia de ' + esc(p.marca) + '</b>';
    }

    var stEl = $('#mStock');
    stEl.className = 'modal-stock ' + st.s;
    stEl.textContent = st.texto;

    $('#mWa').href = waLink(CFG.mensajeProducto(p));

    modal.hidden = false;
    document.body.classList.add('is-locked');
    $('.modal-x').focus();
  }

  function cerrarModal() {
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (ultimoFoco) ultimoFoco.focus();
  }

  $$('[data-close]').forEach(function (el) { el.addEventListener('click', cerrarModal); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) cerrarModal();
  });

  /* --------------------------------------------------------------- Filtrado */

  var estado = { cat: 'todos', marca: 'todas', q: '', orden: 'destacado' };

  function normalizar(s) {
    return (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function filtrar() {
    var q = normalizar(estado.q);

    var lista = TODO.filter(function (p) {
      if (estado.cat !== 'todos' && p.categoria !== estado.cat) return false;
      if (estado.marca !== 'todas' && p.marca !== estado.marca) return false;
      if (!q) return true;
      /* Busca también por el perfume que imita y por las notas de la
         descripción: el cliente escribe "Aventus" o "vainilla". */
      var indice = [p.nombre, p.marca, p.familia, p.genero, p.dupe, p.desc].join(' ');
      return normalizar(indice).indexOf(q) >= 0;
    });

    var val = function (p) { return (p.stock === null || p.stock === undefined) ? 99 : p.stock; };

    if (estado.orden === 'az') {
      lista.sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
    } else if (estado.orden === 'stock') {
      lista.sort(function (a, b) { return val(b) - val(a); });
    } else if (estado.orden === 'ultimas') {
      lista.sort(function (a, b) { return val(a) - val(b); });
    } else {
      lista.sort(function (a, b) {
        var d = (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0);
        if (d) return d;
        if (a.categoria !== b.categoria) return a.categoria === 'perfume' ? -1 : 1;
        return val(b) - val(a);
      });
    }

    return lista;
  }

  function pintar() {
    var lista = filtrar();
    var grid  = $('#grid');

    grid.innerHTML = '';
    lista.forEach(function (p) { grid.appendChild(crearCard(p)); });

    $('#vacio').hidden = lista.length > 0;
    grid.hidden = lista.length === 0;

    var unidades = lista.reduce(function (a, p) { return a + (p.stock || 0); }, 0);
    $('#resultado').textContent =
      lista.length === 0
        ? ''
        : lista.length + (lista.length === 1 ? ' producto' : ' productos') +
          (unidades ? ' · ' + unidades + ' unidades en stock' : '');
  }

  /* ---------------------------------------------------------------- Filtros */

  function initMarcas() {
    var cont = $('#chipsMarca');

    function pintarChips() {
      var base = TODO.filter(function (p) {
        return estado.cat === 'todos' || p.categoria === estado.cat;
      });
      var marcas = [];
      base.forEach(function (p) { if (marcas.indexOf(p.marca) < 0) marcas.push(p.marca); });
      marcas.sort(function (a, b) { return a.localeCompare(b, 'es'); });

      if (estado.marca !== 'todas' && marcas.indexOf(estado.marca) < 0) estado.marca = 'todas';

      cont.innerHTML = '';
      ['todas'].concat(marcas).forEach(function (m) {
        var b = document.createElement('button');
        b.className = 'chip' + (estado.marca === m ? ' is-on' : '');
        b.textContent = m === 'todas' ? 'Todas las marcas' : m;
        b.addEventListener('click', function () {
          estado.marca = m;
          pintarChips();
          pintar();
        });
        cont.appendChild(b);
      });
    }

    pintarChips();
    return pintarChips;
  }

  var repintarChips;

  function activarTab(cat) {
    $$('#tabs .tab').forEach(function (t) {
      t.classList.toggle('is-on', t.dataset.cat === cat);
    });
    estado.cat = cat;
    if (repintarChips) repintarChips();
    pintar();
  }

  function initTabs() {
    $$('#tabs .tab').forEach(function (tab) {
      tab.addEventListener('click', function () { activarTab(tab.dataset.cat); });
    });

    /* "Perfumes" / "Relojes" del menú abren el catálogo ya filtrado */
    $$('#hdNav a[data-cat]').forEach(function (a) {
      a.addEventListener('click', function () { activarTab(a.dataset.cat); });
    });
  }

  function initBusqueda() {
    var input = $('#q');
    var t;
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { estado.q = input.value; pintar(); }, 140);
    });

    $('#orden').addEventListener('change', function (e) {
      estado.orden = e.target.value;
      pintar();
    });
  }

  /* ------------------------------------------------------------ Destacados */

  function initDestacados() {
    var rail = $('#railDestacados');
    var dest = TODO.filter(function (p) { return p.destacado && p.stock !== 0; }).slice(0, 14);
    dest.forEach(function (p) { rail.appendChild(crearCard(p)); });
  }

  /* ---------------------------------------------------------------- Números */

  function initStats() {
    var unidades = TODO.reduce(function (a, p) { return a + (p.stock || 0); }, 0);
    var marcas = [];
    TODO.forEach(function (p) { if (marcas.indexOf(p.marca) < 0) marcas.push(p.marca); });

    animar($('#statModelos'), TODO.length);
    animar($('#statUnidades'), unidades);
    animar($('#statMarcas'), marcas.length);
  }

  function animar(el, hasta) {
    if (!el) return;

    /* El valor final se escribe siempre: si la animación no llega a
       ejecutarse (pestaña en segundo plano, rAF pausado), el número igual
       queda bien. La animación sólo lo "sube" desde 0. */
    el.textContent = hasta;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ini = performance.now(), dur = 1100;
    function paso(t) {
      var k = Math.min((t - ini) / dur, 1);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(hasta * e);
      if (k < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }

  /* ------------------------------------------------------------------- Nav */

  function initNav() {
    var hd     = $('#hd');
    var burger = $('#hdBurger');
    var nav    = $('#hdNav');

    var onScroll = function () { hd.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    burger.addEventListener('click', function () {
      var abierto = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    $$('#hdNav a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------------- Reveal */

  function initReveal() {
    var objetivos = $$('.sec-head, .trust-it, .paso, .envio-card, .mayorista, .cta-card');
    if (!('IntersectionObserver' in window)) return;

    objetivos.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    objetivos.forEach(function (el) { io.observe(el); });
  }

  /* --------------------------------------------------------------- Arranque */

  document.addEventListener('DOMContentLoaded', function () {
    $('#anio').textContent = new Date().getFullYear();

    initWhatsApp();
    initInstagram();
    initPuntos();
    initNav();
    initDestacados();
    repintarChips = initMarcas();
    initTabs();
    initBusqueda();
    pintar();
    initStats();
    initReveal();
  });

})();
