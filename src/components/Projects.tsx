import React from 'react';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  t: (key: string) => string;
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const projectsList = [
    {
      title: 'Velkryon VTT',
      descKey: 'project_velkryon_desc',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma'],
      link: 'https://velkryon.com.br',
      accent: 'var(--accent-primary)'
    },
    {
      title: 'Keys4Play Digital Store',
      descKey: 'project_keys_desc',
      tags: ['React', 'NestJS', 'TypeScript', 'Prisma ORM', 'REST API'],
      link: 'https://key4play.com',
      accent: 'var(--accent-secondary)'
    },
    {
      title: 'Blocksmith Rich Text Editor',
      descKey: 'project_blocksmith_desc',
      tags: ['Vite', 'React', 'Tiptap', 'IndexedDB', 'SaaS Client'],
      link: 'https://github.com',
      accent: 'var(--accent-primary)'
    },
    {
      title: 'Attento Saúde do Trabalho',
      descKey: 'project_attento_desc',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO Engine', 'Tracking'],
      link: 'https://attento.med.br',
      accent: 'var(--accent-secondary)'
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
          marginTop: '1rem'
        }} className="projects-grid">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                height: '100%',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Card visual top */}
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`,
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-primary)',
                  border: `1px solid ${project.accent}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: project.accent,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                }}>
                  <Layers size={24} />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  fontWeight: 'var(--font-bold)',
                  letterSpacing: '0.05em'
                }}>
                  Case study #{index + 1}
                </div>
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
                    target="_blank" 
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
                    <span>{t('project_cta_live')}</span>
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
