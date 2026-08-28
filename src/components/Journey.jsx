import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Search, FileText, Sparkles } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      num: '01',
      title: 'Acolhimento & Escuta da Família',
      subtitle: 'Compreensão da rotina e desafios',
      description:
        'Uma conversa com os pais (anamnese) para ouvir com calma cada queixa escolar, dificuldades em casa e a história de desenvolvimento da criança.',
      icon: HeartHandshake,
      color: 'var(--primary-plum)',
      bgColor: 'var(--bg-rose-light)'
    },
    {
      num: '02',
      title: 'Avaliação Psicopedagógica Lúdica',
      subtitle: 'Jogos, testes e dinâmicas criativas',
      description:
        'Sessões dinâmicas onde a criança brinca e resolve desafios que mapeiam leitura, escrita, raciocínio, foco e estilo de aprendizagem.',
      icon: Search,
      color: 'var(--accent-gold)',
      bgColor: 'var(--bg-sun-light)'
    },
    {
      num: '03',
      title: 'Devolutiva Clara com os Pais',
      subtitle: 'Explicação detalhada e sem termos difíceis',
      description:
        'Reunião para apresentar o relatório psicopedagógico, esclarecendo onde estão os nós do aprendizado e o plano de ação personalizado.',
      icon: FileText,
      color: 'var(--primary-teal)',
      bgColor: 'var(--bg-rose-light)'
    },
    {
      num: '04',
      title: 'Intervenção & Parceria com a Escola',
      subtitle: 'Evolução constante e alegria de aprender',
      description:
        'Início dos atendimentos individuais ou oficinas lúdicas, com suporte contínuo para as lições de casa e alinhamento com a escola.',
      icon: Sparkles,
      color: 'var(--primary-rose)',
      bgColor: 'var(--bg-rose-light)'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Como Acontece o Processo</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            A jornada do seu filho rumo à autonomia
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Um caminho estruturado, transparente e cheio de afeto do primeiro contato aos grandes avanços.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            position: 'relative'
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem 1.6rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Step number badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: step.bgColor,
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-title)',
                      color: 'var(--border-color)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.12rem', color: 'var(--primary-deep)', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary-rose)', display: 'block', marginBottom: '0.75rem' }}>
                    {step.subtitle}
                  </span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
