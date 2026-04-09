import React, { createContext, useContext, useReducer, ReactNode } from 'react';
interface Translations {
  navbar: {
    inicio: string;
    servicios: string;
    precios: string;
    contacto: string;
    contctanos: string;
    chatbot: string;
    'ia para whatsapp': string;
    'apps con whatsapp': string;
    omnicanalidad: string;
    'catálogos de productos': string;
    'mensajería masiva': string;
    'contact center': string;
    'consultoría de automatización': string;
    'asesoría en comunicación masiva': string;
    'sms masivos': string;
    'email masivos': string;
    'sms de voz masivos': string;
    'validación de correos': string;
    consultoría: string;
    'contactanos por whatsapp': string;
  };
  home: {
    'somos su puente de comunicación con el mundo': string;
    'servicios que impulsan tu negocio': string;
    'hablar con un asesor': string;
    'escribir por whatsapp': string;
    'nuestras soluciones': string;
    'explora nuestras soluciones': string;
    'chatbot description': string;
    'ia whatsapp description': string;
    'apps whatsapp description': string;
    'omnicanalidad description': string;
    'catalogos description': string;
    'mensajeria description': string;
    'contact center description': string;
    'automatizacion description': string;
    'asesoria description': string;
    'por qué elegirnos': string;
    'experiencia title': string;
    'experiencia description': string;
    'tecnologia title': string;
    'tecnologia description': string;
    'soporte title': string;
    'soporte description': string;
    'resultados title': string;
    'resultados description': string;
    'contactanos hoy': string;
    'desde 1993 conectando empresas': string;
    'años de experiencia': string;
    'clientes satisfechos': string;
    'soluciones digitales': string;
    'soluciones comunicacion digital': string;
    'servicio destacado': string;
    'consultoria whatsapp title': string;
    'consultoria whatsapp description': string;
    'ver consultoria': string;
    'agenda tu cita': string;
    'hablar por whatsapp': string;
    'our solutions': string;
    'services that boost your business': string;
    'services subtitle': string;
    'sobre nosotros': string;
    'about title': string;
    'about description': string;
    'about evolution': string;
    'about features': string[];
    'comience hoy': string;
    'su primera asesoría virtual': string;
    'nuestro equipo le diseñará': string;
    'enviar un correo': string;
    'automatización': string;
    'ia': string;
    'programación': string;
  };
  massivePricing: {
    'nuestros servicios masivos': string;
    'sms masivos title': string;
    'sms masivos description': string;
    'sms estandar': string;
    'sms doble via': string;
    'sms largo': string;
    'plataforma web': string;
    'programacion envios': string;
    'reportes entrega': string;
    'personalizacion mensajes': string;
    'api integracion': string;
    'email masivos title': string;
    'email masivos description': string;
    'editor plantillas': string;
    'personalizacion dinamica': string;
    'segmentacion avanzada': string;
    'ab testing': string;
    'metricas email': string;
    'automatizacion secuencias': string;
    'cumplimiento anti spam': string;
    'sms voz masivos title': string;
    'sms voz masivos description': string;
    'voz natural': string;
    'programacion voz': string;
    'reportes voz': string;
    'personalizacion voz': string;
    'api voz': string;
    'conoce mas': string;
  };
  layout: {
    'características principales': string;
    'beneficios para tu empresa': string;
    'listo para comenzar': string;
    'servicios relacionados': string;
    'volver al inicio': string;
    'descubre solucion': string;
    'contactanos hoy': string;
  };
  automatizacion: {
    'consultoría de marketing de automatización': string;
    'estrategia y acompañamiento experto': string;
    'tarifas de consultoría': string;
    'asesoría comercial': string;
    'asesoría técnica y comercial': string;
    'soporte operativo básico': string;
    'solicitar consultoría': string;
  };
  common: {
    'ver más': string;
    'solicitar': string;
    'contactar': string;
    'características': string;
    'beneficios': string;
    'precio': string;
    'planes': string;
    'inicio': string;
    'servicios': string;
    'contacto': string;
  };
  contact: {
    'conoce a alexander': string;
    'hola mucho gusto': string;
    'mi nombre es': string;
    'descripcion alexander': string;
    'reserva tu cita': string;
    'escribeme por whatsapp': string;
    'enviar correo': string;
    'agenda tu cita': string;
  };
  footer: {
    'descripcion footer': string;
    'envios masivos': string;
    'todos los derechos reservados': string;
  };
  services: {
    'chatbot title': string;
    'chatbot subtitle': string;
    'chatbot description': string;
    'chatbot feature 1 title': string;
    'chatbot feature 1 description': string;
    'chatbot feature 2 title': string;
    'chatbot feature 2 description': string;
    'chatbot feature 3 title': string;
    'chatbot feature 3 description': string;
    'chatbot feature 4 title': string;
    'chatbot feature 4 description': string;
    'chatbot feature 5 title': string;
    'chatbot feature 5 description': string;
    'chatbot feature 6 title': string;
    'chatbot feature 6 description': string;
    'chatbot cta': string;
    'request chatbot': string;
    'send email': string;
    'related services': string;
    'chatbot benefits': string[];
    'ia whatsapp title': string;
    'ia whatsapp subtitle': string;
    'ia whatsapp description': string;
    'ia whatsapp feature 1 title': string;
    'ia whatsapp feature 1 description': string;
    'ia whatsapp feature 2 title': string;
    'ia whatsapp feature 2 description': string;
    'ia whatsapp feature 3 title': string;
    'ia whatsapp feature 3 description': string;
    'ia whatsapp feature 4 title': string;
    'ia whatsapp feature 4 description': string;
    'ia whatsapp feature 5 title': string;
    'ia whatsapp feature 5 description': string;
    'ia whatsapp feature 6 title': string;
    'ia whatsapp feature 6 description': string;
    'ia whatsapp cta': string;
    'ia whatsapp benefits': string[];
    'apps whatsapp title': string;
    'apps whatsapp description': string;
    'apps whatsapp subtitle': string;
    'apps whatsapp feature 1 title': string;
    'apps whatsapp feature 1 description': string;
    'apps whatsapp feature 2 title': string;
    'apps whatsapp feature 2 description': string;
    'apps whatsapp feature 3 title': string;
    'apps whatsapp feature 3 description': string;
    'apps whatsapp feature 4 title': string;
    'apps whatsapp feature 4 description': string;
    'apps whatsapp feature 5 title': string;
    'apps whatsapp feature 5 description': string;
    'apps whatsapp feature 6 title': string;
    'apps whatsapp feature 6 description': string;
    'apps whatsapp cta': string;
    'apps whatsapp benefits': string[];
    'omnicanalidad title': string;
    'omnicanalidad subtitle': string;
    'omnicanalidad description': string;
    'omnicanalidad feature 1 title': string;
    'omnicanalidad feature 1 description': string;
    'omnicanalidad feature 2 title': string;
    'omnicanalidad feature 2 description': string;
    'omnicanalidad feature 3 title': string;
    'omnicanalidad feature 3 description': string;
    'omnicanalidad feature 4 title': string;
    'omnicanalidad feature 4 description': string;
    'omnicanalidad feature 5 title': string;
    'omnicanalidad feature 5 description': string;
    'omnicanalidad feature 6 title': string;
    'omnicanalidad feature 6 description': string;
    'omnicanalidad cta': string;
    'omnicanalidad benefits': string[];
    'catalogos title': string;
    'catalogos subtitle': string;
    'catalogos description': string;
    'catalogos feature 1 title': string;
    'catalogos feature 1 description': string;
    'catalogos feature 2 title': string;
    'catalogos feature 2 description': string;
    'catalogos feature 3 title': string;
    'catalogos feature 3 description': string;
    'catalogos feature 4 title': string;
    'catalogos feature 4 description': string;
    'catalogos feature 5 title': string;
    'catalogos feature 5 description': string;
    'catalogos feature 6 title': string;
    'catalogos feature 6 description': string;
    'catalogos cta': string;
    'catalogos benefits': string[];
    'mensajeria title': string;
    'mensajeria description': string;
    'mensajeria subtitle': string;
    'mensajeria hero': string;
    'mensajeria sms types title': string;
    'mensajeria sms types description': string;
    'mensajeria sms standard title': string;
    'mensajeria sms standard description': string;
    'mensajeria sms doble via title': string;
    'mensajeria sms doble via description': string;
    'mensajeria sms largo title': string;
    'mensajeria sms largo description': string;
    'mensajeria emails title': string;
    'mensajeria emails description': string;
    'mensajeria whatsapp title': string;
    'mensajeria whatsapp description': string;
    'mensajeria voz title': string;
    'mensajeria voz description': string;
    'mensajeria validation title': string;
    'mensajeria validation description': string;
    'mensajeria ver precios': string;
    'mensajeria platform title': string;
    'mensajeria platform description': string;
    'mensajeria feature 1 title': string;
    'mensajeria feature 1 description': string;
    'mensajeria feature 2 title': string;
    'mensajeria feature 2 description': string;
    'mensajeria feature 3 title': string;
    'mensajeria feature 3 description': string;
    'mensajeria feature 4 title': string;
    'mensajeria feature 4 description': string;
    'mensajeria feature 5 title': string;
    'mensajeria feature 5 description': string;
    'mensajeria feature 6 title': string;
    'mensajeria feature 6 description': string;
    'mensajeria pricing title': string;
    'mensajeria pricing description': string;
    'mensajeria pricing cta': string;
    'mensajeria pricing links': string[];
    'mensajeria features': string[];
    'mensajeria benefits': string[];
    'contact center title': string;
    'contact center subtitle': string;
    'contact center description': string;
    'contact center feature 1 title': string;
    'contact center feature 1 description': string;
    'contact center feature 2 title': string;
    'contact center feature 2 description': string;
    'contact center feature 3 title': string;
    'contact center feature 3 description': string;
    'contact center feature 4 title': string;
    'contact center feature 4 description': string;
    'contact center feature 5 title': string;
    'contact center feature 5 description': string;
    'contact center feature 6 title': string;
    'contact center feature 6 description': string;
    'contact center cta': string;
    'contact center benefits': string[];
    'automatizacion title': string;
    'automatizacion subtitle': string;
    'automatizacion description': string;
    'automatizacion feature 1 title': string;
    'automatizacion feature 1 description': string;
    'automatizacion feature 2 title': string;
    'automatizacion feature 2 description': string;
    'automatizacion feature 3 title': string;
    'automatizacion feature 3 description': string;
    'automatizacion feature 4 title': string;
    'automatizacion feature 4 description': string;
    'automatizacion feature 5 title': string;
    'automatizacion feature 5 description': string;
    'automatizacion feature 6 title': string;
    'automatizacion feature 6 description': string;
    'automatizacion cta': string;
    'automatizacion benefits': string[];
    'automatizacion tariffs title': string;
    'automatizacion tariffs note': string;
    'tipo de servicio': string;
    'descripción': string;
    'valor por hora o fracción': string;
    'automatizacion tariffs table': Array<{
      type: string;
      description: string;
      price: string;
    }>;
    'automatizacion features': string[];
    'asesoria title': string;
    'asesoria subtitle': string;
    'asesoria description': string;
    'asesoria feature 1 title': string;
    'asesoria feature 1 description': string;
    'asesoria feature 2 title': string;
    'asesoria feature 2 description': string;
    'asesoria feature 3 title': string;
    'asesoria feature 3 description': string;
    'asesoria feature 4 title': string;
    'asesoria feature 4 description': string;
    'asesoria feature 5 title': string;
    'asesoria feature 5 description': string;
    'asesoria feature 6 title': string;
    'asesoria feature 6 description': string;
    'asesoria cta': string;
    'asesoria benefits': string[];
    'asesoria features': string[];
    'sms pricing title': string;
    'sms pricing subtitle': string;
    'sms pricing description': string;
    'sms pricing plan 1': string;
    'sms pricing plan 1 desc': string;
    'sms pricing plan 2': string;
    'sms pricing plan 2 desc': string;
    'sms pricing plan 3': string;
    'sms pricing plan 3 desc': string;
    'sms pricing plan 4': string;
    'sms pricing plan 4 desc': string;
    'sms pricing plan 5': string;
    'sms pricing plan 5 desc': string;
    'sms pricing plan 6': string;
    'sms pricing plan 6 desc': string;
    'sms pricing unit': string;
    'sms pricing phrases': string[];
    'email pricing title': string;
    'email pricing subtitle': string;
    'email pricing description': string;
    'email pricing plan 1': string;
    'email pricing plan 1 desc': string;
    'email pricing plan 2': string;
    'email pricing plan 2 desc': string;
    'email pricing plan 3': string;
    'email pricing plan 3 desc': string;
    'email pricing plan 4': string;
    'email pricing plan 4 desc': string;
    'email pricing plan 5': string;
    'email pricing plan 5 desc': string;
    'email pricing plan 6': string;
    'email pricing plan 6 desc': string;
    'email pricing unit': string;
    'email pricing phrases': string[];
    'voice pricing title': string;
    'voice pricing subtitle': string;
    'voice pricing description': string;
    'voice pricing plan 1': string;
    'voice pricing plan 1 desc': string;
    'voice pricing plan 2': string;
    'voice pricing plan 2 desc': string;
    'voice pricing plan 3': string;
    'voice pricing plan 3 desc': string;
    'voice pricing plan 4': string;
    'voice pricing plan 4 desc': string;
    'voice pricing plan 5': string;
    'voice pricing plan 5 desc': string;
    'voice pricing plan 6': string;
    'voice pricing plan 6 desc': string;
    'voice pricing unit': string;
    'voice pricing phrases': string[];
    'validation pricing title': string;
    'validation pricing subtitle': string;
    'validation pricing description': string;
    'validation pricing plan 1': string;
    'validation pricing plan 1 desc': string;
    'validation pricing plan 2': string;
    'validation pricing plan 2 desc': string;
    'validation pricing plan 3': string;
    'validation pricing plan 3 desc': string;
    'validation pricing plan 4': string;
    'validation pricing plan 4 desc': string;
    'validation pricing plan 5': string;
    'validation pricing plan 5 desc': string;
    'validation pricing plan 6': string;
    'validation pricing plan 6 desc': string;
    'validation pricing unit': string;
    'validation pricing phrases': string[];
    // Pricing Features
    'feature max volume': string;
    'feature dedicated infrastructure': string;
    'feature sla guaranteed': string;
    'feature whatsapp support': string;
    'feature very high volume': string;
    'feature high volume': string;
    'feature dedicated short code': string;
    'feature crm integration': string;
    'feature sms up to 1120 chars': string;
    'feature integration api': string;
    'feature advanced statistics': string;
    'feature standard two way sms': string;
    'feature sending scheduling': string;
    'feature contact segmentation': string;
    'feature standard sms sending': string;
    'feature basic control panel': string;
    'feature delivery reports': string;
    'feature unlimited contacts': string;
    'feature dedicated ip': string;
    'feature dynamic personalization': string;
    'feature up to 25000 contacts': string;
    'feature sequence automation': string;
    'feature drag drop editor': string;
    'feature up to 5000 contacts': string;
    'feature basic segmentation': string;
    'feature predefined templates': string;
    'feature up to 1000 contacts': string;
    'feature basic statistics': string;
    'feature unlimited calls': string;
    'feature multiple simultaneous campaigns': string;
    'feature dtmf interaction': string;
    'feature up to 10000 calls': string;
    'feature text to speech spanish': string;
    'feature up to 2000 calls': string;
    'feature schedule programming': string;
    'feature prerecorded messages': string;
    'feature up to 500 calls': string;
    'feature basic reports': string;
    'feature up to 100000 emails': string;
    'feature automatic validation': string;
    'feature up to 25000 emails': string;
    'feature real time validation': string;
    'feature integration api validation': string;
    'feature up to 5000 emails': string;
    'feature spam traps detection': string;
    'feature risk classification': string;
    'feature up to 1000 emails validation': string;
    'feature invalid detection': string;
    'feature downloadable report': string;
    // Pricing Layout Elements
    'pricing back to home': string;
    'pricing plans and rates title': string;
    'pricing plans and rates description': string;
    'pricing get quote': string;
    'pricing important note': string;
    'pricing important note text': string;
    'pricing why choose service title': string;
    'pricing need custom quote title': string;
    'pricing need custom quote description': string;
    'pricing request quote': string;
    'pricing send email': string;
  };
  pricing: {
    'sms title': string;
    'sms description': string;
    'sms features': string[];
    'sms plans': string[];
    'email title': string;
    'email description': string;
    'email features': string[];
    'email plans': string[];
    'voz title': string;
    'voz description': string;
    'voz features': string[];
    'voz plans': string[];
    'validacion title': string;
    'validacion description': string;
    'validacion features': string[];
    'validacion plans': string[];
  };
}

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    navbar: {
      inicio: 'Inicio',
      servicios: 'Servicios',
      precios: 'Precios',
      contacto: 'Contacto',
      contctanos: 'Contáctanos',
      chatbot: 'Chatbot',
      'ia para whatsapp': 'IA para WhatsApp',
      'apps con whatsapp': 'Apps con WhatsApp',
      omnicanalidad: 'Omnicanalidad',
      'catálogos de productos': 'Catálogos de productos',
      'mensajería masiva': 'Mensajería masiva',
      'contact center': 'Contact Center',
      'consultoría de automatización': 'Consultoría de automatización',
      'asesoría en comunicación masiva': 'Asesoría en comunicación masiva',
      'sms masivos': 'SMS masivos',
      'email masivos': 'Email masivos',
      'sms de voz masivos': 'SMS de voz masivos',
      'validación de correos': 'Validación de correos',
      consultoría: 'Consultoría',
      'contactanos por whatsapp': 'Contáctanos por WhatsApp',
    },
    home: {
      'somos su puente de comunicación con el mundo': 'Somos su puente de comunicación con el mundo',
      'servicios que impulsan tu negocio': 'Servicios que impulsan tu negocio',
      'hablar con un asesor': 'Hablar con un asesor',
      'escribir por whatsapp': 'Escribir por WhatsApp',
      'nuestras soluciones': 'Nuestras soluciones',
      'explora nuestras soluciones': 'Explora nuestras soluciones',
      'chatbot description': 'Automatiza la atención al cliente con bots inteligentes en WhatsApp, Messenger, Telegram e Instagram.',
      'ia whatsapp description': 'Potencia tu WhatsApp Business con inteligencia artificial para respuestas contextuales y automatización avanzada.',
      'apps whatsapp description': 'Desarrolla aplicaciones personalizadas para WhatsApp que se integren con tus sistemas y procesos.',
      'omnicanalidad description': 'Conecta todos tus canales de comunicación en una sola plataforma para una experiencia integrada.',
      'catalogos description': 'Muestra tus productos y catálogos directamente en WhatsApp con compras integradas.',
      'mensajeria description': 'Envía mensajes masivos a través de múltiples canales con alta tasa de apertura y entrega.',
      'contact center description': 'Centraliza todas tus comunicaciones con un contact center multicanal avanzado.',
      'automatizacion description': 'Optimiza tus procesos con automatización inteligente y flujos de trabajo personalizados.',
      'asesoria description': 'Recibe asesoría experta en comunicación masiva y estrategias de marketing digital.',
      'por qué elegirnos': '¿Por qué elegirnos?',
      'experiencia title': 'Más de 10 años de experiencia',
      'experiencia description': 'Líderes en el mercado de comunicaciones masivas con miles de clientes satisfechos.',
      'tecnologia title': 'Tecnología de vanguardia',
      'tecnologia description': 'Plataformas propias desarrolladas con las últimas tecnologías y estándares de seguridad.',
      'soporte title': 'Soporte 24/7',
      'soporte description': 'Equipo de especialistas disponible siempre que nos necesites para resolver cualquier duda.',
      'resultados title': 'Resultados comprobados',
      'resultados description': 'Más del 95% de tasa de entrega y satisfacción garantizada en todos nuestros servicios.',
      'contactanos hoy': 'Contáctanos hoy',
      'desde 1993 conectando empresas': 'Desde 1993 conectando empresas',
      'años de experiencia': 'Años de experiencia',
      'clientes satisfechos': 'Clientes satisfechos',
      'soluciones digitales': 'Soluciones digitales',
      'soluciones comunicacion digital': 'Soluciones de comunicación digital para empresas: chatbots, WhatsApp API, omnicanalidad, envíos masivos y mucho más. Todo el acompañamiento que necesitas.',
      'servicio destacado': 'Servicio destacado',
      'consultoria whatsapp title': 'Consultoría para automatizar tu negocio con WhatsApp Business API',
      'consultoria whatsapp description': 'Te ayudamos a diseñar flujos, integraciones y procesos de venta, soporte y seguimiento para convertir WhatsApp en un canal real de automatización comercial.',
      'ver consultoria': 'Ver consultoría',
      'agenda tu cita': 'Agenda tu cita',
      'hablar por whatsapp': 'Hablar por WhatsApp',
      'our solutions': 'Our solutions',
      'services that boost your business': 'Services that boost your business',
      'services subtitle': 'Desde chatbots inteligentes hasta campañas masivas, tenemos todo lo que necesitas para conectar con tus clientes.',
      'sobre nosotros': 'Sobre nosotros',
      'about title': 'Más de 30 años creando puentes de comunicación',
      'about description': 'Somos una agencia dedicada al marketing digital en todas sus formas. Hacemos parte del mercado desde 1993, buscando ayudar personas, emprendedores, pequeñas y grandes empresas a conseguir lo que quieren.',
      'about evolution': 'A través de estos años hemos avanzado para entregarles lo mejor: en 2009 emergimos en telecomunicaciones, en 2015 comenzamos a diseñar apps, y en 2021 iniciamos la producción de bots. Todo para ofrecerles nuevos servicios que permitan llegar a más personas.',
      'about features': [
        'Acompañamiento integral en cada proyecto',
        'Tecnología de punta en comunicaciones',
        'Equipo experto en marketing digital',
        'Soluciones personalizadas para cada negocio'
      ],
      'comience hoy': 'Comience hoy',
      'su primera asesoría virtual': 'Su primera asesoría virtual',
      'nuestro equipo le diseñará': 'Nuestro equipo le diseñará una solución personalizada',
      'enviar un correo': 'Enviar un correo',
      'automatización': 'Automatización',
      'ia': 'IA',
      'programación': 'Programación',
    },
    pricing: {
      'sms title': 'SMS Masivos',
      'sms description': 'Envía mensajes de texto masivos con alta tasa de apertura. Disponible en tres modalidades: SMS estándar, SMS doble vía y SMS de hasta 1120 caracteres.',
      'sms features': ['SMS estándar de 160 caracteres', 'SMS doble vía para interacción', 'SMS largo de hasta 1120 caracteres', 'Plataforma web de fácil uso', 'Programación de envíos', 'Reportes de entrega en tiempo real'],
      'sms plans': ['Plan Básico: Hasta 1,000 SMS/mes', 'Plan Profesional: Hasta 10,000 SMS/mes', 'Plan Empresarial: Ilimitado'],
      'email title': 'Email Marketing Masivo',
      'email description': 'Campañas de email marketing interactivas con diseño profesional, seguimiento avanzado y métricas detalladas para optimizar tus resultados.',
      'email features': ['Editor de plantillas drag & drop', 'Personalización dinámica de contenido', 'Segmentación avanzada de contactos', 'A/B testing de asuntos y contenido', 'Métricas: apertura, clics, rebotes'],
      'email plans': ['Plan Starter: Hasta 5,000 emails/mes', 'Plan Growth: Hasta 50,000 emails/mes', 'Plan Enterprise: Personalizado'],
      'voz title': 'SMS de Voz Masivos',
      'voz description': 'Convierte tus mensajes de texto a voz natural y envía llamadas masivas con mensajes personalizados.',
      'voz features': ['Voz natural y clara', 'Programación de llamadas', 'Reportes de llamadas realizadas', 'Personalización de mensajes de voz', 'API para integración de voz'],
      'voz plans': ['Plan Básico: Hasta 500 llamadas/mes', 'Plan Plus: Hasta 5,000 llamadas/mes', 'Pro: Personalizado'],
      'validacion title': 'Validación de Correos',
      'validacion description': 'Verifica y limpia tu base de datos de correos para mejorar entregabilidad.',
      'validacion features': ['Validación en tiempo real', 'Limpieza de base de datos', 'Reportes de calidad', 'API de integración'],
      'validacion plans': ['Verificación puntual: $0.01/email', 'Suscripción mensual: Desde $50/mes', 'Enterprise: Cotización'],
    },
    layout: {
      'características principales': 'Características principales',
      'beneficios para tu empresa': 'Beneficios para tu empresa',
      'listo para comenzar': 'Listo para comenzar',
      'servicios relacionados': 'Servicios relacionados',
      'volver al inicio': 'Volver al inicio',
      'descubre solucion': 'Descubre todo lo que esta solución puede hacer por tu negocio',
      'contactanos hoy': 'Contáctenos hoy y reciba una asesoría personalizada sin costo. Nuestro equipo está listo para ayudarle.',
    },
    automatizacion: {
      'consultoría de marketing de automatización': 'Consultoría de marketing de automatización',
      'estrategia y acompañamiento experto': 'Estrategia y acompañamiento experto',
      'tarifas de consultoría': 'Tarifas de consultoría',
      'asesoría comercial': 'Asesoría comercial',
      'asesoría técnica y comercial': 'Asesoría técnica y comercial',
      'soporte operativo básico': 'Soporte operativo básico',
      'solicitar consultoría': 'Solicitar consultoría',
    },
    common: {
      'ver más': 'Ver más',
      'solicitar': 'Solicitar',
      'contactar': 'Contactar',
      'características': 'Características',
      'beneficios': 'Beneficios',
      'precio': 'Precio',
      'planes': 'Planes',
      'inicio': 'Inicio',
      'servicios': 'Servicios',
      'contacto': 'Contacto',
    },
    contact: {
      'conoce a alexander': 'Conoce a Alexander',
      'hola mucho gusto': '¡Hola, mucho gusto!',
      'mi nombre es': 'Mi nombre es',
      'descripcion alexander': 'Director de Crear Comunicaciones. Estoy aquí para ayudarte a conectar con tu audiencia a través de soluciones de comunicación digital innovadoras y efectivas.',
      'reserva tu cita': 'Reserva tu cita',
      'escribeme por whatsapp': 'Escríbeme por WhatsApp',
      'enviar correo': 'Enviar correo',
      'agenda tu cita': 'Agenda tu cita',
    },
    footer: {
      'descripcion footer': 'Somos su puente de comunicación con el mundo. Más de 30 años ayudando a empresas a conectar con sus clientes a través de soluciones digitales innovadoras.',
      'envios masivos': 'Envíos masivos',
      'todos los derechos reservados': 'Todos los derechos reservados.',
    },
    massivePricing: {
      'nuestros servicios masivos': 'Nuestros servicios masivos',
      'sms masivos title': 'SMS Masivos',
      'sms masivos description': 'Envía mensajes de texto masivos con alta tasa de apertura. Disponible en tres modalidades: SMS estándar, SMS doble vía y SMS de hasta 1120 caracteres.',
      'sms estandar': 'SMS estándar de 160 caracteres',
      'sms doble via': 'SMS doble vía para interacción',
      'sms largo': 'SMS largo de hasta 1120 caracteres',
      'plataforma web': 'Plataforma web de fácil uso',
      'programacion envios': 'Programación de envíos',
      'reportes entrega': 'Reportes de entrega en tiempo real',
      'personalizacion mensajes': 'Personalización de mensajes',
      'api integracion': 'API para integración con sistemas',
      'email masivos title': 'Email Masivos',
      'email masivos description': 'Campañas de email marketing interactivas con diseño profesional, seguimiento avanzado y métricas detalladas para optimizar tus resultados.',
      'editor plantillas': 'Editor de plantillas drag & drop',
      'personalizacion dinamica': 'Personalización dinámica de contenido',
      'segmentacion avanzada': 'Segmentación avanzada de contactos',
      'ab testing': 'A/B testing de asuntos y contenido',
      'metricas email': 'Métricas: apertura, clics, rebotes',
      'automatizacion secuencias': 'Automatización de secuencias',
      'cumplimiento anti spam': 'Cumplimiento anti-spam',
      'sms voz masivos title': 'SMS de Voz Masivos',
      'sms voz masivos description': 'Convierte tus mensajes de texto a voz natural y envía llamadas masivas con mensajes personalizados.',
      'voz natural': 'Voz natural y clara',
      'programacion voz': 'Programación de llamadas',
      'reportes voz': 'Reportes de llamadas realizadas',
      'personalizacion voz': 'Personalización de mensajes de voz',
      'api voz': 'API para integración de voz',
      'conoce mas': 'Conoce más',
    },
    services: {
      'chatbot title': 'Chatbots Inteligentes',
      'chatbot subtitle': 'Automatización conversacional',
      'chatbot description': 'Diseñamos y desarrollamos chatbots personalizados para los principales canales de comunicación de tu empresa: WhatsApp, Messenger, Telegram e Instagram. Automatiza la atención al cliente, genera leads y cierra ventas las 24 horas del día, los 7 días de la semana.',
      'chatbot feature 1 title': 'Multi-plataforma',
      'chatbot feature 1 description': 'Un solo bot que funciona en WhatsApp, Facebook Messenger, Telegram e Instagram. Tus clientes te contactan por donde prefieran y reciben la misma experiencia de calidad.',
      'chatbot feature 2 title': 'Flujos conversacionales inteligentes',
      'chatbot feature 2 description': 'Diseñamos árboles de decisión y flujos de conversación adaptados a tu negocio. El bot guía al usuario paso a paso hasta resolver su consulta o completar una acción.',
      'chatbot feature 3 title': 'Respuestas con IA',
      'chatbot feature 3 description': 'Integración con inteligencia artificial para comprender el lenguaje natural de tus clientes y ofrecer respuestas contextuales, no solo respuestas predefinidas.',
      'chatbot feature 4 title': 'Transferencia a agente humano',
      'chatbot feature 4 description': 'Cuando la consulta requiere atención personalizada, el bot transfiere la conversación a un agente humano de forma transparente, sin que el cliente pierda el contexto.',
      'chatbot feature 5 title': 'Métricas y reportes',
      'chatbot feature 5 description': 'Panel de control con estadísticas en tiempo real: conversaciones atendidas, tasa de resolución, tiempos de respuesta y satisfacción del cliente.',
      'chatbot feature 6 title': 'Integración con CRM',
      'chatbot feature 6 description': 'Conectamos el chatbot con tu sistema de gestión de clientes para registrar automáticamente leads, actualizar datos y disparar acciones de seguimiento.',
      'chatbot cta': 'Solicitar mi Chatbot',
      'request chatbot': 'Request my Chatbot',
      'send email': 'Enviar correo',
      'related services': 'Servicios relacionados',
      'chatbot benefits': [
        'Atención al cliente 24/7 sin interrupciones',
        'Reducción de hasta el 70% en costos de atención',
        'Respuesta inmediata a consultas frecuentes',
        'Generación automática de leads calificados',
        'Escalabilidad: atiende miles de conversaciones simultáneas',
        'Mejora la satisfacción del cliente con respuestas rápidas',
        'Libera a tu equipo para tareas de mayor valor',
        'Implementación rápida y sin complicaciones técnicas'
      ],
      'ia whatsapp title': 'IA para WhatsApp Business',
      'ia whatsapp subtitle': 'Inteligencia artificial conversacional',
      'ia whatsapp description': 'Potencia tu WhatsApp Business con inteligencia artificial de última generación. Nuestras soluciones de IA permiten que tu empresa ofrezca respuestas inteligentes, personalizadas y contextuales a través del canal de mensajería más utilizado del mundo.',
      'ia whatsapp feature 1 title': 'Comprensión del lenguaje natural',
      'ia whatsapp feature 1 description': 'La IA entiende lo que tus clientes escriben, sin importar cómo lo expresen. Reconoce intenciones, extrae información clave y responde de forma natural y coherente.',
      'ia whatsapp feature 2 title': 'Automatización inteligente de ventas',
      'ia whatsapp feature 2 description': 'Desde la primera consulta hasta el cierre, la IA guía al cliente por el embudo de ventas: presenta productos, responde objeciones, calcula precios y agenda citas.',
      'ia whatsapp feature 3 title': 'Aprendizaje continuo',
      'ia whatsapp feature 3 description': 'El sistema aprende de cada interacción para mejorar sus respuestas con el tiempo. Cuanto más se usa, más preciso y eficiente se vuelve.',
      'ia whatsapp feature 4 title': 'Personalización por contexto',
      'ia whatsapp feature 4 description': 'La IA recuerda el historial de conversación y los datos del cliente para ofrecer respuestas personalizadas, recomendaciones relevantes y un trato único.',
      'ia whatsapp feature 5 title': 'Integración con WhatsApp Business API',
      'ia whatsapp feature 5 description': 'Conexión directa con la API oficial de WhatsApp Business para garantizar estabilidad, seguridad y cumplimiento de las políticas de Meta.',
      'ia whatsapp feature 6 title': 'Análisis de sentimiento',
      'ia whatsapp feature 6 description': 'Detecta el estado emocional del cliente en tiempo real para adaptar el tono de las respuestas y escalar a un agente humano cuando sea necesario.',
      'ia whatsapp cta': 'Activar IA en mi WhatsApp',
      'ia whatsapp benefits': [
        'Respuestas inteligentes y contextuales las 24 horas',
        'Incremento significativo en la tasa de conversión',
        'Reducción del tiempo de respuesta a segundos',
        'Atención personalizada a escala masiva',
        'Integración nativa con WhatsApp Business API',
        'Reportes detallados de interacciones y rendimiento',
        'Escalamiento automático a agentes humanos',
        'Cumplimiento con políticas de privacidad y datos'
      ],
      'apps whatsapp title': 'Apps con WhatsApp API',
      'apps whatsapp subtitle': 'Desarrollo de aplicaciones integradas',
      'apps whatsapp description': 'Desarrollamos aplicaciones móviles y web personalizadas que se integran directamente con la API de WhatsApp Business. Desde sistemas de reservas hasta plataformas de e-commerce, llevamos el poder de WhatsApp a tu aplicación empresarial.',
      'apps whatsapp feature 1 title': 'Aplicaciones a medida',
      'apps whatsapp feature 1 description': 'Diseñamos y desarrollamos aplicaciones completamente personalizadas según las necesidades específicas de tu negocio, con integración nativa de WhatsApp Business API.',
      'apps whatsapp feature 2 title': 'Notificaciones transaccionales',
      'apps whatsapp feature 2 description': 'Envía confirmaciones de pedido, actualizaciones de envío, recordatorios de cita y más directamente al WhatsApp de tus clientes desde tu aplicación.',
      'apps whatsapp feature 3 title': 'Sistemas de reservas y citas',
      'apps whatsapp feature 3 description': 'Aplicaciones que permiten a tus clientes agendar citas, reservar servicios y recibir confirmaciones y recordatorios automáticos por WhatsApp.',
      'apps whatsapp feature 4 title': 'Plataformas de e-commerce',
      'apps whatsapp feature 4 description': 'Tiendas en línea con carrito de compras, pagos integrados y comunicación directa con el cliente vía WhatsApp para soporte y seguimiento de pedidos.',
      'apps whatsapp feature 5 title': 'Dashboards y paneles de control',
      'apps whatsapp feature 5 description': 'Interfaces administrativas para gestionar tu negocio, con reportes en tiempo real y la capacidad de comunicarte con clientes directamente desde el panel.',
      'apps whatsapp feature 6 title': 'APIs y microservicios',
      'apps whatsapp feature 6 description': 'Arquitectura moderna basada en APIs que permite integrar WhatsApp con tus sistemas existentes: ERP, CRM, facturación y más.',
      'apps whatsapp cta': 'Cotizar mi aplicación',
      'apps whatsapp benefits': [
        'Aplicaciones personalizadas para tu modelo de negocio',
        'Integración directa con WhatsApp Business API',
        'Comunicación bidireccional con clientes desde la app',
        'Automatización de procesos empresariales',
        'Escalabilidad para crecer con tu negocio',
        'Soporte técnico y mantenimiento continuo',
        'Diseño responsive para móvil y escritorio',
        'Seguridad y protección de datos empresariales'
      ],
      'omnicanalidad title': 'Plataforma Omnicanal',
      'omnicanalidad subtitle': 'Todos tus canales en un solo lugar',
      'omnicanalidad description': 'Unificamos todos los canales de comunicación digital de tu empresa - WhatsApp, Messenger, Telegram, Instagram y más - en una sola plataforma centralizada. Hacemos todo el acompañamiento desde la implementación hasta la optimización continua de tu operación omnicanal.',
      'omnicanalidad feature 1 title': 'Bandeja unificada',
      'omnicanalidad feature 1 description': 'Todas las conversaciones de WhatsApp, Messenger, Telegram, Instagram y otros canales llegan a una sola bandeja de entrada. Tus agentes no necesitan cambiar entre aplicaciones.',
      'omnicanalidad feature 2 title': 'Gestión de múltiples agentes',
      'omnicanalidad feature 2 description': 'Asigna conversaciones a diferentes agentes o equipos según reglas predefinidas: por tema, por idioma, por prioridad o por disponibilidad.',
      'omnicanalidad feature 3 title': 'Acompañamiento integral',
      'omnicanalidad feature 3 description': 'No solo implementamos la plataforma: te acompañamos en todo el proceso. Desde la configuración inicial hasta la capacitación de tu equipo y la optimización continua.',
      'omnicanalidad feature 4 title': 'Historial completo del cliente',
      'omnicanalidad feature 4 description': 'Accede al historial completo de interacciones de cada cliente sin importar por qué canal se haya comunicado. Contexto total para una atención excepcional.',
      'omnicanalidad feature 5 title': 'Automatizaciones y flujos',
      'omnicanalidad feature 5 description': 'Configura respuestas automáticas, mensajes de bienvenida, encuestas de satisfacción y flujos de trabajo que se activan según el comportamiento del cliente.',
      'omnicanalidad feature 6 title': 'Reportes y métricas',
      'omnicanalidad feature 6 description': 'Dashboard con métricas clave: tiempos de respuesta, satisfacción del cliente, productividad por agente, volumen por canal y tendencias de conversación.',
      'omnicanalidad cta': 'Implementar omnicanalidad',
      'omnicanalidad benefits': [
        'Un solo lugar para gestionar todos los canales digitales',
        'Acompañamiento completo desde la implementación',
        'Mejora en tiempos de respuesta y satisfacción del cliente',
        'Visibilidad total de la operación de atención',
        'Capacitación y soporte continuo para tu equipo',
        'Escalabilidad: agrega canales y agentes según crezcas',
        'Reducción de mensajes perdidos o sin responder',
        'Integración con CRM y herramientas existentes'
      ],
      'catalogos title': 'Catálogos de Productos',
      'catalogos subtitle': 'Tu tienda dentro de WhatsApp',
      'catalogos description': 'Conectamos el catálogo de productos de Meta con la API de WhatsApp Business para que tus clientes puedan explorar tu inventario, seleccionar productos y realizar pedidos directamente desde la conversación de WhatsApp. Una experiencia de compra fluida sin salir del chat.',
      'catalogos feature 1 title': 'Catálogo de Meta integrado',
      'catalogos feature 1 description': 'Vinculamos tu catálogo de productos de Meta (Facebook/Instagram) directamente con WhatsApp Business API. Tus productos aparecen dentro del chat con fotos, descripciones y precios.',
      'catalogos feature 2 title': 'Carrito de compras en WhatsApp',
      'catalogos feature 2 description': 'Tus clientes pueden agregar productos al carrito, modificar cantidades y enviar su pedido completo sin salir de la conversación de WhatsApp.',
      'catalogos feature 3 title': 'Sincronización automática',
      'catalogos feature 3 description': 'Los cambios en tu catálogo de Meta se reflejan automáticamente en WhatsApp. Actualiza precios, disponibilidad y descripciones desde un solo lugar.',
      'catalogos feature 4 title': 'Mensajes de producto',
      'catalogos feature 4 description': 'Envía productos individuales o colecciones completas como mensajes interactivos. El cliente puede ver detalles, imágenes y agregar al carrito con un toque.',
      'catalogos feature 5 title': 'Gestión de pedidos',
      'catalogos feature 5 description': 'Recibe y gestiona los pedidos que llegan por WhatsApp. Confirmación automática, seguimiento del estado y notificaciones al cliente en cada etapa.',
      'catalogos feature 6 title': 'Análisis de ventas',
      'catalogos feature 6 description': 'Reportes de productos más vistos, más vendidos, tasas de conversión y comportamiento de compra de tus clientes dentro de WhatsApp.',
      'catalogos cta': 'Activar mi catálogo',
      'catalogos benefits': [
        'Tus clientes compran sin salir de WhatsApp',
        'Catálogo siempre actualizado y sincronizado con Meta',
        'Experiencia de compra conversacional y natural',
        'Aumento en la tasa de conversión de ventas',
        'Gestión centralizada de productos e inventario',
        'Notificaciones automáticas de estado del pedido',
        'Compatible con cualquier tipo de producto o servicio',
        'Reducción de fricción en el proceso de compra'
      ],
      'mensajeria title': 'Mensajería Masiva',
      'mensajeria description': 'Plataforma completa para envíos masivos de SMS, Email y Voz con altas tasas de entrega y reportes en tiempo real.',
      'mensajeria subtitle': 'Expertos en comunicación masiva',
      'mensajeria hero': 'Lleva tus mensajes al siguiente nivel con una plataforma creada para escalar en velocidad y capacidad de entrega. SMS, Email y Mensajes de Voz para llegar a miles de personas en segundos.',
      'mensajeria sms types title': 'Tipos de SMS disponibles',
      'mensajeria sms types description': 'Estos servicios se hacen desde una plataforma web de fácil uso e intuitiva que te permite enviar mensajes de texto a todos los móviles que desees.',
      'mensajeria sms standard title': 'SMS Estándar',
      'mensajeria sms standard description': 'Mensajes de texto de hasta 160 caracteres. Ideal para notificaciones, alertas, confirmaciones y comunicaciones directas con alta tasa de apertura.',
      'mensajeria sms doble via title': 'SMS doble vía',
      'mensajeria sms doble via description': 'Permite que tu cliente te responda de forma gratuita. Ideal para encuestas, confirmaciones interactivas y comunicación bidireccional con tu audiencia.',
      'mensajeria sms largo title': 'SMS de hasta 1120 Caracteres',
      'mensajeria sms largo description': 'Mensajes extendidos para cuando necesitas comunicar más información. Perfecto para promociones detalladas, instrucciones y contenido enriquecido.',
      'mensajeria emails title': 'Emails',
      'mensajeria emails description': 'Campañas de email masivo con diseños personalizables. Ideal para newsletters, promociones y comunicaciones de largo formato con seguimiento detallado de aperturas.',
      'mensajeria whatsapp title': 'WhatsApp',
      'mensajeria whatsapp description': 'Mensajes a través de WhatsApp Business API. Perfecto para comunicación directa, notificaciones interactivas y atención al cliente en el canal preferido de tus clientes.',
      'mensajeria voz title': 'Mensajes de Voz',
      'mensajeria voz description': 'Llamadas automatizadas con mensajes de voz pregrabados. Ideal para alertas urgentes, recordatorios importantes y comunicaciones que requieren atención inmediata.',
      'mensajeria validation title': 'Validación de correos',
      'mensajeria validation description': 'Verifica la calidad de tus bases de datos de correo electrónico',
      'mensajeria ver precios': 'Ver precios',
      'mensajeria platform title': 'Nuestra plataforma de envíos',
      'mensajeria platform description': 'Segmenta tu mercado de acuerdo a las necesidades de marketing de tu negocio y alcanza a tu audiencia con precisión.',
      'mensajeria feature 1 title': 'Motor de entrega eficaz',
      'mensajeria feature 1 description': 'Nuestra solución asegura una entrega eficaz de la comunicación masiva. Llega a más clientes con un servicio de SMS más rápido y confiable.',
      'mensajeria feature 2 title': 'Altas tasas de entrega',
      'mensajeria feature 2 description': 'Acuerdos comerciales con los operadores locales garantizan un alto impacto de su mensaje en el móvil del destinatario. Entregas cuando entre en cobertura o se encienda.',
      'mensajeria feature 3 title': 'Estadísticas en detalle',
      'mensajeria feature 3 description': 'Sigue en detalle las estadísticas del envío y el impacto sobre tu audiencia. Controla el presupuesto, ajusta los cambios y lanza de nuevo otras campañas.',
      'mensajeria feature 4 title': 'Vínculos inteligentes',
      'mensajeria feature 4 description': 'Vincula redes sociales, páginas web, números de WhatsApp y mucho más en el mensaje de texto. Llega de forma personalizada a cada uno de tus clientes.',
      'mensajeria feature 5 title': 'Programación de campañas',
      'mensajeria feature 5 description': 'Programa las campañas desde nuestra plataforma web para que las envíes de forma inmediata o posterior. Hasta 72 horas de espera para entrega en cobertura.',
      'mensajeria feature 6 title': 'Código corto dedicado',
      'mensajeria feature 6 description': 'Los mensajes se envían a través de un código corto programado. Administra tus propias campañas de envío desde una plataforma web de fácil uso e intuitiva.',
      'mensajeria pricing title': 'Consulta nuestros precios',
      'mensajeria pricing description': 'Tenemos planes adaptados a cada necesidad. Consulta las tarifas de cada servicio o solicita una cotización personalizada.',
      'mensajeria pricing cta': 'Solicitar cotización personalizada',
      'mensajeria pricing links': ['Precios SMS', 'Precios de email', 'Precios de voz', 'Validación de correos'],
      'mensajeria features': ['Múltiples canales', 'Segmentación avanzada', 'Reportes detallados', 'Programación de envíos'],
      'mensajeria benefits': ['Alcance masivo', 'Personalización', 'Métricas precisas', 'Automatización'],
      'contact center title': 'Contact Center Integrado',
      'contact center subtitle': 'Centro de contacto profesional',
      'contact center description': 'Implementamos y gestionamos tu centro de contacto con acompañamiento integral. Desde la infraestructura tecnológica hasta la capacitación de agentes, nos encargamos de todo para que tu operación de atención al cliente funcione de manera eficiente y profesional.',
      'contact center feature 1 title': 'Acompañamiento completo',
      'contact center feature 1 description': 'Hacemos todo el acompañamiento desde la planificación hasta la operación diaria. Diseñamos la estrategia, implementamos la tecnología y capacitamos a tu equipo.',
      'contact center feature 2 title': 'Campañas de llamadas',
      'contact center feature 2 description': 'Diseñamos y ejecutamos campañas de llamadas salientes para cobranza, encuestas, convocatoria a eventos, televentas, confirmación de citas y más.',
      'contact center feature 3 title': 'Recepción de llamadas',
      'contact center feature 3 description': 'Líneas de atención al cliente con IVR inteligente, distribución automática de llamadas, colas de espera y grabación para control de calidad.',
      'contact center feature 4 title': 'Integración multicanal',
      'contact center feature 4 description': 'El contact center no solo maneja llamadas: integra WhatsApp, email, chat web y redes sociales para una experiencia unificada de atención.',
      'contact center feature 5 title': 'Monitoreo en tiempo real',
      'contact center feature 5 description': 'Supervisión en vivo de la operación: llamadas activas, tiempos de espera, disponibilidad de agentes y métricas de rendimiento al instante.',
      'contact center feature 6 title': 'Reportes y análisis',
      'contact center feature 6 description': 'Informes detallados de productividad, calidad de atención, tiempos de gestión, tasas de resolución y satisfacción del cliente.',
      'contact center cta': 'Implementar Contact Center',
      'contact center benefits': [
        'Acompañamiento integral en toda la operación',
        'Infraestructura tecnológica de última generación',
        'Campañas de llamadas para cobranza y ventas',
        'Capacitación profesional para tu equipo de agentes',
        'Monitoreo y control de calidad en tiempo real',
        'Escalabilidad según el volumen de tu operación',
        'Integración con canales digitales (WhatsApp, email, chat)',
        'Reducción de costos operativos con automatización'
      ],
      'automatizacion title': 'Consultoría de Automatización',
      'automatizacion subtitle': 'Estrategia y acompañamiento experto',
      'automatizacion description': 'Diseñamos e implementamos estrategias de marketing automatizado para tu empresa. Desde la planificación hasta la ejecución, te acompañamos en cada paso para que tus campañas de comunicación funcionen de forma inteligente, eficiente y sin intervención manual.',
      'automatizacion feature 1 title': 'Diagnóstico de comunicación',
      'automatizacion feature 1 description': 'Analizamos tus canales actuales de comunicación, flujos de trabajo y puntos de contacto con el cliente para identificar oportunidades de automatización que generen impacto real.',
      'automatizacion feature 2 title': 'Diseño de flujos automatizados',
      'automatizacion feature 2 description': 'Creamos flujos de comunicación automatizados que se activan según el comportamiento del cliente: bienvenida, seguimiento, reactivación, postventa y más.',
      'automatizacion feature 3 title': 'Integración de canales',
      'automatizacion feature 3 description': 'Conectamos todos tus canales - WhatsApp, SMS, Email, Voz - en una estrategia unificada donde cada canal cumple un rol específico en el recorrido del cliente.',
      'automatizacion feature 4 title': 'Segmentación inteligente',
      'automatizacion feature 4 description': 'Definimos segmentos de audiencia basados en comportamiento, demografía e historial de interacción para que cada mensaje llegue a la persona correcta en el momento adecuado.',
      'automatizacion feature 5 title': 'Implementación y capacitación',
      'automatizacion feature 5 description': 'No solo diseñamos la estrategia: la implementamos en tu plataforma y capacitamos a tu equipo para que pueda operar, ajustar y optimizar las automatizaciones de forma autónoma.',
      'automatizacion feature 6 title': 'Medición y optimización continua',
      'automatizacion feature 6 description': 'Establecemos KPIs claros y realizamos seguimiento periódico para medir el rendimiento de cada automatización, identificar mejoras y escalar lo que funciona.',
      'automatizacion cta': 'Solicitar consultoría',
      'automatizacion benefits': [
        'Estrategia personalizada para tu modelo de negocio',
        'Automatización de campañas en múltiples canales',
        'Reducción de tareas manuales y repetitivas',
        'Mayor eficiencia en la comunicación con clientes',
        'Aumento en tasas de conversión y retención',
        'Capacitación completa para tu equipo',
        'Seguimiento y optimización continua de resultados',
        'Integración con tus herramientas y plataformas existentes'
      ],
      'automatizacion tariffs title': 'Tarifas de Consultoría',
      'automatizacion tariffs note': 'Nota: Todos los valores son en dólares y más impuestos.',
      'tipo de servicio': 'Tipo de servicio',
      'descripción': 'Descripción',
      'valor por hora o fracción': 'Valor por hora o fracción',
      'automatizacion tariffs table': [
        {
          type: 'Asesoría comercial',
          description: 'Orientación estratégica y comercial sobre servicios, procesos o soluciones.',
          price: '$35 USD'
        },
        {
          type: 'Asesoría técnica y comercial',
          description: 'Sesiones con análisis técnico especializado y participación de ingeniería.',
          price: '$55 USD'
        },
        {
          type: 'Soporte operativo básico',
          description: 'Ejecución de tareas puntuales de apoyo operativo.',
          price: '$14 USD'
        }
      ],
      'automatizacion features': ['Diagnóstico digital', 'Estrategia personalizada', 'Implementación guiada', 'Capacitación'],
      'asesoria title': 'Asesoría en Comunicación',
      'asesoria subtitle': 'Estrategia multicanal para tu empresa',
      'asesoria description': 'Te asesoramos en el diseño y ejecución de campañas de comunicación masiva a través de múltiples canales: SMS, Mensajes de Voz, Email y WhatsApp. Organizamos tus bases de datos, definimos la estrategia por canal y te acompañamos en cada envío. Tus datos de contacto siempre son tuyos - nosotros solo te ayudamos a usarlos de forma inteligente.',
      'asesoria feature 1 title': 'Campañas multicanal coordinadas',
      'asesoria feature 1 description': 'Diseñamos campañas que combinan SMS, Mensajes de Voz, Email y WhatsApp de forma coordinada. Cada canal cumple un rol específico: el SMS para la urgencia, el Email para el detalle, la Voz para el impacto personal y WhatsApp para la conversación directa. Una estrategia integrada que maximiza el alcance y la efectividad.',
      'asesoria feature 2 title': 'Organización y limpieza de bases de datos',
      'asesoria feature 2 description': 'Antes de cualquier envío, organizamos y depuramos tu base de datos. Eliminamos duplicados, corregimos formatos, validamos correos y números telefónicos, y segmentamos tus contactos por criterios relevantes para tu negocio. Una base de datos limpia es la base de toda campaña exitosa.',
      'asesoria feature 3 title': 'Tus datos, tu propiedad',
      'asesoria feature 3 description': 'Los datos de tus contactos son exclusivamente tuyos. Nosotros actuamos como asesores y operadores técnicos, pero la base de datos siempre permanece bajo tu control y propiedad. No compartimos, vendemos ni utilizamos tus contactos para ningún fin ajeno a tus campañas.',
      'asesoria feature 4 title': 'Segmentación inteligente por canal',
      'asesoria feature 4 description': 'No todos los contactos responden igual en cada canal. Analizamos el comportamiento de tu audiencia para determinar quién recibe SMS, quién recibe Email, quién prefiere WhatsApp y quién responde mejor a mensajes de Voz. Así cada mensaje llega por el canal más efectivo.',
      'asesoria feature 5 title': 'Planificación y calendario de envíos',
      'asesoria feature 5 description': 'Definimos junto a ti un calendario de campañas con fechas, horarios óptimos, canales y mensajes. Programamos los envíos para que se ejecuten en el momento de mayor impacto, evitando saturar a tus contactos y respetando las mejores prácticas de comunicación masiva.',
      'asesoria feature 6 title': 'Reportes y análisis de resultados',
      'asesoria feature 6 description': 'Después de cada campaña recibes un reporte detallado: tasas de entrega, apertura, clics, respuestas y conversiones por canal. Analizamos los resultados contigo para optimizar las siguientes campañas y mejorar continuamente el retorno de tu inversión.',
      'asesoria cta': 'Solicitar asesoría',
      'asesoria benefits': [
        'Estrategia personalizada combinando SMS, Voz, Email y WhatsApp',
        'Base de datos organizada, limpia y segmentada antes de cada envío',
        'Propiedad total de tus datos de contacto - siempre son tuyos',
        'Mayor efectividad al usar el canal correcto para cada audiencia',
        'Calendario de campañas planificado con horarios óptimos de envío',
        'Reportes detallados de resultados por canal después de cada campaña',
        'Cumplimiento de normativas de protección de datos y privacidad',
        'Acompañamiento continuo de nuestro equipo de expertos en cada paso'
      ],
      'asesoria features': ['Estrategia multicanal', 'Organización de datos', 'Optimización de campañas', 'Análisis de resultados'],
      'asesoria benefits': ['Resultados medibles', 'Datos seguros', 'Estrategia efectiva', 'Mejora continua'],
      // SMS Pricing
      'sms pricing title': 'Precios de SMS Masivos',
      'sms pricing subtitle': 'Planes de mensajería de texto',
      'sms pricing description': 'Envía mensajes de texto masivos con las mejores tarifas del mercado. Plataforma intuitiva, altas tasas de entrega y reportes en tiempo real.',
      'sms pricing plan 1': 'Plan #1',
      'sms pricing plan 1 desc': 'De 150.001 a 250.000 SMS',
      'sms pricing plan 2': 'Plan #2',
      'sms pricing plan 2 desc': 'De 100.001 a 150.000 SMS',
      'sms pricing plan 3': 'Plan #3',
      'sms pricing plan 3 desc': 'De 50.001 a 100.000 SMS',
      'sms pricing plan 4': 'Plan #4',
      'sms pricing plan 4 desc': 'De 15.001 a 50.000 SMS',
      'sms pricing plan 5': 'Plan #5',
      'sms pricing plan 5 desc': 'De 10.001 a 15.000 SMS',
      'sms pricing plan 6': 'Plan #6',
      'sms pricing plan 6 desc': 'De 5.000 a 10.000 SMS',
      'sms pricing unit': 'por SMS',
      'sms pricing phrases': [
        'Nuestros acuerdos comerciales con los operadores locales garantizan un alto impacto de su mensaje en el móvil del destinatario, con tasas de entrega superiores al 95%.',
        'La plataforma de envío es completamente web, de fácil uso e intuitiva, lo que permite que cualquier miembro de tu equipo administre campañas sin necesidad de conocimientos técnicos.',
        'Los SMS doble vía permiten que tu cliente te responda de forma gratuita, abriendo un canal de comunicación bidireccional que mejora la interacción y la satisfacción.',
        'Programa tus campañas para envío inmediato o posterior, con la opción de esperar hasta 72 horas para que el mensaje se entregue cuando el móvil entre en cobertura.',
        'Vincula redes sociales, páginas web, números de WhatsApp y mucho más dentro del mensaje de texto para llevar a tus clientes directamente a la acción que deseas.'
      ],
      // Email Pricing
      'email pricing title': 'Precios de Email Masivos',
      'email pricing subtitle': 'Planes de email marketing',
      'email pricing description': 'Crea y gestiona campañas de email marketing interactivas con diseño profesional, seguimiento avanzado y métricas detalladas para optimizar tus resultados.',
      'email pricing plan 1': 'Plan #1',
      'email pricing plan 1 desc': 'De 150.001 a 250.000 emails',
      'email pricing plan 2': 'Plan #2',
      'email pricing plan 2 desc': 'De 100.001 a 150.000 emails',
      'email pricing plan 3': 'Plan #3',
      'email pricing plan 3 desc': 'De 50.001 a 100.000 emails',
      'email pricing plan 4': 'Plan #4',
      'email pricing plan 4 desc': 'De 15.001 a 50.000 emails',
      'email pricing plan 5': 'Plan #5',
      'email pricing plan 5 desc': 'De 10.001 a 15.000 emails',
      'email pricing plan 6': 'Plan #6',
      'email pricing plan 6 desc': 'De 5.000 a 10.000 emails',
      'email pricing unit': 'por email',
      'email pricing phrases': [
        'El módulo de email te permite crear y gestionar campañas interactivas con un editor visual drag & drop que no requiere conocimientos de diseño ni programación.',
        'Segmenta tu audiencia con filtros avanzados para enviar el mensaje correcto a la persona correcta en el momento adecuado, maximizando las tasas de apertura y conversión.',
        'Realiza pruebas A/B de asuntos, contenido y horarios de envío para descubrir qué funciona mejor con tu audiencia y optimizar cada campaña de forma continua.',
        'Obtén métricas detalladas de cada campaña: tasas de apertura, clics, rebotes, desuscripciones y conversiones, todo en un dashboard intuitivo y en tiempo real.',
        'Automatiza secuencias de correos para nutrir leads, dar la bienvenida a nuevos suscriptores, recuperar carritos abandonados y mantener a tu audiencia comprometida.'
      ],
      // Voice Pricing
      'voice pricing title': 'Precios de SMS de Voz Masivos',
      'voice pricing subtitle': 'Planes de mensajes de voz',
      'voice pricing description': 'Envía mensajes de voz automatizados a móviles y teléfonos fijos. Ideal para campañas de cobranza, recordatorios, convocatorias y comunicaciones masivas con alto impacto.',
      'voice pricing plan 1': 'Plan #1',
      'voice pricing plan 1 desc': 'De 150.001 a 250.000 llamadas',
      'voice pricing plan 2': 'Plan #2',
      'voice pricing plan 2 desc': 'De 100.001 a 150.000 llamadas',
      'voice pricing plan 3': 'Plan #3',
      'voice pricing plan 3 desc': 'De 50.001 a 100.000 llamadas',
      'voice pricing plan 4': 'Plan #4',
      'voice pricing plan 4 desc': 'De 15.001 a 50.000 llamadas',
      'voice pricing plan 5': 'Plan #5',
      'voice pricing plan 5 desc': 'De 10.001 a 15.000 llamadas',
      'voice pricing plan 6': 'Plan #6',
      'voice pricing plan 6 desc': 'De 5.000 a 10.000 llamadas',
      'voice pricing unit': 'por llamada',
      'voice pricing phrases': [
        'La solución de Voz es un servicio automatizado de entrega de mensajes de voz que llega tanto a móviles como a teléfonos fijos, garantizando el máximo alcance de tu campaña.',
        'Ideal para campañas de cobranza automatizada: envía recordatorios de pago personalizados con el nombre del cliente, monto adeudado y fecha límite, todo de forma automática.',
        'La función text-to-speech convierte tu texto en voz natural en español, eliminando la necesidad de grabar mensajes y permitiéndote actualizar el contenido al instante.',
        'La interacción por teclado (DTMF) permite que el destinatario responda durante la llamada, confirmando citas, seleccionando opciones o siendo transferido a un agente en vivo.',
        'Programa tus campañas de voz en los horarios de mayor efectividad y recibe reportes detallados de llamadas completadas, contestadas, buzón de voz y números no disponibles.'
      ],
      // Email Validation Pricing
      'validation pricing title': 'Precios de Validación de Correos',
      'validation pricing subtitle': 'Limpieza y verificación de bases de datos',
      'validation pricing description': 'Valida y limpia tu base de datos de correos electrónicos antes de enviar campañas. Reduce rebotes, protege tu reputación de envío y mejora la entregabilidad de tus emails.',
      'validation pricing plan 1': 'Plan #1',
      'validation pricing plan 1 desc': 'De 150.001 a 250.000 correos',
      'validation pricing plan 2': 'Plan #2',
      'validation pricing plan 2 desc': 'De 100.001 a 150.000 correos',
      'validation pricing plan 3': 'Plan #3',
      'validation pricing plan 3 desc': 'De 50.001 a 100.000 correos',
      'validation pricing plan 4': 'Plan #4',
      'validation pricing plan 4 desc': 'De 15.001 a 50.000 correos',
      'validation pricing plan 5': 'Plan #5',
      'validation pricing plan 5 desc': 'De 10.001 a 15.000 correos',
      'validation pricing plan 6': 'Plan #6',
      'validation pricing plan 6 desc': 'De 5.000 a 10.000 correos',
      'validation pricing unit': 'por correo',
      'validation pricing phrases': [
        'La validación de correos electrónicos elimina direcciones inválidas, inexistentes y de riesgo de tu base de datos, reduciendo la tasa de rebote y protegiendo tu reputación de envío.',
        'Detectamos spam traps, correos temporales y direcciones de rol (info@, admin@) que pueden afectar negativamente la entregabilidad de tus campañas de email marketing.',
        'Cada correo es clasificado por nivel de riesgo - válido, arriesgado o inválido - para que tomes decisiones informadas sobre a quién enviar y a quién no.',
        'La validación en tiempo real a través de nuestra API permite verificar correos al momento del registro en tu sitio web, evitando que entren datos incorrectos a tu base desde el inicio.',
        'Mantener una base de datos limpia no solo mejora tus métricas de email marketing, sino que reduce costos al no enviar a direcciones que nunca recibirán tu mensaje.'
      ],
      // Pricing Features
      'feature max volume': 'Máximo volumen',
      'feature dedicated infrastructure': 'Infraestructura dedicada',
      'feature sla guaranteed': 'SLA garantizado',
      'feature whatsapp support': 'Soporte por WhatsApp',
      'feature very high volume': 'Volumen muy alto',
      'feature high volume': 'Volumen alto',
      'feature dedicated short code': 'Código corto dedicado',
      'feature crm integration': 'Integración CRM',
      'feature sms up to 1120 chars': 'SMS hasta 1120 caracteres',
      'feature integration api': 'API de integración',
      'feature advanced statistics': 'Estadísticas avanzadas',
      'feature standard two way sms': 'SMS estándar y doble vía',
      'feature sending scheduling': 'Programación de envíos',
      'feature contact segmentation': 'Segmentación de contactos',
      'feature standard sms sending': 'Envío de SMS estándar',
      'feature basic control panel': 'Panel de control básico',
      'feature delivery reports': 'Reportes de entrega',
      'feature unlimited contacts': 'Contactos ilimitados',
      'feature dedicated ip': 'IP dedicada',
      'feature dynamic personalization': 'Personalización dinámica',
      'feature up to 25000 contacts': 'Hasta 25.000 contactos',
      'feature sequence automation': 'Automatización de secuencias',
      'feature drag drop editor': 'Editor drag & drop',
      'feature up to 5000 contacts': 'Hasta 5.000 contactos',
      'feature basic segmentation': 'Segmentación básica',
      'feature predefined templates': 'Plantillas prediseñadas',
      'feature up to 1000 contacts': 'Hasta 1.000 contactos',
      'feature basic statistics': 'Estadísticas básicas',
      'feature unlimited calls': 'Llamadas ilimitadas',
      'feature multiple simultaneous campaigns': 'Múltiples campañas simultáneas',
      'feature dtmf interaction': 'Interacción por teclado (DTMF)',
      'feature up to 10000 calls': 'Hasta 10.000 llamadas',
      'feature text to speech spanish': 'Text-to-speech en español',
      'feature up to 2000 calls': 'Hasta 2.000 llamadas',
      'feature schedule programming': 'Programación de horarios',
      'feature prerecorded messages': 'Mensajes pregrabados',
      'feature up to 500 calls': 'Hasta 500 llamadas',
      'feature basic reports': 'Reportes básicos',
      'feature up to 100000 emails': 'Hasta 100.000 correos',
      'feature automatic validation': 'Validación automática',
      'feature up to 25000 emails': 'Hasta 25.000 correos',
      'feature real time validation': 'Validación en tiempo real',
      'feature integration api validation': 'API de integración',
      'feature up to 5000 emails': 'Hasta 5.000 correos',
      'feature spam traps detection': 'Detección de spam traps',
      'feature risk classification': 'Clasificación por riesgo',
      'feature up to 1000 emails validation': 'Hasta 1.000 correos',
      'feature invalid detection': 'Detección de inválidos',
      'feature downloadable report': 'Reporte descargable',
      // Pricing Layout Elements
      'pricing back to home': 'Volver al inicio',
      'pricing plans and rates title': 'Planes y tarifas',
      'pricing plans and rates description': 'Selecciona el plan que mejor se adapte a tus necesidades. Los precios se actualizarán próximamente.',
      'pricing get quote': 'Cotizar',
      'pricing important note': 'Nota importante:',
      'pricing important note text': 'El precio que se relaciona es el valor unitario de cada SMS. Todos los valores más IVA. Precios para Colombia.',
      'pricing why choose service title': '¿Por qué elegir este servicio?',
      'pricing need custom quote title': '¿Necesitas una cotización personalizada?',
      'pricing need custom quote description': 'Los precios varían según el volumen y el destino. Contáctanos para recibir una propuesta adaptada a tu empresa.',
      'pricing request quote': 'Solicitar cotización',
      'pricing send email': 'Enviar correo',
    },
  },
  en: {
    navbar: {
      inicio: 'Home',
      servicios: 'Services',
      precios: 'Pricing',
      contacto: 'Contact',
      contctanos: 'Contact us',
      chatbot: 'Chatbot',
      'ia para whatsapp': 'AI for WhatsApp',
      'apps con whatsapp': 'Apps with WhatsApp',
      omnicanalidad: 'Omnichannel',
      'catálogos de productos': 'Product catalogs',
      'mensajería masiva': 'Bulk messaging',
      'contact center': 'Contact Center',
      'consultoría de automatización': 'Automation consulting',
      'asesoría en comunicación masiva': 'Bulk communication advice',
      'sms masivos': 'Bulk SMS',
      'email masivos': 'Bulk Email',
      'sms de voz masivos': 'Bulk Voice SMS',
      'validación de correos': 'Email validation',
      consultoría: 'Consulting',
      'contactanos por whatsapp': 'Contact us on WhatsApp',
    },
    home: {
      'somos su puente de comunicación con el mundo': 'We are your communication bridge to the world',
      'servicios que impulsan tu negocio': 'Services that boost your business',
      'hablar con un asesor': 'Talk to an advisor',
      'escribir por whatsapp': 'Write on WhatsApp',
      'nuestras soluciones': 'Our solutions',
      'explora nuestras soluciones': 'Explore our solutions',
      'chatbot description': 'Automate customer service with intelligent bots on WhatsApp, Messenger, Telegram and Instagram.',
      'ia whatsapp description': 'Enhance your WhatsApp Business with artificial intelligence for contextual responses and advanced automation.',
      'apps whatsapp description': 'Develop custom applications for WhatsApp that integrate with your systems and processes.',
      'omnicanalidad description': 'Connect all your communication channels in one platform for an integrated experience.',
      'catalogos description': 'Show your products and catalogs directly on WhatsApp with integrated purchases.',
      'mensajeria description': 'Send mass messages through multiple channels with high open and delivery rates.',
      'contact center description': 'Centralize all your communications with an advanced multichannel contact center.',
      'automatizacion description': 'Optimize your processes with intelligent automation and customized workflows.',
      'asesoria description': 'Receive expert advice on mass communication and digital marketing strategies.',
      'por qué elegirnos': 'Why choose us?',
      'experiencia title': 'Over 10 years of experience',
      'experiencia description': 'Leaders in the mass communications market with thousands of satisfied customers.',
      'tecnologia title': 'Cutting-edge technology',
      'tecnologia description': 'Own platforms developed with the latest technologies and security standards.',
      'soporte title': '24/7 Support',
      'soporte description': 'Team of specialists available whenever you need us to resolve any questions.',
      'resultados title': 'Proven results',
      'resultados description': 'Over 95% delivery rate and guaranteed satisfaction in all our services.',
      'contactanos hoy': 'Contact us today',
      'desde 1993 conectando empresas': 'Connecting companies since 1993',
      'años de experiencia': 'Years of experience',
      'clientes satisfechos': 'Satisfied customers',
      'soluciones digitales': 'Digital solutions',
      'soluciones comunicacion digital': 'Digital communication solutions for companies: chatbots, WhatsApp API, omnichannel, bulk messaging and much more. All the support you need.',
      'servicio destacado': 'Featured service',
      'consultoria whatsapp title': 'Consulting to automate your business with WhatsApp Business API',
      'consultoria whatsapp description': 'We help you design flows, integrations and sales, support and follow-up processes to convert WhatsApp into a real commercial automation channel.',
      'ver consultoria': 'View consulting',
      'agenda tu cita': 'Schedule your appointment',
      'hablar por whatsapp': 'Talk on WhatsApp',
      'our solutions': 'Our solutions',
      'services that boost your business': 'Services that boost your business',
      'services subtitle': 'From intelligent chatbots to mass campaigns, we have everything you need to connect with your customers.',
      'sobre nosotros': 'About us',
      'about title': 'Over 30 years creating communication bridges',
      'about description': 'We are an agency dedicated to digital marketing in all its forms. We have been part of the market since 1993, seeking to help people, entrepreneurs, small and large companies achieve what they want.',
      'about evolution': 'Over these years we have advanced to deliver the best: in 2009 we emerged in telecommunications, in 2015 we started designing apps, and in 2021 we began producing bots. All to offer you new services that allow reaching more people.',
      'about features': [
        'Comprehensive support for each project',
        'Cutting-edge communication technology',
        'Expert digital marketing team',
        'Customized solutions for each business'
      ],
      'comience hoy': 'Start today',
      'su primera asesoría virtual': 'Your first virtual consultation',
      'nuestro equipo le diseñará': 'Our team will design a personalized solution for you',
      'enviar un correo': 'Send an email',
      'automatización': 'Automation',
      'ia': 'AI',
      'programación': 'Programming',
    },
    layout: {
      'características principales': 'Main features',
      'beneficios para tu empresa': 'Benefits for your company',
      'listo para comenzar': 'Ready to start',
      'servicios relacionados': 'Related services',
      'volver al inicio': 'Back to home',
      'descubre solucion': 'Discover everything this solution can do for your business',
      'contactanos hoy': 'Contact us today and receive a personalized consultation at no cost. Our team is ready to help you.',
    },
    automatizacion: {
      'consultoría de marketing de automatización': 'Automation Marketing Consulting',
      'estrategia y acompañamiento experto': 'Strategy and expert support',
      'tarifas de consultoría': 'Consultancy Rates',
      'asesoría comercial': 'Commercial advice',
      'asesoría técnica y comercial': 'Technical and commercial advice',
      'soporte operativo básico': 'Basic operational support',
      'solicitar consultoría': 'Request consulting',
    },
    pricing: {
      'sms title': 'Bulk SMS',
      'sms description': 'Send mass text messages with high open rates and guaranteed delivery.',
      'sms features': ['160-character standard SMS', 'Two-way SMS', 'Long SMS up to 1120 characters', 'Web platform', 'Scheduling', 'Real-time reports'],
      'sms plans': ['Basic Plan: Up to 1,000 SMS/month', 'Professional Plan: Up to 10,000 SMS/month', 'Enterprise Plan: Unlimited'],
      'email title': 'Bulk Email Marketing',
      'email description': 'Interactive email marketing campaigns with professional design and detailed metrics.',
      'email features': ['Drag & drop editor', 'Professional templates', 'Advanced segmentation', 'A/B testing', 'Detailed metrics'],
      'email plans': ['Starter Plan: Up to 5,000 emails/month', 'Growth Plan: Up to 50,000 emails/month', 'Enterprise Plan: Custom'],
      'voz title': 'Bulk Voice SMS',
      'voz description': 'Automated voice messages for collections, reminders and mass campaigns.',
      'voz features': ['Natural voice', 'Text-to-speech', 'Time scheduling', 'Delivery reports', 'DTMF interaction'],
      'voz plans': ['Basic Plan: Up to 500 calls/month', 'Plus Plan: Up to 5,000 calls/month', 'Pro Plan: Custom'],
      'validacion title': 'Email Validation',
      'validacion description': 'Verify and clean your email database to improve deliverability.',
      'validacion features': ['Real-time validation', 'Database cleaning', 'Quality reports', 'Integration API'],
      'validacion plans': ['Point verification: $0.01/email', 'Monthly subscription: From $50/month', 'Enterprise: Quote'],
    },
    common: {
      'ver más': 'See more',
      'solicitar': 'Request',
      'contactar': 'Contact',
      'características': 'Features',
      'beneficios': 'Benefits',
      'precio': 'Price',
      'planes': 'Plans',
      'inicio': 'Home',
      'servicios': 'Services',
      'contacto': 'Contact',
    },
    contact: {
      'conoce a alexander': 'Meet Alexander',
      'hola mucho gusto': 'Hello, nice to meet you!',
      'mi nombre es': 'My name is',
      'descripcion alexander': 'Director of Crear Comunicaciones. I am here to help you connect with your audience through innovative and effective digital communication solutions.',
      'reserva tu cita': 'Book your appointment',
      'escribeme por whatsapp': 'Write me on WhatsApp',
      'enviar correo': 'Send email',
      'agenda tu cita': 'Schedule your appointment',
    },
    footer: {
      'descripcion footer': 'We are your communication bridge to the world. Over 30 years helping companies connect with their customers through innovative digital solutions.',
      'envios masivos': 'Bulk messaging',
      'todos los derechos reservados': 'All rights reserved.',
    },
    massivePricing: {
      'nuestros servicios masivos': 'Our Bulk Messaging Services',
      'sms masivos title': 'Bulk SMS',
      'sms masivos description': 'Send mass text messages with high open rates. Available in three modalities: standard SMS, two-way SMS, and SMS up to 1120 characters.',
      'sms estandar': 'Standard SMS of 160 characters',
      'sms doble via': 'Two-way SMS for interaction',
      'sms largo': 'Long SMS up to 1120 characters',
      'plataforma web': 'Easy-to-use web platform',
      'programacion envios': 'Message scheduling',
      'reportes entrega': 'Real-time delivery reports',
      'personalizacion mensajes': 'Message personalization',
      'api integracion': 'API for system integration',
      'email masivos title': 'Bulk Email',
      'email masivos description': 'Interactive email marketing campaigns with professional design, advanced tracking and detailed metrics to optimize your results.',
      'editor plantillas': 'Drag & drop template editor',
      'personalizacion dinamica': 'Dynamic content personalization',
      'segmentacion avanzada': 'Advanced contact segmentation',
      'ab testing': 'A/B testing for subjects and content',
      'metricas email': 'Metrics: opens, clicks, bounces',
      'automatizacion secuencias': 'Sequence automation',
      'cumplimiento anti spam': 'Anti-spam compliance',
      'sms voz masivos title': 'Bulk Voice SMS',
      'sms voz masivos description': 'Automated voice messages for collections, reminders, announcements and mass campaigns. Your message arrives directly as a voice call.',
      'voz natural': 'Natural voice',
      'programacion voz': 'Voice scheduling',
      'reportes voz': 'Voice call reports',
      'personalizacion voz': 'Voice personalization',
      'api voz': 'Voice API',
      'conoce mas': 'Learn more',
    },
    services: {
      'chatbot title': 'Intelligent Chatbots',
      'chatbot subtitle': 'Conversational Automation',
      'chatbot description': 'We design and develop custom chatbots for your company\'s main communication channels: WhatsApp, Messenger, Telegram and Instagram. Automate customer service, generate leads and close sales 24 hours a day, 7 days a week.',
      'chatbot feature 1 title': 'Multi-platform',
      'chatbot feature 1 description': 'A single bot that works on WhatsApp, Facebook Messenger, Telegram and Instagram. Your customers contact you wherever they prefer and receive the same quality experience.',
      'chatbot feature 2 title': 'Intelligent Conversational Flows',
      'chatbot feature 2 description': 'We design decision trees and conversation flows adapted to your business. The bot guides the user step by step until resolving their query or completing an action.',
      'chatbot feature 3 title': 'AI Responses',
      'chatbot feature 3 description': 'Integration with artificial intelligence to understand your customers\' natural language and offer contextual responses, not just predefined responses.',
      'chatbot feature 4 title': 'Human Agent Transfer',
      'chatbot feature 4 description': 'When the query requires personalized attention, the bot transfers the conversation to a human agent transparently, without the customer losing context.',
      'chatbot feature 5 title': 'Metrics and Reports',
      'chatbot feature 5 description': 'Control panel with real-time statistics: conversations attended, resolution rate, response times and customer satisfaction.',
      'chatbot feature 6 title': 'CRM Integration',
      'chatbot feature 6 description': 'We connect the chatbot with your customer management system to automatically register leads, update data and trigger follow-up actions.',
      'chatbot cta': 'Request my Chatbot',
      'request chatbot': 'Request my Chatbot',
      'send email': 'Send email',
      'related services': 'Related services',
      'chatbot benefits': [
        '24/7 customer service without interruptions',
        'Reduction of up to 70% in service costs',
        'Immediate response to frequent queries',
        'Automatic generation of qualified leads',
        'Scalability: attends thousands of simultaneous conversations',
        'Improves customer satisfaction with fast responses',
        'Frees your team for higher-value tasks',
        'Quick implementation without technical complications'
      ],
      'ia whatsapp title': 'AI for WhatsApp Business',
      'ia whatsapp subtitle': 'Conversational Artificial Intelligence',
      'ia whatsapp description': 'Power your WhatsApp Business with next-generation artificial intelligence. Our AI solutions enable your company to offer intelligent, personalized and contextual responses through the most used messaging channel in the world.',
      'ia whatsapp feature 1 title': 'Natural Language Understanding',
      'ia whatsapp feature 1 description': 'The AI understands what your customers write, regardless of how they express it. Recognizes intentions, extracts key information and responds naturally and coherently.',
      'ia whatsapp feature 2 title': 'Intelligent Sales Automation',
      'ia whatsapp feature 2 description': 'From the first query to closing, the AI guides the customer through the sales funnel: presents products, responds to objections, calculates prices and schedules appointments.',
      'ia whatsapp feature 3 title': 'Continuous Learning',
      'ia whatsapp feature 3 description': 'The system learns from each interaction to improve its responses over time. The more it is used, the more accurate and efficient it becomes.',
      'ia whatsapp feature 4 title': 'Contextual Personalization',
      'ia whatsapp feature 4 description': 'The AI remembers conversation history and customer data to offer personalized responses, relevant recommendations and unique treatment.',
      'ia whatsapp feature 5 title': 'WhatsApp Business API Integration',
      'ia whatsapp feature 5 description': 'Direct connection with the official WhatsApp Business API to ensure stability, security and compliance with Meta policies.',
      'ia whatsapp feature 6 title': 'Sentiment Analysis',
      'ia whatsapp feature 6 description': 'Detects the customer\'s emotional state in real time to adapt the tone of responses and escalate to a human agent when necessary.',
      'ia whatsapp cta': 'Activate AI in my WhatsApp',
      'ia whatsapp benefits': [
        'Intelligent and contextual responses 24 hours a day',
        'Significant increase in conversion rate',
        'Response time reduction to seconds',
        'Personalized attention at massive scale',
        'Native integration with WhatsApp Business API',
        'Detailed interaction and performance reports',
        'Automatic escalation to human agents',
        'Compliance with privacy and data policies'
      ],
      'apps whatsapp title': 'Apps with WhatsApp API',
      'apps whatsapp subtitle': 'Integrated application development',
      'apps whatsapp description': 'We develop custom mobile and web applications that integrate directly with the WhatsApp Business API. From reservation systems to e-commerce platforms, we bring the power of WhatsApp to your business application.',
      'apps whatsapp feature 1 title': 'Custom applications',
      'apps whatsapp feature 1 description': 'We design and develop completely customized applications according to the specific needs of your business, with native WhatsApp Business API integration.',
      'apps whatsapp feature 2 title': 'Transactional notifications',
      'apps whatsapp feature 2 description': 'Send order confirmations, shipping updates, appointment reminders and more directly to your customers\' WhatsApp from your application.',
      'apps whatsapp feature 3 title': 'Reservation and scheduling systems',
      'apps whatsapp feature 3 description': 'Applications that allow your customers to schedule appointments, reserve services and receive confirmations and automatic reminders via WhatsApp.',
      'apps whatsapp feature 4 title': 'E-commerce platforms',
      'apps whatsapp feature 4 description': 'Online stores with shopping cart, integrated payments and direct customer communication via WhatsApp for support and order tracking.',
      'apps whatsapp feature 5 title': 'Dashboards and control panels',
      'apps whatsapp feature 5 description': 'Administrative interfaces to manage your business, with real-time reports and the ability to communicate with customers directly from the panel.',
      'apps whatsapp feature 6 title': 'APIs and microservices',
      'apps whatsapp feature 6 description': 'Modern architecture based on APIs that allows integrating WhatsApp with your existing systems: ERP, CRM, billing and more.',
      'apps whatsapp cta': 'Quote my application',
      'apps whatsapp benefits': [
        'Custom applications for your business model',
        'Direct integration with WhatsApp Business API',
        'Bidirectional communication with customers from the app',
        'Business process automation',
        'Scalability to grow with your business',
        'Technical support and continuous maintenance',
        'Responsive design for mobile and desktop',
        'Security and protection of business data'
      ],
      'omnicanalidad title': 'Omnichannel Platform',
      'omnicanalidad subtitle': 'All your channels in one place',
      'omnicanalidad description': 'We unify all your company\'s digital communication channels - WhatsApp, Messenger, Telegram, Instagram and more - in a single centralized platform. We provide complete support from implementation to continuous optimization of your omnichannel operation.',
      'omnicanalidad feature 1 title': 'Unified inbox',
      'omnicanalidad feature 1 description': 'All conversations from WhatsApp, Messenger, Telegram, Instagram and other channels arrive in a single inbox. Your agents don\'t need to switch between applications.',
      'omnicanalidad feature 2 title': 'Multi-agent management',
      'omnicanalidad feature 2 description': 'Assign conversations to different agents or teams according to predefined rules: by topic, by language, by priority or by availability.',
      'omnicanalidad feature 3 title': 'Comprehensive support',
      'omnicanalidad feature 3 description': 'We don\'t just implement the platform: we support you throughout the process. From initial setup to team training and continuous optimization.',
      'omnicanalidad feature 4 title': 'Complete customer history',
      'omnicanalidad feature 4 description': 'Access the complete interaction history of each customer regardless of which channel they communicated through. Total context for exceptional service.',
      'omnicanalidad feature 5 title': 'Automations and flows',
      'omnicanalidad feature 5 description': 'Configure automatic responses, welcome messages, satisfaction surveys and workflows that activate based on customer behavior.',
      'omnicanalidad feature 6 title': 'Reports and metrics',
      'omnicanalidad feature 6 description': 'Dashboard with key metrics: response times, customer satisfaction, agent productivity, volume by channel and conversation trends.',
      'omnicanalidad cta': 'Implement omnichannel',
      'omnicanalidad benefits': [
        'One place to manage all digital channels',
        'Complete support from implementation',
        'Improved response times and customer satisfaction',
        'Total visibility of service operation',
        'Training and continuous support for your team',
        'Scalability: add channels and agents as you grow',
        'Reduction of lost or unanswered messages',
        'Integration with CRM and existing tools'
      ],
      'catalogos title': 'Product Catalogs',
      'catalogos subtitle': 'Your store inside WhatsApp',
      'catalogos description': 'We connect Meta\'s product catalog with the WhatsApp Business API so your customers can explore your inventory, select products and place orders directly from the WhatsApp conversation. A smooth shopping experience without leaving the chat.',
      'catalogos feature 1 title': 'Integrated Meta catalog',
      'catalogos feature 1 description': 'We link your Meta (Facebook/Instagram) product catalog directly with WhatsApp Business API. Your products appear inside the chat with photos, descriptions and prices.',
      'catalogos feature 2 title': 'Shopping cart in WhatsApp',
      'catalogos feature 2 description': 'Your customers can add products to cart, modify quantities and send their complete order without leaving the WhatsApp conversation.',
      'catalogos feature 3 title': 'Automatic synchronization',
      'catalogos feature 3 description': 'Changes in your Meta catalog are automatically reflected in WhatsApp. Update prices, availability and descriptions from one place.',
      'catalogos feature 4 title': 'Product messages',
      'catalogos feature 4 description': 'Send individual products or complete collections as interactive messages. The customer can see details, images and add to cart with one tap.',
      'catalogos feature 5 title': 'Order management',
      'catalogos feature 5 description': 'Receive and manage orders that arrive via WhatsApp. Automatic confirmation, status tracking and customer notifications at each stage.',
      'catalogos feature 6 title': 'Sales analytics',
      'catalogos feature 6 description': 'Reports of most viewed, most sold products, conversion rates and purchasing behavior of your customers within WhatsApp.',
      'catalogos cta': 'Activate my catalog',
      'catalogos benefits': [
        'Your customers buy without leaving WhatsApp',
        'Catalog always updated and synchronized with Meta',
        'Conversational and natural shopping experience',
        'Increase in sales conversion rate',
        'Centralized management of products and inventory',
        'Automatic order status notifications',
        'Compatible with any type of product or service',
        'Reduction of friction in the purchase process'
      ],
      'mensajeria title': 'Bulk Messaging',
      'mensajeria description': 'Complete platform for bulk SMS, Email and Voice messaging with high delivery rates and real-time reports.',
      'mensajeria subtitle': 'Bulk communication experts',
      'mensajeria hero': 'Take your messages to the next level with a platform designed to scale in speed and delivery capacity. SMS, Email and Voice Messages to reach thousands of people in seconds.',
      'mensajeria sms types title': 'Available SMS types',
      'mensajeria sms types description': 'These services are done from an easy-to-use and intuitive web platform that allows you to send text messages to all mobile phones you want.',
      'mensajeria sms standard title': 'Standard SMS',
      'mensajeria sms standard description': 'Text messages up to 160 characters. Ideal for notifications, alerts, confirmations and direct communications with high open rates.',
      'mensajeria sms doble via title': 'Two-way SMS',
      'mensajeria sms doble via description': 'Allows your customer to respond to you for free. Ideal for surveys, interactive confirmations and bidirectional communication with your audience.',
      'mensajeria sms largo title': 'SMS up to 1120 Characters',
      'mensajeria sms largo description': 'Extended messages for when you need to communicate more information. Perfect for detailed promotions, instructions and enriched content.',
      'mensajeria emails title': 'Emails',
      'mensajeria emails description': 'Mass email campaigns with customizable designs. Ideal for newsletters, promotions and long-format communications with detailed opening tracking.',
      'mensajeria whatsapp title': 'WhatsApp',
      'mensajeria whatsapp description': 'Direct communication with your customers through the most used messaging channel in the world. Ideal for customer service, sales and transactional notifications.',
      'mensajeria voz title': 'Voice Messages',
      'mensajeria voz description': 'Automated calls with pre-recorded voice messages. Ideal for urgent alerts, important reminders and communications that require immediate attention.',
      'mensajeria validation title': 'Email Validation',
      'mensajeria validation description': 'Verify the quality of your email databases',
      'mensajeria ver precios': 'See prices',
      'mensajeria platform title': 'Our delivery platform',
      'mensajeria platform description': 'Segment your market according to your business marketing needs and reach your audience with precision.',
      'mensajeria feature 1 title': 'Effective delivery engine',
      'mensajeria feature 1 description': 'Our solution ensures effective delivery of mass communication. Reach more customers with a faster and more reliable SMS service.',
      'mensajeria feature 2 title': 'High delivery rates',
      'mensajeria feature 2 description': 'Commercial agreements with local operators guarantee high impact of your message on the recipient\'s mobile. Deliveries when entering coverage or turning on.',
      'mensajeria feature 3 title': 'Detailed statistics',
      'mensajeria feature 3 description': 'Follow the sending statistics in detail and the impact on your audience. Control the budget, adjust the changes and launch other campaigns again.',
      'mensajeria feature 4 title': 'Smart links',
      'mensajeria feature 4 description': 'Link social networks, web pages, WhatsApp numbers and much more in the text message. Reach each of your customers in a personalized way.',
      'mensajeria feature 5 title': 'Campaign scheduling',
      'mensajeria feature 5 description': 'Schedule campaigns from our web platform to send them immediately or later. Up to 72 hours waiting for delivery in coverage.',
      'mensajeria feature 6 title': 'Dedicated short code',
      'mensajeria pricing title': 'Check our prices',
      'mensajeria pricing description': 'We have plans adapted to every need. Check the rates of each service or request a personalized quote.',
      'mensajeria pricing cta': 'Request personalized quote',
      'mensajeria pricing links': ['SMS Prices', 'Email Prices', 'Voice Prices', 'Email Validation'],
      'mensajeria feature 6 description': 'Messages are sent through a programmed short code. Manage your own sending campaigns from an easy-to-use and intuitive web platform.',
      'contact center feature 1 title': 'Complete support',
      'contact center feature 1 description': 'We provide complete support from planning to daily operation. We design the strategy, implement the technology and train your team.',
      'contact center feature 2 title': 'Call campaigns',
      'contact center feature 2 description': 'We design and execute outbound call campaigns for collections, surveys, event invitations, telesales, appointment confirmations and more.',
      'contact center feature 3 title': 'Call reception',
      'contact center feature 3 description': 'Customer service lines with intelligent IVR, automatic call distribution, waiting queues and recording for quality control.',
      'contact center feature 4 title': 'Multichannel integration',
      'contact center feature 4 description': 'The contact center doesn\'t just handle calls: it integrates WhatsApp, email, web chat and social media for a unified service experience.',
      'contact center feature 5 title': 'Real-time monitoring',
      'contact center feature 5 description': 'Live supervision of the operation: active calls, waiting times, agent availability and performance metrics instantly.',
      'contact center feature 6 title': 'Reports and analysis',
      'contact center feature 6 description': 'Detailed reports of productivity, service quality, management times, resolution rates and customer satisfaction.',
      'contact center cta': 'Implement Contact Center',
      'contact center benefits': [
        'Comprehensive support throughout the operation',
        'State-of-the-art technological infrastructure',
        'Call campaigns for collections and sales',
        'Professional training for your agent team',
        'Real-time monitoring and quality control',
        'Scalability according to your operation volume',
        'Integration with digital channels (WhatsApp, email, chat)',
        'Reduction of operating costs with automation'
      ],
      'automatizacion title': 'Automation Consulting',
      'automatizacion subtitle': 'Strategy and expert support',
      'automatizacion description': 'We design and implement automated marketing strategies for your company. From planning to execution, we support you every step so your communication campaigns work intelligently, efficiently and without manual intervention.',
      'automatizacion feature 1 title': 'Communication diagnosis',
      'automatizacion feature 1 description': 'We analyze your current communication channels, workflows and customer contact points to identify automation opportunities that generate real impact.',
      'automatizacion feature 2 title': 'Automated flow design',
      'automatizacion feature 2 description': 'We create automated communication flows that activate based on customer behavior: welcome, follow-up, reactivation, post-sales and more.',
      'automatizacion feature 3 title': 'Channel integration',
      'automatizacion feature 3 description': 'We connect all your channels - WhatsApp, SMS, Email, Voice - in a unified strategy where each channel plays a specific role in the customer journey.',
      'automatizacion feature 4 title': 'Intelligent segmentation',
      'automatizacion feature 4 description': 'We define audience segments based on behavior, demographics and interaction history so each message reaches the right person at the right time.',
      'automatizacion feature 5 title': 'Implementation and training',
      'automatizacion feature 5 description': 'We don\'t just design the strategy: we implement it on your platform and train your team to operate, adjust and optimize automations autonomously.',
      'automatizacion feature 6 title': 'Measurement and continuous optimization',
      'automatizacion feature 6 description': 'We establish clear KPIs and conduct periodic monitoring to measure the performance of each automation, identify improvements and scale what works.',
      'automatizacion cta': 'Request consulting',
      'automatizacion benefits': [
        'Custom strategy for your business model',
        'Multi-channel campaign automation',
        'Reduction of manual and repetitive tasks',
        'Greater efficiency in customer communication',
        'Increase in conversion and retention rates',
        'Complete training for your team',
        'Continuous monitoring and result optimization',
        'Integration with your existing tools and platforms'
      ],
      'automatizacion tariffs title': 'Consulting Rates',
      'automatizacion tariffs note': 'Note: All values are in USD plus taxes.',
      'tipo de servicio': 'Service type',
      'descripción': 'Description',
      'valor por hora o fracción': 'Value per hour or fraction',
      'automatizacion tariffs table': [
        {
          type: 'Commercial advice',
          description: 'Strategic and commercial guidance on services, processes or solutions.',
          price: '$35 USD'
        },
        {
          type: 'Technical and commercial advice',
          description: 'Sessions with specialized technical analysis and engineering participation.',
          price: '$55 USD'
        },
        {
          type: 'Basic operational support',
          description: 'Execution of specific operational support tasks.',
          price: '$14 USD'
        }
      ],
      'automatizacion features': ['Digital diagnosis', 'Custom strategy', 'Guided implementation', 'Training'],
      'asesoria title': 'Communication Consulting',
      'asesoria subtitle': 'Multichannel strategy for your business',
      'asesoria description': 'We advise on the design and execution of mass communication campaigns across multiple channels: SMS, Voice Messages, Email and WhatsApp. We organize your databases, define channel strategies and support you in every shipment. Your contact data is always yours - we just help you use it intelligently.',
      'asesoria feature 1 title': 'Coordinated multichannel campaigns',
      'asesoria feature 1 description': 'We design campaigns that combine SMS, Voice Messages, Email and WhatsApp in a coordinated way. Each channel plays a specific role: SMS for urgency, Email for detail, Voice for personal impact and WhatsApp for direct conversation. An integrated strategy that maximizes reach and effectiveness.',
      'asesoria feature 2 title': 'Database organization and cleaning',
      'asesoria feature 2 description': 'Before any shipment, we organize and clean your database. We remove duplicates, correct formats, validate emails and phone numbers, and segment your contacts by criteria relevant to your business. A clean database is the foundation of every successful campaign.',
      'asesoria feature 3 title': 'Your data, your property',
      'asesoria feature 3 description': 'Your contact data is exclusively yours. We act as advisors and technical operators, but the database always remains under your control and ownership. We do not share, sell or use your contacts for any purpose other than your campaigns.',
      'asesoria feature 4 title': 'Intelligent channel segmentation',
      'asesoria feature 4 description': 'Not all contacts respond the same on each channel. We analyze your audience behavior to determine who receives SMS, who receives Email, who prefers WhatsApp and who responds better to Voice messages. This way each message arrives through the most effective channel.',
      'asesoria feature 5 title': 'Planning and shipment scheduling',
      'asesoria feature 5 description': 'We define with you a campaign calendar with dates, optimal times, channels and messages. We schedule shipments to execute at the time of greatest impact, avoiding saturating your contacts and respecting best practices for mass communication.',
      'asesoria feature 6 title': 'Reports and results analysis',
      'asesoria feature 6 description': 'After each campaign you receive a detailed report: delivery rates, opening, clicks, responses and conversions by channel. We analyze the results with you to optimize subsequent campaigns and continuously improve your return on investment.',
      'asesoria cta': 'Request consulting',
      'asesoria benefits': [
        'Custom strategy combining SMS, Voice, Email and WhatsApp',
        'Organized, clean and segmented database before each shipment',
        'Total ownership of your contact data - always yours',
        'Greater effectiveness by using the correct channel for each audience',
        'Planned campaign calendar with optimal shipping times',
        'Detailed results reports by channel after each campaign',
        'Compliance with data protection and privacy regulations',
        'Continuous support from our team of experts at every step'
      ],
      // SMS Pricing
      'sms pricing title': 'Bulk SMS Pricing',
      'sms pricing subtitle': 'Text messaging plans',
      'sms pricing description': 'Send bulk text messages with the best market rates. Intuitive platform, high delivery rates and real-time reports.',
      'sms pricing plan 1': 'Plan #1',
      'sms pricing plan 1 desc': 'From 150,001 to 250,000 SMS',
      'sms pricing plan 2': 'Plan #2',
      'sms pricing plan 2 desc': 'From 100,001 to 150,000 SMS',
      'sms pricing plan 3': 'Plan #3',
      'sms pricing plan 3 desc': 'From 50,001 to 100,000 SMS',
      'sms pricing plan 4': 'Plan #4',
      'sms pricing plan 4 desc': 'From 15,001 to 50,000 SMS',
      'sms pricing plan 5': 'Plan #5',
      'sms pricing plan 5 desc': 'From 10,001 to 15,000 SMS',
      'sms pricing plan 6': 'Plan #6',
      'sms pricing plan 6 desc': 'From 5,000 to 10,000 SMS',
      'sms pricing unit': 'per SMS',
      'sms pricing phrases': [
        'Our commercial agreements with local operators guarantee high impact of your message on the recipient\'s mobile, with delivery rates over 95%.',
        'The sending platform is completely web-based, easy to use and intuitive, allowing any team member to manage campaigns without technical knowledge.',
        'Two-way SMS allow your customers to respond to you for free, opening a bidirectional communication channel that improves interaction and satisfaction.',
        'Schedule your campaigns for immediate or later sending, with the option to wait up to 72 hours for the message to be delivered when the mobile comes into coverage.',
        'Link social networks, web pages, WhatsApp numbers and much more within the text message to take your customers directly to the action you want.'
      ],
      // Email Pricing
      'email pricing title': 'Bulk Email Pricing',
      'email pricing subtitle': 'Email marketing plans',
      'email pricing description': 'Create and manage interactive email marketing campaigns with professional design, advanced tracking and detailed metrics to optimize your results.',
      'email pricing plan 1': 'Plan #1',
      'email pricing plan 1 desc': 'From 150,001 to 250,000 emails',
      'email pricing plan 2': 'Plan #2',
      'email pricing plan 2 desc': 'From 100,001 to 150,000 emails',
      'email pricing plan 3': 'Plan #3',
      'email pricing plan 3 desc': 'From 50,001 to 100,000 emails',
      'email pricing plan 4': 'Plan #4',
      'email pricing plan 4 desc': 'From 15,001 to 50,000 emails',
      'email pricing plan 5': 'Plan #5',
      'email pricing plan 5 desc': 'From 10,001 to 15,000 emails',
      'email pricing plan 6': 'Plan #6',
      'email pricing plan 6 desc': 'From 5,000 to 10,000 emails',
      'email pricing unit': 'per email',
      'email pricing phrases': [
        'The email module allows you to create and manage interactive campaigns with a visual drag & drop editor that requires no design or programming knowledge.',
        'Segment your audience with advanced filters to send the right message to the right person at the right time, maximizing open and conversion rates.',
        'Run A/B tests of subjects, content and sending times to discover what works best with your audience and continuously optimize each campaign.',
        'Get detailed metrics of each campaign: open rates, clicks, bounces, unsubscribes and conversions, all in an intuitive and real-time dashboard.',
        'Automate email sequences to nurture leads, welcome new subscribers, recover abandoned carts and keep your audience engaged.'
      ],
      // Voice Pricing
      'voice pricing title': 'Bulk Voice SMS Pricing',
      'voice pricing subtitle': 'Voice message plans',
      'voice pricing description': 'Send automated voice messages to mobile and landline phones. Ideal for collection campaigns, reminders, calls and mass communications with high impact.',
      'voice pricing plan 1': 'Plan #1',
      'voice pricing plan 1 desc': 'From 150,001 to 250,000 calls',
      'voice pricing plan 2': 'Plan #2',
      'voice pricing plan 2 desc': 'From 100,001 to 150,000 calls',
      'voice pricing plan 3': 'Plan #3',
      'voice pricing plan 3 desc': 'From 50,001 to 100,000 calls',
      'voice pricing plan 4': 'Plan #4',
      'voice pricing plan 4 desc': 'From 15,001 to 50,000 calls',
      'voice pricing plan 5': 'Plan #5',
      'voice pricing plan 5 desc': 'From 10,001 to 15,000 calls',
      'voice pricing plan 6': 'Plan #6',
      'voice pricing plan 6 desc': 'From 5,000 to 10,000 calls',
      'voice pricing unit': 'per call',
      'voice pricing phrases': [
        'The Voice solution is an automated voice message delivery service that reaches both mobile and landline phones, guaranteeing maximum reach of your campaign.',
        'Ideal for automated collection campaigns: send personalized payment reminders with customer name, amount owed and due date, all automatically.',
        'The text-to-speech function converts your text into natural Spanish voice, eliminating the need to record messages and allowing you to update content instantly.',
        'Keypad interaction (DTMF) allows the recipient to respond during the call, confirming appointments, selecting options or being transferred to a live agent.',
        'Schedule your voice campaigns at the most effective times and receive detailed reports of completed calls, answered calls, voicemail and unavailable numbers.'
      ],
      // Email Validation Pricing
      'validation pricing title': 'Email Validation Pricing',
      'validation pricing subtitle': 'Database cleaning and verification',
      'validation pricing description': 'Validate and clean your email database before sending campaigns. Reduce bounces, protect your sending reputation and improve your email deliverability.',
      'validation pricing plan 1': 'Plan #1',
      'validation pricing plan 1 desc': 'From 150,001 to 250,000 emails',
      'validation pricing plan 2': 'Plan #2',
      'validation pricing plan 2 desc': 'From 100,001 to 150,000 emails',
      'validation pricing plan 3': 'Plan #3',
      'validation pricing plan 3 desc': 'From 50,001 to 100,000 emails',
      'validation pricing plan 4': 'Plan #4',
      'validation pricing plan 4 desc': 'From 15,001 to 50,000 emails',
      'validation pricing plan 5': 'Plan #5',
      'validation pricing plan 5 desc': 'From 10,001 to 15,000 emails',
      'validation pricing plan 6': 'Plan #6',
      'validation pricing plan 6 desc': 'From 5,000 to 10,000 emails',
      'validation pricing unit': 'per email',
      'validation pricing phrases': [
        'Email validation removes invalid, non-existent and risky addresses from your database, reducing bounce rate and protecting your sending reputation.',
        'We detect spam traps, temporary emails and role addresses (info@, admin@) that can negatively affect your email marketing campaign deliverability.',
        'Each email is classified by risk level - valid, risky or invalid - so you can make informed decisions about who to send to and who not to.',
        'Real-time validation through our API allows verifying emails at the time of registration on your website, preventing incorrect data from entering your database from the start.',
        'Maintaining a clean database not only improves your email marketing metrics, but also reduces costs by not sending to addresses that will never receive your message.'
      ],
      // Pricing Features
      'feature max volume': 'Maximum volume',
      'feature dedicated infrastructure': 'Dedicated infrastructure',
      'feature sla guaranteed': 'SLA guaranteed',
      'feature whatsapp support': 'WhatsApp support',
      'feature very high volume': 'Very high volume',
      'feature high volume': 'High volume',
      'feature dedicated short code': 'Dedicated short code',
      'feature crm integration': 'CRM integration',
      'feature sms up to 1120 chars': 'SMS up to 1120 characters',
      'feature integration api': 'Integration API',
      'feature advanced statistics': 'Advanced statistics',
      'feature standard two way sms': 'Standard two-way SMS',
      'feature sending scheduling': 'Sending scheduling',
      'feature contact segmentation': 'Contact segmentation',
      'feature standard sms sending': 'Standard SMS sending',
      'feature basic control panel': 'Basic control panel',
      'feature delivery reports': 'Delivery reports',
      'feature unlimited contacts': 'Unlimited contacts',
      'feature dedicated ip': 'Dedicated IP',
      'feature dynamic personalization': 'Dynamic personalization',
      'feature up to 25000 contacts': 'Up to 25,000 contacts',
      'feature sequence automation': 'Sequence automation',
      'feature drag drop editor': 'Drag & drop editor',
      'feature up to 5000 contacts': 'Up to 5,000 contacts',
      'feature basic segmentation': 'Basic segmentation',
      'feature predefined templates': 'Predefined templates',
      'feature up to 1000 contacts': 'Up to 1,000 contacts',
      'feature basic statistics': 'Basic statistics',
      'feature unlimited calls': 'Unlimited calls',
      'feature multiple simultaneous campaigns': 'Multiple simultaneous campaigns',
      'feature dtmf interaction': 'DTMF interaction',
      'feature up to 10000 calls': 'Up to 10,000 calls',
      'feature text to speech spanish': 'Text-to-speech in Spanish',
      'feature up to 2000 calls': 'Up to 2,000 calls',
      'feature schedule programming': 'Schedule programming',
      'feature prerecorded messages': 'Prerecorded messages',
      'feature up to 500 calls': 'Up to 500 calls',
      'feature basic reports': 'Basic reports',
      'feature up to 100000 emails': 'Up to 100,000 emails',
      'feature automatic validation': 'Automatic validation',
      'feature up to 25000 emails': 'Up to 25,000 emails',
      'feature real time validation': 'Real-time validation',
      'feature integration api validation': 'Integration API',
      'feature up to 5000 emails': 'Up to 5,000 emails',
      'feature spam traps detection': 'Spam traps detection',
      'feature risk classification': 'Risk classification',
      'feature up to 1000 emails validation': 'Up to 1,000 emails',
      'feature invalid detection': 'Invalid detection',
      'feature downloadable report': 'Downloadable report',
      // Pricing Layout Elements
      'pricing back to home': 'Back to home',
      'pricing plans and rates title': 'Plans and rates',
      'pricing plans and rates description': 'Select the plan that best suits your needs. Prices will be updated soon.',
      'pricing get quote': 'Get quote',
      'pricing important note': 'Important note:',
      'pricing important note text': 'The listed price is the unit value of each SMS. All prices plus VAT. Prices for Colombia.',
      'pricing why choose service title': 'Why choose this service?',
      'pricing need custom quote title': 'Need a custom quote?',
      'pricing need custom quote description': 'Prices vary according to volume and destination. Contact us to receive a proposal adapted to your company.',
      'pricing request quote': 'Request quote',
      'pricing send email': 'Send email',
    },
  },
};

type Language = 'es' | 'en';

type LanguageAction = { type: 'TOGGLE_LANGUAGE' };

function languageReducer(state: Language, action: LanguageAction): Language {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return state === 'es' ? 'en' : 'es';
    default:
      return state;
  }
}

interface LanguageContextType {
  language: Language;
  t: (key: string, namespace?: keyof Translations) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, dispatch] = useReducer(languageReducer, 'es');

  const t = (key: string, namespace: keyof Translations = 'navbar') => {
    return translations[language]?.[namespace]?.[key as any] || translations.es[namespace as keyof Translations]?.[key as any] || key;
  };

  const toggleLanguage = () => dispatch({ type: 'TOGGLE_LANGUAGE' });

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

