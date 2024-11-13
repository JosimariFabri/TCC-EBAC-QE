/// <reference types="cypress" />

class Login {
    fazerLogin() {
        cy.get('#username').type('josi.tcc@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        cy.get('.woocommerce-info').should('contain', 'Você tem um cupom de desconto? Clique aqui e informe o código do seu cupom de desconto')
    }
}

module.exports = new Login()