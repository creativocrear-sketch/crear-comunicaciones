import { Mail } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";

export default function EmailPricingPage() {
  return (
    <PricingLayout
      title="Precios de Email Masivos"
      subtitle="Planes de email marketing"
      description="Crea y gestiona campañas de email marketing interactivas con diseño profesional, seguimiento avanzado y métricas detalladas para optimizar tus resultados."
      icon={Mail}
      futureUrl="crearcomunicaciones.net/email"
      tiers={[
        {
          name: "Plan #1",
          description: "De 150.001 a 250.000 emails",
          price: "$8",
          unit: "por email",
          features: [
            "Máximo volumen",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #2",
          description: "De 100.001 a 150.000 emails",
          price: "$8.5",
          unit: "por email",
          features: [
            "Volumen muy alto",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #3",
          description: "De 50.001 a 100.000 emails",
          price: "$10",
          unit: "por email",
          features: [
            "Contactos ilimitados",
            "IP dedicada",
            "Integración con CRM",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #4",
          description: "De 15.001 a 50.000 emails",
          price: "$11.5",
          unit: "por email",
          features: [
            "Personalización dinámica",
            "Hasta 25.000 contactos",
            "Automatización de secuencias",
            "Soporte por WhatsApp",
          ],
          highlighted: true,
        },
        {
          name: "Plan #5",
          description: "De 10.001 a 15.000 emails",
          price: "$12",
          unit: "por email",
          features: [
            "Editor drag & drop",
            "Hasta 5.000 contactos",
            "Segmentación básica",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #6",
          description: "De 5.000 a 10.000 emails",
          price: "$13",
          unit: "por email",
          features: [
            "Plantillas prediseñadas",
            "Hasta 1.000 contactos",
            "Estadísticas básicas",
            "Soporte por WhatsApp",
          ],
        },
      ]}
      phrases={[
        "El módulo de email te permite crear y gestionar campañas interactivas con un editor visual drag & drop que no requiere conocimientos de diseño ni programación.",
        "Segmenta tu audiencia con filtros avanzados para enviar el mensaje correcto a la persona correcta en el momento adecuado, maximizando las tasas de apertura y conversión.",
        "Realiza pruebas A/B de asuntos, contenido y horarios de envío para descubrir qué funciona mejor con tu audiencia y optimizar cada campaña de forma continua.",
        "Obtén métricas detalladas de cada campaña: tasas de apertura, clics, rebotes, desuscripciones y conversiones, todo en un dashboard intuitivo y en tiempo real.",
        "Automatiza secuencias de correos para nutrir leads, dar la bienvenida a nuevos suscriptores, recuperar carritos abandonados y mantener a tu audiencia comprometida.",
      ]}
    />
  );
}
