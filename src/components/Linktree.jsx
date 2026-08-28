import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  MessageCircle,
  Globe,
  Instagram,
  Facebook,
  Sparkles,
  Star,
  BookOpen,
  ChevronRight,
  Share2,
  Users
} from 'lucide-react';

export default function Linktree() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vivian Cury | Psicopedagoga',
          text: 'Psicopedagogia com amor, metodologia lúdica e mais de 20 anos de experiência na educação.',
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

  const primaryActions = [
    {
      id: 'whatsapp-agendamento',
      title: 'Falar no WhatsApp / Agendamento',
      subtitle: 'Converse diretamente com a Vivian no (35) 98881-8829',
      href: 'https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Vim+pelo+link+da+bio+e+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+atendimento+psicopedag%C3%B3gico.',
      icon: MessageCircle,
      highlight: true,
      badge: 'Principal'
    },
    {
      id: 'grupo-whatsapp',
      title: 'Grupo VIP de Pais no WhatsApp',
      subtitle: 'Dicas práticas de desenvolvimento e alfabetização',
      href: 'https://chat.whatsapp.com/HTGgyqi4yfwH9Yjp9ACD5t',
      icon: Users,
      highlight: false,
      badge: 'Gratuito'
    },
    {
      id: 'site-oficial',
      title: 'Visitar Nosso Site Completo',
      subtitle: 'Conheça nossos serviços, depoimentos e metodologia',
      to: '/',
      icon: Globe,
      highlight: false
    },
    {
      id: 'avaliacao-ludica',
      title: 'Avaliação & Intervenção Lúdica',
      subtitle: 'Tire dúvidas sobre dificuldades de leitura e concentração',
      href: 'https://wa.me/5535988818829?text=Ol%C3%A1%2C+Vivian%21+Gostaria+de+tirar+d%C3%BAvidas+sobre+a+Avalia%C3%A7%C3%A3o+Psicopedag%C3%B3gica.',
      icon: BookOpen,
      highlight: false
    },
    {
      id: 'instagram',
      title: 'Instagram @vivianpsicopedagoga',
      subtitle: 'Acompanhe vídeos, dicas e o dia a dia das sessões',
      href: 'https://www.instagram.com/vivianpsicopedagoga/',
      icon: Instagram,
      highlight: false
    },
    {
      id: 'facebook',
      title: 'Facebook Oficial',
      subtitle: 'Novidades, fotos e comunicados',
      href: 'https://www.facebook.com/vivian.cristina.de.oliveira.2025',
      icon: Facebook,
      highlight: false
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
        padding: '3rem 1.25rem 3rem 1.25rem',
        position: 'relative'
      }}
    >
      {/* Background aura */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '500px',
          height: '350px',
          background: 'radial-gradient(circle at top, rgba(194, 71, 107, 0.12) 0%, rgba(92, 26, 74, 0.04) 60%, transparent 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Container Mobile First */}
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--linktree-width)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Top bar with Share */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '1.25rem' }}>
          <button
            onClick={handleShare}
            aria-label="Compartilhar página de links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.85rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              fontWeight: 500,
              boxShadow: 'var(--shadow-sm)',
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
          style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Profile Photo */}
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              border: '3px solid #FFFFFF',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '1rem'
            }}
          >
            <img
              src="/vivian.jpg"
              alt="Vivian Cury — Psicopedagoga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>

          <h1 style={{ fontSize: '1.45rem', color: 'var(--primary-deep)', fontWeight: 700, marginBottom: '0.2rem' }}>
            Vivian Cury
          </h1>

          <p style={{ fontSize: '0.92rem', color: 'var(--primary-rose)', fontWeight: 600, marginBottom: '0.45rem' }}>
            Psicopedagoga • Professora há mais de 20 anos
          </p>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '360px', lineHeight: 1.5, marginBottom: '0.85rem' }}>
            Aprender pode ser uma aventura! Atendimento lúdico e afetuoso para crianças.
          </p>

          {/* Google Review Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'var(--bg-sun-light)',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(224, 135, 58, 0.25)'
            }}
          >
            <div style={{ display: 'flex', gap: '2px', color: '#E5A024' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#E5A024" strokeWidth={0} />
              ))}
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
              5.0 no Google (12 avaliações reais)
            </span>
          </div>
        </motion.div>

        {/* Action Buttons List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
          {primaryActions.map((action, index) => {
            const Icon = action.icon;
            const isHighlight = action.highlight;

            const buttonContent = (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: isHighlight ? '1.15rem 1.4rem' : '1rem 1.25rem',
                  backgroundColor: isHighlight ? 'var(--primary-deep)' : '#FFFFFF',
                  color: isHighlight ? '#FFFFFF' : 'var(--text-title)',
                  border: isHighlight ? 'none' : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: isHighlight ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'var(--transition-smooth)',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isHighlight ? 'rgba(255, 255, 255, 0.15)' : 'var(--bg-rose-light)',
                      color: isHighlight ? '#FFFFFF' : 'var(--primary-plum)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span
                        style={{
                          fontSize: isHighlight ? '1.02rem' : '0.96rem',
                          fontWeight: 600,
                          color: isHighlight ? '#FFFFFF' : 'var(--primary-deep)'
                        }}
                      >
                        {action.title}
                      </span>
                      {action.badge && (
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            backgroundColor: 'var(--accent-gold)',
                            color: '#FFFFFF',
                            padding: '0.15rem 0.45rem',
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          {action.badge}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: isHighlight ? 'rgba(255, 255, 255, 0.82)' : 'var(--text-muted)',
                        display: 'block',
                        marginTop: '0.15rem'
                      }}
                    >
                      {action.subtitle}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  color={isHighlight ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-muted)'}
                  style={{ flexShrink: 0, marginLeft: '0.5rem' }}
                />
              </div>
            );

            return (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {action.to ? (
                  <Link to={action.to} style={{ textDecoration: 'none', display: 'block' }}>
                    {buttonContent}
                  </Link>
                ) : (
                  <a href={action.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                    {buttonContent}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact & Footer */}
        <div style={{ textAlign: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', width: '100%' }}>
          <p style={{ fontSize: '0.86rem', color: 'var(--primary-deep)', fontWeight: 600, marginBottom: '0.2rem' }}>
            WhatsApp: (35) 98881-8829
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--primary-rose)', fontWeight: 500 }}>
            @vivianpsicopedagoga
          </p>
          <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            © {new Date().getFullYear()} Vivian Cury Psicopedagoga
          </p>
        </div>

      </div>
    </div>
  );
}
