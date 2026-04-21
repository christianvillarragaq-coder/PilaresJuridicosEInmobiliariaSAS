import React from 'react';

const LegalView: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="relative py-32 bg-[#0f1a2e] text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Excelencia Jurídica</h1>
          <p className="text-xl text-blue-100/70 font-light mb-10 max-w-2xl mx-auto">Cimentando su tranquilidad legal con respaldo profesional en Bogotá.</p>
          <a href="https://wa.me/573106135299" target="_blank" className="bg-gold-gradient px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">AGENDA TU CONSULTA</a>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#0f1a2e] border-l-4 border-[#d4af37] pl-4 italic">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">Brindar soluciones efectivas bajo principios de ética y transparencia, garantizando la protección de los derechos de nuestros clientes.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#0f1a2e] border-l-4 border-[#0f1a2e] pl-4 italic">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">Ser líderes reconocidos a nivel nacional por la excelencia e innovación en la prestación de servicios jurídicos integrales.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { t: 'Derecho de Familia', d: 'Matrimonios, divorcios, sucesiones, privación y suspensión de patria potestad, custodia, declaración de unión marital de hecho entre otros.', i: '⚖️' },
            { t: 'Derecho Inmobiliario', d: 'Estudio de documentación, contratos, arriendos, ventas, permutas, estudio de títulos entre otros.', i: '🏠' },
            { t: 'Derecho Notarial', d: 'Escrituración, registro, estudio de contratos, gestión matrimonios civiles, divorcios, declaraciones de unión marital de hecho, separación de bienes entre otros.', i: '📝' },
            { t: 'Cobranzas', d: 'Recuperación efectiva de cartera.', i: '💰' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
              <div className="text-4xl mb-4">{s.i}</div>
              <h3 className="font-bold text-[#0f1a2e] mb-2">{s.t}</h3>
              <p className="text-sm text-gray-500">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegalView;