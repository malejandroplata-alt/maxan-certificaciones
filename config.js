/* =========================================================
   CONFIGURACIÓN DE LA EMPRESA – MAXAN Soluciones
   ========================================================= */
window.EMPRESA = {
  nombre: 'MAXAN Soluciones',
  logo: '/logo.png',                 // logo MAXAN Soluciones
  colorPrincipal: '#1c680c',         // verde oscuro del logo MAXAN
  colorAcento: '#6fb52c',            // verde claro del logo MAXAN
  sitioWeb: '/',                     // si MAXAN tiene página web, pon aquí su dirección

  // App web de Apps Script (ya publicada y revisada)
  api: 'https://script.google.com/macros/s/AKfycby2Yzrsg8C02OQ8r_CU5bBK5lMU3NyD1_POdnhFSZ0Kkpy7OiHGurPooSMxEjBr3j5_/exec',

  menu: [
    { texto: 'Verificar certificado', url: '/' },
    { texto: 'WhatsApp', url: 'https://wa.me/527822104365' },
    { texto: 'Contacto', url: 'mailto:gerencia@newports.com.mx' }
  ],

  contacto: {
    direccion: 'Poza Rica, Veracruz, México',
    telefono: '+52 782 210 4365',
    whatsapp: '527822104365',
    email: 'gerencia@newports.com.mx'
  },
  avisoPrivacidad: '',               // PENDIENTE: liga al PDF del aviso de privacidad

  redes: {                            // agrega las que tenga MAXAN
    facebook: '', linkedin: '', instagram: '', youtube: ''
  }
};
