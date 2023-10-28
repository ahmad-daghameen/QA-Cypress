

import LoginPage from "../page-objects/LoginPage"



const loginObj: LoginPage = new LoginPage();

const baseUrl = Cypress.config('baseUrl');



describe('Number of items in the candidates Grid Must equal the number of items in the Response ', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123')
    })
    it('Cxxx1: Add new candidate', () => {
        loginObj.logout();
    });



    
});