import React from 'react';
import { motion } from 'framer-motion';

export default function ClinicGallery() {
  const photos = [
    {
      src: '/foto_quebracabeca.png',
      alt: 'Atividade com quebra-cabeças no tatame colorido',
      title: 'Concentração & Percepção Espacial',
      caption: 'No chão e no tatame, a criança aprende a persistir, organizar estratégias e focar a atenção sem sobrecarga.'
    },
    {
      src: '/foto_domino.png',
      alt: 'Jogo de dominó com cartas e animais educativos',
      title: 'Linguagem, Associação & Raciocínio',
      caption: 'Jogos estruturados com animais e números que transformam a alfabetização e a memória operacional em pura diversão.'
    },
    {
      src: '/foto_matematica.png',
      alt: 'Atividade concreta de matemática com tampinhas e quadro Dezena/Unidade',
      title: 'Matemática Concreta (D/U)',
      caption: 'Construção tátil de cálculos de soma e valor posicional. A criança visualiza o conceito e supera o medo dos números.'
    },
    {
      src: '/foto_tapacerto.png',
      alt: 'Vivian Cury com o jogo Tapa Certo para agilidade mental e foco',
      title: 'Agilidade Mental & Regulação',
      caption: 'Jogos rápidos como Tapa Certo exercitam a velocidade de processamento, controle inibitório e tolerância à frustração.'
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
            Cada jogo e material no consultório tem uma intencionalidade pedagógica pensada para o ritmo do seu filho.
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
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
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
