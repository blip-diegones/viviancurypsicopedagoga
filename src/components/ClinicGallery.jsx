import React from 'react';
import { motion } from 'framer-motion';

export default function ClinicGallery() {
  const photos = [
    {
      src: '/foto_quebracabeca.png',
      alt: 'Atividade com quebra-cabeças no tatame colorido',
      title: 'Concentração & Percepção Espacial',
      tag: 'Atenção',
      caption: 'No chão e no tatame, a criança aprende a persistir, organizar estratégias e focar a atenção sem sobrecarga sensorial.'
    },
    {
      src: '/foto_domino.png',
      alt: 'Jogo de dominó com cartas e animais educativos',
      title: 'Linguagem & Associação Rápida',
      tag: 'Alfabetização',
      caption: 'Jogos estruturados com animais, cores e sons que estimulam o vocabulário, a memória e a consciência fonológica.'
    },
    {
      src: '/foto_matematica.png',
      alt: 'Atividade concreta de matemática com tampinhas e quadro Dezena/Unidade',
      title: 'Matemática Concreta (D/U)',
      tag: 'Raciocínio',
      caption: 'Construção tátil de cálculos de soma e valor posicional. A criança visualiza o conceito e supera a insegurança com números.'
    },
    {
      src: '/foto_torre_equilibrio.png',
      alt: 'Crianças jogando torre de equilíbrio e foco no tatame',
      title: 'Equilíbrio, Foco & Regulação Emocional',
      tag: 'Autocontrole',
      caption: 'Jogos de montagem e equilíbrio que exercitam o controle motor fino, o planejamento e ensinam a lidar com o erro com leveza.'
    }
  ];

  return (
    <section id="espaco" className="section-spacious" style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-editorial">

        {/* Cabeçalho */}
        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <span className="tag-editorial">Prática & Recursos Reais</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--text-title)',
              marginBottom: '1rem'
            }}
          >
            Um olhar por dentro das sessões
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Cada jogo e material no consultório tem uma intencionalidade pedagógica pensada para o momento e o ritmo do seu filho.
          </p>
        </div>

        {/* Grade Fotográfica com Cortes Editoriais Nobres */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Foto Real */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(43, 18, 34, 0.08)',
                  marginBottom: '1.25rem',
                  position: 'relative'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--color-primary)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                >
                  {photo.tag}
                </span>
              </div>

              {/* Legenda e Conteúdo */}
              <h3
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.2rem',
                  color: 'var(--text-title)',
                  marginBottom: '0.4rem',
                  fontWeight: 600
                }}
              >
                {photo.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
