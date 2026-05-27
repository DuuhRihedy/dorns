import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import hubRpg from '../assets/hub_rpg.png';
import keys4play from '../assets/key4playEdit.png';
import attento from '../assets/attentoEdit.png';
import canelaCafe from '../assets/canelacafe.jpg';
import lepaiper from '../assets/lepaiper.png';
import soonImg from '../assets/soon.jpg';
import etarp from '../assets/etarp.png';

interface ProjectsProps {
  t: (key: string) => string;
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const projectsList = [
    {
      title: 'Velkryon VTT',
      descKey: 'project_velkryon_desc',
      image: hubRpg,
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma'],
      link: 'https://velkryon.com.br',
      accent: 'var(--accent-primary)'
    },

    {
      title: 'E-commerce Keys4Play',
      descKey: 'project_keys_desc',
      image: keys4play,
      tags: ['React', 'NestJS', 'TypeScript', 'Prisma ORM', 'SQL'],
      link: 'https://key4play.com',
      accent: 'var(--accent-primary)'
    },
    {
      title: 'Attento Saúde do Trabalho',
      descKey: 'project_attento_desc',
      image: attento,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO Engine', 'Tracking'],
      link: 'https://attento.med.br',
      accent: 'var(--accent-secondary)'
    },
    {
      title: 'Canela Café',
      descKey: 'project_canela_desc',
      image: canelaCafe,
      tags: ['React 19', 'Vite', 'Framer Motion', 'TypeScript'],
      link: 'https://duuhrihedy.github.io/canela-cafe/',
      accent: 'var(--accent-primary)'
    },
    {
      title: 'Papelaria Lê Paiper',
      descKey: 'project_lepaiper_desc',
      image: lepaiper,
      tags: ['Next.js 16', 'React 19', 'Prisma', 'SQLite', 'Tailwind'],
      link: 'https://le-paiper-admin.vercel.app',
      accent: 'var(--accent-secondary)'
    },
    {
      title: 'Grupo Etarp',
      descKey: 'project_etarp_desc',
      image: etarp,
      tags: ['React', 'Automação', 'Sistemas Customizados', 'Vite'],
      link: 'https://duuhrihedy.github.io/etarp/',
      accent: 'var(--accent-primary)'
    },
    {
      title: 'Dorns Tracking Hub',
      descKey: 'project_soon_desc',
      image: soonImg,
      tags: ['DevOps', 'Redirecionamento Pixel', 'Cloudflare Workers', 'GTM API'],
      link: '#contact',
      accent: 'var(--accent-secondary)',
      isSoon: true
    }
  ];

  return (
    <section id="projects" className="projects section" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <h2 className="section__title">{t('projects_title')}</h2>
        <p className="section__subtitle">{t('projects_subtitle')}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem',
          marginTop: '2rem'
        }} className="projects-grid">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="glass-card project-card" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                height: '100%',
                border: '1px solid var(--border-color)',
                transition: 'all 0.35s ease',
                position: 'relative'
              }}
            >
              {/* Card visual top with original premium images */}
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden',
                borderBottom: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="project-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(3, 7, 18, 0.4), transparent)',
                  pointerEvents: 'none'
                }} />
                {project.isSoon && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent-primary)',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'var(--font-bold)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                    textTransform: 'uppercase'
                  }}>
                    {t('proj_soon') === 'proj_soon' ? 'Em Breve' : t('proj_soon')}
                  </div>
                )}

              </div>

              {/* Card body */}
              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                flexGrow: 1
              }}>
                <div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontWeight: 'var(--font-bold)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {t(project.descKey)}
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      style={{
                        fontSize: '10px',
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 'var(--font-medium)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1rem',
                  marginTop: '0.5rem'
                }}>
                  <a 
                    href={project.link} 
                    target={project.link.startsWith('#') ? '_self' : '_blank'} 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-semi)',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                    className="project-link"
                  >
                    <span>{project.isSoon ? t('hero_cta_contact') : t('project_cta_live')}</span>
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="#contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)'
                    }}
                    className="details-link"
                  >
                    <span>{t('project_cta_quote')}</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media screen and (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary) !important;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.1) !important;
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .project-link:hover {
          color: var(--accent-primary) !important;
        }
        .details-link:hover {
          color: var(--text-secondary) !important;
        }
      `}</style>
    </section>
  );
};
