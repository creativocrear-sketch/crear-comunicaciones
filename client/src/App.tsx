import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import PreciosPage from "./pages/PreciosPage";
import ChatbotPage from "./pages/services/ChatbotPage";
import IAWhatsappPage from "./pages/services/IAWhatsappPage";
import AppsWhatsappPage from "./pages/services/AppsWhatsappPage";
import OmnicanalidadPage from "./pages/services/OmnicanalidadPage";
import CatalogosWhatsappPage from "./pages/services/CatalogosWhatsappPage";
import ContactCenterPage from "./pages/services/ContactCenterPage";
import MensajeriaMasivaPage from "./pages/services/MensajeriaMasivaPage";
import AutomatizacionPage from "./pages/services/AutomatizacionPage";
import AsesoriaComunicacionPage from "./pages/services/AsesoriaComunicacionPage";
import SMSPricingPage from "./pages/pricing/SMSPricingPage";
import EmailPricingPage from "./pages/pricing/EmailPricingPage";
import VozPricingPage from "./pages/pricing/VozPricingPage";
import ValidacionCorreosPricingPage from "./pages/pricing/ValidacionCorreosPricingPage";
import ContactoPage from "./pages/ContactoPage";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/precios" component={PreciosPage} />
        {/* Servicios */}
        <Route path="/servicios/chatbot" component={ChatbotPage} />
        <Route path="/servicios/ia-whatsapp" component={IAWhatsappPage} />
        <Route path="/servicios/apps-whatsapp" component={AppsWhatsappPage} />
        <Route path="/servicios/omnicanalidad" component={OmnicanalidadPage} />
        <Route path="/servicios/catalogos-whatsapp" component={CatalogosWhatsappPage} />
        <Route path="/servicios/contact-center" component={ContactCenterPage} />
        <Route path="/servicios/mensajeria-masiva" component={MensajeriaMasivaPage} />
        <Route path="/servicios/automatizacion" component={AutomatizacionPage} />
        <Route path="/servicios/asesoria-comunicacion" component={AsesoriaComunicacionPage} />
        {/* Precios individuales */}
        <Route path="/sms" component={SMSPricingPage} />
        <Route path="/email" component={EmailPricingPage} />
        <Route path="/voz" component={VozPricingPage} />
        <Route path="/validacioncorreos" component={ValidacionCorreosPricingPage} />
        {/* Contacto */}
        <Route path="/contacto" component={ContactoPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <WhatsAppButton />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

