import { templateStory } from '../_template.js';

export default {
  title: '🌿 Pianeta.Green / 01 Marketing',
};

export const Home = () => templateStory({
  src: 'pg-home.html',
  label: '🟢 Done Home',
  brand: 'pianeta-green',
  state: 'DONE',
});
Home.storyName = '🟢 Done Home';
export const Chisiamo = () => templateStory({
  src: 'pg-about.html',
  label: '🔴 WIP Chi siamo',
  brand: 'pianeta-green',
  state: 'WIP',
});
Chisiamo.storyName = '🔴 WIP Chi siamo';
export const IlMeter = () => templateStory({
  src: 'pg-meter.html',
  label: '🟢 Done Il Meter',
  brand: 'pianeta-green',
  state: 'DONE',
});
IlMeter.storyName = '🟢 Done Il Meter';
export const RisultatoAnalisi = () => templateStory({
  src: 'pg-result.html',
  label: '🟡 Review Risultato Analisi',
  brand: 'pianeta-green',
  state: 'REVIEW',
});
RisultatoAnalisi.storyName = '🟡 Review Risultato Analisi';
export const Blog = () => templateStory({
  src: 'pg-blog.html',
  label: '🔴 WIP Blog',
  brand: 'pianeta-green',
  state: 'WIP',
});
Blog.storyName = '🔴 WIP Blog';
export const ArticoloBlog = () => templateStory({
  src: 'pg-blog-post.html',
  label: '🔴 WIP Articolo Blog',
  brand: 'pianeta-green',
  state: 'WIP',
});
ArticoloBlog.storyName = '🔴 WIP Articolo Blog';
export const CaseStudy = () => templateStory({
  src: 'pg-case-study.html',
  label: '🔴 WIP Case Study',
  brand: 'pianeta-green',
  state: 'WIP',
});
CaseStudy.storyName = '🔴 WIP Case Study';
