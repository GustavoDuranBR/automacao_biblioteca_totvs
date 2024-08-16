# Projeto de Automação em Cypress + Cucumber

![Cypress](https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)


## Status do Projeto
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)


Este projeto está atualmente em desenvolvimento. 
As funcionalidades principais estão sendo implementadas e testadas. 
Algumas funcionalidades podem não estar completas ou totalmente testadas. 
Agradecemos sua compreensão e feedback enquanto continuamos a melhorar e refinar o projeto.

## Visão Geral

Este projeto utiliza **Cypress** e **Cucumber** para automação de testes de uma aplicação de biblioteca TOTVS. 
A aplicação permite adicionar, editar e excluir autores, livros e usuários. O projeto segue a técnica de **Page Object Model** (POM) 
e utiliza **data-cy** para facilitar a seleção de elementos durante os testes.

## Objetivo

O objetivo deste projeto é garantir que todas as funcionalidades principais da aplicação estejam funcionando corretamente 
e que a experiência do usuário seja a esperada. Os testes são divididos em categorias, incluindo navegação, CRUD (Create, 
Read, Update, Delete), e validação de mensagens.

## Estrutura do Projeto

- **cypress/fixtures**: Contém dados de teste.
- **cypress/integration**: Contém os testes automatizados escritos em Cucumber.
- **cypress/page_objects**: Contém os arquivos de Page Object Model, organizando a interação com diferentes páginas da aplicação.
- **cypress/support**: Contém comandos personalizados e configurações gerais.

## Tecnologias Utilizadas

- **Cypress**: Framework para testes de front-end que proporciona uma execução rápida e confiável de testes.
- **Cucumber**: Ferramenta que permite escrever testes em uma linguagem natural usando Gherkin.
- **Page Object Model**: Técnica que organiza o código de teste e facilita a manutenção.
- **data-cy**: Atributo personalizado usado para selecionar elementos em testes, promovendo uma abordagem mais robusta
- e menos propensa a falhas devido a alterações no HTML.

## Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/GustavoDuranBR/automacao_biblioteca_totvs.git
   ```

2. **Instale as Dependências**

   Navegue até o diretório do projeto e execute:

   ```bash
   npm install
   ```

3. **Configure o Ambiente**

   Certifique-se de ter as variáveis de ambiente necessárias definidas para a configuração do Cypress e qualquer outra configuração
   específica da aplicação.

## Execução dos Testes

Para executar os testes, utilize o comando:

```bash
npx cypress open
```

Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes.

Para rodar os testes em modo headless (sem interface gráfica), use:

```bash
npx cypress run
```

## Planejamento de Testes

### 1. Objetivo dos Testes

- Validar o correto funcionamento do fluxo de cadastro, edição e exclusão de autores, livros e usuários.
- Garantir que as mensagens de sucesso e erro sejam exibidas corretamente ao usuário.
- Assegurar a integridade dos dados inseridos e manipulados na aplicação.

### 2. Escopo dos Testes

- Testes de UI para as páginas de cadastro, edição e exclusão.
- Testes de validação de formulários.
- Testes de mensagens de sucesso e erro.
- Testes de navegação entre páginas.

### 3. Testes Realizados

#### Testes de Navegação

- **Descrição**: Verificação da navegação do menu lateral para as páginas de cadastro, edição e exclusão.
- **Status**: Realizado com sucesso.

#### Testes de Cadastro com Sucesso

- **Descrição**: Inserção de um autor, livro ou usuário com todos os campos preenchidos corretamente e verificação
- das mensagens de sucesso.
- **Status**: Realizado com sucesso.

#### Testes de Validação de Formulário

- **Descrição**: Teste de submissão de formulários com campos obrigatórios em branco e verificação das mensagens
- de erro correspondentes.
- **Status**: Realizado com sucesso.

### 4. Testes a Realizar

#### Testes de Edição

- **Descrição**: Editar um autor, livro ou usuário existente e validar que os dados foram atualizados corretamente.

#### Testes de Exclusão

- **Descrição**: Excluir um autor, livro ou usuário e validar que ele foi removido corretamente da lista.

#### Testes de Performance

- **Descrição**: Verificar o tempo de resposta da aplicação durante as operações de cadastro, edição e exclusão.

#### Testes de Integração

- **Descrição**: Validar a integração entre os componentes da aplicação, especialmente entre o front-end e o back-end
- durante as operações CRUD.

## Contribuição

Contribuições são bem-vindas! Por favor, siga as etapas abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua modificação (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
