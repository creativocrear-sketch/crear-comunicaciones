import ServiceLayout from "@/components/ServiceLayout";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/chatbot-service-MKngq4iXbBoJLwe2VSTrLN.webp";

export default function CatalogosWhatsappPage() {
  return (
    <ServiceLayout
      title="Catálogos de Productos — WhatsApp"
      subtitle="Tu tienda dentro de WhatsApp"
      description="Conectamos el catálogo de productos de Meta con la API de WhatsApp Business para que tus clientes puedan explorar tu inventario, seleccionar productos y realizar pedidos directamente desde la conversación de WhatsApp. Una experiencia de compra fluida sin salir del chat."
      heroImage={HERO_IMG}
      features={[
        {
          title: "Catálogo de Meta integrado",
          description:
            "Vinculamos tu catálogo de productos de Meta (Facebook/Instagram) directamente con WhatsApp Business API. Tus productos aparecen dentro del chat con fotos, descripciones y precios.",
        },
        {
          title: "Carrito de compras en WhatsApp",
          description:
            "Tus clientes pueden agregar productos al carrito, modificar cantidades y enviar su pedido completo sin salir de la conversación de WhatsApp.",
        },
        {
          title: "Sincronización automática",
          description:
            "Los cambios en tu catálogo de Meta se reflejan automáticamente en WhatsApp. Actualiza precios, disponibilidad y descripciones desde un solo lugar.",
        },
        {
          title: "Mensajes de producto",
          description:
            "Envía productos individuales o colecciones completas como mensajes interactivos. El cliente puede ver detalles, imágenes y agregar al carrito con un toque.",
        },
        {
          title: "Gestión de pedidos",
          description:
            "Recibe y gestiona los pedidos que llegan por WhatsApp. Confirmación automática, seguimiento del estado y notificaciones al cliente en cada etapa.",
        },
        {
          title: "Análisis de ventas",
          description:
            "Reportes de productos más vistos, más vendidos, tasas de conversión y comportamiento de compra de tus clientes dentro de WhatsApp.",
        },
      ]}
      benefits={[
        "Tus clientes compran sin salir de WhatsApp",
        "Catálogo siempre actualizado y sincronizado con Meta",
        "Experiencia de compra conversacional y natural",
        "Aumento en la tasa de conversión de ventas",
        "Gestión centralizada de productos e inventario",
        "Notificaciones automáticas de estado del pedido",
        "Compatible con cualquier tipo de producto o servicio",
        "Reducción de fricción en el proceso de compra",
      ]}
      ctaText="Activar mi catálogo"
      relatedServices={[
        { name: "IA para WhatsApp", href: "/servicios/ia-whatsapp" },
        { name: "APP's con WhatsApp", href: "/servicios/apps-whatsapp" },
        { name: "ChatBot", href: "/servicios/chatbot" },
      ]}
    />
  );
}
