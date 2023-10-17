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
        cell: (rid: number, cid: number) => cy.get(`.oxd-table-body > :nth-child(${rid}) > .oxd-table-row > :nth-child(${cid})`),
        cell2: (rid: number, cid: number) => cy.get(`#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(${rid}) > div > div:nth-child(${cid})`),
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





        callApi(apiOptions(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`, HttpMethod.POST, addCandidate.GenerateInterviewInfo())).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`Response: ${JSON.stringify(response)}`);

        });




    }


    Schedule_Interview() {
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
        this.elements.interviewer().parent().contains('span', 'Odis  Adalwin').click({ force: true });
        this.elements.interviewTitle().clear().type(`Dominic`);

        cy.intercept('POST', `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shedule-interview`).as('postRequest');
        this.elements.save_shortList().click({ force: true });


    }


    // searchTableByColumnValues(url: string, columnValues: string[]) {
    //         cy.visit(url);

    //     cy.get('.orangehrm-container > .oxd-table > .oxd-table-body').within(() => {
    //       cy.get('.oxd-table-row').each((row) => {
    //         let allValuesMatch = true;

    //         cy.wrap(columnValues).each((expectedValue: string, index) => {
    //           cy.get(`.oxd-table-cell:eq(${index})`).should('contain', expectedValue);

    //           cy.get(`.oxd-table-cell:eq(${index})`).invoke('text').then((actualValue: string) => {
    //             if (actualValue.trim() !== expectedValue) {
    //               allValuesMatch = false;
    //             }
    //           });
    //         });

    //         if (allValuesMatch) {
    //           row.click();
    //         }
    //       });
    //     });
    //   }



    searchTableByColumnValues(url: string, columnValues: string[]) {
        cy.visit(url);
        cy.get('.orangehrm-container > .oxd-table > .oxd-table-body').within(() => {
            cy.get('.oxd-table-row').each((row, rowIndex) => {
                // if (rowIndex > 0) {
                    let allValuesMatch = true;
                    row.click();

                    cy.wrap(columnValues).each((expectedValue: string, columnIndex) => {
                        // if (columnIndex > 1) {
                            var x = cy.get(`.oxd-table-body > :nth-child(${rowIndex + 1}) > .oxd-table-row > :nth-child(${columnIndex + 2})`);
                            this.elements.cell(rowIndex + 1, columnIndex + 2).should('contain', expectedValue);

                            this.elements.cell(rowIndex + 1, columnIndex + 2).invoke('text').then((actualValue) => {
                                cy.log(`Actual Value: ${actualValue.trim()}, expectedValue: ${expectedValue}`);
                                if (actualValue.trim() !== expectedValue) {
                                    allValuesMatch = false;
                                }
                            });
                        // }
                    });
                    if (allValuesMatch) {
                        row.click();
                    // }
                }
            });

        });
    }

}


