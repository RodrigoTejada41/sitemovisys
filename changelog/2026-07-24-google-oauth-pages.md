# Páginas legais para OAuth Google

Data: 24/07/2026.

## Alterações

- Criadas as rotas públicas `/politica-de-privacidade` e `/termos-de-servico`.
- Adicionado conteúdo compatível com LGPD e integração autorizada com Google Calendar.
- Configurados `title`, `description`, canonical e Open Graph por página legal.
- Adicionados links de Política de Privacidade e Termos de Serviço no rodapé.
- Atualizado `sitemap.xml` com as novas URLs.

## Validação

- `npx.cmd tsc --noEmit`: aprovado.
- `npm.cmd run build`: aprovado.
- Preview local em `http://127.0.0.1:4173`: aprovado.
- HTTP 200 local para `/`, `/politica-de-privacidade`, `/termos-de-servico`, `/quem-somos`, `/fotos-servicos`, `/robots.txt` e `/sitemap.xml`.
- Playwright: Chromium desktop, tablet e mobile sem erros de console e sem overflow horizontal.
- Playwright: links do rodapé e menu móvel aprovados.
- Playwright: smoke test em Chrome e Microsoft Edge aprovado.
- Produção: HTTPS retorna 200, mas as novas rotas ainda renderizam a home antiga porque a VPS não foi publicada nesta execução.

## Publicação

Publicar o conteúdo gerado em `dist` na VPS conforme `documentation/DEPLOY_VPS.md`. Acesso SSH sem senha falhou para `root` e `ubuntu`.
