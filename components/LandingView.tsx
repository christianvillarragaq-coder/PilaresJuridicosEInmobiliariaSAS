import React from 'react';
import { ViewMode } from '../types';

interface LandingViewProps {
  onSelect: (view: ViewMode) => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[calc(100vh-80px)] overflow-hidden">
      {/* Sección Legal */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-1000 ease-in-out hover:flex-[1.4] border-b md:border-b-0 md:border-r border-[#d4af37]/30"
        onClick={() => onSelect(ViewMode.LEGAL)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-[#0f1a2e]/85 group-hover:bg-[#0f1a2e]/75 transition-colors duration-500" />
        
        <div className="relative z-10 text-center px-8">
          <div className="mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">
             <div className="w-20 h-20 mb-6 border-2 border-[#d4af37] rounded-full mx-auto flex items-center justify-center text-4xl bg-[#d4af37]/10 shadow-[0_0_30px_rgba(212,175,55,0.3)]">⚖️</div>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Pilares Jurídicos</h2>
             <div className="h-1 w-12 bg-[#d4af37] mx-auto group-hover:w-32 transition-all duration-700"></div>
          </div>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-xs mx-auto tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">Firma Legal Especializada en Bogotá</p>
          <button className="border border-[#d4af37] px-8 py-3 text-[#d4af37] font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-white transition-all">Ingresar área legal</button>
        </div>
      </div>

      {/* Sección Inmobiliaria */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-1000 ease-in-out hover:flex-[1.4]"
        onClick={() => onSelect(ViewMode.REAL_ESTATE)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-[#1a1a1a]/85 group-hover:bg-[#1a1a1a]/75 transition-colors duration-500" />

        <div className="relative z-10 text-center px-8">
          <div className="mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">
             <div className="w-20 h-20 mb-6 border-2 border-white/50 rounded-full mx-auto flex items-center justify-center text-4xl bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.1)]">🏡</div>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">Inmobiliaria</h2>
             <div className="h-1 w-12 bg-white mx-auto group-hover:w-32 transition-all duration-700"></div>
          </div>
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-xs mx-auto tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">Gestión de Activos y Propiedad Raíz</p>
          <button className="border border-white px-8 py-3 text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all">Ver catálogo bienes</button>
        </div>
      </div>
    </div>
  );
};

export default LandingView;