import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-black/30 backdrop-blur-sm py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex flex-col"
          id="header-logo"
        >
          <span className="font-sans font-extrabold tracking-tighter text-xl md:text-2xl text-white group-hover:text-red-500 transition-colors">
            AUTOMOTRIZ CAUQUENES
          </span>
          <span className="text-[9px] uppercase tracking-widest text-red-500 font-mono font-bold leading-none">
            Ingeniería de Precisión
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          <button
            onClick={() => scrollToSection('servicios')}
            className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('proceso')}
            className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
          >
            Proceso
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection('opiniones')}
            className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
          >
            Opiniones
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
          >
            Ubicación
          </button>

          <button
            onClick={onOpenQuote}
            id="header-cta-btn"
            className="bg-red-600 hover:bg-white hover:text-black text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-lg shadow-red-600/20"
          >
            Solicitar Cotización
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-red-500 transition-colors focus:outline-none p-1"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 w-[280px] bg-neutral-950/95 backdrop-blur-xl z-40 shadow-2xl border-l border-white/10 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-6 justify-between">
          <div className="flex flex-col space-y-5">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-left text-lg font-medium text-gray-200 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className="text-left text-lg font-medium text-gray-200 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-left text-lg font-medium text-gray-200 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('opiniones')}
              className="text-left text-lg font-medium text-gray-200 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
            >
              Opiniones
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-left text-lg font-medium text-gray-200 hover:text-red-500 py-2 border-b border-white/5 transition-colors"
            >
              Ubicación & Contacto
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-red-600 hover:bg-white hover:text-black text-white py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded text-center"
            >
              Solicitar Cotización
            </button>
            <a
              href="tel:+56987654321"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 py-2 hover:text-white transition-colors"
            >
              <Phone size={14} /> +56 9 8765 4321
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
