import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Dynamic translations map for high-level premium PT/EN copy
const translations = {
  pt: {
    // Navigation
    nav_home: "Início",
    nav_about: "Sobre Nós",
    nav_services: "Serviços",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    // Hero Section
    hero_greeting: "DORNS TECH SOLUTIONS — ENGENHARIA DE SOFTWARE",
    hero_subtitle: "Criando Software de Alta Performance",
    hero_type_1: "Sistemas Web robustos e escaláveis",
    hero_type_2: "APIs integradas e de alta velocidade",
    hero_type_3: "Landing Pages premium com foco em vendas",
    hero_type_4: "Soluções completas de E-commerce e CMS",
    hero_desc: "Desenvolvemos arquiteturas digitais robustas, seguras e otimizadas para escala. Somos especialistas em React, Next.js, Node.js, NestJS e integrações complexas de APIs, CMS, SEO e rastreamento avançado.",
    hero_cta_contact: "Fale Conosco",
    hero_cta_services: "Nossos Serviços",
    hero_card_title: "Tecnologia de Ponta",
    hero_card_desc: "Desenvolvimento sob medida focando na velocidade de carregamento, SEO e taxas de conversão elevadas.",
    hero_stat_projects: "Projetos Entregues",
    hero_stat_delivery: "Taxa de Sucesso",

    // About Section
    about_title: "Sobre Nós",
    about_subtitle: "Conectando Engenharia de Software Avançada a Resultados Reais",
    about_graphic_desc: "Seu parceiro de engenharia para criar, escalar e otimizar aplicações web prontas para produção.",
    about_badge_1_title: "Alta Performance",
    about_badge_1_desc: "Código otimizado e limpo",
    about_badge_2_title: "Segurança Máxima",
    about_badge_2_desc: "APIs robustas e criptografia",
    about_heading: "Quem Somos?",
    about_desc_1: "A Dorns Tech Solutions nasceu com a missão de elevar o padrão técnico de projetos na web. Criamos sistemas que unem um design estonteante, interatividade fluida e arquiteturas de backend resilientes e rápidas.",
    about_desc_2: "Seja para estruturar o e-commerce de alta conversão da sua marca, integrar rastreamento profissional avançado (Meta Pixel/GTM), criar APIs escaláveis seguras ou otimizar seu SEO orgânico de forma técnica, nossa equipe entrega soluções excepcionais prontas para o mercado.",
    about_value_1_title: "Inovação Técnica",
    about_value_1_desc: "Uso das tecnologias mais eficientes do mercado.",
    about_value_2_title: "Parceria Transparente",
    about_value_2_desc: "Entregas constantes e comunicação aberta.",
    stat_projects_delivered: "Projetos Entregues",
    stat_satisfaction: "Satisfação do Cliente",
    stat_api_speed: "Velocidade das APIs",
    stat_support: "Suporte Dedicado",

    // Services Section
    services_title: "Nossas Especialidades",
    services_subtitle: "Soluções completas desenhadas especificamente para o crescimento do seu negócio",
    service_web_title: "Sistemas Web sob Medida",
    service_web_desc: "Aplicações dinâmicas e interativas desenvolvidas com React, Next.js e TypeScript, focando em usabilidade e carregamento instantâneo.",
    service_api_title: "APIs & Bancos de Dados",
    service_api_desc: "Arquiteturas robustas e seguras de backend com Node.js e NestJS, utilizando modelagem PostgreSQL e Prisma ORM.",
    service_ecommerce_title: "E-Commerce & CMS Premium",
    service_ecommerce_desc: "Estruturação profissional no Shopify (Liquid HTML) e WordPress (Elementor), com design focado em conversão e velocidade.",
    service_seo_title: "Rastreamento & SEO Avançado",
    service_seo_desc: "Instalação profissional do Meta Pixel, Google Tag Manager, analytics avançados e otimização técnica de performance de SEO.",
    service_cloud_title: "DevOps & Cloudflare",
    service_cloud_desc: "Pipelines automatizados de CI/CD (GitHub Actions) e proteção/aceleração de DNS inteligente via Cloudflare.",
    service_ai_title: "Automação & IA",
    service_ai_desc: "Integração de inteligência artificial (APIs do Claude/GPT) para otimização de fluxos de trabalho e produtividade corporativa.",

    // Projects Section
    projects_title: "Portfólio de Sucesso",
    projects_subtitle: "Conheça alguns dos sistemas corporativos desenvolvidos por nossa equipe",
    project_velkryon_desc: "Plataforma VTT (Virtual Tabletop) para RPG de mesa online, integrando banco de dados PostgreSQL e sincronização em tempo real.",
    project_keys_desc: "E-commerce de jogos digitais robusto e otimizado com rotas NestJS e modelagem Prisma, escalado para milhares de acessos.",
    project_blocksmith_desc: "Editor modular de texto rico para Web focado em alta performance de renderização e cache IndexedDB offline.",
    project_attento_desc: "Website institucional otimizado para o setor de saúde do trabalho, com excelentes índices de velocidade e pontuação SEO.",
    project_canela_desc: "Website de alta performance para a cafeteria e empório Canela Café. Apresenta uma experiência premium com transições fluidas.",
    project_lepaiper_desc: "Sistema interno desenvolvido para o gerenciamento da Papelaria Lê Paiper, focado em otimizar os processos e fluxos do negócio.",
    project_etarp_desc: "Grupo Etarp — Do rótulo na linha de produção ao sistema que governa sua operação. Etiquetas, automação comercial, equipamentos e software sob medida.",
    project_soon_desc: "Dorns Tracking Hub — Centralização de rastreamento avançado (GTM/Meta Pixel) com roteamento inteligente de pixels em tempo real para múltiplos e-commerces.",
    project_cta_live: "Ver Projeto",
    project_cta_quote: "Solicitar Orçamento",

    // Contact Section
    contact_title: "Entre em Contato",
    contact_subtitle: "Tem um desafio de tecnologia? Nós temos a solução!",
    contact_desc: "Seja para criar um novo produto de software, otimizar sua estrutura de tracking e SEO ou migrar sistemas legados para React, nossa equipe está pronta para ajudar. Preencha o formulário e responderemos em até 24 horas.",
    contact_location_title: "Localização",
    form_name_label: "Seu Nome",
    form_name_placeholder: "Ex: Eduardo Rihedy",
    form_email_label: "Seu E-mail",
    form_email_placeholder: "Ex: dorns@exemplo.com",
    form_message_label: "Sua Mensagem",
    form_message_placeholder: "Escreva o que você precisa...",
    form_submit_btn: "Enviar Mensagem",
    toast_success_title: "Mensagem Enviada!",
    toast_success_desc: "Sua mensagem foi entregue à nossa equipe. Entraremos em contato em breve!",

    // Footer
    footer_rights: "Todos os direitos reservados.",
    footer_signature: "Dorns Tech Solutions — Engenharia de Software Especializada"
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",

    // Hero Section
    hero_greeting: "DORNS TECH SOLUTIONS — SOFTWARE ENGINEERING",
    hero_subtitle: "Creating High Performance Software",
    hero_type_1: "Robust and scalable Web Systems",
    hero_type_2: "Integrated and high-speed APIs",
    hero_type_3: "Premium Landing Pages focusing on sales",
    hero_type_4: "Complete E-commerce and CMS solutions",
    hero_desc: "We design robust, secure, and highly optimized digital architectures. We are specialists in React, Next.js, Node.js, NestJS, and complex integrations of APIs, CMS, SEO, and advanced tracking.",
    hero_cta_contact: "Get in Touch",
    hero_cta_services: "Our Services",
    hero_card_title: "Cutting-Edge Tech",
    hero_card_desc: "Tailored development focusing on loading speed, SEO optimization, and high conversion rates.",
    hero_stat_projects: "Projects Delivered",
    hero_stat_delivery: "Success Rate",

    // About Section
    about_title: "About Us",
    about_subtitle: "Connecting Advanced Software Engineering with Real Results",
    about_graphic_desc: "Your engineering partner to build, scale, and optimize production-ready web applications.",
    about_badge_1_title: "High Performance",
    about_badge_1_desc: "Clean and optimized code",
    about_badge_2_title: "Maximum Security",
    about_badge_2_desc: "Robust APIs & encryption",
    about_heading: "Who Are We?",
    about_desc_1: "Dorns Tech Solutions was founded with the mission to elevate the technical standard of web projects. We create systems that combine stunning designs, fluid interactivity, and fast, resilient backend architectures.",
    about_desc_2: "Whether designing your brand's high-converting e-commerce, integrating advanced professional analytics (Meta Pixel/GTM), crafting secure scalable APIs, or technically optimizing your organic SEO, our team delivers exceptional market-ready solutions.",
    about_value_1_title: "Technical Innovation",
    about_value_1_desc: "Using the market's most efficient technologies.",
    about_value_2_title: "Transparent Partnership",
    about_value_2_desc: "Constant deliveries and open communication.",
    stat_projects_delivered: "Projects Delivered",
    stat_satisfaction: "Client Satisfaction",
    stat_api_speed: "API Response Speed",
    stat_support: "Dedicated Support",

    // Services Section
    services_title: "Our Specialties",
    services_subtitle: "Complete solutions designed specifically for your business growth",
    service_web_title: "Tailored Web Systems",
    service_web_desc: "Dynamic and interactive web apps built with React, Next.js, and TypeScript, focusing on usability and instant loading times.",
    service_api_title: "APIs & Databases",
    service_api_desc: "Robust and secure backend architectures with Node.js and NestJS, featuring PostgreSQL modeling and Prisma ORM.",
    service_ecommerce_title: "Premium E-Commerce & CMS",
    service_ecommerce_desc: "Professional storefront setups in Shopify (Liquid HTML) and WordPress (Elementor), with a focus on speed and conversions.",
    service_seo_title: "Advanced Analytics & SEO",
    service_seo_desc: "Professional integration of Meta Pixel, Google Tag Manager, advanced analytics, and technical page-speed SEO.",
    service_cloud_title: "DevOps & Cloudflare",
    service_cloud_desc: "Automated CI/CD pipelines (GitHub Actions) and enterprise-grade smart DNS protection/acceleration via Cloudflare.",
    service_ai_title: "Automation & AI",
    service_ai_desc: "Artificial intelligence integrations (Claude/GPT APIs) to automate core business workflows and boost corporate productivity.",

    // Projects Section
    projects_title: "Success Portfolio",
    projects_subtitle: "Explore some of the enterprise systems built by our team",
    project_velkryon_desc: "A complete VTT (Virtual Tabletop) platform for online tabletop RPGs, integrating PostgreSQL and real-time synchronization.",
    project_keys_desc: "Scalable digital game e-commerce optimized with high-performance NestJS routes and Prisma models.",
    project_blocksmith_desc: "A modular rich-text editor for Web focusing on high rendering performance and offline IndexedDB caching.",
    project_attento_desc: "Institutional website optimized for occupational health, scoring high on web vitals and SEO performance.",
    project_canela_desc: "High-performance website for Canela Café and market, presenting a premium experience with fluid animations.",
    project_lepaiper_desc: "Internal management system developed for Lê Paiper Bookstore, focused on optimizing core business workflows.",
    project_etarp_desc: "Grupo Etarp — From production line labels to the system that governs your operations. Custom labels, commercial automation, hardware, and software.",
    project_soon_desc: "Dorns Tracking Hub — Centralized advanced tracking (GTM/Meta Pixel) with real-time smart pixel routing for multiple e-commerce platforms.",
    project_cta_live: "View Project",
    project_cta_quote: "Request Quote",

    // Contact Section
    contact_title: "Get In Touch",
    contact_subtitle: "Have a technical challenge? We have the solution!",
    contact_desc: "Whether launching a new software product, optimizing analytics and SEO, or migrating legacy systems to React, our team is ready to help. Fill out the form and we'll reply within 24 hours.",
    contact_location_title: "Location",
    form_name_label: "Your Name",
    form_name_placeholder: "e.g. Eduardo Rihedy",
    form_email_label: "Your Email",
    form_email_placeholder: "e.g. dorns@example.com",
    form_message_label: "Your Message",
    form_message_placeholder: "Write what you need...",
    form_submit_btn: "Send Message",
    toast_success_title: "Message Sent!",
    toast_success_desc: "Your message was delivered to our team. We will get in touch shortly!",

    // Footer
    footer_rights: "All rights reserved.",
    footer_signature: "Dorns Tech Solutions — Specialized Software Engineering"
  }
};

function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Set initial theme attribute in the html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Helper function to fetch translation text
  const t = (key: string): string => {
    const translationGroup = translations[lang];
    return (translationGroup as any)[key] || key;
  };

  return (
    <div className="app-container" style={{
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      minHeight: '100vh',
      transition: 'all 0.35s ease'
    }}>
      {/* HEADER NAVBAR */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        t={t} 
      />

      {/* BODY MAIN */}
      <main>
        {/* HERO HEADER */}
        <Hero t={t} />

        {/* ABOUT US */}
        <About t={t} />

        {/* SERVICES */}
        <Services t={t} />

        {/* PROJECTS PORTFOLIO */}
        <Projects t={t} />

        {/* CONTACT FORM */}
        <Contact t={t} />
      </main>

      {/* FOOTER */}
      <Footer t={t} />
    </div>
  );
}

export default App;
