Feature: Exclusão de Livros e Autores

  Scenario: Excluir o Livro cadastrado
    Given eu esteja na página Home
    When clico na opção Cadastro Livros no menu lateral
    And sou direcionado para a página Cadastro Livro
    And clico no botão de opções
    And seleciono a opção excluir
    Then o sistema exibe a mensagem "Livro excluído com sucesso!"

  Scenario: Excluir o autor cadastrado  
    Given eu esteja na página Home
    When clico na opção Cadastro de Autores no menu lateral
    And sou direcionado para a página Cadastro Autor
    And clico no botão de opções 
    And seleciono a opção excluir 
    Then o sistema exibe a mensagem "Autor excluído com sucesso!"
