import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, MessageCircle, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLinktree = location.pathname === '/links' || location.pathname === '/linktree' || location.pathname === '/bio';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre a Vivian', href: '#apresentacao' },
    { name: 'Como Posso Ajudar', href: '#especialidades' },
    { name: 'Prática & Jogos', href: '#espaco' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(250, 247, 244, 0.94)' : 'rgba(250, 247, 244, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid var(--border-line)' : '1px solid transparent',
        transition: 'var(--transition-gentle)',
        padding: isScrolled ? '0.85rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        {!isLinktree && (
          <nav style={{ display: 'none', alignItems: 'center', gap: '2.35rem', marginLeft: 'auto', marginRight: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--text-body)',
                  transition: 'var(--transition-gentle)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Linktree shortcut */}
          <Link
            to="/links"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.84rem',
              fontWeight: 600,
              padding: '0.45rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isLinktree ? 'var(--color-primary)' : 'var(--bg-subtle)',
              color: isLinktree ? '#FFFFFF' : 'var(--color-primary)',
              border: '1px solid var(--border-line)',
              transition: 'var(--transition-gentle)'
            }}
          >
            <span>Bio & Links</span>
            <ExternalLink size={12} />
          </Link>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+sobre+atendimento+psicopedag%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.88rem',
              display: 'none'
            }}
            id="desktop-whatsapp-cta"
          >
            <MessageCircle size={16} />
            <span>Falar no WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          {!isLinktree && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-primary)'
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && !isLinktree && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-canvas)',
            borderBottom: '1px solid var(--border-line)',
            padding: '1.5rem',
            boxShadow: '0 12px 32px rgba(43, 18, 34, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-title)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+conversar+sobre+atendimento+psicopedag%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp ((35) 98881-8829)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          #desktop-whatsapp-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
