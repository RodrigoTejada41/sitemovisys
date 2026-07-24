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
- Produção: HTTPS 200 validado para `/`, `/politica-de-privacidade`, `/termos-de-servico`, `/quem-somos`, `/fotos-servicos`, `/dev/` e `/PragSys/`.
- Playwright em produção: Chromium desktop/mobile, Chrome e Microsoft Edge aprovados, sem erros de console.
- Containers após publicação: SysPragas dev/prod e MoviProgy dev seguem `healthy`.

## Publicação

Release publicada em `/var/www/movisys-site/releases/20260724-3ae5156`.

O symlink `/var/www/movisys-site/current` foi atualizado para a nova release. A release anterior `/var/www/movisys-site/releases/20260721-feecf25` foi preservada para rollback.
