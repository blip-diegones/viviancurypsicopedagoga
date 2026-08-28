import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      author: 'Edylaine Zini Carneiro',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Fomos muito bem recebidos e depois que os atendimentos foram sendo feitos percebi que meu filho ficou mais concentrado. As crianças adoram ir, porque as atividades são em forma de brincadeiras. Recomendo! 🙏🏻',
      highlight: 'As crianças adoram ir, porque as atividades são em forma de brincadeiras.'
    },
    {
      author: 'Nathalia Elisa',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Excelente psicopedagoga! Muito atenciosa, humana e competente. Demonstra domínio técnico, sensibilidade no atendimento e verdadeiro compromisso com o desenvolvimento do aluno. Recomendo fortemente.',
      highlight: 'Demonstra domínio técnico, sensibilidade e verdadeiro compromisso com o desenvolvimento.'
    },
    {
      author: 'Laiza Chaib',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Está sendo uma experiência ótima! Meu filho ama a tia Vivian. Faz um trabalho excelente!',
      highlight: 'Meu filho ama a tia Vivian. Faz um trabalho excelente!'
    },
    {
      author: 'Fernanda Montaldi',
      date: 'Avaliação 5 estrelas no Google',
      text: 'A Vivian é uma excelente profissional com muita experiência no ramo da educação, trabalha com metodologia eficiente, dedicação e muito carinho com os aprendizes.',
      highlight: 'Trabalha com metodologia eficiente, dedicação e muito carinho com os aprendizes.'
    },
    {
      author: 'Tati Melo',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Uma psicopedagoga de excelência é essa Tia Vívian! Ela combina conhecimento teórico com prática inovadora e sensibilidade para entender as necessidades únicas de cada criança.',
      highlight: 'Combina conhecimento teórico com prática inovadora e sensibilidade.'
    },
    {
      author: 'Marcela Freitas',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Um lugar completamente idealizado para atender as crianças. Vivian é uma profissional dedicada, carinhosa e verdadeiro símbolo de excelência profissional.',
      highlight: 'Um lugar completamente idealizado para atender as crianças.'
    },
    {
      author: 'Michelle Abrahão Matuck Milani',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Profissional e pessoa maravilhosa! Foi a primeira professora do meu filho e deixou só marcas positivas!',
      highlight: 'Profissional e pessoa maravilhosa! Deixou só marcas positivas.'
    },
    {
      author: 'Maria Antonia',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Trabalho de profissional dedicada, que une conhecimento, sensibilidade e compromisso para ajudar cada pessoa a descobrir seu potencial. Competência, ética e carinho caminham juntos com essa excelente profissional.',
      highlight: 'Ajuda cada pessoa a descobrir seu potencial. Competência, ética e carinho.'
    },
    {
      author: 'Gabi Amaral',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Profissional dedicada e atenta às necessidades individuais, atua com empatia, responsabilidade e competência, contribuindo significativamente para o avanço da aprendizagem e da autoestima do aluno.',
      highlight: 'Contribui significativamente para o avanço da aprendizagem e da autoestima.'
    },
    {
      author: 'Daniela Ceglia',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Profissional super dedicada e querida! Super indico!!!! ❤️',
      highlight: 'Profissional super dedicada e querida!'
    },
    {
      author: 'Raquel Villela (Local Guide)',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Excelente profissional!! Super recomendada para quem busca atendimento psicopedagógico sério e acolhedor.',
      highlight: 'Excelente profissional!!'
    },
    {
      author: 'Luciana Carpinteiro',
      date: 'Avaliação 5 estrelas no Google',
      text: 'Atendimento nota 10, muito atenciosa com as crianças e com a família. Super recomendo a Vivian!',
      highlight: 'Atendimento nota 10, muito atenciosa com as crianças.'
    }
  ];

  return (
    <section id="depoimentos" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ maxWidth: '680px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill badge-gold" style={{ marginBottom: '1rem' }}>
            <span>Avaliações Reais de Famílias no Google</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--primary-deep)', marginBottom: '1rem' }}>
            O carinho e a confiança de quem vivencia os atendimentos
          </h2>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.25rem' }}>
            <div style={{ display: 'flex', gap: '2px', color: '#E5A024' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#E5A024" strokeWidth={0} />
              ))}
            </div>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-deep)' }}>
              5.0 de 5.0 estrelas
            </span>
            <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              • 12 avaliações 100% 5 estrelas no Google
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem'
          }}
        >
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="clean-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2rem 1.8rem',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '2px', color: '#E5A024' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#E5A024" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={20} color="var(--primary-rose)" style={{ opacity: 0.45 }} />
                </div>

                {/* Review body */}
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  “{rev.text}”
                </p>
              </div>

              {/* Author footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--bg-rose-light)',
                    color: 'var(--primary-plum)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}
                >
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--primary-deep)' }}>
                      {rev.author}
                    </h4>
                    <CheckCircle2 size={13} color="var(--primary-rose)" />
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {rev.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Vi+as+avalia%C3%A7%C3%B5es+no+site+e+gostaria+de+marcar+uma+conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
          >
            <Heart size={18} />
            <span>Quero Proporcionar Essa Experiência para Meu Filho</span>
          </a>
        </div>

      </div>
    </section>
  );
}
