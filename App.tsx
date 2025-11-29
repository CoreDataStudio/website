
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Projects } from './components/Projects';
import { Founders } from './components/Founders';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Background } from './components/Background';
import { Lang } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'it' : 'en'));
  };

  return (
    <div className="min-h-screen relative bg-cds-bg text-cds-fg selection:bg-cds-accent selection:text-cds-bg flex flex-col items-center">
      <Background />
      
      {/* Header Visible everywhere */}
      <Header lang={lang} toggleLang={toggleLang} />

      <div className="w-full max-w-[2000px] mx-auto border-x border-cds-border/0 2xl:border-cds-border/50 shadow-2xl bg-cds-bg/30">
        
        {/* Hero Section - Full Width Vertical Stack */}
        <Hero lang={lang} />

        {/* Scrollable Content */}
        <main className="relative z-10 bg-cds-bg border-t border-cds-border/50">
          <Vision lang={lang} />
          <Projects lang={lang} />
          <Founders lang={lang} />
          <Footer />
        </main>
      </div>

      <CookieBanner lang={lang} />
    </div>
  );
};

export default App;