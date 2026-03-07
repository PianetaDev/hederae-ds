# Hederae — Figma File Organization Guidelines

> Queste guidelines si applicano a tutti i progetti Pianeta Studio che usano Hederae DS.
> Il livello di complessità del file dipende dal **Tier** del progetto (vedi TIER-STRATEGY.html).

---

## Regole universali (tutti i tier)

Queste regole si applicano **sempre**, indipendentemente dalla complessità del progetto.

### Naming conventions

| Cosa | Formato | Esempio |
|------|---------|---------|
| File Figma | `[Brand] — [Tipo]` | `Rara — Design`, `AGESCI — Brand Library` |
| Pagine | Emoji + nome | `🎨 Styles`, `🧩 Components`, `📐 Wireframes` |
| Component | PascalCase | `HeroSection`, `CardNews`, `NavbarPrimary` |
| Layer/Frame | kebab-case | `hero-section`, `card-news-featured` |
| Variant property | Sentence case | `Size`, `State`, `Theme` |
| Variant value | Capitalized | `Default`, `Hover`, `Disabled` |

### Token ↔ Figma Variables

I Figma Variables **devono** corrispondere esattamente ai token del DS:

```
Token JSON                    →  Figma Variable
color.surface.page            →  color/surface/page
color.interactive.primary.bg  →  color/interactive/primary/bg
spacing.layout.md             →  spacing/layout/md
text.h1.size                  →  text/h1/size
```

**Mai usare colori raw in un frame.** Sempre via Variable o Style.

### Componenti

- Ogni elemento che appare **più di 2 volte** diventa un component
- Ogni component ha **tutti gli stati necessari** come variants:
  - Interattivi: `Default`, `Hover`, `Active`, `Disabled`, `Focus`
  - Editoriali: varianti di contenuto (es. con/senza immagine)
  - Responsive: se cambia struttura, non solo scala
- Ogni component ha **auto layout** abilitato
- Nessun testo hard-coded dove dovrebbe esserci una variable

### Archive management

- **Mai cancellare** frame o pagine — archiviarli
- Le pagine di archivio vanno in fondo al file, nominate: `📦 Archive — YYYY-MM-DD`
- Le versioni precedenti dei componenti si spostano in una pagina `📦 Old Components`

---

## Tier 4 — Single File (Rara, portfolio, showroom)

**Struttura file: 1 file, tutto dentro, max 2 designer**

```
📁 [Brand] — Design
  📄 Cover              ← screenshot del design finale + metadata
  📄 🎨 Styles          ← Figma Styles + Variables (tokens)
  📄 🧩 Components      ← tutti i componenti con varianti
  📄 📐 Wireframes      ← sketchy, bassa fedeltà
  📄 🖥️ Desktop         ← visual design @ 1440px
  📄 📱 Mobile          ← responsive @ 390px
  📄 🔍 Prototype       ← flussi chiave collegati
  📄 📦 Archive         ← versioni precedenti
```

**Regole specifiche:**
- Le Figma Styles (colori, testo) si creano **prima** di fare qualsiasi design
- I Styles devono usare i nomi dei token Hederae (`surface/page`, non `dark bg`)
- Il file non è condiviso come library — è standalone
- Il visual design si fa su frame a 1440px con max-width content a 1200px

---

## Tier 3 — Prodotto (Corner Table, ristoranti, studi)

**Struttura: 1-2 file, brand system definito**

Uguale a Tier 4, ma con pagina aggiuntiva per il brand system e possibile separazione UX/Visual:

```
📁 [Brand] — Design
  📄 Cover
  📄 🎨 Brand System    ← logo, colori, font, pattern — la "fonte di verità"
  📄 🧩 Components      ← esteso, con storyboard degli stati
  📄 📐 UX Flows        ← user flows annotati (non solo wireframe)
  📄 🖥️ Desktop
  📄 📱 Mobile
  📄 🔍 Prototype
  📄 📋 Specs           ← annotazioni per sviluppo
  📄 📦 Archive
```

**Regole aggiuntive:**
- La pagina `Brand System` è la prima cosa da completare — niente design senza brand system definito
- Ogni componente ha una pagina dedicata agli `Anatomy notes` (cosa è ogni parte)
- Le spec di handoff si fanno su **Figma Dev Mode** — nessun documento Word separato

---

## Tier 2 — Multi-brand (Susdef, reti tematiche)

**Struttura: DS Library separata + 1 file per prodotto**

```
Team Figma: [Brand] / [Network]
│
├── 📚 [Brand] — DS Library      ← PUBBLICATO come shared library
│     📄 Cover + Changelog
│     📄 🎨 Tokens & Variables
│     📄 🧩 Components — Atoms
│     📄 🧩 Components — Molecules
│     📄 📖 Usage Guidelines
│
├── 🖥️ [Brand] — Site A — Design
│     📄 Cover
│     📄 🎨 Local Token Overrides  ← brand variant colors/fonts
│     📄 📐 Wireframes
│     📄 🖥️ Visual Design
│     📄 📋 Dev Specs
│
└── 🖥️ [Brand] — Site B — Design
      📄 ...
```

**Regole critiche:**
- La DS Library è **pubblicata come shared library** nel team Figma
- Le modifiche alla library richiedono un **changelog** nella pagina Cover
- I file prodotto non modificano la library — creano local overrides per brand variants
- Prima di pubblicare una modifica alla library: notifica nel canale design del team

---

## Tier 1 — Ecosystem (AGESCI, fondazioni, istituzionali)

**Struttura: Figma Team dedicato, 5+ file separati per funzione**

```
🏛️ Figma Team: [Organizzazione]
│
├── 📚 Hederae Core Library         ← NON EDITABILE dai designer cliente
│     (condivisa da Pianeta Studio, accesso read-only per il team cliente)
│
├── 🎨 [Brand] — Brand Library      ← PUBBLICATO nel team
│     📄 Cover + Changelog + Versione
│     📄 🎨 Token Overrides         ← vars brand-specific che sovrascrivono Hederae Core
│     📄 🧩 Brand Components        ← componenti molecola branded (navbar, hero, footer...)
│     📄 🖼️ Iconography             ← icon set, SVG sprite
│     📄 🎭 Illustration & Assets   ← pattern, illustrazioni
│     📄 ♿ Accessibility Specs     ← note WCAG per ogni componente
│
├── 📐 [Brand] — UX Architecture    ← working file, UX team
│     📄 Cover
│     📄 🗺️ Sitemap                 ← struttura gerarchica completa
│     📄 👤 Personas                ← chi usa il sito (nazionale, regionale, scout...)
│     📄 🌊 User Flows              ← flussi per tipo utente
│     📄 📐 Wireframes — Desktop
│     📄 📐 Wireframes — Mobile
│     📄 📦 Archive
│
├── 🖥️ [Brand] — Visual Design      ← working file, UI team
│     📄 Cover
│     ── per tipo di pagina:
│     📄 Homepage Nazionale
│     📄 Homepage Regionale
│     📄 Sottosito Branca
│     📄 Pagina Notizia / Articolo
│     📄 Pagina Evento
│     📄 Area Documenti
│     📄 Pagina Errore / 404
│     📄 Stati vuoti (empty states)
│     📄 📦 Archive
│
└── 📊 [Brand] — Dev Handoff        ← generato da Visual Design, letto da dev
      📄 Component Specs
      📄 Responsive Breakpoints
      📄 Token → CSS Variable Map
      📄 ♿ Accessibility Checklist
```

### Workflow Tier 1

```
1. UX Architecture → review cliente → approvazione
2. Brand Library components (atoms) → review dev → approvazione
3. Visual Design (usa Brand Library) → review cliente → approvazione
4. Dev Handoff (generato da Visual) → sviluppo inizia
5. Iterazioni: sempre partendo da Visual Design, mai da Handoff
```

### Regole critiche Tier 1

- **Hederae Core Library è read-only** per i designer. Le modifiche al core vanno proposte via GitHub issue nel repo `hedera-design-system`
- Ogni componente nel Brand Library ha una **storia di accessibility**: focus order, aria-label, contrasto su tutti i background
- Il Dev Handoff file viene **rigenerato** ad ogni milestone, non editato manualmente
- I page file nel Visual Design usano **instance swap** dalla Brand Library — mai componenti locali
- Un componente "custom one-off" che appare su 2+ pagine viene **sempre spostato** nella Brand Library
- Il Changelog nella Brand Library segue il formato: `[v1.2.0] 2026-03-15 — Aggiunto stato disabled al Button primario`

---

## Quick reference — Cosa va dove

| Elemento | Tier 4 | Tier 1 |
|----------|--------|--------|
| Colori | Figma Styles locali | Brand Library → Token Overrides |
| Componenti | File locale | Brand Library (pubblicata) |
| Wireframe | Pagina nel file design | File UX Architecture separato |
| Visual design | Pagina nel file design | File Visual Design separato |
| Spec dev | Figma Dev Mode sul file | File Dev Handoff separato |
| Icon set | Inline nel file | Brand Library → Iconography |
| Accessibility | Commenti ad-hoc | Brand Library → Accessibility Specs |

---

## Checklist prima del primo frame

Prima di iniziare qualsiasi design, verifica:

- [ ] I Figma Variables sono configurati con i nomi corretti dei token Hederae
- [ ] I font del brand sono installati localmente E aggiunti in Figma
- [ ] La struttura delle pagine è quella definita per il tier del progetto
- [ ] Il naming convention è rispettato (file, pagine, layers)
- [ ] Se Tier 2+: la DS Library è abilitata come shared library nel file

---

*Revisione: Marzo 2026 — Pianeta Studio*
