import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
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
      <div className="text-center pt-8 text-[9px] text-gray-500 tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Pilares Jurídicos e Inmobiliaria SAS
      </div>
    </footer>
  );
};

export default Footer;