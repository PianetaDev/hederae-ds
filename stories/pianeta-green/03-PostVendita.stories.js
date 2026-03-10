import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.Green / 03 PostVendita',
};

export const Login = () => templateStory({
  src: 'pg-login.html',
  label: '🟢 Done Login',
  brand: 'pianeta-green',
  state: 'DONE',
});
Login.storyName = '🟢 Done Login';
export const Onboarding = () => templateStory({
  src: 'pg-onboarding.html',
  label: '🟢 Done Onboarding',
  brand: 'pianeta-green',
  state: 'DONE',
});
Onboarding.storyName = '🟢 Done Onboarding';
export const DashboardCliente = () => templateStory({
  src: 'pg-dashboard.html',
  label: '🔴 WIP Dashboard Cliente',
  brand: 'pianeta-green',
  state: 'WIP',
});
DashboardCliente.storyName = '🔴 WIP Dashboard Cliente';
export const Documentazione = () => templateStory({
  src: 'pg-docs.html',
  label: '🔴 WIP Documentazione',
  brand: 'pianeta-green',
  state: 'WIP',
});
Documentazione.storyName = '🔴 WIP Documentazione';
