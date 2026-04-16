import React, { useState, useEffect } from 'react';
import { Property } from '../types';
import { propertyService } from '../services/propertyService';
import PropertyCard from './PropertyCard';
import LoginModal from './LoginModal';
import PropertyFormModal from './PropertyFormModal';

const RealEstateView: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [showLogin, setShowLogin] = useState(false);
  const [showPropertyForm, setShowPropertyForm] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const data = await propertyService.getProperties();
      setProperties(data);
    } catch (e) {
      console.error("Error fetching properties", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
    const token = localStorage.getItem('admin_token');
    if (token) setIsAdmin(true);
  }, []);

  const handleLogin = (token: string) => {
    localStorage.setItem('admin_token', token);
    setIsAdmin(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
  };

  return (
    <div className="animate-fadeIn">
      {/* Admin Bar */}
      <div className="bg-gray-100 text-right px-4 py-2 border-b flex justify-end gap-4">
        {isAdmin ? (
          <>
            <button onClick={() => setShowPropertyForm(true)} className="text-sm font-bold text-gold hover:text-yellow-600">+ Agregar Inmueble</button>
            <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-black">Cerrar Sesión</button>
          </>
        ) : (
          <button onClick={() => setShowLogin(true)} className="text-sm text-gray-400 hover:text-black hover:underline hidden md:inline-block">Admin Login</button>
        )}
      </div>

      <section className="relative py-32 bg-gray-900 text-white text-center px-4">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Tu Hogar Ideal</h1>
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">Gestión exclusiva de propiedades en las mejores zonas del país.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">VER CATÁLOGO</button>
            <button className="bg-transparent border border-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">CONSIGNAR MI BIEN</button>
          </div>
        </div>
      </section>

      {/* Catálogo de Inmuebles */}
      <section id="catalogo" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif mb-4">Catálogo de Inmuebles</h2>
              <p className="text-gray-500">Propiedades verificadas y listas para entrega.</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-500">Cargando propiedades...</div>
          ) : properties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 text-gray-500">
              No hay inmuebles registrados aún.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(prop => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Servicios Destacados Original */}
      <section className="py-24 px-4 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gold transition-colors">
            <div className="text-5xl">🔑</div>
            <h3 className="text-xl font-bold">Arrendamientos</h3>
            <p className="text-gray-500 text-sm">Administración profesional con garantía de pago puntual y cuidado del bien.</p>
          </div>
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gold transition-colors">
            <div className="text-5xl">🏠</div>
            <h3 className="text-xl font-bold">Ventas Especializadas</h3>
            <p className="text-gray-500 text-sm">Marketing agresivo y fotografía de alto nivel para cerrar negocios rápidos.</p>
          </div>
          <div className="text-center space-y-4 p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-gold transition-colors">
            <div className="text-5xl">📊</div>
            <h3 className="text-xl font-bold">Avalúos Técnicos</h3>
            <p className="text-gray-500 text-sm">Informes precisos bajo normatividad vigente para conocer el valor real.</p>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
      {showPropertyForm && (
        <PropertyFormModal 
          onClose={() => setShowPropertyForm(false)} 
          onSuccess={() => {
            setShowPropertyForm(false);
            fetchProperties(); // Refresh the catalogue
          }} 
        />
      )}
    </div>
  );
};

export default RealEstateView;