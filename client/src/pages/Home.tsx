/*
 * Home â€” Crear Comunicaciones
 * Design: "Ondas de ComunicaciÃ³n" â€” OrgÃ¡nico-TecnolÃ³gico
 * Paleta: Navy (#0F2044), Coral (#E03C31), Blanco, Gris perla (#E8ECF1)
 * TipografÃ­a: Outfit
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

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/hero-banner-Ln7jguus7DwoPjfTaHqM9R.webp";

const services = [
  {
    icon: Bot,
    title: "ChatBot",
    desc: "Automatiza la atenciÃ³n al cliente con bots inteligentes en WhatsApp, Messenger, Telegram e Instagram.",
    href: "/servicios/chatbot",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: Brain,
    title: "IA para WhatsApp",
    desc: "Potencia tu WhatsApp Business con inteligencia artificial para respuestas contextuales y automatizaciÃ³n avanzada.",
    href: "/servicios/ia-whatsapp",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: Smartphone,
    title: "APP's con WhatsApp",
    desc: "Desarrollamos aplicaciones personalizadas integradas con la API de WhatsApp Business para tu negocio.",
    href: "/servicios/apps-whatsapp",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: Layers,
    title: "Omnicanalidad",
    desc: "Unifica todos tus canales de comunicaciÃ³n en una sola plataforma con acompaÃ±amiento completo.",
    href: "/servicios/omnicanalidad",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: ShoppingCart,
    title: "CatÃ¡logos de Productos",
    desc: "Conecta el catÃ¡logo de Meta con WhatsApp API para que tus clientes compren directamente desde el chat.",
    href: "/servicios/catalogos-whatsapp",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: MessageSquare,
    title: "SMS Masivos",
    desc: "EnvÃ­a miles de mensajes de texto con alta tasa de apertura. SMS estÃ¡ndar, doble vÃ­a y hasta 1120 caracteres.",
    href: "/sms",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: Mail,
    title: "Email Masivos",
    desc: "CampaÃ±as de email marketing interactivas con seguimiento, mÃ©tricas y personalizaciÃ³n avanzada.",
    href: "/email",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: Mic,
    title: "SMS de Voz Masivos",
    desc: "Mensajes de voz automatizados para cobranza, recordatorios, convocatorias y campaÃ±as masivas.",
    href: "/voz",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: Headphones,
    title: "Contact Center",
    desc: "SoluciÃ³n completa de centro de contacto con acompaÃ±amiento integral para tu operaciÃ³n.",
    href: "/servicios/contact-center",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: Send,
    title: "MensajerÃ­a Masiva",
    desc: "Plataforma completa para envÃ­os masivos de SMS, Email y Voz con altas tasas de entrega y reportes en tiempo real.",
    href: "/servicios/mensajeria-masiva",
    color: "bg-coral/15 text-coral",
  },
  {
    icon: Settings,
    title: "ConsultorÃ­a de AutomatizaciÃ³n",
    desc: "DiseÃ±amos e implementamos estrategias de marketing automatizado con acompaÃ±amiento integral para tu empresa.",
    href: "/servicios/automatizacion",
    color: "bg-blue-mid/15 text-blue-mid",
  },
  {
    icon: Megaphone,
    title: "AsesorÃ­a en ComunicaciÃ³n Masiva",
    desc: "Te asesoramos en campaÃ±as multicanal (SMS, Voz, Email, WhatsApp), organizaciÃ³n de bases de datos y estrategia de envÃ­os. Tus datos siempre son tuyos.",
    href: "/servicios/asesoria-comunicacion",
    color: "bg-coral/15 text-coral",
  },
];

const stats = [
  { value: "30+", label: "AÃ±os de experiencia", icon: Globe },
  { value: "1000+", label: "Clientes satisfechos", icon: Users },
  { value: "12", label: "Soluciones digitales", icon: Zap },
];

export default function Home() {
  const servicesReveal = useScrollReveal(0.1);
  const aboutReveal = useScrollReveal(0.1);
  const statsReveal = useScrollReveal(0.1);
  const ctaReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO SECTION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
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
                Desde 1993 conectando empresas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Somos su puente de{" "}
              <span className="text-coral">comunicaciÃ³n</span> con el mundo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl"
            >
              Soluciones de comunicaciÃ³n digital para empresas: ChatBots, WhatsApp
              API, Omnicanalidad, envÃ­os masivos y mucho mÃ¡s. Todo el
              acompaÃ±amiento que necesitas.
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
                Hablar con un asesor
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave divider hero â†’ services */}
      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SERVICES SECTION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-pearl py-20 lg:py-28" id="servicios">
        <div className="container" ref={servicesReveal.ref}>
          <div className="relative overflow-hidden rounded-[28px] border border-coral/20 bg-navy mb-10 sm:mb-12 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,60,49,0.34),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_58%)]" />
            <div className="absolute inset-y-0 left-0 w-2 bg-coral" />
            <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-coral-light">
                  <Settings className="w-3.5 h-3.5" />
                  Servicio destacado
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-tight">
                  ConsultorÃ­a para automatizar tu negocio con WhatsApp Business
                  API
                </h3>
                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/72">
                  Te ayudamos a diseÃ±ar flujos, integraciones y procesos de
                  venta, soporte y seguimiento para convertir WhatsApp en un
                  canal real de automatizaciÃ³n comercial.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/servicios/automatizacion"
                  className="inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-light hover:shadow-lg hover:shadow-coral/25"
                >
                  Ver consultorÃ­a
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Hablar por WhatsApp
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
              Nuestras Soluciones
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesReveal.isVisible ? { opacity: 1, y: 0 } : {}
              }
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-black mb-4"
            >
              Servicios que impulsan tu negocio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesReveal.isVisible ? { opacity: 1, y: 0 } : {}
              }
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Desde chatbots inteligentes hasta campaÃ±as masivas, tenemos todo lo
              que necesitas para conectar con tus clientes.
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
                    Conocer mÃ¡s <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider services â†’ about */}
      <div className="bg-pearl">
        <WaveDivider from="#F8F9FA" to="#0F2044" />
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          ABOUT / STATS SECTION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container" ref={aboutReveal.ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutReveal.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                MÃ¡s de 30 aÃ±os creando puentes de comunicaciÃ³n
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                Somos una agencia dedicada al marketing digital en todas sus
                formas. Hacemos parte del mercado desde 1993, buscando ayudar
                personas, emprendedores, pequeÃ±as y grandes empresas a conseguir
                lo que quieren.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                A travÃ©s de estos aÃ±os hemos avanzado para entregarles lo mejor:
                en 2009 emergimos en telecomunicaciones, en 2015 comenzamos a
                diseÃ±ar apps, y en 2021 iniciamos la producciÃ³n de bots. Todo
                para ofrecerles nuevos servicios que permitan llegar a mÃ¡s
                personas.
              </p>
              <ul className="space-y-3">
                {[
                  "AcompaÃ±amiento integral en cada proyecto",
                  "TecnologÃ­a de punta en comunicaciones",
                  "Equipo experto en marketing digital",
                  "Soluciones personalizadas para cada negocio",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-coral shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
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

      {/* Wave divider about â†’ CTA */}
      <WaveDivider from="#0F2044" to="#FFFFFF" />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          CTA / CONTACT SECTION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-white py-20 lg:py-28" id="contacto">
        <div className="container" ref={ctaReveal.ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaReveal.isVisible ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Comience hoy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-5">
              Su primera asesoría virtual.
            </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nuestro equipo le diseñará una solución personalizada.
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
                Escribir por WhatsApp
              </a>
              <a
                href="mailto:alexmurillo@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Enviar un correo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                Automatización
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                IA
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                Programación
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
