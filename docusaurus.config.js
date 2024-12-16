// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubefirst Docs',
  tagline: 'Instant Kubernetes Platforms',
  favicon: 'img/favicon.ico',
  url: 'https://kubefirst.konstruct.io',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('remark-docusaurus-tabs')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          ignorePatterns: [
            '/common/**',
            '/*/common/**'
          ]
        },
      },
    ],
  ],

  themes: [
    'docusaurus-theme-search-typesense',
    '@saucelabs/theme-github-codeblock',
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-KZLF3TJ',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/k3d/quick-start/install',
            from: [
              '/kubefirst/local/github/install',
              '/kubefirst/local/gitlab/install',
            ],
          },
          {
            to: '/aws/quick-start/install/cli',
            from: [
              '/kubefirst/aws/github/install',
              '/kubefirst/aws/gitlab/install',
            ],
          },
          {
            to: '/civo/quick-start/install/cli',
            from: [
              '/kubefirst/civo/github/install',
              '/kubefirst/civo/gitlab/install',
            ],
          },
          {
            to: '/k3d/overview',
            from: '/kubefirst/local',
          },
        ],
      },
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: 'keywords',
          content: 'kubernetes, gitops, ci, cd, argocd, aws, azure, civo, k3d, vultr'
        },
      ],
      announcementBar: {
        id: 'announcement',
        content: '<img src="/docs/img/megaphone.svg">Please change your Homebrew tap by running <code>brew uninstall kubefirst; brew install konstructio/taps/kubefirst</code>',
        backgroundColor: '#FA9247',
        textColor: '#3B4954',
        isCloseable: true,
      },
      navbar: {
        title: 'Kubefirst',
        logo: {
          alt: 'Kubefirst website',
          src: 'img/kubefirst.svg',
          href: 'https://kubefirst.konstruct.io/docs/',
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
            sidebarId: 'akamai',
            label: 'Akamai',
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
            sidebarId: 'azure',
            label: 'Azure',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'civo',
            label: 'Civo',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'do',
            label: 'DigitalOcean',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'gcp',
            label: 'Google Cloud',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'k3s',
            label: 'K3s',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'vultr',
            label: 'Vultr',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/konstructio/kubefirst',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://konstruct.io/',
            label: 'Website',
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
                href: 'http://konstruct.io/slack',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/konstructio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.konstruct.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/konstructio/kubefirst',
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
              host: 'typesense.konstruct.io',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'sqUxmLOtrBSwoSaEpm2LWFuFO9plnOYR',
        },
        contextualSearch: true,
      },
    }),
};

module.exports = config;
