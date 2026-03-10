/**
 * Shared helper — renders a full-page template inside an iframe
 * with a slim Hederae DS toolbar above it.
 *
 * @param {Object} opts
 * @param {string} opts.src       - path to HTML file (served from staticDirs)
 * @param {string} opts.label     - human-readable template name
 * @param {string} opts.brand     - brand slug, e.g. 'susdef' | 'agesci' | 'generic'
 * @param {string} [opts.state]   - optional demo state label shown in toolbar
 */
export function templateStory({ src, label, brand = 'susdef', state = '' }) {
  const brandColors = {
    susdef:          { bg: '#013E39', accent: '#D8EC28', text: '#FFFFFF' },
    agesci:          { bg: '#000000', accent: '#FFFFFF', text: '#FFFFFF' },
    sisal:           { bg: '#1A1A2E', accent: '#FFD600', text: '#FFFFFF' },
    epos:            { bg: '#152843', accent: '#E8A520', text: '#FFFFFF' },
    'pianeta-green': { bg: '#0D3D26', accent: '#5BD48A', text: '#FFFFFF' },
    generic:         { bg: '#111111', accent: '#D8EC28', text: '#FFFFFF' },
  };
  const c = brandColors[brand] || brandColors.generic;

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'display:flex;flex-direction:column;width:100%;height:100vh;';

  wrapper.innerHTML = `
    <div style="
      display:flex;align-items:center;gap:16px;
      padding:9px 20px;
      background:${c.bg};
      font-family:'IBM Plex Mono',monospace;font-size:11px;
      color:${c.text};flex-shrink:0;
      border-bottom:1px solid rgba(255,255,255,0.12);
    ">
      <span style="opacity:0.45;letter-spacing:0.1em;text-transform:uppercase;">Hederae DS</span>
      <span style="opacity:0.2;">·</span>
      <span style="opacity:0.8;">${label}</span>
      ${state ? `<span style="padding:2px 8px;border:1px solid rgba(255,255,255,0.2);border-radius:10px;opacity:0.55;font-size:10px;">${state}</span>` : ''}
      <a href="page-templates/${src}" target="_blank" style="
        margin-left:auto;color:${c.accent};text-decoration:none;
        display:flex;align-items:center;gap:5px;opacity:0.8;
        font-size:10px;letter-spacing:0.05em;
      ">Apri in fullscreen ↗</a>
    </div>
    <iframe
      src="page-templates/${src}"
      style="flex:1;width:100%;border:none;"
      title="${label}"
      loading="lazy"
    ></iframe>
  `;
  return wrapper;
}
