# Auditoria UX/UI — 20/07/2026

| Problema identificado | Impacto | Solução implementada |
|---|---|---|
| Navegação principal com sete itens e rótulos concorrentes | Aumentava o tempo de decisão e comprimia o cabeçalho | Reduzida para cinco destinos essenciais; seções secundárias continuam disponíveis na página |
| CTA principal genérico | Não deixava claro o próximo passo comercial | Padronizado como `Solicitar orçamento`, `Falar com um especialista` e `Agendar uma conversa` |
| Hero explicava serviços, mas não explicitava o benefício operacional | Exigia leitura adicional para entender a proposta | Texto reescrito para comunicar integração, segurança e redução de gargalos |
| Textos longos e repetidos | Reduziam a velocidade de leitura | Conteúdo condensado em títulos fortes, descrições curtas e listas objetivas |
| Soluções com excesso de tags | Criavam ruído e repetiam a descrição | Tags reduzidas e agrupadas por benefício |
| Seções muito altas | Alongavam a página sem ganho proporcional de conteúdo | Alturas, paddings e intervalos revisados em desktop, tablet e celular |
| Elementos decorativos e sombras excessivas | Competiam com o conteúdo | Ornamentos, sombras e fundos redundantes removidos ou suavizados |
| Carrossel automático de clientes | Gerava distração, dificultava comparação e prejudicava acessibilidade | Substituído por grade estática, responsiva e escaneável |
| Conteúdo dependente de animação por viewport | Podia permanecer invisível em impressão, captura ou navegação rápida | Conteúdo passou a renderizar sempre; mantidas apenas animações decorativas seguras |
| Página `Quem Somos` com cinco parágrafos extensos | Tornava a narrativa institucional cansativa | Trajetória resumida em três blocos; missão, visão e valores condensados |
| CTA final com logo grande e múltiplos focos | Dispersava a conversão | Bloco simplificado com uma ação principal e contatos diretos secundários |
| Ações da galeria cortadas no celular | Ocultavam parcialmente o botão de adicionar fotos | CTA principal passou a ocupar uma linha própria; ações secundárias ficaram abaixo |
| Metadados genéricos em todas as rotas | Prejudicavam contexto de busca e compartilhamento | Título, descrição, canonical, Open Graph, robots e dados estruturados revisados |
| Ausência de sitemap e robots públicos | Dificultava orientação de mecanismos de busca | Criados `sitemap.xml` e `robots.txt`; galeria operacional marcada como `noindex` |
| Navegação por teclado incompleta | Dificultava uso sem mouse | Adicionados skip link, foco visível, Escape no menu e contenção/restauração de foco no formulário |
| Seis imagens principais em PNG somavam cerca de 12,4 MB | Aumentavam o tempo de carregamento | Criadas versões WebP com 663 KB no total e referências atualizadas |
| Biblioteca de animação sem necessidade após a simplificação | Aumentava o JavaScript entregue | Dependência removida; bundle JS gzip caiu de 119,77 KB para 79,27 KB |

## Validação

- `npx tsc --noEmit`: aprovado.
- `npm run build`: aprovado.
- Playwright em 1440 px, 768 px e 390 px: sem rolagem horizontal.
- Console do navegador: zero erros e zero avisos.
- Formulário, menu móvel, abas, segmentos, filtros e lightbox: aprovados.
- `/`, `/quem-somos`, `/fotos-servicos`, `robots.txt`, `sitemap.xml` e WebP principal: HTTP 200.
