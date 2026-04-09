import { CheckCircle2 } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function ValidacionCorreosPricingPage() {
  const { t, language } = useLanguage();

  return (
    <PricingLayout
      title={t('validation pricing title', 'services')}
      subtitle={t('validation pricing subtitle', 'services')}
      description={t('validation pricing description', 'services')}
      icon={CheckCircle2}
      futureUrl="crearcomunicaciones.net/validacioncorreos"
      tiers={[
        {
          name: t('validation pricing plan 1', 'services'),
          description: t('validation pricing plan 1 desc', 'services'),
          price: "$8",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature max volume', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature integration api validation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('validation pricing plan 2', 'services'),
          description: t('validation pricing plan 2 desc', 'services'),
          price: "$8.5",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature very high volume', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature integration api validation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('validation pricing plan 3', 'services'),
          description: t('validation pricing plan 3 desc', 'services'),
          price: "$10",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature up to 100000 emails', 'services'),
            t('feature automatic validation', 'services'),
            t('feature crm integration', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('validation pricing plan 4', 'services'),
          description: t('validation pricing plan 4 desc', 'services'),
          price: "$11.5",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature up to 25000 emails', 'services'),
            t('feature real time validation', 'services'),
            t('feature integration api validation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
          highlighted: true,
        },
        {
          name: t('validation pricing plan 5', 'services'),
          description: t('validation pricing plan 5 desc', 'services'),
          price: "$12",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature up to 5000 emails', 'services'),
            t('feature spam traps detection', 'services'),
            t('feature risk classification', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('validation pricing plan 6', 'services'),
          description: t('validation pricing plan 6 desc', 'services'),
          price: "$13",
          unit: t('validation pricing unit', 'services'),
          features: [
            t('feature up to 1000 emails validation', 'services'),
            t('feature invalid detection', 'services'),
            t('feature downloadable report', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
      ]}
      phrases={translations[language].services['validation pricing phrases']}
    />
  );
}
