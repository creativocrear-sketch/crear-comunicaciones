import { Mic } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function VozPricingPage() {
  const { t, language } = useLanguage();

  return (
    <PricingLayout
      title={t('voice pricing title', 'services')}
      subtitle={t('voice pricing subtitle', 'services')}
      description={t('voice pricing description', 'services')}
      icon={Mic}
      futureUrl="crearcomunicaciones.net/voz"
      tiers={[
        {
          name: t('voice pricing plan 1', 'services'),
          description: t('voice pricing plan 1 desc', 'services'),
          price: "$8",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature max volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('voice pricing plan 2', 'services'),
          description: t('voice pricing plan 2 desc', 'services'),
          price: "$8.5",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature very high volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('voice pricing plan 3', 'services'),
          description: t('voice pricing plan 3 desc', 'services'),
          price: "$10",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature unlimited calls', 'services'),
            t('feature multiple simultaneous campaigns', 'services'),
            t('feature crm integration', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('voice pricing plan 4', 'services'),
          description: t('voice pricing plan 4 desc', 'services'),
          price: "$11.5",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature dtmf interaction', 'services'),
            t('feature up to 10000 calls', 'services'),
            t('feature advanced statistics', 'services'),
            t('feature whatsapp support', 'services'),
          ],
          highlighted: true,
        },
        {
          name: t('voice pricing plan 5', 'services'),
          description: t('voice pricing plan 5 desc', 'services'),
          price: "$12",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature text to speech spanish', 'services'),
            t('feature up to 2000 calls', 'services'),
            t('feature schedule programming', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('voice pricing plan 6', 'services'),
          description: t('voice pricing plan 6 desc', 'services'),
          price: "$13",
          unit: t('voice pricing unit', 'services'),
          features: [
            t('feature prerecorded messages', 'services'),
            t('feature up to 500 calls', 'services'),
            t('feature basic reports', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
      ]}
      phrases={translations[language].services['voice pricing phrases']}
    />
  );
}
