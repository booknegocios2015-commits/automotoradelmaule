import React, { useState } from 'react';
import { X, Check, Calendar, Clock, DollarSign, MessageSquare, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedServiceId }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState('sedan');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedServiceId ? [preselectedServiceId] : []
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselectedServiceId if modal opens or changes
  React.useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServices([preselectedServiceId]);
    }
  }, [preselectedServiceId, isOpen]);

  if (!isOpen) return null;

  const vehicleTypes = [
    { id: 'sedan', label: 'Sedán', multiplier: 1.0 },
    { id: 'suv', label: 'SUV', multiplier: 1.15 },
    { id: 'pickup', label: 'Camioneta / Pickup', multiplier: 1.25 },
    { id: 'hatchback', label: 'Hatchback', multiplier: 0.95 },
  ];

  const handleServiceToggle = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  // Calculate estimated cost
  const getSelectedServicesTotal = () => {
    const selectedObj = SERVICES_DATA.filter(s => selectedServices.includes(s.id));
    const rawSum = selectedObj.reduce((sum, item) => {
      // Extract numeric value from string (e.g. "$45.000" -> 45000)
      const numValue = parseInt(item.basePrice.replace(/\D/g, ''), 10) || 0;
      return sum + numValue;
    }, 0);

    const activeVehicle = vehicleTypes.find(v => v.id === vehicleType);
    const multiplier = activeVehicle ? activeVehicle.multiplier : 1.0;
    
    return Math.round(rawSum * multiplier);
  };

  const formatCLP = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleNextStep = () => {
    if (step === 1 && selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio.');
      return;
    }
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor completa tu nombre y teléfono.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API or booking engine submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const getWhatsAppURL = () => {
    const selectedObj = SERVICES_DATA.filter(s => selectedServices.includes(s.id));
    const serviceLabels = selectedObj.map(s => `• ${s.title}`).join('%0A');
    const totalEst = formatCLP(getSelectedServicesTotal());
    const vehicleLabel = vehicleTypes.find(v => v.id === vehicleType)?.label || vehicleType;
    
    const message = `*NUEVA SOLICITUD DE COTIZACIÓN*%0A%0A` +
      `*Cliente:* ${name}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Vehículo:* ${brand} ${model} (${vehicleLabel})%0A` +
      `*Servicios Solicitados:*%0A${serviceLabels}%0A%0A` +
      `*Fecha sugerida:* ${bookingDate || 'Por coordinar'}%0A` +
      `*Hora sugerida:* ${bookingTime || 'Por coordinar'}%0A` +
      `*Presupuesto Estimado:* ${totalEst}%0A` +
      `*Notas adicionales:* ${notes || 'Ninguna'}`;

    // Target number: replace with workshop's WhatsApp number
    return `https://wa.me/56987654321?text=${message}`;
  };

  const handleReset = () => {
    setStep(1);
    setSelectedServices([]);
    setName('');
    setPhone('');
    setBrand('');
    setModel('');
    setBookingDate('');
    setBookingTime('');
    setNotes('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-neutral-900 border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden z-10" id="quote-modal-panel">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
          <div>
            <h3 className="font-sans font-bold text-lg md:text-xl text-white">
              {isSuccess ? '¡Cotización Generada!' : 'Cotizador Automotriz Inteligente'}
            </h3>
            <p className="text-xs text-gray-400 font-mono tracking-wider mt-0.5">
              {isSuccess ? 'Tu reserva ha sido procesada' : `Paso ${step} de 2 — ${step === 1 ? 'Servicios y Vehículo' : 'Información del Cliente'}`}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Cerrar modal"
            id="close-quote-modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="p-8 flex flex-col items-center text-center overflow-y-auto">
            <div className="w-16 h-16 bg-red-600/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={36} />
            </div>
            
            <h4 className="text-2xl font-bold text-white mb-2">¡Solicitud Procesada con Éxito!</h4>
            <p className="text-gray-300 text-sm max-w-md mb-8 leading-relaxed">
              Hemos registrado los datos de tu vehículo y pre-calculado el presupuesto técnico. Para confirmar tu fecha de ingreso de manera inmediata, despacha los detalles a nuestro canal de soporte técnico en WhatsApp.
            </p>

            {/* Summary Ticket */}
            <div className="w-full bg-black/40 border border-white/5 rounded p-6 mb-8 text-left max-w-md">
              <p className="text-xs text-red-500 font-mono uppercase tracking-wider mb-3">Resumen de Cotización</p>
              
              <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                <span className="text-xs text-gray-400">Cliente:</span>
                <span className="text-xs font-semibold text-white">{name}</span>
              </div>
              
              <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                <span className="text-xs text-gray-400">Auto:</span>
                <span className="text-xs font-semibold text-white">{brand} {model}</span>
              </div>

              <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                <span className="text-xs text-gray-400">Servicios:</span>
                <span className="text-xs font-semibold text-white text-right max-w-[200px] truncate">
                  {SERVICES_DATA.filter(s => selectedServices.includes(s.id)).map(s => s.title.split(' ')[0]).join(', ')}
                </span>
              </div>

              {bookingDate && (
                <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                  <span className="text-xs text-gray-400">Fecha / Hora:</span>
                  <span className="text-xs font-semibold text-white">{bookingDate} a las {bookingTime}</span>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <span className="text-sm font-bold text-white">Presupuesto Estimado:</span>
                <span className="text-sm font-bold text-red-500">{formatCLP(getSelectedServicesTotal())}</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 italic">
                *Nota: El valor final puede variar según especificaciones exactas del repuesto requerido.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
              <a 
                href={getWhatsAppURL()}
                target="_blank"
                rel="noreferrer"
                onClick={handleReset}
                className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-4 px-6 text-sm rounded flex items-center justify-center gap-2 transition-all w-full shadow-lg shadow-[#25D366]/20"
                id="submit-to-whatsapp"
              >
                <MessageSquare size={16} />
                Enviar a WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="bg-neutral-800 hover:bg-neutral-700 text-gray-300 font-semibold py-4 px-6 text-sm rounded transition-all w-full border border-white/10"
              >
                Volver al Sitio
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
            <div className="p-6 overflow-y-auto flex-1 space-y-6">

              {/* STEP 1: Services & Vehicle Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Vehicle Type Selection */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                      1. Tipo de Vehículo
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {vehicleTypes.map(v => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setVehicleType(v.id)}
                          className={`p-3 text-center border rounded transition-all cursor-pointer ${
                            vehicleType === v.id
                              ? 'border-red-500 bg-red-600/10 text-white font-semibold'
                              : 'border-white/5 bg-black/20 text-gray-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span className="block text-sm">{v.label}</span>
                          <span className="block text-[10px] text-gray-500 mt-0.5">
                            Factor {v.multiplier}x
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brand & Model Input */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Marca del Auto
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Toyota, Hyundai, Chevrolet"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Modelo y Año
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Hilux 2021, Tucson 2019"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">
                      2. Selecciona los Servicios Requeridos
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICES_DATA.map(s => {
                        const isSelected = selectedServices.includes(s.id);
                        return (
                          <div
                            key={s.id}
                            onClick={() => handleServiceToggle(s.id)}
                            className={`p-4 border rounded cursor-pointer transition-all flex items-start gap-3 select-none ${
                              isSelected
                                ? 'border-red-500/50 bg-red-600/5 text-white'
                                : 'border-white/5 bg-black/10 hover:border-white/20'
                            }`}
                          >
                            <div className={`mt-0.5 w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors ${
                              isSelected ? 'bg-red-600 border-red-500 text-white' : 'border-white/25 text-transparent'
                            }`}>
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-white leading-tight">{s.title.split(' en ')[0]}</p>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-xs font-mono text-red-500">{s.basePrice} <span className="text-[10px] text-gray-500">base</span></span>
                                <span className="text-[10px] text-gray-400">{s.estimatedTime}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Contact Information & Booking */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="bg-black/30 border border-white/5 rounded p-4 mb-4">
                    <p className="text-xs text-gray-300 leading-relaxed">
                      💡 <strong className="text-white">Estimación de Presupuesto:</strong> Según los servicios seleccionados y tu tipo de vehículo, tu presupuesto estimado asciende a <span className="text-red-500 font-bold font-mono">{formatCLP(getSelectedServicesTotal())}</span>. Te contactaremos para afinar la fecha definitiva.
                    </p>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Tu Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Teléfono WhatsApp (10 dígitos)
                      </label>
                      <input
                        type="tel"
                        placeholder="Ej: +56 9 1234 5678"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Booking Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Sugerir una Fecha (Opcional)
                      </label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3.5 top-3.5 text-gray-500" />
                        <input
                          type="date"
                          value={bookingDate}
                          onChange={e => setBookingDate(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Sugerir un Horario (Opcional)
                      </label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-3.5 top-3.5 text-gray-500" />
                        <input
                          type="time"
                          value={bookingTime}
                          onChange={e => setBookingTime(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Notes / Symptoms */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Detalles de la falla o comentarios adicionales
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos qué ruidos o fallas presenta tu vehículo..."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="p-6 border-t border-white/5 flex justify-between items-center bg-black/20">
              {/* Dynamic Cost Counter */}
              <div className="text-left">
                <span className="text-[10px] text-gray-400 font-mono block uppercase">Presupuesto Estimado</span>
                <span className="text-lg font-bold text-red-500 font-mono">
                  {selectedServices.length > 0 ? formatCLP(getSelectedServicesTotal()) : '$0'}
                </span>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="bg-neutral-800 hover:bg-neutral-700 text-white px-5 py-3 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-white/5"
                  >
                    <ArrowLeft size={14} /> Atrás
                  </button>
                )}

                {step === 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={selectedServices.length === 0}
                    className={`px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      selectedServices.length > 0
                        ? 'bg-red-600 hover:bg-white text-white hover:text-black cursor-pointer shadow-lg shadow-red-600/10'
                        : 'bg-neutral-800 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Siguiente <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-600 hover:bg-white hover:text-black text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-red-600/10"
                  >
                    {isSubmitting ? 'Procesando...' : 'Generar Cotización'}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
