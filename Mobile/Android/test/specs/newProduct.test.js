import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import produtsPage from '../pageobjects/produto.page.js'
import cartPage from '../pageobjects/carrinho.page.js'

describe('Catálogo de produtos - adicionar item ao carrinho', () => {
    it('Deve fazer login e colocar um item no carrinho', async () => {
        await homePage.openMenu()
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openNewProduct()
        await produtsPage.segundoProduto('Eos V-Neck Hoodie')
        await produtsPage.addToCart('Add To Cart')
        expect((await cartPage.carrinho('My Cart')).isDisplayed()).toBeTruthy()
        

    })

})