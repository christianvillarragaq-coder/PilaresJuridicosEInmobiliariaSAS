import React, { useState } from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Helper para convertir urls normales de youtube a formato embed (iframe)
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    let embedUrl = url;
    if (url.includes('youtube.com/watch?v=')) {
      embedUrl = url.replace('watch?v=', 'embed/').split('&')[0];
    } else if (url.includes('youtu.be/')) {
      embedUrl = url.replace('youtu.be/', 'youtube.com/embed/').split('?')[0];
    }
    return embedUrl;
  };

  const isYouTube = property.videoUrl?.includes('youtu') || false;

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full">
        <div className="relative h-64 overflow-hidden group">
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow">
            {property.price}
          </div>
          {property.videoUrl && (
            <button 
              onClick={() => setShowVideoModal(true)}
              className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full backdrop-blur-sm hover:bg-gold transition-colors hover:scale-110 flex items-center justify-center cursor-pointer"
            >
              ▶ Ver Video
            </button>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold font-serif mb-2">{property.title}</h3>
          <p className="text-gray-500 text-sm mb-4">📍 {property.location}</p>
          
          <div className="grid grid-cols-3 gap-2 mb-4 border-y py-4">
            <div className="text-center">
              <div className="text-gray-400 text-xs">Área</div>
              <div className="font-bold">{property.area}</div>
            </div>
            <div className="text-center border-x">
              <div className="text-gray-400 text-xs">Habitaciones</div>
              <div className="font-bold">{property.beds}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs">Baños</div>
              <div className="font-bold">{property.baths}</div>
            </div>
          </div>

          {property.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {property.description}
            </p>
          )}

          <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gold transition-colors">
            Solicitar Información
          </button>
        </div>
      </div>

      {/* Video Modal (Embed) */}
      {showVideoModal && property.videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
          <button 
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 text-white hover:text-gold text-4xl p-2"
          >
            &times;
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {isYouTube ? (
              <iframe 
                src={getEmbedUrl(property.videoUrl)} 
                title={property.title} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={property.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full"
              >
                Tu navegador no soporta el formato de video.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
