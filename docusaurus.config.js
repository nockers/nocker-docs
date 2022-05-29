// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nocker",
  tagline: "アプリのフィードバック機能を構築するAPIとUIライブラリ",
  url: "https://nocker.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nockers",
  projectName: "nocker",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nockers/nocker-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/nockers/nocker-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Nocker",
        logo: {
          alt: "Nocker Logo",
          src: "img/nocker.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },

          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://nocker.app",
            label: "ログイン",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            // title: "Nocker",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/nockers/nocker",
              },
              {
                label: "Storybook",
                href: "https://storybook.nocker.dev/?path=/story/nockercard--default",
              },
              {
                label: "Playground",
                href: "https://sample.nocker.dev",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Nocker`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "announcementBar",
        content: `2022年6月下旬、リリース予定。`,
      },
      image: "img/icon.x192.png",
    },
}

module.exports = config
