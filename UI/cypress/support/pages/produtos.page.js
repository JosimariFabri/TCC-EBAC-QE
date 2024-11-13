/// <reference types="cypress" />

class Produtos {
    
    comprarProduto() {

        cy.get('.post-3111 > .product-block').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Brown').click(); 
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message > .button').click();
        cy.get('.checkout-button').click()  
       
    }

    quantidadeProduto() {
        cy.get('.post-3111 > .product-block').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Brown').click(); 
        cy.get('.input-text').clear().type(200);
        cy.get('.single_add_to_cart_button').click();
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()

    }

}

export default new Produtos()