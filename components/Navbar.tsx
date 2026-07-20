import React from 'react';
import { ViewMode } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentView: ViewMode;
  setView: (view: ViewMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setView(ViewMode.HOME)}>
            <Logo className="h-12" />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => setView(ViewMode.HOME)} className={`text-[10px] font-bold tracking-widest uppercase ${currentView === ViewMode.HOME ? 'text-[#a6894a]' : 'text-gray-500'}`}>INICIO</button>
            <button onClick={() => setView(ViewMode.LEGAL)} className={`text-[10px] font-bold tracking-widest uppercase ${currentView === ViewMode.LEGAL ? 'text-[#a6894a]' : 'text-gray-500'}`}>LEGAL</button>
            <button onClick={() => setView(ViewMode.REAL_ESTATE)} className={`text-[10px] font-bold tracking-widest uppercase ${currentView === ViewMode.REAL_ESTATE ? 'text-[#a6894a]' : 'text-gray-500'}`}>INMOBILIARIA</button>
            <a href="https://wa.me/573106135299" target="_blank" className="bg-[#1a2e4c] text-white px-6 py-2 rounded text-[10px] font-bold tracking-[0.2em] hover:bg-[#a6894a] transition-all uppercase">WhatsApp</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;