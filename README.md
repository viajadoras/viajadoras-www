# Viajadoras WWW

Landing page com Astro + Tailwind (pt‑BR), Plausible e envio direto para a API.

## Slogan

- "Vai segura."

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build estático
- `npm run preview` — preview local

## Configurações

- `astro.config.mjs` — i18n apenas pt‑BR e `site` para sitemap
- Plausible: script no layout base. Ajuste `data-domain` se usar domínio de staging.
- API: defina `PUBLIC_API_BASE` no build (ex.: `https://api.viajadoras.app`) para o formulário.
- Tailwind: tokens de marca replicados do app.

## Páginas

- pt‑BR: `/` (home), `/obrigada`, `/privacidade`, `/termos`

## Deploy

- Cloudflare Pages (recomendado): Build `npm run build`, diretório `dist`.
- Alternativa: Vercel (adapter oficial do Astro).
