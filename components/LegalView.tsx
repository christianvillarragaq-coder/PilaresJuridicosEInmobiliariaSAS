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
            <p className="text-gray-600 leading-relaxed">Entregar un servicio personalizado, seguro, puntual, humano, serio, eficaz, confiable con calidad total y excelencia en la gestión desempeñada para nuestros clientes que requieran de asistencia legal en asesoría y gestión jurídica e inmobiliaria.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#0f1a2e] border-l-4 border-[#0f1a2e] pl-4 italic">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">Ser líderes reconocidos a nivel nacional por la excelencia e innovación en la prestación de servicios jurídicos e inmobiliarios con valores éticos y legales.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#0f1a2e] mb-4">Nuestros Servicios Jurídicos</h2>
            <div className="h-1 w-24 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Acompañamiento legal riguroso y personalizado para proteger sus intereses y su patrimonio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: 'Derecho de Familia Patrimonial',
                d: 'Entendemos que las decisiones familiares más importantes están íntimamente ligadas a la protección de su patrimonio. Por eso, nos especializamos en Derecho de Familia Patrimonial, brindando asesoría y representación experta en procesos de sucesiones, divorcios, liquidación de sociedad conyugal, capitulaciones entre otros; Nuestro valor agregado único es que no solo resolvemos su situación legal, sino que los acompañamos de principio a fin en la correcta transición, partición, venta o administración de sus bienes inmuebles, garantizando soluciones integrales bajo un mismo techo corporativo.',
                i: '🏛️',
                featured: true,
                badge: 'Solución Integral Corporativa'
              },
              {
                t: 'Derecho Inmobiliario',
                d: 'Estudio de documentación, contratos, arriendos, ventas, permutas, estudio de títulos entre otros.',
                i: '🏠',
                featured: false
              },
              {
                t: 'Derecho Notarial',
                d: 'Escrituración, registro, estudio de contratos, gestión matrimonios civiles, divorcios, declaraciones de unión marital de hecho, separación de bienes entre otros.',
                i: '📝',
                featured: false
              },
              {
                t: 'Cobranzas',
                d: 'Recuperación efectiva de cartera prejudicial y judicial.',
                i: '💰',
                featured: false
              }
            ].map((s, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 md:p-10 rounded-2xl shadow-sm border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  s.featured 
                    ? 'border-[#d4af37] ring-1 ring-[#d4af37]/30 relative overflow-hidden bg-gradient-to-b from-white via-white to-[#d4af37]/5' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {s.featured && (
                  <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {s.badge}
                  </div>
                )}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#0f1a2e]/5 border border-[#d4af37]/20 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {s.i}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0f1a2e] mb-4">
                    {s.t}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mb-6">
                    {s.d}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <a
                    href={`https://wa.me/573106135299?text=${encodeURIComponent(`Hola, quisiera más información y asesoría sobre ${s.t}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                      s.featured ? 'text-[#a6894a] hover:text-[#0f1a2e]' : 'text-[#0f1a2e] hover:text-[#d4af37]'
                    }`}
                  >
                    <span>Consultar este servicio</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalView;