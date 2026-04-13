import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, BookOpen, TrendingUp, Database, Zap, Target, Users, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const articles = [
  {
    id: 1,
    titleKey: 'articulo 1 title',
    subtitleKey: 'articulo 1 subtitle',
    introductionKey: 'articulo 1 introduction',
    conceptKeys: [
      { titleKey: 'articulo 1 concepto 1 title', descriptionKey: 'articulo 1 concepto 1 description' },
      { titleKey: 'articulo 1 concepto 2 title', descriptionKey: 'articulo 1 concepto 2 description' },
      { titleKey: 'articulo 1 concepto 3 title', descriptionKey: 'articulo 1 concepto 3 description' }
    ],
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    date: '13-04-2026',
    readTime: '5 min',
    author: 'Equipo de Marketing'
  },
  {
    id: 2,
    titleKey: 'articulo 2 title',
    subtitleKey: 'articulo 2 subtitle',
    introductionKey: 'articulo 2 introduction',
    conceptKeys: [
      { titleKey: 'articulo 2 concepto 1 title', descriptionKey: 'articulo 2 concepto 1 description' },
      { titleKey: 'articulo 2 concepto 2 title', descriptionKey: 'articulo 2 concepto 2 description' },
      { titleKey: 'articulo 2 concepto 3 title', descriptionKey: 'articulo 2 concepto 3 description' }
    ],
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    date: '13-04-2026',
    readTime: '7 min',
    author: 'Especialista en Ventas'
  },
  {
    id: 3,
    titleKey: 'articulo 3 title',
    subtitleKey: 'articulo 3 subtitle',
    introductionKey: 'articulo 3 introduction',
    conceptKeys: [
      { titleKey: 'articulo 3 concepto 1 title', descriptionKey: 'articulo 3 concepto 1 description' },
      { titleKey: 'articulo 3 concepto 2 title', descriptionKey: 'articulo 3 concepto 2 description' },
      { titleKey: 'articulo 3 concepto 3 title', descriptionKey: 'articulo 3 concepto 3 description' }
    ],
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    date: '13-04-2026',
    readTime: '6 min',
    author: 'Consultor de Marketing'
  },
  {
    id: 4,
    titleKey: 'articulo 4 title',
    subtitleKey: 'articulo 4 subtitle',
    introductionKey: 'articulo 4 introduction',
    conceptKeys: [
      { titleKey: 'articulo 4 concepto 1 title', descriptionKey: 'articulo 4 concepto 1 description' },
      { titleKey: 'articulo 4 concepto 2 title', descriptionKey: 'articulo 4 concepto 2 description' },
      { titleKey: 'articulo 4 concepto 3 title', descriptionKey: 'articulo 4 concepto 3 description' }
    ],
    icon: Database,
    color: 'from-orange-500 to-red-500',
    date: '13-04-2026',
    readTime: '8 min',
    author: 'Analista de Datos'
  },
  {
    id: 5,
    titleKey: 'articulo 5 title',
    subtitleKey: 'articulo 5 subtitle',
    introductionKey: 'articulo 5 introduction',
    conceptKeys: [
      { titleKey: 'articulo 5 concepto 1 title', descriptionKey: 'articulo 5 concepto 1 description' },
      { titleKey: 'articulo 5 concepto 2 title', descriptionKey: 'articulo 5 concepto 2 description' },
      { titleKey: 'articulo 5 concepto 3 title', descriptionKey: 'articulo 5 concepto 3 description' }
    ],
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    date: '13-04-2026',
    readTime: '5 min',
    author: 'Innovador Digital'
  },
  {
    id: 6,
    titleKey: 'articulo 6 title',
    subtitleKey: 'articulo 6 subtitle',
    introductionKey: 'articulo 6 introduction',
    conceptKeys: [
      { titleKey: 'articulo 6 concepto 1 title', descriptionKey: 'articulo 6 concepto 1 description' },
      { titleKey: 'articulo 6 concepto 2 title', descriptionKey: 'articulo 6 concepto 2 description' },
      { titleKey: 'articulo 6 concepto 3 title', descriptionKey: 'articulo 6 concepto 3 description' }
    ],
    icon: Target,
    color: 'from-pink-500 to-rose-500',
    date: '13-04-2026',
    readTime: '6 min',
    author: 'Estratega de Contenido'
  }
];

export default function BlogPage() {
  const { t, language } = useLanguage();
  const articlesReveal = useScrollReveal(0.1);

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
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('volver al inicio', 'layout')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {t('title', 'blog')}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              {t('subtitle', 'blog')}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Articles Grid */}
      <section className="bg-pearl py-20" ref={articlesReveal.ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={articlesReveal.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-[28px] overflow-hidden border border-coral/20 shadow-[0_20px_60px_rgba(15,32,68,0.12)] hover:shadow-[0_25px_70px_rgba(15,32,68,0.15)] transition-all hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center mb-4">
                    <article.icon className="w-6 h-6 text-coral" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {t(article.titleKey, 'blog')}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
                      {t('introduccion', 'blog')}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(article.introductionKey, 'blog')}
                    </p>
                  </div>

                  {/* Conceptos Clave */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">
                      {t('conceptos clave', 'blog')}
                    </h4>
                    <div className="space-y-2">
                      {article.conceptKeys.map((concept, conceptIndex) => (
                        <div key={conceptIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-navy text-xs mb-1">
                              {t(concept.titleKey, 'blog')}
                            </h5>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {t(concept.descriptionKey, 'blog')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simple divider */}
                  <div className="w-full h-px bg-navy/10 mb-4"></div>

                  {/* Meta and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-navy/40">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link 
                    href={
                      article.id === 1 ? "/blog/instagram-no-es-marketing-digital" :
                      article.id === 2 ? "/blog/vender-sin-redes-sociales-estrategias" :
                      article.id === 3 ? "/blog/mercadeo-relacional-clientes" :
                      article.id === 4 ? "/blog/importancia-base-datos-negocio" :
                      article.id === 5 ? "/blog/importancia-mutacion-empresarial" :
                      article.id === 6 ? "/blog/avatar-cliente-ideal" :
                      `/blog/articulo-${article.id}`
                    }
                    className="inline-block bg-coral hover:bg-coral-light text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
                  >
                    {t('leer mas', 'blog')} 
                    <ArrowRight className="w-3 h-3 ml-1 inline" />
                  </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="#F8F9FA" to="#0F2044" />

      {/* CTA Section */}
      <section className="bg-navy py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {language === 'es' 
                  ? '¿Listo para aplicar estas estrategias en tu negocio?'
                  : 'Ready to apply these strategies to your business?'
                }
              </h2>
              <p className="text-white/55 mb-8">
                {language === 'es' 
                  ? 'Contáctanos y descubre cómo podemos ayudarte a implementar estas tácticas de marketing digital.'
                  : 'Contact us and discover how we can help you implement these digital marketing tactics.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {language === 'es' ? 'Hablar con un experto' : 'Talk to an expert'}
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-navy px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  {language === 'es' ? 'Solicitar asesoría' : 'Request consultation'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
