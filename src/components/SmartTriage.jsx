import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function SmartTriage() {
  const [phase, setPhase] = useState(null);
  const [challenge, setChallenge] = useState(null);

  const phases = [
    { id: 'alfabetizacao', label: 'Alfabetização (5 a 7 anos)', desc: 'Juntar letras, ler com fluência, troca de fonemas' },
    { id: 'fundamental', label: 'Ensino Fundamental (8 a 12 anos)', desc: 'Foco, lição de casa, compreensão de texto, notas' },
    { id: 'neurodiversidade', label: 'TDAH, TEA ou Dislexia', desc: 'Adaptação pedagógica, rotina e autonomia' }
  ];

  const challengesByPhase = {
    alfabetizacao: [
      'Dificuldade de reconhecer sons das letras e formar palavras',
      'Leitura lenta ou silabada e frustração ao tentar ler',
      'Troca ou espelhamento de letras na escrita'
    ],
    fundamental: [
      'Muita distração e dificuldade de manter a concentração',
      'Choro ou resistência diária na hora da lição de casa',
      'Dificuldade com interpretação de enunciados e matemática'
    ],
    neurodiversidade: [
      'Organização de cadernos e rotinas de estudo com TDAH',
      'Apoio lúdico e individualizado para criança com TEA',
      'Relatório psicopedagógico e orientação para a escola'
    ]
  };

  const handleReset = () => {
    setPhase(null);
    setChallenge(null);
  };

  const generateWhatsAppUrl = () => {
    const phaseText = phases.find((p) => p.id === phase)?.label || 'Atendimento';
    const message = `Olá, Vivian! Estive no seu site.\n\n• Fase: ${phaseText}\n• Desafio principal: ${challenge}\n\nGostaria de conversar sobre como podemos ajudar meu filho(a).`;
    return `https://wa.me/5535988818829?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section-spacious" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-narrow">

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="tag-editorial">Orientação para Famílias</span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.2,
              color: 'var(--text-title)',
              marginBottom: '1rem'
            }}
          >
            Qual é o momento do seu filho hoje?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
            Selecione a fase e a principal queixa para receber uma orientação direta e acolhedora no WhatsApp.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-canvas)',
            border: '1px solid var(--border-line)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem'
          }}
        >
          {/* Header da Etapa */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-line)' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--text-title)' }}>
              {!phase ? '1. Escolha a fase escolar' : !challenge ? '2. Selecione o principal desafio' : 'Pronto para conversar com a Vivian'}
            </span>
            {phase && (
              <button
                onClick={handleReset}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                <RotateCcw size={13} />
                <span>Recomeçar</span>
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {/* Passo 1: Fase */}
            {!phase && (
              <motion.div
                key="phase-step"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
              >
                {phases.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPhase(p.id)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-line)',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'var(--transition-gentle)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-line)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-title)', fontSize: '1.02rem' }}>
                        {p.label}
                      </div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {p.desc}
                      </div>
                    </div>
                    <ArrowRight size={17} color="var(--color-accent)" />
                  </button>
                ))}
              </motion.div>
            )}

            {/* Passo 2: Desafio */}
            {phase && !challenge && (
              <motion.div
                key="challenge-step"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
              >
                {(challengesByPhase[phase] || []).map((item) => (
                  <button
                    key={item}
                    onClick={() => setChallenge(item)}
                    style={{
                      width: '100%',
                      padding: '1.2rem 1.4rem',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-line)',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'var(--transition-gentle)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-warm)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-line)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', color: 'var(--text-title)', fontWeight: 500 }}>
                      {item}
                    </span>
                    <ArrowRight size={17} color="var(--color-warm)" />
                  </button>
                ))}
              </motion.div>
            )}

            {/* Passo 3: Conclusão e Envio */}
            {phase && challenge && (
              <motion.div
                key="done-step"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', padding: '1rem 0' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.45rem',
                    color: 'var(--text-title)',
                    marginBottom: '1rem'
                  }}
                >
                  Vamos conversar sobre isso com carinho?
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', maxWidth: '460px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                  Clique abaixo para enviar esses detalhes diretamente no WhatsApp da Vivian. Ela vai te responder com toda a atenção.
                </p>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial"
                  style={{ padding: '1rem 2.25rem' }}
                >
                  <MessageCircle size={19} />
                  <span>Enviar Mensagem no WhatsApp</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
