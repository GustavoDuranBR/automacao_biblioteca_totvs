class LoginElements {
    textoBoasVindas = () => {
        return '.po-page-login-header-welcome'
    }
    campoEmail = () => {
        return 'input[name="login"]'
    }

    campoSenha = () => {
        return 'input[name="password"]'
    }

    btnEntrar = () => {
        return '.po-lg-12.po-page-login-button.po-page-login-field-size > .po-button'
    }
} export default LoginElements;
