import React, { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (token: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'pilares123') {
      onLogin('admin_token');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full animate-fadeIn relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-serif mb-6 text-center text-gold">Acceso Administrativo</h2>
        
        {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gold text-white font-bold py-3 rounded hover:bg-yellow-600 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
