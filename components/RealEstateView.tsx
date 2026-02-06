
import React from 'react';
import { Property } from '../types';

const MOCK_PROPERTIES: Property[] = [
  { 
    id: '1', 
    title: 'Apartamento de Lujo El Poblado', 
    price: '$850.000.000', 
    location: 'Medellín, Antioquia', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    beds: 3, baths: 3, area: '120m²'
  },
  { 
    id: '2', 
    title: 'Casa Campestre Vía Llanogrande', 
    price: '$1.400.000.000', 
    location: 'Rionegro, Antioquia', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    beds: 4, baths: 5, area: '350m²'
  },
  { 
    id: '3', 
    title: 'Oficina Corporativa Santa Fe', 
    price: '$12.000.000 / Mes', 
    location: 'Bogotá D.C.', 
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    beds: 0, baths: 2, area: '85m²'
  },
];

const RealEstateView: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Search Header */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-white px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tu próximo hogar está aquí</h1>
          <div className="bg-white p-4 rounded-lg shadow-2xl flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <input type="text" placeholder="¿Dónde quieres vivir?" className="flex-grow p-3 text-gray-800 outline-none border-b md:border-b-0 md:border-r border-gray-200" />
            <select className="p-3 text-gray-800 outline-none border-b md:border-b-0 md:border-r border-gray-200 bg-white">
              <option>Tipo de propiedad</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Lote</option>
            </select>
            <button className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition-all">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-gray-900">Propiedades Destacadas</h2>
              <p className="text-gray-500">Selección exclusiva para clientes exigentes</p>
            </div>
            <button className="text-blue-600 font-bold border-b-2 border-blue-600">Ver todas</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOCK_PROPERTIES.map(prop => (
              <div key={prop.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">Venta</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{prop.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center mb-4">
                    <span className="mr-1">📍</span> {prop.location}
                  </p>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div className="flex space-x-4 text-gray-600 text-sm">
                      {prop.beds > 0 && <span>🛏️ {prop.beds}</span>}
                      <span>🚿 {prop.baths}</span>
                      <span>📏 {prop.area}</span>
                    </div>
                    <div className="text-blue-600 font-bold text-lg">{prop.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-5xl">🔑</div>
            <h3 className="text-xl font-bold">Gestión de Arrendamientos</h3>
            <p className="text-gray-600">Nos encargamos de todo el proceso para que tu renta sea segura y puntual.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🏷️</div>
            <h3 className="text-xl font-bold">Venta de Inmuebles</h3>
            <p className="text-gray-600">Marketing digital agresivo y fotografía profesional para vender en tiempo récord.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🏠</div>
            <h3 className="text-xl font-bold">Avalúos Técnicos</h3>
            <p className="text-gray-600">Conoce el valor real de tu patrimonio con expertos certificados.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateView;
