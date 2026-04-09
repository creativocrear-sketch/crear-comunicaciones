/*
 * PricingLayout — Layout reutilizable para páginas de precios individuales
 * 5 casillas de precio (valor 0 editable) + 5 frases descriptivas + CTA
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tiers: PricingTier[];
  phrases: string[];
  futureUrl: string;
}

export default function PricingLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  tiers,
  phrases,
  futureUrl,
}: PricingLayoutProps) {
  const { t } = useLanguage();
  const tiersReveal = useScrollReveal(0.1);
  const phrasesReveal = useScrollReveal(0.1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('pricing back to home', 'services')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-coral" />
              </div>
              <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {title}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Pricing Tiers */}
      <section className="bg-pearl py-20" ref={tiersReveal.ref}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              {t('pricing plans and rates title', 'services')}
            </h2>
            <p className="text-gray-600">
              {t('pricing plans and rates description', 'services')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={tiersReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className={`rounded-2xl p-6 text-center border transition-all hover:-translate-y-1 hover:shadow-lg ${
                  tier.highlighted
                    ? "bg-navy text-white border-coral shadow-lg shadow-navy/20 scale-[1.02]"
                    : "bg-white text-navy border-navy/8"
                }`}
              >
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    tier.highlighted ? "text-coral" : "text-coral"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-xs mb-4 leading-relaxed ${
                    tier.highlighted ? "text-white/60" : "text-navy/50"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      tier.highlighted ? "text-white" : "text-navy"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      tier.highlighted ? "text-white/50" : "text-navy/40"
                    }`}
                  >
                    {tier.unit}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 text-left">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-coral" : "text-coral"
                        }`}
                      />
                      <span
                        className={
                          tier.highlighted ? "text-white/70" : "text-navy/60"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-coral hover:bg-coral-light text-white"
                      : "bg-navy/5 hover:bg-coral hover:text-white text-navy"
                  }`}
                >
                  {t('pricing get quote', 'services')}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Pricing Notes */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-black">{t('pricing important note', 'services')}</span> {t('pricing important note text', 'services')}
            </p>
          </div>
        </div>
      </section>

      {/* Phrases / Info Section */}
      <div className="bg-pearl">
        <WaveDivider from="#F8F9FA" to="#0F2044" />
      </div>
      <section className="bg-navy py-20" ref={phrasesReveal.ref}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              {t('pricing why choose service title', 'services')}
            </h2>
            <div className="space-y-4">
              {phrases.map((phrase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    phrasesReveal.isVisible ? { opacity: 1, x: 0 } : {}
                  }
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-coral/20 flex items-center justify-center shrink-0">
                    <span className="text-coral font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-white/75 leading-relaxed">{phrase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#FFFFFF" />

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              {t('pricing need custom quote title', 'services')}
            </h2>
            <p className="text-navy/55 mb-8">
              {t('pricing need custom quote description', 'services')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('pricing request quote', 'services')}
              </a>
              <a
                href="mailto:alexmurillo@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                {t('pricing send email', 'services')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
