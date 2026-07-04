import React from 'react';
import { Phone, MapPin, Mail, ArrowUp, Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contacto" className="w-full pt-20 pb-12 bg-neutral-950 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16" id="footer-top-grid">
          
          {/* About Column */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tighter text-white">
                AUTOMOTRIZ CAUQUENES
              </span>
              <p className="text-[10px] uppercase tracking-widest text-red-500 font-mono font-bold leading-none mt-1">
                Ingeniería de Precisión
              </p>
            </div>
            <p className="font-sans text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
              Servicio técnico automotriz de alta gama especializado en mecánica de precisión, mantenimiento preventivo periódico y correctivo en la Región del Maule Sur.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
              <MapPin size={14} className="text-red-500" />
              <span>Cauquenes, Región del Maule, Chile</span>
            </div>
          </div>

          {/* Coverage Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-red-500">
              Cobertura Regional
            </h5>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm text-gray-400 font-sans">
              <span className="hover:text-white transition-colors cursor-default">📍 Cauquenes</span>
              <span className="hover:text-white transition-colors cursor-default">📍 Chanco</span>
              <span className="hover:text-white transition-colors cursor-default">📍 Pelluhue</span>
              <span className="hover:text-white transition-colors cursor-default">📍 Parral</span>
              <span className="hover:text-white transition-colors cursor-default">📍 Linares</span>
              <span className="hover:text-white transition-colors cursor-default">📍 San Javier</span>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h5 className="font-mono text-xs font-bold uppercase tracking-widest text-red-500">
              Ubicación & Contacto
            </h5>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-gray-400">
                Barrio Industrial, Cauquenes, Maule Region, Chile
              </p>
              
              <a 
                href="tel:+56987654321" 
                className="block text-sm sm:text-base font-bold text-white hover:text-red-500 transition-colors font-mono"
              >
                +56 9 8765 4321
              </a>

              <a 
                href="mailto:contacto@automotrizcauquenes.cl" 
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors font-mono"
              >
                <Mail size={12} className="text-red-500" /> contacto@automotrizcauquenes.cl
              </a>
            </div>

            <div className="flex gap-3 pt-2" id="footer-socials">
              <a 
                href="https://google.cl" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 bg-white/5 border border-white/10 hover:border-red-500 hover:text-red-500 rounded transition-all text-gray-400"
                aria-label="Sitio Web"
              >
                <Globe size={14} />
              </a>
              <a 
                href="mailto:contacto@automotrizcauquenes.cl" 
                className="p-2 bg-white/5 border border-white/10 hover:border-red-500 hover:text-red-500 rounded transition-all text-gray-400"
                aria-label="E-mail"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500" id="footer-bottom-bar">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Automotriz Cauquenes. Ingeniería de Precisión. Todos los derechos reservados.
          </p>
          <button
            onClick={handleScrollTop}
            id="scroll-top-btn"
            className="text-red-500 hover:text-white flex items-center gap-1.5 font-bold uppercase transition-colors cursor-pointer p-1"
          >
            Volver Arriba <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
