import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="apresentacao" className="section-spacious" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-line)' }}>
      <div className="container-editorial">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Coluna Visual: Composição com Fotos Reais */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  boxShadow: '0 16px 36px rgba(43, 18, 34, 0.1)'
                }}
              >
                <img
                  src="/foto_quemsoueu.jpg"
                  alt="Vivian Cury — Apresentação e história na educação"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Detalhe de texto sutil */}
              <div
                style={{
                  marginTop: '1.25rem',
                  fontFamily: 'var(--font-title)',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  fontSize: '0.94rem',
                  lineHeight: 1.5
                }}
              >
                “A criança aprende melhor quando se sente segura, compreendida e respeitada em seu próprio tempo.”
              </div>
            </div>
          </motion.div>

          {/* Coluna Texto: Biografia Editorial e Autêntica */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-editorial">Sobre a Vivian</span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                lineHeight: 1.2,
                color: 'var(--text-title)',
                marginBottom: '1.75rem'
              }}
            >
              Uma trajetória construída com amor pela infância e olhar atento a cada detalhe.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8 }}>
              <p>
                Com mais de <strong>20 anos de experiência na educação</strong>, já acompanhei centenas de crianças que chegaram ao consultório inseguras, frustradas com as tarefas escolares ou achando que “não eram inteligentes o suficiente”.
              </p>

              <p>
                A verdade é simples: <em>não existe criança que não goste de aprender</em>. O que existe são caminhos que travaram — seja na consciência fonológica da leitura, no raciocínio abstrato dos números, ou na ansiedade gerada pela cobrança.
              </p>

              <p>
                No meu consultório, o aprendizado ganha vida através de <strong>jogos de raciocínio, quebra-cabeças, desafios manuais e muito afeto</strong>. As crianças descobrem que são capazes — e as famílias encontram alívio e direção.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-line)' }}>
              <a
                href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+com+voc%C3%AA+sobre+o+meu+filho."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial"
              >
                <MessageCircle size={18} />
                <span>Conversar com a Vivian ((35) 98881-8829)</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
