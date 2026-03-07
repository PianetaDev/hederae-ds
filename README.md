# Hederae DS

> Design system multi-brand di Pianeta Studio.  
> Un sistema di token, temi e componenti Vue/Nuxt condiviso tra tutti i progetti.

**Stack:** Vue 3 · Nuxt · Tailwind CSS · Storybook  
**Approccio:** CSS custom properties + semantic tokens · nessun JS per il theming  
**Ecosistema:** [Pianeta.green](https://pianeta.green) infra · Terra (Payload CMS) · Hederae DS

---

## Brand supportati

| Brand | Tier | Theme | Tokens | Status |
|-------|------|-------|--------|--------|
| **Rara** | 4 | Dark | ✅ Completo | [`css/themes/rara.css`](css/themes/rara.css) |
| **Susdef** | 2 | Light | ✅ Completo | [`css/themes/susdef.css`](css/themes/susdef.css) |
| **AGESCI** | 1 | Light | ✅ Completo* | [`css/themes/agesci.css`](css/themes/agesci.css) |
| **Corner Table** | 3 | Light | ⚠️ Placeholder | [`css/themes/corner-table.css`](css/themes/corner-table.css) |

> *AGESCI: font in attesa di conferma da Figma finale (Latte Creative)  
> Corner Table: token da estrarre da Figma desktop (nodi 378-3351 / 378-3393)

---

## Architettura token

```
tokens/
  base/          ← valori grezzi (mai esposti ai componenti)
  semantic/      ← ruoli per intento: surface, content, interactive, feedback
  brand/
    rara/        ← mapping semantici → valori Rara
    susdef/      ← mapping semantici → valori Susdef (+ sector.*)
    agesci/      ← mapping semantici → valori AGESCI
    corner-table/

css/themes/      ← CSS custom properties per brand ([data-brand="X"])
tailwind/        ← config multi-brand che legge le CSS vars
storybook/       ← documentazione con theme switcher (4 brand)
docs/            ← guidelines, COLOR, TYPOGRAPHY, TIER-STRATEGY, AI-WORKFLOW
```

---

## Quick start (Nuxt/Vue)

**1. Importa il tema CSS nel progetto:**

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['../hederae-ds/css/themes/susdef.css'],
  modules: ['@nuxtjs/tailwindcss'],
})
```

**2. Punta il Tailwind config al brand:**

```ts
// tailwind.config.js del progetto
module.exports = require('../hederae-ds/tailwind/susdef.tailwind.config.js')
```

**3. Attiva il tema sul tag `<html>`:**

```vue
<!-- app.vue -->
<Html data-brand="susdef">
  <NuxtLayout><NuxtPage /></NuxtLayout>
</Html>
```

**4. Usa i token nei componenti:**

```vue
<template>
  <section class="bg-surface-card rounded-md p-6">
    <h2 class="font-heading text-2xl text-content-primary">Titolo</h2>
    <p class="font-body text-content-secondary">Descrizione</p>
    <button class="bg-interactive-primary-bg text-interactive-primary-label
                   px-6 py-3 rounded-full font-ui text-sm">
      CTA
    </button>
  </section>
</template>
```

---

## Storybook

```bash
cd storybook
npm install
npm run storybook
# → http://localhost:6006
# Theme switcher: Rara · Corner Table · Susdef · AGESCI
```

---

## Aggiungere un brand

Leggi [`docs/AI-WORKFLOW.md`](docs/AI-WORKFLOW.md) per il workflow completo con Claude come co-pilot.

In breve:

```
1. Apri Figma con il file del brand (necessario Figma desktop + MCP)
2. In Claude: "Aggiungi il brand [nome] da questo Figma: [link nodo]"
3. Claude genera tokens/brand/<nome>/, css/themes/<nome>.css, tailwind config
4. Revisiona il mapping semantico e committa
```

---

## Documentazione

| Doc | Contenuto |
|-----|-----------|
| [`docs/GUIDELINES.md`](docs/GUIDELINES.md) | Architettura, regole, Nuxt integration |
| [`docs/COLOR.md`](docs/COLOR.md) | Sistema colori, WCAG, mapping per brand |
| [`docs/TYPOGRAPHY.md`](docs/TYPOGRAPHY.md) | Font stack per brand, scale tipografiche |
| [`docs/TIER-STRATEGY.html`](docs/TIER-STRATEGY.html) | Tier model, Figma guidelines, roadmap |
| [`docs/FIGMA-GUIDELINES.md`](docs/FIGMA-GUIDELINES.md) | Guida designer per organizzare i file Figma |
| [`docs/AI-WORKFLOW.md`](docs/AI-WORKFLOW.md) | Claude co-pilot: workflow e prompt template |

---

## Relazione con altri repo

| Repo | Cosa è | Stack |
|------|--------|-------|
| `hedera-design-system` | Component library Susdef-specific | React · TypeScript |
| `hederae-ds` *(questo)* | Token platform multi-brand | Vue · Nuxt · Tailwind |

I due repo sono indipendenti. `hedera-design-system` è il progetto Susdef in React. Questo repo è la piattaforma condivisa su cui si costruiscono tutti i progetti Vue/Nuxt di Pianeta Studio.

---

*Pianeta Studio S.r.l. Società Benefit — interno*
