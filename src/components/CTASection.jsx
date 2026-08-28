import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--primary-deep)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative ambient background accents */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194, 71, 107, 0.2) 0%, rgba(123, 45, 106, 0.12) 70%, transparent 100%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 135, 58, 0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container container-narrow" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', marginBottom: '1.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              borderRadius: 'var(--radius-full)',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <Sparkles size={14} color="var(--accent-gold)" />
            <span>Dê esse presente para o futuro do seu filho</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            color: '#FFFFFF',
            marginBottom: '1.25rem',
            lineHeight: 1.2
          }}
        >
          Destrave o potencial e a alegria de aprender do seu filho.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.88)',
            maxWidth: '640px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.65
          }}
        >
          Mande uma mensagem agora no WhatsApp. Vamos conversar com carinho sobre o momento escolar do seu filho e encontrar o melhor caminho.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+agendar+um+atendimento+psicopedag%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              backgroundColor: 'var(--accent-gold)',
              color: '#FFFFFF',
              padding: '1.1rem 2.5rem',
              fontSize: '1.08rem',
              boxShadow: '0 8px 24px rgba(224, 135, 58, 0.4)'
            }}
          >
            <MessageCircle size={22} />
            <span>Falar com a Vivian no WhatsApp</span>
          </a>

          <span style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            WhatsApp Oficial: (35) 98881-8829 • Atendimento acolhedor e atencioso
          </span>
        </motion.div>

      </div>
    </section>
  );
}
