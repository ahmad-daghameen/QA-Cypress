
import candidates from "../page-objects/Candidates";
import LoginPage from "../page-objects/LoginPage"



const loginObj:LoginPage = new LoginPage();

const baseUrl = Cypress.config('baseUrl');
const candidatesObj: candidates = new candidates();



describe('Number of items in the candidates Grid Must equal the number of items in the Response ', () => { 

   
    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123')
    })

    it('Visit Candidates grid and intercept the request',() => { 
       


        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?**').as('getItems');

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates'); 
  
        cy.wait('@getItems').then((intercepted) => {
           return new  Cypress.Promise((resolve) => {
              const numberOfItems = intercepted.response.body.meta.total;
              //const total = response.body.meta.total;
              resolve(numberOfItems);
           });
        }).then((numberOfItems) => {
           cy.log(`Number of items: ${numberOfItems}`);

           candidatesObj.getNumberOfrows().should('have.length',numberOfItems)

        });




    });

});