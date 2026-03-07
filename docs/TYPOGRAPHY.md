# Hederae — Typography System

## Font stack (Rara)

| Ruolo | Font | Usi |
|-------|------|-----|
| `--font-display` | Space Grotesk Bold | H1, H2 — grandi intestazioni |
| `--font-heading` | Space Mono Bold | H3, H4, label, button, nav, numeri |
| `--font-body` | Sora Regular/SemiBold | Body, subtitle, caption |

**Google Fonts import (Rara):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Space+Mono:wght@700&family=Sora:wght@400;600&display=swap" rel="stylesheet">
```

---

## Ruoli tipografici

### display
Font: Space Mono Bold · 120px · line-height 1 · tracking 0.125em
→ Hero numbers, grandi statistiche (es. "144+")

### h1
Font: Space Grotesk Bold · 64px (40px mobile) · line-height 1
→ Titolo pagina principale

### h2
Font: Space Grotesk Bold · 56px · line-height 1
→ Titolo di sezione

### h3
Font: Space Mono Bold · 32px (24px mobile) · line-height 1
→ Sottosezione, titolo feature

### h4
Font: Space Mono Bold · 24px (20px mobile) · line-height 1
→ Card title, titolo lista

### subtitle
Font: Sora SemiBold · 32px (22px mobile) · line-height 1.2
→ Intro text sotto heading, lead paragraph

### body-lg
Font: Sora Regular · 22px · line-height 1.2
→ Paragrafo principale, descrizioni lunghe

### body
Font: Sora Regular · 18px · line-height 1.2
→ Default body copy

### body-sm
Font: Sora Regular · 16px · line-height 1.5
→ Note, caption, helper text

### label
Font: Space Mono Bold · 16px · tracking 2em · UPPERCASE
→ Tag, categoria, badge

### label-compact
Font: Space Mono Bold · 16px · tracking normale
→ Label senza wide tracking

### button
Font: Space Mono Bold · 18px · line-height 1.2
→ Testo CTA e bottoni

### navigation
Font: Space Mono Bold · 18px · tracking 2em
→ Link di navigazione

---

## Classi Tailwind corrispondenti

```vue
<!-- H1 -->
<h1 class="font-display text-5xl font-bold leading-tight tracking-normal">

<!-- H3 -->
<h3 class="font-heading text-2xl font-bold leading-tight">

<!-- Label uppercase -->
<span class="font-heading text-sm font-bold leading-snug tracking-wide uppercase">

<!-- Body -->
<p class="font-body text-md font-normal leading-snug">

<!-- Button -->
<button class="font-heading text-md font-bold leading-snug">
```

---

## Regole redazionali

- **Headings**: sentence case (prima lettera maiuscola, resto minuscolo), salvo nomi propri
- **Label/tag**: UPPERCASE sempre (gestito dal CSS, non nel testo)
- **Body copy**: max ~70 caratteri per riga per ottima leggibilità
- **Linea base**: il sistema usa `letter-spacing: 0.125em` come default su quasi tutti gli stili — è intentional, non rimuoverlo

---

## Come aggiungere un font per un nuovo brand

1. Aggiungi il font a `tokens/brand/<brand>/typography.json`
2. Aggiorna `--font-display`, `--font-heading`, `--font-body` nel file CSS del tema
3. Aggiungi il link Google Fonts nel layout del progetto specifico
4. Il Tailwind config usa già `font-display`, `font-heading`, `font-body` via CSS vars, non c'è nulla da cambiare

---

## Font stack — Brand overview

| Brand | Display / Heading | Body | UI / Labels | Carattere |
|-------|-------------------|------|-------------|-----------|
| **Rara** | Space Grotesk Bold | Sora | Space Mono Bold | Moderno, tech, dark |
| **Susdef** | IBM Plex Serif | IBM Plex Sans | IBM Plex Mono | Editoriale, istituzionale |
| **AGESCI** | ⚠️ TBC (Latte Creative) | ⚠️ TBC | ⚠️ TBC | Accogliente, accessibile |
| **Corner Table** | ⚠️ Da Figma nodi 378-3351/3393 | — | — | — |

---

## Font stack (Susdef)

IBM Plex è una famiglia open source IBM — tre tagli coordinati, nessun problema di licenza.

| Ruolo | Font | Usi |
|-------|------|-----|
| `--font-display` | IBM Plex Serif Regular | T1 (64px), H1 (56px) — titoli editoriali |
| `--font-heading` | IBM Plex Serif Medium | H2 (38px), H3 (24px) — sezioni |
| `--font-body` | IBM Plex Sans Regular | Subtitle, body, caption |
| `--font-ui` | IBM Plex Mono Regular | Button, label, tag, navigation |

> **Nota Susdef**: il quarto ruolo `--font-ui` (Mono per l'UI chrome) è specifico di Susdef — gli altri brand usano solo display/heading/body. Aggiungere `font-ui` a Tailwind config solo per Susdef.

**Google Fonts import (Susdef):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet">
```

### Scale tipografica Susdef (valori Figma)

| Stile | Font | Size | Line-height | Note |
|-------|------|------|-------------|------|
| T1 | IBM Plex Serif Regular | 64px | 72px | Hero display |
| H1 | IBM Plex Serif Regular | 56px | 64px | Page heading |
| H2 | IBM Plex Serif Medium | 38px | 48px | Section heading |
| H3 | IBM Plex Serif Medium | 24px | 32px | Sub-section |
| Subtitle | IBM Plex Sans Regular | 32px | 40px | Intro/lead |
| Body-01 | IBM Plex Sans Regular | 24px | 32px | Large body |
| Body-02 | IBM Plex Sans Regular | 18px | 26px | Standard body |
| Body-compact-01 | IBM Plex Sans Regular | 16px | 24px | Card/sidebar |
| Body-compact-02 | IBM Plex Sans Regular | 14px | 24px | Caption/meta |
| Button | IBM Plex Mono Regular | 16px | 24px | CTA text |
| Label | IBM Plex Mono Regular | 20px | 28px | Category labels |
| Tag | IBM Plex Mono Regular | 16px | 24px | Content chips |
| Navigation | IBM Plex Mono Regular | 16px | 24px | Nav items |

