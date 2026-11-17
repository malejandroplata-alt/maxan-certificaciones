/* =========================================================
   CONFIGURACIÓN DE LA EMPRESA – MAXAN Soluciones
   ========================================================= */
window.EMPRESA = {
  nombre: 'MAXAN Soluciones',
  razonSocial: 'MAXAN Soluciones, S.A. de C.V.',
  logo: '/logo.png',                 // logo MAXAN Soluciones
  colorPrincipal: '#1c680c',         // verde oscuro del logo MAXAN
  colorAcento: '#6fb52c',            // verde claro del logo MAXAN
  sitioWeb: '/',                     // si MAXAN tiene página web, pon aquí su dirección

  // App web de Apps Script (ya publicada y revisada)
  api: 'https://script.google.com/macros/s/AKfycby2Yzrsg8C02OQ8r_CU5bBK5lMU3NyD1_POdnhFSZ0Kkpy7OiHGurPooSMxEjBr3j5_/exec',

  menu: [
    { texto: 'Verificar certificado', url: '/' },
    { texto: 'WhatsApp', url: 'https://wa.me/527225316290' },
    { texto: 'Contacto', url: 'mailto:informes@maxansoluciones.com' }
  ],

  contacto: {
    direccion: 'Ex Hacienda Barbabosa 100-A, Col. San Miguel Zinacantepec, C.P. 51357, Estado de México',
    telefono: '+52 722 531 6290',
    whatsapp: '527225316290',
    email: 'informes@maxansoluciones.com'
  },
  avisoPrivacidad: '/aviso-privacidad.html',

  redes: {                            // agrega las que tenga MAXAN
    facebook: '', linkedin: '', instagram: '', youtube: ''
  }
};
