/**
 * Pianeta.Studio · Sito Web
 * ─────────────────────────────────
 * Pagine del sito pianeta.studio — marketing, vendita, area clienti, docs.
 */
import { templateStory } from '../_template.js';
const base = { brand: 'pianeta' };

export default {
  title: 'Pianeta Studio / Sito Web',
  parameters: { layout: 'fullscreen', viewport: { defaultViewport: 'desktop' } },
};

/* ─── MARKETING ─── */
export const Home = {
  name: '🏠 Home',
  render: () => templateStory({ ...base, src: 'pg-home.html', label: 'Pianeta.Studio · Home' }),
};
export const About = {
  name: '👥 Chi siamo',
  render: () => templateStory({ ...base, src: 'pg-about.html', label: 'Pianeta.Studio · About' }),
};
export const Pricing = {
  name: '💰 Pricing',
  render: () => templateStory({ ...base, src: 'pg-pricing.html', label: 'Pianeta.Studio · Pricing' }),
};
export const Contatti = {
  name: '📬 Contatti',
  render: () => templateStory({ ...base, src: 'pg-contatti.html', label: 'Pianeta.Studio · Contatti' }),
};
export const FAQ = {
  name: '❓ FAQ',
  render: () => templateStory({ ...base, src: 'pg-faq.html', label: 'Pianeta.Studio · FAQ' }),
};

/* ─── PRODOTTI ─── */
export const PDP_CMS = {
  name: '📦 PDP · CMS + Sito',
  render: () => templateStory({ ...base, src: 'pg-pdp-cms-sito.html', label: 'Pianeta.Studio · PDP CMS' }),
};
export const PDP_Hosting = {
  name: '📦 PDP · Hosting',
  render: () => templateStory({ ...base, src: 'pg-pdp-hosting.html', label: 'Pianeta.Studio · PDP Hosting' }),
};

/* ─── CONTENUTI ─── */
export const Blog = {
  name: '📰 Blog',
  render: () => templateStory({ ...base, src: 'pg-blog.html', label: 'Pianeta.Studio · Blog' }),
};
export const BlogPost = {
  name: '📝 Blog · Articolo',
  render: () => templateStory({ ...base, src: 'pg-blog-post.html', label: 'Pianeta.Studio · Blog Post' }),
};
export const CaseStudy = {
  name: '🏆 Case Study',
  render: () => templateStory({ ...base, src: 'pg-case-study.html', label: 'Pianeta.Studio · Case Study' }),
};
export const Docs = {
  name: '📚 Documentazione',
  render: () => templateStory({ ...base, src: 'pg-docs.html', label: 'Pianeta.Studio · Docs' }),
};
export const Result = {
  name: '🔍 Risultati ricerca',
  render: () => templateStory({ ...base, src: 'pg-result.html', label: 'Pianeta.Studio · Search' }),
};

/* ─── VENDITA ─── */
export const Checkout = {
  name: '🛒 Checkout',
  render: () => templateStory({ ...base, src: 'pg-checkout.html', label: 'Pianeta.Studio · Checkout' }),
};
export const Payment = {
  name: '💳 Pagamento',
  render: () => templateStory({ ...base, src: 'pg-payment.html', label: 'Pianeta.Studio · Payment' }),
};
export const ThankYou = {
  name: '✅ Thank You',
  render: () => templateStory({ ...base, src: 'pg-thankyou.html', label: 'Pianeta.Studio · Thank You' }),
};

/* ─── ACCOUNT ─── */
export const Login = {
  name: '🔐 Login',
  render: () => templateStory({ ...base, src: 'pg-login.html', label: 'Pianeta.Studio · Login' }),
};
export const Onboarding = {
  name: '🚀 Onboarding',
  render: () => templateStory({ ...base, src: 'pg-onboarding.html', label: 'Pianeta.Studio · Onboarding' }),
};
export const Dashboard = {
  name: '📊 Area Clienti',
  render: () => templateStory({ ...base, src: 'pg-dashboard.html', label: 'Pianeta.Studio · Dashboard' }),
};
export const Meter = {
  name: '🌿 CO₂ Meter',
  render: () => templateStory({ ...base, src: 'pg-meter.html', label: 'Pianeta.Studio · CO₂ Meter' }),
};
export const Firma = {
  name: '✍️ Firma email',
  render: () => templateStory({ ...base, src: 'pg-firma.html', label: 'Pianeta.Studio · Firma' }),
};

/* ─── LEGALE ─── */
export const Privacy = {
  name: '🔒 Privacy Policy',
  render: () => templateStory({ ...base, src: 'pg-privacy.html', label: 'Pianeta.Studio · Privacy' }),
};
export const Termini = {
  name: '📋 Termini di servizio',
  render: () => templateStory({ ...base, src: 'pg-termini.html', label: 'Pianeta.Studio · Termini' }),
};
