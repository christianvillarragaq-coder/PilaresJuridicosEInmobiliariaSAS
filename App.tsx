
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

  // Simple scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
