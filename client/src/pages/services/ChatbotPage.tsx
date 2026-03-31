import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/chatbot-service-MKngq4iXbBoJLwe2VSTrLN.webp";

export default function ChatbotPage() {
  return (
    <ServiceLayout
      title="Chatbot inteligente"
      subtitle="Automatización conversacional"
      description="Diseñamos y desarrollamos chatbots personalizados para los principales canales de comunicación de tu empresa: WhatsApp, Messenger, Telegram e Instagram. Automatiza la atención al cliente, genera leads y cierra ventas las 24 horas del día, los 7 días de la semana."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Multi-plataforma",
          description:
            "Un solo bot que funciona en WhatsApp, Facebook Messenger, Telegram e Instagram. Tus clientes te contactan por donde prefieran y reciben la misma experiencia de calidad.",
        },
        {
          title: "Flujos conversacionales inteligentes",
          description:
            "Diseñamos árboles de decisión y flujos de conversación adaptados a tu negocio. El bot guía al usuario paso a paso hasta resolver su consulta o completar una acción.",
        },
        {
          title: "Respuestas con IA",
          description:
            "Integración con inteligencia artificial para comprender el lenguaje natural de tus clientes y ofrecer respuestas contextuales, no solo respuestas predefinidas.",
        },
        {
          title: "Transferencia a agente humano",
          description:
            "Cuando la consulta requiere atención personalizada, el bot transfiere la conversación a un agente humano de forma transparente, sin que el cliente pierda el contexto.",
        },
        {
          title: "Métricas y reportes",
          description:
            "Panel de control con estadísticas en tiempo real: conversaciones atendidas, tasa de resolución, tiempos de respuesta y satisfacción del cliente.",
        },
        {
          title: "Integración con CRM",
          description:
            "Conectamos el chatbot con tu sistema de gestión de clientes para registrar automáticamente leads, actualizar datos y disparar acciones de seguimiento.",
        },
      ]}
      benefits={[
        "Atención al cliente 24/7 sin interrupciones",
        "Reducción de hasta el 70% en costos de atención",
        "Respuesta inmediata a consultas frecuentes",
        "Generación automática de leads calificados",
        "Escalabilidad: atiende miles de conversaciones simultáneas",
        "Mejora la satisfacción del cliente con respuestas rápidas",
        "Libera a tu equipo para tareas de mayor valor",
        "Implementación rápida y sin complicaciones técnicas",
      ]}
      ctaText="Solicitar mi Chatbot"
      relatedServices={[
        { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
        { name: "Omnicanalidad", href: "/servicios/omnicanalidad" },
        { name: "Apps con WhatsApp", href: "/servicios/apps-whatsapp" },
      ]}
    />
  );
}
