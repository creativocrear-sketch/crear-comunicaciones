import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Users, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RelationshipMarketingPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
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
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('volver al blog', 'layout')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 text-white/50 text-sm mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>13-04-2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Consultor de Marketing</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 3 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 3 subtitle', 'blog')}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Article Content */}
      <section className="bg-pearl py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'es' 
                  ? 'En un mercado cada vez más competitivo y saturado, la diferenciación a través del producto o precio se vuelve efímera. Es aquí donde el mercadeo relacional emerge como una estrategia fundamental. A diferencia del marketing transaccional, que se enfoca en la venta única, el mercadeo relacional busca construir y mantener relaciones duraderas y significativas con los clientes. Este artículo explorará los principios, beneficios y la implementación efectiva de esta poderosa filosofía empresarial.'
                  : 'In an increasingly competitive and saturated market, differentiation through product or price becomes ephemeral. This is where relationship marketing emerges as a fundamental strategy. Unlike transactional marketing, which focuses on single sales, relationship marketing seeks to build and maintain lasting and meaningful relationships with customers. This article will explore the principles, benefits, and effective implementation of this powerful business philosophy.'
                }
              </p>
            </div>

            {/* What is Relationship Marketing */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es el Mercadeo Relacional?' : 'What is Relationship Marketing?'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'El mercadeo relacional es una estrategia a largo plazo que se centra en la fidelización del cliente a través de la satisfacción, la confianza y el compromiso mutuo. Su objetivo principal no es solo cerrar una venta, sino establecer un vínculo emocional que convierta a los clientes en defensores de la marca. Se basa en la premisa de que retener a un cliente existente es significativamente más rentable que adquirir uno nuevo.'
                  : 'Relationship marketing is a long-term strategy that focuses on customer loyalty through satisfaction, trust, and mutual commitment. Its main objective is not just to close a sale, but to establish an emotional bond that turns customers into brand advocates. It is based on the premise that retaining an existing customer is significantly more profitable than acquiring a new one.'
                }
              </p>
            </div>

            {/* Pillars */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 3 concepto 1 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'El mercadeo relacional se fundamenta en pilares estratégicos que aseguran su efectividad y sostenibilidad a largo plazo.'
                  : 'Relationship marketing is based on strategic pillars that ensure its effectiveness and long-term sustainability.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Confianza y Transparencia:' : 'Trust and Transparency:'}</strong> {language === 'es' 
                      ? 'Cumplimiento de promesas como base del vínculo.'
                      : 'Keeping promises as the foundation of the bond.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Personalización:' : 'Personalization:'}</strong> {language === 'es' 
                      ? 'Adaptar la experiencia y las ofertas a las necesidades individuales.'
                      : 'Adapt the experience and offers to individual needs.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Retención:' : 'Retention:'}</strong> {language === 'es' 
                      ? 'Es más rentable retener a un cliente existente que adquirir uno nuevo.'
                      : 'It is more profitable to retain an existing customer than to acquire a new one.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 3 concepto 2 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Los beneficios del mercadeo relacional se traducen directamente en resultados medibles para el negocio.'
                  : 'The benefits of relationship marketing translate directly into measurable results for the business.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Aumento del CLV:' : 'Increased CLV:'}</strong> {language === 'es' 
                      ? 'Los clientes leales gastan más y con mayor frecuencia.'
                      : 'Loyal customers spend more and more frequently.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Marketing de Boca a Boca:' : 'Word of Mouth Marketing:'}</strong> {language === 'es' 
                      ? 'Clientes satisfechos se convierten en embajadores de la marca.'
                      : 'Satisfied customers become brand ambassadors.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Ventaja Competitiva:' : 'Competitive Advantage:'}</strong> {language === 'es' 
                      ? 'Las relaciones son difíciles de copiar por la competencia.'
                      : 'Relationships are difficult for competitors to copy.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 3 concepto 3 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'La implementación efectiva del mercadeo relacional requiere estrategia, tecnología y compromiso organizacional.'
                  : 'Effective implementation of relationship marketing requires strategy, technology, and organizational commitment.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Sistemas CRM:' : 'CRM Systems:'}</strong> {language === 'es' 
                      ? 'Utilizar tecnología para gestionar relaciones con clientes.'
                      : 'Use technology to manage customer relationships.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Feedback Constante:' : 'Constant Feedback:'}</strong> {language === 'es' 
                      ? 'Escuchar activamente y actuar sobre las sugerencias.'
                      : 'Listen actively and act on suggestions.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'Conclusión' : 'Conclusion'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'es' 
                  ? 'El mercadeo relacional no es una táctica, sino una filosofía empresarial que transforma la manera en que las organizaciones interactúan con sus clientes. En un mundo donde las opciones son infinitas y la lealtad es escasa, construir relaciones auténticas y duraderas se convierte en la ventaja competitiva más poderosa. Las empresas que dominen el arte de cultivar relaciones significativas no solo sobrevivirán en el mercado actual, sino que prosperarán creando una base de clientes leales que actuarán como el motor más efectivo de su crecimiento sostenible.'
                  : 'Relationship marketing is not a tactic, but a business philosophy that transforms the way organizations interact with their customers. In a world where options are infinite and loyalty is scarce, building authentic and lasting relationships becomes the most powerful competitive advantage. Companies that master the art of cultivating meaningful relationships will not only survive in the current market, but will thrive by creating a loyal customer base that will act as the most effective engine of their sustainable growth.'
                }
              </p>
            </div>

          {/* Share and Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-12 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors">
                    <Share2 className="w-5 h-5" />
                    {language === 'es' ? 'Compartir' : 'Share'}
                  </button>
                  <button className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors">
                    <Heart className="w-5 h-5" />
                    {language === 'es' ? 'Me gusta' : 'Like'}
                  </button>
                  <button className="flex items-center gap-2 text-navy/60 hover:text-navy transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {language === 'es' ? 'Comentar' : 'Comment'}
                  </button>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-navy hover:text-coral transition-colors font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {language === 'es' ? 'Volver al blog' : 'Back to blog'}
                  </Link>
                  <a
                    href="https://wa.me/573105317126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
                  >
                    {language === 'es' ? 'Hablar con un experto' : 'Talk to an expert'}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#F8F9FA" to="#0F2044" />

      {/* Related Articles */}
      <section className="bg-navy py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {language === 'es' ? 'Artículos relacionados' : 'Related Articles'}
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Descubre más contenido sobre marketing digital y estrategias de negocio'
                : 'Discover more content about digital marketing and business strategies'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {t('articulo 1 title', 'blog')}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {t('articulo 1 subtitle', 'blog')}
              </p>
              <Link
                href="/blog/instagram-no-es-marketing-digital"
                className="inline-flex items-center gap-2 text-coral hover:text-coral-light text-sm font-medium transition-colors"
              >
                {language === 'es' ? 'Leer artículo' : 'Read article'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {t('articulo 2 title', 'blog')}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {t('articulo 2 subtitle', 'blog')}
              </p>
              <Link
                href="/blog/vender-sin-redes-sociales-estrategias"
                className="inline-flex items-center gap-2 text-coral hover:text-coral-light text-sm font-medium transition-colors"
              >
                {language === 'es' ? 'Leer artículo' : 'Read article'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
