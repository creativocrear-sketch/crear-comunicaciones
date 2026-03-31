import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/whatsapp-ai-service-2AxE4Z2qy5TuY7TsCWcGWd.webp";

export default function IAWhatsappPage() {
  return (
    <ServiceLayout
      title="IA para WhatsApp"
      subtitle="Inteligencia artificial conversacional"
      description="Potencia tu WhatsApp Business con inteligencia artificial de última generación. Nuestras soluciones de IA permiten que tu empresa ofrezca respuestas inteligentes, personalizadas y contextuales a través del canal de mensajería más utilizado del mundo."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Comprensión del lenguaje natural",
          description:
            "La IA entiende lo que tus clientes escriben, sin importar cómo lo expresen. Reconoce intenciones, extrae información clave y responde de forma natural y coherente.",
        },
        {
          title: "Automatización inteligente de ventas",
          description:
            "Desde la primera consulta hasta el cierre, la IA guía al cliente por el embudo de ventas: presenta productos, responde objeciones, calcula precios y agenda citas.",
        },
        {
          title: "Aprendizaje continuo",
          description:
            "El sistema aprende de cada interacción para mejorar sus respuestas con el tiempo. Cuanto más se usa, más preciso y eficiente se vuelve.",
        },
        {
          title: "Personalización por contexto",
          description:
            "La IA recuerda el historial de conversación y los datos del cliente para ofrecer respuestas personalizadas, recomendaciones relevantes y un trato único.",
        },
        {
          title: "Integración con WhatsApp Business API",
          description:
            "Conexión directa con la API oficial de WhatsApp Business para garantizar estabilidad, seguridad y cumplimiento de las políticas de Meta.",
        },
        {
          title: "Análisis de sentimiento",
          description:
            "Detecta el estado emocional del cliente en tiempo real para adaptar el tono de las respuestas y escalar a un agente humano cuando sea necesario.",
        },
      ]}
      benefits={[
        "Respuestas inteligentes y contextuales las 24 horas",
        "Incremento significativo en la tasa de conversión",
        "Reducción del tiempo de respuesta a segundos",
        "Atención personalizada a escala masiva",
        "Integración nativa con WhatsApp Business API",
        "Reportes detallados de interacciones y rendimiento",
        "Escalamiento automático a agentes humanos",
        "Cumplimiento con políticas de privacidad y datos",
      ]}
      ctaText="Activar IA en mi WhatsApp"
      relatedServices={[
        { name: "ChatBot", href: "/servicios/chatbot" },
        { name: "APP's con WhatsApp", href: "/servicios/apps-whatsapp" },
        { name: "Catálogos WhatsApp", href: "/servicios/catalogos-whatsapp" },
      ]}
    />
  );
}
