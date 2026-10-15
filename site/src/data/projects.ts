import type { ImageMetadata } from 'astro';

import huskuiShot from '@/assets/projects/huskui.png';
import polymeriumShot from '@/assets/projects/polymerium.png';
import tidebarShot from '@/assets/projects/tidebar.png';
import type { Localized } from '@/i18n';

export interface Project {
  slug: string;
  name: string;
  /** `owner/name` on GitHub; also used to fetch the star count at build time. */
  repo: string;
  /** Dedicated website, if the project has one. Projects without one link to the repo. */
  url?: string;
  /** Background color of the project's visual panel. */
  accent: string;
  tech: string[];
  /** A screenshot, or terminal lines for projects without a GUI. */
  visual:
    | { kind: 'image'; src: ImageMetadata; alt: Localized<string> }
    | { kind: 'terminal'; lines: string[] };
  tagline: Localized<string>;
  summary: Localized<string>;
  highlights: Localized<string[]>;
}

export const projects: Project[] = [
  {
    slug: 'polymerium',
    name: 'Polymerium',
    repo: 'd3ara1n/Polymerium',
    url: 'https://polymerium.dearain.dev',
    accent: '#9be15d',
    tech: ['C#', '.NET 10', 'Avalonia', 'Windows · Linux · macOS'],
    visual: {
      kind: 'image',
      src: polymeriumShot,
      alt: {
        en: 'Polymerium home dashboard listing instances, accounts and recent worlds',
        zh: 'Polymerium 主页，列出实例、账号与最近游玩的存档',
      },
    },
    tagline: {
      en: 'A Minecraft instance manager built on a simple idea.',
      zh: '建立在一个简单想法上的 Minecraft 实例管理器。',
    },
    summary: {
      en: 'An instance is a description, not a pile of copied files. Change the loader, swap mods, update the whole pack: Polymerium rebuilds the files on demand while your saves and settings stay put.',
      zh: '实例是一份描述，而不是一堆复制出来的文件。换加载器、增删模组、升级整合包都只改描述，Polymerium 按需重建文件，存档和设置原样保留。',
    },
    highlights: {
      en: [
        'Switch loaders without rebuilding: Forge to NeoForge, Fabric to Quilt.',
        'Snapshots with a diff of exactly what changed. One click to roll back.',
        'Files are linked, not duplicated. Ten packs sharing mods cost one copy.',
        'CurseForge and Modrinth built in, plus a CLI with an MCP mode for AI agents.',
      ],
      zh: [
        '切换加载器无需重建：Forge 换 NeoForge，Fabric 换 Quilt。',
        '快照附带变更对比，一键回滚。',
        '文件是链接而非复制，十个整合包共享模组只占一份空间。',
        '内置 CurseForge 与 Modrinth，附带支持 MCP 模式的 CLI，可供 AI Agent 调用。',
      ],
    },
  },
  {
    slug: 'huskui-avalonia',
    name: 'Huskui.Avalonia',
    repo: 'd3ara1n/Huskui.Avalonia',
    url: 'https://huskui.dearain.dev',
    accent: '#ff8fc8',
    tech: ['C#', 'Avalonia 12', 'XAML', 'NuGet'],
    visual: {
      kind: 'image',
      src: huskuiShot,
      alt: {
        en: 'Huskui gallery app showing cards, tags and info bars in the Huskui theme',
        zh: 'Huskui 示例应用，展示 Huskui 主题下的卡片、标签和信息栏',
      },
    },
    tagline: {
      en: 'Controls, styles and themes for Avalonia.',
      zh: 'Avalonia 的控件、样式与主题库。',
    },
    summary: {
      en: 'A component library for cross-platform desktop apps, inspired by Park UI and built on the Radix Colors palette. It is also the UI foundation Polymerium is built on.',
      zh: '面向跨平台桌面应用的组件库，设计参考 Park UI，配色基于 Radix Colors。Polymerium 的界面就建立在它之上。',
    },
    highlights: {
      en: [
        'AppWindow, Card, InfoBar, Tag, Skeleton, Drawer and many more.',
        'One overlay system for dialogs, modals, sidebars, toasts and growls.',
        'Light and dark themes out of the box, one cohesive design language.',
        'Optional packages for code highlighting, Markdown rendering and MVVM.',
      ],
      zh: [
        'AppWindow、Card、InfoBar、Tag、Skeleton、Drawer 等大量控件。',
        '统一的浮层系统，承载对话框、模态框、侧边栏、Toast 与通知。',
        '自带浅色与深色主题，设计语言一致。',
        '可选扩展包：代码高亮、Markdown 渲染、MVVM 生命周期。',
      ],
    },
  },
  {
    slug: 'tidebar',
    name: 'TideBar',
    repo: 'd3ara1n/TideBar',
    url: 'https://tidebar.dearain.dev',
    accent: '#7ec8ff',
    tech: ['Swift', 'SwiftUI', 'macOS 14+'],
    visual: {
      kind: 'image',
      src: tidebarShot,
      alt: {
        en: 'TideBar banner: a thin line at the bottom of the screen that expands into an app bar',
        zh: 'TideBar 横幅：屏幕底部的一条细线，靠近时展开为应用栏',
      },
    },
    tagline: {
      en: 'A zero-footprint macOS taskbar. A hairline that tides into an app bar.',
      zh: '零占位的 macOS 任务栏。一条细线，靠近时涨潮成应用栏。',
    },
    summary: {
      en: 'The Dock takes permanent screen space and loses track of minimized windows. TideBar collapses to a 2–3 pt line when idle, expands when you approach, and keeps every window one click away.',
      zh: '程序坞永远占着屏幕，最小化的窗口还容易找不回来。TideBar 空闲时只是一条 2–3 pt 的细线，指针靠近才展开，每个窗口都在一次点击之内。',
    },
    highlights: {
      en: [
        'Per-window state dots. Minimized windows restore with a click.',
        'Hold an app to open its Surge: every window listed by title.',
        'Full keyboard control with Option-Space and Option-Tab.',
        'No Screen Recording permission, no account, no telemetry.',
      ],
      zh: [
        '每个窗口都有状态点，最小化的窗口一点即恢复。',
        '长按应用打开 Surge，按标题列出它的所有窗口。',
        'Option-Space 与 Option-Tab，全程键盘可控。',
        '不需要屏幕录制权限，没有账号，没有遥测。',
      ],
    },
  },
  {
    slug: 'pi-extensions',
    name: 'pi-extensions',
    repo: 'd3ara1n/pi-extensions',
    accent: '#ff9f43',
    tech: ['TypeScript', 'npm', 'Pi Coding Agent'],
    visual: {
      kind: 'terminal',
      lines: [
        '$ pi install npm:@d3ara1n/pi-hashline-edit',
        '$ pi install npm:@d3ara1n/pi-subagent',
        '$ pi install npm:@d3ara1n/pi-mesh',
        '$ pi install npm:@d3ara1n/pi-command-palette',
        '# 20+ packages, install only what you need',
      ],
    },
    tagline: {
      en: 'Quality-of-life extensions for the Pi coding agent.',
      zh: 'Pi Coding Agent 的体验增强扩展合集。',
    },
    summary: {
      en: 'A monorepo of 20+ small packages that make Pi nicer to live in: safer edits, subagents, a command palette, agents that talk to each other. Each one installs on its own.',
      zh: '一个包含 20 多个小扩展的 monorepo，让 Pi 用起来更顺手：更安全的编辑、子代理、命令面板、能互相对话的 Agent。每个都可以单独安装。',
    },
    highlights: {
      en: [
        'hashline-edit and apply-patch: line edits verified by content hash.',
        'subagent: role-based delegation in the foreground or background.',
        'mesh, peek and chat-room: Pi instances that find and message each other.',
        'command-palette, editor-shell and ask-user: a calmer terminal UI.',
      ],
      zh: [
        'hashline-edit 与 apply-patch：按内容哈希校验的行级编辑。',
        'subagent：按角色委派任务，支持前台和后台运行。',
        'mesh、peek 与 chat-room：Pi 实例之间互相发现、互相传话。',
        'command-palette、editor-shell 与 ask-user：更从容的终端界面。',
      ],
    },
  },
];
