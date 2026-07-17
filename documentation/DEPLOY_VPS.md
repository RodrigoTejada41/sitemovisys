# Implantação na VPS

Implantação inicial realizada em 17/07/2026.

## Ambiente

- Domínio: `https://movisystecnologia.com.br`.
- VPS: `172.233.177.135`.
- Sistema: Ubuntu 24.04 LTS.
- Servidor web: Nginx do host.
- TLS: certificado Let's Encrypt para domínio principal e `www`.
- Renovação: `certbot.timer` habilitado e ativo.

Credenciais não devem ser registradas no repositório.

## Arquitetura

O site é compilado localmente e publicado como arquivos estáticos. Isso evita consumo adicional de memória e não adiciona outro contêiner à VPS compartilhada.

- Release ativa: `/var/www/movisys-site/releases/20260717-ff77ecd`.
- Link simbólico: `/var/www/movisys-site/current`.
- Configuração Nginx: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf`.
- Backup da configuração anterior: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260717-210035`.

O bloco `location /` entrega o site e usa fallback para `index.html`, permitindo rotas React como `/quem-somos`.

## Aplicações preservadas

- `/dev/` continua encaminhando para `127.0.0.1:8012`.
- `/PragSys/` continua encaminhando para `127.0.0.1:8011`.
- Contêineres SysPragas e MoviProgy não foram alterados ou reiniciados.

## Nova publicação

1. Executar `npx.cmd tsc --noEmit`.
2. Executar `npm.cmd run build`.
3. Compactar o conteúdo de `dist`.
4. Enviar o pacote para um novo diretório em `/var/www/movisys-site/releases/`.
5. Validar a presença de `index.html` e dos arquivos em `assets/`.
6. Atualizar `/var/www/movisys-site/current` para a nova release.
7. Executar `nginx -t` antes de recarregar o Nginx.
8. Validar `/`, `/quem-somos`, `/dev/` e `/PragSys/` por HTTPS.

## Rollback

Para reverter apenas os arquivos do site, apontar `/var/www/movisys-site/current` para a release anterior e recarregar o Nginx.

Para retirar o site e restaurar a configuração anterior:

```bash
cp -a /etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260717-210035 \
  /etc/nginx/sites-available/movisystecnologia-pragsys.conf
nginx -t
systemctl reload nginx
```

Executar o rollback somente após confirmar o caminho do backup e validar que as rotas compartilhadas continuam presentes.
