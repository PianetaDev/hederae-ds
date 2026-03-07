# Hederae Design System — Guidelines

> **Hederae** (dal latino *Hedera helix*, l'edera) è il design system di Pianeta Studio.
> Come l'edera, cresce su strutture diverse mantenendo la stessa natura: un unico sistema, molti brand.

---

## Principi fondamentali

### 1. Semantico prima di visivo
Non scrivere mai un colore esplicito in un componente. Usa sempre un token semantico:

```vue
<!-- ❌ Mai così -->
<div class="bg-[#1c2d2d] text-[#8fdb7e]">

<!-- ✅ Sempre così -->
<div class="bg-surface-card text-content-brand">
```

### 2. Intent-driven naming
I token si chiamano per **cosa fanno**, non per **come appaiono**.

| ❌ Evita | ✅ Usa |
|----------|--------|
| `green-primary` | `brand-primary` |
| `dark-bg` | `surface-page` |
| `white-text` | `content-primary` |
| `orange-button` | `interactive-accent-bg` |

### 3. Tre livelli, una direzione
I token scorrono in un'unica direzione:

```
Primitivi → Semantici → Brand
(base/)      (semantic/)   (brand/rara/, brand/corner-table/)
```

I componenti referenziano solo il livello **semantico**. I brand sovrascrivono il livello semantico. I primitivi non vengono mai esposti ai componenti.

### 4. Green first
Il DS è nativamente pensato per temi scuri e palette verdi. Le scelte architetturali (dark surfaces, glow effects, alpha channels) riflettono questo orientamento. I brand futuri che usano temi chiari dovranno estendere il sistema, non forzarlo.

---

## Architettura

```
hederae-ds/
│
├── tokens/
│   ├── base/              # Valori primitivi (mai referenziati direttamente)
│   │   ├── color-palette.json
│   │   ├── spacing.json
│   │   ├── typography.json
│   │   ├── radius.json
│   │   ├── elevation.json
│   │   └── motion.json
│   │
│   ├── semantic/          # Token per intento (questi usate nei componenti)
│   │   ├── color.json
│   │   ├── typography.json
│   │   └── spacing.json
│   │
│   └── brand/             # Mapping semantico → valori specifici per brand
│       ├── rara/
│       │   ├── color.json
│       │   └── typography.json
│       └── corner-table/
│           ├── color.json       (⚠️ DRAFT — da completare)
│           └── typography.json  (⚠️ DRAFT — da completare)
│
├── css/
│   └── themes/
│       ├── rara.css          # CSS custom properties per Rara
│       └── corner-table.css  # CSS custom properties per Corner Table (⚠️ DRAFT)
│
├── tailwind/
│   ├── base.config.js         # Config condivisa (tutti i brand)
│   ├── rara.tailwind.config.js
│   ├── corner-table.tailwind.config.js
│   └── utils.js
│
├── components/            # Componenti Vue (da popolare)
├── storybook/             # Storybook config
└── docs/                  # Questa cartella
```

---

## Come aggiungere un nuovo brand

1. Crea la cartella `tokens/brand/<nome-brand>/`
2. Copia `tokens/brand/rara/color.json` come template
3. Sostituisci tutti i valori con i colori del nuovo brand
4. Crea `css/themes/<nome-brand>.css` (copia `rara.css` e sostituisci i valori)
5. Crea `tailwind/<nome-brand>.tailwind.config.js`
6. Nel progetto Nuxt: importa il CSS del tema e usa la config Tailwind del brand

---

## Switching del tema in Nuxt

Il sistema usa l'attributo `data-brand` sull'elemento `<html>` per attivare il tema corretto.

```vue
<!-- app.vue -->
<template>
  <Html :data-brand="currentBrand">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>
```

In `nuxt.config.ts`, importa il CSS del tema:
```ts
export default defineNuxtConfig({
  css: ['~/hederae-ds/css/themes/rara.css'],
  modules: ['@nuxtjs/tailwindcss'],
})
```

---

## Regole di accesso ai token

| Layer | Chi può usarlo |
|-------|---------------|
| Primitivi (`base/`) | Solo il layer semantico e brand. **Mai nei componenti.** |
| Semantici (`semantic/`) | Componenti, documentazione, Storybook |
| Brand (`brand/`) | CSS themes, Tailwind config. **Non nei componenti.** |
| CSS vars (`--color-*`) | Componenti (via classi Tailwind o inline in casi eccezionali) |
