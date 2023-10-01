
import LoginPage from "../page-objects/LoginPage"
import Selector from "../page-objects/Selector"

const loginObj:LoginPage = new LoginPage();

const Selectorobj: Selector = new Selector();

describe('Login to the Home page', () => { 

   
    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123')
    })

    it('get Time from Punch time',() => { 

        Selectorobj.SelectSpan().then((z) => {
            console.log(z);

        });

    });

    

})
