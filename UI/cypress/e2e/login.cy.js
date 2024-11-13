/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

describe('Login na plataforma', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Fazer o login com sucesso', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, josi.tcc (não é josi.tcc? Sair)')
    })

    it('Senha inválida', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senhaincorreta)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail josi.tcc@teste.com está incorreta. Perdeu a senha?')
    })

    it('Usuário inexistente', () => {
        cy.get('#username').type(perfil.usuarioinexistente)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

})