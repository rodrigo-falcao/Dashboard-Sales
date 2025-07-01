# 🚀Dashboard Sales

![Status](https://img.shields.io/badge/Status-Finalizado-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-enabled-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-enabled-F7B93E?logo=prettier)
![JWT](https://img.shields.io/badge/JWT-authentication-000000?logo=jsonwebtokens)
![Jest](https://img.shields.io/badge/Jest-tested-C21325?logo=jest)
![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?logo=cypress)
![Postman](https://img.shields.io/badge/Postman-API%20Test-FF6C37?logo=postman)
![Husky](https://img.shields.io/badge/Husky-git%20hooks-8C52FF?logo=git)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github)

Este projeto é um Dashboard desenvolvido com React, utilizando TypeScript e diversas bibliotecas modernas para criar uma interface dinâmica e funcional. Ele inclui suporte para testes unitários e end-to-end (E2E), além de ferramentas para garantir a qualidade do código e a escalabilidade.

## 🌍 Acesso ao Projeto

🔗 [Clique aqui para acessar](https://dashboard-sales-gules.vercel.app/)

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Styled Components:** Biblioteca para estilização de componentes com CSS-in-JS.
- **Material UI:** Componentes prontos e estilizados para React.
- **Chart.js:** Biblioteca para gráficos interativos.
- **React Chart.js 2:** Wrapper para integração do Chart.js com React.

## 🌐 Gerenciamento de Estado

- O **Redux Toolkit** foi utilizado para gerenciar o estado global, incluindo a funcionalidade de criação de perfis. O slice `createProfile` facilita a manipulação dos dados do perfil e mensagens relacionadas, garantindo uma arquitetura limpa e escalável.

- O **Context API** foi utilizado para gerenciar o tema global da aplicação, permitindo alternar entre os temas **claro** e **escuro**. O `AppThemeProvider` encapsula toda a aplicação e fornece o tema atual para os componentes. A alternância de tema é feita através da função `toggleTheme`, que atualiza o estado e salva a preferência no `localStorage`.

## 🧭 Roteamento

O projeto utiliza o **React Router DOM** para gerenciar as rotas da aplicação de forma eficiente e dinâmica. Ele permite:

- Definição de rotas: Configuração de rotas para diferentes páginas e componentes.
- Navegação dinâmica: Transição entre páginas sem recarregar a aplicação.
- Proteção de rotas: Implementação de rotas privadas para áreas restritas.
- Parâmetros de URL: Manipulação de parâmetros dinâmicos diretamente na URL.

## 🔗 Integração com o Backend

Para verificar e testar as APIs do backend, utilizamos o **Postman** como ferramenta principal. Ele foi essencial para validar a comunicação entre o frontend e o backend, garantindo que os endpoints funcionassem corretamente em diferentes cenários.

#### Funcionalidades testadas

- **Criação de leads:** Teste de endpoints para registrar novos leads no sistema.
- **Criação de usuários:** Validação do processo de registro de novos usuários, incluindo autenticação e validação de dados.
- **Deleção de registros:** Teste de endpoints para excluir leads ou usuários do sistema.
- **Atualização de dados:** Verificação de endpoints para modificar informações existentes.
- **Autenticação:** Simulação de login e validação de tokens JWT.
- **Listagem de dados:** Teste de endpoints para recuperar listas de leads, usuários ou outros dados.

## ✅ Testes

- **Jest:** Framework de testes para JavaScript.
- **Cypress:** Framework para testes end-to-end.
- **Postman**: Utilizado para verificar e testar as APIs do backend, garantindo a integração correta com o frontend.

## 🧰 Ferramentas de Desenvolvimento

- **Vite:** Ferramenta de build rápida para projetos modernos.
- **ESLint:** Linter para garantir a qualidade do código.
- **Prettier:** Formatador de código.
- **Husky:** Ferramenta para configurar hooks de Git.

🔹 Projeto criado para aprendizado e prática! 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/109d63b8-d184-4a94-8c83-8bb52b655de8)


