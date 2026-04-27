import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import LandingView from './components/LandingView';
import LegalView from './components/LegalView';
import RealEstateView from './components/RealEstateView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.HOME);
  const [fatalError, setFatalError] = React.useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setFatalError(`Error Global: ${event.message} en ${event.filename}:${event.lineno}`);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  if (fatalError) {
    return (
      <div className="min-h-screen bg-black text-red-500 p-10 font-mono overflow-auto">
        <h1 className="text-3xl font-bold mb-4">⚠️ ERROR CRÍTICO DETECTADO</h1>
        <p className="bg-red-900/20 p-4 border border-red-500/50 rounded">{fatalError}</p>
        <button onClick={() => window.location.reload()} className="mt-8 bg-white text-black px-6 py-2 rounded font-bold">RECARGAR PÁGINA</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-gold/30">
      <Navbar currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === ViewMode.HOME && <LandingView onSelect={setView} />}
        {view === ViewMode.LEGAL && <LegalView />}
        {view === ViewMode.REAL_ESTATE && <RealEstateView />}
      </main>

      <Footer />
      <AIAssistant currentView={view} />
    </div>
  );
};

export default App;