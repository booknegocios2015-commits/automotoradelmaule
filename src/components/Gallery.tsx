import React, { useState } from 'react';
import { GALLERY_VEHICLES } from '../data';
import { Search, X, MessageSquare, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const categories = [
    { id: 'all', label: 'Todos los Vehículos' },
    { id: 'frenos', label: 'Frenos & Tren' },
    { id: 'motor', label: 'Motor & Lubricación' },
    { id: 'diagnostico', label: 'Electrónica & Diagnóstico' }
  ];

  // Helper to assign categories based on item IDs
  const getCategoryOfItem = (id: string) => {
    if (id === 'gv-4' || id === 'gv-3') return 'frenos';
    if (id === 'gv-2' || id === 'gv-5' || id === 'gv-7') return 'motor';
    return 'diagnostico';
  };

  const filteredVehicles = GALLERY_VEHICLES.filter(item => {
    if (selectedCategory === 'all') return true;
    return getCategoryOfItem(item.id) === selectedCategory;
  });

  const getInquiryWhatsAppURL = (vehicleName: string, serviceName: string) => {
    const text = `Hola! Estaba revisando su galería de trabajos y me interesó el servicio realizado al *${vehicleName}* (${serviceName}). Me gustaría consultar presupuesto y factibilidad técnica para mi vehículo.`;
    return `https://wa.me/56987654321?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="galeria" className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-3">
              CLIENTES SATISFECHOS
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tighter">
              Confianza de Nuestros Clientes
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
              Vehículos atendidos bajo los más rigurosos controles técnicos y estándares de fábrica en la Región del Maule.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2" id="gallery-categories-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border rounded cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 border-red-500 text-white'
                    : 'border-white/5 bg-neutral-900/60 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" id="gallery-grid">
          {filteredVehicles.map(vehicle => (
            <div
              key={vehicle.id}
              className="group relative aspect-square overflow-hidden rounded bg-neutral-900 border border-white/5 transition-all duration-500 hover:border-red-500/30"
            >
              {/* Image */}
              <img
                src={vehicle.image}
                alt={vehicle.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                loading="lazy"
              />

              {/* Hover Scrim Overlay */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6 z-10">
                {/* Top: title */}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-sans font-bold text-sm sm:text-base text-white">{vehicle.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-1 leading-snug">{vehicle.description}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setLightboxImage(vehicle.image);
                      setLightboxTitle(vehicle.name);
                    }}
                    className="p-1.5 bg-white/5 border border-white/10 hover:bg-red-600 hover:text-white rounded text-gray-400 transition-colors"
                    title="Ampliar Imagen"
                  >
                    <ZoomIn size={14} />
                  </button>
                </div>

                {/* Bottom: Whatsapp CTA */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={getInquiryWhatsAppURL(vehicle.name, vehicle.description)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white py-2 px-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageSquare size={12} />
                    Cotizar Similar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/98 backdrop-blur-md" id="gallery-lightbox">
          <div className="absolute inset-0" onClick={() => setLightboxImage(null)}></div>
          <div className="relative max-w-4xl w-full flex flex-col z-10">
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              Cerrar <X size={18} />
            </button>
            {/* Expanded image */}
            <div className="bg-neutral-900 border border-white/10 rounded overflow-hidden">
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-4 bg-black/60 border-t border-white/5 flex justify-between items-center">
                <span className="text-sm font-semibold text-white">{lightboxTitle}</span>
                <span className="text-xs text-gray-400 font-mono">Automotriz Cauquenes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
