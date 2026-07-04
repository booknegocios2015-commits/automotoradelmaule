import React, { useState } from 'react';
import { Calendar, Cpu, ClipboardList, Settings2, CheckCircle } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Calendar size={20} />;
      case '02':
        return <Cpu size={20} />;
      case '03':
        return <ClipboardList size={20} />;
      case '04':
        return <Settings2 size={20} />;
      case '05':
        return <CheckCircle size={20} />;
      default:
        return <Calendar size={20} />;
    }
  };

  return (
    <section id="proceso" className="py-24 bg-neutral-900 border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-3">
            NUESTRO FLUJO DE TRABAJO
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tighter text-white mb-6">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Transparencia, velocidad e ingeniería en cada etapa de la reparación de tu vehículo. Así cuidamos de tu inversión.
          </p>
        </div>

        {/* Process Line Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative" id="process-steps-container">
          
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 hidden md:block z-0"></div>

          {WORK_PROCESS_STEPS.map((item, index) => {
            const isHovered = activeStep === index;
            const isDone = item.step === '05';

            return (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative z-10 p-6 sm:p-8 rounded-lg bg-neutral-950/60 border transition-all duration-300 flex flex-col items-center text-center ${
                  isHovered 
                    ? 'border-red-500 bg-black translate-y-[-4px]' 
                    : isDone
                      ? 'border-red-500/20'
                      : 'border-white/5'
                }`}
              >
                {/* Step Circle Bubble */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 border transition-all duration-300 ${
                  isHovered
                    ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/20'
                    : isDone
                      ? 'bg-red-600/10 border-red-500 text-red-500'
                      : 'bg-neutral-900 border-white/10 text-gray-400'
                }`}>
                  {isDone && !isHovered ? getStepIcon('05') : getStepIcon(item.step)}
                </div>

                {/* Step Number Tag */}
                <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider mb-2">
                  Paso {item.step}
                </span>

                {/* Step Title */}
                <h4 className="font-sans font-bold text-base text-white mb-3">
                  {item.title}
                </h4>

                {/* Step Description */}
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
