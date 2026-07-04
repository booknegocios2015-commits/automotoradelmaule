import React from 'react';
import { Shield, Zap, Award, Package, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenWhatsApp: () => void;
}

export default function Hero({ onOpenQuote, onOpenWhatsApp }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen min-h-[820px] flex items-center justify-start overflow-hidden bg-neutral-950">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Taller Automotriz de Precisión en Cauquenes"
          className="w-full h-full object-cover object-center opacity-85 select-none"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd7Tm8D9DCQImKelq5Slv34VgmWUXFDgtK99vJjCFOXWehsYgqeinO1h5DXz9AYf9WeCWal7IlHBlzTaQveyLdzimLfryKmlI4ny2TMzgCN4LlW3KEQtz_D7QEzayONxVMg5MuN2xcvDhBU4_3WbZp4yiERih8ISY_7twFfyr3XlL_Byt51ZOye_iIS9Rbfbey-eJkA9NSpAW_wh3G-zdZ-vgcCdMxl82uhho21sgjZtnjMz3SOS26W5hu1JQ4RX7lWkss1oLPDaVZ"
          loading="eager"
        />
        {/* Cinematic horizontal vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        {/* Top-down and bottom-up soft dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/80"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto w-full pt-16">
        {/* Section Badge */}
        <div className="flex items-center gap-2 mb-4 text-red-500 animate-fade-in">
          <Shield size={16} className="fill-red-500/10" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-500">
            Ingeniería de Precisión en el Maule
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tighter max-w-4xl">
          Taller Mecánico en <span className="text-red-500 block sm:inline">Cauquenes</span>
        </h1>

        {/* Sub-description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          Servicios de alto rendimiento: <strong className="text-white font-semibold">Cambio de Aceite</strong> y <strong className="text-white font-semibold">Cambio de Pastillas de Freno</strong> con estándares de fábrica. Cuidamos tu vehículo como si fuera nuestro.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button
            onClick={onOpenQuote}
            id="hero-quote-btn"
            className="group relative bg-red-600 hover:bg-white text-white hover:text-black px-8 py-4.5 font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300 rounded shadow-2xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            Solicitar Cotización
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={onOpenWhatsApp}
            id="hero-whatsapp-btn"
            className="bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-white/25 text-white px-8 py-4.5 font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300 rounded backdrop-blur flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare size={16} className="text-[#25D366]" />
            Consultar por WhatsApp
          </button>
        </div>

        {/* Technical Quality Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-4xl" id="hero-badges">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 border border-red-500/20 rounded">
              <Zap size={16} className="text-red-500" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Técnicos Certificados
              </p>
              <p className="text-[11px] text-gray-400">Capacitación continua multimarca</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 border border-red-500/20 rounded">
              <Zap size={16} className="text-red-500" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Atención Rápida
              </p>
              <p className="text-[11px] text-gray-400">Agenda coordinada sin esperas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 border border-red-500/20 rounded">
              <Award size={16} className="text-red-500" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Garantía Total
              </p>
              <p className="text-[11px] text-gray-400">3 meses de cobertura en reparaciones</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 border border-red-500/20 rounded">
              <Package size={16} className="text-red-500" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Repuestos Premium
              </p>
              <p className="text-[11px] text-gray-400">Lubricantes y piezas homologadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
