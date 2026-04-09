import ServiceLayout from "@/components/ServiceLayout";
import { motion } from "framer-motion";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/hero-banner-Ln7jguus7DwoPjfTaHqM9R.webp";

export default function AutomatizacionPage() {
  return (
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
      tariffTable={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Tarifas de Consultoría</h3>
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse rounded-xl overflow-hidden shadow-lg"
                style={{ tableLayout: "fixed" }}
              >
                <colgroup>
                  <col style={{ width: "22%" }} />
                  <col style={{ width: "58%" }} />
                  <col style={{ width: "20%" }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: "#2D3A8C" }}>
                    <th className="p-4 text-left font-medium text-white text-sm">
                      Tipo de servicio
                    </th>
                    <th className="p-4 text-left font-medium text-white text-sm">
                      Descripción
                    </th>
                    <th className="p-4 text-left font-medium text-white text-sm leading-snug">
                      Valor por hora o fracción
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Asesoría comercial</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Orientación estratégica y comercial sobre servicios, procesos o soluciones.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$35 USD</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Asesoría técnica y comercial</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Sesiones con análisis técnico especializado y participación de ingeniería.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$55 USD</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Soporte operativo básico</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Ejecución de tareas puntuales de apoyo operativo.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$14 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 italic text-sm text-white/70 text-center">
              Nota: Todos los valores son en dólares y más impuestos.
            </p>
          </div>
        </motion.div>
      }
      ctaText="Solicitar consultoría"
      relatedServices={[
        { name: "Omnicanalidad", href: "/servicios/omnicanalidad" },
        { name: "Chatbot", href: "/servicios/chatbot" },
        { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
        { name: "Mensajería masiva", href: "/servicios/mensajeria-masiva" },
      ]}
    />
  );
}
