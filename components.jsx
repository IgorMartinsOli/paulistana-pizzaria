/**
 * ============================================================
 * PAULISTANA PIZZA — React Components
 * UI Kit / Design System
 * ============================================================
 *
 * Stack: React + Tailwind CSS (ou CSS Modules com os tokens do index.html)
 * Para usar: importar cada componente individualmente
 * WhatsApp: +55 64 9930-12526
 */

import React, { useState, useEffect, useRef } from 'react';

// ── Design Tokens (mirror do CSS) ─────────────────────────────────────
export const tokens = {
  colors: {
    brandRed:      '#E8192C',
    brandRedDark:  '#C0121F',
    brandOrange:   '#FF6B2B',
    brandGold:     '#F5A623',
    whatsapp:      '#25D366',
    whatsappDark:  '#128C7E',
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body:    "'Inter', -apple-system, sans-serif",
  },
  whatsappNumber: '5564993012526',
};

// ── Helpers ────────────────────────────────────────────────────────────
function whatsappUrl(message = 'Olá! Quero fazer um pedido 🍕') {
  return `https://wa.me/${tokens.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ──────────────────────────────────────────────────────────────────────
// 1. BADGE
// ──────────────────────────────────────────────────────────────────────
export function Badge({ children, variant = 'red' }) {
  const styles = {
    red:   { bg: 'rgba(232,25,44,0.15)',  color: '#E8192C', border: 'rgba(232,25,44,0.3)' },
    gold:  { bg: 'rgba(245,166,35,0.15)', color: '#F5A623', border: 'rgba(245,166,35,0.3)' },
    green: { bg: 'rgba(34,197,94,0.15)',  color: '#22c55e', border: 'rgba(34,197,94,0.3)' },
  };
  const s = styles[variant] || styles.red;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 10px', borderRadius: 9999,
      fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
    }}>
      {children}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 2. BUTTON
// ──────────────────────────────────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', href, onClick, ...rest }) {
  const baseStyle = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, borderRadius: 9999, fontFamily: tokens.fonts.body,
    fontWeight: 600, letterSpacing: '0.02em', cursor: 'pointer',
    border: 'none', textDecoration: 'none', transition: 'all 0.25s ease',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '6px 16px', fontSize: 12 },
    md: { padding: '12px 24px', fontSize: 14 },
    lg: { padding: '16px 36px', fontSize: 18 },
  };
  const variants = {
    primary:   { background: `linear-gradient(135deg, ${tokens.colors.brandRed}, ${tokens.colors.brandRedDark})`, color: '#fff', boxShadow: '0 4px 16px rgba(232,25,44,0.35)' },
    whatsapp:  { background: `linear-gradient(135deg, ${tokens.colors.whatsapp}, ${tokens.colors.whatsappDark})`, color: '#fff', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' },
    outline:   { background: 'transparent', color: 'inherit', border: '1.5px solid rgba(255,255,255,0.12)' },
    ghost:     { background: 'transparent', color: '#B0B0B0' },
  };

  const style = { ...baseStyle, ...sizes[size], ...variants[variant] };

  if (href) return <a href={href} style={style} {...rest}>{children}</a>;
  return <button style={style} onClick={onClick} {...rest}>{children}</button>;
}

// ──────────────────────────────────────────────────────────────────────
// 3. PIZZA CARD
// ──────────────────────────────────────────────────────────────────────
export function PizzaCard({ pizza }) {
  const [fav, setFav] = useState(false);
  const { name, emoji = '🍕', ingredients, price, badge, badgeVariant = 'red' } = pizza;

  const orderUrl = whatsappUrl(`Olá! Quero pedir uma ${name} 🍕 Qual o tamanho disponível?`);

  return (
    <article style={{
      background: '#222', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, overflow: 'hidden', display: 'flex',
      flexDirection: 'column', transition: 'transform 0.25s, box-shadow 0.25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.6)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
    >
      {/* Image Area */}
      <div style={{
        position: 'relative', aspectRatio: '4/3',
        background: 'linear-gradient(135deg, #2A1408, #4A2010)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '5rem', overflow: 'hidden',
      }}>
        <span role="img" aria-label={name}>{emoji}</span>

        {badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}

        <button
          onClick={() => setFav(f => !f)}
          aria-label={`${fav ? 'Remover dos' : 'Adicionar aos'} favoritos`}
          style={{
            position: 'absolute', top: 12, right: 12,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', cursor: 'pointer', transition: 'transform 0.15s',
          }}
        >
          {fav ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>
        <h3 style={{ fontFamily: tokens.fonts.display, fontSize: 20, fontWeight: 700, color: '#fff' }}>
          {name}
        </h3>
        <p style={{ fontSize: 14, color: '#6B6B6B', lineHeight: 1.5 }}>
          {ingredients}
        </p>

        <div style={{
          marginTop: 'auto', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', paddingTop: 12,
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div>
            <div style={{ fontSize: 11, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              A partir de
            </div>
            <div style={{ fontFamily: tokens.fonts.display, fontSize: 24, fontWeight: 700, color: '#fff' }}>
              R$ {price}
            </div>
          </div>

          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir ${name} pelo WhatsApp`}
            style={{
              width: 44, height: 44, borderRadius: '50%',
              background: `linear-gradient(135deg, ${tokens.colors.brandRed}, ${tokens.colors.brandRedDark})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: 24, fontWeight: 300,
              boxShadow: '0 4px 12px rgba(232,25,44,0.35)',
              textDecoration: 'none', flexShrink: 0,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(232,25,44,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            +
          </a>
        </div>
      </div>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 4. FLOATING WHATSAPP BUTTON
// ──────────────────────────────────────────────────────────────────────
export function FloatingWhatsApp({ message = 'Olá! Quero fazer um pedido 🍕', label = '🍕 Peça agora e receba em casa!' }) {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12,
    }}>
      {showBubble && (
        <div style={{
          background: '#222', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px 16px 4px 16px', padding: '10px 14px',
          fontSize: 14, color: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          maxWidth: 200, textAlign: 'right',
          animation: 'fadeInUp 0.4s ease 1s both',
        }}>
          {label}
          <button
            onClick={() => setShowBubble(false)}
            style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#666', fontSize: 12 }}
            aria-label="Fechar"
          >✕</button>
        </div>
      )}

      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir pelo WhatsApp"
        style={{
          width: 60, height: 60, borderRadius: '50%',
          background: `linear-gradient(135deg, ${tokens.colors.whatsapp}, ${tokens.colors.whatsappDark})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          transition: 'transform 0.25s, box-shadow 0.25s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 5. PROMO CARD
// ──────────────────────────────────────────────────────────────────────
export function PromoCard({ icon, tag, title, description, originalPrice, salePrice, ctaText, ctaMessage, gradient, accentColor }) {
  return (
    <article style={{
      position: 'relative', borderRadius: 28, overflow: 'hidden',
      padding: 32, display: 'flex', flexDirection: 'column', gap: 16,
      background: gradient, border: `1px solid ${accentColor}33`,
      cursor: 'pointer', transition: 'transform 0.25s, box-shadow 0.25s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.6)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
    >
      <span style={{ fontSize: '3rem' }}>{icon}</span>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accentColor }}>
        {tag}
      </span>
      <h3 style={{ fontFamily: tokens.fonts.display, fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{description}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        {originalPrice && (
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>
            R$ {originalPrice}
          </span>
        )}
        <span style={{ fontFamily: tokens.fonts.display, fontSize: 30, fontWeight: 700, color: '#fff' }}>
          {salePrice}
        </span>
      </div>
      <a
        href={whatsappUrl(ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '10px 20px', borderRadius: 9999, fontFamily: tokens.fonts.body,
          fontWeight: 600, fontSize: 14, color: '#fff', textDecoration: 'none',
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
          boxShadow: `0 4px 12px ${accentColor}44`,
        }}
      >
        {ctaText}
      </a>
      <span style={{
        position: 'absolute', right: -20, bottom: -20,
        fontSize: '8rem', opacity: 0.07, pointerEvents: 'none', userSelect: 'none',
      }} aria-hidden="true">🍕</span>
    </article>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 6. CATEGORY TABS
// ──────────────────────────────────────────────────────────────────────
export function CategoryTabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8 }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          role="tab"
          aria-selected={active === tab.id}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 18px', borderRadius: 9999, flexShrink: 0,
            fontFamily: tokens.fonts.body, fontSize: 14, fontWeight: 500,
            cursor: 'pointer', transition: 'all 0.15s',
            ...(active === tab.id ? {
              background: `linear-gradient(135deg, ${tokens.colors.brandRed}, ${tokens.colors.brandRedDark})`,
              border: '1.5px solid transparent', color: '#fff',
              boxShadow: '0 4px 12px rgba(232,25,44,0.3)',
            } : {
              background: '#222', border: '1.5px solid rgba(255,255,255,0.08)', color: '#B0B0B0',
            }),
          }}
        >
          <span>{tab.icon}</span> {tab.label}
        </button>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 7. HEADER
// ──────────────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme]       = useState('dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 72,
      transition: 'background 0.25s, border 0.25s, box-shadow 0.25s',
      ...(scrolled ? {
        background: 'rgba(15,15,15,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      } : {}),
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)',
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: `linear-gradient(135deg, ${tokens.colors.brandRed}, ${tokens.colors.brandOrange})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
            boxShadow: '0 4px 12px rgba(232,25,44,0.4)',
          }}>🍕</div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: tokens.fonts.display, fontSize: 20, fontWeight: 700, color: '#fff' }}>Paulistana</div>
            <div style={{ fontSize: 11, color: '#6B6B6B', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Pizza • Morrinhos-GO</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[['#menu','Cardápio'],['#promos','Promoções'],['#highlights','Mais Pedidas'],['#footer','Contato']].map(([href, label]) => (
            <a key={href} href={href} style={{
              padding: '8px 16px', borderRadius: 9999, fontSize: 14, fontWeight: 500,
              color: '#B0B0B0', textDecoration: 'none', transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#B0B0B0'; e.currentTarget.style.background = ''; }}
            >{label}</a>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={toggleTheme} style={{
            width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)', fontSize: '1.1rem', cursor: 'pointer',
          }}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <Button href={whatsappUrl('Olá! Quero fazer um pedido!')} size="sm">
            📲 Pedir Agora
          </Button>
        </div>

      </div>
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────────
// 8. FULL PAGE DEMO
// ──────────────────────────────────────────────────────────────────────

const PIZZAS = [
  { name: 'Calabresa Especial', emoji: '🍕', ingredients: 'Calabresa fatiada, cebola, azeitona, orégano e mussarela', price: '39,90', badge: '🔥 Mais Pedida', badgeVariant: 'red' },
  { name: 'Margherita',         emoji: '🍅', ingredients: 'Mussarela de búfala, tomate fresco, manjericão e azeite', price: '38,90', badge: '✓ Vegetariana', badgeVariant: 'green' },
  { name: 'Portuguesa',         emoji: '🫒', ingredients: 'Presunto, ovo, cebola, pimentão, azeitona e mussarela', price: '41,90', badge: '⭐ Favorita', badgeVariant: 'gold' },
  { name: 'Frango c/ Catupiry', emoji: '🐔', ingredients: 'Frango desfiado, requeijão catupiry cremoso e mussarela', price: '43,90', badge: '🔥 Top 3', badgeVariant: 'red' },
  { name: 'Quatro Queijos',     emoji: '🧀', ingredients: 'Mussarela, provolone, gorgonzola, parmesão e orégano', price: '45,90', badge: '✓ Vegetariana', badgeVariant: 'green' },
  { name: 'Pepperoni',          emoji: '🌶️', ingredients: 'Pepperoni importado, mussarela e azeitona verde', price: '46,90', badge: '🌶️ Picante', badgeVariant: 'red' },
  { name: 'Napolitana',         emoji: '🍕', ingredients: 'Mussarela, tomate fresco, anchovas e alcaparras', price: '42,90' },
  { name: 'Mista',              emoji: '🍕', ingredients: 'Dois sabores tradicionais numa só pizza, metade a metade', price: '44,90', badge: '💡 Sugestão', badgeVariant: 'gold' },
];

const PROMOS = [
  {
    icon: '🔥', tag: 'Toda Sexta-Feira', title: 'Sexta de Fogo',
    description: '2 pizzas tradicionais grandes com 40% de desconto na segunda!',
    originalPrice: '79,90', salePrice: 'R$ 63,92', ctaText: 'Quero Essa! 🔥',
    ctaMessage: 'Oi! Quero a promo Sexta de Fogo 🔥',
    gradient: 'linear-gradient(135deg, #1a0505, #3d0c0c)', accentColor: '#E8192C',
  },
  {
    icon: '👨‍👩‍👧‍👦', tag: 'Combo Família', title: 'Noite em Família',
    description: '2 pizzas grandes + 1 refrigerante 2L. Escolha os sabores!',
    originalPrice: '109,70', salePrice: 'R$ 89,90', ctaText: 'Quero Essa! 🎉',
    ctaMessage: 'Oi! Quero o Combo Família 👨‍👩‍👧‍👦',
    gradient: 'linear-gradient(135deg, #1a1005, #3d2d0c)', accentColor: '#F5A623',
  },
  {
    icon: '🎁', tag: 'Primeiro Pedido', title: 'Bem-Vindo!',
    description: 'Na sua primeira compra pelo WhatsApp, ganhe uma sobremesa grátis!',
    salePrice: 'Grátis 🎁', ctaText: 'Quero Essa! 🎁',
    ctaMessage: 'Oi! É meu primeiro pedido 🎁',
    gradient: 'linear-gradient(135deg, #050510, #0c0c3d)', accentColor: '#6366f1',
  },
];

const CATEGORY_TABS = [
  { id: 'tradicionais', icon: '🍕', label: 'Tradicionais' },
  { id: 'especiais',    icon: '⭐', label: 'Especiais' },
  { id: 'doces',        icon: '🍫', label: 'Doces' },
  { id: 'brotinho',     icon: '🔸', label: 'Brotinho' },
  { id: 'bebidas',      icon: '🥤', label: 'Bebidas' },
];

export default function PaulistanaApp() {
  const [activeCategory, setActiveCategory] = useState('tradicionais');

  return (
    <>
      <Header />
      <FloatingWhatsApp />

      {/* HERO — simplified */}
      <section style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', background: '#0F0F0F', paddingTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px clamp(1rem, 5vw, 2rem)', textAlign: 'center' }}>
          <Badge variant="red">Morrinhos-GO desde 2010</Badge>
          <h1 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, color: '#fff', margin: '24px 0', lineHeight: 1.05 }}>
            Sabor que <span style={{ background: 'linear-gradient(135deg,#E8192C,#FF6B2B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>aquece a alma</span>
          </h1>
          <p style={{ fontSize: 18, color: '#B0B0B0', maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
            As melhores pizzas de Morrinhos, feitas com ingredientes frescos e muito amor.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href={whatsappUrl('Olá! Quero fazer um pedido 🍕')} variant="whatsapp" size="lg">📲 Pedir no WhatsApp</Button>
            <Button href="#menu" variant="outline" size="lg">Ver Cardápio</Button>
          </div>
        </div>
      </section>

      {/* PROMOS */}
      <section id="promos" style={{ background: '#1A1A1A', padding: '80px clamp(1rem, 5vw, 2rem)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="red">Ofertas Especiais</Badge>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, color: '#fff', margin: '12px 0', lineHeight: 1.15 }}>
              Promoções imperdíveis
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {PROMOS.map(p => <PromoCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ background: '#0F0F0F', padding: '80px clamp(1rem, 5vw, 2rem)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Badge variant="red">Cardápio</Badge>
            <h2 style={{ fontFamily: tokens.fonts.display, fontSize: 'clamp(1.75rem,3vw,2.75rem)', fontWeight: 700, color: '#fff', margin: '12px 0 16px', lineHeight: 1.15 }}>
              Pizzas Tradicionais
            </h2>
          </div>
          <div style={{ marginBottom: 40 }}>
            <CategoryTabs tabs={CATEGORY_TABS} active={activeCategory} onChange={setActiveCategory} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {PIZZAS.map(p => <PizzaCard key={p.name} pizza={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
