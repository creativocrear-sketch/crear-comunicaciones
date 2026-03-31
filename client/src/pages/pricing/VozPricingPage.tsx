import { Mic } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";

export default function VozPricingPage() {
  return (
    <PricingLayout
      title="Precios de SMS de Voz Masivos"
      subtitle="Planes de mensajes de voz"
      description="Envía mensajes de voz automatizados a móviles y teléfonos fijos. Ideal para campañas de cobranza, recordatorios, convocatorias y comunicaciones masivas con alto impacto."
      icon={Mic}
      futureUrl="crearcomunicaciones.net/voz"
      tiers={[
        {
          name: "Plan #1",
          description: "De 150.001 a 250.000 llamadas",
          price: "$8",
          unit: "por llamada",
          features: [
            "Máximo volumen",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #2",
          description: "De 100.001 a 150.000 llamadas",
          price: "$8.5",
          unit: "por llamada",
          features: [
            "Volumen muy alto",
            "Infraestructura dedicada",
            "SLA garantizado",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #3",
          description: "De 50.001 a 100.000 llamadas",
          price: "$10",
          unit: "por llamada",
          features: [
            "Llamadas ilimitadas",
            "Múltiples campañas simultáneas",
            "Integración con CRM",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #4",
          description: "De 15.001 a 50.000 llamadas",
          price: "$11.5",
          unit: "por llamada",
          features: [
            "Interacción por teclado (DTMF)",
            "Hasta 10.000 llamadas",
            "Estadísticas avanzadas",
            "Soporte por WhatsApp",
          ],
          highlighted: true,
        },
        {
          name: "Plan #5",
          description: "De 10.001 a 15.000 llamadas",
          price: "$12",
          unit: "por llamada",
          features: [
            "Text-to-speech en español",
            "Hasta 2.000 llamadas",
            "Programación de horarios",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #6",
          description: "De 5.000 a 10.000 llamadas",
          price: "$13",
          unit: "por llamada",
          features: [
            "Mensajes pregrabados",
            "Hasta 500 llamadas",
            "Reportes básicos",
            "Soporte por WhatsApp",
          ],
        },
      ]}
      phrases={[
        "La solución de Voz es un servicio automatizado de entrega de mensajes de voz que llega tanto a móviles como a teléfonos fijos, garantizando el máximo alcance de tu campaña.",
        "Ideal para campañas de cobranza automatizada: envía recordatorios de pago personalizados con el nombre del cliente, monto adeudado y fecha límite, todo de forma automática.",
        "La función text-to-speech convierte tu texto en voz natural en español, eliminando la necesidad de grabar mensajes y permitiéndote actualizar el contenido al instante.",
        "La interacción por teclado (DTMF) permite que el destinatario responda durante la llamada, confirmando citas, seleccionando opciones o siendo transferido a un agente en vivo.",
        "Programa tus campañas de voz en los horarios de mayor efectividad y recibe reportes detallados de llamadas completadas, contestadas, buzón de voz y números no disponibles.",
      ]}
    />
  );
}
