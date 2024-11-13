import { $ } from '@wdio/globals'

class LoginPage {
   get email (){
        return $('id:email')
   }
   get password (){
        return $('android=new UiSelector().text("Password")')
   }
   get btnLogin (){
        return $('~Login')
   }

   get signUp (){
     return $('~Sign up')
   }

   async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
   }

   async openSignup (){
     await this.signUp.click()
 }
}

export default new LoginPage();
