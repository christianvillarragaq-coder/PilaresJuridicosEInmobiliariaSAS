import React, { useState } from 'react';
import { emailService } from '../services/emailService';

interface InquiryModalProps {
  onClose: () => void;
  propertyCode: string;
  propertyTitle: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ onClose, propertyCode, propertyTitle }) => {
  const [name, setName] = useState('');
  const [method, setMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await emailService.sendInquiry({
      userName: name,
      contactValue: contactValue,
      contactMethod: method,
      propertyCode: propertyCode,
      propertyTitle: propertyTitle
    });

    setLoading(false);
    if (result.success) {
      if (result.fallback) {
        // Si fue fallback, solo cerramos el modal porque el usuario ya está en su app de correo
        onClose();
      } else {
        setSent(true);
        setTimeout(() => onClose(), 3000);
      }
    }
  };

  if (sent) {
    return (
      <div className="fixed inset-0 bg-black/80 z-[120] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center animate-fadeIn">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-serif mb-2">¡Solicitud Enviada!</h2>
          <p className="text-gray-600">Nos pondremos en contacto contigo muy pronto a través de {method === 'whatsapp' ? 'WhatsApp' : 'tu correo'}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-[120] flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full my-8 relative shadow-2xl animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl transition-colors"
        >
          &times;
        </button>
        
        <div className="mb-6">
          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em]">Interés en Inmueble</span>
          <h2 className="text-2xl font-serif text-[#1a2e4c] leading-tight mt-1">{propertyTitle}</h2>
          <p className="text-xs text-gray-400 mt-1">Cód: {propertyCode}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tu Nombre</label>
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-2 border-gray-100 p-2 focus:border-gold outline-none transition-colors"
              placeholder="Ej. Juan Pérez"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">¿Cómo prefieres ser contactado?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMethod('whatsapp')}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${method === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366]' : 'border-gray-100 text-gray-400'}`}
              >
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setMethod('email')}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${method === 'email' ? 'border-[#1a2e4c] bg-[#1a2e4c]/10 text-[#1a2e4c]' : 'border-gray-100 text-gray-400'}`}
              >
                Email
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
              {method === 'whatsapp' ? 'Tu Número de WhatsApp' : 'Tu Correo Electrónico'}
            </label>
            <input 
              type={method === 'whatsapp' ? 'tel' : 'email'}
              required 
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              className="w-full border-b-2 border-gray-100 p-2 focus:border-gold outline-none transition-colors"
              placeholder={method === 'whatsapp' ? 'Ej. 310 123 4567' : 'Ej. juan@tuempresa.com'}
            />
          </div>

          <p className="text-[10px] text-gray-400 italic">
            Al enviar, autorizas el tratamiento de tus datos para esta consulta inmobiliaria según nuestra política de Habeas Data.
          </p>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-[#1a2e4c] text-white py-4 rounded-2xl font-bold hover:bg-[#a6894a] transition-all shadow-md flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : 'ENVIAR SOLICITUD'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
