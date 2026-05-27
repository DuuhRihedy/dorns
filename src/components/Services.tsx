import React from 'react';
import { Laptop, Database, ShoppingCart, Activity, Cloud, Bot } from 'lucide-react';

interface ServicesProps {
  t: (key: string) => string;
}

export const Services: React.FC<ServicesProps> = ({ t }) => {
  const servicesList = [
    {
      icon: <Laptop size={24} />,
      titleKey: 'service_web_title',
      descKey: 'service_web_desc',
      techs: ['React', 'Next.js', 'Vite', 'TypeScript']
    },
    {
      icon: <Database size={24} />,
      titleKey: 'service_api_title',
      descKey: 'service_api_desc',
      techs: ['Node.js', 'NestJS', 'PostgreSQL', 'Prisma']
    },
    {
      icon: <ShoppingCart size={24} />,
      titleKey: 'service_ecommerce_title',
      descKey: 'service_ecommerce_desc',
      techs: ['Shopify', 'WordPress', 'Liquid', 'WooCommerce']
    },
    {
      icon: <Activity size={24} />,
      titleKey: 'service_seo_title',
      descKey: 'service_seo_desc',
      techs: ['Meta Pixel', 'GTM', 'SEO', 'Analytics']
    },
    {
      icon: <Cloud size={24} />,
      titleKey: 'service_cloud_title',
      descKey: 'service_cloud_desc',
      techs: ['Cloudflare', 'GitHub Actions', 'AWS', 'Docker']
    },
    {
      icon: <Bot size={24} />,
      titleKey: 'service_ai_title',
      descKey: 'service_ai_desc',
      techs: ['Claude API', 'OpenAI', 'Automações', 'Agents']
    }
  ];

  return (
    <section id="services" className="services section" style={{
      overflow: 'hidden'
    }}>
      <div className="container">
        <h2 className="section__title">{t('services_title')}</h2>
        <p className="section__subtitle">{t('services_subtitle')}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '1rem'
        }} className="services-grid">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                height: '100%',
                position: 'relative'
              }}
            >
              {/* Icon wrapper */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: index % 2 === 0 ? 'var(--accent-gradient)' : 'rgba(20, 184, 166, 0.1)',
                border: index % 2 === 0 ? 'none' : '1px solid var(--accent-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: index % 2 === 0 ? '#fff' : 'var(--accent-secondary)'
              }}>
                {service.icon}
              </div>

              {/* Text info */}
              <div>
                <h3 style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  fontWeight: 'var(--font-bold)'
                }}>
                  {t(service.titleKey)}
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {t(service.descKey)}
                </p>
              </div>

              {/* Spacer to push tags down */}
              <div style={{ flexGrow: 1 }}></div>

              {/* Technologies Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {service.techs.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    style={{
                      fontSize: '10px',
                      color: 'var(--accent-primary)',
                      background: 'rgba(99, 102, 241, 0.08)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 'var(--font-semi)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media screen and (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
