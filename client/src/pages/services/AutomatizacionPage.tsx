import ServiceLayout from "@/components/ServiceLayout";
import { motion } from "framer-motion";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/hero-banner-Ln7jguus7DwoPjfTaHqM9R.webp";

export default function AutomatizacionPage() {
  return (
    <>
      <ServiceLayout
        title="Consultoría de Marketing de Automatización"
        subtitle="Estrategia y acompañamiento experto"
        description="Diseñamos e implementamos estrategias de marketing automatizado para tu empresa. Desde la planificación hasta la ejecución, te acompañamos en cada paso para que tus campañas de comunicación funcionen de forma inteligente, eficiente y sin intervención manual."
        heroImage={HERO_IMG}
        features={[
          {
            title: "Diagnóstico de comunicación",
            description:
              "Analizamos tus canales actuales de comunicación, flujos de trabajo y puntos de contacto con el cliente para identificar oportunidades de automatización que generen impacto real.",
          },
          {
            title: "Diseño de flujos automatizados",
            description:
              "Creamos flujos de comunicación automatizados que se activan según el comportamiento del cliente: bienvenida, seguimiento, reactivación, postventa y más.",
          },
          {
            title: "Integración de canales",
            description:
              "Conectamos todos tus canales — WhatsApp, SMS, Email, Voz — en una estrategia unificada donde cada canal cumple un rol específico en el recorrido del cliente.",
          },
          {
            title: "Segmentación inteligente",
            description:
              "Definimos segmentos de audiencia basados en comportamiento, demografía e historial de interacción para que cada mensaje llegue a la persona correcta en el momento adecuado.",
          },
          {
            title: "Implementación y capacitación",
            description:
              "No solo diseñamos la estrategia: la implementamos en tu plataforma y capacitamos a tu equipo para que pueda operar, ajustar y optimizar las automatizaciones de forma autónoma.",
          },
          {
            title: "Medición y optimización continua",
            description:
              "Establecemos KPIs claros y realizamos seguimiento periódico para medir el rendimiento de cada automatización, identificar mejoras y escalar lo que funciona.",
          },
        ]}
        benefits={[
          "Estrategia personalizada para tu modelo de negocio",
          "Automatización de campañas en múltiples canales",
          "Reducción de tareas manuales y repetitivas",
          "Mayor eficiencia en la comunicación con clientes",
          "Aumento en tasas de conversión y retención",
          "Capacitación completa para tu equipo",
          "Seguimiento y optimización continua de resultados",
          "Integración con tus herramientas y plataformas existentes",
        ]}
        ctaText="Solicitar consultoría"
        relatedServices={[
          { name: "Omnicanalidad", href: "/servicios/omnicanalidad" },
          { name: "Chatbot", href: "/servicios/chatbot" },
          { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
          { name: "Mensajería masiva", href: "/servicios/mensajeria-masiva" },
        ]}
      />
      
      {/* Tarifas de Consultoría - Between CTA and Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-pearl py-20"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Tarifas de Consultoría
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Precios transparentes por hora o fracción. Todo más impuestos.
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-navy/10 max-w-4xl mx-auto">
            <table className="w-full text-sm">
              <thead className="bg-navy">
                <tr>
                  <th className="p-4 text-left font-semibold text-white">Tipo de servicio</th>
                  <th className="p-4 text-left font-semibold text-white">Descripción</th>
                  <th className="p-4 text-right font-semibold text-white">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                <tr className="hover:bg-pearl/50 transition-colors">
                  <td className="p-4 font-medium text-navy">Asesoría comercial</td>
                  <td className="p-4 text-gray-700 max-w-md">Orientación estratégica y comercial sobre servicios, procesos o soluciones.</td>
                  <td className="p-4 text-right font-bold text-coral">$35 USD</td>
                </tr>
                <tr className="hover:bg-pearl/50 transition-colors">
                  <td className="p-4 font-medium text-navy">Asesoría técnica y comercial</td>
                  <td className="p-4 text-gray-700 max-w-md">Sesiones con análisis técnico especializado y participación de ingeniería.</td>
                  <td className="p-4 text-right font-bold text-coral">$55 USD</td>
                </tr>
                <tr className="hover:bg-pearl/50 transition-colors">
                  <td className="p-4 font-medium text-navy">Soporte operativo básico</td>
                  <td className="p-4 text-gray-700 max-w-md">Ejecución de tareas puntuales de apoyo operativo.</td>
                  <td className="p-4 text-right font-bold text-coral">$14 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-8 italic text-sm text-gray-600 text-center max-w-xl mx-auto">
            Nota: Todos los valores son en dólares y más impuestos.
          </p>
        </div>
      </motion.div>
      
      {/* Benefits section moved after table */}
      <div className="bg-white">
        <WaveDivider from="#F8F9FA" to="#0F2044" />
      </div>
      <section className="bg-navy py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              Beneficios para tu empresa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Estrategia personalizada para tu modelo de negocio</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Automatización de campañas en múltiples canales</span>
              </div>
              <!-- Repeat for all benefits with custom check icon -->
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Reducción de tareas manuales y repetitivas</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Mayor eficiencia en la comunicación con clientes</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Aumento en tasas de conversión y retención</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Capacitación completa para tu equipo</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Seguimiento y optimización continua de resultados</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-5 h-5 bg-coral rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white/75 text-sm">Integración con tus herramientas y plataformas existentes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

