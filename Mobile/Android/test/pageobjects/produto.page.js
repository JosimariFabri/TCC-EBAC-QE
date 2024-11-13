import { $ } from '@wdio/globals'

class ProdutsPage {

   async primeiroProduto(name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }

    async segundoProduto(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()
    }

    async addToCart(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()
    }

    async goBack(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()}
}

export default new ProdutsPage();