import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: '10.5rem',
        paddingBottom: '7rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Coluna Texto / Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-editorial">
              Psicopedagogia & Educação com Afeto
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                lineHeight: 1.12,
                color: 'var(--text-title)',
                marginBottom: '1.75rem',
                fontStyle: 'normal'
              }}
            >
              Aprender não precisa ser uma batalha.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400 }}>
                Pode ser um caminho leve e cheio de descobertas.
              </em>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '540px'
              }}
            >
              Sou a <strong>Vivian Cury</strong>, professora e psicopedagoga com mais de duas décadas dedicadas à infância. Ajudo crianças a superarem bloqueios de leitura, foco e raciocínio através de brincadeiras com propósito, acolhendo a família em cada passo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
              <a
                href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+sobre+o+momento+escolar+do+meu+filho."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
              >
                <MessageCircle size={19} />
                <span>Conversar com a Vivian no WhatsApp</span>
              </a>

              {/* Avaliação em linha sutil */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#D4883A' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4883A" strokeWidth={0} />
                  ))}
                </div>
                <span>
                  Recomendada com <strong>5.0 estrelas no Google</strong> por famílias e educadores
                </span>
              </div>
            </div>
          </motion.div>

          {/* Coluna Fotografia Real da Vivian */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '460px',
                margin: '0 auto'
              }}
            >
              {/* Foto Real */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 48px -12px rgba(43, 18, 34, 0.18)',
                  backgroundColor: 'var(--bg-subtle)'
                }}
              >
                <img
                  src="/vivian_real.jpg"
                  alt="Vivian Cury — Psicopedagoga e Professora com mais de 20 anos de experiência"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>

              {/* Legenda Editorial Flutuante Sutil */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.25rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1rem 1.4rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 10px 30px rgba(43, 18, 34, 0.08)',
                  border: '1px solid var(--border-line)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--text-title)', fontWeight: 600 }}>
                  Vivian Cury
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                  Psicopedagoga Clínica • Mais de 20 anos na Educação
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
