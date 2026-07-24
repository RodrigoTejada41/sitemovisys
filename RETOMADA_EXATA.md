# Retomada exata — Site MoviSys

Atualizado em 24/07/2026.

## Estado operacional

- Aplicação React + Vite concluída e compilando.
- Redesign UX/UI das três rotas concluído e validado localmente.
- Checkpoint local anterior: commit com assunto `feat: aprimora UX e conversao do site`.
- Backup antes das páginas OAuth: branch local `backup/pre-google-oauth-pages` no commit `feecf25`.
- Checkpoint local desta entrega: commit com assunto `feat: adiciona paginas legais para oauth google`.
- Servidor de desenvolvimento: `npm.cmd run dev -- --host 127.0.0.1 --port 4173`.
- Preview local durante o desenvolvimento: `http://127.0.0.1:4173`.
- Contêiner Docker: `site-movisys-m`.
- Imagem Docker: `site-movisys-m:latest`.
- Porta local: `8081`.
- Página inicial: `http://localhost:8081/`.
- Página institucional: `http://localhost:8081/quem-somos`.
- Política de Privacidade: `http://localhost:8081/politica-de-privacidade`.
- Termos de Serviço: `http://localhost:8081/termos-de-servico`.
- Galeria de serviços: `http://localhost:8081/fotos-servicos`.
- Produção: `https://movisystecnologia.com.br`.
- Página institucional em produção: `https://movisystecnologia.com.br/quem-somos`.
- As páginas legais de 24/07/2026 foram publicadas na VPS.
- Branding OAuth do Evolução Biológica publicado na raiz e na página detalhada.
- Release ativa após auditoria OAuth: `/var/www/movisys-site/releases/20260724-oauth-a11y-014000`.

## Produção na VPS

- Servidor: `172.233.177.135`.
- Servidor web: Nginx do host com certificado Let's Encrypt existente.
- Release ativa: `/var/www/movisys-site/releases/20260724-oauth-a11y-014000`.
- Link ativo: `/var/www/movisys-site/current`.
- Configuração compartilhada: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf`.
- Backup anterior à implantação: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260717-210035`.
- Backup da configuração antes da publicação OAuth: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260724-oauth-pages`.
- Backup do HTML anterior do aplicativo: `/var/www/evolucao-biologica-public/appagenda.html.bak-20260724-branding-010315`.
- Backup Nginx da auditoria: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260724-oauth-audit-013000`.
- Backup HTML da auditoria: `/var/www/evolucao-biologica-public/appagenda.html.bak-20260724-oauth-audit-013000`.
- Backup CSS da auditoria: `/var/www/evolucao-biologica-public/static/agenda-oauth.css.bak-20260724-oauth-audit-013000`.
- Release anterior preservada para rollback: `/var/www/movisys-site/releases/20260721-feecf25`.
- O site ocupa somente a rota raiz `/`.
- As aplicações existentes em `/dev/` e `/PragSys/` foram preservadas.
- Nenhuma senha está armazenada no projeto.

## Funcionalidades implementadas

- Identidade visual e logo MoviSys no cabeçalho, contato e rodapé.
- Tipografia e navegação ampliadas e responsivas.
- Apresentação de software, automação comercial, infraestrutura e suporte.
- Destaque para desenvolvimento de sistemas sob medida.
- Dez tipos de negócio com painel interativo de descrição.
- Seção `Nossos Clientes` com grade estática responsiva e sem movimento automático.
- Página `Quem Somos` com trajetória condensada, missão, visão, valores e CTA comercial.
- Páginas públicas `/politica-de-privacidade` e `/termos-de-servico` para verificação OAuth do Google.
- Conteúdo legal cobrindo LGPD, dados de login Google, uso autorizado do Google Calendar, tokens OAuth, revogação e exclusão de dados.
- Links legais adicionados ao rodapé da página inicial, Quem Somos e páginas legais.
- Formulário de contato com seleção do serviço e envio por WhatsApp ou e-mail.
- Formulário com contenção de foco, fechamento por `Escape` e restauração do foco anterior.
- Links diretos para WhatsApp, telefone e e-mail.
- Galeria comparativa com layout móvel corrigido, filtros e lightbox preservados.
- Navegação principal reduzida e CTAs padronizados para conversão.
- SEO com canonical, Open Graph, Schema.org, `robots.txt` e `sitemap.xml`.
- Galeria operacional marcada como `noindex`.
- Imagens principais convertidas para WebP; PNGs originais preservados.
- Dependência `framer-motion` removida por não ser mais necessária.
- Auditoria completa em `docs/AUDITORIA_UX_UI_2026-07-20.md`.

## Clientes cadastrados

- MUGUI.
- Sorveteria Malou.
- Clube Jeca.
- Clube da PICANHA.
- Evolução Biológica.
- Top Mármore.
- Seguradora Mondial.
- XD Software.

Logotipos oficiais fornecidos estão documentados em `documentation/client-assets.md`. Seguradora Mondial e XD Software permanecem com placeholders nominais até o fornecimento dos arquivos autorizados.

## Contato configurado

- WhatsApp e telefone: `(11) 93379-9278`.
- E-mail: `contatomovisystecnologia@gmail.com`.

## Validações executadas

- `npx.cmd tsc --noEmit`: aprovado.
- `npm.cmd run build`: aprovado.
- Build final: JavaScript `260,87 kB` (`79,27 kB` gzip) e CSS `68,39 kB` (`14,88 kB` gzip).
- Playwright em `1440px`, `768px` e `390px`: aprovado.
- Largura responsiva: sem rolagem horizontal nos viewports validados.
- Console do navegador: zero erros e zero avisos.
- Formulário, menu móvel, abas de infraestrutura, segmentos, filtros e lightbox: aprovados.
- `/`, `/quem-somos`, `/fotos-servicos`, `robots.txt`, `sitemap.xml` e WebP principal: HTTP 200 no ambiente local.
- Seis WebPs principais: `663.086 bytes` no total, contra aproximadamente `12,4 MB` dos PNGs usados antes.
- `npm audit`: zero vulnerabilidades.
- `npx.cmd tsc --noEmit`: aprovado em 24/07/2026.
- `npm.cmd run build`: aprovado em 24/07/2026. Build final: JavaScript `275,65 kB` (`82,90 kB` gzip) e CSS `71,55 kB` (`15,39 kB` gzip).
- Preview local `http://127.0.0.1:4173`: aprovado.
- HTTP 200 local para `/`, `/politica-de-privacidade`, `/termos-de-servico`, `/quem-somos`, `/fotos-servicos`, `robots.txt` e `sitemap.xml`.
- Playwright em Chromium desktop `1440px`, tablet `768px` e mobile Pixel 5: aprovado, sem erros de console e sem overflow horizontal.
- Links do rodapé para páginas legais: aprovados.
- Menu móvel em `/politica-de-privacidade`: aprovado.
- Smoke test Playwright em Chrome e Microsoft Edge: aprovado.
- Produção em 24/07/2026: HTTPS 200 validado para `/`, `/politica-de-privacidade`, `/termos-de-servico`, `/quem-somos`, `/fotos-servicos`, `/dev/` e `/PragSys/`.
- Playwright em produção: Chromium desktop e mobile aprovados, sem erros de console e sem overflow horizontal.
- Playwright em produção: smoke test em Chrome e Microsoft Edge aprovado.
- Containers após publicação: SysPragas dev/prod e MoviProgy dev seguem `healthy`.

## Estrutura principal

- `src/App.jsx`: página inicial e roteamento local.
- `src/about/`: página institucional.
- `src/legal/`: páginas legais para OAuth Google, privacidade e termos.
- `src/components/clients/`: seção e cadastro de clientes.
- `src/contact/`: formulário de contato.
- `src/service-photos/`: galeria de serviços.
- `src/shared/Brand.jsx`: marca reutilizável.
- `public/assets/`: identidade e imagens institucionais.
- `public/images/clients/`: imagens dos clientes.

## Pendências externas

- Receber os logotipos autorizados de Seguradora Mondial e XD Software.
- Confirmar endereço comercial e perfis sociais antes de publicá-los.
- Confirmar periodicamente que `/dev/` e `/PragSys/` continuam respondendo após novas publicações do site institucional.

## Próxima retomada

1. Executar `git status --short --branch` e confirmar que a árvore está limpa.
2. Executar `git log -1 --oneline` e localizar `feat: adiciona paginas legais para oauth google`.
3. Executar `npm.cmd install`, `npx.cmd tsc --noEmit` e `npm.cmd run build`.
4. Para revisão local, executar `npm.cmd run dev -- --host 127.0.0.1 --port 4173`.
5. Abrir `http://127.0.0.1:4173`, `/politica-de-privacidade`, `/termos-de-servico`, `/quem-somos` e `/fotos-servicos`.
6. Para publicação ou rollback, seguir `documentation/DEPLOY_VPS.md`.

Para nova publicação ou rollback, seguir `documentation/DEPLOY_VPS.md`.
