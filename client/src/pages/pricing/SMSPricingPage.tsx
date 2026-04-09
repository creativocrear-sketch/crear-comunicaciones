import { MessageSquare } from "lucide-react";
import PricingLayout from "@/components/PricingLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

export default function SMSPricingPage() {
  const { t, language } = useLanguage();

  return (
    <PricingLayout
      title={t('sms pricing title', 'services')}
      subtitle={t('sms pricing subtitle', 'services')}
      description={t('sms pricing description', 'services')}
      icon={MessageSquare}
      futureUrl="crearcomunicaciones.net/sms"
      tiers={[
        {
          name: t('sms pricing plan 1', 'services'),
          description: t('sms pricing plan 1 desc', 'services'),
          price: "$8",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature max volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('sms pricing plan 2', 'services'),
          description: t('sms pricing plan 2 desc', 'services'),
          price: "$8.5",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature very high volume', 'services'),
            t('feature dedicated infrastructure', 'services'),
            t('feature sla guaranteed', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('sms pricing plan 3', 'services'),
          description: t('sms pricing plan 3 desc', 'services'),
          price: "$10",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature high volume', 'services'),
            t('feature dedicated short code', 'services'),
            t('feature crm integration', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('sms pricing plan 4', 'services'),
          description: t('sms pricing plan 4 desc', 'services'),
          price: "$11.5",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature sms up to 1120 chars', 'services'),
            t('feature integration api', 'services'),
            t('feature advanced statistics', 'services'),
            t('feature whatsapp support', 'services'),
          ],
          highlighted: true,
        },
        {
          name: t('sms pricing plan 5', 'services'),
          description: t('sms pricing plan 5 desc', 'services'),
          price: "$12",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature standard two way sms', 'services'),
            t('feature sending scheduling', 'services'),
            t('feature contact segmentation', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
        {
          name: t('sms pricing plan 6', 'services'),
          description: t('sms pricing plan 6 desc', 'services'),
          price: "$13",
          unit: t('sms pricing unit', 'services'),
          features: [
            t('feature standard sms sending', 'services'),
            t('feature basic control panel', 'services'),
            t('feature delivery reports', 'services'),
            t('feature whatsapp support', 'services'),
          ],
        },
      ]}
      phrases={translations[language].services['sms pricing phrases']}
    />
  );
}
