# 21/07/2026 — Redesign UX/UI e conversão

## Experiência e conteúdo

- Navegação principal reduzida para cinco destinos essenciais.
- Hero e seções reescritos com textos curtos e foco em benefícios.
- CTAs padronizados para orçamento, atendimento e demonstração da solução.
- Espaçamentos, hierarquia, densidade visual e responsividade revisados.
- Página `Quem Somos` condensada sem remover missão, visão, valores ou credibilidade.
- Carrossel automático de clientes substituído por grade estática responsiva.

## Interface e acessibilidade

- Cores, botões, bordas, sombras e estados de foco padronizados.
- Skip link adicionado nas três rotas.
- Menu móvel com fechamento por `Escape` e conteúdo inerte quando fechado.
- Formulário com contenção e restauração de foco.
- Conteúdo deixou de depender de animações por viewport para permanecer visível em captura, impressão e navegação rápida.
- Galeria móvel reorganizada para evitar ações cortadas.

## SEO e performance

- Títulos, descriptions, canonical, Open Graph e Schema.org revisados.
- Criados `public/robots.txt` e `public/sitemap.xml`.
- Galeria operacional configurada como `noindex`.
- Seis imagens principais convertidas para WebP, reduzindo o carregamento de aproximadamente `12,4 MB` para `663 KB`.
- `framer-motion` removido; JavaScript gzip reduzido de `119,77 KB` para `79,27 KB`.

## Validação

- `npx.cmd tsc --noEmit`: aprovado.
- `npm.cmd run build`: aprovado.
- Playwright em desktop, tablet e celular: aprovado.
- Console: zero erros e zero avisos.
- Formulário, menu, abas, segmentos, filtros e lightbox: aprovados.
- Relatório detalhado: `docs/AUDITORIA_UX_UI_2026-07-20.md`.

## Publicação

- Alterações registradas localmente.
- Publicação na VPS permanece pendente.
