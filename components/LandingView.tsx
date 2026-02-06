
import React from 'react';
import { ViewMode } from '../types';

interface LandingViewProps {
  onSelect: (view: ViewMode) => void;
}

const LandingView: React.FC<LandingViewProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
      {/* Legal Side */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.2]"
        onClick={() => onSelect(ViewMode.LEGAL)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-blue-900/75 group-hover:bg-blue-900/60 transition-colors" />
        
        <div className="relative z-10 text-center px-8">
          <div className="mb-6 transform transition-transform group-hover:-translate-y-4 duration-500">
             <span className="text-6xl mb-4 block">⚖️</span>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 drop-shadow-2xl">Pilares Jurídicos</h2>
             <div className="h-1 w-20 bg-gold mx-auto mb-4 group-hover:w-40 transition-all duration-500"></div>
          </div>
          <p className="text-gray-200 text-lg md:text-xl mb-10 font-light max-w-md mx-auto leading-relaxed">
            Especialistas en Derecho de Familia, Inmobiliario, Notarial y Cobranzas con respaldo ético.
          </p>
          <div className="inline-block border-2 border-gold px-10 py-4 text-gold font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-blue-900 transition-all shadow-xl">
            CONSULTAR ABOGADO
          </div>
        </div>
      </div>

      {/* Real Estate Side */}
      <div 
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.2]"
        onClick={() => onSelect(ViewMode.REAL_ESTATE)}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-gray-950/70 group-hover:bg-gray-950/50 transition-colors" />
        
        <div className="relative z-10 text-center px-8">
          <div className="mb-6 transform transition-transform group-hover:-translate-y-4 duration-500">
             <span className="text-6xl mb-4 block">🏡</span>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-2 drop-shadow-2xl">Inmobiliaria</h2>
             <div className="h-1 w-20 bg-white mx-auto mb-4 group-hover:w-40 transition-all duration-500"></div>
          </div>
          <p className="text-gray-200 text-lg md:text-xl mb-10 font-light max-w-md mx-auto leading-relaxed">
            Encuentre su propiedad ideal o gestione sus activos con nuestra red de expertos certificados.
          </p>
          <div className="inline-block border-2 border-white px-10 py-4 text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-gray-950 transition-all shadow-xl">
            VER PROPIEDADES
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
