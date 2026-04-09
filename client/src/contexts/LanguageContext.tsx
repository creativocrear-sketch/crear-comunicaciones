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
  };
  layout: {
    'características principales': string;
    'beneficios para tu empresa': string;
    'listo para comenzar': string;
    'servicios relacionados': string;
    'volver al inicio': string;
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
}

const translations: Record<'es' | 'en', Translations> = {
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
      'servicios que impulsan tu negocio': 'Services that boost your business',
      'hablar con un asesor': 'Talk to an advisor',
      'escribir por whatsapp': 'Write on WhatsApp',
      'nuestras soluciones': 'Our solutions',
    },
    layout: {
      'características principales': 'Características principales',
      'beneficios para tu empresa': 'Benefits for your company',
      'listo para comenzar': 'Ready to start',
      'servicios relacionados': 'Related services',
      'volver al inicio': 'Back to home',
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
    },
    layout: {
      'características principales': 'Main features',
      'beneficios para tu empresa': 'Benefits for your company',
      'listo para comenzar': 'Ready to start',
      'servicios relacionados': 'Related services',
      'volver al inicio': 'Back to home',
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

