// cypress/integration/api_test_spec.js

import adduser from "../../support/helpers/signupHelper";


describe('API Tests', function () {

    const baseUrl = 'https://api.realworld.io/api';

    this.beforeEach('', () => {

    })

    it('', () => {
        adduser.cunduitNewUserUsingAPI('ahmad@test.com','121315',`ahmad${Date.now}`);
    })




    // it('C1235:  Login - Create New Account', function() {
    //   const userId = 1;

    //   // Make a GET request to the /users/{id} endpoint
    //   cy.request({  




    //  }).then((response) => {
    //     expect(response.status).to.eq(200); // Expect a 200 OK response
    //     expect(response.body).to.have.property('id', userId);
    //     expect(response.body).to.have.property('name');
    //     expect(response.body).to.have.property('email');
    //     // Add more assertions based on your expected response structure...
    //   });
    // });

    // it('should handle user not found', function() {
    //   const nonExistentUserId = 999999;

    //   // Make a GET request to the /users/{id} endpoint
    //   cy.request({
    //     url: `${baseUrl}/users/${nonExistentUserId}`,
    //     failOnStatusCode: false // This will make sure Cypress doesn't fail the test on non-2xx HTTP responses
    //   }).then((response) => {
    //     expect(response.status).to.eq(404); // Expect a 404 Not Found response
    //     expect(response.body).to.have.property('error', 'User not found');
    //   });
    // });

    // Add more tests as necessary...

});
