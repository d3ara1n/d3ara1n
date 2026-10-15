export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export type Localized<T> = Record<Locale, T>;

export const htmlLang: Localized<string> = { en: 'en', zh: 'zh-CN' };
export const ogLocale: Localized<string> = { en: 'en_US', zh: 'zh_CN' };
export const localeLabel: Localized<string> = { en: 'EN', zh: '中文' };

const en = {
  meta: {
    title: 'Dearain — developer',
    description:
      'Dearain (d3ara1n) builds desktop apps, UI libraries and tools for coding agents: Polymerium, Huskui.Avalonia, TideBar and pi-extensions.',
  },
  skip: 'Skip to content',
  nav: { main: 'Main', projects: 'Projects', contact: 'Contact', language: 'Language' },
  hero: {
    hello: "Hi, I'm",
    lead: 'Mastering three programming languages:',
    sep: ', ',
    and: 'and',
    bio: 'I build desktop apps, UI libraries and tools for coding agents. Mostly C#, sometimes Swift and TypeScript.',
    cta: 'See projects',
    stars: 'stars on GitHub',
    avatarAlt: 'Avatar of Dearain',
  },
  projects: {
    title: 'Selected work',
    kicker: 'Things I made, and keep making.',
    visit: 'Visit site',
    source: 'Source',
    github: 'View on GitHub',
    stars: 'stars',
    tech: 'Tech stack',
  },
  contact: {
    title: 'Say hi',
    body: 'Questions, ideas, bug reports or just hello. My inbox is open.',
    email: 'Send an email',
  },
  footer: 'Built with Astro and neobrutalism.dev. No trackers, just paper.',
  notFound: {
    title: 'Lost in the paper pile',
    body: 'This page blew away. Maybe it is one of the scraps behind this card.',
    back: 'Back home',
  },
};

const zh: typeof en = {
  meta: {
    title: 'Dearain — 开发者',
    description:
      'Dearain（d3ara1n）做桌面应用、UI 库和给编程 Agent 用的工具：Polymerium、Huskui.Avalonia、TideBar 与 pi-extensions。',
  },
  skip: '跳到正文',
  nav: { main: '主导航', projects: '项目', contact: '联系', language: '语言' },
  hero: {
    hello: '你好，我是',
    lead: '精通三门编程语言：',
    sep: '、',
    and: '和',
    bio: '做桌面应用、UI 库和给编程 Agent 用的工具。主要写 C#，偶尔写 Swift 和 TypeScript。',
    cta: '看看项目',
    stars: 'GitHub 星标',
    avatarAlt: 'Dearain 的头像',
  },
  projects: {
    title: '精选项目',
    kicker: '做过的，也还在做的。',
    visit: '访问官网',
    source: '源码',
    github: '在 GitHub 查看',
    stars: '星标',
    tech: '技术栈',
  },
  contact: {
    title: '打个招呼',
    body: '问题、想法、bug，或者只是打个招呼，都欢迎来信。',
    email: '发邮件',
  },
  footer: '用 Astro 和 neobrutalism.dev 搭建。没有追踪器，只有纸片。',
  notFound: {
    title: '这页被风吹走了',
    body: '也许它就是这张卡片后面的某张纸片。',
    back: '回到首页',
  },
};

export const ui: Localized<typeof en> = { en, zh };

export const profile = {
  name: 'Dearain',
  handle: 'd3ara1n',
  github: 'https://github.com/d3ara1n',
  email: 'd3ara1n@outlook.com',
};
