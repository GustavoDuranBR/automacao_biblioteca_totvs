Feature: Pagina Home
    Acessar as funcionalidades de cadastros da página Home

    Scenario: Cadastrar Autor utilizando o menu lateral com sucesso
        Given eu esteja na página Home 
        When clico na opção Cadastro de Autores no menu lateral
        And sou direcionado para a página Cadastro Autor
        And clico no campo Nome do Autor
        And preencho o campo selecionado com o nome "Clarice Lispector" 
        And clico no campo Nacionalidade
        And preencho o campo selecionado com a nacionalidade "Chechelnyk, Ucrânia"
        And clico no botão Salvar
        Then o sistema exibe a mensagem "Autor adicionado com sucesso!"

    Scenario: Cadastrar Autor utilizando o menu lateral sem preencher o campo Nacionalidade
        Given eu esteja na página Home 
        When clico na opção Cadastro de Autores no menu lateral
        And sou direcionado para a página Cadastro Autor
        And clico no campo Nome do Autor
        And preencho o campo selecionado com o nome "Machado de Assis" 
        And clico no campo Nacionalidade
        And e deixo o campo selecionado em branco ""
        And clico no botão Salvar
        Then o sistema exibe a mensagem "Preencha o campo Nacionalidade."

    Scenario: Cadastrar Autor utilizando o menu lateral sem preencher o campo Nome do Autor
        Given eu esteja na página Home 
        When clico na opção Cadastro de Autores no menu lateral
        And sou direcionado para a página Cadastro Autor
        And clico no campo Nome do Autor
        And e deixo o campo selecionado em branco ""
        And clico no campo Nacionalidade
        And preencho o campo selecionado com a nacionalidade "São Paulo, Brasil"
        And clico no botão Salvar
        Then o sistema exibe a mensagem "Preencha o campo Nome do Autor."

    Scenario: Cadastrar Autor utilizando o menu lateral sem preencher os campos 
        Given eu esteja na página Home 
        When clico na opção Cadastro de Autores no menu lateral
        And sou direcionado para a página Cadastro Autor
        And clico no campo Nome do Autor
        And e deixo o campo selecionado em branco ""
        And clico no campo Nacionalidade
        And e deixo o campo selecionado em branco ""
        And clico no botão Salvar
        Then o sistema exibe a mensagem "Preencha todos os campos."