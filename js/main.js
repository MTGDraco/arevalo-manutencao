const translations = {
    pt: {
        nav_home: "Início",
        nav_services: "Serviços",
        nav_products: "Produtos",
        nav_contact: "Contato",

        hero_title: "Venda, Reforma e Manutenção de Equipamentos Gastronômicos",
        hero_desc: "Especialistas em São Paulo. Soluções completas para padarias, restaurantes e açougues.",
        hero_btn: "Solicite um Orçamento no WhatsApp",

        services_title: "Nossas Especialidades",
        services_subtitle: "Trabalhamos com conserto, reforma completa e venda dos seguintes equipamentos:",

        location_title: "Onde Estamos",
        location_desc: "Venha conhecer nossa oficina ou agende uma visita técnica.",
        footer_text: "© 2026 Arevalo Manutenção - São Paulo, SP"
    },

    es: {
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_products: "Productos",
        nav_contact: "Contacto",

        hero_title: "Venta, Reparación y Mantenimiento de Equipos Gastronómicos",
        hero_desc: "Especialistas en São Paulo. Soluciones completas para panaderías y restaurantes.",
        hero_btn: "Solicita un Presupuesto por WhatsApp",

        services_title: "Nuestras Especialidades",
        services_subtitle: "Trabajamos con reparación, restauración y venta de equipos:",

        location_title: "Dónde Estamos",
        location_desc: "Visítanos o agenda una visita técnica.",
        footer_text: "© 2026 Arevalo Manutenção - São Paulo, SP"
    }
};

function changeLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es';
}

/* Cargar idioma guardado */
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    changeLanguage(savedLang);
});

/* MENU MOBILE */
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}