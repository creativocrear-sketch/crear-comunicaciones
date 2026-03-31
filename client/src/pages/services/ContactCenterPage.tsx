import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/contact-center-service-5faVxkQhTvJSpXBnvnWLHp.webp";

export default function ContactCenterPage() {
  return (
    <ServiceLayout
      title="Contact Center"
      subtitle="Centro de contacto profesional"
      description="Implementamos y gestionamos tu centro de contacto con acompañamiento integral. Desde la infraestructura tecnológica hasta la capacitación de agentes, nos encargamos de todo para que tu operación de atención al cliente funcione de manera eficiente y profesional."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Acompañamiento completo",
          description:
            "Hacemos todo el acompañamiento desde la planificación hasta la operación diaria. Diseñamos la estrategia, implementamos la tecnología y capacitamos a tu equipo.",
        },
        {
          title: "Campañas de llamadas",
          description:
            "Diseñamos y ejecutamos campañas de llamadas salientes para cobranza, encuestas, convocatoria a eventos, televentas, confirmación de citas y más.",
        },
        {
          title: "Recepción de llamadas",
          description:
            "Líneas de atención al cliente con IVR inteligente, distribución automática de llamadas, colas de espera y grabación para control de calidad.",
        },
        {
          title: "Integración multicanal",
          description:
            "El contact center no solo maneja llamadas: integra WhatsApp, email, chat web y redes sociales para una experiencia unificada de atención.",
        },
        {
          title: "Monitoreo en tiempo real",
          description:
            "Supervisión en vivo de la operación: llamadas activas, tiempos de espera, disponibilidad de agentes y métricas de rendimiento al instante.",
        },
        {
          title: "Reportes y análisis",
          description:
            "Informes detallados de productividad, calidad de atención, tiempos de gestión, tasas de resolución y satisfacción del cliente.",
        },
      ]}
      benefits={[
        "Acompañamiento integral en toda la operación",
        "Infraestructura tecnológica de última generación",
        "Campañas de llamadas para cobranza y ventas",
        "Capacitación profesional para tu equipo de agentes",
        "Monitoreo y control de calidad en tiempo real",
        "Escalabilidad según el volumen de tu operación",
        "Integración con canales digitales (WhatsApp, email, chat)",
        "Reducción de costos operativos con automatización",
      ]}
      ctaText="Implementar Contact Center"
      relatedServices={[
        { name: "Omnicanalidad", href: "/servicios/omnicanalidad" },
        { name: "ChatBot", href: "/servicios/chatbot" },
        { name: "SMS de Voz Masivos", href: "/precios" },
      ]}
    />
  );
}
