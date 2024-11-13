import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import searchPage from '../pageobjects/search.page.js'
import produtsPage from '../pageobjects/produto.page.js'


describe('Catálogo de produtos', () => {
    it('Deve fazer uma busca por produto', async () => {
        await homePage.openSearch()
        await searchPage.search('jacket')
        expect((await produtsPage.primeiroProduto('Ingrid Running Jacket')).isDisplayed()).toBeTruthy()
    })
})