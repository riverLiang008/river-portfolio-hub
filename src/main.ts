import './styles.css';
import { projects, profile, links } from './data/projects';

const pages = ['home', 'work', 'about', 'contact'] as const;
type Page = typeof pages[number];
const labels: Record<Page, string> = { home: 'Home', work: 'Work', about: 'About', contact: 'Contact' };
const escape = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function projectList() {
  return `<div class="project-list">${projects.map((p, i) => `<article class="project" aria-labelledby="${p.id}">
    <span class="project-number">0${i + 1}</span>
    <div><p class="eyebrow">${escape(p.type)}</p><h3 id="${p.id}">${escape(p.title)}</h3>
    <p class="project-description">${escape(p.description)}</p>
    ${p.citation ? `<p class="citation">${escape(p.citation)}</p>` : ''}
    <ul class="tags" aria-label="主题">${p.tags.map(t => `<li>${escape(t)}</li>`).join('')}</ul></div>
    <div class="project-meta"><span>${escape(p.status)}</span>${p.url ? `<a class="text-link" href="${escape(p.url)}">阅读预印本 <span aria-hidden="true">↗</span></a>` : ''}</div>
  </article>`).join('')}</div>`;
}

function projectCards() {
  const cards = [
    { category: 'DESIGN', title: 'ODYSSEY', subtitle: 'Human–AI collaboration', url: links.odyssey },
    { category: 'SCIENCE', title: 'RESEARCH', subtitle: 'AI governance stability', url: links.research },
    { category: 'LITERATURE', title: 'RIVER', subtitle: 'Writing & ideas', url: links.river },
    { category: 'MEDIA', title: 'FILMS', subtitle: 'Visual essays', url: links.films },
  ];
  return `<div class="atlas-grid">${cards.map((card, i) => `<a class="atlas-card" href="${escape(card.url)}" target="_blank" rel="noopener noreferrer" aria-label="${card.title}: ${card.subtitle}"><span class="eyebrow">0${i + 1} / ${card.category}</span><span class="card-arrow" aria-hidden="true">↗</span><h2>${card.title}</h2><p>${card.subtitle}</p></a>`).join('')}</div>`;
}

function content(page: Page): string {
  if (page === 'home') return `<section class="hero" lang="en"><h1>One thing leads to another.</h1><p class="intro">A collection of projects in technology, research, writing, and film.</p></section><section aria-label="Selected work" lang="en">${projectCards()}</section>${content('about')}${content('contact')}`;
  if (page === 'work') return `<section class="page-heading"><p class="eyebrow">Index / 01</p><h1>Work</h1><p class="intro">设计、研究与写作。</p></section><section aria-label="项目索引">${projectList()}</section>`;
  if (page === 'about') return `<section id="about" class="home-section prose" lang="en" aria-labelledby="about-heading"><h2 id="about-heading">A little about me.</h2><p>I'm River, a software developer with a background in software engineering and information system. My interests span human–AI interaction, research, literature, and visual storytelling.</p><a class="text-link" href="${escape(links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></section>`;
  return `<section id="contact" class="home-section prose" lang="en" aria-labelledby="contact-heading"><h2 id="contact-heading">Get in touch.</h2><p>For collaborations, research, or just a conversation.</p><a class="text-link" href="mailto:${escape(links.email)}">Email ↗</a></section>`;
}

function render(focus = false) {
  const [hash, projectId] = location.hash.slice(1).split('/');
  const page: Page = pages.includes(hash as Page) ? hash as Page : 'home';
  document.title = `${labels[page]} — ${profile.name}`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div class="shell"><header class="site-header"><a class="wordmark" href="#home">${escape(profile.name)}</a><nav aria-label="主导航">${pages.filter(p => p !== 'home').map(p => `<a href="#${p}" ${p === page ? 'aria-current="page"' : ''}>${labels[p]}</a>`).join('')}<span aria-hidden="true">↗</span></nav></header><main id="main" tabindex="-1">${content(page === 'about' || page === 'contact' ? 'home' : page)}</main><footer lang="en"><span>INDEPENDENT WORK / 2026</span><a href="#work">EXPLORE THE COLLECTION <span aria-hidden="true">↗</span></a></footer></div>`;
  if (focus) {
    document.querySelector<HTMLElement>('#main')!.focus();
    const target = page === 'about' || page === 'contact' ? document.getElementById(page) : page === 'work' && projectId ? document.getElementById(projectId) : null;
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView({ block: 'start' });
    } else window.scrollTo(0, 0);
  }
}
window.addEventListener('hashchange', () => {
  // Skip-link targets must keep their native focus behavior.
  if (location.hash !== '#main') render(true);
});
render(location.hash === '#about' || location.hash === '#contact');
