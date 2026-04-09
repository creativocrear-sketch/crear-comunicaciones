import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";

// Import translations directly to access arrays
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/chatbot-service-MKngq4iXbBoJLwe2VSTrLN.webp";

export default function ChatbotPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('chatbot title', 'services')}
      subtitle={t('chatbot subtitle', 'services')}
      description={t('chatbot description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('chatbot feature 1 title', 'services'),
          description: t('chatbot feature 1 description', 'services'),
        },
        {
          title: t('chatbot feature 2 title', 'services'),
          description: t('chatbot feature 2 description', 'services'),
        },
        {
          title: t('chatbot feature 3 title', 'services'),
          description: t('chatbot feature 3 description', 'services'),
        },
        {
          title: t('chatbot feature 4 title', 'services'),
          description: t('chatbot feature 4 description', 'services'),
        },
        {
          title: t('chatbot feature 5 title', 'services'),
          description: t('chatbot feature 5 description', 'services'),
        },
        {
          title: t('chatbot feature 6 title', 'services'),
          description: t('chatbot feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['chatbot benefits']}
      ctaText={t('request chatbot', 'services')}
      relatedServices={[
        { name: t('ia whatsapp title', 'services'), href: "/servicios/ia-whatsapp" },
        { name: t('omnicanalidad title', 'services'), href: "/servicios/omnicanalidad" },
        { name: t('apps whatsapp title', 'services'), href: "/servicios/apps-whatsapp" },
      ]}
    />
  );
}
