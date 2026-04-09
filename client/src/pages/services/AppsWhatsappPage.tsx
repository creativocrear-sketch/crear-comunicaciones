import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/whatsapp-ai-service-2AxE4Z2qy5TuY7TsCWcGWd.webp";

export default function AppsWhatsappPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('apps whatsapp title', 'services')}
      subtitle={t('apps whatsapp subtitle', 'services')}
      description={t('apps whatsapp description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('apps whatsapp feature 1 title', 'services'),
          description: t('apps whatsapp feature 1 description', 'services'),
        },
        {
          title: t('apps whatsapp feature 2 title', 'services'),
          description: t('apps whatsapp feature 2 description', 'services'),
        },
        {
          title: t('apps whatsapp feature 3 title', 'services'),
          description: t('apps whatsapp feature 3 description', 'services'),
        },
        {
          title: t('apps whatsapp feature 4 title', 'services'),
          description: t('apps whatsapp feature 4 description', 'services'),
        },
        {
          title: t('apps whatsapp feature 5 title', 'services'),
          description: t('apps whatsapp feature 5 description', 'services'),
        },
        {
          title: t('apps whatsapp feature 6 title', 'services'),
          description: t('apps whatsapp feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['apps whatsapp benefits']}
      ctaText={t('apps whatsapp cta', 'services')}
      relatedServices={[
        { name: t('ia para whatsapp', 'navbar'), href: "/servicios/ia-whatsapp" },
        { name: t('chatbot', 'navbar'), href: "/servicios/chatbot" },
        { name: t('catálogos de productos', 'navbar'), href: "/servicios/catalogos-whatsapp" },
      ]}
    />
  );
}
