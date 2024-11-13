import { $ } from '@wdio/globals'

class SearchPage {
   get lupa (){
        return $('id:searchInput')
   }
   
   async search(produtoNome){
        await this.lupa.setValue(produtoNome)
   }

}

export default new SearchPage();
