/*
 * ServiceLayout — Layout reutilizable para páginas internas de servicio
 * Hero con imagen, contenido principal, CTA final
 */
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";

interface Feature {
  title: string;
  description: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: Feature[];
  benefits: string[];
  tariffTable?: React.ReactNode;
  ctaText?: string;
  relatedServices?: { name: string; href: string }[];
}

export default function ServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  tariffTable,
  ctaText = "Solicitar información",
  relatedServices = [],
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>

        {/* Decorative waves */}
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
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              {subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {title}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#FFFFFF" />

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Características principales
            </h2>
            <p className="text-gray-600">
              Descubre todo lo que esta solución puede hacer por tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="bg-pearl rounded-2xl p-6 border border-navy/5"
              >
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <div className="bg-white">
        <WaveDivider from="#FFFFFF" to="#0F2044" />
      </div>
      <section className="bg-navy py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              Beneficios para tu empresa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                  <span className="text-white/75 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            {tariffTable}
          </div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* CTA */}
      <section className="bg-pearl py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-gray-600 mb-8">
              Contáctenos hoy y reciba una asesoría personalizada sin costo.
              Nuestro equipo está listo para ayudarle.
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
                {ctaText}
              </a>
              <a
                href="mailto:alexmurillo@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Enviar correo
              </a>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-black mb-5 text-center">
                Servicios relacionados
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 bg-white text-navy hover:text-coral px-4 py-2 rounded-lg text-sm font-medium border border-navy/10 transition-colors"
                  >
                    {s.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
