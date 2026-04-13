import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Database, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DatabasePage() {
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
                <span>8 min</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Analista de Datos</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 4 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 4 subtitle', 'blog')}
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
                  ? 'En la era de la información, los datos se han convertido en el activo más valioso para cualquier negocio. Una base de datos bien estructurada y gestionada no es solo un repositorio de información, sino una herramienta estratégica que impulsa la toma de decisiones, optimiza operaciones y fomenta el crecimiento. Este artículo explorará por qué la base de datos es el cimiento de una estrategia empresarial exitosa y cómo su correcta utilización puede marcar la diferencia en la competitividad de una organización.'
                  : 'In the information age, data has become the most valuable asset for any business. A well-structured and managed database is not just a repository of information, but a strategic tool that drives decision-making, optimizes operations, and fosters growth. This article will explore why the database is the foundation of a successful business strategy and how its proper use can make the difference in an organization\'s competitiveness.'
                }
              </p>
            </div>

            {/* What is Database */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es una Base de Datos y por qué es Crucial?' : 'What is a Database and Why is it Crucial?'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Una base de datos es una colección organizada de información que permite almacenar, gestionar y acceder a grandes volúmenes de datos de manera eficiente. En el contexto empresarial, esto incluye datos de clientes, transacciones, inventario, marketing, finanzas y mucho más.'
                  : 'A database is an organized collection of information that allows storing, managing, and accessing large volumes of data efficiently. In the business context, this includes customer data, transactions, inventory, marketing, finance, and much more.'
                }
              </p>
            </div>

            {/* Key Reasons */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 4 concepto 1 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'La base de datos permite una toma de decisiones informada basada en evidencia concreta en lugar de intuiciones.'
                  : 'The database allows informed decision-making based on concrete evidence instead of intuition.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Segmentación:' : 'Segmentation:'}</strong> {language === 'es' 
                      ? 'Personalización de ofertas según el comportamiento del cliente.'
                      : 'Personalize offers according to customer behavior.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Análisis Predictivo:' : 'Predictive Analysis:'}</strong> {language === 'es' 
                      ? 'Anticipación de tendencias y comportamientos futuros.'
                      : 'Anticipation of future trends and behaviors.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Optimización de Recursos:' : 'Resource Optimization:'}</strong> {language === 'es' 
                      ? 'Asignación eficiente de presupuesto y personal.'
                      : 'Efficient allocation of budget and personnel.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 4 concepto 2 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Los datos operativos ayudan a identificar ineficiencias y optimizar procesos internos.'
                  : 'Operational data helps identify inefficiencies and optimize internal processes.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Identificación de Ineficiencias:' : 'Identification of Inefficiencies:'}</strong> {language === 'es' 
                      ? 'Detección de problemas en procesos y la cadena de suministro.'
                      : 'Detection of problems in processes and the supply chain.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Reducción de Costos:' : 'Cost Reduction:'}</strong> {language === 'es' 
                      ? 'Eliminación de gastos innecesarios y optimización de operaciones.'
                      : 'Elimination of unnecessary expenses and optimization of operations.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Mejora de la Productividad:' : 'Productivity Improvement:'}</strong> {language === 'es' 
                      ? 'Automatización de tareas repetitivas y flujos de trabajo.'
                      : 'Automation of repetitive tasks and workflows.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 4 concepto 3 title', 'blog')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Las empresas que aprovechan sus datos de manera efectiva pueden anticipar tendencias y responder más rápido a los cambios.'
                  : 'Companies that leverage their data effectively can anticipate trends and respond faster to changes.'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Análisis de Competencia:' : 'Competitor Analysis:'}</strong> {language === 'es' 
                      ? 'Monitoreo de estrategias y movimientos de la competencia.'
                      : 'Monitoring of strategies and competitor movements.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Identificación de Oportunidades:' : 'Opportunity Identification:'}</strong> {language === 'es' 
                      ? 'Descubrimiento de nichos de mercado y nuevas tendencias.'
                      : 'Discovery of market niches and new trends.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Ventaja Diferencial:' : 'Differential Advantage:'}</strong> {language === 'es' 
                      ? 'Creación de propuestas únicas basadas en datos del mercado.'
                      : 'Creation of unique proposals based on market data.'
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
                  ? 'La base de datos es mucho más que una herramienta técnica; es el cerebro operativo de cualquier negocio moderno. Las empresas que invierten en la gestión efectiva de datos no solo optimizan sus operaciones actuales, sino que se posicionan para el futuro. En un mundo donde la información es poder, tener una base de datos robusta y bien gestionada es la diferencia entre liderar el mercado o simplemente ser un participante más. El éxito empresarial del siglo XXI depende fundamentalmente de la capacidad de convertir datos en conocimiento, y conocimiento en decisiones estratégicas que impulsen el crecimiento sostenible.'
                  : 'The database is much more than a technical tool; it is the operational brain of any modern business. Companies that invest in effective data management not only optimize their current operations, but also position themselves for the future. In a world where information is power, having a robust and well-managed database is the difference between leading the market or simply being another participant. 21st century business success fundamentally depends on the ability to convert data into knowledge, and knowledge into strategic decisions that drive sustainable growth.'
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
