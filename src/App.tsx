import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { GENERAL_FAQ } from './data';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleOpenQuote = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = 'Hola! Me gustaría cotizar un servicio de mecánica en su taller en Cauquenes.';
    window.open(`https://wa.me/56987654321?text=${encodeURIComponent(text)}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-600 selection:text-white" id="app-root">
      {/* Navigation Header */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Cinematic Hero */}
      <Hero 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenWhatsApp={handleOpenWhatsAppDirect} 
      />

      {/* Services Showcase */}
      <Services onOpenQuoteWithService={handleOpenQuote} />

      {/* Work Process steps */}
      <Process />

      {/* Filterable Car Gallery */}
      <Gallery />

      {/* Customer Testimonials & Reviews */}
      <Testimonials />

      {/* Interactive FAQ Section */}
      <section id="preguntas-frecuentes" className="py-24 bg-neutral-950 text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-3">
              RESOLVEMOS TUS DUDAS
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tighter">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestros procesos de diagnóstico, lubricantes y cobertura de garantía en Cauquenes.
            </p>
          </div>

          <div className="space-y-4" id="faq-accordion-group">
            {GENERAL_FAQ.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-white/5 bg-neutral-900/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center text-white hover:text-red-500 transition-colors focus:outline-none cursor-pointer"
                    id={`faq-btn-${index}`}
                  >
                    <span className="font-sans font-bold text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 flex-shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Consultation Section */}
      <CtaSection />

      {/* Regional Footer */}
      <Footer />

      {/* Interactive Floating AI WhatsApp Support */}
      <WhatsAppWidget />

      {/* Immersive Booking & Quotation Dialog */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}
