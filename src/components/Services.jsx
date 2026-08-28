import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Gamepad2, Brain, Users, Sparkles, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'individual', label: 'Atendimentos Individuais' },
    { id: 'school_family', label: 'Escola & Família' },
    { id: 'workshops', label: 'Oficinas & Grupos' }
  ];

  const specialties = [
    {
      id: 'avaliacao',
      category: 'individual',
      icon: Brain,
      iconColor: 'var(--primary-plum)',
      bgColor: 'var(--bg-rose-light)',
      title: 'Avaliação Psicopedagógica',
      subtitle: 'Mapeamento do Estilo de Aprendizagem',
      description:
        'Investigação aprofundada para entender as origens das dificuldades escolares, bloqueios de leitura, raciocínio lógico e retenção, traçando um plano de ação claro e eficiente.',
      points: [
        'Identificação de dificuldades e potencialidades',
        'Relatório pedagógico detalhado e explicativo',
        'Orientações direcionadas para pais e professores'
      ]
    },
    {
      id: 'intervencao-ludica',
      category: 'individual',
      icon: Gamepad2,
      iconColor: 'var(--primary-rose)',
      bgColor: 'var(--bg-rose-light)',
      title: 'Intervenção Lúdica Especializada',
      subtitle: 'Aprender Brincando com Intencionalidade',
      description:
        'Sessões estruturadas com jogos de raciocínio, desafios manuais e brincadeiras pedagógicas que fortalecem foco, memória de trabalho e raciocínio lógico sem gerar estresse.',
      points: [
        'Atividades personalizadas para o ritmo da criança',
        'Estímulo das funções executivas e concentração',
        'Resgate da autoconfiança e do prazer em aprender'
      ]
    },
    {
      id: 'alfabetizacao',
      category: 'individual',
      icon: BookOpen,
      iconColor: 'var(--accent-gold)',
      bgColor: 'var(--bg-sun-light)',
      title: 'Alfabetização, Leitura & Escrita',
      subtitle: 'Destravando a Fluência e Compreensão',
      description:
        'Apoio específico para crianças em fase de alfabetização ou que apresentam dificuldade de leitura, interpretação de texto, caligrafia ou troca de letras na escrita.',
      points: [
        'Métodos multissensoriais e dinâmicos',
        'Desenvolvimento da consciência fonológica',
        'Técnicas prazerosas de incentivo à leitura'
      ]
    },
    {
      id: 'neurodiversidade',
      category: 'individual',
      icon: GraduationCap,
      iconColor: 'var(--primary-teal)',
      bgColor: 'var(--bg-rose-light)',
      title: 'Apoio em TDAH, Dislexia & TEA',
      subtitle: 'Adaptações e Estratégias Pedagógicas',
      description:
        'Acompanhamento psicopedagógico focado em crianças com Transtorno do Espectro Autista (TEA), TDAH, Dislexia, Discalculia e dificuldades de processamento.',
      points: [
        'Rotinas visuais e previsibilidade no estudo',
        'Manejo de impulsividade e desatenção nas tarefas',
        'Adequação de materiais e ritmo'
      ]
    },
    {
      id: 'orientacao-pais',
      category: 'school_family',
      icon: Users,
      iconColor: 'var(--accent-gold)',
      bgColor: 'var(--bg-sun-light)',
      title: 'Orientação de Pais & Mediação Escolar',
      subtitle: 'Harmonia em Casa e Alinhamento com a Escola',
      description:
        'Sessões de alinhamento com a família para organizar a rotina de lição de casa sem conflitos, além de visitas e reuniões com a coordenação e professores do colégio.',
      points: [
        'Estratégias para fazer as lições sem brigas',
        'Ponte afetiva e técnica entre consultório e escola',
        'Suporte contínuo para as dúvidas dos pais'
      ]
    },
    {
      id: 'oficinas-grupos',
      category: 'workshops',
      icon: Sparkles,
      iconColor: 'var(--primary-rose)',
      bgColor: 'var(--bg-rose-light)',
      title: 'Oficinas & Grupos (Brincamente / Cientistas Mirins)',
      subtitle: 'Socialização & Desenvolvimento em Grupo',
      description:
        'Projetos temáticos e oficinas de férias em grupo com caça ao tesouro, experiências científicas mirins, jogos de tabuleiro e estímulos de habilidades sociais.',
      points: [
        'Trabalho em equipe e inteligência socioemocional',
        'Estímulo à curiosidade e criatividade',
        'Momentos inesquecíveis durante o ano e nas férias'
      ]
    }
  ];

  const filteredSpecialties =
    activeCategory === 'all'
      ? specialties
      : specialties.filter((s) => s.category === activeCategory);

  return (
    <section id="especialidades" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '720px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <span>Como Posso Ajudar Seu Filho</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            Atendimentos e Especialidades Psicopedagógicas
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Mais de 20 anos de experiência transformados em metodologias acolhedoras, lúdicas e eficientes para o sucesso escolar do seu filho.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  backgroundColor: isActive ? 'var(--primary-deep)' : 'var(--bg-subtle)',
                  color: isActive ? '#FFFFFF' : 'var(--text-body)',
                  border: isActive ? '1px solid var(--primary-deep)' : '1px solid var(--border-color)',
                  transition: 'var(--transition-smooth)',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <AnimatePresence>
            {filteredSpecialties.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="clean-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Icon & Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: service.bgColor,
                          color: service.iconColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.18rem', color: 'var(--primary-deep)', marginBottom: '0.15rem' }}>
                          {service.title}
                        </h3>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-rose)' }}>
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {service.points.map((pt, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Action Link */}
                  <a
                    href={`https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+saber+mais+sobre+o+atendimento+em+${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-light)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--primary-plum)',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-rose)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-plum)')}
                  >
                    <span>Tirar dúvidas com a Vivian</span>
                    <ArrowUpRight size={16} />
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom helper card */}
        <div
          style={{
            backgroundColor: 'var(--bg-rose-light)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            border: '1px solid rgba(123, 45, 106, 0.12)'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-deep)', marginBottom: '0.25rem' }}>
              Tem dúvidas sobre qual a melhor abordagem para o momento do seu filho?
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)' }}>
              Fale comigo diretamente no WhatsApp. Vou ouvir o que está acontecendo e te orientar com carinho.
            </p>
          </div>
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+uma+orienta%C3%A7%C3%A3o+sobre+o+melhor+atendimento+para+o+meu+filho."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.92rem' }}
          >
            <span>Conversar no WhatsApp ((35) 98881-8829)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
