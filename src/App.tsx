import { useEffect, useState } from 'react';
import {
  defaultLanguage,
  getDictionary,
  languages,
  marqueeItems,
  type Language,
} from './i18n/dictionaries';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Marquee } from './components/Marquee';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Work } from './sections/Work';
import { Stack } from './sections/Stack';
import { Process } from './sections/Process';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';

function detectInitialLang(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && (languages as readonly string[]).includes(param)) {
    return param as Language;
  }
  const saved = window.localStorage.getItem('solutionshub-lang');
  if (saved && (languages as readonly string[]).includes(saved)) {
    return saved as Language;
  }
  return defaultLanguage;
}

function App() {
  const [lang, setLang] = useState<Language>(detectInitialLang);
  const dict = getDictionary(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'SolutionsHub — B2B Engineering, AI & Automation'
        : 'SolutionsHub — Ingeniería B2B, IA & Automatización';
    window.localStorage.setItem('solutionshub-lang', lang);
  }, [lang]);

  return (
    <>
      <Navbar dict={dict} currentLang={lang} onChangeLang={setLang} />
      <main className="w-full overflow-x-clip bg-bg text-fg">
        <Hero dict={dict} />
        <Marquee items={marqueeItems} />
        <About dict={dict} />
        <Work dict={dict} />
        <Stack dict={dict} />
        <Process dict={dict} />
        <Services dict={dict} />
        <Contact dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} />
    </>
  );
}

export default App;
