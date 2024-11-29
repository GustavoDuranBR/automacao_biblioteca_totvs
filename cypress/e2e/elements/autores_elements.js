class AutorElements {
  paginaAutores() {
    return '[data-cy=titleAuthor]'
  }

  campoNome() {
    return '[data-cy=nameAuthor]'
  }

  campoNacionalidade() {
    return '[data-cy=nacionalidadeAuthor]'
  }

  btnSalvar() {
    return '[data-cy=btnSave]'
  }

  btnCancelar() {
    return '[data-cy=btnCancel]'
  }

  tabelaAutores() {
    return '[data-cy=tableAuthor]'
  }

  // Botões sem data-cy
  btnGerenciadorColunas() {
    return '.ng-star-inserted.po-table-actions-column-manager > po-button > .po-button'
  }

  btnActions() {
    return '.po-clickable.po-icon.po-icon-more'
  }

  btnEditar() {
    return 'li:nth-of-type(1) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
  }

  btnExcluir() {
    return 'li:nth-of-type(2) > .ng-star-inserted > .ng-star-inserted.po-item-list.po-item-list__action'
  }
}
export default AutorElements;
