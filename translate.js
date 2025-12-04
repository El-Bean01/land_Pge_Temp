const translations = {
  "Hey, I'm Elvin": "Hola, soy Elvin",
  "I build clean websites, fix tech problems, and create simple automations that make life easier.": "Construyo sitios web limpios, arreglo problemas técnicos y creo automatizaciones simples que facilitan la vida.",
  "Project Screenshots": "Capturas de Proyecto",
  "Services Offered": "Servicios Ofrecidos",
  "Local Tech Setup & Support": "Soporte y Configuración Tecnológica Local",
  "Contact Me": "Contáctame",
  "Fill out the form below and I'll reach out ASAP.": "Llena el formulario a continuación y me comunicaré contigo lo antes posible.",
  "Send Message": "Enviar Mensaje",
    "Fix My Website": "Arregla Mi Sitio Web",
    "Fast fixes for small website issues — broken buttons, layout problems, mobile bugs, contact form errors, formatting fixes, or slow pages.": "Soluciones rápidas para pequeños problemas del sitio web: botones rotos, problemas de diseño, errores móviles, errores en formularios de contacto, correcciones de formato o páginas lentas.",    
    "One-Page Startup Website": "Sitio Web de Una Página para Startups",
    "A clean, modern landing page for your business. Includes a mobile-friendly layout, About section, service or product area, contact/booking section, clean styling.": "Una página de aterrizaje limpia y moderna para tu negocio. Incluye un diseño adaptable a móviles, sección Acerca de, área de servicios o productos, sección de contacto/reservas y un estilo limpio."
    
};

const toggle = document.getElementById("langToggle");

toggle.addEventListener("change", () => {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (toggle.checked && translations[key]) {
      el.textContent = translations[key]; // Spanish
    } else {
      el.textContent = key; // Original text
    }
  });
});

