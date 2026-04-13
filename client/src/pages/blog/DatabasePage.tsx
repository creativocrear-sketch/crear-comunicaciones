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
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'En la era de la información, los datos se han convertido en el activo más valioso para cualquier negocio. Una base de datos bien estructurada y gestionada no es solo un repositorio de información, sino una herramienta estratégica que impulsa la toma de decisiones, optimiza operaciones y fomenta el crecimiento. Este artículo explorará por qué la base de datos es el cimiento de una estrategia empresarial exitosa y cómo su correcta utilización puede marcar la diferencia en la competitividad de una organización.'
                  : 'In the information age, data has become the most valuable asset for any business. A well-structured and managed database is not just a repository of information, but a strategic tool that drives decision-making, optimizes operations, and fosters growth. This article will explore why the database is the foundation of a successful business strategy and how its proper use can make the difference in an organization\'s competitiveness.'
                }
              </p>
            </div>

            {/* What is Database */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es una Base de Datos y por qué es Crucial?' : 'What is a Database and Why is it Crucial?'}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Una base de datos es una colección organizada de información que permite almacenar, gestionar y acceder a grandes volúmenes de datos de manera eficiente. En el contexto empresarial, esto incluye datos de clientes, transacciones, inventario, marketing, finanzas y mucho más.'
                    : 'A database is an organized collection of information that allows storing, managing, and accessing large volumes of data efficiently. In the business context, this includes customer data, transactions, inventory, marketing, finance, and much more.'
                  }
                </p>
              </div>
            </div>

            {/* Key Reasons */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Razones clave de su importancia:' : 'Key reasons for its importance:'}
              </h2>
              <div className="space-y-6">
                {/* Reason 1 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '1. Toma de Decisiones Informada:' : '1. Informed Decision-Making:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Permite analizar patrones, tendencias y comportamientos, lo que facilita decisiones estratégicas basadas en evidencia y no en suposiciones.'
                      : 'Allows analyzing patterns, trends, and behaviors, facilitating strategic decisions based on evidence rather than assumptions.'
                    }
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '2. Personalización y Segmentación:' : '2. Personalization and Segmentation:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Con datos detallados de clientes, las empresas pueden segmentar su audiencia y personalizar ofertas, comunicaciones y experiencias, lo que aumenta la relevancia y la efectividad de las campañas de marketing.'
                      : 'With detailed customer data, companies can segment their audience and personalize offers, communications, and experiences, increasing relevance and effectiveness of marketing campaigns.'
                    }
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '3. Optimización de Operaciones:' : '3. Operations Optimization:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Ayuda a identificar cuellos de botella, mejorar la eficiencia de los procesos, gestionar el inventario de forma más precisa y optimizar la cadena de suministro.'
                      : 'Helps identify bottlenecks, improve process efficiency, manage inventory more precisely, and optimize the supply chain.'
                    }
                  </p>
                </div>

                {/* Reason 4 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '4. Fidelización de Clientes:' : '4. Customer Loyalty:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Al comprender mejor las necesidades y preferencias de los clientes, se pueden ofrecer productos y servicios que superen sus expectativas, fortaleciendo la relación y la lealtad.'
                      : 'By better understanding customer needs and preferences, products and services can be offered that exceed their expectations, strengthening the relationship and loyalty.'
                    }
                  </p>
                </div>

                {/* Reason 5 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '5. Ventaja Competitiva:' : '5. Competitive Advantage:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Las empresas que utilizan sus datos de manera inteligente pueden anticipar cambios en el mercado, innovar más rápido y responder de manera más ágil a las demandas de los consumidores.'
                      : 'Companies that use their data intelligently can anticipate market changes, innovate faster, and respond more agilely to consumer demands.'
                    }
                  </p>
                </div>

                {/* Reason 6 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '6. Cumplimiento Normativo:' : '6. Regulatory Compliance:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Facilita el cumplimiento de regulaciones de privacidad y protección de datos (como GDPR o LOPD), al tener un control centralizado sobre la información.'
                      : 'Facilitates compliance with privacy and data protection regulations (like GDPR or LOPD), by having centralized control over information.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Data Types */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Tipos de Datos y su Aplicación' : 'Types of Data and Their Application'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Las bases de datos pueden contener una variedad de datos, cada uno con su propósito:'
                    : 'Databases can contain a variety of data, each with its purpose:'
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos Demográficos:' : 'Demographic Data:'}</strong> {language === 'es' 
                        ? 'Edad, género, ubicación, ingresos. Útiles para segmentación básica.'
                        : 'Age, gender, location, income. Useful for basic segmentation.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos de Comportamiento:' : 'Behavioral Data:'}</strong> {language === 'es' 
                        ? 'Historial de compras, interacciones con la marca, navegación web. Esenciales para la personalización y predicción.'
                        : 'Purchase history, brand interactions, web browsing. Essential for personalization and prediction.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos Transaccionales:' : 'Transactional Data:'}</strong> {language === 'es' 
                        ? 'Detalles de pedidos, métodos de pago, fechas. Cruciales para análisis de ventas y gestión financiera.'
                        : 'Order details, payment methods, dates. Crucial for sales analysis and financial management.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos de Interacción:' : 'Interaction Data:'}</strong> {language === 'es' 
                        ? 'Correos abiertos, clics en enlaces, participación en redes sociales. Miden el engagement y la efectividad de las comunicaciones.'
                        : 'Email opens, link clicks, social media participation. Measure engagement and communication effectiveness.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Effective Management */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Gestión Efectiva de la Base de Datos' : 'Effective Database Management'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Para aprovechar al máximo una base de datos, es fundamental una gestión adecuada:'
                    : 'To maximize the use of a database, proper management is fundamental:'
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Calidad de Datos:' : 'Data Quality:'}</strong> {language === 'es' 
                        ? 'Asegurar que los datos sean precisos, completos, consistentes y actualizados. Los datos erróneos llevan a decisiones erróneas.'
                        : 'Ensure data is accurate, complete, consistent, and updated. Wrong data leads to wrong decisions.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Seguridad:' : 'Security:'}</strong> {language === 'es' 
                        ? 'Proteger la información sensible contra accesos no autorizados, pérdidas o corrupción.'
                        : 'Protect sensitive information against unauthorized access, loss, or corruption.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Integración:' : 'Integration:'}</strong> {language === 'es' 
                        ? 'Conectar diferentes fuentes de datos para obtener una vista 360 grados del cliente y de las operaciones.'
                        : 'Connect different data sources to get a 360-degree view of the customer and operations.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Análisis:' : 'Analysis:'}</strong> {language === 'es' 
                        ? 'Utilizar herramientas de Business Intelligence (BI) y análisis de datos para extraer insights valiosos.'
                        : 'Use Business Intelligence (BI) tools and data analysis to extract valuable insights.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Actualización Constante:' : 'Constant Updates:'}</strong> {language === 'es' 
                        ? 'Las bases de datos deben ser dinámicas y adaptarse a los cambios en el negocio y en el mercado.'
                        : 'Databases must be dynamic and adapt to changes in business and the market.'
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
                  ? 'La base de datos es mucho más que un simple archivo; es el cerebro operativo de una empresa moderna. Invertir en su creación, mantenimiento y análisis es invertir en el futuro del negocio. Aquellas organizaciones que logren transformar sus datos en conocimiento accionable serán las que lideren en la economía digital, construyendo relaciones más sólidas con sus clientes y alcanzando sus objetivos estratégicos con mayor eficacia.'
                  : 'The database is much more than a simple file; it is the operational brain of a modern company. Investing in its creation, maintenance, and analysis is investing in the future of the business. Those organizations that manage to transform their data into actionable knowledge will be the ones leading in the digital economy, building stronger relationships with their customers and achieving their strategic objectives more effectively.'
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
