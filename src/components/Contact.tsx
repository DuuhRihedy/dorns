import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  t: (key: string) => string;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormState({ name: '', email: '', message: '' });

      // Automatically hide toast after 5s
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section" style={{
      overflow: 'hidden'
    }}>
      <div className="container">
        <h2 className="section__title">{t('contact_title')}</h2>
        <p className="section__subtitle">{t('contact_subtitle')}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '4rem',
          alignItems: 'start',
          marginTop: '1rem'
        }} className="contact-grid">
          {/* LEFT: INFO CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {t('contact_desc')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* EMAIL */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</h4>
                  <a href="mailto:dorns42techservice@gmail.com" style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', fontWeight: 'var(--font-medium)' }} className="contact-link">
                    dorns42techservice@gmail.com
                  </a>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                  flexShrink: 0
                }}>
                  <i className="bx bxl-instagram" style={{ fontSize: '20px' }}></i>
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Instagram</h4>
                  <a href="https://www.instagram.com/dornstech/?hl=pt" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', fontWeight: 'var(--font-medium)' }} className="contact-link">
                    @dornstech
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{t('contact_location_title')}</h4>
                  <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', fontWeight: 'var(--font-medium)' }}>
                    Araraquara, SP — Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PREMIUM GLASSMOPRHISM FORM */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: 'var(--radius-2xl)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
                  {t('form_name_label')}
                </label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={t('form_name_placeholder')}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                    transition: 'all 0.2s ease'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
                  {t('form_email_label')}
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder={t('form_email_placeholder')}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                    transition: 'all 0.2s ease'
                  }}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 'var(--font-medium)' }}>
                  {t('form_message_label')}
                </label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={t('form_message_placeholder')}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-tertiary)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                    resize: 'vertical',
                    transition: 'all 0.2s ease'
                  }}
                  className="form-input"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn--primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  marginTop: '0.5rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <div className="btn-spinner" style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }}></div>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t('form_submit_btn')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* TOAST SUCCESS ALERT */}
      {showToast && (
        <div className="toast">
          <CheckCircle size={20} style={{ color: 'var(--success)' }} />
          <div>
            <strong style={{ display: 'block', marginBottom: '0.1rem' }}>{t('toast_success_title')}</strong>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{t('toast_success_desc')}</span>
          </div>
        </div>
      )}

      <style>{`
        @media screen and (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        .contact-link:hover {
          color: var(--accent-primary) !important;
          text-decoration: underline;
        }
        .form-input:focus {
          border-color: var(--accent-primary) !important;
          background: var(--bg-secondary) !important;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
