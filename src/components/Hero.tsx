import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

interface HeroProps {
  t: (key: string) => string;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    t('hero_type_1'),
    t('hero_type_2'),
    t('hero_type_3'),
    t('hero_type_4')
  ];

  useEffect(() => {
    const activeWord = words[wordIndex];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(activeWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(activeWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === activeWord.length) {
      // Pause at the end of word before deleting
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section id="hero" className="hero section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--header-height)'
    }}>
      {/* Background orbs */}
      <div className="bg-orb" style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)',
        top: '-100px',
        right: '-100px',
        animation: 'orb-float-1 15s ease-in-out infinite'
      }}></div>
      <div className="bg-orb" style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12), transparent 70%)',
        bottom: '-100px',
        left: '-100px',
        animation: 'orb-float-2 18s ease-in-out infinite'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* LEFT CONTENT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="hero-data">
            <p className="hero__greeting" style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              fontWeight: 'var(--font-medium)'
            }}>
              {t('hero_greeting')}
            </p>
            <h1 className="hero__name" style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--font-extra)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em'
            }}>
              <span style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Dorns Tech Solutions
              </span>
              <br />
              <span style={{ fontSize: 'var(--text-3xl)', color: 'var(--text-primary)', fontWeight: 'var(--font-bold)' }}>
                {t('hero_subtitle')}
              </span>
            </h1>

            {/* Dynamic typing */}
            <div style={{ display: 'flex', alignItems: 'center', minHeight: '2.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-lg)',
                color: 'var(--accent-secondary)',
                paddingRight: '6px',
                whiteSpace: 'nowrap',
                fontWeight: 'var(--font-medium)'
              }} className="typing-cursor">
                {typedText}
              </span>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-base)',
              maxWidth: '550px',
              lineHeight: 1.7
            }}>
              {t('hero_desc')}
            </p>

            <div className="hero__buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <a href="#contact" className="btn btn--primary">
                <MessageSquare size={16} />
                <span>{t('hero_cta_contact')}</span>
              </a>
              <a href="#services" className="btn btn--outline">
                <span>{t('hero_cta_services')}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SOCIALS */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a 
                href="https://www.instagram.com/dornstech/?hl=pt" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                className="social-btn"
              >
                <i className="bx bxl-instagram" style={{ fontSize: '20px' }}></i>
              </a>
              <a 
                href="mailto:dorns42techservice@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                className="social-btn"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease'
                }}
                className="social-btn"
              >
                <i className="bx bxl-github" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
          </div>

          {/* RIGHT GRAPHICS */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} className="hero-img-wrapper">
            <div className="glass-card" style={{
              width: '100%',
              maxWidth: '380px',
              padding: '2.5rem',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              border: '1px solid var(--border-color)',
              position: 'relative',
              animation: 'float 6s ease-in-out infinite',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
              }}>
                <img src={logo} alt="Dorns Tech Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {t('hero_card_title')}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t('hero_card_desc')}
                </p>
              </div>
              <div style={{ 
                width: '100%', 
                height: '1px', 
                background: 'linear-gradient(to right, transparent, var(--border-color), transparent)' 
              }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--accent-secondary)' }}>+50</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('hero_stat_projects')}</div>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-bold)', color: 'var(--accent-primary)' }}>100%</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('hero_stat_delivery')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 4rem !important;
          }
          .hero-data {
            align-items: center;
          }
          .hero__buttons {
            justify-content: center;
          }
          .hero-img-wrapper {
            margin-top: 1rem;
          }
        }
        .social-btn:hover {
          color: var(--accent-primary) !important;
          border-color: var(--accent-primary) !important;
          background: rgba(99, 102, 241, 0.08);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};
