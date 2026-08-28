import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const areas = [
    {
      num: '01',
      title: 'Avaliação Psicopedagógica Clínica',
      tag: 'Diagnóstico & Mapeamento',
      description:
        'Uma investigação carinhosa e aprofundada para entender onde o processo de aprendizagem da criança travou. Mapeamos as funções cognitivas, atenção, memória e estilo de raciocínio, entregando aos pais e à escola um relatório claro com orientações práticas para o dia a dia.'
    },
    {
      num: '02',
      title: 'Intervenção Lúdica Especializada',
      tag: 'Metodologia com Jogos',
      description:
        'Em vez de folhas de exercícios cansativas, as sessões utilizam jogos de tabuleiro estruturados, desafios de raciocínio lógico e brincadeiras com propósito. A criança exercita a atenção sustentada, memória de trabalho e tolerância à frustração de forma natural e engajada.'
    },
    {
      num: '03',
      title: 'Alfabetização, Fluência de Leitura & Escrita',
      tag: 'Primeiros Anos & Fundamental',
      description:
        'Apoio direcionado para crianças com dificuldades em juntar letras, leitura lenta ou silabada, troca de fonemas e espelhamento na escrita. Desenvolvemos a consciência fonológica com técnicas multissensoriais que devolvem a confiança do aluno.'
    },
    {
      num: '04',
      title: 'Acompanhamento em TDAH, Dislexia & TEA',
      tag: 'Adaptações & Rotina',
      description:
        'Estratégias específicas para lidar com a impulsividade, desatenção e dificuldades de organização de materiais. Ajudamos a criar rotinas visuais e previsíveis de estudo que respeitam o funcionamento neurológico singular de cada criança.'
    },
    {
      num: '05',
      title: 'Orientação de Pais & Mediação Escolar',
      tag: 'Harmonia em Casa e na Escola',
      description:
        'Sessões de alinhamento com a família para transformar a hora da lição de casa em um momento tranquilo, sem brigas ou lágrimas. Realizamos também reuniões com coordenadores e professores para garantir consistência no ambiente escolar.'
    },
    {
      num: '06',
      title: 'Oficinas Temáticas & Projetos em Grupo',
      tag: 'Brincamente & Cientistas Mirins',
      description:
        'Projetos em grupo e oficinas de férias com caça ao tesouro, experimentos científicos mirins e jogos coletivos que estimulam a curiosidade científica, cooperação, comunicação e inteligência socioemocional.'
    }
  ];

  return (
    <section id="especialidades" className="section-spacious" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-editorial">

        {/* Header Editorial */}
        <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
          <span className="tag-editorial">Áreas de Atuação</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--text-title)',
              marginBottom: '1rem'
            }}
          >
            Como posso ajudar você e seu filho
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Atendimentos personalizados que combinam ciência pedagógica, escuta atenta e atividades lúdicas sob medida.
          </p>
        </div>

        {/* Lista Editorial com Linhas Finas (Zero Cards Pesados) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {areas.map((area, index) => (
            <motion.div
              key={area.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              style={{
                borderTop: '1px solid var(--border-line)',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'baseline',
                transition: 'background-color 0.2s ease'
              }}
            >
              {/* Número e Título */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: 'var(--color-accent)'
                    }}
                  >
                    {area.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      color: 'var(--text-muted)'
                    }}
                  >
                    {area.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: 'var(--text-title)',
                    lineHeight: 1.25
                  }}
                >
                  {area.title}
                </h3>
              </div>

              {/* Descrição e Link Direto */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.75 }}>
                  {area.description}
                </p>

                <a
                  href={`https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+saber+mais+sobre+o+atendimento+em+${encodeURIComponent(area.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    width: 'fit-content'
                  }}
                >
                  <span>Tirar dúvidas sobre este atendimento</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-line)' }} />
        </div>

      </div>
    </section>
  );
}
