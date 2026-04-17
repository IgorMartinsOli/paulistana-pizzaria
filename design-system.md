# Paulistana Pizza — Design System

## UI Kit Completo

---

## 1. IDENTIDADE VISUAL

### Conceito
- **Pizzaria moderna premium** com toque artesanal
- Visual **dark-first** com versão light opcional
- Referências: iFood (UX), Domino's (conversão), pizzaria gourmet italiana (premium)

### Logotipo
- Símbolo: emoji 🍕 em container gradiente vermelho→laranja, border-radius 12px
- Tipografia da marca: Playfair Display Bold
- Tagline: "Pizza • Morrinhos-GO" — Inter 11px, uppercase, tracked

---

## 2. PALETA DE CORES

### Primárias
| Token          | Hex       | Uso                              |
|----------------|-----------|----------------------------------|
| brand-red      | `#E8192C` | CTA, botões, destaque            |
| brand-red-dark | `#C0121F` | Hover/pressed states             |
| brand-orange   | `#FF6B2B` | Gradientes, acento secundário    |
| brand-gold     | `#F5A623` | Badges, rankings, promoções gold |
| whatsapp       | `#25D366` | Botão WhatsApp                   |

### Dark Theme (default)
| Token         | Hex       | Uso                         |
|---------------|-----------|-----------------------------|
| bg-primary    | `#0F0F0F` | Fundo principal             |
| bg-secondary  | `#1A1A1A` | Seções alternadas           |
| bg-card       | `#222222` | Cards, componentes          |
| bg-card-hover | `#2A2A2A` | Estado hover dos cards      |
| bg-surface    | `#2E2E2E` | Inputs, botões ghost        |
| text-primary  | `#FFFFFF` | Títulos, texto principal    |
| text-secondary| `#B0B0B0` | Subtítulos, descritivos     |
| text-muted    | `#6B6B6B` | Placeholders, labels        |
| border-color  | `rgba(255,255,255,0.08)` | Bordas sutis |

### Light Theme
| Token         | Hex       |
|---------------|-----------|
| bg-primary    | `#FAFAFA` |
| bg-secondary  | `#F0F0F0` |
| bg-card       | `#FFFFFF` |
| text-primary  | `#111111` |
| text-secondary| `#555555` |
| text-muted    | `#999999` |

---

## 3. TIPOGRAFIA

### Font Stack
```
Display: 'Playfair Display', Georgia, serif   → títulos, preços, marca
Body:    'Inter', -apple-system, sans-serif   → tudo mais
```

### Escala Tipográfica (modular, base 16px)
| Token   | px  | Uso típico                          |
|---------|-----|-------------------------------------|
| text-xs | 12  | Badges, labels, metadata           |
| text-sm | 14  | Ingredientes, descrições, nav      |
| text-base | 16 | Corpo de texto padrão             |
| text-lg | 18  | Subtítulos de seção                |
| text-xl | 20  | Nomes de produtos, headings sm     |
| text-2xl| 24  | Preços, headings md                |
| text-3xl| 30  | Seção CTA, headings lg             |
| text-4xl| 36  | Hero section headings              |
| text-5xl| 48  | Hero title mobile                  |
| text-6xl| 60  | Hero title desktop                 |

### Line Heights
- Display / títulos: `1.05–1.15`
- Corpo de texto: `1.6–1.7`
- UI compact: `1.0–1.2`

### Letter Spacing
- Badges / labels uppercase: `0.05–0.15em`
- Títulos grandes: `-0.02em` (tight)
- Corpo normal: `0`

---

## 4. ESPAÇAMENTO (8px grid)

| Token    | px  |
|----------|-----|
| space-1  | 4   |
| space-2  | 8   |
| space-3  | 12  |
| space-4  | 16  |
| space-5  | 20  |
| space-6  | 24  |
| space-8  | 32  |
| space-10 | 40  |
| space-12 | 48  |
| space-16 | 64  |
| space-20 | 80  |
| space-24 | 96  |

---

## 5. BORDER RADIUS

| Token      | px   | Uso                             |
|------------|------|---------------------------------|
| radius-sm  | 6px  | Inputs, tags pequenos           |
| radius-md  | 12px | Logos, ícones, componentes sm   |
| radius-lg  | 20px | Cards, drawers                  |
| radius-xl  | 28px | Cards de produto, promo cards   |
| radius-full| 9999 | Pills, badges, botões, avatares |

---

## 6. SOMBRAS

```css
--shadow-sm:   0 2px 8px rgba(0,0,0,0.4);
--shadow-md:   0 8px 24px rgba(0,0,0,0.5);
--shadow-lg:   0 20px 48px rgba(0,0,0,0.6);
--shadow-glow: 0 0 40px rgba(232,25,44,0.15);   /* hero pizza */
--shadow-card: 0 4px 20px rgba(0,0,0,0.5);      /* cards hover */
```

---

## 7. GRID SYSTEM

```
Container max-width: 1280px
Container padding:   clamp(1rem, 5vw, 2rem)  (responsivo)
Gap padrão:          24px (--space-6)

Breakpoints:
  mobile:  < 640px   → 1 coluna
  tablet:  641–1024  → 2 colunas
  desktop: > 1024    → 3–4 colunas
```

### Grids de Produto
```css
/* Auto-fill responsivo — melhor para grids de pizza */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

/* Fixed columns */
grid-2: repeat(2, 1fr)
grid-3: repeat(3, 1fr)
grid-4: repeat(4, 1fr)
```

---

## 8. COMPONENTES

### Badge
```
Variantes: red | gold | green
Uso: status de produto, categorias, novidades
```

### Button
```
Variantes: primary | whatsapp | outline | ghost
Tamanhos:  sm | md | lg
```

### Pizza Card
```
Estrutura:
  ├── Image wrap (4:3 aspect, gradiente de fundo)
  │   ├── Badges (top-left)
  │   └── Fav button (top-right)
  └── Body
      ├── Nome (Playfair Display Bold)
      ├── Ingredientes (2 linhas, clamp)
      └── Footer
          ├── Preço
          └── Add button (+)
```

### Promo Card
```
3 variantes visuais: fire (vermelho), gold (dourado), night (índigo)
Estrutura: ícone → tag → título → descrição → preço → CTA
```

### Header
```
- Logo (marca + nome + cidade)
- Nav desktop (hidden < 768px)
- Theme toggle
- CTA "Pedir Agora"
- Menu hambúrguer (mobile)
```

### Floating WhatsApp
```
- Botão fixo bottom-right
- Pulse animation
- Bubble de mensagem (fechável)
- Link direto para WhatsApp com mensagem pré-preenchida
```

### Toast Notification
```
- Aparece ao clicar em "+ pedir"
- 3.5 segundos de duração
- Mostra nome do produto
- Abre WhatsApp após 600ms
```

---

## 9. ANIMAÇÕES

```css
/* Scroll reveal — padrão para todas as seções */
opacity: 0 → 1
translateY: 20px → 0
duration: 0.6s
stagger: 70ms por item

/* Cards hover */
translateY: -6px
box-shadow: elevada

/* WhatsApp float pulse */
box-shadow pulsante 2s infinite

/* Hero pizza ring */
rotate 360deg / 20s linear infinite

/* Hero badges */
translateY ±8px / 3s ease-in-out infinite
```

---

## 10. COPYWRITING SUGERIDO

### Hero
- **Headline:** "Sabor que aquece a alma"
- **Subheadline:** "As melhores pizzas de Morrinhos, feitas com ingredientes frescos e muito amor."
- **CTA primário:** "📲 Pedir no WhatsApp"
- **CTA secundário:** "Ver Cardápio"

### Promo Strip (marquee)
- "2ª pizza com 40% OFF toda sexta-feira"
- "Entrega grátis acima de R$ 60"
- "Promoção família: 2 grandes + refrigerante por R$ 89,90"
- "Peça pelo WhatsApp e ganhe sobremesa grátis no 1º pedido"
- "Funcionamos de terça a domingo, das 18h às 23h30"

### Order CTA
- **Headline:** "Bateu aquela fome de pizza?"
- **Body:** "Fale com a gente pelo WhatsApp e faça seu pedido em menos de 2 minutos."
- **CTA:** "Pedir pelo WhatsApp"

### WhatsApp Messages (pré-preenchidas)
```
Genérico:  "Olá! Quero fazer um pedido 🍕"
Produto:   "Olá! Quero pedir uma {nome} 🍕 Qual o tamanho disponível?"
Promo:     "Oi! Quero a promo {nome da promo}"
Família:   "Oi! Quero o Combo Família 👨‍👩‍👧‍👦"
Primeiro:  "Oi! É meu primeiro pedido 🎁"
Cardápio:  "Oi! Quero ver o cardápio completo 📋"
```

---

## 11. SEO & PERFORMANCE

```html
<!-- Meta essenciais -->
<title>Paulistana Pizza — Tradição e Sabor em Morrinhos-GO</title>
<meta name="description" content="As melhores pizzas de Morrinhos. Peça agora pelo WhatsApp e receba em casa.">

<!-- Schema LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Paulistana Pizza",
  "telephone": "+5564993012526",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Rio Grande do Sul, 550",
    "addressLocality": "Morrinhos",
    "addressRegion": "GO",
    "postalCode": "75650-000",
    "addressCountry": "BR"
  },
  "openingHours": ["Tu-Su 18:00-23:30"],
  "priceRange": "R$",
  "servesCuisine": "Pizza"
}
</script>
```

---

## 12. PRÓXIMOS PASSOS

1. **Substituir emojis por fotos reais** dos produtos (impacto máximo na conversão)
2. **Integrar com cardápio real** — atualizar todos os produtos, preços e descrições
3. **Google Analytics / Meta Pixel** — rastrear cliques no WhatsApp como conversão
4. **Adicionar reviews** — embed Google Reviews ou depoimentos de clientes
5. **Menu categorias** — Especiais, Doces, Brotinho, Bebidas (já preparado no HTML)
6. **Borda de pizza animada** — substituir anel CSS por SVG interativo

---

## WhatsApp
**Número:** +55 64 99301-2526
**Link direto:** https://wa.me/5564993012526
