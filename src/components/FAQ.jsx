import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: 'Quando devo procurar uma psicopedagoga para meu filho?',
      a: 'Quando você percebe que a criança demonstra resistência ou sofrimento para fazer lições de casa, tem leitura travada, troca letras com frequência, apresenta muita desatenção ou quando a escola sinaliza que o rendimento está abaixo do esperado.'
    },
    {
      q: 'Por que o atendimento através de jogos e brincadeiras funciona?',
      a: 'O cérebro infantil consolida memórias e desenvolve funções executivas com muito mais facilidade quando há prazer e curiosidade. Jogos de raciocínio trabalham foco, planejamento e tolerância a erros sem a ansiedade de uma folha de prova.'
    },
    {
      q: 'Como é feito o alinhamento com a escola da criança?',
      a: 'Com total parceria e respeito mútuo. Realizamos conversas com os professores e coordenadores para entender a rotina em sala de aula e fornecer orientações práticas que ajudem o aluno no dia a dia escolar.'
    },
    {
      q: 'Qual a duração das sessões e o formato de agendamento?',
      a: 'Os atendimentos são individuais, semanais e com agendamento prévio. O primeiro passo é uma conversa inicial com os pais (anamnese) para compreendermos o histórico da criança com profundidade.'
    },
    {
      q: 'Como funciona o agendamento e valores?',
      a: 'Você pode me chamar diretamente no WhatsApp pelo número (35) 98881-8829. Vou tirar todas as suas dúvidas sobre horários disponíveis e valores com clareza e transparência.'
    }
  ];

  return (
    <section id="faq" className="section-spacious" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-narrow">

        <div style={{ marginBottom: '3.5rem' }}>
          <span className="tag-editorial">Dúvidas Frequentes</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--text-title)',
              marginBottom: '0.75rem'
            }}
          >
            Perguntas comuns de famílias e educadores
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Respostas transparentes sobre o acompanhamento psicopedagógico.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                style={{
                  borderTop: '1px solid var(--border-line)',
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem',
                    textAlign: 'left',
                    color: 'var(--text-title)'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      lineHeight: 1.35
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-line)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--color-accent)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p style={{ paddingTop: '1rem', fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.75, maxWidth: '720px' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div style={{ borderTop: '1px solid var(--border-line)' }} />
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.96rem', color: 'var(--text-muted)' }}>
            Tem alguma pergunta específica sobre o seu filho?
          </span>
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Tenho+uma+d%C3%BAvida+sobre+o+atendimento."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.94rem',
              fontWeight: 600,
              color: 'var(--color-accent)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <MessageCircle size={16} />
            <span>Falar com a Vivian no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
