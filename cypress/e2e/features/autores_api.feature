Feature: Testar API de Autores
  Testar as funcionalidades de CRUD da API de Autores

  # Cenário para listar todos os autores
  Scenario: Listar todos os autores
    When faço uma requisição GET para a rota "/autores"
    Then a resposta deve ter o status 200
    And a lista de autores deve ser retornada

  # Cenário para cadastrar um novo autor
  Scenario: Cadastrar um novo autor
    When faço uma requisição POST para a rota "/autores" com o corpo:
      """
      {
        "nome": "Jorge Amado",
        "nacionalidade": "Brasil"
      }
      """
    Then a resposta deve ter o status 201
    And o autor "Jorge Amado" deve ser retornado na resposta

  # Cenário para atualizar um autor existente
  Scenario: Atualizar um autor existente
    Given que existe um autor com o nome "Jorge Amado" na lista
    When faço uma requisição PUT para a rota "/autores/{id}" com o corpo:
      """
      {
        "nome": "Jorge Amado Atualizado",
        "nacionalidade": "Brasil"
      }
      """
    Then a resposta deve ter o status 200
    And o autor "Jorge Amado Atualizado" deve ser retornado na resposta

  # Cenário para deletar um autor
  Scenario: Deletar um autor existente
    Given que existe um autor com o nome "Jorge Amado Atualizado" na lista
    When faço uma requisição DELETE para a rota "/autores/{id}"
    Then a resposta deve ter o status 200
    And o autor "Jorge Amado Atualizado" não deve existir mais na lista
