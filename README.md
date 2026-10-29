# Portfolio Hub

独立的个人作品入口，连接 Odyssey、AI 治理研究与 River。使用 GitHub Pages 托管。

## 本地运行

需要 Node.js 22.12+（建议 Node.js 24）与 npm。

```sh
npm ci
npm run dev
```

默认地址为 http://127.0.0.1:5173，以终端实际输出为准。

```sh
npm run check
npm run build
npm run preview
```

生产预览默认地址为 http://127.0.0.1:4173。

## 实现与维护

- Vite + TypeScript + 原生 CSS，无后端，无外部字体请求。
- `src/data/projects.ts`：全部项目资料、个人简介和联系方式；缺失链接的内部备注不会渲染。
- `src/main.ts`：Home、Work、About、Contact，使用 hash 导航以适配静态托管和直接刷新。
- `src/styles.css`：采用 Figma「12 / Editorial — Asymmetric Hero」（932:219）：45% 深色首屏、纸白正文、四列作品入口和六个能力领域，支持手机布局与减少动态效果。
- `docs/`：架构、初始化说明与进度；协作规则见 `AGENTS.md`。

首页使用用户提供 Figma 中的英文短文案，名称为 RIVER LIANG；详情页仍使用中文草稿。较长中文文稿经用户确认后再转为英文，届时同步修改 HTML 的 `lang`、描述与可访问性标签。首页英文区域单独标记 `lang="en"`。设计稿中的 FILMS 暂不展示，等待有可公开作品后再加入。

## GitHub Pages

`vite.config.ts` 默认使用相对资源路径 `./`，支持仓库子目录和自定义域名。需要固定路径时运行：

```sh
npm run build -- --base=/river-portfolio-hub/
```

`.github/workflows/deploy.yml` 支持推送到 `main` 后自动部署，也支持手动触发，与相邻 Odyssey 仓库采用相同的 Pages 发布方式。仓库 Pages 已启用，构建来源为 GitHub Actions。网站地址：https://riverliang008.github.io/river-portfolio-hub/ 。部署状态见仓库 Actions。

## 发布前仍需确认

个人姓名、简介、教育与经历、CV、联系方式；Odyssey 与 River 的公开 URL；论文链接和引文核验；英文文案与浏览器视觉验收。YouTube 无已发布内容，当前不展示。Shadow AI 保留为待确认范围，不进入首版项目数据。

已只读参考相邻 `odysseyDesign/odyssey-architecture` 的 VitePress 工具与 Pages 工作流；未复制其项目内容或改动相邻仓库。此站是作品入口，因此使用更轻量的 Vite 而非文档框架。

## 当前验证结果

`npm run build` 已通过（包含 TypeScript 检查），生产预览在 4175 端口返回 HTTP 200。4173 端口在验证时被其他进程占用，可使用 `npm run preview -- --port 4175 --strictPort`。当前环境没有可用浏览器，桌面与手机视觉、键盘操作验收仍待完成。

## 2026-10-29 UI 更新

已切换到方案 12，能力说明沿用选定设计稿原文，未另写英文长稿。六个能力入口支持 hash 深链；About、Contact 为独立视图。Odyssey 和 Films 的占位外链改为站内项目或制作状态入口。其余个人联系方式仍需补齐。新版无静态图片素材，不依赖临时 Figma URL。

新版 TypeScript 与生产构建通过；当前工具未连接浏览器，桌面和手机的实际渲染验收仍待完成。

已依据用户提供的 riverWritings/docs/Links Collection.md 接入 Odyssey Docs、Demo、Figma UI Design、Research、River 英文作品归档和 LinkedIn。Contact 在未提供公开邮箱时使用 LinkedIn；Films 仍指向站内制作状态。

Contact 已按用户确认加入四个公开邮箱，以用户提供顺序展示，并保留 LinkedIn。
