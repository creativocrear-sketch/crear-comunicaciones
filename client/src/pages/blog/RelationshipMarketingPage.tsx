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
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'es' 
                  ? 'En un mercado cada vez más competitivo y saturado, la diferenciación a través del producto o precio se vuelve efímera. Es aquí donde el mercadeo relacional emerge como una estrategia fundamental. A diferencia del marketing transaccional, que se enfoca en la venta única, el mercadeo relacional busca construir y mantener relaciones duraderas y significativas con los clientes. Este artículo explorará los principios, beneficios y la implementación efectiva de esta poderosa filosofía empresarial.'
                  : 'In an increasingly competitive and saturated market, differentiation through product or price becomes ephemeral. This is where relationship marketing emerges as a fundamental strategy. Unlike transactional marketing, which focuses on single sales, relationship marketing seeks to build and maintain lasting and meaningful relationships with customers. This article will explore the principles, benefits, and effective implementation of this powerful business philosophy.'
                }
              </p>
            </div>

            {/* What is Relationship Marketing */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es el Mercadeo Relacional?' : 'What is Relationship Marketing?'}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'El mercadeo relacional es una estrategia a largo plazo que se centra en la fidelización del cliente a través de la satisfacción, la confianza y el compromiso mutuo. Su objetivo principal no es solo cerrar una venta, sino establecer un vínculo emocional que convierta a los clientes en defensores de la marca. Se basa en la premisa de que retener a un cliente existente es significativamente más rentable que adquirir uno nuevo.'
                    : 'Relationship marketing is a long-term strategy that focuses on customer loyalty through satisfaction, trust, and mutual commitment. Its main objective is not just to close a sale, but to establish an emotional bond that turns customers into brand advocates. It is based on the premise that retaining an existing customer is significantly more profitable than acquiring a new one.'
                  }
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Pilares del Mercadeo Relacional:' : 'Pillars of Relationship Marketing:'}
              </h2>
              <div className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Confianza:' : 'Trust:'}</strong> {language === 'es' 
                        ? 'Se construye a través de la transparencia, la honestidad y el cumplimiento de promesas.'
                        : 'Built through transparency, honesty, and keeping promises.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Comunicación:' : 'Communication:'}</strong> {language === 'es' 
                        ? 'Bidireccional y personalizada, escuchando activamente las necesidades y retroalimentación del cliente.'
                        : 'Bidirectional and personalized, actively listening to customer needs and feedback.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Compromiso:' : 'Commitment:'}</strong> {language === 'es' 
                        ? 'Implica ir más allá de la transacción, ofreciendo valor añadido y experiencias memorables.'
                        : 'Involves going beyond the transaction, offering added value and memorable experiences.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Satisfacción:' : 'Satisfaction:'}</strong> {language === 'es' 
                        ? 'Superar las expectativas del cliente en cada interacción.'
                        : 'Exceeding customer expectations in every interaction.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Personalización:' : 'Personalization:'}</strong> {language === 'es' 
                        ? 'Adaptar productos, servicios y comunicaciones a las necesidades individuales de cada cliente.'
                        : 'Adapting products, services, and communications to the individual needs of each customer.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Beneficios del Mercadeo Relacional' : 'Benefits of Relationship Marketing'}
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'La implementación de una estrategia de mercadeo relacional ofrece múltiples ventajas para las empresas:'
                    : 'The implementation of a relationship marketing strategy offers multiple advantages for businesses:'
                  }
                </p>

                {/* Benefit 1 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '1. Mayor Retención de Clientes:' : '1. Greater Customer Retention:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Los clientes satisfechos y comprometidos son menos propensos a cambiar a la competencia.'
                      : 'Satisfied and committed customers are less likely to switch to competitors.'
                    }
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '2. Aumento del Valor de Vida del Cliente (CLV):' : '2. Increased Customer Lifetime Value (CLV):'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Al mantener a los clientes por más tiempo, se incrementa el valor total que aportan a la empresa a lo largo de su relación.'
                      : 'By maintaining customers for longer, the total value they contribute to the company throughout their relationship increases.'
                    }
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '3. Reducción de Costos de Adquisición:' : '3. Reduction of Acquisition Costs:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Es más económico retener que adquirir. Un cliente fiel puede generar referencias, reduciendo la necesidad de grandes inversiones en marketing para nuevos clientes.'
                      : 'It is more economical to retain than acquire. A loyal customer can generate referrals, reducing the need for large marketing investments for new customers.'
                    }
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '4. Incremento de Ventas y Referencias:' : '4. Increase in Sales and Referrals:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Los clientes leales tienden a comprar más y a recomendar la marca a sus conocidos, actuando como embajadores.'
                      : 'Loyal customers tend to buy more and recommend the brand to their acquaintances, acting as ambassadors.'
                    }
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '5. Mejora de la Reputación de Marca:' : '5. Improvement of Brand Reputation:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Una base de clientes satisfechos y leales fortalece la imagen y credibilidad de la empresa.'
                      : 'A base of satisfied and loyal customers strengthens the company\'s image and credibility.'
                    }
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '6. Retroalimentación Valiosa:' : '6. Valuable Feedback:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Las relaciones cercanas facilitan la obtención de insights directos de los clientes, lo que permite mejorar productos y servicios.'
                      : 'Close relationships facilitate obtaining direct insights from customers, allowing for improvement of products and services.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Implementación del Mercadeo Relacional' : 'Implementation of Relationship Marketing'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Para desarrollar una estrategia de mercadeo relacional efectiva, las empresas deben considerar:'
                    : 'To develop an effective relationship marketing strategy, businesses should consider:'
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Conocer al Cliente:' : 'Know the Customer:'}</strong> {language === 'es' 
                        ? 'Utilizar herramientas de CRM (Customer Relationship Management) para recopilar y analizar datos sobre las preferencias, comportamientos e historial de compra de los clientes.'
                        : 'Use CRM tools to collect and analyze data about customer preferences, behaviors, and purchase history.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Personalizar la Experiencia:' : 'Personalize the Experience:'}</strong> {language === 'es' 
                        ? 'Ofrecer comunicaciones, ofertas y soluciones adaptadas a cada segmento o individuo.'
                        : 'Offer communications, offers, and solutions adapted to each segment or individual.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Construir Canales de Comunicación Abiertos:' : 'Build Open Communication Channels:'}</strong> {language === 'es' 
                        ? 'Facilitar que los clientes expresen sus opiniones, quejas y sugerencias.'
                        : 'Facilitate customers expressing their opinions, complaints, and suggestions.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Ofrecer un Servicio al Cliente Excepcional:' : 'Offer Exceptional Customer Service:'}</strong> {language === 'es' 
                        ? 'Resolver problemas de manera eficiente y empática, y superar las expectativas en cada punto de contacto.'
                        : 'Solve problems efficiently and empathetically, exceeding expectations at every touchpoint.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Crear Programas de Lealtad:' : 'Create Loyalty Programs:'}</strong> {language === 'es' 
                        ? 'Recompensar a los clientes por su fidelidad a través de descuentos, acceso exclusivo o beneficios especiales.'
                        : 'Reward customers for their loyalty through discounts, exclusive access, or special benefits.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Generar Contenido de Valor:' : 'Generate Valuable Content:'}</strong> {language === 'es' 
                        ? 'Proporcionar información útil y relevante que no solo venda, sino que también eduque y entretenga.'
                        : 'Provide useful and relevant information that not only sells but also educates and entertains.'
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
                  ? 'El mercadeo relacional no es una táctica, sino una filosofía empresarial que pone al cliente en el centro de todas las operaciones. Al invertir en la construcción de relaciones sólidas y duraderas, las empresas no solo aseguran la lealtad y la rentabilidad a largo plazo, sino que también cultivan una comunidad de defensores que impulsarán su crecimiento de manera orgánica y sostenible. En la economía actual, el poder de una relación genuina es el activo más valioso que una marca puede poseer.'
                  : 'Relationship marketing is not a tactic, but a business philosophy that puts the customer at the center of all operations. By investing in building solid and lasting relationships, companies not only ensure loyalty and long-term profitability, but also cultivate a community of advocates who will drive their growth organically and sustainably. In the current economy, the power of a genuine relationship is the most valuable asset a brand can possess.'
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
