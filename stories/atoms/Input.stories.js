export default {
  title: '⬡ Atoms/Input & Form',
  parameters: {
    layout: 'padded',
    docs: { description: { component: 'Input di testo, textarea, select e checkbox. Tutti gli stati: default, focus, error, disabled, read-only.' } },
  },
};

const css = `<style>
  .field { margin-bottom: 24px; max-width: 420px; }
  .field-label {
    display: block; margin-bottom: 6px;
    font-family: var(--font-ui); font-size: 12px; letter-spacing: .06em; text-transform: uppercase;
    color: var(--color-content-secondary);
  }
  .field-hint { margin-top: 5px; font-family: var(--font-body); font-size: 13px; color: var(--color-content-secondary); }
  .field-error-msg { margin-top: 5px; font-family: var(--font-body); font-size: 13px; color: var(--color-feedback-error-text); }
  .input {
    width: 100%; height: 44px; padding: 0 14px;
    background: var(--color-surface-page);
    border: 1.5px solid var(--color-border-default);
    border-radius: var(--radius-sm);
    font-family: var(--font-body); font-size: 15px;
    color: var(--color-content-primary);
    outline: none; box-sizing: border-box;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .input:focus { border-color: var(--color-border-focus); box-shadow: 0 0 0 3px var(--color-brand-muted, rgba(1,62,57,.08)); }
  .input::placeholder { color: var(--color-content-disabled); }
  .input.error { border-color: var(--color-feedback-error-text); }
  .input:disabled { background: var(--color-surface-card); color: var(--color-content-disabled); cursor: not-allowed; }
  .input[readonly] { background: var(--color-surface-raised); }
  .textarea { height: auto; padding: 12px 14px; resize: vertical; min-height: 96px; }
  .input-group { display: flex; gap: 0; }
  .input-group .input { border-radius: var(--radius-sm) 0 0 var(--radius-sm); flex: 1; }
  .input-group .btn-attach {
    height: 44px; padding: 0 16px; border: 1.5px solid var(--color-border-default); border-left: none;
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    background: var(--color-surface-card); cursor: pointer;
    font-family: var(--font-ui); font-size: 12px; color: var(--color-content-secondary);
    white-space: nowrap;
  }
  .select {
    appearance: none; -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236D6D69' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;
  }
  .checkbox-row { display: flex; align-items: flex-start; gap: 10px; cursor: pointer; margin-bottom: 12px; }
  .checkbox-box {
    width: 18px; height: 18px; border-radius: 4px; flex-shrink: 0; margin-top: 1px;
    border: 1.5px solid var(--color-border-default);
    background: var(--color-surface-page);
    display: flex; align-items: center; justify-content: center;
  }
  .checkbox-box.checked {
    background: var(--color-interactive-primary-bg);
    border-color: var(--color-interactive-primary-bg);
  }
  .checkbox-text { font-family: var(--font-body); font-size: 14px; color: var(--color-content-primary); line-height: 1.4; }
  .section-label { font-family: var(--font-ui); font-size: 11px; letter-spacing:.12em; text-transform:uppercase; color: var(--color-content-secondary); margin: 32px 0 16px; display: block; }
</style>`;

export const AllInputs = {
  name: 'Tutti gli input',
  render: () => `${css}
<div style="padding:32px;max-width:600px;">
  <h1 style="font-family:var(--font-display);font-size:32px;font-weight:500;color:var(--color-content-primary);margin:0 0 6px;">Input & Form</h1>
  <p style="font-family:var(--font-body);font-size:14px;color:var(--color-content-secondary);margin:0 0 36px;">Elementi di input con tutti gli stati.</p>

  <span class="section-label">Text input — stati</span>

  <div class="field">
    <label class="field-label">Default</label>
    <input class="input" type="text" placeholder="Es. economia circolare…">
    <p class="field-hint">Digita una parola chiave, un titolo o un autore.</p>
  </div>

  <div class="field">
    <label class="field-label">Focus (attivo)</label>
    <input class="input" type="text" value="energia rinnovabile" style="border-color:var(--color-border-focus);box-shadow:0 0 0 3px var(--color-brand-muted,rgba(1,62,57,.08));">
  </div>

  <div class="field">
    <label class="field-label">Errore</label>
    <input class="input error" type="email" value="non-valido@@">
    <p class="field-error-msg">Inserisci un indirizzo email valido.</p>
  </div>

  <div class="field">
    <label class="field-label">Disabilitato</label>
    <input class="input" type="text" value="Campo non modificabile" disabled>
  </div>

  <div class="field">
    <label class="field-label">Read-only</label>
    <input class="input" type="text" value="https://fondazione.org/doc/12345" readonly>
  </div>

  <span class="section-label">Input con bottone (search bar)</span>
  <div class="field" style="max-width:500px;">
    <div class="input-group">
      <input class="input" type="search" placeholder="Cerca nella biblioteca…">
      <button class="btn-attach">Cerca</button>
    </div>
  </div>

  <span class="section-label">Textarea</span>
  <div class="field" style="max-width:500px;">
    <label class="field-label">Descrizione</label>
    <textarea class="input textarea" placeholder="Inserisci una descrizione…"></textarea>
  </div>

  <span class="section-label">Select</span>
  <div class="field">
    <label class="field-label">Tipo documento</label>
    <select class="input select">
      <option value="">Tutti i tipi</option>
      <option>Rapporto</option>
      <option>Policy brief</option>
      <option>Working paper</option>
      <option>Dataset</option>
    </select>
  </div>

  <span class="section-label">Checkbox</span>
  <div style="max-width:420px;">
    <label class="checkbox-row">
      <div class="checkbox-box checked">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span class="checkbox-text">Mostra solo documenti aperti</span>
    </label>
    <label class="checkbox-row">
      <div class="checkbox-box"></div>
      <span class="checkbox-text">Includi documenti archiviati</span>
    </label>
    <label class="checkbox-row">
      <div class="checkbox-box" style="opacity:.4;cursor:not-allowed;"></div>
      <span class="checkbox-text" style="opacity:.4;">Opzione non disponibile</span>
    </label>
  </div>
</div>
  `,
};
