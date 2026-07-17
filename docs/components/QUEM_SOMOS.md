# Quem Somos

Implementado em 17/07/2026.

## Estrutura

- Rota institucional independente: `/quem-somos`.
- Hero com posicionamento institucional e destaque para mais de duas décadas de experiência.
- Seção narrativa com a trajetória da MoviSys.
- Blocos de missão e visão.
- Lista semântica dos seis valores da empresa.
- Manifesto final com assinatura da marca e acesso ao contato.

## Componentes e tecnologias

- `AboutPage.jsx`: conteúdo, navegação, SEO e estrutura semântica.
- `Brand.jsx`: identidade reutilizada entre a página inicial e a página institucional.
- `aboutPage.css`: estilos responsivos alinhados ao Design System existente.
- React, Framer Motion e Lucide React.

## Acessibilidade e desempenho

- Títulos vinculados às seções por `aria-labelledby`.
- Navegação atual identificada por `aria-current="page"`.
- Animações respeitam `prefers-reduced-motion`.
- Imagem do manifesto utiliza carregamento tardio.
- Menu completo disponível em desktop e dispositivos móveis.

## SEO

- Título específico: `Quem Somos | MoviSys`.
- Descrição institucional específica na rota.
