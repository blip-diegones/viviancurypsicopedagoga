import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, ShieldCheck, Heart, Gamepad2 } from 'lucide-react';

export default function ClinicGallery() {
  const highlights = [
    {
      title: 'Ambiente Lúdico & Colorido',
      subtitle: 'Idealizado para Crianças',
      desc: 'Tatame, almofadas, mesa de atividades e brinquedos educativos que fazem a criança se sentir em casa e relaxada para aprender.',
      icon: Smile,
      color: 'var(--primary-plum)'
    },
    {
      title: 'Jogos Cognitivos & Pedagógicos',
      subtitle: 'Tapa Certo, Quebra-Cabeças & Dominó',
      desc: 'Atividades em formato de jogos que exercitam memória operacional, atenção seletiva, raciocínio lógico e coordenação motora fina.',
      icon: Gamepad2,
      color: 'var(--accent-gold)'
    },
    {
      title: 'Afeto, Escuta & Parceria Familiar',
      subtitle: 'Acolhimento para Quem Cuida',
      desc: 'Um espaço de escuta atenta e sem cobranças, onde a família recebe orientações claras e suporte para lidar com os desafios escolares.',
      icon: Heart,
      color: 'var(--primary-rose)'
    }
  ];

  return (
    <section id="espaco" className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Nosso Espaço & Recursos</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Um lugar pensado com amor para cada aprendiz
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Onde brincar e aprender caminham juntos, despertando a curiosidade natural das crianças.
          </p>
        </div>

        {/* 3 Editorial Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.2rem 1.8rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-rose-light)',
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.18rem', color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-rose)', display: 'block', marginBottom: '0.6rem' }}>
                    {item.subtitle}
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Motivational Banner */}
        <div
          style={{
            backgroundColor: 'var(--bg-sun-light)',
            border: '1px solid rgba(224, 135, 58, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem 2rem',
            textAlign: 'center',
            color: 'var(--primary-deep)'
          }}
        >
          <span style={{ fontSize: '1.02rem', fontStyle: 'italic', fontWeight: 500 }}>
            “As crianças aprendem melhor quando se sentem amadas, seguras e livres para explorar brincando.”
          </span>
        </div>

      </div>
    </section>
  );
}
