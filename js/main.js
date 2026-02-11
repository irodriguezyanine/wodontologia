(function () {
  'use strict';

  // Menú móvil
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  var headerCta = document.querySelector('.header-cta');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      if (headerCta) headerCta.classList.toggle('is-visible', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
        if (headerCta) headerCta.classList.remove('is-visible');
        document.body.style.overflow = '';
      });
    });
  }

  // Header con scroll (opcional: añadir sombra al bajar)
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Formulario de contacto: redirigir a WhatsApp con el mensaje o mostrar aviso
  var form = document.getElementById('form-contacto');
  var whatsappBase = 'https://wa.me/56994779049';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = (document.getElementById('nombre') && document.getElementById('nombre').value) || '';
      var telefono = (document.getElementById('telefono') && document.getElementById('telefono').value) || '';
      var mensaje = (document.getElementById('mensaje') && document.getElementById('mensaje').value) || '';
      var texto = 'Hola, soy ' + encodeURIComponent(nombre) + '. ';
      if (telefono) texto += 'Mi teléfono: ' + encodeURIComponent(telefono) + '. ';
      if (mensaje) texto += encodeURIComponent(mensaje);
      if (!texto.trim() || texto === 'Hola, soy . ') texto = 'Hola, me gustaría agendar una hora o hacer una consulta.';
      window.open(whatsappBase + '?text=' + texto, '_blank', 'noopener');
      form.reset();
    });
  }
})();
