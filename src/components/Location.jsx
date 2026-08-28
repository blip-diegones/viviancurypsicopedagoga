import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Calendar, Users } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Atendimento & Contato</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Atendimento Acolhedor & Presença Digital
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Agende um horário para seu filho ou participe da nossa comunidade de pais e educadores.
          </p>
        </div>

        {/* Content Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* WhatsApp Oficial */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-rose-light)',
                  color: 'var(--primary-plum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-deep)', marginBottom: '0.25rem' }}>
                  WhatsApp Oficial & Agendamentos
                </h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-deep)', marginBottom: '0.2rem' }}>
                  (35) 98881-8829
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Atendimento individual com agendamento prévio.
                </p>
              </div>
            </div>

            {/* Grupo VIP de WhatsApp */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-sun-light)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Users size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-deep)', marginBottom: '0.25rem' }}>
                  Grupo VIP de Pais & Dicas no WhatsApp
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                  Receba dicas práticas sobre alfabetização, jogos educativos e desenvolvimento.
                </p>
                <a
                  href="https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <span>Entrar no Grupo Gratuito</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-rose-light)',
                  color: 'var(--primary-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Clock size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--primary-deep)', marginBottom: '0.25rem' }}>
                  Horários de Atendimento
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-body)' }}>
                  Segunda a Sexta-feira: 08h às 18h<br />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Horários flexíveis conforme agendamento prévio</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Direct Contact CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-rose-light)',
                  color: 'var(--primary-plum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <MessageCircle size={28} />
              </div>

              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-deep)', marginBottom: '0.75rem' }}>
                Fale com a Vivian Cury
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Mande uma mensagem para tirar dúvidas sobre o processo psicopedagógico, valores, oficinas ou saber como funciona o acompanhamento.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+informar+meus+hor%C3%A1rios+de+prefer%C3%AAncia+e+saber+mais+sobre+o+atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.96rem' }}
                >
                  <MessageCircle size={18} />
                  <span>Conversar no WhatsApp ((35) 98881-8829)</span>
                </a>

                <a
                  href="https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', fontSize: '0.96rem' }}
                >
                  <Users size={18} />
                  <span>Entrar no Grupo no WhatsApp</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
