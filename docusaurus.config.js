import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manu Rukavina',
  tagline: 'A software developer powered by coffee.',
  url: 'https://manurukavina.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'manurukavina',
  projectName: 'manurukavina',

  favicon: "https://github.com/manurukavina.png",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-CNJMYXVP61',
        },
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'ga-technology',
        content: 'This website started using GA technology, <a href="/ga-technology">how does that affect your privacy</a>?', // The message (can include HTML)
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Manu Rukavina /',
        logo: {
          alt: 'Manu Rukavina',
          src: 'https://github.com/manurukavina.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/manurukavina/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Manu Rukavina.`,
      },
      prism: {
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        { name: 'fediverse:creator', content: '@manurukavina@mastodon.social' },
      ],
    }),
};

export default config;