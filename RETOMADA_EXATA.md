# Retomada exata — Site MoviSys

Atualizado em 17/07/2026.

## Estado operacional

- Aplicação React + Vite concluída e compilando.
- Contêiner Docker: `site-movisys-m`.
- Imagem Docker: `site-movisys-m:latest`.
- Porta local: `8081`.
- Página inicial: `http://localhost:8081/`.
- Página institucional: `http://localhost:8081/quem-somos`.
- Galeria de serviços: `http://localhost:8081/fotos-servicos`.
- Produção: `https://movisystecnologia.com.br`.
- Página institucional em produção: `https://movisystecnologia.com.br/quem-somos`.

## Produção na VPS

- Servidor: `172.233.177.135`.
- Servidor web: Nginx do host com certificado Let's Encrypt existente.
- Release ativa: `/var/www/movisys-site/releases/20260717-ff77ecd`.
- Link ativo: `/var/www/movisys-site/current`.
- Configuração compartilhada: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf`.
- Backup anterior à implantação: `/etc/nginx/sites-available/movisystecnologia-pragsys.conf.bak-20260717-210035`.
- O site ocupa somente a rota raiz `/`.
- As aplicações existentes em `/dev/` e `/PragSys/` foram preservadas.
- Nenhuma senha está armazenada no projeto.

## Funcionalidades implementadas

- Identidade visual e logo MoviSys no cabeçalho, contato e rodapé.
- Tipografia e navegação ampliadas e responsivas.
- Apresentação de software, automação comercial, infraestrutura e suporte.
- Destaque para desenvolvimento de sistemas sob medida.
- Dez tipos de negócio com painel interativo de descrição.
- Seção `Nossos Clientes` com carrossel automático no desktop e grid móvel.
- Página `Quem Somos` com trajetória, missão, visão, valores e manifesto.
- Formulário de contato com seleção do serviço e envio por WhatsApp ou e-mail.
- Links diretos para WhatsApp, telefone e e-mail.
- Galeria comparativa de serviços técnicos.
- SEO e estrutura semântica nas páginas institucionais.

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
- Build da imagem Docker: aprovado.
- Teste HTTP no Nginx: aprovado.
- Playwright desktop e celular: aprovado.
- Largura responsiva: sem rolagem horizontal em `1440px` e `390px`.
- Console do navegador: zero erros e zero avisos na página `Quem Somos`.
- Navegação da página inicial para `/quem-somos`: aprovada.
- HTTPS público, domínio principal e `www`: aprovados.
- Aplicações existentes `/dev/` e `/PragSys/`: aprovadas após a implantação.
- Nginx e todos os oito contêineres preexistentes: ativos e saudáveis após a implantação.

## Estrutura principal

- `src/App.jsx`: página inicial e roteamento local.
- `src/about/`: página institucional.
- `src/components/clients/`: seção e cadastro de clientes.
- `src/contact/`: formulário de contato.
- `src/service-photos/`: galeria de serviços.
- `src/shared/Brand.jsx`: marca reutilizável.
- `public/assets/`: identidade e imagens institucionais.
- `public/images/clients/`: imagens dos clientes.

## Pendências externas

- Receber os logotipos autorizados de Seguradora Mondial e XD Software.
- Confirmar endereço comercial e perfis sociais antes de publicá-los.
- Definir domínio e ambiente de hospedagem pública.

## Próxima retomada

1. Executar `git status -sb` e confirmar que a árvore está limpa.
2. Executar `docker ps --filter name=site-movisys-m` para conferir o ambiente local.
3. Abrir `http://localhost:8081`.
4. Continuar pelas pendências externas ou pelo próximo ajuste visual solicitado.

Para nova publicação ou rollback, seguir `documentation/DEPLOY_VPS.md`.
