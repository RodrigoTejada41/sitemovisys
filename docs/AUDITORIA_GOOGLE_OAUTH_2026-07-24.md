# Auditoria Google OAuth Brand Verification

Data: 24/07/2026.
Aplicativo: `Evolução Biológica`.
Homepage auditada: `https://movisystecnologia.com.br/evolucao-biologica/appagenda`.

## Diagnostico inicial

1. `appagenda` respondia HTTP 200 e possuia nome, finalidade, OAuth, canonical e Open Graph corretos no HTML original.
2. A homepage institucional apresentava Privacidade e Termos apenas depois da execucao do React. Os links nao existiam no HTML original.
3. Privacidade e Termos respondiam inicialmente com o HTML generico da raiz, canonical `/` e metadados da homepage. O conteudo juridico correto dependia de JavaScript.
4. O Lighthouse detectou contraste insuficiente nos rotulos de `appagenda` e em textos auxiliares da homepage.
5. Nao foram encontrados redirects, bloqueios de robots, variacoes proibidas do nome ou credenciais expostas em `appagenda`.

## Correcoes

- Links de Privacidade e Termos incluidos diretamente no HTML original da homepage.
- Politica de Privacidade e Termos convertidos em documentos HTML estaticos.
- Rotas Nginx exatas configuradas para entregar os documentos sem redirect e sem JavaScript.
- Canonical, title, description, Open Graph e `index, follow` especificos em cada documento.
- Contrastes corrigidos em `appagenda` e na homepage.
- Atualizador Nginx reproduzivel criado em `deploy/update_nginx_legal_pages.py`.

## Resultado HTTP e SEO

| URL | HTTP | Canonical | HTML sem JavaScript |
| --- | --- | --- | --- |
| `/` | 200 | `/` | Aplicativo, finalidade, Privacidade e Termos |
| `/evolucao-biologica/appagenda` | 200 | URL exata | Nome, finalidade, Google Calendar, OAuth e documentos |
| `/politica-de-privacidade` | 200 | URL exata | Documento integral |
| `/termos-de-servico` | 200 | URL exata | Documento integral |

- `robots.txt`: HTTP 200, `Allow: /`.
- Meta robots: `index, follow`.
- `X-Robots-Tag`: ausente.
- Sitemap: todas as quatro URLs relevantes presentes.
- TLS valido para dominio principal e `www`.
- Um H1 por pagina, landmarks semanticos, skip link, textos alternativos e foco visivel.
- Sem overflow horizontal ou conteudo misto.
- Sem erros de console.
- Sem Client Secret, Access Token, Refresh Token, senha ou endpoint OAuth no HTML.

## Lighthouse

| Pagina | Acessibilidade | SEO |
| --- | ---: | ---: |
| Homepage | 100 | 100 |
| appagenda | 100 | 100 |
| Privacidade | 100 | 100 |
| Termos | 100 | 100 |

O alerta restante de boas praticas foi causado por `gc.kis.v2.scr.kaspersky-labs.com/main.js`, injetado pelo antivirus no Chrome local. O recurso nao pertence ao site e nao aparece no HTML da VPS.

## Producao e rollback

- Release ativa: `/var/www/movisys-site/releases/20260724-oauth-a11y-014000`.
- Backup Nginx: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260724-oauth-audit-013000`.
- Backup appagenda: `/var/www/evolucao-biologica-public/appagenda.html.bak-20260724-oauth-audit-013000`.
- Backup CSS: `/var/www/evolucao-biologica-public/static/agenda-oauth.css.bak-20260724-oauth-audit-013000`.
- `/dev/`, `/PragSys/` e containers permaneceram operacionais.

## Pendencias externas

Confirmar no Google Cloud:

- App name: `Evolução Biológica`.
- App home page: `https://movisystecnologia.com.br/evolucao-biologica/appagenda`.
- Privacy policy: `https://movisystecnologia.com.br/politica-de-privacidade`.
- Terms of service: `https://movisystecnologia.com.br/termos-de-servico`.
- Authorized domain: `movisystecnologia.com.br`.
- Dominio verificado no Search Console por uma conta Owner ou Editor do projeto.
- Alteracoes movidas de Draft Branding para Published Branding.
- Logo da tela de consentimento correspondente ao Evolução Biológica.

Sem acesso ao projeto Google Cloud, esses itens nao podem ser confirmados pelo servidor web.

## Estimativa

- Site e documentos: prontos para verificacao.
- Probabilidade estimada apos confirmar e publicar a configuracao acima: 90% a 95%.
- Sem confirmar Published Branding e propriedade do dominio: a aprovacao nao pode ser estimada de forma confiavel.
