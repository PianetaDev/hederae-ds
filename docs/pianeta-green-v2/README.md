# Pianeta.Green — design system (base), 09/10/2026

Fonte: Figma «Pianeta.Green», frame **Landing** (313:1576). Il file non ha variabili Figma: tutti i valori sono letti dal codice del frame. Pagina visiva: `styleguide.html` (con le foto in `assets/web/`) oppure `styleguide-standalone.html` (un solo file). Token: `tokens.css` e `tokens.json`.

## Immagini e art direction (la parte fondamentale)
- **Linguaggio:** foto di natura da vicino: texture (corteccia, prato, intonaco), foglie, luce radente con ombre nette, verdi caldi, grana fine. Niente persone, orizzonti, cieli. I toni caldi (terracotta, beige) sono un accento raro.
- **Sfocatura sempre presente, mai a zero.** Tre livelli: **a riposo 20 px**, **attiva 8 px**, **pavimento 4 px** (valori provvisori: da confermare con l'effetto «Layer blur» del Figma, che non è leggibile dal codice). Token `--pg-blur-rest/active/floor`, durata 600 ms.
- **Interazione:** a passaggio del mouse e a focus da tastiera la foto scende da riposo ad attiva; su touch con lo scorrimento (la foto si apre entrando verso il centro) o a un tocco; in alternativa una «lente» che riduce la sfocatura solo attorno al cursore. Con movimento ridotto nessuna animazione. La demo è nello styleguide.
- **Testo sulle foto:** sempre con velo scuro al 50% (`--pg-scrim`), contrasto da misurare sul punto più chiaro.
- **Produzione:** non animare `filter` su foto grandi sul telefono: due livelli già sfocati sovrapposti con dissolvenza di opacità; il pavimento è cotto nell'immagine. Poiché non si arriva mai al nitido, le foto si servono a metà risoluzione in AVIF/WebP (obiettivo < 150 KB l'una, da misurare).
- **Problemi trovati:** le 10 immagini del frame pesano ~11 MB in PNG; due foto hanno una **filigrana di terzi** (autore e codice del social Xiaohongshu): non c'è licenza. Serve un registro delle immagini (fonte, autore, licenza) e foto proprie o in licenza.

## Token (3 livelli, come Hederae)
- **Base:** `--pg-forest-900 #1C2E1A`, `--pg-cream-50 #FDFBF4`, `--pg-lime-300 #F4FF8D`; scala di 4 px (4…80); testo 72/56/40/32/24/20/18/16/14/11; raggio 0 e 8.
- **Semantic:** `--pg-surface-light/dark/accent`, `--pg-text-on-light/dark/accent`, `--pg-highlight`, `--pg-scrim`, `--pg-glass`, campi e focus.
- **Componente:** nello styleguide (classi `pg-*`); da portare a componenti Vue/Nuxt.

## Tipografia
Albert Sans (titoli, testo) · IBM Plex Sans (campi, micro-testo). IBM Plex Serif e Inter compaiono una volta ciascuno nel Figma: da togliere.

## Componenti presenti nel frame (candidati)
Navbar · Titolo con parola evidenziata · Statistica · Card livello (Mycelium/Terra/Hederae) · Bottone (primario, secondario, accento) · Campo + bottone (Pianeta.Meter) · Modulo di contatto (campo, select, checkbox) · Elenco contatti · Fascia lime di chiusura · Sezione scura/chiara con linea sottile.

## Regole
1. Tre colori. Il lime è accento; mai testo lime su crema (1,04:1).
2. Angoli vivi; 8 px solo sui campi.
3. Una parola evidenziata per titolo.
4. Testo chiaro solo su superfici scure o velate (scrim 50%).
5. Contenuto 1376 px, sezioni con 80 px sopra e sotto.

## Normalizzazioni rispetto al Figma
| Nel Figma | Nel DS | Perché |
|---|---|---|
| 7,118 / 10,677 / 14,236 px (modulo) | 8 / 11 / 14 | disegno scalato, fuori scala |
| Placeholder forest 50% × opacità 30% (1,3:1) | forest 70% (5,3:1) | non passava il contrasto |
| 4 famiglie di caratteri | 2 | Serif e Inter sono scarti |
| Stati assenti | hover, focus, disabilitato aggiunti | il Figma non li disegna |

## Da decidere o disegnare
- **Mobile e tablet:** il Figma ha solo 1440 px. Titoli 72/56, tre colonne a filo, modulo a 540 px da ripensare.
- **Stati di errore e successo** del modulo, caricamento del Meter.
- **Nomi dei livelli** nel Figma («Frame 357», «Rectangle 249») per la consegna ai componenti.
- **Numeri della home senza fonte:** 99.7% uptime, 100% rinnovabile certificata, −50% peso pagine, 5+ anni. «LCP < 2,5 s» misurato a 2,4–2,6 s.
- **Testo di Terra** («open source… un altro developer può subentrare») contro la decisione del 09/10.

## Prossimo passo proposto
Portare i token in un tema `pianeta-green-v2` del design system Hederae (nel repo privato del sito, non nel repo pubblico `hederae-ds`) e costruire 6 componenti in ordine: bottone, campo, modulo, statistica, card livello, navbar.
