/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const lightCodeTheme = require("prism-react-renderer/themes/github")

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
    locales: ["en", "ja"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ja: {
        label: "日本語",
      },
    },
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
        defaultMode: "light",
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      image: "images/nocker-social-preview.png",
      metadata: [{ name: "twitter:card", content: "summary_large_image" }],
      announcementBar: {
        id: "announcementBar",
        content: "Under development",
        backgroundColor: "#90caf9",
        textColor: "#0d47a1",
      },
      navbar: {
        title: "Nocker",
        logo: {
          alt: "Nocker Logo",
          src: "images/nocker.png",
        },
        hideOnScroll: true,
        items: [
          {
            type: "docSidebar",
            position: "right",
            sidebarId: "widget",
            label: "WIDGET",
          },
          {
            type: "docSidebar",
            position: "right",
            sidebarId: "system",
            label: "SYSTEM",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nockers/nocker",
            position: "right",
            label: "GitHub",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://nocker.app",
            label: "LOGIN",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            // title: "Nocker",
            items: [
              {
                label: "Privacy Policy",
                href: "/privacy",
              },
              {
                label: "Terms",
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
