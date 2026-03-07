# Hederae — AI Workflow: Claude come co-pilot del designer

> Questo documento descrive come integrare Claude (Anthropic) nel processo di design e sviluppo del Hederae DS.
> L'obiettivo: ridurre il lavoro ripetitivo, accelerare il bootstrapping di nuovi brand, garantire la coerenza del sistema.

---

## Principio fondamentale

**L'AI non sostituisce le decisioni di design — le documenta, le verifica e le traduce in codice.**

Il designer rimane responsabile di:
- la visione estetica e l'identità del brand,
- le scelte strategiche sui ruoli semantici,
- l'approvazione finale di ogni output AI.

Claude si occupa di:
- la traduzione di dati Figma in token JSON e CSS,
- il controllo WCAG automatico su tutte le coppie di colore,
- il mapping semantico (proposta → il designer approva),
- la generazione di bozze di componenti Vue e Storybook stories.

---

## Workflow 1 — Nuovo brand da Figma (90% automatizzato)

### Input richiesto
- Link al nodo Figma che contiene le Variabili colore e tipografia del brand
- Nome del brand (es. `susdef`)
- Tier del progetto (1–4)
- Tema: `light` o `dark`

### Output generato da Claude
1. `tokens/brand/<brand>/color.json` — mapping semantico completo con note WCAG
2. `tokens/brand/<brand>/typography.json` — font stack e type scale
3. `css/themes/<brand>.css` — CSS custom properties pronte per Nuxt
4. `tailwind/<brand>.tailwind.config.js` — config Tailwind brand-specific
5. Update di `storybook/.storybook/preview.js` — brand aggiunto al theme switcher

### Come eseguirlo
```
1. Apri Figma con il file del brand (Figma MCP richiede il desktop app)
2. In Claude: "Aggiungi il brand [nome] da questo Figma: [link nodo]"
3. Claude estrae le variabili, propone il mapping semantico
4. Il designer revisiona e conferma (o chiede aggiustamenti)
5. Claude genera i 4 file + aggiorna Storybook
```

### Cosa controllare (checklist designer)
- [ ] `surface.page` / `surface.card` mappati correttamente?
- [ ] Il colore brand interactivo ha contrasto sufficiente per le label?
- [ ] Colori accent segnati come ⚠️ se falliscono AA?
- [ ] Font stack corrispondente al Figma?
- [ ] Eventuali namespace extra (es. `sector.*` per Susdef) gestiti?

---

## Workflow 2 — WCAG Audit automatico

Prima di qualsiasi rilascio, fornisci a Claude le coppie testo/background critiche del brand.

### Input
```
Controlla le coppie WCAG per il brand Susdef:
- testo primario (#212121) su surface.page (#FFFFFF)
- label bianca (#FFF) su interactive.primary.bg (#013E39)
- content.secondary (#6D6D69) su surface.raised (#FBF9F7)
- [aggiungi le coppie rilevanti per il brand]
```

### Output
Claude restituisce una tabella con ratio, standard raggiunto (AA/AAA/FAIL), e per ogni FAIL suggerisce il valore più vicino che passa AA.

### Regola di sistema
Nessun token `interactive.primary.label` può essere salvato in un file brand senza una nota WCAG `$description` che indica il ratio di contrasto.

---

## Workflow 3 — Component spec da Figma frame

### Input
- Screenshot o link al frame Figma del componente
- Nome del componente
- Brand di riferimento

### Output da Claude
1. **Props spec** — nome componente, lista props con tipo e default
2. **Varianti e stati** — elenco varianti visive + stati interattivi
3. **Token usati** — quali semantic token vengono usati nel componente
4. **A11y notes** — role ARIA, keyboard nav, focus management
5. **Bozza Storybook story** — `.stories.js` pronto da rifinire
6. **Bozza componente Vue** — `.vue` con slot e token semantici

### Esempio reale — pulsante Susdef
```
Input: "Crea la spec per il bottone Susdef, varianti: primary / secondary / ghost / accent"

Output:
- ButtonSusdef.vue con props variant, size, disabled, loading
- Token usati: interactive.primary.bg, interactive.primary.label, border.focus
- ARIA: role="button", aria-disabled, focus-visible
- Stories con 4 varianti + dark background su .surface-inverse
```

---

## Workflow 4 — Token naming review

Quando un designer aggiunge nuove variabili Figma, Claude verifica che i nomi seguano la convenzione Hederae.

### Input
Lista di nomi proposti dal designer (es. esportazione Figma Variables JSON)

### Output
Claude evidenzia i nomi che non rispettano le convenzioni e propone alternative:

| Nome proposto | Problema | Suggerimento |
|--------------|----------|--------------|
| `dark-green` | Visivo, non semantico | `surface.inverse` |
| `primary-btn-bg` | Ibrido visivo/ruolo | `interactive.primary.bg` |
| `orange-hover` | Colore esplicito | `interactive.accent.bg-hover` |
| `text-white` | Visivo | `content.inverse` |

---

## Workflow 5 — Onboarding nuovo brand (gara / pitch)

Quando si partecipa a una gara come AGESCI, il DS deve dimostrare capacità sistemica. Claude può generare rapidamente:

1. **Brand token scaffold** — struttura vuota con tutti i ruoli semantici da riempire
2. **WCAG requirements brief** — documento con i requisiti di contrasto per il Tier del progetto
3. **Component inventory** — lista dei componenti necessari per il Tier, con priorità
4. **Figma library checklist** — cosa il designer deve creare prima che lo sviluppo possa iniziare

### Per AGESCI (Tier 1)
```
In Claude: "Genera il brand token scaffold per AGESCI Tier 1 con tema light, WCAG AA obbligatorio"

Riceve: tokens/brand/agesci/color.json con tutti i ruoli semantici a "PLACEHOLDER"
+ un report di tutti i requisiti di contrasto che devono essere soddisfatti prima del rilascio
```

---

## Setup: Figma MCP (Claude Desktop)

Per i workflow che richiedono lettura diretta da Figma:

```
Prerequisiti:
- Figma desktop app aperta con il file corretto
- Claude Desktop con Figma MCP abilitato
- File Figma deve contenere Variables (non solo Styles)
```

Il tool `get_variable_defs` estrae tutte le variabili in formato compatto (~100 vars in una sola chiamata). È più affidabile di `get_design_context` per i token (quello restituisce anche il layout e può eccedere i limiti).

---

## Cosa Claude NON fa (e non deve fare)

- **Non decide l'identità visiva**: il verde di Susdef (#013E39) lo ha scelto il designer — Claude lo trasforma in token.
- **Non genera immagini o illustrazioni**: per quello ci sono tool dedicati.
- **Non sostituisce il codice review umano**: i componenti generati sono bozze, non PR-ready.
- **Non aggiorna il Figma**: il flusso è unidirezionale Figma → codice, non viceversa (ancora).

---

## Responsabilità per Tier

| Tier | Chi usa il workflow AI | Autonomia Claude | Review umana |
|------|----------------------|------------------|--------------|
| 4 (Rara) | Dev/designer solo | Alta — brand semplice | Token finali |
| 3 (Corner Table) | Dev + designer | Alta | Token + componenti chiave |
| 2 (Susdef) | Team | Media — namespace extra | Token + sector colors + a11y |
| 1 (AGESCI) | Team + QA | Bassa — ogni token validato | Tutto, con sign-off accessibilità |

---

## Prompt template — Aggiungi nuovo brand

Copia e adatta questo prompt in Claude per aggiungere un nuovo brand:

```
Aggiungi il brand [NOME] a Hederae DS.

Tier: [1/2/3/4]
Tema: [light/dark]
Figma: [URL nodo colori]

Note:
- [eventuali namespace extra, es. "ha 6 colori categoria"]
- [target WCAG: AA / AAA]
- [font custom o Google Fonts]

Genera:
1. tokens/brand/[nome]/color.json
2. tokens/brand/[nome]/typography.json
3. css/themes/[nome].css
4. tailwind/[nome].tailwind.config.js
5. Aggiorna storybook preview con il nuovo tema
```

---

> **Versione documento**: 1.0 · Marzo 2026
> Aggiornare quando vengono aggiunti nuovi workflow o tool AI al processo.
