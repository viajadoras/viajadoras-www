import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Domínio público do site
const SITE = "https://viajadoras.com";

export default defineConfig({
  site: SITE,
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
    routing: { prefixDefaultLocale: false },
  },
});
