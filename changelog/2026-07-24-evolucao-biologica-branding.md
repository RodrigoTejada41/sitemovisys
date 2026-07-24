# Branding OAuth - Evolucao Biologica

Data: 24/07/2026.

## Alteracoes

- Secao publica do Evolucao Biologica adicionada apos o banner principal.
- Conteudo essencial incluido diretamente no HTML inicial para rastreamento sem JavaScript.
- Metadados da raiz atualizados com o nome oficial do aplicativo.
- Politica de Privacidade e Termos de Servico atualizados com Google Calendar, OAuth, separacao por empresa, revogacao e exclusao.
- Sitemap atualizado com `/evolucao-biologica/appagenda`.
- Pagina detalhada atualizada com H1 e metadados `Evolucao Biologica`.

## Producao

- Release: `/var/www/movisys-site/releases/20260724-branding-010315`.
- Backup do HTML anterior: `/var/www/evolucao-biologica-public/appagenda.html.bak-20260724-branding-010315`.
- Nginx, DNS, SSL, firewall, bancos e containers nao foram alterados.

## Validacao

- Build Vite aprovado.
- Teste focado do aplicativo: `4 passed`.
- HTTP 200 nas quatro URLs publicas exigidas.
- `curl -L` confirmou no HTML da raiz: Evolucao Biologica, Google Calendar, Conta Google, sincronizacao, autorizacao, compromissos e usuario.
- Playwright desktop e mobile: link funcional, sem overflow, sem conteudo misto e sem erros de console.
- `/dev/` permaneceu HTTP 200 e os containers permaneceram saudaveis.
