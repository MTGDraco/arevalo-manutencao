// 1. Diccionario Completo
const translations = {
    pt: {
        logo_sub: "Manutenção",
        nav_home: "Início",
        nav_services: "Serviços",
        nav_products: "Produtos",
        nav_gallery: "Estrutura",
        nav_contact: "Contato",
        
        hero_badge: "Especialistas Autorizados",
        hero_title: "Venda e Manutenção de Equipamentos Gastronômicos",
        hero_desc: "Soluções completas para padarias, restaurantes e açougues. Trabalhamos com as melhores marcas do mercado.",
        hero_btn: "Solicite um Orçamento",

        brands_title: "Trabalhamos com as melhores marcas:",
        
        services_title: "Nossas Especialidades",
        services_subtitle: "Assistência técnica ágil e de qualidade",
        srv_1: "Amassadeiras e Cilindros",
        srv_2: "Modeladoras de Pão",
        srv_3: "Fornos Industriais",
        srv_4: "Batedeiras Planetárias",
        srv_5: "Moedores e Fatiadores",

        prod_kicker: "Catálogo",
        prod_subtitle: "Equipamentos revisados, com garantia e prontos para uso",
        badge_top: "Mais Vendido",
        badge_new: "Novo",
        badge_delivery: "Entrega Imediata",
        prod_1_title: "Amassadeira Rápida 15kg",
        prod_1_desc: "Alta performance para produção de massas pesadas. Totalmente revisada.",
        prod_2_title: "Forno Turbo a Gás",
        prod_2_desc: "Controle preciso de temperatura. Ideal para pão francês e confeitaria.",
        prod_3_title: "Batedeira Planetária 12L",
        prod_3_desc: "Perfeita para massas leves, bolos e glacês. Motor de alta durabilidade.",
        btn_consult: "Consultar Valor",

        gallery_title: "Equipamentos Reparados",
        gallery_subtitle: "Trabalhos reais realizados em nossa oficina",

        location_title: "Visite Nossa Oficina",
        location_desc: "Traga seu equipamento ou agende uma visita técnica em seu estabelecimento.",
        loc_address_title: "Endereço",
        loc_hours_title: "Horário",
        loc_hours: "Seg a Sex: 08:00 - 18:00",
        loc_contact_title: "Contato",

        wa_float: "WhatsApp",
        footer_text: "© 2026 Arevalo Manutenção. Representante autorizado multimarcas em São Paulo."
    },

    es: {
        logo_sub: "Mantenimiento",
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_products: "Productos",
        nav_gallery: "Instalaciones",
        nav_contact: "Contacto",
        
        hero_badge: "Especialistas Autorizados",
        hero_title: "Venta y Mantenimiento de Equipos Gastronómicos",
        hero_desc: "Soluciones completas para panaderías, restaurantes y carnicerías. Trabajamos con las mejores marcas.",
        hero_btn: "Solicita tu Presupuesto",

        brands_title: "Trabajamos con las mejores marcas:",
        
        services_title: "Nuestras Especialidades",
        services_subtitle: "Servicio técnico ágil y de calidad",
        srv_1: "Amasadoras y Cilindros",
        srv_2: "Moldeadoras de Pan",
        srv_3: "Hornos Industriales",
        srv_4: "Batidoras Planetarias",
        srv_5: "Picadoras y Cortadoras",

        prod_kicker: "Catálogo",
        prod_subtitle: "Equipos revisados, con garantía y listos para usar",
        badge_top: "Más Vendido",
        badge_new: "Nuevo",
        badge_delivery: "Entrega Inmediata",
        prod_1_title: "Amasadora Rápida 15kg",
        prod_1_desc: "Alto rendimiento para masas pesadas. Totalmente revisada.",
        prod_2_title: "Horno Turbo a Gas",
        prod_2_desc: "Control preciso de temperatura. Ideal para pan francés y repostería.",
        prod_3_title: "Batidora Planetaria 12L",
        prod_3_desc: "Perfecta para masas ligeras y pastelería. Motor de alta durabilidad.",
        btn_consult: "Consultar Precio",

        gallery_title: "Equipos Reparados",
        gallery_subtitle: "Trabajos reales realizados en nuestro taller",

        location_title: "Visita Nuestro Taller",
        location_desc: "Trae tu equipo o programa una visita técnica en tu establecimiento.",
        loc_address_title: "Dirección",
        loc_hours_title: "Horario",
        loc_hours: "Lun a Vie: 08:00 - 18:00",
        loc_contact_title: "Contacto",

        wa_float: "WhatsApp",
        footer_text: "© 2026 Arevalo Mantenimiento. Representante autorizado multimarca en São Paulo."
    }
};

function changeLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es-ES';
}

// ================= MENU MOBILE =================
const navLinks = document.getElementById("navLinks");

function toggleMenu() {
    navLinks.classList.toggle("active");
}

// cerrar al hacer click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================= SCROLL REVEAL PRO =================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ================= SCROLL PROGRESS =================
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;

    document.body.style.setProperty("--scroll", progress);
});

// ================= PARALLAX HERO (SUAVE) =================
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    let offset = window.scrollY * 0.3;
    hero.style.backgroundPosition = `center ${offset}px`;
});

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    changeLanguage(savedLang);
});