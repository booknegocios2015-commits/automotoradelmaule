import React, { useState } from 'react';
import { MessageSquare, HelpCircle, ShieldAlert } from 'lucide-react';

export default function CtaSection() {
  const [userQuery, setUserQuery] = useState('');

  const getWhatsAppCTAUrl = () => {
    let text = 'Hola! Me gustaría coordinar un diagnóstico técnico en su taller para mi vehículo.';
    if (userQuery.trim()) {
      text = `Hola, mi vehículo presenta el siguiente problema: "${userQuery}". Me gustaría coordinar un diagnóstico o cotización en su taller.`;
    }
    return `https://wa.me/56987654321?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden flex items-center justify-center text-center bg-black">
      {/* Subtle abstract background lighting */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-red-600 blur-[150px]"></div>
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        {/* Banner icon */}
        <div className="inline-flex p-3 bg-red-600/10 border border-red-500/20 rounded-full mb-6">
          <ShieldAlert size={24} className="text-red-500" />
        </div>

        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-6 tracking-tighter leading-tight">
          ¿Necesitas ayuda con tu vehículo?
        </h2>
        
        <p className="font-sans text-gray-300 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Estamos ubicados en Cauquenes y atendemos a toda la provincia y comunas del Maule Sur. No arriesgues tu seguridad ni la vida útil de tu motor, confía en mecánicos expertos.
        </p>

        {/* Quick diagnostic helper query box */}
        <div className="max-w-md mx-auto mb-10 bg-neutral-900 border border-white/5 rounded-lg p-5 text-left" id="cta-quick-query-box">
          <div className="flex items-center gap-2 mb-3 text-red-500 font-mono text-xs font-bold uppercase">
            <HelpCircle size={14} /> Consulta rápida de falla
          </div>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            Escribe qué ruidos o comportamientos inusuales tiene tu auto para generar un mensaje estructurado directo para WhatsApp:
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Ej: Tiene un chirrido al frenar y vibra el volante..."
              value={userQuery}
              onChange={e => setUserQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500"
            />
            <a
              href={getWhatsAppCTAUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-white text-white hover:text-black py-3 px-5 text-xs font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl shadow-red-600/10"
            >
              <MessageSquare size={14} /> Enviar Consulta por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
