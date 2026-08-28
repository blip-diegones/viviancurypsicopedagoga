import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Facebook, Users, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-line)', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
      <div className="container-editorial">

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Marca & Propósito */}
          <div>
            <Logo size="default" />
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: '1.5rem' }}>
              Psicopedagogia com afeto, ciência e metodologia lúdica. Mais de 20 anos destravando o potencial de crianças.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/vivianpsicopedagoga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-gentle)'
                }}
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/vivian.cristina.de.oliveira.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-gentle)'
                }}
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grupo no WhatsApp"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-gentle)'
                }}
              >
                <Users size={17} />
              </a>
              <a
                href="https://wa.me/5535988818829"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-gentle)'
                }}
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--text-title)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Navegação
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <li><a href="#apresentacao">Sobre a Vivian</a></li>
              <li><a href="#especialidades">Áreas de Atuação</a></li>
              <li><a href="#espaco">Prática & Recursos</a></li>
              <li><a href="#depoimentos">Depoimentos (⭐ 5.0)</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
              <li><Link to="/links" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Página de Links (Bio) →</Link></li>
            </ul>
          </div>

          {/* Col 3: Atendimentos */}
          <div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--text-title)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Especialidades
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <li>Avaliação Psicopedagógica</li>
              <li>Intervenção Lúdica com Jogos</li>
              <li>Alfabetização, Leitura & Escrita</li>
              <li>Apoio no TDAH, Dislexia e TEA</li>
              <li>Orientação de Pais & Mediação Escolar</li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--text-title)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Contato Direto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              <div><strong>WhatsApp:</strong> (35) 98881-8829</div>
              <div><strong>Instagram:</strong> @vivianpsicopedagoga</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Vivian Cury • Psicopedagoga Clínica<br />Professora há mais de 20 anos
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Vivian Cury Psicopedagoga. Todos os direitos reservados.
          </div>
          <div>
            Educação & Psicopedagogia com Afeto
          </div>
        </div>

      </div>
    </footer>
  );
}
