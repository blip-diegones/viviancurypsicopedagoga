import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, MessageCircle, ExternalLink } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="section-spacious" style={{ backgroundColor: 'var(--bg-canvas)', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-editorial">

        <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
          <span className="tag-editorial">Atendimento & Comunidade</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--text-title)',
              marginBottom: '1rem'
            }}
          >
            Canais de contato direto
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem' }}>
            Atendimentos presenciais com agendamento e uma comunidade ativa para troca de experiências.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Card WhatsApp Oficial */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              border: '1px solid var(--border-line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Phone size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-title)', marginBottom: '0.5rem' }}>
                Atendimento & Agendamentos
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Fale diretamente comigo para verificar disponibilidade de horários, entender as avaliações ou tirar dúvidas sobre o seu filho.
              </p>
            </div>

            <a
              href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+os+atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              <span>(35) 98881-8829</span>
            </a>
          </div>

          {/* Card Grupo VIP Comunidade */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              border: '1px solid var(--border-line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-warm-tint)',
                  color: 'var(--color-warm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Users size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-title)', marginBottom: '0.5rem' }}>
                Grupo "Educar com afeto"
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Comunidade gratuita no WhatsApp com mães, pais e educadores. Compartilho dicas de jogos, rotinas de estudo e acolhimento.
              </p>
            </div>

            <a
              href="https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-editorial"
              style={{ width: '100%' }}
            >
              <Users size={18} />
              <span>Entrar no Grupo Gratuito</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
