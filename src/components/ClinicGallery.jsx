import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Gamepad2, Brain, BookOpen } from 'lucide-react';

export default function ClinicGallery() {
  const activities = [
    {
      img: '/puzzle_activity.jpg',
      title: 'Quebra-Cabeças & Foco no Tatame',
      subtitle: 'Atenção Sustentada & Raciocínio Espacial',
      desc: 'Atividades no tatame colorido onde a criança exercita paciência, persistência e percepção visual ao montar quebra-cabeças temáticos.',
      tag: 'Concentração'
    },
    {
      img: '/domino_activity.jpg',
      title: 'Dominó de Animais & Associação',
      subtitle: 'Consciência Fonológica & Vocabulário',
      desc: 'Jogos de associação rápida com animais, números e cores que estimulam a linguagem oral e o reconhecimento das letras com diversão.',
      tag: 'Linguagem'
    },
    {
      img: '/math_activity.jpg',
      title: 'Matemática Lúdica com Tampinhas (D/U)',
      subtitle: 'Cálculo Concreto & Raciocínio Lógico',
      desc: 'Prática de soma, subtração e valor posicional (Dezenas e Unidades) de forma tátil e visual, eliminando o medo da matemática.',
      tag: 'Matemática'
    }
  ];

  return (
    <section id="espaco" className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Prática Lúdica & Recursos</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Como as crianças aprendem nas sessões
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Jogos concretos, tatame confortável e desafios sob medida para despertar o amor pelo aprender.
          </p>
        </div>

        {/* Visual Activities Grid with Photos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '0',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Photo */}
              <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--primary-plum)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Text info */}
              <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.18rem', color: 'var(--primary-deep)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--primary-rose)', display: 'block', marginBottom: '0.4rem' }}>
                  {item.subtitle}
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
            “As crianças adoram vir porque as atividades são em forma de brincadeiras — e o resultado é foco, autonomia e confiança.”
          </span>
        </div>

      </div>
    </section>
  );
}
