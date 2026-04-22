# Syntax Wear App 👕

O **Syntax Wear App** é uma aplicação moderna de e-commerce/catálogo de moda desenvolvida com foco em performance e experiência do desenvolvedor. O projeto utiliza as tecnologias mais recentes do ecossistema React para garantir um roteamento seguro e uma build extremamente rápida.

## 🚀 Tecnologias Utilizadas

- **React 18+**: Biblioteca principal para construção da interface.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Vite**: Ferramenta de build de última geração para um desenvolvimento ágil.
- **TanStack Router**: Roteamento baseado em arquivos com segurança de tipos (Type-safe).
- **ESLint**: Padronização de código e boas práticas.

## 📂 Estrutura de Pastas (Principais)

```text
src/
├── components/     # Componentes reutilizáveis (Header, Footer, etc.)
├── pages/          # Estrutura de rotas da aplicação
│   └── _app/       # Layout principal e rotas autenticadas/internas
└── main.tsx        # Ponto de entrada da aplicação
```

## 🛣️ Roteamento

A aplicação utiliza o roteamento baseado em arquivos do **TanStack Router**. 
- O layout principal está definido em `src/pages/_app/layout.tsx`, que gerencia o posicionamento fixo do `<Header />` e `<Footer />`, utilizando o componente `<Outlet />` para renderizar as sub-rotas.

## 🛠️ Como rodar o projeto

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Para gerar a build de produção:**
    ```bash
    npm run build
    ```

## 📝 Notas de Desenvolvimento

- Este projeto foi configurado inicialmente usando o template `react-ts` do Vite.
- O roteamento é configurado para ser totalmente *Type-safe*, o que significa que o compilador avisará sobre erros em links e parâmetros de rotas antes mesmo de você rodar o app.

---
Desenvolvido como parte do Curso Webmaster.

