import { MessageSquare } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";

export default function SMSPricingPage() {
  return (
    <PricingLayout
      title="Precios de SMS Masivos"
      subtitle="Planes de mensajería de texto"
      description="Envía mensajes de texto masivos con las mejores tarifas del mercado. Plataforma intuitiva, altas tasas de entrega y reportes en tiempo real."
      icon={MessageSquare}
      futureUrl="crearcomunicaciones.net/sms"
      tiers={[
        {
          name: "Plan #1",
          description: "De 150.001 a 250.000 SMS",
          price: "$8",
          unit: "por SMS",
          features: [
            "Máximo volumen",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #2",
          description: "De 100.001 a 150.000 SMS",
          price: "$8.5",
          unit: "por SMS",
          features: [
            "Volumen muy alto",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #3",
          description: "De 50.001 a 100.000 SMS",
          price: "$10",
          unit: "por SMS",
          features: [
            "Volumen alto",
            "Código corto dedicado",
            "Integración CRM",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #4",
          description: "De 15.001 a 50.000 SMS",
          price: "$11.5",
          unit: "por SMS",
          features: [
            "SMS hasta 1120 caracteres",
            "API de integración",
            "Estadísticas avanzadas",
            "Soporte por WhatsApp",
          ],
          highlighted: true,
        },
        {
          name: "Plan #5",
          description: "De 10.001 a 15.000 SMS",
          price: "$12",
          unit: "por SMS",
          features: [
            "SMS estándar y doble vía",
            "Programación de envíos",
            "Segmentación de contactos",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #6",
          description: "De 5.000 a 10.000 SMS",
          price: "$13",
          unit: "por SMS",
          features: [
            "Envío de SMS estándar",
            "Panel de control básico",
            "Reportes de entrega",
            "Soporte por WhatsApp",
          ],
        },
      ]}
      phrases={[
        "Nuestros acuerdos comerciales con los operadores locales garantizan un alto impacto de su mensaje en el móvil del destinatario, con tasas de entrega superiores al 95%.",
        "La plataforma de envío es completamente web, de fácil uso e intuitiva, lo que permite que cualquier miembro de tu equipo administre campañas sin necesidad de conocimientos técnicos.",
        "Los SMS doble vía permiten que tu cliente te responda de forma gratuita, abriendo un canal de comunicación bidireccional que mejora la interacción y la satisfacción.",
        "Programa tus campañas para envío inmediato o posterior, con la opción de esperar hasta 72 horas para que el mensaje se entregue cuando el móvil entre en cobertura.",
        "Vincula redes sociales, páginas web, números de WhatsApp y mucho más dentro del mensaje de texto para llevar a tus clientes directamente a la acción que deseas.",
      ]}
    />
  );
}
