import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, RotateCcw, Check, BookOpen, Brain, Users } from 'lucide-react';

export default function SmartTriage() {
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState(null);
  const [need, setNeed] = useState(null);

  const targets = [
    { id: 'alfabetizacao', label: 'Fase de Alfabetização & Primeiros Anos', icon: BookOpen, desc: 'Dificuldade de juntar letras, leitura lenta, troca de fonemas' },
    { id: 'fundamental', label: 'Ensino Fundamental & Lição de Casa', icon: Brain, desc: 'Falta de concentração, desmotivação, notas baixas, tarefas com brigas' },
    { id: 'neurodiversidade', label: 'TDAH, Autismo ou Dislexia', icon: Users, desc: 'Apoio pedagógico especializado, adaptação de rotinas e materiais' }
  ];

  const needsByTarget = {
    alfabetizacao: [
      { id: 'consciencia', label: 'Dificuldade na consciência fonológica e reconhecimento de letras' },
      { id: 'leitura_fluente', label: 'Leitura silabada e dificuldade de interpretar pequenos textos' },
      { id: 'escrita_caligrafia', label: 'Troca ou espelhamento de letras e frustração ao escrever' }
    ],
    fundamental: [
      { id: 'foco_atencao', label: 'Criança muito distraída, não consegue focar nas aulas ou tarefas' },
      { id: 'bloqueio_estudo', label: 'Diz que não gosta de estudar e chora para fazer lição de casa' },
      { id: 'raciocinio_calculo', label: 'Dificuldade com interpretação de enunciados e raciocínio lógico' }
    ],
    neurodiversidade: [
      { id: 'tdah_rotina', label: 'Manejo de TDAH na rotina escolar e organização dos cadernos' },
      { id: 'tea_pedagogico', label: 'Acompanhamento para criança com TEA com metodologia lúdica' },
      { id: 'laudo_escola', label: 'Avaliação psicopedagógica para encaminhamento e relatório escolar' }
    ]
  };

  const handleReset = () => {
    setStep(1);
    setTarget(null);
    setNeed(null);
  };

  const generateWhatsAppUrl = () => {
    const targetLabel = targets.find((t) => t.id === target)?.label || 'atendimento';
    const needLabel = need ? need.label : 'orientação psicopedagógica';
    const message = `Olá, Vivian! Estive no seu site e gostaria de conversar sobre meu filho(a).\n\n• Momento: ${targetLabel}\n• Principal desafio: ${needLabel}\n\nPoderia me explicar como funcionam as sessões e horários disponíveis?`;
    return `https://wa.me/5535988818829?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container container-narrow">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-pill badge-gold" style={{ marginBottom: '0.85rem' }}>
            <Sparkles size={14} color="var(--accent-gold)" />
            <span>Orientação Rápida para Pais</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', color: 'var(--primary-deep)', marginBottom: '0.75rem' }}>
            Qual é o principal desafio do seu filho hoje?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Selecione as opções abaixo em 20 segundos e receba uma mensagem direta com a orientação ideal.
          </p>
        </div>

        {/* Interactive Box */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative'
          }}
        >
          {/* Progress Steps Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--primary-plum)',
                  color: '#FFFFFF',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {step}
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                {step === 1 && 'Passo 1: Qual a fase escolar do seu filho?'}
                {step === 2 && 'Passo 2: Qual a principal queixa ou sintoma?'}
                {step === 3 && 'Tudo pronto! Fale comigo no WhatsApp'}
              </span>
            </div>

            {step > 1 && (
              <button
                onClick={handleReset}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                <RotateCcw size={13} />
                <span>Recomeçar</span>
              </button>
            )}
          </div>

          {/* Steps Content */}
          <AnimatePresence mode="wait">
            {/* Step 1: Target */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {targets.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTarget(item.id);
                        setStep(2);
                      }}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-canvas)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        textAlign: 'left',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary-rose)';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-canvas)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--bg-rose-light)',
                            color: 'var(--primary-plum)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={22} />
                        </div>
                        <div>
                          <div style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--primary-deep)', marginBottom: '0.15rem' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={18} color="var(--primary-rose)" />
                    </button>
                  );
                })}
              </motion.div>
            )}

            {/* Step 2: Need */}
            {step === 2 && target && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
              >
                {(needsByTarget[target] || []).map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      setNeed(n);
                      setStep(3);
                    }}
                    style={{
                      width: '100%',
                      padding: '1.15rem 1.4rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-canvas)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      textAlign: 'left',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-canvas)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                      {n.label}
                    </span>
                    <ArrowRight size={17} color="var(--accent-gold)" />
                  </button>
                ))}
              </motion.div>
            )}

            {/* Step 3: Result */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center', padding: '1rem 0' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-rose-light)',
                    color: 'var(--primary-plum)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}
                >
                  <Check size={28} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-deep)', marginBottom: '0.5rem' }}>
                  Vamos destravar o aprendizado do seu filho juntos!
                </h3>

                <div
                  style={{
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    maxWidth: '480px',
                    margin: '0 auto 2rem auto',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', marginBottom: '0.35rem' }}>
                    <strong>Fase:</strong> {targets.find((t) => t.id === target)?.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-body)' }}>
                    <strong>Desafio:</strong> {need?.label}
                  </div>
                </div>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '1rem 2.2rem',
                    fontSize: '1.02rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'inline-flex'
                  }}
                >
                  <MessageCircle size={20} />
                  <span>Falar com a Vivian no WhatsApp</span>
                </a>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                  WhatsApp Direto: (35) 98881-8829 • Atendimento humanizado e sem julgamentos.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
