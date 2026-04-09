import ServiceLayout from "@/components/ServiceLayout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/hero-banner-Ln7jguus7DwoPjfTaHqM9R.webp";

export default function AutomatizacionPage() {
  const { t, language } = useLanguage();

  return (
    <ServiceLayout
      title={t('automatizacion title', 'services')}
      subtitle={t('automatizacion subtitle', 'services')}
      description={t('automatizacion description', 'services')}
      heroImage={HERO_IMG}
      features={[
        {
          title: t('automatizacion feature 1 title', 'services'),
          description: t('automatizacion feature 1 description', 'services'),
        },
        {
          title: t('automatizacion feature 2 title', 'services'),
          description: t('automatizacion feature 2 description', 'services'),
        },
        {
          title: t('automatizacion feature 3 title', 'services'),
          description: t('automatizacion feature 3 description', 'services'),
        },
        {
          title: t('automatizacion feature 4 title', 'services'),
          description: t('automatizacion feature 4 description', 'services'),
        },
        {
          title: t('automatizacion feature 5 title', 'services'),
          description: t('automatizacion feature 5 description', 'services'),
        },
        {
          title: t('automatizacion feature 6 title', 'services'),
          description: t('automatizacion feature 6 description', 'services'),
        },
      ]}
      benefits={translations[language].services['automatizacion benefits']}
      tariffTable={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-black mb-6 text-center">
              {t('automatizacion tariffs title', 'services')}
            </h3>
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse rounded-xl overflow-hidden shadow-lg"
                style={{ tableLayout: "fixed" }}
              >
                <colgroup>
                  <col style={{ width: "22%" }} />
                  <col style={{ width: "58%" }} />
                  <col style={{ width: "20%" }} />
                </colgroup>
                <thead>
                  <tr style={{ backgroundColor: "#2D3A8C" }}>
                    <th className="p-4 text-left font-medium text-white text-sm">
                      {t('tipo de servicio', 'services')}
                    </th>
                    <th className="p-4 text-left font-medium text-white text-sm">
                      {t('descripción', 'services')}
                    </th>
                    <th className="p-4 text-left font-medium text-white text-sm leading-snug">
                      {t('valor por hora o fracción', 'services')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Asesoría comercial</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Orientación estratégica y comercial sobre servicios, procesos o soluciones.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$35 USD</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Asesoría técnica y comercial</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Sesiones con análisis técnico especializado y participación de ingeniería.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$55 USD</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-900 text-sm">Soporte operativo básico</td>
                    <td className="p-4 text-gray-600 text-sm">
                      Ejecución de tareas puntuales de apoyo operativo.
                    </td>
                    <td className="p-4 text-gray-900 text-sm">$14 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 italic text-sm text-black text-center">
              {t('automatizacion tariffs note', 'services')}
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">
              Nota: Todos los valores son en dólares y más impuestos.
            </p>
          </div>
        </motion.div>
      }
      ctaText={t('automatizacion cta', 'services')}
      relatedServices={[
        { name: t('omnicanalidad', 'navbar'), href: "/servicios/omnicanalidad" },
        { name: t('chatbot', 'navbar'), href: "/servicios/chatbot" },
        { name: t('ia para whatsapp', 'navbar'), href: "/servicios/ia-whatsapp" },
        { name: t('mensajería masiva', 'navbar'), href: "/servicios/mensajeria-masiva" },
      ]}
    />
  );
}
