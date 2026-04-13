import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, User, BookOpen, TrendingUp, Database, Zap, Target, Users, BarChart3 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const articles = [
  {
    id: 1,
    title: 'Instagram no es marketing, es un canal',
    subtitle: 'La diferencia fundamental entre estrategia y canal de distribución',
    introduction: 'En el panorama digital actual, existe una confusión común: considerar a Instagram como una estrategia de marketing en sí misma. Este artículo desglosa por qué Instagram debe ser vista como un canal dentro de una estrategia más amplia.',
    concepts: [
      {
        title: 'Canal de Distribución',
        description: 'Instagram es el medio para mostrar productos, construir comunidad y dirigir tráfico.'
      },
      {
        title: 'La Estrategia es el Mapa',
        description: 'La estrategia define objetivos, público, propuesta de valor y mensajes clave.'
      },
      {
        title: 'Integración',
        description: 'El éxito radica en alinear las tácticas de Instagram con los objetivos comerciales generales.'
      }
    ],
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    date: '2024-01-15',
    readTime: '5 min',
    author: 'Equipo de Marketing'
  },
  {
    id: 2,
    title: 'Si no tienes redes sociales también puedes vender',
    subtitle: 'Alternativas estratégicas para construir un negocio próspero',
    introduction: 'La presión por estar en redes sociales es inmensa, pero no es el único camino. Es posible construir un negocio próspero utilizando canales alternativos y diversificados.',
    concepts: [
      {
        title: 'SEO y Blogs',
        description: 'Atracción de tráfico orgánico mediante contenido de valor.'
      },
      {
        title: 'Email Marketing',
        description: 'Comunicación directa y personalizada con altas tasas de conversión.'
      },
      {
        title: 'Networking y Alianzas',
        description: 'El valor del contacto directo y las colaboraciones estratégicas.'
      }
    ],
    icon: TrendingUp,
    color: 'from-green-500 to-teal-500',
    date: '2024-01-10',
    readTime: '7 min',
    author: 'Especialista en Ventas'
  },
  {
    id: 3,
    title: 'El poder del mercadeo relacional',
    subtitle: 'Construyendo vínculos duraderos para la rentabilidad a largo plazo',
    introduction: 'A diferencia del marketing transaccional, el mercadeo relacional busca construir vínculos duraderos y significativos con los clientes para asegurar la rentabilidad a largo plazo.',
    concepts: [
      {
        title: 'Confianza y Transparencia',
        description: 'Cumplimiento de promesas como base del vínculo.'
      },
      {
        title: 'Fidelización',
        description: 'Es más rentable retener a un cliente existente que adquirir uno nuevo.'
      },
      {
        title: 'Valor de Vida del Cliente (CLV)',
        description: 'Incrementar el valor total que el cliente aporta a la empresa.'
      }
    ],
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
    date: '2024-01-05',
    readTime: '6 min',
    author: 'Consultor de Marketing'
  },
  {
    id: 4,
    title: 'La importancia de la base de datos',
    subtitle: 'El activo más valioso de cualquier negocio moderno',
    introduction: 'Los datos son el activo más valioso de cualquier negocio moderno. Una base de datos gestionada es el cerebro operativo que impulsa la toma de decisiones informada.',
    concepts: [
      {
        title: 'Segmentación',
        description: 'Personalización de ofertas según el comportamiento del cliente.'
      },
      {
        title: 'Optimización',
        description: 'Identificación de ineficiencias en los procesos y la cadena de suministro.'
      },
      {
        title: 'Ventaja Competitiva',
        description: 'Anticipación a las tendencias del mercado mediante el análisis de datos.'
      }
    ],
    icon: Database,
    color: 'from-orange-500 to-red-500',
    date: '2023-12-28',
    readTime: '8 min',
    author: 'Analista de Datos'
  },
  {
    id: 5,
    title: 'La importancia de mutar',
    subtitle: 'Adaptación como clave de supervivencia en el entorno digital',
    introduction: 'En un entorno volátil y complejo, la capacidad de adaptación o "mutación" es esencial para la supervivencia. La rigidez ante el cambio tecnológico o del consumidor es un riesgo crítico.',
    concepts: [
      {
        title: 'Agilidad',
        description: 'Adopción de metodologías que permitan iterar y pivotar rápidamente.'
      },
      {
        title: 'Aprendizaje Continuo',
        description: 'Cultura de experimentación donde el error es parte del proceso.'
      },
      {
        title: 'Escucha del Entorno',
        description: 'Monitoreo constante de la competencia y las nuevas tecnologías.'
      }
    ],
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    date: '2023-12-20',
    readTime: '5 min',
    author: 'Innovador Digital'
  },
  {
    id: 6,
    title: 'Primero construye tu avatar',
    subtitle: 'El paso inicial indispensable para cualquier campaña exitosa',
    introduction: 'El éxito de cualquier campaña reside en el entendimiento del cliente ideal. Crear un avatar (buyer persona) es el paso inicial indispensable antes de redactar cualquier texto.',
    concepts: [
      {
        title: 'Psicografía',
        description: 'Entender los valores, retos y "puntos de dolor" del cliente.'
      },
      {
        title: 'Mensaje Relevante',
        description: 'Los textos deben hablar directamente a las necesidades del avatar.'
      },
      {
        title: 'Diferenciación',
        description: 'Un conocimiento profundo permite ofrecer un valor único frente a la competencia.'
      }
    ],
    icon: Target,
    color: 'from-indigo-500 to-purple-500',
    date: '2023-12-15',
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
              {language === 'es' ? 'Blog de Marketing Digital' : 'Digital Marketing Blog'}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
              {language === 'es' 
                ? 'Descubre estrategias, tácticas y conocimientos para impulsar tu negocio en el entorno digital.'
                : 'Discover strategies, tactics and insights to boost your business in the digital environment.'
              }
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
                className="bg-white rounded-2xl overflow-hidden border border-navy/5 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${article.color}`} />
                
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-navy/55 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${article.color} flex items-center justify-center mb-4`}>
                    <article.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {article.title}
                  </h3>
                  <p className="text-navy/55 text-sm mb-4">
                    {article.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {article.introduction}
                  </p>

                  {/* Concepts */}
                  <div className="space-y-3 mb-6">
                    {article.concepts.map((concept, conceptIndex) => (
                      <div key={conceptIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${article.color} mt-1.5 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-navy text-sm mb-1">
                            {concept.title}
                          </h4>
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {concept.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <button className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${article.color} text-white font-semibold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5`}>
                    {language === 'es' ? 'Leer artículo completo' : 'Read full article'}
                  </button>
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
