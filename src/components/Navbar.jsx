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
    { name: 'Apresentação', href: '#apresentacao' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Nosso Espaço', href: '#espaco' },
    { name: 'Metodologia', href: '#diferenciais' },
    { name: 'Depoimentos (⭐ 5.0)', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(253, 248, 246, 0.95)' : 'rgba(253, 248, 246, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'var(--transition-smooth)',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        {!isLinktree && (
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.94rem',
                  fontWeight: 500,
                  color: 'var(--text-body)',
                  transition: 'var(--transition-smooth)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-deep)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          {/* Linktree shortcut */}
          <Link
            to="/links"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isLinktree ? 'var(--primary-deep)' : 'var(--bg-rose-light)',
              color: isLinktree ? '#FFFFFF' : 'var(--primary-plum)',
              border: '1px solid rgba(123, 45, 106, 0.15)',
              transition: 'var(--transition-smooth)'
            }}
          >
            <span>Bio & Links</span>
            <ExternalLink size={13} />
          </Link>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+os+atendimentos+psicopedag%C3%B3gicos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: '0.9rem',
              display: 'none'
            }}
            id="desktop-whatsapp-cta"
          >
            <MessageCircle size={17} />
            <span>Falar no WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          {!isLinktree && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary-deep)',
                backgroundColor: 'var(--bg-subtle)'
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
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
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
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-title)',
                padding: '0.6rem 0',
                borderBottom: '1px solid var(--border-light)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+informa%C3%A7%C3%B5es+sobre+os+atendimentos+psicopedag%C3%B3gicos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp ((35) 98881-8829)</span>
          </a>
        </div>
      )}

      {/* Styles inline for desktop breakpoint query */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          #desktop-whatsapp-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
