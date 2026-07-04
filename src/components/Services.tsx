import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Droplet, 
  Cpu, 
  Wrench, 
  Gauge, 
  CalendarDays, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Sparkles, 
  AlertTriangle,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  Droplet: Droplet,
  Cpu: Cpu,
  Wrench: Wrench,
  Gauge: Gauge,
  CalendarDays: CalendarDays
};

export default function Services({ onOpenQuoteWithService }: ServicesProps) {
  const [activeDetailService, setActiveDetailService] = useState<Service | null>(null);

  const getIcon = (name: string) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent size={24} className="text-red-500" /> : <Wrench size={24} className="text-red-500" />;
  };

  const featuredService = SERVICES_DATA.find(s => s.isFeatured);
  const secondaryServices = SERVICES_DATA.filter(s => !s.isFeatured);

  return (
    <section id="servicios" className="py-24 md:py-32 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-red-500">
            <span className="h-1 w-8 bg-red-500"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              SERVICIOS DE ALTA GAMA
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tighter mb-6">
            Mecánica General en Cauquenes
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Ofrecemos soluciones integrales y diagnósticos precisos de nivel de concesionario para automovilistas de Cauquenes, Chanco, Pelluhue, Constitución y todo el Maule Sur.
          </p>
        </div>

        {/* Featured Card + High Impact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Featured brake service card */}
          {featuredService && (
            <div className="lg:col-span-8 group relative overflow-hidden rounded-lg border border-red-500/20 bg-neutral-900 h-[560px] flex flex-col justify-end p-8 sm:p-12 transition-all hover:border-red-500/40">
              {/* Background cover image with scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  alt={featuredService.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOVkRae6iCcbisFCY7zTRibD3BK60quLsb7BFrtNafTGZXZQ5H6jrnKWeWNw97lAeTzGnPU8RkxpJJgU4rFrZsHBeK9e-SLJXU9j56un1kYsq6GxOgeHtQcPyzTNbNn2tmuK0oi9Hcd2JzlmkKaTtlRoHfxNk7YvHoyjIRPJR5bRtF8-kPNmc4oFtoz7FqelCXfcgNNiaWqo3u2Z5tU5YXoW3WI_NCCCqd9KQjStoaL9QHrLN2cmQsAeZMy-r8w69N-6C-O4FKKMpK"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              </div>

              {/* Tag */}
              {featuredService.tag && (
                <span className="absolute top-6 right-6 bg-red-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
                  {featuredService.tag}
                </span>
              )}

              {/* Content overlay */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-red-600/20 border border-red-500/30 rounded">
                    {getIcon(featuredService.iconName)}
                  </div>
                  <span className="text-xs text-red-500 font-mono font-bold uppercase tracking-widest">Servicio Recomendado</span>
                </div>
                
                <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white mb-4 tracking-tight max-w-2xl leading-none">
                  {featuredService.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
                  {featuredService.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveDetailService(featuredService)}
                    className="bg-white hover:bg-red-600 text-black hover:text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded cursor-pointer"
                  >
                    Saber Más
                  </button>
                  <button
                    onClick={() => onOpenQuoteWithService(featuredService.id)}
                    className="bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-white/20 text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded cursor-pointer"
                  >
                    Cotizar Ahora
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Oil change service card (High impact design) */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-lg border border-white/5 bg-neutral-900/60 h-[560px] flex flex-col justify-between p-8 sm:p-10 transition-all hover:border-red-500/20">
            {/* Ambient image background at very low opacity */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Cambio de Aceite Premium"
                className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeo7UEoKlAQ9IPDAxSNk46r33OBEFUV0TbcubaKgLC9hNE5GLsPEk7kr_w1NtVzCBsWmEnJAyZ0XSOPp7VedCu58LoRSAg9JwCcCHiVrlhMxx0SsRAS6IejGKrl9fvkTWbqZRLYWsgiKTJs9sFDQ3HdxkKMlIB-6n4fwrCQa-v7mu9b__aYd0tBNvzGguLt9bQmrLzNk67-pM0CSLyw3KQbGFwEadjPPRSjZjc_sZTRS1Tdz0euG2qN-gZFY7-9If995-DmZOrbtbc"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
            </div>

            {/* Top icon and header */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="p-3 bg-red-600/10 border border-red-500/20 rounded">
                <Droplet size={24} className="text-red-500" />
              </div>
              <span className="font-mono text-xs text-gray-500 font-semibold tracking-wider">02 / SERVICIOS</span>
            </div>

            {/* Bottom details */}
            <div className="relative z-10">
              <h3 className="font-sans font-bold text-2xl text-white mb-3 tracking-tight">
                Cambio de Aceite
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Lubricantes sintéticos de última generación homologados para prolongar la vida útil de tu motor bajo conducción exigente.
              </p>
              
              <div className="flex gap-4 items-center mb-6 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-red-500" /> 45 min
                </div>
                <div className="flex items-center gap-0.5">
                  <DollarSign size={12} className="text-red-500" /> desde $38.000
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    const oilService = SERVICES_DATA.find(s => s.id === 'aceite');
                    if (oilService) setActiveDetailService(oilService);
                  }}
                  className="w-full text-center border border-white/10 hover:border-white/20 hover:bg-white/5 py-3 text-xs font-bold tracking-widest uppercase transition-all rounded cursor-pointer"
                >
                  Ver Especificaciones
                </button>
                <button
                  onClick={() => onOpenQuoteWithService('aceite')}
                  className="w-full text-center bg-red-600 hover:bg-white text-white hover:text-black py-3 text-xs font-bold tracking-widest uppercase transition-all rounded cursor-pointer"
                >
                  Cotizar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="secondary-services-grid">
          {secondaryServices.map(s => (
            <div
              key={s.id}
              className="group p-8 rounded-lg bg-neutral-900/40 border border-white/5 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-red-600/10 border border-red-500/20 rounded group-hover:bg-red-600/20 transition-colors">
                    {getIcon(s.iconName)}
                  </div>
                  <span className="font-mono text-[10px] text-gray-600 font-bold uppercase">PREMIUM</span>
                </div>

                <h4 className="font-sans font-bold text-lg text-white mb-2 tracking-tight leading-snug group-hover:text-red-500 transition-colors">
                  {s.title.split(' en ')[0]}
                </h4>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 border-t border-white/5 pt-4 mb-4">
                  <span>Demora: {s.estimatedTime}</span>
                  <span className="text-red-500">{s.basePrice}</span>
                </div>

                <button
                  onClick={() => setActiveDetailService(s)}
                  className="text-xs font-bold tracking-wider uppercase text-red-500 group-hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Saber Más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Modal Dialog */}
      {activeDetailService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="service-detail-modal">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveDetailService(null)}
          ></div>

          {/* Modal box */}
          <div className="relative bg-neutral-900 border border-white/10 rounded-lg max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-10">
            {/* Header image / banner representation */}
            <div className="h-44 bg-gradient-to-br from-red-600/30 to-black/80 p-8 flex items-end relative border-b border-white/5">
              <div className="absolute top-4 right-4 bg-black/50 p-1.5 rounded-full hover:bg-black/80 text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => setActiveDetailService(null)}>
                <X size={18} />
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-3 bg-red-600 border border-red-500/20 rounded-full">
                  {getIcon(activeDetailService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-red-500 font-mono uppercase tracking-widest font-bold">Servicio Automotriz</span>
                  <h3 className="text-lg font-bold text-white leading-tight">{activeDetailService.title.split(' en ')[0]}</h3>
                </div>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Long Description */}
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">{activeDetailService.longDescription}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 bg-black/40 border border-white/5 p-4 rounded text-sm">
                <div>
                  <span className="text-xs text-gray-400 font-mono block">TIEMPO ESTIMADO</span>
                  <span className="font-semibold text-white font-mono flex items-center gap-1.5 mt-0.5">
                    <Clock size={14} className="text-red-500" /> {activeDetailService.estimatedTime}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-mono block">VALOR DESDE</span>
                  <span className="font-semibold text-red-500 font-mono flex items-center gap-1.5 mt-0.5">
                    <Sparkles size={14} /> {activeDetailService.basePrice}
                  </span>
                </div>
              </div>

              {/* Symptoms (Alerta de Desgaste) */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-500 flex items-center gap-1.5 mb-3">
                  <AlertTriangle size={14} /> Señales de alerta (¿Cuándo agendar?)
                </h4>
                <ul className="space-y-2">
                  {activeDetailService.symptoms.map((sym, idx) => (
                    <li key={idx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-green-500 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 size={14} /> Beneficios de nuestro servicio
                </h4>
                <ul className="space-y-2">
                  {activeDetailService.benefits.map((ben, idx) => (
                    <li key={idx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/5 flex gap-4">
                <button
                  onClick={() => {
                    const id = activeDetailService.id;
                    setActiveDetailService(null);
                    onOpenQuoteWithService(id);
                  }}
                  className="bg-red-600 hover:bg-white text-white hover:text-black py-3.5 px-6 font-bold tracking-wider text-xs uppercase rounded w-full transition-all text-center cursor-pointer"
                >
                  Cotizar este Servicio
                </button>
                <button
                  onClick={() => setActiveDetailService(null)}
                  className="border border-white/10 hover:bg-white/5 py-3.5 px-6 font-semibold text-xs uppercase rounded w-full transition-all text-center text-gray-300 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
