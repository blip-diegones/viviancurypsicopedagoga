import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, BookOpen } from 'lucide-react';

export default function Methodology() {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Mais de 20 Anos de Sala de Aula',
      description: 'Experiência real com alfabetização, processos de aprendizagem e dinâmica escolar para entender a fundo as necessidades da criança.',
      tag: 'Experiência'
    },
    {
      icon: Sparkles,
      title: 'Metodologia Lúdica & Inovadora',
      description: 'Em vez de exercícios cansativos e repetitivos, usamos jogos, enigmas e dinâmicas criativas que despertam o prazer pelo saber.',
      tag: 'Inovação'
    },
    {
      icon: Compass,
      title: 'Integração Família e Escola',
      description: 'Orientamos os pais sobre como ajudar nas tarefas sem desgastes e fazemos a ponte técnica com professores e coordenadores.',
      tag: 'Parceria'
    },
    {
      icon: Heart,
      title: 'Afeto e Respeito ao Ritmo Singular',
      description: 'Cada aprendiz tem seu tempo e seu próprio jeito de pensar. Sem rótulos ou cobranças excessivas, com foco no avanço real.',
      tag: 'Acolhimento'
    }
  ];

  return (
    <section id="diferenciais" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>O Jeito Vivian Cury de Educar</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Por que as famílias recomendam tanto nosso trabalho
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            A união entre sólido conhecimento pedagógico, prática inovadora e carinho genuíno.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.75rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-rose-light)',
                      color: 'var(--primary-plum)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--primary-rose)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.18rem', color: 'var(--primary-deep)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
