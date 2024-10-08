## Planejamento de Testes

**1. Objetivo dos Testes:**

- **Validar** o correto funcionamento do fluxo de cadastro, edição e exclusão de autores.
- **Garantir** que as mensagens de sucesso e erro sejam exibidas corretamente ao usuário.
- **Assegurar** a integridade dos dados inseridos e manipulados na aplicação.

**2. Escopo dos Testes:**

- Testes de UI para a página de cadastro de autores.
- Testes de validação de formulário.
- Testes de mensagens de sucesso e erro.
- Testes de navegação entre páginas.

**3. Testes Realizados:**

- **Testes de Navegação:**
    - **Descrição:** Verificação da navegação do menu lateral para a página de cadastro de autores.
    - **Status:** Realizado com sucesso.

- **Testes de Cadastro com Sucesso:**
    - **Descrição:** Inserção de um autor com todos os campos preenchidos corretamente e verificação 
    da mensagem "Autor adicionado com sucesso!".
    - **Status:** Realizado com sucesso.

- **Testes de Validação de Formulário:**
    - **Descrição:** Teste de submissão do formulário com campos obrigatórios em branco e verificação 
    das mensagens de erro correspondentes.
    - **Status:** Realizado com sucesso.

**4. Testes a Realizar:**

- **Testes de Edição de Autor:**
    - **Descrição:** Editar um autor existente e validar que os dados foram atualizados corretamente.

- **Testes de Exclusão de Autor:**
    - **Descrição:** Excluir um autor e validar que ele foi removido corretamente da lista.

- **Testes de Performance:**
    - **Descrição:** Verificar o tempo de resposta da aplicação durante as operações de cadastro, 
    edição e exclusão.

- **Testes de Integração:**
    - **Descrição:** Validar a integração entre os componentes da aplicação, especialmente entre o 
    front-end e o back-end durante as operações CRUD.
