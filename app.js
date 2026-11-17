/* Plantilla común: encabezado, menú, pie y utilidades. No requiere edición. */
(function () {
  const E = window.EMPRESA;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  window.esc = esc;

  document.documentElement.style.setProperty('--primary', E.colorPrincipal);
  document.documentElement.style.setProperty('--accent', E.colorAcento);

  const header = `
    <header class="top">
      <div class="wrap top-in">
        <a class="logo" href="${esc(E.sitioWeb)}"><img src="${esc(E.logo)}" alt="${esc(E.nombre)}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='inline'"><strong style="display:none">${esc(E.nombre)}</strong></a>
        <button class="burger" aria-label="Menú" onclick="document.body.classList.toggle('menu-open')">☰</button>
        <nav>${E.menu.map(m => `<a href="${esc(m.url)}">${esc(m.texto)}</a>`).join('')}</nav>
      </div>
    </header>`;

  const c = E.contacto, r = E.redes || {};
  const redes = Object.entries(r).filter(([, u]) => u)
    .map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n[0].toUpperCase() + n.slice(1))}</a>`).join(' · ');
  const footer = `
    <footer class="foot">
      <div class="wrap foot-in">
        <div><h4>Contacto</h4>
          <p>${esc(c.direccion)}</p>
          <p><a href="tel:${esc(c.telefono.replace(/\s/g, ''))}">${esc(c.telefono)}</a>
          ${c.whatsapp ? ` · <a href="https://wa.me/${esc(c.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>` : ''}</p>
          <p><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p></div>
        ${redes ? `<div><h4>Síguenos</h4><p>${redes}</p></div>` : ''}
      </div>
      <div class="legal wrap">© ${new Date().getFullYear()} ${esc(E.razonSocial || E.nombre)}. Todos los derechos reservados.
        ${E.avisoPrivacidad ? ` · <a href="${esc(E.avisoPrivacidad)}" target="_blank" rel="noopener">Aviso de privacidad</a>` : ''}</div>
    </footer>`;

  document.getElementById('header').outerHTML = header;
  document.getElementById('footer').outerHTML = footer;

  window.api = async params => {
    const url = E.api + '?' + new URLSearchParams(params);
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  };
})();
