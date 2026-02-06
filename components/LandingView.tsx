import React from 'react';
import { ViewMode } from '../types';

interface LandingViewProps {
  onSelect: (view: ViewMode) => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[calc(100vh-80px)] overflow-hidden bg-black">
      {/* SECCIÓN JURÍDICA */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[2] border-b md:border-b-0 md:border-r border-[#d4af37]/20"
        onClick={() => onSelect(ViewMode.LEGAL)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0f1a2e]/90 group-hover:bg-[#0f1a2e]/70 transition-colors duration-700" />
        
        <div className="relative z-10 text-center px-10 max-w-md">
          <div className="mb-8 transform transition-all duration-1000 group-hover:-translate-y-6">
             <div className="w-24 h-24 mb-6 border-2 border-[#d4af37] rounded-full mx-auto flex items-center justify-center text-5xl bg-[#d4af37]/10 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.2)]">⚖️</div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-3 font-bold tracking-tight leading-none">Pilares Jurídicos</h2>
             <p className="text-[#d4af37] font-bold text-[11px] tracking-[0.5em] uppercase opacity-80">Excelencia & Compromiso</p>
          </div>
          
          <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-1000 ease-in-out">
            <p className="text-gray-300 text-sm font-light mb-8 leading-relaxed italic">
              "Cimentando su tranquilidad con respaldo legal especializado en Familia, Notarial e Inmobiliario."
            </p>
            <button className="bg-gold-gradient text-[#0f1a2e] px-10 py-3 font-bold text-[11px] tracking-[0.3em] uppercase rounded-sm hover:brightness-110 transition-all shadow-lg">
              Consultoría Legal
            </button>
          </div>
        </div>
        
        {/* Adorno visual inferior */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-[#d4af37]/40 group-hover:h-24 transition-all duration-700"></div>
      </div>

      {/* SECCIÓN INMOBILIARIA */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[2]"
        onClick={() => onSelect(ViewMode.REAL_ESTATE)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#1a2e4c]/90 group-hover:bg-[#1a2e4c]/75 transition-colors duration-700" />

        <div className="relative z-10 text-center px-10 max-w-md">
          <div className="mb-8 transform transition-all duration-1000 group-hover:-translate-y-6">
             <div className="w-24 h-24 mb-6 border-2 border-white/40 rounded-full mx-auto flex items-center justify-center text-5xl bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.1)]">🏠</div>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-3 font-bold tracking-tight leading-none">Inmobiliaria</h2>
             <p className="text-gray-400 font-bold text-[11px] tracking-[0.5em] uppercase opacity-80">Gestión de Activos</p>
          </div>

          <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-1000 ease-in-out">
            <p className="text-gray-300 text-sm font-light mb-8 leading-relaxed italic">
              "Expertos en administración de arriendos, ventas estratégicas y avalúos certificados en Bogotá."
            </p>
            <button className="bg-white text-[#1a2e4c] px-10 py-3 font-bold text-[11px] tracking-[0.3em] uppercase rounded-sm hover:bg-gray-100 transition-all shadow-lg">
              Ver Propiedades
            </button>
          </div>
        </div>
        
        {/* Adorno visual inferior */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-white/30 group-hover:h-24 transition-all duration-700"></div>
      </div>
    </div>
  );
};

export default LandingView;