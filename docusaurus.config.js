// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manu Rukavina',
  tagline: 'A Java developer powered by coffee.',

  url: 'https://manurukavina.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'manurukavina',
  projectName: 'manurukavina',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Enforce blogging best practices
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Manu Rukavina /',
        logo: {
          alt: 'My Blog Logo',
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
        defaultMode: 'dark', // Sets dark mode as the default
        disableSwitch: true, // Removes the light/dark toggle
        respectPrefersColorScheme: false, // Ignores system preferences
      },
    }),
};

export default config;