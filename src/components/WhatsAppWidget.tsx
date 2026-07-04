import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Check } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string; time: string }[]>([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a Automotriz Cauquenes. Soy el experto de turno. ¿Necesitas cotizar un cambio de aceite, pastillas de freno o agendar un scanner para tu vehículo?',
      time: 'Justo ahora'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Trigger intercom popup delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setShowBadge(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom whenever messages list changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const currentTime = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text, time: currentTime };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Dynamic response generation
    setTimeout(() => {
      setIsTyping(false);
      let responseText = 'Excelente. Para darte un presupuesto exacto con los repuestos homologados para tu motor, ¿me podrías indicar la Marca, Modelo y Año de tu vehículo?';
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('freno') || lowerText.includes('pastilla') || lowerText.includes('pastillas')) {
        responseText = '¡Perfecto! El cambio de pastillas de freno es un servicio estrella de alta precisión. Incluye revisión hidráulica. ¿Qué marca y año es tu vehículo para confirmarte stock y valor exacto?';
      } else if (lowerText.includes('aceite') || lowerText.includes('lubricante')) {
        responseText = '¡Excelente! En cambios de aceite usamos lubricantes 100% sintéticos premium (Castrol, Mobil 1, Liqui Moly). ¿Qué kilometraje tiene tu auto y qué marca es?';
      } else if (lowerText.includes('scanner') || lowerText.includes('diagnostico') || lowerText.includes('escaner')) {
        responseText = 'El scanner computarizado profesional tiene un valor base de $25.000. Detecta fallas electrónicas complejas de inmediato. ¿Cuándo te gustaría traer el auto al taller?';
      } else if (lowerText.includes('horario') || lowerText.includes('direccion') || lowerText.includes('donde') || lowerText.includes('cuando')) {
        responseText = 'Atendemos de Lunes a Viernes de 09:00 a 13:00 y de 14:30 a 18:30 hrs. Estamos ubicados en Cauquenes, atendiendo a todo el Maule Sur. ¿Te gustaría agendar una hora?';
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  const handleOptionClick = (optionText: string) => {
    handleSendMessage(optionText);
  };

  const getDirectWhatsAppURL = () => {
    const lastUserMessage = [...messages].reverse().find(m => m.sender === 'user')?.text || '';
    const message = lastUserMessage 
      ? `Hola! Estaba usando el asistente virtual de su taller y me interesa consultar lo siguiente: "${lastUserMessage}"`
      : 'Hola! Me gustaría cotizar un servicio mecánico para mi vehículo.';
    return `https://wa.me/56987654321?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]" id="whatsapp-assistant-widget">
      
      {/* Pulse badge on top of floating icon */}
      {!isOpen && showBadge && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border border-white text-[9px] font-bold text-white items-center justify-center">1</span>
        </span>
      )}

      {/* Floating launcher button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        id="whatsapp-widget-launcher"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer ${
          isOpen ? 'bg-red-600 text-white rotate-90' : 'bg-[#25D366] text-white hover:scale-105'
        }`}
        aria-label="Asistente de WhatsApp"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={26} className="fill-white/10" />}
      </button>

      {/* Chat Drawer Panel */}
      {isOpen && (
        <div 
          className="absolute bottom-18 right-0 w-[320px] sm:w-[360px] bg-neutral-900 border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in"
          id="whatsapp-chat-drawer"
        >
          {/* Header */}
          <div className="bg-black p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-sm">
                  AC
                </div>
                {/* Active pulse */}
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#25D366] border border-neutral-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-sans font-bold text-white">Soporte Cauquenes</h4>
                <p className="text-[10px] text-[#25D366] font-mono tracking-wide">En línea ahora</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message Area */}
          <div className="p-4 h-[280px] overflow-y-auto space-y-4 bg-neutral-950/80">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col max-w-[85%] ${
                  m.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-red-600 text-white rounded-br-none'
                    : 'bg-neutral-800 text-gray-200 rounded-bl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
                <span className="text-[9px] text-gray-500 mt-1 font-mono">{m.time}</span>
              </div>
            ))}

            {/* Simulated typing indicator */}
            {isTyping && (
              <div className="flex flex-col items-start mr-auto max-w-[85%]">
                <div className="p-3 bg-neutral-800 text-gray-400 rounded-lg rounded-bl-none border border-white/5 flex gap-1.5 items-center">
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options chips */}
          <div className="px-3 py-2 bg-neutral-900 border-t border-b border-white/5 flex gap-2 overflow-x-auto select-none no-scrollbar" id="chat-quick-options">
            <button
              onClick={() => handleOptionClick('Cotizar Pastillas de Freno')}
              className="text-[10px] bg-neutral-800 border border-white/5 hover:border-red-500 hover:bg-red-600/10 text-gray-300 hover:text-white px-2.5 py-1.5 rounded-full flex-shrink-0 transition-colors cursor-pointer"
            >
              🛠️ Cotizar Frenos
            </button>
            <button
              onClick={() => handleOptionClick('Cambio de Aceite')}
              className="text-[10px] bg-neutral-800 border border-white/5 hover:border-red-500 hover:bg-red-600/10 text-gray-300 hover:text-white px-2.5 py-1.5 rounded-full flex-shrink-0 transition-colors cursor-pointer"
            >
              🛢️ Cambio de Aceite
            </button>
            <button
              onClick={() => handleOptionClick('Horarios y ubicación')}
              className="text-[10px] bg-neutral-800 border border-white/5 hover:border-red-500 hover:bg-red-600/10 text-gray-300 hover:text-white px-2.5 py-1.5 rounded-full flex-shrink-0 transition-colors cursor-pointer"
            >
              🕒 Horarios taller
            </button>
          </div>

          {/* Footer Input Bar */}
          <div className="p-3 bg-black flex gap-2 items-center border-t border-white/5">
            <input
              type="text"
              placeholder="Escribe tu consulta aquí..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="p-2 bg-red-600 text-white rounded hover:bg-white hover:text-black transition-colors"
              aria-label="Enviar"
            >
              <Send size={14} />
            </button>
          </div>

          {/* WhatsApp Direct Redirection */}
          <div className="bg-[#25D366] hover:bg-[#20ba56] transition-colors p-2.5 text-center">
            <a 
              href={getDirectWhatsAppURL()}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-white flex items-center justify-center gap-1.5 uppercase tracking-wide"
            >
              Conectar WhatsApp Real
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
