import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/omnichannel-service-hwhXiFRWvWeX3BTHYRTXoS.webp";

export default function OmnicanalidadPage() {
  return (
    <ServiceLayout
      title="Omnicanalidad"
      subtitle="Todos tus canales en un solo lugar"
      description="Unificamos todos los canales de comunicación digital de tu empresa — WhatsApp, Messenger, Telegram, Instagram y más — en una sola plataforma centralizada. Hacemos todo el acompañamiento desde la implementación hasta la optimización continua de tu operación omnicanal."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Bandeja unificada",
          description:
            "Todas las conversaciones de WhatsApp, Messenger, Telegram, Instagram y otros canales llegan a una sola bandeja de entrada. Tus agentes no necesitan cambiar entre aplicaciones.",
        },
        {
          title: "Gestión de múltiples agentes",
          description:
            "Asigna conversaciones a diferentes agentes o equipos según reglas predefinidas: por tema, por idioma, por prioridad o por disponibilidad.",
        },
        {
          title: "Acompañamiento integral",
          description:
            "No solo implementamos la plataforma: te acompañamos en todo el proceso. Desde la configuración inicial hasta la capacitación de tu equipo y la optimización continua.",
        },
        {
          title: "Historial completo del cliente",
          description:
            "Accede al historial completo de interacciones de cada cliente sin importar por qué canal se haya comunicado. Contexto total para una atención excepcional.",
        },
        {
          title: "Automatizaciones y flujos",
          description:
            "Configura respuestas automáticas, mensajes de bienvenida, encuestas de satisfacción y flujos de trabajo que se activan según el comportamiento del cliente.",
        },
        {
          title: "Reportes y métricas",
          description:
            "Dashboard con métricas clave: tiempos de respuesta, satisfacción del cliente, productividad por agente, volumen por canal y tendencias de conversación.",
        },
      ]}
      benefits={[
        "Un solo lugar para gestionar todos los canales digitales",
        "Acompañamiento completo desde la implementación",
        "Mejora en tiempos de respuesta y satisfacción del cliente",
        "Visibilidad total de la operación de atención",
        "Capacitación y soporte continuo para tu equipo",
        "Escalabilidad: agrega canales y agentes según crezcas",
        "Reducción de mensajes perdidos o sin responder",
        "Integración con CRM y herramientas existentes",
      ]}
      ctaText="Implementar omnicanalidad"
      relatedServices={[
        { name: "ChatBot", href: "/servicios/chatbot" },
        { name: "Contact Center", href: "/servicios/contact-center" },
        { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
      ]}
    />
  );
}
