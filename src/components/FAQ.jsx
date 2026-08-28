import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Qual é o papel da psicopedagoga no desenvolvimento da criança?',
      answer:
        'A psicopedagogia investiga e trata os obstáculos que impedem a criança de aprender com facilidade (sejam cognitivos, emocionais ou metodológicos). Ajudamos a destravar a leitura, escrita, cálculo, raciocínio e atenção, resgatando a autoconfiança da criança na escola e em casa.'
    },
    {
      question: 'Como funciona a primeira conversa ou avaliação inicial?',
      answer:
        'Iniciamos com uma escuta acolhedora dos pais (anamnese) para entender o histórico escolar, rotina e desafios. Em seguida, realizamos sessões lúdicas com a criança para mapear seu estilo de aprendizagem e traçar o plano individualizado de intervenção.'
    },
    {
      question: 'Por que os atendimentos são feitos em formato de brincadeiras e jogos?',
      answer:
        'O cérebro da criança aprende e assimila com muito mais velocidade e engajamento quando está em estado de prazer e curiosidade. Jogos de tabuleiro, quebra-cabeças e desafios manuais exercitam concentração, paciência e raciocínio de forma natural e sem ansiedade.'
    },
    {
      question: 'A Vivian faz contato com a escola do meu filho?',
      answer:
        'Sim! A parceria entre consultório, família e escola é fundamental. Alinhamos estratégias com professores e coordenadores para que os avanços obtidos nas sessões se reflitam diretamente no rendimento e comportamento em sala de aula.'
    },
    {
      question: 'Qual a faixa etária atendida?',
      answer:
        'Atendemos principalmente crianças na fase de Educação Infantil (preparação para alfabetização), Ensino Fundamental I e II, além de oficinas temáticas em grupo.'
    },
    {
      question: 'Como faço para agendar ou tirar dúvidas sobre valores e horários?',
      answer:
        'Basta clicar nos botões de WhatsApp do site ou mandar uma mensagem para (35) 98881-8829. A Vivian responde com carinho e apresenta a disponibilidade de horários.'
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container container-narrow">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Perguntas Frequentes
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Respostas diretas para as principais dúvidas de pais e educadores.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '3rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-sm)',
                  border: isOpen ? '1px solid var(--primary-rose)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    color: 'var(--primary-deep)',
                    fontWeight: 600,
                    fontSize: '1.02rem'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color={isOpen ? 'var(--primary-rose)' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    color="var(--text-muted)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div
                        style={{
                          padding: '0 1.5rem 1.25rem 3rem',
                          color: 'var(--text-body)',
                          fontSize: '0.96rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid var(--border-light)'
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Ainda tem alguma dúvida específica sobre a situação do seu filho?
          </p>
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Tenho+uma+d%C3%BAvida+sobre+o+atendimento+psicopedag%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.94rem' }}
          >
            <MessageCircle size={18} />
            <span>Falar com a Vivian no WhatsApp ((35) 98881-8829)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
