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
                        ? 'Mediante enlaces en la biografía, stickers en historias o publicaciones promocionadas, se puede dirigir a los usuarios a sitios web, tiendas en línea o páginas de destino específicas.'
                        : 'Through links in bio, story stickers, or promoted posts, users can be directed to websites, online stores, or specific landing pages.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-coral mt-2 flex-shrink-0"></div>
                    <div>
                      <strong>{language === 'es' ? 'Generar reconocimiento de marca:' : 'Generate brand recognition:'}</strong> {language === 'es' 
                        ? 'La exposición constante y la interacción ayudan a aumentar la visibilidad y el recuerdo de la marca.'
                        : 'Constant exposure and interaction help increase brand visibility and recall.'
                      }
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-6">
                  {language === 'es' 
                    ? 'Sin embargo, estas acciones son tácticas que se ejecutan a través de un canal. La estrategia de marketing, por otro lado, define qué se quiere lograr, a quién se dirige, qué mensaje se va a comunicar y cómo se va a medir el éxito. Instagram es simplemente el medio a través del cual se implementan estas decisiones estratégicas.'
                    : 'However, these actions are tactics executed through a channel. Marketing strategy, on the other hand, defines what you want to achieve, who you\'re targeting, what message you want to communicate, and how you\'ll measure success. Instagram is simply the medium through which these strategic decisions are implemented.'
                  }
                </p>
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
                    ? 'Una estrategia de marketing robusta debe incluir:'
                    : 'A robust marketing strategy must include:'
                  }
                </p>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Definición de objetivos:' : 'Objective definition:'}</strong> {language === 'es' 
                        ? '¿Qué se busca lograr? (Ej: aumentar ventas, mejorar el reconocimiento de marca, generar leads).'
                        : 'What are you trying to achieve? (e.g., increase sales, improve brand recognition, generate leads).'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Identificación del público objetivo:' : 'Target audience identification:'}</strong> {language === 'es' 
                        ? '¿Quién es el cliente ideal? ¿Cuáles son sus necesidades, deseos y comportamientos?'
                        : 'Who is the ideal customer? What are their needs, wants, and behaviors?'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Propuesta de valor:' : 'Value proposition:'}</strong> {language === 'es' 
                        ? '¿Qué hace que la marca sea única y atractiva para el público objetivo?'
                        : 'What makes the brand unique and attractive to the target audience?'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">4</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Mensaje clave:' : 'Key message:'}</strong> {language === 'es' 
                        ? '¿Qué historia se quiere contar? ¿Qué emociones se quieren evocar?'
                        : 'What story do you want to tell? What emotions do you want to evoke?'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">5</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Selección de canales:' : 'Channel selection:'}</strong> {language === 'es' 
                        ? 'Aquí es donde entra Instagram, junto con otros canales como email marketing, SEO, publicidad pagada, relaciones públicas, etc.'
                        : 'This is where Instagram comes in, along with other channels like email marketing, SEO, paid advertising, public relations, etc.'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">6</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Plan de contenido:' : 'Content plan:'}</strong> {language === 'es' 
                        ? '¿Qué tipo de contenido se va a crear para cada canal y con qué frecuencia?'
                        : 'What type of content will be created for each channel and how frequently?'
                      }
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-coral text-sm font-semibold">7</span>
                    </div>
                    <div>
                      <strong>{language === 'es' ? 'Medición y análisis:' : 'Measurement and analysis:'}</strong> {language === 'es' 
                        ? '¿Cómo se va a evaluar el rendimiento y ajustar la estrategia?'
                        : 'How will performance be evaluated and the strategy adjusted?'
                      }
                    </div>
                  </li>
                </ol>
                <p className="text-gray-600 leading-relaxed mt-6">
                  {language === 'es' 
                    ? 'Considerar a Instagram como la estrategia completa es como pensar que tener un coche es el plan de viaje. El coche (Instagram) es el vehículo, pero el plan de viaje (la estrategia) define el destino, la ruta, las paradas y el presupuesto.'
                    : 'Considering Instagram as the complete strategy is like thinking that having a car is the travel plan. The car (Instagram) is the vehicle, but the travel plan (the strategy) defines the destination, route, stops, and budget.'
                  }
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {t('articulo 1 concepto 3 title', 'blog')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('articulo 1 concepto 3 description', 'blog')}
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
