import React, { useState } from 'react';
import { propertyService } from '../services/propertyService';

interface PropertyFormModalProps {
  onClose: () => void;
  onSuccess: () => void;
  isConsignment?: boolean;
}

const PropertyFormModal: React.FC<PropertyFormModalProps> = ({ onClose, onSuccess, isConsignment = false }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [garages, setGarages] = useState(0);
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  
  const [images, setImages] = useState<FileList | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!images || images.length === 0) {
        throw new Error('Debes subir al menos una imagen');
      }

      await propertyService.addProperty({
        title,
        price,
        location,
        area,
        beds,
        baths,
        garages,
        description,
        videoUrl,
        approved: !isConsignment,
        image: '' // Will be set in service
      }, Array.from(images), videoFile || undefined);

      if (isConsignment) {
        // Notificación desactivada temporalmente para debug
        console.log('Inmueble consignado, pendiente de notificacion.');
      }

      setLoading(false);
      onSuccess();
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Error al subir el inmueble');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full my-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl leading-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-serif mb-6 text-gold">
          {isConsignment ? 'Consignar mi Inmueble' : 'Agregar Nuevo Inmueble'}
        </h2>
        
        {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Título</label>
              <input type="text" required value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded" placeholder="Ej. Casa en la montaña" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Precio</label>
              <input type="text" required value={price} onChange={e=>setPrice(e.target.value)} className="w-full border p-2 rounded" placeholder="Ej. $500.000.000 COP" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ubicación</label>
              <input type="text" required value={location} onChange={e=>setLocation(e.target.value)} className="w-full border p-2 rounded" placeholder="Ciudad, Barrio" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Área</label>
              <input type="text" required value={area} onChange={e=>setArea(e.target.value)} className="w-full border p-2 rounded" placeholder="Ej. 120 m²" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Habitaciones</label>
              <input type="number" required value={beds} onChange={e=>setBeds(Number(e.target.value))} className="w-full border p-2 rounded" min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Baños</label>
              <input type="number" required value={baths} onChange={e=>setBaths(Number(e.target.value))} className="w-full border p-2 rounded" min="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Garajes</label>
              <input type="number" required value={garages} onChange={e=>setGarages(Number(e.target.value))} className="w-full border p-2 rounded" min="0" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción detallada</label>
            <textarea required value={description} onChange={e=>setDescription(e.target.value)} className="w-full border p-2 rounded h-24"></textarea>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold mb-2">Multimedia</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Fotos del Inmueble (obligado)</label>
                <input type="file" multiple accept="image/*" onChange={e => setImages(e.target.files)} className="w-full border p-2 rounded text-sm" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Video del Inmueble (opcional)</label>
                <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files?.[0] || null)} className="w-full border p-2 rounded text-sm mb-2" />
                <p className="text-xs text-gray-500 mb-1">O si lo tienes en YouTube, pega el enlace aquí:</p>
                <input type="url" value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} className="w-full border p-2 rounded" placeholder="https://youtube.com/..." />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full text-white font-bold py-3 rounded transition-colors ${loading ? 'bg-gray-400' : 'bg-[#d4af37] hover:bg-yellow-600'}`}
          >
            {loading ? 'Subiendo Inmueble y Archivos...' : 'Guardar Inmueble'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyFormModal;
