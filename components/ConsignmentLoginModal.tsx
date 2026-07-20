import React, { useState } from 'react';

interface ConsignmentLoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const ConsignmentLoginModal: React.FC<ConsignmentLoginModalProps> = ({ onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'consignar123') {
      onSuccess();
    } else {
      setError('Clave incorrecta. Por favor intente de nuevo.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative border-t-8 border-gold shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
        >
          &times;
        </button>
        
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🏠</div>
          <h2 className="text-2xl font-serif text-[#1a2e4c]">Consignar Inmueble</h2>
          <p className="text-xs text-gray-500 mt-2">Por favor ingrese la clave de consignación autorizada.</p>
        </div>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-xs text-center border border-red-100">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            autoFocus
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder="Clave de consignación" 
            className="w-full border-2 border-gray-100 p-4 rounded-xl text-center focus:border-gold outline-none transition-all"
          />
          <button 
            type="submit" 
            className="w-full bg-[#1a2e4c] text-white font-bold py-4 rounded-xl hover:bg-gold hover:shadow-lg transition-all"
          >
            VALIDAR CLAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsignmentLoginModal;
