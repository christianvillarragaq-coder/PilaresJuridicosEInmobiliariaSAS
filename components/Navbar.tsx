
import React from 'react';
import { ViewMode } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentView: ViewMode;
  setView: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setView(ViewMode.HOME)}
          >
            <Logo className="h-14" />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setView(ViewMode.HOME)}
              className={`text-xs font-bold tracking-widest hover:text-gold transition-colors ${currentView === ViewMode.HOME ? 'text-gold' : 'text-gray-600'}`}
            >
              INICIO
            </button>
            <button 
              onClick={() => setView(ViewMode.LEGAL)}
              className={`text-xs font-bold tracking-widest hover:text-gold transition-colors ${currentView === ViewMode.LEGAL ? 'text-gold' : 'text-gray-600'}`}
            >
              PILARES JURÍDICOS
            </button>
            <button 
              onClick={() => setView(ViewMode.REAL_ESTATE)}
              className={`text-xs font-bold tracking-widest hover:text-gold transition-colors ${currentView === ViewMode.REAL_ESTATE ? 'text-gold' : 'text-gray-600'}`}
            >
              INMOBILIARIA
            </button>
            <a 
              href="https://wa.me/573106135299" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold bg-[#1a2e4c] text-white px-6 py-2.5 rounded shadow-lg hover:bg-gold transition-all uppercase tracking-widest"
            >
              WHATSAPP
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-[#1a2e4c]" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
