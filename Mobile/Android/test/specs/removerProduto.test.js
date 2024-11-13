import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import produtsPage from '../pageobjects/produto.page.js'
import cartPage from '../pageobjects/carrinho.page.js'

describe('Catálogo de produtos - adicionar item no carrinho', () => {
    it('Deve fazer login e remover um item no carrinho', async () => {
        await homePage.openMenu()
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openNewProduct()
        await produtsPage.segundoProduto('Eos V-Neck Hoodie')
        await produtsPage.addToCart('Add To Cart')
        await cartPage.remove('Remove')
        await cartPage.cartEmpty('Continue Shopping')
        expect((await homePage.homeLogo('EBAC Store')).isDisplayed()).toBeTruthy()

    })

})