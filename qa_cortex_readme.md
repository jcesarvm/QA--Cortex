# QA - Cortex

Este repositório contém automações de testes usando **Cypress** para validar funcionalidades de um sistema web de e-commerce.

## Tecnologias utilizadas

- **Cypress** - Framework de automação de testes end-to-end.
- **Faker.js** - Biblioteca para gerar dados falsos (usuários, e-mails, senhas, endereços).
- **JavaScript** - Linguagem principal para os testes.

## Estrutura do projeto

- `cypress/e2e/` - Contém todos os testes end-to-end.
- `cypress/support/` - Contém comandos customizados e configurações do Cypress.
- `cypress/fixtures/` - Dados de teste estáticos ou gerados dinamicamente.
- `package.json` - Gerenciamento de dependências do Node.js.

## Como rodar os testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/jcesarvm/QA--Cortex.git
   cd QA--Cortex
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npx cypress open   # Para abrir a interface do Cypress
   npx cypress run    # Para rodar todos os testes no terminal
   ```

## Testes incluídos

1. Cadastro de usuário com dados gerados pelo Faker.js.
2. Login e logout de usuários.
3. Verificação de navegação e exibição da página "All Products".
4. Validação de detalhes de produtos (nome, categoria, preço, disponibilidade, condição, marca).
5. Testes básicos de API para CRUD de produtos.

## Observações

- Para os testes de API funcionarem, é necessário que o servidor esteja ativo e acessível.
- Os testes end-to-end foram desenvolvidos pensando em e-commerce com fluxo de cadastro, login, produtos e detalhes.

