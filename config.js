/* =========================================================
   CONFIGURACIÓN DE LA EMPRESA – Aantahus Servicios Corporativos
   ========================================================= */
window.EMPRESA = {
  nombre: 'Aantahus Servicios Corporativos',
  logo: '/logo.png',                 // pon el logo de Aantahus en la carpeta "sitio" con este nombre
  colorPrincipal: '#0b2a5b',         // PENDIENTE: ajustar a los colores del logo de Aantahus
  colorAcento: '#f28c1b',
  sitioWeb: '/',                     // si Aantahus tiene página web, pon aquí su dirección

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

  redes: {                            // agrega las que tenga Aantahus
    facebook: '', linkedin: '', instagram: '', youtube: ''
  }
};
