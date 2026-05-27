import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Compass } from 'lucide-react';

interface AboutProps {
  t: (key: string) => string;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="about section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <h2 className="section__title">{t('about_title')}</h2>
        <p className="section__subtitle">{t('about_subtitle')}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="about-grid">
          {/* LEFT IMAGE / GRAPHIC COMPONENT */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="about-graphic">
            <div style={{
              width: '100%',
              maxWidth: '440px',
              height: '320px',
              borderRadius: 'var(--radius-2xl)',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(20, 184, 166, 0.1))',
              border: '2px dashed var(--border-color)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
            }} className="graphic-container">
              {/* Floating tech badge */}
              <div className="glass-card" style={{
                position: 'absolute',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                top: '-20px',
                left: '-20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}>
                  <Zap size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{t('about_badge_1_title')}</h4>
                  <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{t('about_badge_1_desc')}</p>
                </div>
              </div>

              {/* Central text */}
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-extra)',
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem'
                }}>
                  Dorns Tech
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '280px' }}>
                  {t('about_graphic_desc')}
                </p>
              </div>

              {/* Floating security badge */}
              <div className="glass-card" style={{
                position: 'absolute',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                bottom: '-20px',
                right: '-20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(20, 184, 166, 0.1)',
                  border: '1px solid var(--accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)'
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{t('about_badge_2_title')}</h4>
                  <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{t('about_badge_2_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-primary)' }}>
              {t('about_heading')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('about_desc_1')}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('about_desc_2')}
            </p>

            {/* Core Values Icons Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }} className="values-grid">
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Compass style={{ color: 'var(--accent-primary)', flexShrink: 0 }} size={24} />
                <div>
                  <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('about_value_1_title')}</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{t('about_value_1_desc')}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <HeartHandshake style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} size={24} />
                <div>
                  <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t('about_value_2_title')}</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{t('about_value_2_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS CARDS ROW */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '4rem'
        }} className="stats-row">
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-extra)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>
              +50
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
              {t('stat_projects_delivered')}
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-extra)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>
              100%
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
              {t('stat_satisfaction')}
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-extra)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>
              &lt; 100ms
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
              {t('stat_api_speed')}
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 'var(--font-extra)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>
              24/7
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
              {t('stat_support')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media screen and (max-width: 576px) {
          .stats-row {
            grid-template-columns: 1fr !important;
          }
          .graphic-container {
            height: 280px !important;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
