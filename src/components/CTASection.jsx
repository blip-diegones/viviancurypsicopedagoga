import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="section-spacious"
      style={{
        backgroundColor: 'var(--color-primary)',
        color: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container-editorial" style={{ textAlign: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '1.25rem'
            }}
          >
            Primeiro Passo
          </span>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              maxWidth: '720px',
              margin: '0 auto 1.5rem auto',
              fontWeight: 400
            }}
          >
            Vamos conversar sobre o momento que seu filho está vivendo?
          </h2>

          <p
            style={{
              fontSize: '1.12rem',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '580px',
              margin: '0 auto 2.75rem auto',
              lineHeight: 1.7
            }}
          >
            Você não precisa passar por esses desafios sozinho. Mande uma mensagem para conversarmos com calma sobre o que está acontecendo e como podemos ajudar.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+com+voc%C3%AA+sobre+o+momento+do+meu+filho."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial"
              style={{
                backgroundColor: 'var(--color-warm)',
                borderColor: 'var(--color-warm)',
                color: '#FFFFFF',
                padding: '1.1rem 2.5rem',
                fontSize: '1.02rem',
                boxShadow: '0 8px 24px rgba(200, 122, 56, 0.35)'
              }}
            >
              <MessageCircle size={20} />
              <span>Chamar a Vivian no WhatsApp</span>
            </a>

            <span style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.65)' }}>
              WhatsApp Oficial: (35) 98881-8829 • Atendimento humanizado e sem julgamentos
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
