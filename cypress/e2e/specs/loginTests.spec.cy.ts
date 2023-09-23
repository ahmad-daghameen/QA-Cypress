import LoginPage from "../page-objects/LoginPage"



const loginObj:LoginPage = new LoginPage();
const baseUrl = Cypress.config('baseUrl');
var CUID: number;

describe('Login to the Home page', () => { 

   
    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                cy.fixture('loginData').as('loginData');
    })


    it('Password input filed must be of type Password input',() => { 
        //cy.fixture('LoginData.json').as('LoginData');
        loginObj.isPassword();
    });


    it('login With Valid Username And Valid Password',() => { 
        //cy.fixture('LoginData.json').as('LoginData');
        cy.get('@loginData').then((data: any) => {
            loginObj.loginSuccess(data.BothValid.username, data.BothValid.password);
        });
    });
    
    it('login With Valid User And Invalid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.ValidUsername.username, data.ValidUsername.password);
        });

        
    });


    it('login With Invalid User And Valid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.ValidPassword.username, data.ValidPassword.password);
        });
        
    });

    it('login With Invalid User And Invalid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.BothInvalid.username, data.BothInvalid.password);
        });
    });
  
    it('login With empty fields',() => { 
        loginObj.loginFailedRequiredBoth('','');
    });

    it('login With empty username',() => { 
        cy.get('@loginData').then((data: any) => {
          loginObj.loginFailedRequiredOne('',data.BothValid.password);
        });
    });

    it('login With empty password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedRequiredOne(data.BothValid.username, '');
          });
    });

    it('login With Valid Username And Valid Password and all CAPs, testing case sensitivity',() => { 
        //cy.fixture('LoginData.json').as('LoginData');
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.BothValid.username.toUpperCase(), data.BothValid.password.toUpperCase());
        });
    });

})
