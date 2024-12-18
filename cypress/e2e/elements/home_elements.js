class HomeElements {
    homeMenu = () => '[data-cy=homeMenu]'
    cadastroAutoresMenu = () => '[data-cy=cadastroAutoresMenu]'
    cadastroLivrosMenu = () => '[data-cy=cadastroLivrosMenu]'
    cadastroUsuariosMenu = () => '[data-cy=cadastroUsuariosMenu]'
    sobreMenu = () => '[data-cy=sobreMenu]'
    primeirosPassosMenu = () => '[data-cy=primeirosPassosMenu]'
  
    cadastroAutoresWidget = () => 'po-widget:nth-of-type(1) .po-widget-action'
    cadastroLivrosWidget = () => 'po-widget:nth-of-type(2) .po-widget-action'
    cadastroUsuariosWidget = () => '[data-cy=cadastroUsuariosWidget]'
    sobreWidget = () => '[data-cy=sobreWidget]'
    primeirosPassosWidget = () => '[data-cy=primeirosPassosWidget]'
  }
  export default HomeElements;
  