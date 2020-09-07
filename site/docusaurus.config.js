module.exports = {
  title: 'Dreamic',
  tagline: 'Follow your dreams, using fantasy-land conform types and utility.',
  url: 'https://chimidev.github.io',
  baseUrl: '/dreamic/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ChimiDEV',
  projectName: 'Dreamic',
  onBrokenLinks: 'ignore',
  stylesheets: ['https://fonts.googleapis.com/css2?family=Fira+Code'],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    colorMode: {
      switchConfig: {
        darkIcon: ' ',
        lightIcon: ' ',
      },
    },
    navbar: {
      title: 'Dreamic',
      logo: {
        alt: 'Dreamic Logo',
        src: 'img/dreamic.svg',
      },
      items: [
        {
          to: 'docs/core/design',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/ChimiDEV/dreamic',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/ChimiDEV/dreamic',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dreamic. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
