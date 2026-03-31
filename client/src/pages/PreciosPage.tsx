/*
 * PreciosPage - Página de planes y precios para envíos masivos
 * SMS, Email y SMS de Voz
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  Mail,
  Mic,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const massiveServices = [
  {
    icon: MessageSquare,
    title: "SMS masivos",
    description:
      "Envía mensajes de texto masivos con alta tasa de apertura. Disponible en tres modalidades: SMS estándar, SMS doble vía y SMS de hasta 1120 caracteres.",
    features: [
      "SMS estándar de 160 caracteres",
      "SMS doble vía para interacción",
      "SMS largo de hasta 1120 caracteres",
      "Plataforma web de fácil uso",
      "Programación de envíos",
      "Reportes de entrega en tiempo real",
      "Personalización de mensajes",
      "API para integración con sistemas",
    ],
    color: "bg-coral",
  },
  {
    icon: Mail,
    title: "Email masivos",
    description:
      "Campañas de email marketing interactivas con diseño profesional, seguimiento avanzado y métricas detalladas para optimizar tus resultados.",
    features: [
      "Editor de plantillas drag & drop",
      "Personalización dinámica de contenido",
      "Segmentación avanzada de contactos",
      "A/B testing de asuntos y contenido",
      "Métricas: apertura, clics, rebotes",
      "Automatización de secuencias",
      "Cumplimiento anti-spam",
      "Integración con CRM",
    ],
    color: "bg-blue-mid",
  },
  {
    icon: Mic,
    title: "SMS de voz masivos",
    description:
      "Mensajes de voz automatizados para cobranza, recordatorios, convocatorias y campañas masivas. Tu mensaje llega directamente como una llamada de voz.",
    features: [
      "Mensajes de voz pregrabados",
      "Text-to-speech en español",
      "Campañas de cobranza automatizadas",
      "Recordatorios de citas y eventos",
      "Convocatorias masivas",
      "Reportes de llamadas completadas",
      "Programación de horarios de envío",
      "Interacción por teclado (DTMF)",
    ],
    color: "bg-coral",
  },
];

export default function PreciosPage() {
  const reveal = useScrollReveal(0.1);

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
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Planes y precios
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Envíos masivos para tu empresa
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              SMS, Email y Mensajes de Voz masivos con las mejores tarifas del
              mercado. Plataformas intuitivas, reportes en tiempo real y soporte
              dedicado.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Services Grid */}
      <section className="bg-pearl py-20" ref={reveal.ref}>
        <div className="container">
          <div className="space-y-10">
            {massiveServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={reveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Info */}
                  <div className="p-8 lg:col-span-1">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-white mb-4`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-navy/55 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a
                      href="https://wa.me/573105317126"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                    >
                      Solicitar cotización
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Features */}
                  <div className="p-8 lg:col-span-2 bg-pearl/50">
                    <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wider mb-4">
                      Características incluidas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                          <span className="text-navy/65 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reveal.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-navy rounded-2xl p-10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿Necesitas una cotización personalizada?
              </h3>
              <p className="text-white/60 mb-6">
                Los precios varían según el volumen de envíos y el país de
                destino. Contáctanos para recibir una propuesta adaptada a tus
                necesidades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
                >
                  Solicitar cotización
                </a>
                <a
                  href="mailto:contacto@crearcomunicaciones.net"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all border border-white/15"
                >
                  <Mail className="w-4 h-4" />
                  Escribir por email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
