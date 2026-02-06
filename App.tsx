import React, { useState, useEffect } from 'react';
import { ViewMode } from './types';
import LandingView from './components/LandingView';
import LegalView from './components/LegalView';
import RealEstateView from './components/RealEstateView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [view, setView] = useState<ViewMode>(ViewMode.HOME);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

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