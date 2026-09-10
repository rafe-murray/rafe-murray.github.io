import { themes as prismThemes } from "prism-react-renderer";
import path from "path";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Rafe Murray",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://rafemurray.ca",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rafe-murray", // Usually your GitHub org/user name.
  projectName: "rafe-murray.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap",
      rel: "stylesheet",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        // See https://github.com/facebook/docusaurus/issues/8297
        // and https://github.com/facebook/docusaurus/issues/10679
        svgr: {
          svgrConfig: {
            svgoConfig: {
              plugins: [
                {
                  name: "prefixIds",
                  params: {
                    delim: "",
                    prefix: (_, file) => {
                      return path.basename(file?.path ?? "").split(".")[0];
                    },
                    prefixIds: true,
                  },
                },
              ],
            },
          },
        },
        pages: {},
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(_) {
      return {
        name: "tailwind-plugin",
        configurePostCss(options) {
          options.plugins.push(require("@tailwindcss/postcss"));
          return options;
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Rafe Murray",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [{ to: "/blog", label: "Blog", position: "left" }],
    },
    footer: {
      links: [
        {
          label: "Blog",
          to: "/blog",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/rafe-murray",
        },
        {
          label: "GitHub",
          href: "https://github.com/rafe-murray",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rafe Murray`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
