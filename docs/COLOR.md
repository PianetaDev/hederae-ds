# Hederae — Color System

## Struttura in tre livelli

### Livello 1 — Primitivi (palette grezza)

I valori puri. Non sono esposti ai componenti.

| Token | Valore | Uso |
|-------|--------|-----|
| `palette.green.70` | `#0d1d1d` | Background più scuro di Rara |
| `palette.green.60` | `#132020` | Background intermedio |
| `palette.green.50` | `#1c2d2d` | Card surface |
| `palette.green.25` | `#8fdb7e` | Brand green (CTA, highlights) |
| `palette.green.10` | `#f0fded` | Near-white green tint |
| `palette.orange.50`| `#FF6B33` | Accent orange (Rara) |
| `palette.neutral.5`| `#f9f9f9` | Primary text on dark |

---

### Livello 2 — Semantici (per intento)

Cosa fa quel colore, non che valore ha.

#### Surface — livelli di profondità

```
surface.page     →  Lo sfondo più scuro. Base della pagina.
surface.raised   →  Sezioni/pannelli leggermente elevati.
surface.card     →  Card e container.
surface.overlay  →  Modal, drawer, tooltip.
surface.inverse  →  Superficie chiara su tema scuro (sezioni invertite).
```

#### Content — testo e icone

```
content.primary    →  Testo principale (massimo contrasto).
content.secondary  →  Testo di supporto, caption.
content.disabled   →  Testo non interagibile.
content.inverse    →  Testo su surface.inverse (scuro su chiaro).
content.brand      →  Testo nel colore brand (link, evidenziazioni).
content.accent     →  Testo nel colore accent secondario.
```

#### Interactive — elementi azionabili

```
interactive.primary.*    →  Bottone CTA principale.
interactive.secondary.*  →  Bottone outlined/secondario.
interactive.ghost.*      →  Bottone fantasma (solo hover).
interactive.accent.*     →  CTA alternativo (es. orange in Rara).
link.*                   →  Link ipertestuali.
```

#### Feedback — stati di sistema

```
feedback.success-*  →  Conferme, successi.
feedback.warning-*  →  Avvisi non bloccanti.
feedback.error-*    →  Errori, blocchi.
feedback.info-*     →  Informazioni neutrali.
```

#### Brand — colori identitari

```
brand.primary    →  Colore principale del brand attivo.
brand.secondary  →  Colore secondario/accent.
brand.muted      →  Versione attenuata per sfondi e decorazioni.
```

---

### Livello 3 — Brand (Rara)

Mapping dei semantici ai valori reali di Rara:

| Token semantico | Valore Rara |
|----------------|-------------|
| `surface.page` | `#0d1d1d` |
| `surface.card` | `#1c2d2d` |
| `content.primary` | `#f9f9f9` |
| `content.brand` | `#8fdb7e` |
| `content.accent` | `#FF6B33` |
| `border.focus` | `#8fdb7e` |
| `interactive.primary.bg` | `#8fdb7e` |
| `interactive.primary.label` | `#0d1d1d` |
| `brand.primary` | `#8fdb7e` |
| `brand.secondary` | `#FF6B33` |

---

## Accessibilità (WCAG)

Tutti i rapporti di contrasto testo/sfondo devono rispettare almeno **AA (4.5:1)** per testo normale, **3:1** per testo large (≥18px bold o ≥24px regular).

| Combinazione | Ratio stimato | Standard |
|-------------|---------------|---------|
| `#f9f9f9` su `#0d1d1d` | ~14:1 | ✅ AAA |
| `#8fdb7e` su `#0d1d1d` | ~7.4:1 | ✅ AAA |
| `#8fdb7e` su `#1c2d2d` | ~5.8:1 | ✅ AA |
| `#0d1d1d` su `#8fdb7e` | ~7.4:1 | ✅ AAA |
| `#f9f9f9` su `#FF6B33` | ~3.2:1 | ✅ AA large |

> ⚠️ Verificare sempre con [Coolors Contrast Checker](https://coolors.co/contrast-checker) prima di aggiungere nuove combinazioni.

---

## Come aggiungere un colore

1. Aggiungi il valore grezzo a `tokens/base/color-palette.json` nella palette appropriata.
2. Se serve un nuovo **ruolo semantico**, aggiungilo a `tokens/semantic/color.json` con descrizione.
3. Mappa il nuovo ruolo nel file brand corrispondente (`tokens/brand/<brand>/color.json`).
4. Aggiungi la CSS var nel file tema (`css/themes/<brand>.css`).
5. Il Tailwind config è già configurato per leggerlo automaticamente via CSS var.

**Non aggiungere mai un valore direttamente al Tailwind config senza passare per questo processo.**

---

## Livello 3 — Brand: Susdef (Light theme)

Mapping semantici → valori reali Susdef. Fonte: Figma `25P15_Fondazione-Sviluppo-Sostenibile`, nodo 895-3070.

| Token semantico | Valore Susdef | Note |
|----------------|---------------|------|
| `surface.page` | `#FFFFFF` | White |
| `surface.raised` | `#FBF9F7` | Ui/01 — warm off-white |
| `surface.card` | `#F4F1EB` | Ui/02 |
| `surface.deep` | `#E9E3D7` | Ui/03 — extra livello light |
| `surface.inverse` | `#013E39` | Header/footer verde foresta |
| `content.primary` | `#212121` | Ui/04 — near-black |
| `content.secondary` | `#6D6D69` | Text/02 |
| `content.brand` | `#013E39` | Verde Susdef su testo |
| `border.brand` | `#013E39` | Outline Figma |
| `interactive.primary.bg` | `#013E39` | CTA verde |
| `interactive.primary.label` | `#FFFFFF` | ~15:1 ✅ AAA |
| `brand.primary` | `#013E39` | Deep forest green |
| `brand.secondary` | `#C3C234` | ⚠️ chartreuse — solo decorativo |
| `brand.accent` | `#D8EC28` | ⚠️ lime — solo decorativo |

### Token extra — Settori (Susdef only)

I settori tematici usano il namespace `sector.*`. Non è parte del semantic layer comune — è una estensione brand-specifica per Susdef.

| Token CSS | Valore | Settore |
|-----------|--------|---------|
| `--color-sector-ecoinnovazione-primary` | `#FF8C01` | Ecoinnovazione e imprenditorialità |
| `--color-sector-energia-clima-primary` | `#2792B9` | Energia e clima |
| `--color-sector-economia-circolare-primary` | `#BEBFF8` | ⚠️ bg only |
| `--color-sector-mobilita-sostenibile-primary` | `#CE9B62` | Mobilità sostenibile |
| `--color-sector-green-city-primary` | `#B9284F` | Green city |
| `--color-sector-agroecologia-primary` | `#FFC310` | Agroecologia |
| `--color-sector-stati-generali-primary` | `#9EDFC9` | ⚠️ bg only |
| `--color-sector-corsi-formazione-primary` | `#F993C5` | ⚠️ bg only |

> ⚠️ I settori in "bg only" (lavanda, menta, rosa) hanno luminosità alta — falliscono WCAG AA per testo. Usarli come background di tag/chip con testo `content.primary` (#212121).

---

## Accessibilità — Susdef (light theme)

I temi light richiedono attenzione opposta rispetto a Rara (dark). Il pericolo non è "troppo scuro" ma "troppo chiaro".

| Combinazione | Ratio | Standard |
|-------------|-------|---------|
| `#013E39` su `#FFFFFF` | ~15.2:1 | ✅ AAA |
| `#013E39` su `#FBF9F7` | ~14.5:1 | ✅ AAA |
| `#212121` su `#FFFFFF` | ~16.1:1 | ✅ AAA |
| `#6D6D69` su `#FFFFFF` | ~4.9:1 | ✅ AA |
| `#FFFFFF` su `#013E39` | ~15.2:1 | ✅ AAA |
| `#D8EC28` su `#013E39` | ~5.9:1 | ✅ AA (link inverse) |
| `#013E39` su `#D8EC28` | ~5.9:1 | ✅ AA (label accent) |
| `#C3C234` su `#FFFFFF` | ~1.8:1 | ❌ FAIL — solo forme |
| `#D8EC28` su `#FFFFFF` | ~1.4:1 | ❌ FAIL — solo forme |

