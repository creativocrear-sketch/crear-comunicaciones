import { CheckCircle2 } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";

export default function ValidacionCorreosPricingPage() {
  return (
    <PricingLayout
      title="Precios de Validación de Correos"
      subtitle="Limpieza y verificación de bases de datos"
      description="Valida y limpia tu base de datos de correos electrónicos antes de enviar campañas. Reduce rebotes, protege tu reputación de envío y mejora la entregabilidad de tus emails."
      icon={CheckCircle2}
      futureUrl="crearcomunicaciones.net/validacioncorreos"
      tiers={[
        {
          name: "Plan #1",
          description: "De 150.001 a 250.000 correos",
          price: "$8",
          unit: "por correo",
          features: [
            "Máximo volumen",
            "SLA garantizado",
            "API dedicada",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #2",
          description: "De 100.001 a 150.000 correos",
          price: "$8.5",
          unit: "por correo",
          features: [
            "Volumen muy alto",
            "SLA garantizado",
            "API dedicada",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #3",
          description: "De 50.001 a 100.000 correos",
          price: "$10",
          unit: "por correo",
          features: [
            "Hasta 100.000 correos",
            "Validación automática",
            "Integración con CRM",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #4",
          description: "De 15.001 a 50.000 correos",
          price: "$11.5",
          unit: "por correo",
          features: [
            "Hasta 25.000 correos",
            "Validación en tiempo real",
            "API de integración",
            "Soporte por WhatsApp",
          ],
          highlighted: true,
        },
        {
          name: "Plan #5",
          description: "De 10.001 a 15.000 correos",
          price: "$12",
          unit: "por correo",
          features: [
            "Hasta 5.000 correos",
            "Detección de spam traps",
            "Clasificación por riesgo",
            "Soporte por WhatsApp",
          ],
        },
        {
          name: "Plan #6",
          description: "De 5.000 a 10.000 correos",
          price: "$13",
          unit: "por correo",
          features: [
            "Hasta 1.000 correos",
            "Detección de inválidos",
            "Reporte descargable",
            "Soporte por WhatsApp",
          ],
        },
      ]}
      phrases={[
        "La validación de correos electrónicos elimina direcciones inválidas, inexistentes y de riesgo de tu base de datos, reduciendo la tasa de rebote y protegiendo tu reputación de envío.",
        "Detectamos spam traps, correos temporales y direcciones de rol (info@, admin@) que pueden afectar negativamente la entregabilidad de tus campañas de email marketing.",
        "Cada correo es clasificado por nivel de riesgo — válido, arriesgado o inválido — para que tomes decisiones informadas sobre a quién enviar y a quién no.",
        "La validación en tiempo real a través de nuestra API permite verificar correos al momento del registro en tu sitio web, evitando que entren datos incorrectos a tu base desde el inicio.",
        "Mantener una base de datos limpia no solo mejora tus métricas de email marketing, sino que reduce costos al no enviar a direcciones que nunca recibirán tu mensaje.",
      ]}
    />
  );
}
