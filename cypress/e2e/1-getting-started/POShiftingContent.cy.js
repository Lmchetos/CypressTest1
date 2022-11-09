import{MainPage} from '../../page-objects/main'
import{ShiftingPage} from '../../page-objects/shifting'
import{TestPage} from '../../page-objects/test'


describe('TEST DE SHIFTING', () =>{

    const shiftingPage = new ShiftingPage()
    const mainPage = new MainPage()
    const testPage = new TestPage()
    beforeEach(() =>{
        mainPage.navigate()
        mainPage.clickShiftingOption()
    })


it('ShiftingContent', ()=>{

    shiftingPage.clickExample1()
    testPage.checkElements()

})
})


