import LoginPage from "../page-objects/LoginPage"



const loginObj: LoginPage = new LoginPage();
const baseUrl = Cypress.config('baseUrl');
var CUID: number;

describe('Login to the Home page', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('loginData').as('loginData');
    })


    it('Password input filed must be of type Password input', () => {
        loginObj.isPassword();
    });


    it('login With Valid Username And Valid Password', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginSuccess(data.BothValid.username, data.BothValid.password);
        });
    });

    it('login With Valid User And Invalid Password', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.ValidUsername.username, data.ValidUsername.password);
        });
    });


    it('login With Invalid User And Valid Password', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.ValidPassword.username, data.ValidPassword.password);
        });
    });

    it('login With Invalid User And Invalid Password', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.BothInvalid.username, data.BothInvalid.password);
        });
    });

    it('login With empty fields', () => {
        loginObj.loginFailedRequiredBoth('', '');
    });

    it('login With empty username', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedRequiredOne('', data.BothValid.password);
        });
    });

    it.only('login With empty password', () => {
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedRequiredOne(data.BothValid.username, '');
            // loginObj.elements.userName().type(data.BothValid.username);
            // loginObj.elements.loginBtn().click();
            // // cy.log(cy.get('input[type="password"]').parent())
            // //cy.get(':nth-child(3) > .oxd-input-group')
            // cy.get(':nth-child(3) > .oxd-input-group span').should('contain.text', 'Required');

            // loginObj.elements.password().parent().should((parentElement) => {
            //     const spanWithRequired = parentElement.find('span.oxd-text');
            //     expect(spanWithRequired).to.exist;
            // });


            // .should('contain', 'span..oxd-input-group > .oxd-text')
            // .and('contain', 'Required');
        });
    });

    it('login With Valid Username And Valid Password and all CAPs, testing case sensitivity', () => {
        //cy.fixture('LoginData.json').as('LoginData');
        cy.get('@loginData').then((data: any) => {
            loginObj.loginFailedInvalidCredintials(data.BothValid.username.toUpperCase(), data.BothValid.password.toUpperCase());
        });
    });

})
