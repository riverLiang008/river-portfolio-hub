export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  status: string;
  tags: string[];
  url?: string;
  citation?: string;
  internalNote?: string;
}

// 中文文案待审阅确认，确认后再改写为英文。缺失链接仅在数据中记录。
export const projects: Project[] = [
  {
    id: 'odyssey', title: 'Odyssey', type: 'Systems & Design',
    description: '围绕人机协作的独立设计探索，以设计文档和交互原型呈现。',
    status: '设计文档与交互原型', tags: ['Human–AI collaboration', 'Interaction design'],
    internalNote: '公开文档和演示 URL 待提供并核实；不代表可运行的 agent runtime 或 kernel。',
  },
  {
    id: 'governance', title: 'Stability of AI Governance Systems', type: 'Research',
    description: '研究公众信任与社会争议之间的耦合动态，以及 AI 治理系统的稳定性。',
    status: 'arXiv 预印本', tags: ['AI governance', 'Dynamical systems'],
    url: 'https://arxiv.org/abs/2603.20248',
    citation: 'Stability of AI Governance Systems: A Coupled Dynamics Model of Public Trust and Social Disruptions — Jiaqi Lai, Hou Liang, Weihong Huang. arXiv:2603.20248. Preprint.',
    internalNote: '链接及引文来自已提供架构，发布前需核验；不得称为同行评审论文。',
  },
  {
    id: 'river', title: 'River', type: 'Writing & Ideas',
    description: '独立的文学与思想写作项目，内容在单独的网站中组织。',
    status: '独立写作项目', tags: ['Writing', 'Ideas'],
    internalNote: '公开站点 URL 待提供；不导入或公开私人手稿。',
  },
];

export const profile = {
  name: 'Portfolio Hub',
  // 只填入经确认、可公开的个人信息与链接。
  bio: '',
  contacts: [] as { label: string; url: string }[],
};
