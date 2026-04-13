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
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'es' ? 'Introducción' : 'Introduction'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('articulo 2 introduction', 'blog')}
              </p>
            </div>

            {/* Myth Section */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'El Mito de la Dependencia de las Redes Sociales' : 'The Myth of Social Media Dependency'}
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Las redes sociales son herramientas poderosas, pero no son el único camino hacia el cliente. La dependencia excesiva de estas plataformas puede ser riesgosa debido a:'
                    : 'Social media are powerful tools, but they are not the only path to the customer. Excessive dependency on these platforms can be risky due to:'
                  }
                </p>
                <ul className="space-y-3 text-gray-600">
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
                      <strong>{language === 'es' ? 'Control limitado:' : 'Limited control:'}</strong> {language === 'es' 
                        ? 'Las empresas no tienen control total sobre sus audiencias o el entorno de la plataforma.'
                        : 'Businesses do not have total control over their audiences or the platform environment.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Audiencia específica:' : 'Specific audience:'}</strong> {language === 'es' 
                        ? 'No todos los públicos objetivos son usuarios activos o receptivos en todas las redes sociales.'
                        : 'Not all target audiences are active or receptive users on all social networks.'
                      }
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategies Section */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {language === 'es' ? 'Estrategias de Venta sin Redes Sociales' : 'Sales Strategies Without Social Media'}
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Existen múltiples canales y tácticas probadas que permiten a los negocios prosperar sin depender de las redes sociales:'
                    : 'There are multiple proven channels and tactics that allow businesses to thrive without depending on social media:'
                  }
                </p>

                {/* Strategy 1 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '1. Marketing de Contenidos (SEO y Blogs):' : '1. Content Marketing (SEO and Blogs):'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Crear contenido de valor (artículos, guías, tutoriales) optimizado para motores de búsqueda. Esto atrae tráfico orgánico de usuarios que buscan activamente soluciones o información relacionada con los productos/servicios.'
                          : 'Create valuable content (articles, guides, tutorials) optimized for search engines. This attracts organic traffic from users actively seeking solutions or information related to products/services.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Un blog bien mantenido establece autoridad y credibilidad en el nicho.'
                          : 'A well-maintained blog establishes authority and credibility in the niche.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 2 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '2. Email Marketing:' : '2. Email Marketing:'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Construir una lista de suscriptores a través de formularios en el sitio web, ofertas de contenido exclusivo (e-books, webinars) o eventos.'
                          : 'Build a subscriber list through website forms, exclusive content offers (e-books, webinars), or events.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'El email marketing permite una comunicación directa, personalizada y altamente efectiva, con tasas de conversión a menudo superiores a las de las redes sociales.'
                          : 'Email marketing allows direct, personalized, and highly effective communication, with conversion rates often superior to those of social media.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 3 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '3. Publicidad Pagada (Google Ads, Publicidad Display):' : '3. Paid Advertising (Google Ads, Display Advertising):'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Invertir en anuncios en motores de búsqueda (SEM) o en redes de display. Esto permite alcanzar a usuarios con intención de compra o interés específico en el momento adecuado.'
                          : 'Invest in search engine ads (SEM) or display networks. This allows reaching users with purchase intent or specific interest at the right time.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'La segmentación avanzada y el control del presupuesto hacen de la publicidad pagada una herramienta muy potente.'
                          : 'Advanced segmentation and budget control make paid advertising a very powerful tool.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 4 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '4. Relaciones Públicas y Medios Tradicionales:' : '4. Public Relations and Traditional Media:'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Obtener cobertura en medios de comunicación relevantes (prensa, radio, televisión, revistas especializadas). Esto genera credibilidad y alcance a audiencias más amplias.'
                          : 'Get coverage in relevant media (press, radio, television, specialized magazines). This generates credibility and reach to broader audiences.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Participar en entrevistas, escribir columnas de opinión o enviar comunicados de prensa.'
                          : 'Participate in interviews, write opinion columns, or send press releases.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 5 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '5. Eventos y Networking:' : '5. Events and Networking:'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Participar en ferias comerciales, conferencias, talleres o eventos de la industria. Esto permite el contacto directo con clientes potenciales y socios estratégicos.'
                          : 'Participate in trade fairs, conferences, workshops, or industry events. This allows direct contact with potential clients and strategic partners.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'El networking personal sigue siendo una de las formas más efectivas de construir relaciones y generar referencias.'
                          : 'Personal networking remains one of the most effective ways to build relationships and generate referrals.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 6 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '6. Marketing de Referencia y Boca a Boca:' : '6. Referral Marketing and Word of Mouth:'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Ofrecer un producto o servicio excepcional que motive a los clientes satisfechos a recomendarlo. Implementar programas de referidos.'
                          : 'Offer an exceptional product or service that motivates satisfied customers to recommend it. Implement referral programs.'
                        }
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'El boca a boca positivo es una de las formas de marketing más poderosas y orgánicas.'
                          : 'Positive word of mouth is one of the most powerful and organic forms of marketing.'
                        }
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Strategy 7 */}
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {language === 'es' ? '7. Alianzas Estratégicas y Colaboraciones:' : '7. Strategic Alliances and Collaborations:'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                      <span>
                        {language === 'es' 
                          ? 'Asociarse con otras empresas o influencers (no necesariamente en redes sociales) que compartan el mismo público objetivo para promociones cruzadas o proyectos conjuntos.'
                          : 'Partner with other companies or influencers (not necessarily on social media) who share the same target audience for cross-promotions or joint projects.'
                        }
                      </span>
                    </li>
                  </ul>
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
                  ? 'Si bien las redes sociales pueden ser un activo valioso, no son un requisito indispensable para el éxito comercial. Al diversificar las estrategias de marketing y enfocarse en canales donde el público objetivo realmente se encuentra y es receptivo, las empresas pueden construir una base sólida de clientes y generar ventas de manera sostenible. La clave está en entender al cliente, ofrecer valor y elegir los canales más efectivos para llegar a ellos, independientemente de la popularidad del momento.'
                  : 'While social media can be a valuable asset, they are not an essential requirement for business success. By diversifying marketing strategies and focusing on channels where the target audience truly is and is receptive, businesses can build a solid customer base and generate sales sustainably. The key is to understand the customer, offer value, and choose the most effective channels to reach them, regardless of current popularity.'
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
