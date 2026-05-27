import React from 'react';
import { Mail, Code2 } from 'lucide-react';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2.5rem',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '2.5rem',
          marginBottom: '2rem'
        }} className="footer-top">
          {/* Logo */}
          <a href="#hero" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-bold)',
            color: 'var(--text-primary)'
          }}>
            <Code2 style={{ color: 'var(--accent-primary)', width: '24px', height: '24px' }} />
            <span>Dorns<span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.Tech</span></span>
          </a>

          {/* Nav links */}
          <ul style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="footer-links">
            <li>
              <a href="#hero" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }} className="footer-link">
                {t('nav_home')}
              </a>
            </li>
            <li>
              <a href="#about" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }} className="footer-link">
                {t('nav_about')}
              </a>
            </li>
            <li>
              <a href="#services" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }} className="footer-link">
                {t('nav_services')}
              </a>
            </li>
            <li>
              <a href="#projects" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }} className="footer-link">
                {t('nav_projects')}
              </a>
            </li>
            <li>
              <a href="#contact" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }} className="footer-link">
                {t('nav_contact')}
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://www.instagram.com/dornstech/?hl=pt" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              className="footer-icon"
            >
              <i className="bx bxl-instagram" style={{ fontSize: '20px' }}></i>
            </a>
            <a 
              href="mailto:dorns42techservice@gmail.com"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              className="footer-icon"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              className="footer-icon"
            >
              <i className="bx bxl-github" style={{ fontSize: '20px' }}></i>
            </a>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)'
        }} className="footer-bottom">
          <p>&copy; {currentYear} Dorns Tech Solutions. {t('footer_rights')}</p>
          <p>{t('footer_developed')} <span>❤️</span> {t('footer_developed_by')}</p>
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 768px) {
          .footer-top {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
            gap: 1.5rem !important;
          }
          .footer-links {
            justify-content: center;
            gap: 1.5rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center;
            gap: 0.75rem !important;
          }
        }
        .footer-link:hover {
          color: var(--accent-primary) !important;
        }
        .footer-icon:hover {
          color: var(--accent-primary) !important;
        }
        .footer-bottom span {
          color: #ef4444;
          display: inline-block;
          animation: beat 0.3s ease infinite alternate;
        }
        @keyframes beat {
          to { transform: scale(1.15); }
        }
      `}</style>
    </footer>
  );
};
