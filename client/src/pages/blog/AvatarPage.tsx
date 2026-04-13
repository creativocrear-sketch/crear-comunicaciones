import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Target, Share2, Heart, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AvatarPage() {
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
                <span>Estratega de Contenido</span>
              </div>
            </div>

            <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-coral" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('articulo 6 title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-3xl">
              {t('articulo 6 subtitle', 'blog')}
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
                  ? 'En el corazón de cualquier estrategia de marketing y ventas exitosa reside un profundo entendimiento del cliente. Sin embargo, muchas empresas cometen el error de lanzar productos o campañas sin haber definido claramente a quién se dirigen. Aquí es donde entra en juego el concepto del avatar de cliente (también conocido como buyer persona). Este artículo explicará por qué la creación de un avatar detallado es el primer paso y el más crucial para construir un negocio que resuene con su audiencia y genere resultados.'
                  : 'At the heart of any successful marketing and sales strategy lies a deep understanding of the customer. However, many companies make the mistake of launching products or campaigns without clearly defining who they are targeting. This is where the concept of customer avatar (also known as buyer persona) comes into play. This article will explain why creating a detailed avatar is the first and most crucial step to building a business that resonates with its audience and generates results.'
                }
              </p>
            </div>

            {/* What is Avatar */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es un Avatar de Cliente?' : 'What is a Customer Avatar?'}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Un avatar de cliente es una representación semi-ficticia de tu cliente ideal, basada en datos reales y algunas suposiciones informadas sobre demografía, comportamiento, motivaciones y objetivos. Va mucho más allá de una simple segmentación demográfica (edad, género, ubicación) para profundizar en aspectos psicográficos y conductuales.'
                    : 'A customer avatar is a semi-fictional representation of your ideal customer, based on real data and some informed assumptions about demographics, behavior, motivations, and goals. It goes far beyond simple demographic segmentation (age, gender, location) to delve into psychographic and behavioral aspects.'
                  }
                </p>
              </div>
            </div>

            {/* Key Elements */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Elementos clave de un avatar de cliente:' : 'Key elements of a customer avatar:'}
              </h2>
              <div className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos Demográficos:' : 'Demographic Data:'}</strong> {language === 'es' 
                        ? 'Edad, género, nivel educativo, ocupación, nivel de ingresos, estado civil, ubicación.'
                        : 'Age, gender, education level, occupation, income level, marital status, location.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Datos Psicográficos:' : 'Psychographic Data:'}</strong> {language === 'es' 
                        ? 'Personalidad, valores, intereses, estilo de vida, actitudes, opiniones.'
                        : 'Personality, values, interests, lifestyle, attitudes, opinions.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Comportamientos:' : 'Behaviors:'}</strong> {language === 'es' 
                        ? 'Hábitos de compra, uso de tecnología, canales de comunicación preferidos, cómo buscan información.'
                        : 'Purchase habits, technology use, preferred communication channels, how they search for information.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Objetivos y Aspiraciones:' : 'Goals and Aspirations:'}</strong> {language === 'es' 
                        ? 'Qué quieren lograr en su vida personal o profesional.'
                        : 'What they want to achieve in their personal or professional life.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Retos y Puntos de Dolor:' : 'Challenges and Pain Points:'}</strong> {language === 'es' 
                        ? 'Qué problemas enfrentan, qué frustraciones tienen, qué obstáculos les impiden alcanzar sus objetivos.'
                        : 'What problems they face, what frustrations they have, what obstacles prevent them from reaching their goals.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Objeciones:' : 'Objections:'}</strong> {language === 'es' 
                        ? 'Qué dudas o preocupaciones podrían tener respecto a tu producto o servicio.'
                        : 'What doubts or concerns they might have about your product or service.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Fuentes de Información:' : 'Information Sources:'}</strong> {language === 'es' 
                        ? 'Dónde buscan soluciones o información (blogs, redes sociales, foros, revistas).'
                        : 'Where they search for solutions or information (blogs, social media, forums, magazines).'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Crucial */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Por qué es Crucial Construir tu Avatar Primero?' : 'Why is it Crucial to Build Your Avatar First?'}
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'La creación de un avatar de cliente antes de cualquier otra acción estratégica ofrece beneficios fundamentales:'
                    : 'Creating a customer avatar before any other strategic action offers fundamental benefits:'
                  }
                </p>

                {/* Benefit 1 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '1. Claridad en la Estrategia de Marketing:' : '1. Clarity in Marketing Strategy:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Permite crear mensajes de marketing altamente relevantes y personalizados que hablen directamente a las necesidades y deseos de tu audiencia. Sabrás qué decir, cómo decirlo y dónde decirlo.'
                      : 'Allows creating highly relevant and personalized marketing messages that speak directly to your audience\'s needs and desires. You\'ll know what to say, how to say it, and where to say it.'
                    }
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '2. Desarrollo de Productos y Servicios Relevantes:' : '2. Development of Relevant Products and Services:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Al entender los puntos de dolor y las aspiraciones de tu avatar, puedes desarrollar productos o servicios que realmente resuelvan sus problemas y satisfagan sus necesidades, aumentando las probabilidades de éxito.'
                      : 'By understanding your avatar\'s pain points and aspirations, you can develop products or services that truly solve their problems and meet their needs, increasing success probabilities.'
                    }
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '3. Optimización de Canales de Comunicación:' : '3. Optimization of Communication Channels:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Sabrás dónde encontrar a tu cliente ideal (qué redes sociales usa, qué blogs lee, a qué eventos asiste), permitiéndote invertir tus recursos de marketing de manera más eficiente.'
                      : 'You\'ll know where to find your ideal customer (which social networks they use, which blogs they read, which events they attend), allowing you to invest your marketing resources more efficiently.'
                    }
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '4. Mejora de la Experiencia del Cliente:' : '4. Improvement of Customer Experience:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Cada interacción, desde el primer contacto hasta el servicio postventa, puede ser diseñada pensando en las preferencias y expectativas de tu avatar, creando una experiencia más satisfactoria.'
                      : 'Every interaction, from first contact to after-sales service, can be designed thinking about your avatar\'s preferences and expectations, creating a more satisfying experience.'
                    }
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '5. Aumento de la Tasa de Conversión:' : '5. Increase in Conversion Rate:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Al dirigirte a las personas adecuadas con el mensaje correcto, la probabilidad de que se conviertan en clientes aumenta significativamente.'
                      : 'By targeting the right people with the right message, the probability of them becoming customers increases significantly.'
                    }
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '6. Diferenciación de la Competencia:' : '6. Differentiation from Competition:'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'es' 
                      ? 'Un conocimiento profundo de tu cliente te permite ofrecer un valor único que tus competidores quizás no estén abordando.'
                      : 'Deep knowledge of your customer allows you to offer unique value that your competitors may not be addressing.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* How to Build */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Cómo Construir tu Avatar' : 'How to Build Your Avatar'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'La construcción de un avatar no es un ejercicio de adivinación, sino un proceso basado en la investigación:'
                    : 'Building an avatar is not an exercise in guesswork, but a process based on research:'
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Entrevistas con Clientes Existentes:' : 'Interviews with Existing Customers:'}</strong> {language === 'es' 
                        ? 'Habla con tus mejores clientes para entender sus motivaciones y experiencias.'
                        : 'Talk to your best customers to understand their motivations and experiences.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Encuestas:' : 'Surveys:'}</strong> {language === 'es' 
                        ? 'Recopila datos cuantitativos y cualitativos.'
                        : 'Collect quantitative and qualitative data.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Análisis de Datos:' : 'Data Analysis:'}</strong> {language === 'es' 
                        ? 'Utiliza herramientas de análisis web, CRM y redes sociales para identificar patrones de comportamiento.'
                        : 'Use web analytics tools, CRM, and social media to identify behavior patterns.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Investigación de Mercado:' : 'Market Research:'}</strong> {language === 'es' 
                        ? 'Analiza tendencias de la industria y perfiles de audiencia de la competencia.'
                        : 'Analyze industry trends and competitor audience profiles.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Observación:' : 'Observation:'}</strong> {language === 'es' 
                        ? 'Presta atención a los comentarios en redes sociales, foros y reseñas de productos.'
                        : 'Pay attention to comments on social media, forums, and product reviews.'
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
                  ? 'El avatar de cliente no es un documento estático; debe ser revisado y actualizado periódicamente a medida que tu negocio y tu mercado evolucionan. Invertir tiempo y esfuerzo en definir a tu cliente ideal es la base sobre la cual se construye un negocio exitoso y sostenible. Al poner a tu avatar en el centro de todas tus decisiones, te aseguras de que cada esfuerzo esté alineado con las necesidades de quienes realmente importan: tus clientes.'
                  : 'The customer avatar is not a static document; it should be reviewed and updated periodically as your business and market evolve. Investing time and effort in defining your ideal customer is the foundation upon which a successful and sustainable business is built. By putting your avatar at the center of all your decisions, you ensure that every effort is aligned with the needs of those who truly matter: your customers.'
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
