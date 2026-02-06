import React from 'react';

const RealEstateView: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="relative py-32 bg-gray-900 text-white text-center px-4">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Tu Hogar Ideal</h1>
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">Gestión exclusiva de propiedades en las mejores zonas del país.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">VER CATÁLOGO</button>
            <button className="bg-transparent border border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">CONSIGNAR MI BIEN</button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl">🔑</div>
            <h3 className="text-xl font-bold">Arrendamientos</h3>
            <p className="text-gray-500 text-sm">Administración profesional con garantía de pago puntual y cuidado del bien.</p>
          </div>
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl">🏠</div>
            <h3 className="text-xl font-bold">Ventas Especializadas</h3>
            <p className="text-gray-500 text-sm">Marketing agresivo y fotografía de alto nivel para cerrar negocios rápidos.</p>
          </div>
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50">
            <div className="text-5xl">📊</div>
            <h3 className="text-xl font-bold">Avalúos Técnicos</h3>
            <p className="text-gray-500 text-sm">Informes precisos bajo normatividad vigente para conocer el valor real.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateView;