import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, Code2 } from 'lucide-react';

interface HeaderProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  t: (key: string) => string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, theme, toggleTheme, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scroll-active' : ''}`} style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      background: isScrolled 
        ? (theme === 'dark' ? 'rgba(3, 7, 18, 0.95)' : 'rgba(248, 250, 252, 0.95)') 
        : 'transparent',
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      transition: 'all 0.35s ease'
    }}>
      <div className="container" style={{
        height: 'var(--header-height)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* LOGO */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: 'var(--text-xl)',
          fontWeight: 'var(--font-bold)',
          color: 'var(--text-primary)'
        }}>
          <Code2 style={{ color: 'var(--accent-primary)', width: '28px', height: '28px' }} />
          <span>Dorns<span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.Tech</span></span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem' }} className="nav-links">
            <li>
              <a href="#hero" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--text-secondary)' }}>
                {t('nav_home')}
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--text-secondary)' }}>
                {t('nav_about')}
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--text-secondary)' }}>
                {t('nav_services')}
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--text-secondary)' }}>
                {t('nav_projects')}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)', color: 'var(--text-secondary)' }}>
                {t('nav_contact')}
              </a>
            </li>
          </ul>
        </nav>

        {/* ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            aria-label="Mudar tema"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: 'transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* LANGUAGE TOGGLE */}
          <button 
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label="Mudar idioma"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.35rem 0.65rem',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-semi)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: 'transparent'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.color = 'var(--accent-primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Globe size={14} />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={toggleMenu} 
            className="menu-toggle"
            aria-label="Menu"
            style={{
              display: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${isMenuOpen ? 'show' : ''}`} style={{
        position: 'fixed',
        top: 0,
        right: isMenuOpen ? 0 : '-100%',
        width: '280px',
        height: '100vh',
        background: theme === 'dark' ? 'rgba(11, 15, 25, 0.98)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderLeft: '1px solid var(--border-color)',
        padding: '5rem 2rem 2rem',
        transition: 'right var(--transition-base)',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        <button 
          onClick={toggleMenu} 
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <li>
            <a href="#hero" onClick={handleNavClick} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--text-primary)', display: 'block' }}>
              {t('nav_home')}
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--text-primary)', display: 'block' }}>
              {t('nav_about')}
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleNavClick} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--text-primary)', display: 'block' }}>
              {t('nav_services')}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--text-primary)', display: 'block' }}>
              {t('nav_projects')}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick} style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)', color: 'var(--text-primary)', display: 'block' }}>
              {t('nav_contact')}
            </a>
          </li>
        </ul>
      </div>

      {/* Add inline CSS to handle responsive display for desktop nav vs mobile drawer */}
      <style>{`
        @media screen and (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
