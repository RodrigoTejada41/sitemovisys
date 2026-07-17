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
