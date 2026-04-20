import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Target, Share2, Heart, MessageCircle, MessageSquare } from 'lucide-react';
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
            className="space-y-12"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'es' 
                  ? 'En el corazón de cualquier estrategia de marketing y ventas exitosa reside un profundo entendimiento del cliente. Sin embargo, muchas empresas cometen el error de lanzar productos o campañas sin haber definido claramente a quién se dirigen. Aquí es donde entra en juego el concepto del avatar de cliente (también conocido como buyer persona). Este artículo explicará por qué la creación de un avatar detallado es el primer paso y el más crucial para construir un negocio que resuene con su audiencia y genere resultados.'
                  : 'At the heart of any successful marketing and sales strategy lies a deep understanding of the customer. However, many companies make the mistake of launching products or campaigns without clearly defining who they are targeting. This is where the concept of customer avatar (also known as buyer persona) comes into play. This article will explain why creating a detailed avatar is the first and most crucial step to building a business that resonates with its audience and generates results.'
                }
              </p>
            </div>

            {/* What is Avatar */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? '¿Qué es un Avatar de Cliente?' : 'What is a Customer Avatar?'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'Un avatar de cliente es una representación semi-ficticia de tu cliente ideal, basada en datos reales y algunas suposiciones informadas sobre demografía, comportamiento, motivaciones y objetivos. Va mucho más allá de una simple segmentación demográfica (edad, género, ubicación) para profundizar en aspectos psicográficos y conductuales.'
                  : 'A customer avatar is a semi-fictional representation of your ideal customer, based on real data and some informed assumptions about demographics, behavior, motivations, and goals. It goes far beyond simple demographic segmentation (age, gender, location) to delve into psychographic and behavioral aspects.'
                }
              </p>
            </div>

            {/* Key Elements */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 6 concepto 1 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
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
                    <strong>{language === 'es' ? 'Psicografía:' : 'Psychographics:'}</strong> {language === 'es' 
                      ? 'Valores, creencias, intereses, estilo de vida, personalidad.'
                      : 'Values, beliefs, interests, lifestyle, personality.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Comportamiento:' : 'Behavior:'}</strong> {language === 'es' 
                      ? 'Hábitos de compra, canales de comunicación preferidos, uso de tecnología.'
                      : 'Buying habits, preferred communication channels, technology usage.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Objetivos y Desafíos:' : 'Goals and Challenges:'}</strong> {language === 'es' 
                      ? 'Qué quieren lograr, qué problemas enfrentan, qué les impide progresar.'
                      : 'What they want to achieve, what problems they face, what prevents them from progressing.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 6 concepto 2 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Marketing Preciso:' : 'Precise Marketing:'}</strong> {language === 'es' 
                      ? 'Mensajes y campañas que resuenan específicamente con tu audiencia ideal.'
                      : 'Messages and campaigns that specifically resonate with your ideal audience.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Desarrollo de Productos:' : 'Product Development:'}</strong> {language === 'es' 
                      ? 'Crear productos y servicios que realmente resuelvan problemas reales.'
                      : 'Create products and services that actually solve real problems.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Ventas Efectivas:' : 'Effective Sales:'}</strong> {language === 'es' 
                      ? 'Equipos de ventas que entienden profundamente las necesidades del cliente.'
                      : 'Sales teams that deeply understand customer needs.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Retención de Clientes:' : 'Customer Retention:'}</strong> {language === 'es' 
                      ? 'Estrategias de fidelización basadas en lo que realmente valoran tus clientes.'
                      : 'Loyalty strategies based on what your customers really value.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {t('articulo 6 concepto 3 title', 'blog')}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Investigación de Mercado:' : 'Market Research:'}</strong> {language === 'es' 
                      ? 'Analizar datos demográficos, encuestas, entrevistas con clientes existentes.'
                      : 'Analyze demographic data, surveys, interviews with existing customers.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Análisis de Competencia:' : 'Competitor Analysis:'}</strong> {language === 'es' 
                      ? 'Estudiar a quién atienden tus competidores y cómo lo hacen.'
                      : 'Study who your competitors serve and how they do it.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Datos Internos:' : 'Internal Data:'}</strong> {language === 'es' 
                      ? 'Analizar tus mejores clientes actuales para encontrar patrones comunes.'
                      : 'Analyze your best current customers to find common patterns.'
                    }
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>{language === 'es' ? 'Validación:' : 'Validation:'}</strong> {language === 'es' 
                      ? 'Probar tu avatar con clientes reales y ajustar según el feedback.'
                      : 'Test your avatar with real customers and adjust based on feedback.'
                    }
                  </div>
                </li>
              </ul>
            </div>

            {/* Implementation Details */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {language === 'es' 
                  ? 'La construcción de un avatar no es un ejercicio de adivinación, sino un proceso basado en la investigación:'
                  : 'Building an avatar is not an exercise in guesswork, but a process based on research:'
                }
              </p>
              <ul className="space-y-4 text-gray-700">
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

            {/* Conclusion */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                {language === 'es' ? 'Conclusión' : 'Conclusion'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'es' 
                  ? 'El avatar de cliente no es solo una herramienta de marketing, es la brújula que guía todas las decisiones de tu negocio. Cuando realmente entiendes a tu cliente ideal, cada aspecto de tu empresa - desde el desarrollo de productos hasta el servicio al cliente - se alinea perfectamente con sus necesidades y deseos. Las empresas que invierten tiempo y recursos en crear avatares detallados no solo venden más, sino que crean relaciones duraderas con clientes que se sienten verdaderamente comprendidos y valorados. En un mercado saturado, la comprensión profunda del cliente es la ventaja competitiva más poderosa que puedes tener.'
                  : 'The customer avatar is not just a marketing tool, it is the compass that guides all your business decisions. When you truly understand your ideal customer, every aspect of your company - from product development to customer service - aligns perfectly with their needs and desires. Companies that invest time and resources in creating detailed avatars not only sell more, but create lasting relationships with customers who feel truly understood and valued. In a saturated market, deep customer understanding is the most powerful competitive advantage you can have.'
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
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    {language === 'es' ? 'WhatsApp' : 'WhatsApp'}
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    {language === 'es' ? 'Facebook' : 'Facebook'}
                  </a>
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

      <Footer />
    </div>
  );
}
