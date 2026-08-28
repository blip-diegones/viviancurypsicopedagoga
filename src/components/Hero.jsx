import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Sparkles, ArrowRight, BookOpen, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194, 71, 107, 0.12) 0%, rgba(92, 26, 74, 0.04) 70%, transparent 100%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 135, 58, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', marginBottom: '1.5rem' }}
          >
            <div
              className="badge-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', gap: '2px', color: '#E5A024' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E5A024" strokeWidth={0} />
                ))}
              </div>
              <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                5.0 no Google · 12 avaliações reais de famílias
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.75rem)',
              lineHeight: 1.14,
              marginBottom: '1.5rem',
              color: 'var(--primary-deep)',
              fontWeight: 700,
              letterSpacing: '-0.03em'
            }}
          >
            Aprender pode ser{' '}
            <span
              style={{
                color: 'var(--primary-rose)',
                position: 'relative',
                display: 'inline-block'
              }}
            >
              uma aventura
            </span>
            {' '}— e seu filho merece{' '}
            <span style={{ color: 'var(--accent-gold)' }}>aprender com alegria.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-body)',
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.65,
              fontWeight: 400
            }}
          >
            <strong>Vivian Cury</strong> é psicopedagoga e professora com mais de{' '}
            <strong>20 anos de experiência</strong>. Atende crianças com{' '}
            <strong>dificuldades de aprendizagem, leitura, concentração e rotina escolar</strong> por meio de atividades lúdicas,
            jogos estruturados e muito carinho.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            <a
              href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+sobre+um+atendimento+psicopedag%C3%B3gico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1.02rem' }}
            >
              <MessageCircle size={20} />
              <span>Falar com a Vivian no WhatsApp</span>
            </a>

            <a
              href="#especialidades"
              className="btn-secondary"
              style={{ padding: '1rem 1.8rem', fontSize: '1.02rem' }}
            >
              <span>Conhecer Especialidades</span>
              <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* 3 Core Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-color)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-rose-light)',
                  color: 'var(--primary-rose)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <BookOpen size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                  +20 anos em Educação
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  Professora e psicopedagoga com domínio técnico e olhar humanizado.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-sun-light)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                  Metodologia Lúdica
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  Atividades em formato de jogos e brincadeiras — as crianças amam ir!
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-rose-light)',
                  color: 'var(--primary-plum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Heart size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                  Acolhimento & Afeto
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  Respeito ao ritmo singular de cada aluno e orientação de perto à família.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
