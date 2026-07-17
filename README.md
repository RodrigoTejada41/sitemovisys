# Site MoviSys

Site institucional da MoviSys em React + Vite, com apresentação de soluções, segmentos atendidos, clientes, serviços e página institucional.

Produção: [https://movisystecnologia.com.br](https://movisystecnologia.com.br)

## Recursos

- Landing page responsiva.
- Página independente `Quem Somos`.
- Soluções de software, automação, infraestrutura e suporte.
- Segmentos interativos com descrição e recursos indicados.
- Carrossel automático de clientes.
- Formulário com envio por WhatsApp ou e-mail.
- Galeria de serviços técnicos.
- SEO básico e navegação semântica.

## Executar

```powershell
npm.cmd install
npm.cmd run dev
```

Acesse `http://localhost:5173`.

## Produção

```powershell
npm.cmd run build
npm.cmd run preview
```

## Docker

```powershell
docker build -t site-movisys-m:latest .
docker run -d --name site-movisys-m --restart unless-stopped -p 8081:80 site-movisys-m:latest
```

Acesse `http://localhost:8081`.

## Rotas

- `/`: página inicial.
- `/quem-somos`: página institucional.
- `/fotos-servicos`: galeria de serviços.

## Documentação

- `RETOMADA_EXATA.md`: estado operacional e ponto de retomada.
- `docs/components/`: documentação dos componentes institucionais.
- `documentation/client-assets.md`: origem e situação dos logotipos.
- `documentation/DEPLOY_VPS.md`: arquitetura, publicação e rollback da VPS.
- `changelog/`: histórico das implementações.

## Contato

- WhatsApp: `(11) 93379-9278`
- E-mail: `contatomovisystecnologia@gmail.com`

Endereço e perfis sociais permanecem pendentes de confirmação.
