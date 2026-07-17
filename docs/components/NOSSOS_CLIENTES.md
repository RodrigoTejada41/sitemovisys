# Nossos Clientes

Implementado em 17/07/2026.

## Componentes

- `ClientsSection.tsx`: seção semântica, título, subtítulo, grid móvel e carrossel desktop.
- `ClientLogoCard.tsx`: card reutilizável com imagem, nome, tooltip nativo e interação.
- `clients.ts`: cadastro tipado dos clientes e estado de cada imagem.

## Comportamento

- Desktop: carrossel automático contínuo com Framer Motion, loop de 22 segundos e movimento sempre ativo.
- Mobile: grid responsivo em duas colunas.
- Hover: elevação, escala discreta, borda em ciano e remoção de escala de cinza.
- Movimento reduzido: animações desativadas quando o sistema informa `prefers-reduced-motion`.

## Acessibilidade e desempenho

- `section` identificada por `aria-labelledby`.
- Textos alternativos em todas as imagens.
- Imagens com `loading="lazy"`, `decoding="async"`, largura e altura definidas.
- Segunda cópia do carrossel oculta de tecnologias assistivas.

## Tecnologias

- React + TypeScript
- TailwindCSS com `preflight` desativado para preservar o CSS existente
- Framer Motion
- Lucide React
