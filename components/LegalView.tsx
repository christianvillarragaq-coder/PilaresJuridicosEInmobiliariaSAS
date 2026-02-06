
import React from 'react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Derecho de Familia', 
    description: 'Asesoría en procesos de divorcio, sucesiones, fijación de cuotas alimentarias, custodias y protección del núcleo familiar.', 
    icon: '👨‍👩‍👧‍👦' 
  },
  { 
    id: '2', 
    title: 'Derecho Inmobiliario', 
    description: 'Gestión legal de contratos de arrendamiento, compraventa, saneamiento de títulos y régimen de propiedad horizontal.', 
    icon: '🏠' 
  },
  { 
    id: '3', 
    title: 'Derecho Notarial', 
    description: 'Acompañamiento en trámites de escrituración, registros civiles, autenticaciones y gestión ante instrumentos públicos.', 
    icon: '📝' 
  },
  { 
    id: '4', 
    title: 'Cobranzas', 
    description: 'Recuperación efectiva de cartera, procesos ejecutivos, conciliaciones de deuda y representación en cobros pre-jurídicos.', 
    icon: '💰' 
  },
];

const LegalView: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-blue-900 flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
            alt="Justicia y Pilares" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/90"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Excelencia en Pilares Jurídicos</h1>
          <p className="text-xl text-blue-100 font-light mb-8 max-w-2xl mx-auto">
            Soluciones legales integrales con un enfoque humano y profesional en Bogotá y toda Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/573106135299" target="_blank" className="bg-gold-gradient text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-center">
              CONSULTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-10 bg-gray-50 rounded-3xl border-l-8 border-gold shadow-sm">
            <h2 className="text-3xl font-serif text-blue-900 mb-6 italic">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Prestar un servicio integral de asesoría jurídica e inmobiliaria, brindando soluciones efectivas y oportunas a nuestros clientes, bajo los principios de ética, responsabilidad y transparencia, garantizando siempre la protección de sus derechos y patrimonio.
            </p>
          </div>
          <div className="p-10 bg-gray-50 rounded-3xl border-l-8 border-blue-900 shadow-sm">
            <h2 className="text-3xl font-serif text-blue-900 mb-6 italic">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Para el año 2028, Pilares Jurídicos e Inmobiliaria SAS será una empresa líder y reconocida a nivel nacional por su excelencia en la prestación de servicios jurídicos e inmobiliarios, destacándose por su innovación tecnológica y compromiso social.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Valores Corporativos</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Ética', icon: '⚖️' },
              { title: 'Responsabilidad', icon: '🤝' },
              { title: 'Transparencia', icon: '💎' },
              { title: 'Compromiso', icon: '🔥' }
            ].map((val, idx) => (
              <div key={idx} className="text-center space-y-4 group">
                <div className="text-5xl group-hover:scale-110 transition-transform">{val.icon}</div>
                <h3 className="text-xl font-bold tracking-widest uppercase text-gold">{val.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-blue-900 mb-6 italic">¿Por qué elegirnos?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Nuestra experiencia es la garantía de su tranquilidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/20 text-gold rounded-lg flex items-center justify-center text-2xl mb-6">✓</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Seguridad Jurídica</h3>
              <p className="text-gray-600">Blindamos sus negocios y trámites con el respaldo legal más riguroso del mercado.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-900/10 text-blue-900 rounded-lg flex items-center justify-center text-2xl mb-6">👤</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">Cada cliente es único. Diseñamos estrategias a la medida de sus necesidades específicas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/20 text-gold rounded-lg flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Procesos Eficientes</h3>
              <p className="text-gray-600">Optimizamos los tiempos de respuesta mediante el uso de tecnología y conocimiento experto.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Form */}
      <section className="py-24 px-4 bg-blue-900">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-blue-900 mb-2">Consulta Especializada</h2>
            <p className="text-gray-500">Un abogado experto de Pilares Jurídicos se pondrá en contacto con usted.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nombre Completo</label>
              <input type="text" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Teléfono</label>
              <input type="tel" className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">¿Cómo podemos ayudarle?</label>
              <textarea className="w-full p-4 bg-gray-50 border-none rounded-xl h-32 focus:ring-2 focus:ring-gold outline-none transition-all"></textarea>
            </div>
            <button className="md:col-span-2 bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-gold transition-colors uppercase tracking-[0.2em] text-sm shadow-xl">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LegalView;
