import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Instagram, Facebook, Phone, MessageCircle, Heart, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-canvas)', borderTop: '1px solid var(--border-color)', paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">

        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand & Mission */}
          <div>
            <Logo size="default" className="footer-logo" />
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1.25rem', marginBottom: '1.5rem' }}>
              Psicopedagogia clínica, alfabetização e desenvolvimento infantil com metodologia lúdica, afeto e mais de 20 anos de experiência na educação.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/vivianpsicopedagoga/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Vivian Cury"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--primary-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-deep)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.color = 'var(--primary-deep)';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/vivian.cristina.de.oliveira.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Vivian Cury"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--primary-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-deep)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.color = 'var(--primary-deep)';
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grupo VIP de Pais no WhatsApp"
                title="Grupo VIP no WhatsApp"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
              >
                <Users size={18} />
              </a>
              <a
                href="https://wa.me/5535988818829"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direto da Vivian Cury"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--primary-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-deep)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  e.currentTarget.style.color = 'var(--primary-deep)';
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--primary-deep)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#apresentacao" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Apresentação
                </a>
              </li>
              <li>
                <a href="#especialidades" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#espaco" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Nosso Espaço Lúdico
                </a>
              </li>
              <li>
                <a href="#depoimentos" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Depoimentos (⭐ 5.0)
                </a>
              </li>
              <li>
                <a href="#localizacao" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Atendimento & Contato
                </a>
              </li>
              <li>
                <Link to="/links" style={{ fontSize: '0.9rem', color: 'var(--primary-rose)', fontWeight: 600 }}>
                  Página de Links (Bio) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--primary-deep)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Áreas de Atuação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Avaliação Psicopedagógica</li>
              <li>Intervenção Lúdica Especializada</li>
              <li>Alfabetização, Leitura e Escrita</li>
              <li>Apoio no TDAH, Dislexia e Autismo</li>
              <li>Orientação de Pais & Mediação Escolar</li>
              <li>Oficinas Brincamente & Cientistas Mirins</li>
            </ul>
          </div>

          {/* Col 4: Contact & Responsibility */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--primary-deep)', marginBottom: '1.25rem', fontWeight: 600 }}>
              Contato & Agendamento
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} color="var(--primary-plum)" style={{ flexShrink: 0 }} />
                <span>WhatsApp: (35) 98881-8829</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Instagram size={16} color="var(--primary-plum)" style={{ flexShrink: 0 }} />
                <span>@vivianpsicopedagoga</span>
              </div>
              <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <strong>Responsável:</strong><br />
                  Vivian Cury • Psicopedagoga & Professora (+20 anos de experiência)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Vivian Cury Psicopedagoga. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Feito com</span>
            <Heart size={13} color="var(--primary-rose)" fill="var(--primary-rose)" />
            <span>para o desenvolvimento das crianças.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
