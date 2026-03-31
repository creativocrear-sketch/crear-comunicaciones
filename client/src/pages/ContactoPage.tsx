import { Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-white pt-28 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-3">
              Contacto
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Conoce a Alexander
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 bg-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/alexander-photo_d1054d82.png"
                alt="Alexander Murillo"
                className="w-96 h-auto rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-lg text-gray-600 mb-4">¡Hola, mucho gusto!</p>
              <h2 className="text-4xl font-bold text-black mb-4">
                Mi nombre es <span className="text-coral">Alexander</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Director de Crear Comunicaciones. Estoy aquí para ayudarte a conectar con tu audiencia a través de soluciones de comunicación digital innovadoras y efectivas.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 text-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Reserva tu cita</h3>
            </div>

            {/* Buttons - Side by side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/573105317126?text=Hola%20Alexander%2C%20me%20gustaría%20agendar%20una%20cita%20contigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbeme por WhatsApp
              </a>

              {/* Email Button */}
              <a
                href="mailto:alexmurillo@crearcomunicaciones.net"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Enviar correo
              </a>

              {/* Calendar Button */}
              <a
                href="https://meetings.hubspot.com/alexmurillo?embed=true&uuid=a3c3303f-ec76-4403-8994-2815af888d2d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agenda tu Cita
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
