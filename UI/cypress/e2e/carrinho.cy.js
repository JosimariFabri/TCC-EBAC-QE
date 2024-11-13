/// <reference types="cypress"/>
import Produtos from '../support/pages/produtos.page'
import Login from '../support/pages/login.page'

describe('Adicionar item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Adicionar produto no carrinho e fazer login corretamente', () => {
        Produtos.comprarProduto()
        cy.get('.woocommerce-form-login-toggle > .woocommerce-info').should('contain', 'Já está cadastrado? Clique aqui para entrar')
        cy.get('.showlogin').click()
        Login.fazerLogin()   
    })

    it('Não deve adicionar produto no carrinho com quantidade acima do estoque', () => {
        Produtos.quantidadeProduto()
    })
    
    it.only('Deve sinalizar quando não houver o produto disponível na loja', () => {
        Produtos.buscarProduto('camiseta')
        cy.get('.woocommerce-info').should('contain', 'Nenhum produto foi encontrado para a sua seleção.')

    })
});