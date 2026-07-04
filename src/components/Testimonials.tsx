import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, UserCheck, Sparkles, X } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { Review } from '../types';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Load reviews from localStorage or default data
  useEffect(() => {
    const saved = localStorage.getItem('auc_client_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(TESTIMONIALS_DATA);
      }
    } else {
      setReviews(TESTIMONIALS_DATA);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) {
      alert('Por favor, ingresa tu nombre y un comentario para continuar.');
      return;
    }

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      name,
      vehicle: vehicle || 'Cliente Particular',
      rating,
      comment,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop', // default generic user avatar
      date: 'Reciente'
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('auc_client_reviews', JSON.stringify(updatedReviews));

    setFormSuccess(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormSuccess(false);
      // Reset fields
      setName('');
      setVehicle('');
      setRating(5);
      setComment('');
    }, 1500);
  };

  return (
    <section id="opiniones" className="py-24 bg-neutral-900 border-t border-b border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest block mb-3">
              TESTIMONIOS REALES
            </span>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tighter">
              Opiniones de Nuestros Clientes
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
              La confianza de la comunidad de Cauquenes es nuestro mayor logro. Lee las experiencias reales de quienes confían su seguridad en nuestro taller.
            </p>
          </div>

          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            id="write-opinion-toggle"
            className="px-6 py-3 border border-red-500/30 hover:border-red-500 hover:bg-red-600/10 text-red-500 hover:text-white text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageSquarePlus size={16} />
            Escribir Opinión
          </button>
        </div>

        {/* Opinion Submission Drawer/Form */}
        {isFormOpen && (
          <div className="mb-12 bg-neutral-950/80 border border-red-500/20 p-6 sm:p-8 rounded-lg max-w-xl mx-auto animate-fade-in" id="opinion-form-panel">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-sans font-bold text-lg text-white">Cuéntanos tu Experiencia</h4>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Cerrar formulario"
              >
                <X size={18} />
              </button>
            </div>

            {formSuccess ? (
              <div className="text-center py-8 text-green-500 flex flex-col items-center">
                <UserCheck size={40} className="mb-3" />
                <p className="font-bold text-base">¡Opinión añadida con éxito!</p>
                <p className="text-xs text-gray-400 mt-1">Gracias por compartir tu feedback con nosotros.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marcos Silva"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Vehículo (Marca, Modelo, Año)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Chevrolet Luv 2.5 2018"
                    value={vehicle}
                    onChange={e => setVehicle(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Calificación
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setRating(val)}
                        className="p-1 transition-transform hover:scale-115 focus:outline-none"
                      >
                        <Star
                          size={24}
                          className={val <= rating ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Comentario *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Escribe aquí tu reseña sincera de la mantención o reparación realizada..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-white text-white hover:text-black py-3 text-xs font-bold uppercase tracking-widest transition-all rounded cursor-pointer mt-2"
                >
                  Enviar Reseña
                </button>
              </form>
            )}
          </div>
        )}

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="reviews-container">
          {reviews.map(review => (
            <div
              key={review.id}
              className="p-8 sm:p-10 rounded-lg bg-neutral-950/60 border border-white/5 flex flex-col justify-between hover:border-red-500/10 transition-all"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-red-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className={index < review.rating ? 'fill-red-500 text-red-500' : 'text-gray-700'}
                    />
                  ))}
                </div>

                {/* Review body text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author profile block */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 flex-shrink-0 bg-neutral-900">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-full h-full object-cover select-none"
                    onError={(e) => {
                      // Fallback if image fails or unsplash rate limits
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(review.name)}`;
                    }}
                  />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-sm text-white">{review.name}</h5>
                  <p className="text-[11px] text-gray-500 font-medium">{review.vehicle} • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
