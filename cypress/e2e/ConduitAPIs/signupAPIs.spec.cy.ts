// cypress/integration/api_test_spec.js

import { faker } from "@faker-js/faker";
import helpers from "../../support/helpers/methodsHelper";
import adduser, { URLs } from "../../support/helpers/signupHelper";
import { HttpMethod, apiOptions, callApi } from '../../support/api';



describe('API Tests', function () {

    const baseUrl = 'https://api.realworld.io/api';

    this.beforeEach('', () => {

    })

    it('Cxxx1: Login - Create User', () => {
        adduser.cunduitNewUserUsingAPI(`ahmad@test${helpers.generateUniqueID()}.com`,'121315',faker.person.fullName({firstName: 'ahmad', sex: 'male'}));
    })




    it.only('Cxxx2: Login - should call the API successfully', () => {
        callApi(apiOptions(URLs.users, HttpMethod.POST, adduser.GenerateUserInfo())).then((response) => {
            expect(response.status).to.eq(201);
            // Add more assertions as needed
        });
    });

    // todo validate for required pyload when required
    // todo refactore Options of the callApi 

});


