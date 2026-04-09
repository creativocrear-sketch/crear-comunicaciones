/* 
 * Navbar  Crear Comunicaciones
 * Design: "Ondas de Comunicación"  Azul noche, Rojo coral, Blanco
 * Men: Inicio | Servicios (dropdown) | Precios (dropdown: SMS, Email, Voz, Validación) | Contacto
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setPricingOpen(false);
    setMobileServicesOpen(false);
    setMobilePricingOpen(false);
  }, [location]);

  const services = [
    { name: 'chatbot', href: "/servicios/chatbot" },
    { name: 'ia para whatsapp', href: "/servicios/ia-whatsapp" },
    { name: 'apps con whatsapp', href: "/servicios/apps-whatsapp" },
    { name: 'omnicanalidad', href: "/servicios/omnicanalidad" },
    { name: 'catálogos de productos', href: "/servicios/catalogos-whatsapp" },
    { name: 'mensajería masiva', href: "/servicios/mensajeria-masiva" },
    { name: 'contact center', href: "/servicios/contact-center" },
    { name: 'consultoría de automatización', href: "/servicios/automatizacion" },
    { name: 'asesoría en comunicación masiva', href: "/servicios/asesoria-comunicacion" },
  ];

  const pricing = [
    { name: 'sms masivos', href: "/sms" },
    { name: 'email masivos', href: "/email" },
    { name: 'sms de voz masivos', href: "/voz" },
    { name: 'validación de correos', href: "/validacioncorreos" },
    { name: 'consultoría', href: "/servicios/automatizacion" },
  ];

  const languageButtonText = language === 'es' ? 'EN' : 'ES';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-dark/20" : "bg-navy/80 backdrop-blur-sm"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/5cTAowCCCqPMKFSnKNEHar/logo-white_f54e0d83.png"
              alt="Crear Comunicaciones"
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/" active={location === "/"}>
              {t('inicio', 'navbar')}
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium">
                {t('servicios', 'navbar')}
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 bg-navy-light/95 backdrop-blur-md rounded-xl shadow-xl shadow-black/20 border border-white/10 py-2 mt-1"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {t(s.name, 'navbar')}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPricingOpen(true)}
              onMouseLeave={() => setPricingOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium">
                {t('precios', 'navbar')}
                <ChevronDown className={`w-4 h-4 transition-transform ${pricingOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {pricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-navy-light/95 backdrop-blur-md rounded-xl shadow-xl shadow-black/20 border border-white/10 py-2 mt-1"
                  >
                    {pricing.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {t(p.name, 'navbar')}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/contacto" active={false}>
              {t('contacto', 'navbar')}
            </NavLink>
          </div>

          {/* CTA + Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/573105317126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-coral/20 animate-pulse-glow"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
<<<<<<< HEAD
              {t('contctanos', 'navbar')}
=======
              Contactanos
>>>>>>> f57a5b29c94d389314e2ea1220300088472b9004
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
              title="Toggle language"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{languageButtonText}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-all text-sm"
              title="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{languageButtonText}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-light/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              <MobileLink href="/">
                {t('inicio', 'navbar')}
              </MobileLink>

              {/* Mobile Services */}
              <div className="py-1">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-white/80 hover:text-white text-sm font-medium"
                >
                  {t('servicios', 'navbar')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-0.5 overflow-hidden"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="block px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {t(s.name, 'navbar')}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Pricing */}
              <div className="py-1">
                <button
                  onClick={() => setMobilePricingOpen(!mobilePricingOpen)}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-white/80 hover:text-white text-sm font-medium"
                >
                  {t('precios', 'navbar')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilePricingOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobilePricingOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-0.5 overflow-hidden"
                    >
                      {pricing.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          className="block px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {t(p.name, 'navbar')}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileLink href="/#contacto">
                {t('contacto', 'navbar')}
              </MobileLink>

              <div className="pt-3">
                <a
                  href="https://wa.me/573105317126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-coral hover:bg-coral-light text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                >
                  {t('contactanos por whatsapp', 'navbar')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-2.5 text-sm text-white/80 hover:text-white font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

export default Navbar;

