# Pianeta.Green v2 — movimento del testo

Due gesti, gli stessi su tutte le pagine nuove:

1. **Titoli parola per parola.** Ogni parola sale da una maschera (traslazione dal basso, 0,7 s, curva `cubic-bezier(.2,.7,.2,1)`), a scaglioni di 55 ms (massimo 14 scaglioni). Parte quando il titolo entra nella finestra (10% visibile, margine inferiore -10%).
2. **Blocchi che salgono.** Eyebrow, testo introduttivo, pulsanti e contenuto delle sezioni salgono di 24 px con una dissolvenza (0,7 s), con un ritardo facoltativo di 200–500 ms.

Regole:
- Con `prefers-reduced-motion: reduce` niente movimento: tutto visibile e fermo.
- Senza JavaScript, o se la pagina non si attiva entro 2 s, il testo è visibile (nessun contenuto resta nascosto).
- Nello stato nascosto la parola ha anche `opacity: 0`, così i controlli di contrasto non leggono parole sovrapposte a una parola evidenziata.
- La parola evidenziata (sfondo lime) ha sempre testo foresta: il lime non è mai testo su crema (1,04:1).

Implementazione di riferimento: Nuxt, `app/plugins/terra-motion.ts` (due direttive, `v-terra-words` e `v-terra-reveal`) e gli stili in `layouts/terra.vue`, nel repository del sito Pianeta.Green.

## Logo
`assets/logo-pianeta-green-forest.svg` (foresta su crema) e `assets/logo-pianeta-green-crema.svg` (simbolo lime e scritta crema su foresta). Presi dal frame Landing del Figma. Il simbolo è un'immagine ridotta usata come maschera: per grandi formati serve il file originale.
