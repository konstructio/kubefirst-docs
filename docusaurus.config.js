// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubefirst Docs',
  tagline: 'Instant Kubernetes Platforms',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kubefirst.io',
  baseUrl: process.env.BASEURL || "/",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      ({
        docs: {
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'next',
          //     path: 'next',
          //   },
          // },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('remark-docusaurus-tabs')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themes: ['docusaurus-theme-search-typesense', '@saucelabs/theme-github-codeblock'],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-KZLF3TJ'
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kubefirst',
        logo: {
          alt: 'Kubefirst website',
          src: 'img/logo.svg',
          href: 'http://localhost:3000/next',
          // href: 'https://docs.kubefirst.io/',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'k3d',
            label: 'K3D (local)',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'aws',
            label: 'AWS',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'civo',
            label: 'Civo',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/kubefirst/kubefirst',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https:/kubefirst.io',
            label: 'kubefirst.io',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://kubefirst.io/slack',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kubefirst',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://kubefirst.io/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kubefirst/kubefirst',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Kubefirst.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        typesenseCollectionName: 'kubefirst',
        typesenseServerConfig: {
          nodes: [
            {
              host: 'typesense.mgmt.kubefirst.com',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'AeeRpiguwfTpmcKHGbBkTmUCkjoPg8nh',
        },
        contextualSearch: true,
      }
    }),

};

module.exports = config;
