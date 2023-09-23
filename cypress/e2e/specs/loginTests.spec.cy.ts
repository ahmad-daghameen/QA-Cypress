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

    it('login With Valid Username And Valid Password',() => { 
        //cy.fixture('LoginData.json').as('LoginData');
        cy.get('@loginData').then((data: any) => {
            loginObj.login(data.BothValid.username, data.BothValid.password);
            cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6').contains("Dashboard");
        });
    });
    
    it('login With Valid User And Invalid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.login(data.ValidUsername.username, data.ValidUsername.password);
            cy.get('.oxd-alert-content').should('exist').and('contain.text', 'login');
            
        });

        //cy.get('.oxd-alert-content').contains('Invalid credentials');
    });


    it('login With Invalid User And Valid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.login(data.ValidPassword.username, data.ValidPassword.password);
           
        });
        cy.get('.oxd-button').should('contain','Login');
    });

    it('login With Invalid User And Invalid Password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.login(data.BothInvalid.username, data.BothInvalid.password);
            
        });
        cy.get('.oxd-button').should('contain','Login');
    });
  
    it('login With empty fields',() => { 
        loginObj.login('', '');
        cy.get('.oxd-button').should('contain','Login');
    });
    it('login With empty username',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.login('', data.BothInvalid.password);
            
        });
        cy.get('.oxd-button').should('contain','Login');
    });
    it('login With empty password',() => { 
        cy.get('@loginData').then((data: any) => {
            loginObj.login( data.BothInvalid.username, '');
            
        });
        cy.get('.oxd-button').should('contain','Login');
    });
})
