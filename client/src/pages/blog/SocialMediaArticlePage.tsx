import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, TrendingUp, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SocialMediaArticlePage() {
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
                <span>7 min</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Especialista en Ventas</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 2 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 2 subtitle', 'blog')}
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
                {t('articulo 2 introduction', 'blog')}
              </p>
            </div>

            {/* Myth Section */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'El Mito de la Dependencia de las Redes Sociales' : 'The Myth of Social Media Dependency'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Las redes sociales son herramientas poderosas, pero no son el único camino hacia el cliente. La dependencia excesiva de estas plataformas puede ser riesgosa debido a:'
                  : 'Social media are powerful tools, but they are not the only path to the customer. Excessive dependency on these platforms can be risky due to:'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Cambios de algoritmo:' : 'Algorithm changes:'}</strong> {language === 'es' 
                      ? 'Las plataformas pueden modificar sus algoritmos en cualquier momento, afectando drásticamente el alcance orgánico y la visibilidad.'
                      : 'Platforms can modify their algorithms at any time, drastically affecting organic reach and visibility.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Competencia saturada:' : 'Saturated competition:'}</strong> {language === 'es' 
                      ? 'El ruido y la cantidad de contenido hacen que sea cada vez más difícil destacar sin invertir en publicidad pagada.'
                      : 'The noise and amount of content make it increasingly difficult to stand out without investing in paid advertising.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Costos crecientes:' : 'Rising costs:'}</strong> {language === 'es' 
                      ? 'La publicidad en redes sociales se vuelve más cara y menos efectiva con el tiempo.'
                      : 'Social media advertising becomes more expensive and less effective over time.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Dependencia de la plataforma:' : 'Platform dependency:'}</strong> {language === 'es' 
                      ? 'No tienes control sobre las reglas del juego y tu negocio depende de decisiones de terceros.'
                      : 'You have no control over the rules of the game and your business depends on third-party decisions.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Alternative Strategies */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 2 concepto 1 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Existen múltiples canales y tácticas probadas que permiten a los negocios prosperar sin depender de las redes sociales:'
                  : 'There are multiple proven channels and tactics that allow businesses to thrive without depending on social media:'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Marketing de Contenidos (SEO y Blogs):' : 'Content Marketing (SEO and Blogs):'}</strong> {language === 'es' 
                      ? 'Crear contenido de valor optimizado para motores de búsqueda.'
                      : 'Create valuable content optimized for search engines.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Email Marketing:' : 'Email Marketing:'}</strong> {language === 'es' 
                      ? 'Construir una lista de suscriptores con comunicación directa.'
                      : 'Build a subscriber list with direct communication.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Marketing de Afiliados:' : 'Affiliate Marketing:'}</strong> {language === 'es' 
                      ? 'Colaborar con influencers y negocios que tengan acceso a tu público.'
                      : 'Collaborate with influencers and businesses that have access to your audience.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 2 concepto 2 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Publicidad Digital Segmentada:' : 'Targeted Digital Advertising:'}</strong> {language === 'es' 
                      ? 'Google Ads y publicidad en blogs relevantes.'
                      : 'Google Ads and advertising on relevant blogs.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Ventas Directas:' : 'Direct Sales:'}</strong> {language === 'es' 
                      ? 'Eventos, conferencias y networking cara a cara.'
                      : 'Events, conferences, and face-to-face networking.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Relaciones Públicas:' : 'Public Relations:'}</strong> {language === 'es' 
                      ? 'Medios tradicionales y relaciones con prensa.'
                      : 'Traditional media and press relations.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 2 concepto 3 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Define tu público objetivo:' : 'Define your target audience:'}</strong> {language === 'es' 
                      ? 'Investiga dónde pasa tiempo tu cliente ideal y qué canales utiliza.'
                      : 'Research where your ideal customer spends time and what channels they use.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Crea contenido de valor:' : 'Create valuable content:'}</strong> {language === 'es' 
                      ? 'Desarrolla contenido que resuelva problemas reales de tu audiencia.'
                      : 'Develop content that solves real problems for your audience.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Construye tu propia plataforma:' : 'Build your own platform:'}</strong> {language === 'es' 
                      ? 'Invierte en tu sitio web, blog y lista de email.'
                      : 'Invest in your website, blog, and email list.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Mide y optimiza:' : 'Measure and optimize:'}</strong> {language === 'es' 
                      ? 'Analiza resultados y ajusta tu estrategia continuamente.'
                      : 'Analyze results and adjust your strategy continuously.'
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
                  ? 'No tener presencia en redes sociales no significa estar ausente del mercado digital. Existen numerosas alternativas efectivas que pueden generar resultados excepcionales cuando se implementan correctamente. La clave está en elegir los canales adecuados para tu público objetivo y ejecutar una estrategia coherente que integre múltiples tácticas. El éxito no depende de estar en todas las plataformas, sino de estar donde tus clientes te necesitan, con el mensaje correcto y en el momento adecuado.'
                  : 'Not having a presence on social media does not mean being absent from the digital market. There are numerous effective alternatives that can generate exceptional results when implemented correctly. The key is to choose the right channels for your target audience and execute a coherent strategy that integrates multiple tactics. Success does not depend on being on all platforms, but on being where your customers need you, with the right message at the right time.'
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
                {t('articulo 3 title', 'blog')}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {t('articulo 3 subtitle', 'blog')}
              </p>
              <Link
                href="/blog/mercadeo-relacional"
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
