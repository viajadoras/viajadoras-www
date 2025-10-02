import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Ajuste o domínio final quando apontarmos o DNS
const SITE = "https://viajadoras.app";

export default defineConfig({
  site: SITE,
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
    routing: { prefixDefaultLocale: false },
  },
});
