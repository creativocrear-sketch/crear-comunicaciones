import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, BookOpen, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InstagramArticlePage() {
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
                <span>Equipo de Marketing</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 1 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 1 subtitle', 'blog')}
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
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('articulo 1 introduction', 'blog')}
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {t('articulo 1 concepto 1 title', 'blog')}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? `Instagram ofrece herramientas poderosas para la comunicación visual, la interacción con la audiencia y la distribución de contenido. Permite a las marcas:`
                    : `Instagram offers powerful tools for visual communication, audience interaction, and content distribution. It allows brands to:`
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Mostrar productos y servicios:' : 'Showcase products and services:'}</strong> {language === 'es' 
                        ? 'A través de imágenes y videos de alta calidad, las empresas pueden exhibir sus ofertas de manera atractiva.'
                        : 'Through high-quality images and videos, businesses can showcase their offerings attractively.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Construir comunidad:' : 'Build community:'}</strong> {language === 'es' 
                        ? 'Las funciones interactivas como historias, encuestas, preguntas y comentarios facilitan la creación de una comunidad comprometida alrededor de la marca.'
                        : 'Interactive features like stories, polls, questions, and comments facilitate the creation of an engaged community around the brand.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Dirigir tráfico:' : 'Drive traffic:'}</strong> {language === 'es' 
                        ? 'Links en biografía, stories con swipe up y etiquetas de productos pueden dirigir tráfico cualificado al sitio web o tienda online.'
                        : 'Links in bio, stories with swipe up, and product tags can drive qualified traffic to the website or online store.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Generar reconocimiento de marca:' : 'Generate brand recognition:'}</strong> {language === 'es' 
                        ? 'La presencia constante y coherente ayuda a mantener la marca en la mente de los consumidores.'
                        : 'Constant and consistent presence helps keep the brand top of mind for consumers.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategy Section */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {t('articulo 1 concepto 2 title', 'blog')}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? `Una estrategia robusta de marketing digital debe incluir:`
                    : `A robust digital marketing strategy should include:`
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Definición de objetivos SMART:' : 'Definition of SMART objectives:'}</strong> {language === 'es' 
                        ? 'Específicos, Medibles, Alcanzables, Relevantes y con Plazo definido.'
                        : 'Specific, Measurable, Achievable, Relevant, and Time-bound.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Identificación del público objetivo:' : 'Identification of target audience:'}</strong> {language === 'es' 
                        ? 'Demografía, intereses, comportamientos y necesidades.'
                        : 'Demographics, interests, behaviors, and needs.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Propuesta de valor única:' : 'Unique value proposition:'}</strong> {language === 'es' 
                        ? 'Qué hace diferente a tu marca y por qué deberían elegirte.'
                        : 'What makes your brand different and why they should choose you.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Mensaje clave y tono de voz:' : 'Key message and tone of voice:'}</strong> {language === 'es' 
                        ? 'Comunicación consistente que resuene con tu audiencia.'
                        : 'Consistent communication that resonates with your audience.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Selección de canales:' : 'Channel selection:'}</strong> {language === 'es' 
                        ? 'Elegir las plataformas donde está tu público y donde puedes tener mayor impacto.'
                        : 'Choose platforms where your audience is and where you can have the greatest impact.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Plan de contenido y calendario editorial:' : 'Content plan and editorial calendar:'}</strong> {language === 'es' 
                        ? 'Contenido relevante y consistente publicado en el momento adecuado.'
                        : 'Relevant and consistent content published at the right time.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Medición y análisis de resultados:' : 'Measurement and analysis of results:'}</strong> {language === 'es' 
                        ? 'KPIs, métricas y optimización continua.'
                        : 'KPIs, metrics, and continuous optimization.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Integration Section */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {t('articulo 1 concepto 3 title', 'blog')}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? `Para maximizar el potencial de Instagram, es fundamental:`
                    : `To maximize Instagram's potential, it's essential to:`
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Alinear contenido de Instagram con objetivos comerciales:' : 'Align Instagram content with business objectives:'}</strong> {language === 'es' 
                        ? 'Cada post debe contribuir a los objetivos generales de la empresa.'
                        : 'Every post should contribute to the overall business objectives.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Mantener consistencia visual y de mensaje:' : 'Maintain visual and message consistency:'}</strong> {language === 'es' 
                        ? 'La identidad de marca debe ser coherente en todos los canales.'
                        : 'Brand identity must be consistent across all channels.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Integrar con otras plataformas:' : 'Integrate with other platforms:'}</strong> {language === 'es' 
                        ? 'Instagram debe trabajar en sinergia con email, web, y otros canales.'
                        : 'Instagram must work in synergy with email, web, and other channels.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Medir el impacto real en el negocio:' : 'Measure real business impact:'}</strong> {language === 'es' 
                        ? 'No solo métricas de vanidad, sino cómo Instagram contribuye a las ventas y al crecimiento.'
                        : 'Not just vanity metrics, but how Instagram contributes to sales and growth.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Conclusión' : 'Conclusion'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'es' 
                  ? 'Instagram es una herramienta increíblemente poderosa, pero solo cuando se integra correctamente en una estrategia de marketing más amplia. No es la estrategia en sí misma, sino un canal táctico que, cuando se alinea con objetivos claros, público definido y propuesta de valor sólida, puede generar resultados excepcionales. El éxito no está en tener presencia en Instagram, sino en usar Instagram estratégicamente para alcanzar los objetivos de negocio.'
                  : 'Instagram is an incredibly powerful tool, but only when properly integrated into a broader marketing strategy. It is not the strategy itself, but a tactical channel that, when aligned with clear objectives, defined audience, and solid value proposition, can generate exceptional results. Success is not in being on Instagram, but in using Instagram strategically to achieve business objectives.'
                }
              </p>
            </div>

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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
