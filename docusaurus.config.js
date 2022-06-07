// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nocker",
  tagline: "Webアプリのフィードバック機能を構築するUIライブラリとAPI",
  url: "https://nocker.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
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
        gtag: {
          trackingID: "G-ERHRRG1P64",
          anonymizeIP: false,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      /**
       * https://docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
       */
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      image: "images/nocker-social-preview.png",
      metadata: [{ name: "twitter:card", content: "summary_large_image" }],
      announcementBar: {
        id: "announcementBar",
        content: `このドキュメントは開発中です。`,
        backgroundColor: "#01579b",
        textColor: "#e1f5fe",
      },
      navbar: {
        title: "Nocker",
        logo: {
          alt: "Nocker Logo",
          src: "images/nocker.png",
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: "doc",
          //   docId: "index",
          //   position: "left",
          //   label: "Docs",
          // },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "widget",
            label: "ウィジェット",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "system",
            label: "システム",
          },
          { to: "/blog", label: "ブログ", position: "left" },
          {
            href: "https://github.com/nockers/nocker",
            position: "left",
            label: "GitHub",
          },
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
                label: "プライバシー",
                href: "/privacy",
              },
              {
                label: "利用規約",
                href: "/terms",
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
    },
}

module.exports = config
