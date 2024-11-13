import { $, $$ } from '@wdio/globals'

class HomePage {
   
    async openMenu(){
        await $('//android.widget.TextView[@text="Profile"]').click()
    }
    
    async openSearch(){
        await $('//android.widget.TextView[@resource-id="tab-Search"]').click()
    }

    async openNewProduct(){
        await $('//android.view.ViewGroup[@resource-id="see-all-new"]').click()
    }

    async homeLogo(name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }

    }

export default new HomePage();
