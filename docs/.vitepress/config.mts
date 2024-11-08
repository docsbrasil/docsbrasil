import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs Brasil",
  description: "A VitePress Site",
  cleanUrls: true,
  appearance: "force-dark",
  ignoreDeadLinks: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: "Apoie o Projeto", 
        link: "https://github.com/docsbrasil/" 
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/docsbrasil/" },  
    ]
  }
})
