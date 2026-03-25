const translations = {
    pt: {
        "hero-title": "Venda, Reforma e Manutenção de Equipamentos Gastronômicos",
        "hero-desc": "Especialistas em São Paulo. Soluções completas para padarias, restaurantes e açougues. Qualidade e rapidez para o seu negócio não parar.",
        "btn-contact": "Solicite um Orçamento (WhatsApp)",
        "services-title": "Nossas Especialidades",
        "services-subtitle": "Trabalhamos com conserto, reforma completa e venda dos seguintes equipamentos:",
        "eq-1": "Amassadeiras e Cilindros",
        "eq-2": "Modeladoras de Pão",
        "eq-3": "Fornos Industriais",
        "eq-4": "Batedeiras Planetárias",
        "eq-5": "Moedores de Carne",
        "eq-6": "Fatiadores de Frios",
        "location-title": "Onde Estamos",
        "location-desc": "Venha conhecer nossa oficina ou agende uma visita técnica. Atendemos toda a região metropolitana de São Paulo.",
        "loc-address-label": "Endereço:",
        "loc-hours-label": "Horário:",
        "loc-hours-text": "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00",
        "loc-phone-label": "Contato:",
        "footer-text": "© 2026 Arevalo Manutenção - São Paulo, SP. Todos os direitos reservados."
    },
    es: {
        "hero-title": "Venta, Restauración y Mantenimiento de Equipamiento Gastronómico",
        "hero-desc": "Especialistas en São Paulo. Soluciones completas para panaderías, restaurantes y carnicerías. Calidad y rapidez para que tu negocio no se detenga.",
        "btn-contact": "Solicita un Presupuesto (WhatsApp)",
        "services-title": "Nuestras Especialidades",
        "services-subtitle": "Trabajamos con reparación, restauración completa y venta de los siguientes equipos:",
        "eq-1": "Amasadoras y Cilindros",
        "eq-2": "Modeladoras de Pan",
        "eq-3": "Hornos Industriales",
        "eq-4": "Batidoras Planetarias",
        "eq-5": "Molinos de Carne",
        "eq-6": "Cortadoras de Fiambre",
        "location-title": "Dónde Estamos",
        "location-desc": "Ven a conocer nuestro taller o programa una visita técnica. Atendemos toda la región metropolitana de São Paulo.",
        "loc-address-label": "Dirección:",
        "loc-hours-label": "Horario:",
        "loc-hours-text": "Lunes a Viernes: 08:00 a 18:00 | Sábado: 08:00 a 12:00",
        "loc-phone-label": "Contacto:",
        "footer-text": "© 2026 Arevalo Manutenção - São Paulo, SP. Todos los derechos reservados."
    }
};

function changeLanguage(lang) {
    for (let key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = translations[lang][key];
        }
    }
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es';
}