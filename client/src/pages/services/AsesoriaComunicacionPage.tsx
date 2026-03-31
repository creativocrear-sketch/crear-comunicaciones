import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/omnichannel-service-hwhXiFRWvWeX3BTHYRTXoS.webp";

export default function AsesoriaComunicacionPage() {
  return (
    <ServiceLayout
      title="Asesoría en comunicación masiva"
      subtitle="Estrategia multicanal para tu empresa"
      description="Te asesor?amos en el diseño y ejecución de campañas de comunicación masiva a través de múltiples canales: SMS, Mensajes de Voz, Email y WhatsApp. Organizamos tus bases de datos, definimos la estrategia por canal y te acompañamos en cada envío. Tus datos de contacto siempre son tuyos — nosotros solo te ayudamos a usarlos de forma inteligente."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Campañas multicanal coordinadas",
          description:
            "Diseñamos campañas que combinan SMS, Mensajes de Voz, Email y WhatsApp de forma coordinada. Cada canal cumple un rol específico: el SMS para la urgencia, el Email para el detalle, la Voz para el impacto personal y WhatsApp para la conversación directa. Una estrategia integrada que maximiza el alcance y la efectividad.",
        },
        {
          title: "Organización y limpieza de bases de datos",
          description:
            "Antes de cualquier envío, organizamos y depuramos tu base de datos. Eliminamos duplicados, corregimos formatos, validamos correos y números telefónicos, y segmentamos tus contactos por criterios relevantes para tu negocio. Una base de datos limpia es la base de toda campaña exitosa.",
        },
        {
          title: "Tus datos, tu propiedad",
          description:
            "Los datos de tus contactos son exclusivamente tuyos. Nosotros actuamos como asesores y operadores técnicos, pero la base de datos siempre permanece bajo tu control y propiedad. No compartimos, vendemos ni utilizamos tus contactos para ningún fin ajeno a tus campañas.",
        },
        {
          title: "Segmentación inteligente por canal",
          description:
            "No todos los contactos responden igual en cada canal. Analizamos el comportamiento de tu audiencia para determinar quién recibe SMS, quién recibe Email, quién prefiere WhatsApp y quién responde mejor a mensajes de Voz. Así cada mensaje llega por el canal más efectivo.",
        },
        {
          title: "Planificación y calendario de envíos",
          description:
            "Definimos junto a ti un calendario de campañas con fechas, horarios óptimos, canales y mensajes. Programamos los envíos para que se ejecuten en el momento de mayor impacto, evitando saturar a tus contactos y respetando las mejores prácticas de comunicación masiva.",
        },
        {
          title: "Reportes y análisis de resultados",
          description:
            "Después de cada campaña recibes un reporte detallado: tasas de entrega, apertura, clics, respuestas y conversiones por canal. Analizamos los resultados contigo para optimizar las siguientes campañas y mejorar continuamente el retorno de tu inversión.",
        },
      ]}
      benefits={[
        "Estrategia personalizada combinando SMS, Voz, Email y WhatsApp",
        "Base de datos organizada, limpia y segmentada antes de cada envío",
        "Propiedad total de tus datos de contacto — siempre son tuyos",
        "Mayor efectividad al usar el canal correcto para cada audiencia",
        "Calendario de campañas planificado con horarios óptimos de envío",
        "Reportes detallados de resultados por canal después de cada campaña",
        "Cumplimiento de normativas de protección de datos y privacidad",
        "Acompañamiento continuo de nuestro equipo de expertos en cada paso",
      ]}
      ctaText="Solicitar asesoría"
      relatedServices={[
        { name: "Mensajería masiva", href: "/servicios/mensajeria-masiva" },
        { name: "Consultoría de automatización", href: "/servicios/automatizacion" },
        { name: "Omnicanalidad", href: "/servicios/omnicanalidad" },
        { name: "Contact Center", href: "/servicios/contact-center" },
      ]}
    />
  );
}
