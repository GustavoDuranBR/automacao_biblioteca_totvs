/// <reference types="Cypress" />

import HomePage from "../pages/home_page"

const homePage = new HomePage()

// Cadastrar Autor utilizando o menu lateral com sucesso
Given(/^eu esteja na página Home$/, () => {
	return homePage.acessarHomePage()
})

When(/^clico na opção Cadastro de Autores no menu lateral$/, () => {
	return homePage.cadastrarAutorMenuLateral()
})

When(/^sou direcionado para a página Cadastro Autor$/, () => {
	return true
})

When(/^clico no campo Nome do Autor$/, () => {
	return true
})

When(/^preencho o campo selecionado com o nome "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no campo Nacionalidade$/, () => {
	return true
})

When(/^preencho o campo selecionado com a nacionalidade "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no botão Salvar$/, () => {
	return true
})

Then(/^o sistema exibe a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})


// Cadastrar Autor utilizando o menu lateral sem preencher o campo Nacionalidade
Given(/^eu esteja na página Home$/, () => {
	return true
})

When(/^clico na opção Cadastro de Autores no menu lateral$/, () => {
	return true
})

When(/^sou direcionado para a página Cadastro Autor$/, () => {
	return true
})

When(/^clico no campo Nome do Autor$/, () => {
	return true
})

When(/^preencho o campo selecionado com o nome "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no campo Nacionalidade$/, () => {
	return true
})

When(/^e deixo o campo selecionado em branco "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no botão Salvar$/, () => {
	return true
})

Then(/^o sistema exibe a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})


// Cadastrar Autor utilizando o menu lateral sem preencher o campo Nome do Autor
Given(/^eu esteja na página Home$/, () => {
	return true
})

When(/^clico na opção Cadastro de Autores no menu lateral$/, () => {
	return true
})

When(/^sou direcionado para a página Cadastro Autor$/, () => {
	return true
})

When(/^clico no campo Nome do Autor$/, () => {
	return true
})

When(/^e deixo o campo selecionado em branco "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no campo Nacionalidade$/, () => {
	return true
})

When(/^preencho o campo selecionado com a nacionalidade "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no botão Salvar$/, () => {
	return true
})

Then(/^o sistema exibe a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})


//Cadastrar Autor utilizando o menu lateral sem preencher os campos
Given(/^eu esteja na página Home$/, () => {
	return true
})

When(/^clico na opção Cadastro de Autores no menu lateral$/, () => {
	return true
})

When(/^sou direcionado para a página Cadastro Autor$/, () => {
	return true
})

When(/^clico no campo Nome do Autor$/, () => {
	return true
})

When(/^e deixo o campo selecionado em branco "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no campo Nacionalidade$/, () => {
	return true
})

When(/^e deixo o campo selecionado em branco "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})

When(/^clico no botão Salvar$/, () => {
	return true
})

Then(/^o sistema exibe a mensagem "([^"]*)"$/, (args1) => {
	console.log(args1)
	return true
})
