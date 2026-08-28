import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';

export default function Testimonials() {
  const primaryReview = {
    author: 'Edylaine Zini Carneiro',
    role: 'Mãe de aluno • Avaliação no Google',
    quote:
      'Fomos muito bem recebidos e depois que os atendimentos foram sendo feitos percebi que meu filho ficou mais concentrado. As crianças adoram ir, porque as atividades são em forma de brincadeiras. Recomendo muito! 🙏🏻'
  };

  const secondaryReviews = [
    {
      author: 'Nathalia Elisa',
      role: 'Avaliação no Google',
      text: 'Excelente psicopedagoga! Muito atenciosa, humana e competente. Demonstra domínio técnico, sensibilidade no atendimento e verdadeiro compromisso com o desenvolvimento do aluno.'
    },
    {
      author: 'Laiza Chaib',
      role: 'Mãe de aluno',
      text: 'Está sendo uma experiência ótima! Meu filho ama a tia Vivian. Faz um trabalho verdadeiramente excelente!'
    },
    {
      author: 'Fernanda Montaldi',
      role: 'Educadora & Família',
      text: 'A Vivian é uma excelente profissional com muita experiência no ramo da educação, trabalha com metodologia eficiente, dedicação e muito carinho com os aprendizes.'
    },
    {
      author: 'Tati Melo',
      role: 'Avaliação no Google',
      text: 'Uma psicopedagoga de excelência é essa Tia Vívian! Ela combina conhecimento teórico com prática inovadora e sensibilidade para entender as necessidades únicas de cada criança.'
    },
    {
      author: 'Marcela Freitas',
      role: 'Mãe de aluno',
      text: 'Um lugar completamente idealizado para atender as crianças. Vivian é uma profissional dedicada, carinhosa e verdadeiro símbolo de excelência profissional.'
    },
    {
      author: 'Maria Antonia',
      role: 'Avaliação no Google',
      text: 'Trabalho de profissional dedicada, que une conhecimento, sensibilidade e compromisso para ajudar cada pessoa a descobrir seu potencial. Ética e carinho caminham juntos.'
    }
  ];

  return (
    <section id="depoimentos" className="section-spacious" style={{ backgroundColor: 'var(--bg-canvas)', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-editorial">

        {/* Cabeçalho */}
        <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
          <span className="tag-editorial">Confiança & Resultados Reais</span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              lineHeight: 1.15,
              color: 'var(--text-title)',
              marginBottom: '1rem'
            }}
          >
            A experiência de quem confia no nosso cuidado
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', gap: '2px', color: '#D4883A' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#D4883A" strokeWidth={0} />
              ))}
            </div>
            <span>
              Nota máxima (5.0 de 5.0) em todas as avaliações no Google
            </span>
          </div>
        </div>

        {/* Depoimento Principal de Destaque Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: '#FFFFFF',
            padding: '3rem 2.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-line)',
            marginBottom: '3.5rem',
            boxShadow: '0 8px 30px rgba(43, 18, 34, 0.05)'
          }}
        >
          <div style={{ fontSize: '1.8rem', color: 'var(--color-accent)', lineHeight: 1, marginBottom: '1.25rem', fontFamily: 'var(--font-title)' }}>
            “
          </div>
          <p
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
              color: 'var(--text-title)',
              lineHeight: 1.55,
              fontStyle: 'italic',
              marginBottom: '1.75rem'
            }}
          >
            {primaryReview.quote}
          </p>
          <div style={{ borderTop: '1px solid var(--border-line)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-title)', fontSize: '1rem' }}>
                {primaryReview.author}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {primaryReview.role}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2px', color: '#D4883A' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D4883A" strokeWidth={0} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Outras Avaliações em Formato Editorial Limpo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            borderTop: '1px solid var(--border-line)',
            paddingTop: '3rem'
          }}
        >
          {secondaryReviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  fontStyle: 'normal'
                }}
              >
                “{rev.text}”
              </p>
              <div style={{ borderTop: '1px solid var(--border-line)', paddingTop: '0.85rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-title)', fontSize: '0.92rem' }}>
                  {rev.author}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {rev.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
