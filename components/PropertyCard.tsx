import React, { useState } from 'react';
import { Property } from '../types';
import { propertyService } from '../services/propertyService';
import InquiryModal from './InquiryModal';

interface PropertyCardProps {
  property: Property;
  isAdmin?: boolean;
  onDelete?: () => void;
  onApprove?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isAdmin, onDelete, onApprove }) => {
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [showInquiryModal, setShowInquiryModal] = React.useState(false);

  // Helper súper robusto para aislar el ID de YouTube
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
      const match = url.match(regExp);
      const videoId = (match && match[2].length === 11) ? match[2] : null;
      
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {}
    
    return url; // Si no es youtube, devuelve la url original
  };
  
  // Helper para formatear precio a COP
  const formatPrice = (price: any) => {
    try {
      if (price === null || price === undefined) return 'Consultar precio';
      const priceStr = String(price);
      // Eliminar caracteres no numéricos para limpiar si ya venía con formato
      const numericValue = priceStr.replace(/[^0-9]/g, '');
      if (!numericValue) return priceStr || 'Consultar precio'; 
      
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(parseInt(numericValue));
    } catch (e) {
      return String(price);
    }
  };
  
  // Si no tiene código (inmuebles antiguos), generamos uno determinista basado en el ID
  const displayCode = property.itemCode || `PJ-${(property.id || 'TEMP').slice(0, 4).toUpperCase()}`;

  const isYouTube = property.videoUrl?.includes('youtu') || false;

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este inmueble? Esta acción no se puede deshacer.')) {
      try {
        await propertyService.deleteProperty(property.id);
        if (onDelete) onDelete();
      } catch (error) {
        console.error("Error al eliminar", error);
        alert("Hubo un error al eliminar el inmueble.");
      }
    }
  };

  return (
    <>
      <div className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full ${!property.approved && isAdmin ? 'ring-2 ring-yellow-400' : ''}`}>
        <div className="relative h-64 overflow-hidden group">
          {isAdmin && !property.approved && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-xs shadow-lg animate-pulse">
              PENDIENTE DE APROBACIÓN
            </div>
          )}
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
            <div className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow">
              {formatPrice(property.price)}
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-[#1a2e4c] px-2 py-0.5 rounded text-[10px] font-bold shadow border border-gray-100 uppercase tracking-tighter">
              Cód: {displayCode}
            </div>
          </div>
          {property.videoUrl && (
            <button 
              onClick={() => setShowVideoModal(true)}
              className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full backdrop-blur-sm hover:bg-gold transition-colors hover:scale-110 flex items-center justify-center cursor-pointer"
            >
              ▶ Ver Video
            </button>
          )}
          {isAdmin && (
            <button 
              onClick={handleDelete}
              className="absolute top-4 left-4 bg-red-600/90 text-white p-2 rounded-full backdrop-blur-sm hover:bg-red-700 transition-colors shadow-lg z-20"
              title="Eliminar inmueble"
            >
              🗑️
            </button>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold font-serif mb-2">{property.title}</h3>
          <p className="text-gray-500 text-sm mb-4">📍 {property.location}</p>
          
          <div className="grid grid-cols-4 gap-1 mb-4 border-y py-4 text-xs">
            <div className="text-center">
              <div className="text-gray-400">Área</div>
              <div className="font-bold sm:text-sm">{property.area}</div>
            </div>
            <div className="text-center border-x">
              <div className="text-gray-400">Cuartos</div>
              <div className="font-bold sm:text-sm">{property.beds}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">Baños</div>
              <div className="font-bold sm:text-sm">{property.baths}</div>
            </div>
            <div className="text-center border-l">
              <div className="text-gray-400">Garaje</div>
              <div className="font-bold sm:text-sm">{property.garages || 0}</div>
            </div>
          </div>

          {property.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {property.description}
            </p>
          )}

          <div className="flex gap-2">
            {!property.approved && isAdmin && (
              <button 
                onClick={async () => {
                  if (onApprove) {
                    await propertyService.approveProperty(property.id);
                    onApprove();
                  }
                }}
                className="flex-grow bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                APROBAR ✅
              </button>
            )}
            <button 
                onClick={() => setShowInquiryModal(true)}
                className={`${!property.approved && isAdmin ? 'w-auto px-4' : 'w-full'} bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gold transition-colors block text-center`}
              >
                {!property.approved && isAdmin ? '📧' : 'Solicitar Información'}
              </button>
          </div>
        </div>
      </div>

      {showInquiryModal && (
        <InquiryModal 
          onClose={() => setShowInquiryModal(false)}
          propertyCode={displayCode}
          propertyTitle={property.title}
        />
      )}

      {/* Video Modal (Embed) */}
      {showVideoModal && property.videoUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <button 
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 text-white hover:text-gold text-4xl p-2 z-50"
          >
            &times;
          </button>
          
          <div 
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
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
