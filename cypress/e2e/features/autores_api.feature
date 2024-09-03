Feature: Testar API de Autores
  Testar as funcionalidades de CRUD da API de Autores

  Scenario: Listar todos os autores
    When faço uma requisição GET para a rota "/autores"
    Then a resposta deve ter o status 200
    And a lista de autores deve ser retornada

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
