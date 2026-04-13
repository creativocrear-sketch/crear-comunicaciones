import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Zap, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MutationPage() {
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
                <span>5 min</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Innovador Digital</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 5 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 5 subtitle', 'blog')}
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
                  ? 'En un mundo caracterizado por el cambio constante y acelerado, la capacidad de mutar no es solo una ventaja competitiva, sino una necesidad para la supervivencia de cualquier organización o individuo. El concepto de mutación, tomado de la biología, se refiere a la adaptación y transformación frente a nuevas condiciones. En el ámbito empresarial y personal, implica la flexibilidad para evolucionar, innovar y reinventarse. Este artículo explorará por qué la mutación es crucial en la actualidad y cómo cultivarla para prosperar en entornos dinámicos.'
                  : 'In a world characterized by constant and accelerated change, the ability to mutate is not just a competitive advantage, but a necessity for the survival of any organization or individual. The concept of mutation, taken from biology, refers to adaptation and transformation in the face of new conditions. In the business and personal sphere, it implies flexibility to evolve, innovate, and reinvent oneself. This article will explore why mutation is crucial today and how to cultivate it to thrive in dynamic environments.'
                }
              </p>
            </div>

            {/* Mutation Imperative */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'El Imperativo de la Mutación en el Siglo XXI' : 'The Imperative of Mutation in the 21st Century'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'La velocidad de los avances tecnológicos, los cambios en los patrones de consumo, las crisis económicas y sanitarias, y la globalización han creado un entorno VUCA (Volátil, Incierto, Complejo y Ambiguo) donde lo único constante es el cambio. En este escenario, la rigidez es una sentencia de muerte. Las empresas que se aferran a modelos de negocio obsoletos o a productos que ya no satisfacen las necesidades del mercado están destinadas a desaparecer.'
                  : 'The speed of technological advances, changes in consumption patterns, economic and health crises, and globalization have created a VUCA (Volatile, Uncertain, Complex, and Ambiguous) environment where the only constant is change. In this scenario, rigidity is a death sentence. Companies that cling to obsolete business models or products that no longer meet market needs are destined to disappear.'
                }
              </p>
            </div>

            {/* Driving Factors */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 5 concepto 1 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Tecnología:' : 'Technology:'}</strong> {language === 'es' 
                      ? 'La irrupción de la inteligencia artificial, el big data, la automatización y otras innovaciones que redefinen industrias enteras.'
                      : 'The emergence of artificial intelligence, big data, automation, and other innovations that redefine entire industries.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Cambio de Consumidores:' : 'Consumer Change:'}</strong> {language === 'es' 
                      ? 'Nuevas generaciones con diferentes valores, expectativas y hábitos de consumo.'
                      : 'New generations with different values, expectations, and consumption habits.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Sostenibilidad:' : 'Sustainability:'}</strong> {language === 'es' 
                      ? 'Presión social y regulatoria para adoptar prácticas más sostenibles.'
                      : 'Social and regulatory pressure to adopt more sustainable practices.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Globalización:' : 'Globalization:'}</strong> {language === 'es' 
                      ? 'Competencia global que exige mayor eficiencia y adaptación cultural.'
                      : 'Global competition that demands greater efficiency and cultural adaptation.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Mutation Strategies */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 5 concepto 2 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Innovación Continua:' : 'Continuous Innovation:'}</strong> {language === 'es' 
                      ? 'Crear una cultura donde la innovación es constante y no ocasional.'
                      : 'Create a culture where innovation is constant and not occasional.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Agilidad Organizacional:' : 'Organizational Agility:'}</strong> {language === 'es' 
                      ? 'Estructuras flexibles que permiten respuestas rápidas al cambio.'
                      : 'Flexible structures that allow rapid responses to change.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Aprendizaje Continuo:' : 'Continuous Learning:'}</strong> {language === 'es' 
                      ? 'Inversión en capacitación y desarrollo de habilidades futuras.'
                      : 'Investment in training and development of future skills.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Experimentación:' : 'Experimentation:'}</strong> {language === 'es' 
                      ? 'Fomentar la prueba de nuevas ideas sin miedo al fracaso.'
                      : 'Encourage testing new ideas without fear of failure.'
                    }
                  </div>
                </li>
              </ul>
            </div>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Equipos diversos aportan diferentes perspectivas y facilitan la identificación de nuevas oportunidades y soluciones.'
                      : 'Diverse teams bring different perspectives and facilitate the identification of new opportunities and solutions.'
                    }
                  </p>
                </div>

                {/* Strategy 7 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '7. Escucha Activa del Entorno:' : '7. Active Environmental Listening:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Monitorear constantemente las tendencias del mercado, las necesidades de los clientes y los movimientos de la competencia.'
                      : 'Constantly monitor market trends, customer needs, and competitor movements.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Conclusión' : 'Conclusion'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'es' 
                  ? 'La mutación es la clave para la resiliencia y el éxito a largo plazo. Aquellos que abrazan el cambio, que están dispuestos a cuestionar sus propios paradigmas y a reinventarse, serán los que no solo sobrevivan, sino que prosperen en el futuro. No se trata de cambiar por cambiar, sino de evolucionar con propósito, manteniendo la esencia pero adaptando la forma para seguir siendo relevante y valioso en un mundo en constante transformación.'
                  : 'Mutation is the key to resilience and long-term success. Those who embrace change, who are willing to question their own paradigms and reinvent themselves, will be those who not only survive but thrive in the future. It\'s not about changing for the sake of changing, but about evolving with purpose, maintaining the essence while adapting the form to remain relevant and valuable in a constantly transforming world.'
                }
              </p>
            </div>
          </motion.div>

          {/* Share and Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
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
            </div>
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
                href="/blog/instagram-no-es-marketing"
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
                href="/blog/sin-redes-sociales"
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
