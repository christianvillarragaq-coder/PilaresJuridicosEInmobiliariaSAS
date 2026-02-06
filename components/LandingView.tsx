import React from 'react';
import { ViewMode } from '../types';

interface LandingViewProps {
  onSelect: (view: ViewMode) => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden">
      {/* Sección Pilares Jurídicos */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-in-out hover:flex-[1.4] overflow-hidden"
        onClick={() => onSelect(ViewMode.LEGAL)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#0f1a2e]/85 group-hover:bg-[#0f1a2e]/75 transition-colors duration-500" />
        
        <div className="relative z-10 text-center px-6">
          <div className="mb-6 transform transition-all duration-700 group-hover:-translate-y-4">
             <div className="w-20 h-20 mb-6 border border-[#d4af37] rounded-full mx-auto flex items-center justify-center text-4xl bg-[#d4af37]/10 backdrop-blur-sm">⚖️</div>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 font-bold tracking-tight">Pilares Jurídicos</h2>
             <p className="text-[#d4af37] font-semibold text-[10px] tracking-[0.4em] uppercase">Estrategia & Respaldo Legal</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-gray-300 text-sm font-light mb-8 max-w-xs mx-auto">Divorcios, Sucesiones, Derecho Notarial e Inmobiliario en Bogotá.</p>
            <button className="border border-[#d4af37] px-8 py-3 text-[#d4af37] font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-white transition-all duration-300">Consultar ahora</button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-12 bg-[#d4af37]/30 hidden md:block"></div>
      </div>

      {/* Separador Central para Desktop */}
      <div className="hidden md:block w-[1px] bg-[#d4af37]/20 z-20"></div>

      {/* Sección Inmobiliaria */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-in-out hover:flex-[1.4] overflow-hidden"
        onClick={() => onSelect(ViewMode.REAL_ESTATE)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-[#1a2e4c]/85 group-hover:bg-[#1a2e4c]/75 transition-colors duration-500" />

        <div className="relative z-10 text-center px-6">
          <div className="mb-6 transform transition-all duration-700 group-hover:-translate-y-4">
             <div className="w-20 h-20 mb-6 border border-white/30 rounded-full mx-auto flex items-center justify-center text-4xl bg-white/5 backdrop-blur-sm">🏠</div>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 font-bold tracking-tight">Inmobiliaria</h2>
             <p className="text-gray-400 font-semibold text-[10px] tracking-[0.4em] uppercase">Gestión de Activos</p>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-gray-300 text-sm font-light mb-8 max-w-xs mx-auto">Venta, arrendamientos y avalúos técnicos certificados.</p>
            <button className="border border-white px-8 py-3 text-white font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#1a2e4c] transition-all duration-300">Ver propiedades</button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-12 bg-white/30 hidden md:block"></div>
      </div>
    </div>
  );
};

export default LandingView;