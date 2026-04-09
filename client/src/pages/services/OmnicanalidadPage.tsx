import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/omnichannel-service-hwhXiFRWvWeX3BTHYRTXoS.webp";

export default function OmnicanalidadPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('omnicanalidad title', 'services')}
      subtitle={t('omnicanalidad subtitle', 'services')}
      description={t('omnicanalidad description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('omnicanalidad feature 1 title', 'services'),
          description: t('omnicanalidad feature 1 description', 'services'),
        },
        {
          title: t('omnicanalidad feature 2 title', 'services'),
          description: t('omnicanalidad feature 2 description', 'services'),
        },
        {
          title: t('omnicanalidad feature 3 title', 'services'),
          description: t('omnicanalidad feature 3 description', 'services'),
        },
        {
          title: t('omnicanalidad feature 4 title', 'services'),
          description: t('omnicanalidad feature 4 description', 'services'),
        },
        {
          title: t('omnicanalidad feature 5 title', 'services'),
          description: t('omnicanalidad feature 5 description', 'services'),
        },
        {
          title: t('omnicanalidad feature 6 title', 'services'),
          description: t('omnicanalidad feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['omnicanalidad benefits']}
      ctaText={t('omnicanalidad cta', 'services')}
      relatedServices={[
        { name: t('chatbot', 'navbar'), href: "/servicios/chatbot" },
        { name: t('contact center', 'navbar'), href: "/servicios/contact-center" },
        { name: t('ia para whatsapp', 'navbar'), href: "/servicios/ia-whatsapp" },
      ]}
    />
  );
}
