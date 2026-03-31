import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/whatsapp-ai-service-2AxE4Z2qy5TuY7TsCWcGWd.webp";

export default function AppsWhatsappPage() {
  return (
    <ServiceLayout
      title="APP's con WhatsApp"
      subtitle="Desarrollo de aplicaciones integradas"
      description="Desarrollamos aplicaciones móviles y web personalizadas que se integran directamente con la API de WhatsApp Business. Desde sistemas de reservas hasta plataformas de e-commerce, llevamos el poder de WhatsApp a tu aplicación empresarial."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Aplicaciones a medida",
          description:
            "Diseñamos y desarrollamos aplicaciones completamente personalizadas según las necesidades específicas de tu negocio, con integración nativa de WhatsApp Business API.",
        },
        {
          title: "Notificaciones transaccionales",
          description:
            "Envía confirmaciones de pedido, actualizaciones de envío, recordatorios de cita y más directamente al WhatsApp de tus clientes desde tu aplicación.",
        },
        {
          title: "Sistemas de reservas y citas",
          description:
            "Aplicaciones que permiten a tus clientes agendar citas, reservar servicios y recibir confirmaciones y recordatorios automáticos por WhatsApp.",
        },
        {
          title: "Plataformas de e-commerce",
          description:
            "Tiendas en línea con carrito de compras, pagos integrados y comunicación directa con el cliente vía WhatsApp para soporte y seguimiento de pedidos.",
        },
        {
          title: "Dashboards y paneles de control",
          description:
            "Interfaces administrativas para gestionar tu negocio, con reportes en tiempo real y la capacidad de comunicarte con clientes directamente desde el panel.",
        },
        {
          title: "APIs y microservicios",
          description:
            "Arquitectura moderna basada en APIs que permite integrar WhatsApp con tus sistemas existentes: ERP, CRM, facturación y más.",
        },
      ]}
      benefits={[
        "Aplicaciones personalizadas para tu modelo de negocio",
        "Integración directa con WhatsApp Business API",
        "Comunicación bidireccional con clientes desde la app",
        "Automatización de procesos empresariales",
        "Escalabilidad para crecer con tu negocio",
        "Soporte técnico y mantenimiento continuo",
        "Diseño responsive para móvil y escritorio",
        "Seguridad y protección de datos empresariales",
      ]}
      ctaText="Cotizar mi aplicación"
      relatedServices={[
        { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
        { name: "ChatBot", href: "/servicios/chatbot" },
        { name: "Catálogos WhatsApp", href: "/servicios/catalogos-whatsapp" },
      ]}
    />
  );
}
