import React, { useState } from 'react';
import Logo from './Logo';
import HabeasDataModal from './HabeasDataModal';

const Footer: React.FC = () => {
  const [showHabeas, setShowHabeas] = useState(false);
  
  return (
    <footer className="bg-[#0f1a2e] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
        <div className="space-y-6">
          <Logo className="h-12" light />
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">Especialistas en Derecho de Familia, Inmobiliario y Notarial. Excelencia jurídica y compromiso inmobiliario en Bogotá.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[#a6894a] font-bold text-xs uppercase tracking-widest">Contacto</h3>
          <p className="text-gray-400 text-xs">📍 Cra 10 No 16 39 oficina 1605, Bogotá.</p>
          <p className="text-gray-400 text-xs">📞 +57 310 613 5299</p>
          <p className="text-gray-400 text-xs break-all">✉️ pilaresjuridicoseinmobiliaria@gmail.com</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-[#a6894a] font-bold text-xs uppercase tracking-widest">Horarios</h3>
          <p className="text-gray-400 text-xs italic leading-relaxed">Lunes a sábado de 8 a 6 con cita previa y domingos en casos especiales.</p>
        </div>
      </div>
      <div className="text-center pt-8 text-[9px] text-gray-500 tracking-[0.3em] uppercase flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Pilares Jurídicos e Inmobiliaria SAS</span>
        <button 
          onClick={() => setShowHabeas(true)} 
          className="hover:text-[#a6894a] transition-colors underline cursor-pointer"
        >
          Protección de Datos (Habeas Data)
        </button>
      </div>
      {showHabeas && <HabeasDataModal onClose={() => setShowHabeas(false)} />}
    </footer>
  );
};

export default Footer;