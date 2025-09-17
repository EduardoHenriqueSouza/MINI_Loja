# Projeto: Tela de Produtos em 4 Abordagens de Estilização

Este projeto implementa a **mesma interface** utilizando quatro técnicas diferentes de estilização no React, com foco em **boas práticas de acessibilidade, responsividade, dark mode e estados de interação**.

## Tecnologias Utilizadas
- **React**
- **Vite** para build/dev
- Estilização:
  - CSS Global
  - CSS Modules
  - Tailwind CSS
  - styled-components
- **ThemeProvider** (na versão styled-components)
- **LocalStorage API** para persistir o tema
- **ARIA attributes** para acessibilidade
- **Lazy loading** nativo (`loading="lazy"`) em imagens

## Como Rodar o Projeto

Cada versão é independente. Para rodar qualquer uma delas:

```bash
cd MINI_Loja
npm install
npm run dev