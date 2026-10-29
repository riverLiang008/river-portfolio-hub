import './styles.css';
import { expertise } from './data/expertise';
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
    <div class="project-meta"><span>${escape(p.status)}</span>${p.url ? `<a class="text-link" href="${escape(p.url)}">${escape(p.urlLabel ?? '阅读预印本')} <span aria-hidden="true">↗</span></a>` : ''}${(p.resources ?? []).map(resource => `<a class="text-link" href="${escape(resource.url)}">${escape(resource.label)} ↗</a>`).join('')}</div>
  </article>`).join('')}</div>`;
}

function projectCards() {
  const cards = [
    { category: 'DESIGN', title: 'ODYSSEY', subtitle: 'Product / Software', url: links.odyssey },
    { category: 'SCIENCE', title: 'RESEARCH', subtitle: 'Models / Analysis', url: links.research },
    { category: 'LITERATURE', title: 'RIVER', subtitle: 'Writing / Editorial', url: links.river },
    { category: 'MEDIA', title: 'FILMS', subtitle: 'Visual Essays', url: links.films },
  ];
  return `<div class="atlas-grid">${cards.map((card, i) => `<a class="atlas-card" href="${escape(card.url)}" aria-label="${card.title}: ${card.subtitle}"><span class="eyebrow">0${i + 1}</span><span class="card-arrow" aria-hidden="true">↗</span><h2>${card.title}</h2><p>${card.subtitle}</p></a>`).join('')}</div>`;
}

function content(page: Page): string {
  if (page === 'home') return `<div class="editorial-top" lang="en"><section class="hero"><p class="eyebrow">INDEPENDENT WORK / PRACTICE</p><h1>One thing leads to another.</h1><p class="intro">Exploring ideas through engineering, research, writing, and film.<br>A collection of projects, working methods, and experiments.</p></section><section class="selected-work" aria-labelledby="selected-heading"><h2 class="eyebrow" id="selected-heading">SELECTED WORK</h2>${projectCards()}</section><section class="expertise-intro" aria-labelledby="expertise-heading"><p class="eyebrow">EXPERTISE / CAPABILITIES & PRACTICE</p><h2 id="expertise-heading">What I do.</h2><p>Approach, practical experience, and selected evidence across six fields.</p><nav class="jump-links" aria-label="Expertise fields">${expertise.map((e,i)=>`<a href="#home/${e.id}">0${i+1} ${escape(e.short)}</a>`).join('')}</nav></section></div><section class="expertise-list" lang="en" aria-label="Capabilities and practice">${expertise.map((e,i)=>`<article class="expertise-card" id="${e.id}"><div class="field-heading"><p class="eyebrow">0${i+1} / FIELD</p><h3>${escape(e.title)}</h3><p>${escape(e.subtitle)}</p></div><div class="field-body"><div><h4>APPROACH</h4><p>${escape(e.approach)}</p></div><div><h4>PRACTICE</h4><p>${escape(e.practice)}</p></div><div><h4>EVIDENCE</h4><p class="evidence">${i===0 ? `<a href="${escape(links.linkedin)}">LinkedIn ↗</a><a href="${escape(links.odysseyDemo)}">Odyssey Demo ↗</a><a href="${escape(links.odyssey)}">Odyssey Docs ↗</a>` : i===4 ? '<span>Film — In Production</span>' : i===2 ? `<a href="${escape(links.research)}">Research ↗</a>` : i===3 ? `<a href="${escape(links.river)}">River — Writing Samples ↗</a>` : i===5 ? `<a href="${escape(links.river)}">River ↗</a><a href="${escape(links.odyssey)}">Odyssey Docs ↗</a><a href="${escape(links.odysseyDemo)}">Demo ↗</a>` : `<a href="${escape(links.odyssey)}">Odyssey Docs ↗</a><a href="${escape(links.odysseyDemo)}">Demo ↗</a>${i === 1 ? `<a href="${escape(links.figma)}">Figma UI Design ↗</a>` : ''}`}</p></div></div></article>`).join('')}</section>`;
  if (page === 'work') return `<section class="page-heading"><p class="eyebrow">Index / 01</p><h1>Work</h1><p class="intro">设计、研究与写作。</p></section><section aria-label="项目索引">${projectList()}</section>`;
  if (page === 'about') return `<section id="about" class="home-section prose" lang="en" aria-labelledby="about-heading"><h2 id="about-heading">A little about me.</h2><p>I'm River, a software developer with a background in software engineering and information system. My interests span human–AI interaction, research, literature, and visual storytelling.</p><a class="text-link" href="${escape(links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></section>`;
  return `<section id="contact" class="home-section prose" lang="en" aria-labelledby="contact-heading"><h2 id="contact-heading">Get in touch.</h2><p>For collaborations, research, or just a conversation.</p><ul class="contact-emails" aria-label="Email addresses">${links.emails.map(email => `<li><a class="text-link" href="mailto:${escape(email)}">${escape(email)} ↗</a></li>`).join('')}</ul><a class="text-link" href="${escape(links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></section>`;
}

function render(focus = false) {
  const [hash, projectId] = location.hash.slice(1).split('/');
  const page: Page = pages.includes(hash as Page) ? hash as Page : 'home';
  document.title = `${labels[page]} — ${profile.name}`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div class="shell ${page === 'home' ? 'is-home' : ''}"><header class="site-header"><a class="wordmark" href="#home">${escape(profile.name)}</a><nav aria-label="主导航">${pages.filter(p => p !== 'home').map(p => `<a href="#${p}" ${p === page ? 'aria-current="page"' : ''}>${labels[p]}</a>`).join('')}<span aria-hidden="true">↗</span></nav></header><main id="main" tabindex="-1">${content(page)}</main><footer lang="en"><span>${escape(profile.name)} / <a href="#about">ABOUT ↗</a></span><a href="#contact">CONTACT ↗</a></footer></div>`;
  if (focus) {
    document.querySelector<HTMLElement>('#main')!.focus();
    const target = page === 'about' || page === 'contact' ? document.getElementById(page) : (page === 'work' || page === 'home') && projectId ? document.getElementById(projectId) : null;
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
render(Boolean(location.hash));
