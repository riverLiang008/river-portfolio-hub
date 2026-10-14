# Personal Website / Portfolio Hub — Architecture v1

## Purpose
A lightweight, English-first personal portfolio hub, linked from LinkedIn. It is **not** River (the literary/ideas website), nor Odyssey (an independent design documentation and demo project), nor a video hosting site.

## Audience and positioning
For prospective employers, HCI/CSCW research groups, collaborators and curious readers. Show verifiable work first, then skills and background. Avoid overclaiming unvalidated research or prototype functionality.

## Navigation
- Home: identity, concise statement, Featured Work, contact links
- Work: curated index of systems/design, research, writing and films
- About: short biography, education, experience, CV link when approved
- Contact: email and external profiles when supplied

## Featured Work (proposed order)
1. **Odyssey** — independent human–AI collaboration design and interactive prototype. Link to separate design documentation/demo. Do not claim an operational agent runtime or kernel.
2. **Research — AI Governance Stability** — *Stability of AI Governance Systems: A Coupled Dynamics Model of Public Trust and Social Disruptions*, Jiaqi Lai, Hou Liang, Weihong Huang, arXiv:2603.20248 (v2 July 26, 2026). Link https://arxiv.org/abs/2603.20248 . Label accurately as **arXiv preprint**, not peer-reviewed publication unless verified separately. Summary: coupled Friedkin–Johnsen opinion dynamics and Hawkes-inspired controversy intensity; spectral stability criterion.
3. **River — Writing & Ideas** — independent site for literary collections, SSTM and Agency Dynamic. Link only after public site exists.

首版核心内容为 Odyssey、arXiv 论文与 River。YouTube 尚未发布的内容不得伪装成已上线作品；在有实际发布内容、已核实且获批准的链接前，不展示为可观看的作品或提供观看按钮。Shadow AI 暂列待确认内容，不作为首版必需项目。

## Content taxonomy
Use projects as primary units and skill labels as secondary metadata. Do not partition by audience (researchers may value demos; employers may value research). Each card should have title, type, one-sentence outcome or question, status, tags, and one or more verified external links.

## Layout and tone
Editorial, restrained, accessible, responsive, mobile-first. English-first with room for Chinese localization later. No stock illustrations or placeholder social accounts. Prioritize typography and evidence over self-promotion. No exaggerated claims about academic validation or execution capability.

### 已确认的视觉方向
- 视觉参考：独立研究者主页 × 文学刊物 × 极简设计工作室。
- 配色：黑、白、灰为主，允许一种低饱和强调色；具体色值待设计时确定。
- 字体：有气质的衬线标题，搭配清晰的无衬线正文；具体字体待设计时确定。
- 布局：宽松留白、严格对齐、清晰的文字层级。
- 交互：轻量 Hover 和页面过渡，不做复杂动画；支持减少动态效果的系统偏好。
- 避免：渐变光晕、玻璃拟态、技能进度条、浮夸口号、无意义的 3D 图形。

## Content drafting workflow
Communicate with the owner in Chinese. For longer manuscripts and copy, draft in Chinese first and obtain the owner's content confirmation before adapting into English. The final website remains English-first. This is a repository-wide collaboration rule; see `../AGENTS.md`.

## Technical scope
Small static hub, not a CMS. Recommend Vite + TypeScript + vanilla CSS or a minimal component framework if the nearby odysseyDesign repository reveals a clearly reusable setup. Static data in a typed module or JSON. GitHub Pages compatible, with configurable base path; optional custom domain later. No API/backend/auth/analytics by default.

## Suggested structure
```
portfolioHub/
  README.md
  docs/
    ARCHITECTURE.md
    TODO.md
  package.json
  index.html
  public/
    favicon.svg
  src/
    main.ts
    styles.css
    data/
      projects.ts
    components/
      ProjectCard.ts
  .github/
    workflows/
      deploy.yml
```
Adjust based on actual framework choice; don't generate unused complexity.

## Separation of concerns
- Personal Website: thin link-and-context hub only.
- River: separate literary/ideas publishing project. Fiction remains private and must never be imported or referenced as public content.
- Odyssey: separate repo, design docs and interactive demo; no code/document copying into hub.
- YouTube: independent video hosting.
- LinkedIn: points to the hub.

## Public-content safeguards
Do not copy private archives, drafts, colleagues' details, company code, datasets, or unpublished writing into this repository. Verify external links before adding. No fake contact details, placeholder credentials, fabricated metrics, invented employers or publications.

## Acceptance criteria for v1
- Home, Work, About, Contact navigable and responsive.
- Odyssey, arXiv paper and River represented accurately, with unpublished links omitted or marked internally in source only (no dead public buttons). Unpublished YouTube content must not appear as released work.
- Research paper cited with exact title, authors and preprint status.
- Build succeeds and deployment configuration documented; do not push/deploy without approval.
- No River private files or Odyssey source copied into repository.

## Open decisions
- Repository location confirmed: current `portfolioHub`; GitHub Pages URL pending
- Final bio, CV, email, GitHub, LinkedIn and YouTube URLs
- Odyssey documentation/demo URLs and whether to show demo screenshot
- Whether Shadow AI thesis has an approved public link
- Framework selected: Vite + TypeScript + vanilla CSS; adjacent odysseyDesign uses VitePress, which is unnecessary for this small portfolio hub
