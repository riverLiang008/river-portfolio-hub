# Codex — Initialize Personal Website Hub

We have approved the overall **Personal Website / Portfolio Hub** architecture. This is a NEW, independent project, not the River literary site and not Odyssey.

Read `ARCHITECTURE.md` and `TODO.md` supplied with this request. Use them as the source of truth.

1. Inspect the current workspace and locate the nearby `odysseyDesign` repository in **read-only mode** to learn the website tooling and GitHub Pages deployment pattern. Do not modify it.
2. Use the existing `portfolioHub` repository as the project root. Do not create another `personal-website` folder or initialize inside `riverWritings` or `odysseyDesign`.
3. Initialize a minimal, clean, English-first static portfolio hub. Prefer the simplest viable stack, borrowing compatible patterns from `odysseyDesign` when justified. Implement Home, Work, About and Contact. Keep all project metadata in one easy-to-edit source file.
4. Include these project entries with accurate labels:
   - Odyssey — independent design documentation and interactive prototype, **no production agent runtime/kernel**. Do not invent its URL.
   - Research paper — *Stability of AI Governance Systems: A Coupled Dynamics Model of Public Trust and Social Disruptions* (Jiaqi Lai, Hou Liang, Weihong Huang), **arXiv preprint**, https://arxiv.org/abs/2603.20248 . Do not describe it as peer reviewed.
   - NTU Shadow AI research — pending confirmation, not required for v1; no unpublished thesis or dataset links unless explicitly approved.
   - River — separate literary and conceptual writing site, future external link; do not expose its private manuscripts.
   - YouTube — include only when actual published content and a verified, approved URL are available; do not present unpublished content as released work or invent a channel URL or published videos.
5. Include an unobtrusive note in project data for entries with no verified public URL; render no dead links.
6. Add responsive styles, semantic HTML, keyboard-accessible navigation and a GitHub Pages-ready build configuration. Do not push or deploy.
   Follow the confirmed visual direction in ARCHITECTURE.md: independent researcher homepage × literary journal × minimal design studio; monochrome with at most one muted accent, serif headings and sans-serif body, generous whitespace and strict alignment, light hover/page transitions only. Avoid gradient glows, glassmorphism, skill progress bars, inflated slogans and meaningless 3D graphics.
7. Update README and TODO with what is actually implemented. Run available build/check commands and report results.

Strict boundaries: do not copy private files from `riverWritings`; do not modify Odyssey or River repositories; do not fabricate personal details, citations, metrics or social links; do not git commit/push/deploy without approval.

At the end, report the created absolute path, chosen framework and reason, file tree, build result, any unresolved URLs/details, and exact local preview command. Respond in Chinese.
