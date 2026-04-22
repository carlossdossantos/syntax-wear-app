# Syntax Wear App 👕

O **Syntax Wear App** é uma plataforma de e-commerce de moda de alto desempenho, focada em proporcionar uma experiência de compra fluida e moderna. Desenvolvido com as tecnologias mais recentes do ecossistema React, o projeto prioriza a segurança de tipos (Type-safety), performance e uma interface intuitiva.

## 🚀 Tecnologias e Ferramentas

- **React 19**: Versão mais recente para construção de interfaces reativas.
- **TypeScript**: Garantia de robustez e redução de erros em tempo de desenvolvimento.
- **Vite**: Build system ultra-rápido.
- **TanStack Router**: Roteamento baseado em arquivos com segurança de tipos nativa.
- **Tailwind CSS**: Estilização moderna e responsiva com foco em utilitários.
- **React Hook Form + Zod**: Gerenciamento de formulários complexos com validações rigorosas (CPF, Telefone, CEP, etc.).
- **Context API**: Gerenciamento de estado global para o carrinho de compras.
- **React Icons**: Conjunto de ícones consistente para toda a aplicação.

## ✨ Funcionalidades Principais

- **Catálogo de Produtos**: Listagem dinâmica de produtos com filtros por categoria.
- **Carrinho de Compras**: Sistema completo de adição, remoção e ajuste de quantidades, persistido via contexto.
- **Busca de CEP**: Integração de formulário para cálculo/preenchimento de endereço.
- **Autenticação**: Telas de Login e Cadastro com validações em tempo real.
- **Interface Responsiva**: Design adaptável para dispositivos móveis, tablets e desktops.
- **Galeria de Imagens**: Exibição detalhada de produtos e coleções.

## 📂 Organização do Projeto

```text
src/
├── assets/          # Imagens, fontes e ícones estáticos
├── components/      # Componentes UI reutilizáveis (Button, Card, Drawer, etc.)
├── contexts/        # Provedores de estado global (Ex: CartContext)
├── interfaces/      # Definições de tipos e contratos de dados
├── mocks/           # Dados fictícios para desenvolvimento (Produtos, Categorias)
├── pages/           # Estrutura de rotas (TanStack Router)
│   ├── _app/        # Rotas da aplicação principal (Layout, Home, Produtos)
│   └── _auth/       # Rotas de autenticação (Login, Cadastro)
├── styles/          # Estilos globais e configurações CSS
└── utils/           # Funções utilitárias (Validadores de CPF, Formatação de Moeda)
```

## 🛣️ Estrutura de Rotas

A aplicação utiliza o **TanStack Router** para um roteamento 100% type-safe:

- `/`: Home com destaques e categorias.
- `/products`: Listagem completa de produtos.
- `/products/$productId`: Detalhes de um produto específico.
- `/products/category/$category`: Filtragem por categoria.
- `/about`: Informações sobre a marca.
- `/our-stores`: Localização das lojas físicas.
- `/sign-in` & `/sign-up`: Fluxos de acesso do usuário.

## 🛠️ Instalação e Execução

1. **Clonar e instalar dependências:**
   ```bash
   npm install
   ```

2. **Desenvolvimento (com Hot Reload):**
   ```bash
   npm run dev
   ```

3. **Produção:**
   ```bash
   npm run build
   # Para visualizar a build:
   npm run preview
   ```

---
Desenvolvido como projeto prático no **Curso Webmaster**, focado em melhores práticas de desenvolvimento Front-end.
