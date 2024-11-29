Feature: Página Livros
  Acessar as funcionalidades de cadastro na página Livros

  @ignore
  Scenario: Cadastrar Livro utilizando o menu lateral com sucesso
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no campo Data da Publicação
    And preencho o campo Data Publicação com a data "08/09/2009"
    And clico no campo Data da Inclusão
    And preencho o campo Data Inclusão com a data "01/09/2024"
    And clico no campo Disponível
    And seleciono "Sim" no campo Disponível
    And clico no campo Título do Livro
    And preencho o campo com o título "Código Limpo: Habilidades Práticas do Agile Software"
    And clico no campo Autor
    And seleciono o autor "Robert C. Martin"
    And clico no campo Editora
    And preencho o campo com a editora "Alta Books"
    And clico no campo Observações
    And preencho o campo Observações com "Livro essencial de Robert C. Martin sobre práticas para escrever códigos limpos e eficientes."
    And clico no Botão Salvar
    Then o sistema exibe a mensagem "Livro adicionado com sucesso!"

  Scenario: Cadastrar Livro utilizando o menu lateral sem preencher o campo Título
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no campo Data da Publicação
    And preencho o campo Data Publicação com a data "08/09/2009"
    And clico no campo Data da Inclusão
    And preencho o campo Data Inclusão com a data "01/09/2024"
    And clico no campo Disponível
    And seleciono "Sim" no campo Disponível
    And deixo o campo Título do Livro em branco
    And clico no campo Autor
    And seleciono o autor "Robert C. Martin"
    And clico no campo Editora
    And preencho o campo com a editora "Alta Books"
    And clico no campo Observações
    And preencho o campo Observações com "Livro essencial de Robert C. Martin sobre práticas para escrever códigos limpos e eficientes."
    And clico no Botão Salvar
    Then o sistema exibe a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: Cadastrar Livro utilizando o menu lateral sem preencher o campo Autor
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no campo Data da Publicação
    And preencho o campo Data Publicação com a data "08/09/2009"
    And clico no campo Data da Inclusão
    And preencho o campo Data Inclusão com a data "01/09/2024"
    And clico no campo Disponível
    And seleciono "Sim" no campo Disponível
    And clico no campo Título do Livro
    And preencho o campo com o título "Código Limpo: Habilidades Práticas do Agile Software"
    And deixo o campo Autor em branco
    And clico no campo Editora
    And preencho o campo com a editora "Alta Books"
    And clico no campo Observações
    And preencho o campo Observações com "Livro essencial de Robert C. Martin sobre práticas para escrever códigos limpos e eficientes."
    And clico no Botão Salvar
    Then o sistema exibe a mensagem "Preencha todos os campos obrigatórios!"

  Scenario: Cadastrar Livro utilizando o menu lateral sem preencher o campo Editora
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no campo Data da Publicação
    And preencho o campo Data Publicação com a data "08/09/2009"
    And clico no campo Data da Inclusão
    And preencho o campo Data Inclusão com a data "01/09/2024"
    And clico no campo Disponível
    And seleciono "Sim" no campo Disponível
    And clico no campo Título do Livro
    And preencho o campo com o título "Código Limpo: Habilidades Práticas do Agile Software"
    And clico no campo Autor
    And seleciono o autor "Robert C. Martin"
    And deixo o campo Editora em branco
    And clico no campo Observações
    And preencho o campo Observações com "Livro essencial de Robert C. Martin sobre práticas para escrever códigos limpos e eficientes."
    And clico no Botão Salvar
    Then o sistema exibe a mensagem "Preencha todos os campos obrigatórios!"



