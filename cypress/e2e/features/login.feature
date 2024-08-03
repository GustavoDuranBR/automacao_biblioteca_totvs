Feature: Login
    Login para acesso a Biblioteca TOTVS

    Scenario: Acesso com sucesso
        Given que eu queira acessar a Biblioteca TOTVS
        When eu inserir o login "gustavo" e senha "1234"
        And clicar no botão entrar
        Then tenho o acesso realizado com sucesso

    Scenario: Acesso negado
        Given que eu queira acessar a Biblioteca TOTVS
        When eu inserir o login "gustavo" e senha "...."
        And clicar no botão entrar
        Then tenho o acesso negado