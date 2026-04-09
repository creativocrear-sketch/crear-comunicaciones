import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/chatbot-service-MKngq4iXbBoJLwe2VSTrLN.webp";

export default function CatalogosWhatsappPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('catalogos title', 'services')}
      subtitle={t('catalogos subtitle', 'services')}
      description={t('catalogos description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('catalogos feature 1 title', 'services'),
          description: t('catalogos feature 1 description', 'services'),
        },
        {
          title: t('catalogos feature 2 title', 'services'),
          description: t('catalogos feature 2 description', 'services'),
        },
        {
          title: t('catalogos feature 3 title', 'services'),
          description: t('catalogos feature 3 description', 'services'),
        },
        {
          title: t('catalogos feature 4 title', 'services'),
          description: t('catalogos feature 4 description', 'services'),
        },
        {
          title: t('catalogos feature 5 title', 'services'),
          description: t('catalogos feature 5 description', 'services'),
        },
        {
          title: t('catalogos feature 6 title', 'services'),
          description: t('catalogos feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['catalogos benefits']}
      ctaText={t('catalogos cta', 'services')}
      relatedServices={[
        { name: t('ia para whatsapp', 'navbar'), href: "/servicios/ia-whatsapp" },
        { name: t('apps con whatsapp', 'navbar'), href: "/servicios/apps-whatsapp" },
        { name: t('chatbot', 'navbar'), href: "/servicios/chatbot" },
      ]}
    />
  );
}
