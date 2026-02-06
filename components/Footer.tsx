
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-20 px-4 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="p-2 rounded-xl inline-block">
             <Logo className="h-16" light />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Firma líder en servicios de Derecho de Familia, Inmobiliario, Notarial y Cobranzas. 
            Cimentando su tranquilidad legal y patrimonial con respaldo de Pilares Jurídicos e Inmobiliaria SAS.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-xs font-bold">F</a>
            <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-xs font-bold">IG</a>
            <a href="https://wa.me/573106135299" target="_blank" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-gold transition-colors text-xs font-bold">W</a>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-8 text-gold uppercase tracking-widest text-xs border-l-2 border-gold pl-3">Nuestra Empresa</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Misión</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Visión</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Valores</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Políticas</span></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-8 text-gold uppercase tracking-widest text-xs border-l-2 border-gold pl-3">Áreas de Servicio</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Derecho de Familia</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Derecho Inmobiliario</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Derecho Notarial</span></li>
            <li><span className="hover:text-gold transition-colors cursor-pointer flex items-center"><span className="mr-2 text-gold">›</span> Gestión de Cobranzas</span></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-8 text-gold uppercase tracking-widest text-xs border-l-2 border-gold pl-3">Canales de Atención</h3>
          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg">📍</span>
              <p>Cra 10 No 16 39 oficina 1605,<br/>Edificio Seguros Bolívar,<br/>Bogotá D.C., Colombia.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-lg">📞</span>
              <p>+57 310 613 5299</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-lg">✉️</span>
              <p className="break-all">juridicayhwh@gmail.com</p>
            </div>
            <div className="pt-2 border-t border-blue-900">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Horarios de Atención</p>
              <p className="text-gray-400 italic">Lun - Vie: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-blue-900 mt-20 pt-10 text-center text-gray-500 text-[10px] uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Pilares Jurídicos e Inmobiliaria SAS. Todos los derechos reservados.</p>
        <p className="mt-2 text-gray-600">Excelencia Jurídica y Compromiso Inmobiliario</p>
      </div>
    </footer>
  );
};

export default Footer;
