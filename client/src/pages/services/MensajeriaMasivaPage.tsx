/*
 * MensajeriaMasivaPage  Pgina interna de Mensajer?a masiva
 * Contenido basado en crearcomunicaciones.net/servicio-sms/
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  Link2,
  Clock,
  Smartphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const serviceTypes = [
  {
    title: 'SMS Estándar',
    description: 'Mensajes de texto de hasta 160 caracteres. Ideal para notificaciones, alertas, confirmaciones y comunicaciones directas con alta tasa de apertura.',
    icon: MessageSquare,
    link: "/sms"
  },
  {
    title: 'SMS Doble Vía',
    description: 'Permite que tu cliente te responda de forma gratuita. Ideal para encuestas, confirmaciones interactivas y comunicación bidireccional con tu audiencia.',
    icon: ArrowRight,
    link: "/sms"
  },
  {
    title: 'SMS de hasta 1120 Caracteres',
    description: 'Mensajes extendidos para cuando necesitas comunicar más información. Perfecto para promociones detalladas, instrucciones y contenido enriquecido.',
    icon: Zap,
    link: "/sms"
  },
  {
    title: 'Emails',
    description: 'Campañas de email masivo con diseños personalizables. Ideal para newsletters, promociones y comunicaciones de largo formato con seguimiento detallado de aperturas.',
    icon: MessageSquare,
    link: "/email"
  },
  {
    title: 'WhatsApp',
    description: 'Mensajes a través de WhatsApp Business API. Perfecto para comunicación directa, notificaciones interactivas y atención al cliente en el canal preferido de tus clientes.',
    icon: MessageSquare,
    link: "/whatsapp"
  },
  {
    title: 'Mensajes de Voz',
    description: 'Llamadas automatizadas con mensajes de voz pregrabados. Ideal para alertas urgentes, recordatorios importantes y comunicaciones que requieren atención inmediata.',
    icon: MessageSquare,
    link: "/voz"
  },
  {
    title: 'Validación de correos',
    description: 'Verifica la calidad de tus bases de datos de correo electrónico',
    icon: MessageSquare,
    link: "/validacioncorreos",
    isBanner: true
  }
];

const features = [
  {
    icon: Zap,
    titleKey: 'mensajeria feature 1 title',
    descriptionKey: 'mensajeria feature 1 description',
  },
  {
    icon: Shield,
    titleKey: 'mensajeria feature 2 title',
    descriptionKey: 'mensajeria feature 2 description',
  },
  {
    icon: BarChart3,
    titleKey: 'mensajeria feature 3 title',
    descriptionKey: 'mensajeria feature 3 description',
  },
  {
    icon: Link2,
    titleKey: 'mensajeria feature 4 title',
    descriptionKey: 'mensajeria feature 4 description',
  },
  {
    icon: Clock,
    titleKey: 'mensajeria feature 5 title',
    descriptionKey: 'mensajeria feature 5 description',
  },
  {
    icon: Smartphone,
    titleKey: 'mensajeria feature 6 title',
    descriptionKey: 'mensajeria feature 6 description',
  },
];

export default function MensajeriaMasivaPage() {
  const { t, language } = useLanguage();
  const typesReveal = useScrollReveal(0.1);
  const featuresReveal = useScrollReveal(0.1);
  const pricingReveal = useScrollReveal(0.1);

  const pricingLinks = [
    { nameKey: 0, href: "/sms" },
    { nameKey: 1, href: "/email" },
    { nameKey: 2, href: "/voz" },
    { nameKey: 3, href: "/validacioncorreos" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('volver al inicio', 'layout')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              {t('mensajeria subtitle', 'services')}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('mensajeria title', 'services')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              {t('mensajeria hero', 'services')}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* SMS Types */}
      <section className="bg-pearl py-20" ref={typesReveal.ref}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              {t('mensajeria sms types title', 'services')}
            </h2>
            <p className="text-navy/55">
              Tipos de mensajería masiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceTypes.map((type, i) => (
              type.isBanner ? (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={typesReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="col-span-full bg-gradient-to-r from-coral to-coral-light rounded-2xl p-8 border border-coral/20 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">
                          {type.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed max-w-md">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    <Link 
                      href={type.link} 
                      className="inline-flex items-center gap-2 bg-white text-coral px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                    >
                      Ver precios
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={typesReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-navy/5 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-navy/55 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <Link 
                    href={type.link} 
                    className="inline-flex items-center gap-2 text-coral hover:text-coral-light text-sm font-semibold mt-4 transition-colors"
                  >
                    Ver precios
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="bg-pearl">
        <WaveDivider from="#F8F9FA" to="#0F2044" />
      </div>
      <section className="bg-navy py-20" ref={featuresReveal.ref}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('mensajeria platform title', 'services')}
            </h2>
            <p className="text-white/55">
              {t('mensajeria platform description', 'services')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <feature.icon className="w-8 h-8 text-coral mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  {t(feature.titleKey, 'services')}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t(feature.descriptionKey, 'services')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#FFFFFF" />

      {/* Pricing Links */}
      <section className="bg-white py-20" ref={pricingReveal.ref}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              {t('mensajeria pricing title', 'services')}
            </h2>
            <p className="text-navy/55 mb-10">
              {t('mensajeria pricing description', 'services')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {pricingLinks.map((link, i) => (
                <motion.div
                  key={link.nameKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={pricingReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group block bg-pearl rounded-xl p-5 border border-navy/5 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <span className="text-navy font-semibold group-hover:text-coral transition-colors">
                      {translations[language].services['mensajeria pricing links'][link.nameKey]}
                    </span>
                    <ArrowRight className="w-4 h-4 text-coral mt-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('mensajeria pricing cta', 'services')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
