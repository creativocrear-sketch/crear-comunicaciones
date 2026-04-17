import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/contexts/LanguageContext';

export default function PoliticaDePrivacidadPage() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">
              {t.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-800">
              <p className="text-sm text-gray-600 mb-8">{t.lastUpdated}</p>
              
              <p className="mb-6">
                {t.introduction}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section1Title}</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section1_1Title}</h3>
              <p className="mb-4">
                {t.section1_1Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section1_2Title}</h3>
              <p className="mb-4">
                {t.section1_2Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section1_3Title}</h3>
              <p className="mb-4">
                {t.section1_3Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section2Title}</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section2_1Title}</h3>
              <p className="mb-4">
                {t.section2_1Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section2_2Title}</h3>
              <p className="mb-4">
                {t.section2_2Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section2_3Title}</h3>
              <p className="mb-4">
                {t.section2_3Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section2_4Title}</h3>
              <p className="mb-4">
                {t.section2_4Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section3Title}</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section3_1Title}</h3>
              <p className="mb-4">
                {t.section3_1Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section3_2Title}</h3>
              <p className="mb-4">
                {t.section3_2Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section3_3Title}</h3>
              <p className="mb-4">
                {t.section3_3Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section4Title}</h2>
              <p className="mb-4">
                {t.section4Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section5Title}</h2>
              
              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section5_1Title}</h3>
              <p className="mb-4">
                {t.section5_1Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section5_2Title}</h3>
              <p className="mb-4">
                {t.section5_2Content}
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">{t.section5_3Title}</h3>
              <p className="mb-4">
                {t.section5_3Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section6Title}</h2>
              <p className="mb-4">
                {t.section6Content}
              </p>

              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">{t.section7Title}</h2>
              <p className="mb-4">
                {t.section7Content}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
