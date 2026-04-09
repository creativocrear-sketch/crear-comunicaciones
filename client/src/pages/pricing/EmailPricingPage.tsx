import { Mail } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function EmailPricingPage() {
  const { t, language } = useLanguage();

  return (
    <PricingLayout
      title={t('email pricing title', 'services')}
      subtitle={t('email pricing subtitle', 'services')}
      description={t('email pricing description', 'services')}
      icon={Mail}
      futureUrl="crearcomunicaciones.net/email"
      tiers={[
        {
          name: t('email pricing plan 1', 'services'),
          description: t('email pricing plan 1 desc', 'services'),
          price: "$8",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature max volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('email pricing plan 2', 'services'),
          description: t('email pricing plan 2 desc', 'services'),
          price: "$8.5",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature very high volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('email pricing plan 3', 'services'),
          description: t('email pricing plan 3 desc', 'services'),
          price: "$10",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature unlimited contacts', 'services'),
            t('feature dedicated ip', 'services'),
            t('feature crm integration', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('email pricing plan 4', 'services'),
          description: t('email pricing plan 4 desc', 'services'),
          price: "$11.5",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature dynamic personalization', 'services'),
            t('feature up to 25000 contacts', 'services'),
            t('feature sequence automation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
          highlighted: true,
        },
        {
          name: t('email pricing plan 5', 'services'),
          description: t('email pricing plan 5 desc', 'services'),
          price: "$12",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature drag drop editor', 'services'),
            t('feature up to 5000 contacts', 'services'),
            t('feature basic segmentation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('email pricing plan 6', 'services'),
          description: t('email pricing plan 6 desc', 'services'),
          price: "$13",
          unit: t('email pricing unit', 'services'),
          features: [
            t('feature predefined templates', 'services'),
            t('feature up to 1000 contacts', 'services'),
            t('feature basic statistics', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
      ]}
      phrases={translations[language].services['email pricing phrases']}
    />
  );
}
