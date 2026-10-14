import './styles.css';
import { projects, profile } from './data/projects';

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

function content(page: Page) {
  if (page === 'home') return `<section class="hero"><p class="eyebrow">Research · Design · Writing</p><h1>系统、研究，<br>与文字之间。</h1><p class="intro">这里汇集 Odyssey、AI 治理研究与 River，<br class="desktop-break">连接设计实践、研究问题和写作。</p><a class="text-link" href="#work">浏览作品 <span aria-hidden="true">↗</span></a></section><section aria-labelledby="selected"><div class="section-heading"><h2 id="selected">Selected work</h2><span>01 — 03</span></div>${projectList()}</section>`;
  if (page === 'work') return `<section class="page-heading"><p class="eyebrow">Index / 01</p><h1>Work</h1><p class="intro">设计、研究与写作。</p></section><section aria-label="项目索引">${projectList()}</section>`;
  if (page === 'about') return `<section class="page-heading"><p class="eyebrow">Background / 02</p><h1>About</h1></section><section class="prose"><h2>关于我</h2><p>${profile.bio ? escape(profile.bio) : '个人简介正在整理。'}</p><p>你可以先从作品了解这里关注的主题：人机协作、AI 治理，以及文学与思想写作。</p><a class="text-link" href="#work">查看作品 <span aria-hidden="true">↗</span></a></section>`;
  return `<section class="page-heading"><p class="eyebrow">Correspondence / 03</p><h1>Contact</h1></section><section class="prose"><h2>保持联系</h2>${profile.contacts.length ? `<ul class="contact-list">${profile.contacts.map(c => `<li><a class="text-link" href="${escape(c.url)}">${escape(c.label)} ↗</a></li>`).join('')}</ul>` : '<p>联系方式整理后将在这里更新。</p>'}</section>`;
}

function render(focus = false) {
  const hash = location.hash.slice(1);
  const page: Page = pages.includes(hash as Page) ? hash as Page : 'home';
  document.title = `${labels[page]} — ${profile.name}`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div class="shell"><header class="site-header"><a class="wordmark" href="#home">${escape(profile.name)}<span class="brand-dot" aria-hidden="true"></span></a><nav aria-label="主导航">${pages.map(p => `<a href="#${p}" ${p === page ? 'aria-current="page"' : ''}>${labels[p]}</a>`).join('')}</nav></header><main id="main" tabindex="-1">${content(page)}</main><footer><span>Research, design & the written word.</span><a href="#home">Portfolio Hub <span aria-hidden="true">↑</span></a></footer></div>`;
  if (focus) {
    document.querySelector<HTMLElement>('#main')!.focus();
    window.scrollTo(0, 0);
  }
}
window.addEventListener('hashchange', () => {
  // Skip-link targets must keep their native focus behavior.
  if (location.hash !== '#main') render(true);
});
render();
