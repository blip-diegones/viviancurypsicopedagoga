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
  ExternalLink
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
      alert('Link copiado para a área de transferência!');
    }
  };

  const links = [
    {
      id: 'grupo-whatsapp',
      title: 'Grupo Whatasapp "Educar com afeto"',
      subtitle: 'WhatsApp Community • Free to join',
      href: 'https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t',
      icon: Users,
      iconBg: '#E8F5E9',
      iconColor: '#2E7D32',
      highlight: true
    },
    {
      id: 'contato-whatsapp',
      title: 'Entre em contato',
      subtitle: 'Fale comigo no WhatsApp: (35) 98881-8829',
      href: 'https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Vim+pelo+Linktree+e+gostaria+de+informa%C3%A7%C3%B5es+sobre+atendimentos+psicopedag%C3%B3gicos.',
      icon: MessageCircle,
      iconBg: '#E8F5E9',
      iconColor: '#25D366',
      highlight: false
    },
    {
      id: 'instagram-dicas',
      title: 'Me siga para melhores dicas',
      subtitle: 'Vídeos e orientações no Instagram @vivianpsicopedagoga',
      href: 'https://www.instagram.com/vivianpsicopedagoga/',
      icon: Instagram,
      iconBg: '#FCE4EC',
      iconColor: '#D81B60',
      highlight: false,
      avatarImg: '/vivian_profile.jpg'
    },
    {
      id: 'conecte-comigo',
      title: 'Conecte comigo',
      subtitle: 'Acompanhe novidades, projetos e oficinas',
      href: 'https://www.instagram.com/vivianpsicopedagoga/',
      icon: Sparkles,
      iconBg: '#FFF3E0',
      iconColor: '#FB8C00',
      highlight: false,
      avatarImg: '/vivian_profile.jpg'
    },
    {
      id: 'site-oficial',
      title: 'Conhecer Site Oficial Completo',
      subtitle: 'Serviços, metodologia e 12 avaliações 5 estrelas',
      to: '/',
      icon: Globe,
      iconBg: '#EDE7F6',
      iconColor: '#5C1A4A',
      highlight: false
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #4A153B 0%, #2D0A24 100%)',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1.25rem 3rem 1.25rem',
        position: 'relative'
      }}
    >
      {/* Decorative grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }}
      />

      {/* Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Top bar with Share Button */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <button
            onClick={handleShare}
            aria-label="Compartilhar página de links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.9rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: 500,
              backdropFilter: 'blur(8px)',
              transition: 'var(--transition-smooth)'
            }}
          >
            <Share2 size={14} />
            <span>Compartilhar</span>
          </button>
        </div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '2.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Avatar Photo */}
          <div
            style={{
              width: '104px',
              height: '104px',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              border: '3px solid rgba(255, 255, 255, 0.85)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              marginBottom: '1.1rem'
            }}
          >
            <img
              src="/vivian_profile.jpg"
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
              fontSize: '1.6rem',
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '0.65rem'
            }}
          >
            Vivian Cury
          </h1>

          <p
            style={{
              fontSize: '0.94rem',
              color: 'rgba(255, 255, 255, 0.88)',
              maxWidth: '420px',
              lineHeight: 1.55,
              fontWeight: 400
            }}
          >
            Sou Psicopedagoga, atuo como professora há mais de 20 anos e ajudo seu filho a desbloquear seu potencial, descobrindo o aprendizado de forma leve e divertida.
          </p>
        </motion.div>

        {/* Action Links List */}
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
                  padding: '1.05rem 1.25rem',
                  backgroundColor: '#FFF4E8',
                  color: '#3A1030',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                  transition: 'var(--transition-smooth)',
                  border: '1px solid rgba(255, 255, 255, 0.6)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem' }}>
                  {item.avatarImg ? (
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      <img
                        src={item.avatarImg}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: item.iconBg,
                        color: item.iconColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={22} />
                    </div>
                  )}

                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '1.02rem', fontWeight: 700, color: '#3A1030', lineHeight: 1.25 }}>
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <span style={{ fontSize: '0.78rem', color: '#7A4A6A', display: 'block', marginTop: '0.15rem' }}>
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight size={18} color="#7A4A6A" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
              </div>
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
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
        <div style={{ textAlign: 'center', paddingTop: '1.5rem', width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, marginBottom: '0.2rem' }}>
            Vivian Cury • Psicopedagoga
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)' }}>
            WhatsApp: (35) 98881-8829 • Instagram: @vivianpsicopedagoga
          </p>
        </div>

      </div>
    </div>
  );
}
