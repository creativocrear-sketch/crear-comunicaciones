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

      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
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
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>13-04-2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span>5 min lectura</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <User className="w-4 h-4" />
                <span>Equipo de Marketing</span>
              </div>
            </div>

            {/* Article Title */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Marketing Digital
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t('articulo 1 title', 'blog')}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                {t('articulo 1 subtitle', 'blog')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Article Content */}
      <section className="bg-gray-50 py-20">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Article Body */}
            <article className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                {/* Introduction */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {language === 'es' ? 'Introducción' : 'Introduction'}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('articulo 1 introduction', 'blog')}
                  </p>
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
