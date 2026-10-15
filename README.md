# Portfolio Hub

独立的个人作品入口，连接 Odyssey、AI 治理研究与 River。当前为本地初版，尚未发布。

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
- `src/styles.css`：黑白灰、低饱和橄榄灰强调色、系统衬线标题与无衬线正文、响应式布局和减少动态效果支持。
- `docs/`：架构、初始化说明与进度；协作规则见 `AGENTS.md`。

目前使用简短中文草稿，身份名称暂为 Portfolio Hub。较长中文文稿经用户确认后再转为英文，届时同步修改 HTML 的 `lang`、描述与可访问性标签。

## GitHub Pages

`vite.config.ts` 默认使用相对资源路径 `./`，支持仓库子目录和自定义域名。需要固定路径时运行：

```sh
npm run build -- --base=/river-portfolio-hub/
```

`.github/workflows/deploy.yml` 支持推送到 `main` 后自动部署，也支持手动触发，与相邻 Odyssey 仓库采用相同的 Pages 发布方式。仓库 Pages 的构建来源需要设为 GitHub Actions。当前仅已准备本地配置，尚未推送此次修改或运行部署工作流；公开访问状态尚未核实。

## 发布前仍需确认

个人姓名、简介、教育与经历、CV、联系方式；Odyssey 与 River 的公开 URL；论文链接和引文核验；英文文案与浏览器视觉验收。YouTube 无已发布内容，当前不展示。Shadow AI 保留为待确认范围，不进入首版项目数据。

已只读参考相邻 `odysseyDesign/odyssey-architecture` 的 VitePress 工具与 Pages 工作流；未复制其项目内容或改动相邻仓库。此站是作品入口，因此使用更轻量的 Vite 而非文档框架。

## 当前验证结果

`npm run build` 已通过（包含 TypeScript 检查），生产预览在 4175 端口返回 HTTP 200。4173 端口在验证时被其他进程占用，可使用 `npm run preview -- --port 4175 --strictPort`。当前环境没有可用浏览器，桌面与手机视觉、键盘操作验收仍待完成。
