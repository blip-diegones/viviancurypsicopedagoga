import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Globe,
  Instagram,
  Users,
  ChevronRight,
  Share2,
  Sparkles,
  Heart
} from 'lucide-react';

export default function Linktree() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vivian Cury | Psicopedagoga',
          text: 'Sou Psicopedagoga, atuo como professora há mais de 20 anos e ajudo seu filho a desbloquear seu potencial, descobrindo o aprendizado de forma leve e divertida.',
          url: window.location.href
        });
      } catch (err) {
        console.log('Share error or cancelled', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado com sucesso!');
    }
  };

  const links = [
    {
      id: 'grupo-whatsapp',
      title: 'Grupo Whatasapp "Educar com afeto"',
      subtitle: 'WhatsApp Community • Free to join',
      href: 'https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t',
      icon: Users,
      iconBg: '#EAF4EF',
      iconColor: '#245E44',
      badge: 'Gratuito'
    },
    {
      id: 'contato-whatsapp',
      title: 'Entre em contato',
      subtitle: 'WhatsApp Oficial: (35) 98881-8829',
      href: 'https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Vim+pelo+Linktree+e+gostaria+de+informa%C3%A7%C3%B5es+sobre+os+atendimentos.',
      icon: MessageCircle,
      iconBg: '#EBF7EE',
      iconColor: '#25D366'
    },
    {
      id: 'instagram-dicas',
      title: 'Me siga para melhores dicas',
      subtitle: 'Vídeos e práticas no Instagram @vivianpsicopedagoga',
      href: 'https://www.instagram.com/vivianpsicopedagoga/',
      icon: Instagram,
      iconBg: '#FDF0F4',
      iconColor: '#B84768'
    },
    {
      id: 'conecte-comigo',
      title: 'Conecte comigo',
      subtitle: 'Acompanhe novidades, vivências e projetos',
      href: 'https://www.instagram.com/vivianpsicopedagoga/',
      icon: Sparkles,
      iconBg: '#FDF4EC',
      iconColor: '#C87A38'
    },
    {
      id: 'site-oficial',
      title: 'Conhecer Site Oficial Completo',
      subtitle: 'Atendimentos, metodologia e avaliações 5 estrelas',
      to: '/',
      icon: Globe,
      iconBg: '#F4EFEA',
      iconColor: '#3B162F'
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-canvas)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1.25rem 3.5rem 1.25rem',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Top bar with Share */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1.25rem' }}>
          <button
            onClick={handleShare}
            aria-label="Compartilhar"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-line)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(43, 18, 34, 0.04)',
              transition: 'var(--transition-gentle)'
            }}
          >
            <Share2 size={13} />
            <span>Compartilhar</span>
          </button>
        </div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '2.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Avatar com Foto Real da Vivian */}
          <div
            style={{
              width: '112px',
              height: '112px',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              border: '3px solid #FFFFFF',
              boxShadow: '0 12px 28px rgba(43, 18, 34, 0.12)',
              marginBottom: '1.25rem'
            }}
          >
            <img
              src="/vivian_real.jpg"
              alt="Vivian Cury — Psicopedagoga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.75rem',
              color: 'var(--text-title)',
              fontWeight: 600,
              marginBottom: '0.65rem',
              lineHeight: 1.2
            }}
          >
            Vivian Cury
          </h1>

          <p
            style={{
              fontSize: '0.94rem',
              color: 'var(--text-body)',
              maxWidth: '410px',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Sou Psicopedagoga, atuo como professora há mais de 20 anos e ajudo seu filho a desbloquear seu potencial, descobrindo o aprendizado de forma leve e divertida.
          </p>
        </motion.div>

        {/* Action Links */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.95rem', marginBottom: '2.5rem' }}>
          {links.map((item, index) => {
            const Icon = item.icon;

            const buttonContent = (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '1.1rem 1.35rem',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-title)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-line)',
                  boxShadow: '0 4px 14px rgba(43, 18, 34, 0.04)',
                  transition: 'var(--transition-gentle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-title)' }}>
                        {item.title}
                      </span>
                      {item.badge && (
                        <span
                          style={{
                            fontSize: '0.66rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            backgroundColor: 'var(--color-warm)',
                            color: '#FFFFFF',
                            padding: '0.15rem 0.45rem',
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight size={17} color="var(--text-muted)" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
              </div>
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                {item.to ? (
                  <Link to={item.to} style={{ textDecoration: 'none', display: 'block' }}>
                    {buttonContent}
                  </Link>
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                    {buttonContent}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingTop: '1.5rem', width: '100%', borderTop: '1px solid var(--border-line)' }}>
          <p style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text-title)', fontWeight: 600, marginBottom: '0.2rem' }}>
            Vivian Cury
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Psicopedagoga • Professora há mais de 20 anos
          </p>
        </div>

      </div>
    </div>
  );
}
