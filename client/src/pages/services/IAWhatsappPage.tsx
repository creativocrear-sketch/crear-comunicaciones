import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/whatsapp-ai-service-2AxE4Z2qy5TuY7TsCWcGWd.webp";

export default function IAWhatsappPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('ia whatsapp title', 'services')}
      subtitle={t('ia whatsapp subtitle', 'services')}
      description={t('ia whatsapp description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('ia whatsapp feature 1 title', 'services'),
          description: t('ia whatsapp feature 1 description', 'services'),
        },
        {
          title: t('ia whatsapp feature 2 title', 'services'),
          description: t('ia whatsapp feature 2 description', 'services'),
        },
        {
          title: t('ia whatsapp feature 3 title', 'services'),
          description: t('ia whatsapp feature 3 description', 'services'),
        },
        {
          title: t('ia whatsapp feature 4 title', 'services'),
          description: t('ia whatsapp feature 4 description', 'services'),
        },
        {
          title: t('ia whatsapp feature 5 title', 'services'),
          description: t('ia whatsapp feature 5 description', 'services'),
        },
        {
          title: t('ia whatsapp feature 6 title', 'services'),
          description: t('ia whatsapp feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['ia whatsapp benefits']}
      ctaText={t('ia whatsapp cta', 'services')}
      relatedServices={[
        { name: "Chatbot", href: "/servicios/chatbot" },
        { name: "Apps con WhatsApp", href: "/servicios/apps-whatsapp" },
        { name: "Catálogos de WhatsApp", href: "/servicios/catalogos-whatsapp" },
      ]}
    />
  );
}
