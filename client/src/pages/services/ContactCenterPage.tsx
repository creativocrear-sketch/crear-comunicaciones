import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/contact-center-service-5faVxkQhTvJSpXBnvnWLHp.webp";

export default function ContactCenterPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('contact center title', 'services')}
      subtitle={t('contact center subtitle', 'services')}
      description={t('contact center description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('contact center feature 1 title', 'services'),
          description: t('contact center feature 1 description', 'services'),
        },
        {
          title: t('contact center feature 2 title', 'services'),
          description: t('contact center feature 2 description', 'services'),
        },
        {
          title: t('contact center feature 3 title', 'services'),
          description: t('contact center feature 3 description', 'services'),
        },
        {
          title: t('contact center feature 4 title', 'services'),
          description: t('contact center feature 4 description', 'services'),
        },
        {
          title: t('contact center feature 5 title', 'services'),
          description: t('contact center feature 5 description', 'services'),
        },
        {
          title: t('contact center feature 6 title', 'services'),
          description: t('contact center feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['contact center benefits']}
      ctaText={t('contact center cta', 'services')}
      relatedServices={[
        { name: t('omnicanalidad', 'navbar'), href: "/servicios/omnicanalidad" },
        { name: t('chatbot', 'navbar'), href: "/servicios/chatbot" },
        { name: t('sms de voz masivos', 'navbar'), href: "/precios" },
      ]}
    />
  );
}
