/*
 * WhatsAppBusinessPricingPage - Página interna de precios de WhatsApp Business API
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  Users,
  Send,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppBusinessPricingPage = () => {
  const { language } = useLanguage();

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

        <div className="container relative z-10 px-6">
          <Link
            href="/servicios/mensajeria-masiva"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-coral" />
              </div>
              <span className="text-coral font-semibold text-sm uppercase tracking-wider">
                {language === 'es' ? 'WhatsApp Business API' : 'WhatsApp Business API'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === 'es' ? 'Planes de mensajería' : 'Messaging Plans'}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-coral mb-6">
              {language === 'es' ? 'Precios de WhatsApp Business API' : 'WhatsApp Business API Pricing'}
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed">
              {language === 'es' 
                ? 'Soluciones de comunicación masiva y CRM a través de WhatsApp con precios competitivos y flexibles.'
                : 'Mass communication and CRM solutions through WhatsApp with competitive and flexible pricing.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#0F2044" to="#F8F9FA" />

      {/* Pricing Structure */}
      <section className="bg-pearl py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">
              {language === 'es' ? 'Estructura de precios de WhatsApp' : 'WhatsApp Pricing Structure'}
            </h2>

            {/* Pricing Card 1 */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)] mb-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-coral">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {language === 'es' ? 'Cobro de plataformas CRM' : 'CRM Platform Charges'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {language === 'es'
                      ? 'Las plataformas de CRM (Customer Relationship Management) cobran según la cantidad de contactos activos mensuales que ingresan al chat. Este modelo permite que pagues solo por los clientes con los que realmente interactúas, sin compromisos de volumen mínimo.'
                      : 'CRM (Customer Relationship Management) platforms charge based on the number of monthly active contacts that enter the chat. This model allows you to pay only for the customers you actually interact with, without minimum volume commitments.'
                    }
                  </p>
                  <div className="bg-navy/5 rounded-xl p-6 border-l-4 border-coral">
                    <p className="text-sm font-semibold text-navy mb-2">
                      {language === 'es' ? 'Ejemplo:' : 'Example:'}
                    </p>
                    <p className="text-gray-700">
                      {language === 'es'
                        ? 'Si tienes 500 contactos activos en tu base de datos, pagarás según ese número de contactos mensuales, más cualquier funcionalidad adicional que utilices.'
                        : 'If you have 500 active contacts in your database, you will pay based on that number of monthly contacts, plus any additional functionality you use.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card 2 */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_20px_60px_rgba(15,32,68,0.12)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-coral">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {language === 'es' ? 'Cobro de campañas de difusión masiva de WhatsApp' : 'WhatsApp Mass Campaign Charges'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {language === 'es'
                      ? 'WhatsApp cobra directamente por cada campaña de difusión masiva que realizas. Este modelo es ideal para envíos puntuales, promociones y comunicaciones masivas a tu audiencia. Los precios varían según el país de destino y el tipo de mensaje, que puede ser de Marketing, utilidad y autenticación.'
                      : 'WhatsApp charges directly for each mass broadcast campaign you run. This model is ideal for one-time sends, promotions, and mass communications to your audience. Prices vary by destination country and message type, which can be Marketing, Utility, and Authentication.'
                    }
                  </p>
                  <div className="bg-navy/5 rounded-xl p-6 border-l-4 border-coral">
                    <p className="text-sm font-semibold text-navy mb-2">
                      {language === 'es' ? 'Ejemplo:' : 'Example:'}
                    </p>
                    <p className="text-gray-700">
                      {language === 'es'
                        ? 'Si envías una campaña a 10,000 contactos, pagarás una tarifa por mensaje según el destino y el tipo de contenido (texto, imagen, documento, etc.).'
                        : 'If you send a campaign to 10,000 contacts, you will pay a rate per message based on destination and content type (text, image, document, etc.).'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="#F8F9FA" to="#0F2044" />

      {/* Contact Section */}
      <section className="bg-navy py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'es' ? '¿Necesitas más información?' : 'Need more information?'}
            </h2>
            <p className="text-lg text-white/80 mb-12">
              {language === 'es'
                ? 'Contáctanos para conocer más detalles sobre nuestras soluciones de WhatsApp.'
                : 'Contact us to learn more details about our WhatsApp solutions.'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573105317126"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
              </a>
              <a
                href="mailto:contacto@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                {language === 'es' ? 'Enviar correo' : 'Send email'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppBusinessPricingPage;
