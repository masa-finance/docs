// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Masa Finance",
  tagline: "Developer Documentation",
  url: "https://masa.finance",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "masa-finance", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-node-polyfills",
    require("./src/plugins/http-support"),
    require("./src/plugins/tailwind"),
  ],

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/masa-finance/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Masa Finance",
      logo: {
        alt: "Masa Finance",
        src: "img/logo.svg",
        srcDark: "img/logo-darkmode.svg",
        width: 100,
        style: {marginRight: '1rem'},
      },
      items: [
        {
          type: "doc",
          docId: "quickstart/base",
          position: "left",
          label: "Docs",
        },
        {
            href: "https://github.com/masa-finance/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "docs/masa/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/masa-finance",
              },
              {
                label: "Discord",
                href: "https://discord.gg/HyHGaKhaKs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/getmasafi",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/masa-finance",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Masa Finance.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
