# Quitandas da Dila — site

Landing page (vitrine) da Quitandas da Dila, Pompéu – MG. Feita em Next.js, mobile first, com o Design System da marca (cores, fontes Great Vibes / Playfair Display / Montserrat, ícones e componentes).

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Onde mudar as coisas

| O quê | Arquivo |
| --- | --- |
| Telefone, Instagram, endereço, mensagem do WhatsApp | `lib/contato.ts` |
| Textos e seções da página | `app/page.tsx` |
| Cartões de Pão de Queijo / Biscoito (assado ↔ congelado) | `components/ProdutoMineiro.tsx` |
| Cores, tamanhos e espaçamentos (tokens do Design System) | `app/globals.css` |
| Título do Google, descrição e dados de empresa local (schema.org) | `app/layout.tsx` |
| Fotos | `public/img/` (WebP em 480 e 900 px) |

## Publicar

Cada `git push` na branch `main` publica automaticamente na Vercel.
