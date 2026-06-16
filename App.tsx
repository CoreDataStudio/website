
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { CookieBanner } from './components/CookieBanner';
import { Lang } from './constants';

function detectLang(): Lang {
  if (typeof navigator !== 'undefined' && navigator.language.startsWith('it')) {
    return 'it';
  }
  return 'en';
}

const App: React.FC = () => {
  const [lang] = useState<Lang>(detectLang);

  return (
    <div className="min-h-screen relative bg-cds-bg text-cds-fg selection:bg-cds-accent selection:text-cds-bg flex flex-col items-center justify-center">
      <Background />
      <Hero />
      <CookieBanner lang={lang} />
    </div>
  );
};

export default App;
