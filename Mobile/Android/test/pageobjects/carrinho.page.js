import { $ } from '@wdio/globals'

class CartPage {

   async carrinho(name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }

    async remove(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()
    }

    async cartEmpty(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()
    }

    async goBack(name){
        return await $(`//android.widget.TextView[@text="${name}"]`).click()}
}
export default new CartPage();