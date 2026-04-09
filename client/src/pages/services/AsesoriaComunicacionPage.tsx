import ServiceLayout from "@/components/ServiceLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/omnichannel-service-hwhXiFRWvWeX3BTHYRTXoS.webp";

export default function AsesoriaComunicacionPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('asesoria title', 'services')}
      subtitle={t('asesoria subtitle', 'services')}
      description={t('asesoria description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('asesoria feature 1 title', 'services'),
          description: t('asesoria feature 1 description', 'services'),
        },
        {
          title: t('asesoria feature 2 title', 'services'),
          description: t('asesoria feature 2 description', 'services'),
        },
        {
          title: t('asesoria feature 3 title', 'services'),
          description: t('asesoria feature 3 description', 'services'),
        },
        {
          title: t('asesoria feature 4 title', 'services'),
          description: t('asesoria feature 4 description', 'services'),
        },
        {
          title: t('asesoria feature 5 title', 'services'),
          description: t('asesoria feature 5 description', 'services'),
        },
        {
          title: t('asesoria feature 6 title', 'services'),
          description: t('asesoria feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['asesoria benefits']}
      ctaText={t('asesoria cta', 'services')}
      relatedServices={[
        { name: t('mensajería masiva', 'navbar'), href: "/servicios/mensajeria-masiva" },
        { name: t('consultoría de automatización', 'navbar'), href: "/servicios/automatizacion" },
        { name: t('omnicanalidad', 'navbar'), href: "/servicios/omnicanalidad" },
        { name: t('contact center', 'navbar'), href: "/servicios/contact-center" },
      ]}
    />
  );
}
