
import candidates from "../page-objects/Candidates";
import LoginPage from "../page-objects/LoginPage"
import { HttpMethod, apiOptions, callApi } from '../../support/api';
import addCandidate, { URLs } from "../../support/helpers/CandidatesHelper";


const loginObj: LoginPage = new LoginPage();

const baseUrl = Cypress.config('baseUrl');
const candidatesObj: candidates = new candidates();



describe('Number of items in the candidates Grid Must equal the number of items in the Response ', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123')
    })
    it('Cxxx1: Add new candidate', () => {
        callApi(apiOptions(URLs.candidates, HttpMethod.POST, addCandidate.GenerateCandidateInfo())).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Response: ${JSON.stringify(response)}`);
           
            candidatesObj.response = response;

            // candidatesObj.UpdateStatus(response.body.data.id)

            
        });
    });



    it('Cxxx2: schedule interview for shortlisted candidate', () => {
        candidatesObj.ShortList()

    });

});