Feature: Edicao de Livros e Autores

  Scenario: Editar o autor cadastrado
    Given eu esteja na página Home
    When clico na opção Cadastro de Autores no menu lateral
    And sou direcionado para a página Cadastro Autor
    And clico no botão de opções
    And seleciono a opção editar
    And clico no campo Nome do Autor
    And mudo o nome para "Uncle Bob"
    And clico no botão Salvar
    Then o sistema exibe a mensagem "Autor editado com sucesso!"

  Scenario: Editar o Livro cadastrado
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no botão de opções
    And seleciono a opção editar
    And clico no campo Disponível
    And seleciono "Não" no campo Disponível
    And clico no botão Salvar
    Then o sistema exibe a mensagem "Livro editado com sucesso!"
