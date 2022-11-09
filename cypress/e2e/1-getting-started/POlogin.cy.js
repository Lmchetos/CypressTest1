//<reference types="cypress" />

import{MainPage} from '../../page-objects/main'
import{LoginPage} from '../../page-objects/login'
import{WelcomePage} from '../../page-objects/welcome'


describe('TEST DE LOGIN', () =>{

    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()
    beforeEach(() =>{
        mainPage.navigate()
        mainPage.clickLoginOption()
    })

 it('A valid user can login', () =>
{   
    //Para hacer solo el test de uno de los del grupo poner: it.alone
    //para saltar uno del grupo: it.skip
    //Para que haga algo comun con todos los test, utilizar el BeforeEach

    loginPage.fillUser("tomsmith")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("You logged into a secure area!")
    
    

 })

 it('An invalid password cannot login', () =>
{   

    loginPage.fillUser("tomsmith")
    loginPage.fillPass("SuperSecretPassword!5")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("Your password is invalid!")

 })

 it('A invalid user cannot login', () =>
{   
    loginPage.fillUser("Tomsmith")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("Your username is invalid!")
    

 })

 it('An empty user cannot login', () =>
 {   
    //loginPage.fillUser()
    //loginPage.fillPass()
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("Your username is invalid!")
    
   
 
 })

})


