import { HttpMethod, apiOptions, callApi } from "../../support/api";
import addCandidate from "../../support/helpers/CandidatesHelper";

export default class candidates {

    elements = {
        Grid: () => cy.get('.oxd-table-body'),
        Row: '.oxd-table-row',
        shortlist: () => cy.get('.oxd-button--success'),
        shortListHeader: () => cy.get('.oxd-form > .oxd-text--h6'),
        save_shortList: () => cy.get('.oxd-button--secondary'),
        save_shortListHeader: () => cy.get('.orangehrm-card-container > .oxd-text'),
        SearchCanName: () => cy.get('.oxd-autocomplete-text-input > input'),
        SearchBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        suggestionList: () => cy.get('.oxd-autocomplete-option > span'),
        firstRowEye: () => cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon'),
        saveShortListNote: () => cy.get('.oxd-textarea'),
        interviewDate: () => cy.get('.oxd-date-input > .oxd-input'),
        interviewer: () => cy.get('.oxd-autocomplete-text-input > input'),
        interviewTitle: () => cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    }

    response = {
        body: {
            data: {
                id: 0,
                firstName: '',
                middleName: '',
                lastName: ''
            }
        }
    }

    getNumberOfrows() {

        return this.elements.Grid().find(this.elements.Row)
    }



    UpdateStatus(id: string) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`);
        cy.log(`CandidateID is ${id}`)
        debugger
        this.elements.shortlist().click({ force: true });


    }

    ShortList() {
        var id = this.response.body.data.id;
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates`);
        cy.log(`CandidateID is ${id}`)

        this.elements.SearchCanName().clear().type(`${this.response.body.data.firstName}`);
        cy.wait(1000);
        this.elements.suggestionList().click({ force: true });
        this.elements.SearchBtn().click({ force: true });
        this.elements.firstRowEye().click({ force: true });
        this.elements.shortListHeader().should('be.visible');
        this.elements.shortlist().click({ force: true });

        this.elements.save_shortListHeader().should('be.visible');
        cy.intercept('PUT', `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`).as('postRequest');
        this.elements.saveShortListNote().clear().type(`${this.response.body.data.firstName}`);
        this.elements.save_shortList().click({ force: true });
       
       


          
        callApi(apiOptions(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`, HttpMethod.POST,addCandidate.GenerateInterviewInfo())).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Response: ${JSON.stringify(response)}`);
                    
        });




    }


    Schedule_Interview(){
var id = this.response.body.data.id;
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates`);
        cy.log(`CandidateID is ${id}`)

        this.elements.SearchCanName().clear().type(`${this.response.body.data.firstName}`);
        cy.wait(1000);
        this.elements.suggestionList().click({ force: true });
        this.elements.SearchBtn().click({ force: true });
        this.elements.firstRowEye().click({ force: true });
        this.elements.shortListHeader().should('be.visible');
        this.elements.shortlist().click({ force: true });
        this.elements.interviewDate().invoke('val', '10/10/2023').trigger('change');
        this.elements.interviewer().clear().type(`Dominic`);
        cy.wait(1000);
        this.elements.interviewer().parent().contains('span','Odis  Adalwin').click({ force: true });
        this.elements.interviewTitle().clear().type(`Dominic`);

        cy.intercept('POST', `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`).as('postRequest');
        this.elements.save_shortList().click({ force: true });
      
       
    }

}


