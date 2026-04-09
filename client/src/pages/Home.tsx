/*
 * Home  Crear Comunicaciones
 * Design: "Ondas de Comunicación"  Orgánico-Tecnológico
 * Paleta: Navy (#0F2044), Coral (#E03C31), Blanco, Gris perla (#E8ECF1)
 * Tipografía: Outfit
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Smartphone,
  Layers,
  ShoppingCart,
  MessageSquare,
  Mail,
  Mic,
  Headphones,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Users,
  Globe,
  Zap,
  Send,
  Settings,
  Megaphone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/hero-banner-Ln7jguus7DwoPjfTaHqM9R.webp";

export default function Home() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "30+", label: t('años de experiencia', 'home'), icon: Globe },
    { value: "1000+", label: t('clientes satisfechos', 'home'), icon: Users },
    { value: "12", label: t('soluciones digitales', 'home'), icon: Zap },
  ];
  const servicesReveal = useScrollReveal(0.1);
  const aboutReveal = useScrollReveal(0.1);
  const statsReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  const services = [
    {
      icon: Bot,
      title: t('chatbot', 'navbar'),
      desc: t('chatbot description', 'home'),
      href: "/servicios/chatbot",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: Brain,
      title: t('ia para whatsapp', 'navbar'),
      desc: t('ia whatsapp description', 'home'),
      href: "/servicios/ia-whatsapp",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: Smartphone,
      title: t('apps con whatsapp', 'navbar'),
      desc: t('apps whatsapp description', 'home'),
      href: "/servicios/apps-whatsapp",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: Layers,
      title: t('omnicanalidad', 'navbar'),
      desc: t('omnicanalidad description', 'home'),
      href: "/servicios/omnicanalidad",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: ShoppingCart,
      title: t('catálogos de productos', 'navbar'),
      desc: t('catalogos description', 'home'),
      href: "/servicios/catalogos-whatsapp",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: MessageSquare,
      title: t('sms masivos', 'navbar'),
      desc: t('mensajeria description', 'home'),
      href: "/sms",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: Mail,
      title: t('email masivos', 'navbar'),
      desc: t('mensajeria description', 'home'),
      href: "/email",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: Mic,
      title: t('sms de voz masivos', 'navbar'),
      desc: t('mensajeria description', 'home'),
      href: "/voz",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: Headphones,
      title: t('contact center', 'navbar'),
      desc: t('contact center description', 'home'),
      href: "/servicios/contact-center",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: Send,
      title: t('mensajería masiva', 'navbar'),
      desc: t('mensajeria description', 'home'),
      href: "/servicios/mensajeria-masiva",
      color: "bg-coral/15 text-coral",
    },
    {
      icon: Settings,
      title: t('consultoría de automatización', 'navbar'),
      desc: t('automatizacion description', 'home'),
      href: "/servicios/automatizacion",
      color: "bg-blue-mid/15 text-blue-mid",
    },
    {
      icon: Megaphone,
      title: t('asesoría en comunicación masiva', 'navbar'),
      desc: t('asesoria description', 'home'),
      href: "/servicios/asesoria-comunicacion",
      color: "bg-coral/15 text-coral",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 
          HERO SECTION
       */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 200" className="w-full">
            <path
              d="M0,120 C360,180 720,60 1080,120 C1260,150 1380,130 1440,120 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 opacity-5">
          <svg viewBox="0 0 1440 200" className="w-full">
            <path
              d="M0,140 C300,200 600,80 900,140 C1100,180 1300,120 1440,140 L1440,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-coral/20 text-coral-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-coral/20">
                {t('desde 1993 conectando empresas', 'home')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t('somos su puente de comunicación con el mundo', 'home').split(' ').map((word, i) => 
                word === 'comunicación' || word === 'communication' ? 
                  <span key={i} className="text-coral">{word}</span> : 
                  <span key={i}>{word}</span>
              ).reduce((acc, curr, i) => 
                i === 0 ? [curr] : [...acc, ' ', curr], []
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl"
            >
              {t('soluciones comunicacion digital', 'home')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('hablar con un asesor', 'home')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider hero  services */}
      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* 
          SERVICES SECTION
       */}
      <section className="bg-pearl py-20 lg:py-28" id="servicios">
        <div className="container" ref={servicesReveal.ref}>
          {/* Featured service card */}
          <div className="relative overflow-hidden rounded-[28px] border border-coral/20 bg-navy mb-10 sm:mb-12 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,60,49,0.34),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_58%)]" />
            <div className="absolute inset-y-0 left-0 w-2 bg-coral" />
            <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-coral-light">
                  <Settings className="w-3.5 h-3.5" />
                  {t('servicio destacado', 'home')}
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-tight">
<<<<<<< HEAD
                  {t('consultoria whatsapp title', 'home')}
                </h3>
                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/72">
                  {t('consultoria whatsapp description', 'home')}
=======
                  Consultoría para automatizar tu negocio con WhatsApp Business API
                </h3>
                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/72">
                  Te ayudamos a diseñar flujos, integraciones y procesos de venta, soporte y seguimiento para convertir WhatsApp en un canal real de automatización comercial.
>>>>>>> f57a5b29c94d389314e2ea1220300088472b9004
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/servicios/automatizacion"
                  className="inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-light hover:shadow-lg hover:shadow-coral/25"
                >
                  {t('ver consultoria', 'home')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://meetings.hubspot.com/alexmurillo?embed=true&uuid=a3c3303f-ec76-4403-8994-2815af888d2d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12 hover:border-white/25"
                >
                  <Calendar className="w-4 h-4" />
                  {t('agenda tu cita', 'home')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-light hover:shadow-lg hover:shadow-coral/25"
                >
                  {t('hablar por whatsapp', 'home')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              animate={servicesReveal.isVisible ? { opacity: 1 } : {}}
              className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3"
            >
              {t('nuestras soluciones', 'home')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesReveal.isVisible ? { opacity: 1, y: 0 } : {}
              }
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-black mb-4"
            >
              {t('servicios que impulsan tu negocio', 'home')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesReveal.isVisible ? { opacity: 1, y: 0 } : {}
              }
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              {t('services subtitle', 'home')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  servicesReveal.isVisible ? { opacity: 1, y: 0 } : {}
                }
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-6 hover:shadow-xl hover:shadow-navy/8 transition-all duration-300 hover:-translate-y-1 border border-navy/5 h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-coral transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-coral text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('ver más', 'common')} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider services  about */}
      <div className="bg-pearl">
        <WaveDivider from="#F8F9FA" to="#0F2044" />
      </div>

      {/* 
          ABOUT / STATS SECTION
       */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container" ref={aboutReveal.ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutReveal.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
                {t('sobre nosotros', 'home')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t('about title', 'home')}
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                {t('about description', 'home')}
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                {t('about evolution', 'home')}
              </p>
              <ul className="space-y-3">
                {translations[language].home['about features'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutReveal.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              ref={statsReveal.ref}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    statsReveal.isVisible ? { opacity: 1, y: 0 } : {}
                  }
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-coral mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider about  CTA */}
      <WaveDivider from="#0F2044" to="#FFFFFF" />

      {/* 
          CTA / CONTACT SECTION
       */}
      <section className="bg-white py-20 lg:py-28" id="contacto">
        <div className="container" ref={ctaReveal.ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaReveal.isVisible ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              {t('comience hoy', 'home')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-5">
              {t('su primera asesoría virtual', 'home')}
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              {t('nuestro equipo le diseñará', 'home')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('escribir por whatsapp', 'home')}
              </a>
              <a
                href="mailto:alexmurillo@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                {t('enviar un correo', 'home')}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                {t('automatización', 'home')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                {t('ia', 'home')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                {t('programación', 'home')}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

