# 17/07/2026 — Implantação em produção

## Publicado

- Site disponível em `https://movisystecnologia.com.br`.
- Página institucional disponível em `/quem-somos`.
- Domínio `www` atendido pelo mesmo certificado HTTPS.
- Fallback SPA configurado no Nginx para rotas React.

## Preservado

- Aplicação de desenvolvimento em `/dev/`.
- Aplicação PragSys em `/PragSys/`.
- Contêineres existentes de SysPragas e MoviProgy.
- Certificado Let's Encrypt e renovação automática existentes.

## Validação

- HTTP `200` no site, em `www` e em `/quem-somos`.
- JavaScript e arquivos estáticos carregados.
- Zero erros e zero avisos no console do navegador.
- Nginx validado com `nginx -t`.
- Oito contêineres preexistentes permaneceram saudáveis.
