import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="apresentacao" className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <span>Sobre a Vivian</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: 'var(--primary-deep)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Uma profissional que une conhecimento, sensibilidade e muito carinho.
            </h2>

            <p style={{ marginBottom: '1.2rem', fontSize: '1.05rem', color: 'var(--text-body)' }}>
              <strong>Vivian Cury</strong> é psicopedagoga e professora há mais de 20 anos. Ao longo de duas décadas em sala de aula e consultório, desenvolveu um olhar refinado para identificar onde o aprendizado trava — e como destravar o potencial de cada criança com leveza.
            </p>

            <p style={{ marginBottom: '1.75rem', fontSize: '1rem', color: 'var(--text-muted)' }}>
              Nas sessões, as atividades acontecem em forma de jogos e brincadeiras cuidadosamente planejadas. As crianças adoram ir — e as famílias percebem a transformação: mais concentração, mais autonomia e o resgate da alegria de aprender.
            </p>

            {/* Princípios */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={19} color="var(--primary-rose)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.96rem', fontWeight: 500, color: 'var(--text-title)' }}>
                  Metodologia eficiente, lúdica e estruturada para cada aprendiz.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={19} color="var(--primary-rose)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.96rem', fontWeight: 500, color: 'var(--text-title)' }}>
                  Parceria constante com a família e alinhamento com a equipe escolar.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={19} color="var(--primary-rose)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.96rem', fontWeight: 500, color: 'var(--text-title)' }}>
                  Mais de 20 anos ajudando crianças a superarem desafios e brilharem.
                </span>
              </div>
            </div>

            {/* Quote */}
            <div
              style={{
                borderLeft: '3px solid var(--accent-gold)',
                paddingLeft: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--primary-deep)',
                fontSize: '1.02rem',
                lineHeight: 1.6
              }}
            >
              “Cada criança carrega em si um potencial único — nosso papel é criar a ponte com acolhimento e alegria para que ela o descubra.”
            </div>
          </motion.div>

          {/* Right Column: Professional Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="clean-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Foto + Nome */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.75rem' }}>
                <div
                  style={{
                    width: '82px',
                    height: '82px',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '2px solid var(--border-color)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <img
                    src="/vivian_profile.jpg"
                    alt="Vivian Cury — Psicopedagoga"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                    Vivian Cury
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--primary-rose)', fontWeight: 600 }}>
                    Psicopedagoga & Educadora
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Professora há mais de 20 anos
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Award size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                      +20 anos em Educação
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Vasta experiência prática com crianças em fase de alfabetização, infância e desenvolvimento.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <BookOpen size={20} color="var(--primary-teal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                      Metodologia Inovadora & Lúdica
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Jogos cognitivos, desafios sensoriais e brincadeiras estruturadas com respaldo pedagógico.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Heart size={20} color="var(--primary-rose)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                      Carinho & Sensibilidade
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Compromisso verdadeiro com a autoestima, segurança emocional e evolução do aprendiz.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+sobre+um+atendimento+psicopedag%C3%B3gico."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', fontSize: '0.95rem' }}
              >
                <span>Conversar com a Vivian ((35) 98881-8829)</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
