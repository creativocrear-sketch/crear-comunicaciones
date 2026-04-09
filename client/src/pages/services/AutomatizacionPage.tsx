import ServiceLayout from "@/components/ServiceLayout";

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
      
      {/* Tarifas de Consultoría Table - Between CTA and Benefits */}
      <section className="bg-pearl py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Tarifas de Consultoría
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Precios por hora o fracción
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-2xl bg-white max-w-4xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-6 text-left font-bold">Tipo de servicio</th>
                  <th className="p-6 text-left font-bold">Descripción</th>
                  <th className="p-6 text-right font-bold">Valor por hora o fracción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Asesoría comercial</td>
                  <td className="p-6 text-gray-700">Orientación estratégica y comercial sobre servicios, procesos o soluciones.</td>
                  <td className="p-6 text-right font-bold text-coral">$35 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Asesoría técnica y comercial</td>
                  <td className="p-6 text-gray-700">Sesiones con análisis técnico especializado y participación de ingeniería.</td>
                  <td className="p-6 text-right font-bold text-coral">$55 USD</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Soporte operativo básico</td>
                  <td className="p-6 text-gray-700">Ejecución de tareas puntuales de apoyo operativo.</td>
                  <td className="p-6 text-right font-bold text-coral">$14 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-8 text-sm text-gray-600 italic text-center font-medium">
            Nota: Todos los valores son en dólares y más impuestos.
          </p>
        </div>
      </section>
    </>
  );
}

