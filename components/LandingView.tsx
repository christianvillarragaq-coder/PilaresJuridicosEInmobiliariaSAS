import React from 'react';
import { ViewMode } from '../types';

interface LandingViewProps {
  onSelect: (view: ViewMode) => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row h-[100dvh] md:h-[calc(100vh-80px)] overflow-hidden bg-[#0f1a2e]">
      {/* SECCIÓN JURÍDICA */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[1.4] border-b md:border-b-0 md:border-r border-[#d4af37]/20"
        onClick={() => onSelect(ViewMode.LEGAL)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0f1a2e]/90 group-hover:bg-[#0f1a2e]/70 transition-colors duration-700" />
        
        <div className="relative z-10 text-center px-8 max-w-md pointer-events-none transform transition-transform duration-700 group-hover:scale-110">
          <div className="mb-6 transform transition-all duration-1000">
             <div className="w-24 h-24 mb-6 border border-[#d4af37] rounded-full mx-auto flex items-center justify-center text-5xl bg-[#d4af37]/10 backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_70px_rgba(212,175,55,0.3)] transition-all">⚖️</div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 font-bold tracking-tight">Pilares Jurídicos</h2>
             <div className="h-1 w-16 bg-[#d4af37] mx-auto mb-4 transform transition-all duration-700 group-hover:w-32"></div>
             <p className="text-[#d4af37] font-bold text-[11px] tracking-[0.5em] uppercase opacity-90">Defensa & Respaldo Legal</p>
          </div>
          
          <div className="overflow-hidden max-h-0 group-hover:max-h-60 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="text-gray-300 text-sm font-light mb-8 leading-relaxed italic">
              "Especialistas en Derecho de Familia, Notarial e Inmobiliario con sede en el Edificio Seguros Bolívar, Bogotá."
            </p>
            <span className="inline-block border-2 border-[#d4af37] text-[#d4af37] px-10 py-3 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-300 shadow-lg">
              INGRESAR A LEGAL
            </span>
          </div>
        </div>
      </div>

      {/* SECCIÓN INMOBILIARIA */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[1.4]"
        onClick={() => onSelect(ViewMode.REAL_ESTATE)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#1a2e4c]/90 group-hover:bg-[#1a2e4c]/70 transition-colors duration-700" />

        <div className="relative z-10 text-center px-8 max-w-md pointer-events-none transform transition-transform duration-700 group-hover:scale-110">
          <div className="mb-6 transform transition-all duration-1000">
             <div className="w-24 h-24 mb-6 border border-white/40 rounded-full mx-auto flex items-center justify-center text-5xl bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_70px_rgba(255,255,255,0.2)] transition-all">🏠</div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 font-bold tracking-tight">Inmobiliaria</h2>
             <div className="h-1 w-16 bg-white mx-auto mb-4 transform transition-all duration-700 group-hover:w-32"></div>
             <p className="text-gray-300 font-bold text-[11px] tracking-[0.5em] uppercase opacity-90">Gestión Patrimonial Experta</p>
          </div>

          <div className="overflow-hidden max-h-0 group-hover:max-h-60 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="text-gray-200 text-sm font-light mb-8 leading-relaxed italic">
              "Administración de arriendos, ventas estratégicas y avalúos certificados con transparencia total."
            </p>
            <span className="inline-block border-2 border-white text-white px-10 py-3 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#1a2e4c] transition-all duration-300 shadow-lg">
              EXPLORAR INMUEBLES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;