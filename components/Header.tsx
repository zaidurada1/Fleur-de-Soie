import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../types';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { to: "/", text: t.nav_home },
    { to: "/services", text: t.nav_services },
    { to: "/offers", text: t.nav_offers },
    { to: "/team", text: t.nav_team },
    { to: "/results", text: t.nav_results },
    { to: "/tips", text: t.nav_tips },
  ];

  const languageOptions: { lang: Language; name: string }[] = [
      { lang: 'en', name: 'EN' },
      { lang: 'fr', name: 'FR' },
      { lang: 'ar', name: 'AR' },
  ];

  const NavLinksComponent: React.FC<{className?: string}> = ({className}) => (
    <nav className={`flex items-center gap-4 ${className}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => 
            `text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${isActive ? 'text-rose-gold' : 'text-charcoal-gray hover:text-rose-gold'}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          {link.text}
        </NavLink>
      ))}
       <div className="relative">
          <button className="text-sm tracking-wider uppercase font-medium flex items-center gap-1">
              {language.toUpperCase()}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              {languageOptions.map(opt => (
                  <button key={opt.lang} onClick={() => setLanguage(opt.lang)} className="block w-full text-left px-4 py-2 text-sm text-charcoal-gray hover:bg-soft-beige">
                      {opt.name}
                  </button>
              ))}
          </div>
      </div>
    </nav>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-serif font-bold text-charcoal-gray">
          Fleur <span className="text-rose-gold">de Soie</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-6 group">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm tracking-wider uppercase font-medium transition-colors duration-300 ${isActive ? 'text-rose-gold' : isScrolled ? 'text-charcoal-gray hover:text-rose-gold' : 'text-white hover:text-rose-gold'}`}>
              {link.text}
            </NavLink>
          ))}
           <div className="relative">
              <button className={`text-sm tracking-wider uppercase font-medium flex items-center gap-1 ${isScrolled ? 'text-charcoal-gray' : 'text-white'}`}>
                  {language.toUpperCase()}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                  {languageOptions.map(opt => (
                      <button key={opt.lang} onClick={() => setLanguage(opt.lang)} className="block w-full text-left px-4 py-2 text-sm text-charcoal-gray hover:bg-soft-beige">
                          {opt.name}
                      </button>
                  ))}
              </div>
          </div>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`z-50 relative ${isScrolled ? 'text-charcoal-gray' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
       {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-24">
            <nav className="flex flex-col items-center gap-6">
                 {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `text-xl tracking-wider uppercase font-medium transition-colors duration-300 ${isActive ? 'text-rose-gold' : 'text-charcoal-gray hover:text-rose-gold'}`}>
                        {link.text}
                    </NavLink>
                ))}
                 <div className="flex gap-4 mt-4">
                    {languageOptions.map(opt => (
                        <button key={opt.lang} onClick={() => { setLanguage(opt.lang); setIsMenuOpen(false); }} className={`px-3 py-1 rounded-full text-sm ${language === opt.lang ? 'bg-rose-gold text-white' : 'bg-gray-200 text-charcoal-gray'}`}>
                            {opt.name}
                        </button>
                    ))}
                 </div>
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;