import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { languages, site, type Dict, type Language } from '../../i18n/dictionaries';

interface NavbarProps {
  dict: Dict;
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
}

export function Navbar({ dict, currentLang, onChangeLang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: dict.nav.about, href: '#about' },
    { name: dict.nav.work, href: '#work' },
    { name: dict.nav.stack, href: '#stack' },
    { name: dict.nav.process, href: '#process' },
    { name: dict.nav.services, href: '#services' },
    { name: dict.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey) return;
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }}
          aria-label="SolutionsHub — Inicio"
          className="font-display text-lg font-bold tracking-tight text-fg hover:text-accent transition-colors"
        >
          SolutionsHub<span className="text-accent">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-fg-muted hover:text-fg transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-full border border-line p-0.5">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onChangeLang(l)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-colors ${
                  l === currentLang
                    ? 'bg-accent text-[#0A0A0B] font-medium'
                    : 'text-fg-dim hover:text-fg'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-fg text-[#0A0A0B] px-4 py-2 text-[13px] font-semibold hover:bg-accent transition-colors"
          >
            {dict.nav.cta}
          </a>

          <button
            type="button"
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-fg"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-fg-muted hover:text-fg transition-colors"
              >
                {l.name}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-line">
              {languages.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => {
                    onChangeLang(l);
                    setOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                    l === currentLang
                      ? 'bg-accent text-[#0A0A0B] font-medium'
                      : 'text-fg-dim border border-line'
                  }`}
                >
                  {l}
                </button>
              ))}
              <a
                href={site.smartsavings}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[12px] text-fg-muted underline underline-offset-4 hover:text-accent"
              >
                SmartSavings
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
