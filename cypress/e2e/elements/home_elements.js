class HomeElements {
    homeMenu = () => '[data-cy="homeMenu"]'
    cadastroAutoresMenu = () => '/html/body/app-root/app-home/div/po-menu/div/div[2]/div/div[2]/div/div/nav/ul/li[2]/po-menu-item/a/div/span'
    cadastroLivrosMenu = () => '[data-cy="cadastroLivrosMenu"]'
    cadastroUsuariosMenu = () => '[data-cy="cadastroUsuariosMenu"]'
    sobreMenu = () => '[data-cy="sobreMenu"]'
    primeirosPassosMenu = () => '[data-cy="primeirosPassosMenu"]'
  
    cadastroAutoresWidget = () => 'po-widget:nth-of-type(1) .po-widget-action'
    cadastroLivrosWidget = () => '[data-cy="cadastroLivrosWidget"]'
    cadastroUsuariosWidget = () => '[data-cy="cadastroUsuariosWidget"]'
    sobreWidget = () => '[data-cy="sobreWidget"]'
    primeirosPassosWidget = () => '[data-cy="primeirosPassosWidget"]'
  }
  export default HomeElements;
  