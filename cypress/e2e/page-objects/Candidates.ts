export default class candidates {
    
    elements = {
        Grid: () => cy.get('.oxd-table-body'),
        Row: '.oxd-table-row',
        shortlist:() => cy.get('.oxd-button--success'),
        shortListHeader:() =>  cy.get('.orangehrm-card-container > .oxd-text'),
        save_shortList:() => cy.get('.oxd-button--secondary'),
        SearchCanName: () => cy.get('.oxd-autocomplete-text-input > input')
    }
    
    response = {
        body: {
            data: {
                id:0,
                firstName:'',
                middleName: '',
                lastName: ''
            }
        }
    }

    getNumberOfrows(){

        return this.elements.Grid().find(this.elements.Row)
    }



    UpdateStatus(id: string){
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`); 
        cy.log(`CandidateID is ${id}`)
        debugger
         this.elements.shortlist().click({ force: true });
         //this.elements.save_shortList().should('be.visible');
        
         //this.elements.save_shortList().click({ force: true });
    }

    ShortList()
    {
        var id = this.response.body.data.id;
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates`); 
        cy.log(`CandidateID is ${id}`)
        
        this.elements.SearchCanName().clear().type(`${this.response.body.data.firstName} ${this.response.body.data.middleName} ${this.response.body.data.lastName}`);

         //this.elements.shortlist().click({ force: true });
        //  this.elements.shortListHeader().should('be.visible');
        
        //  this.elements.save_shortList().click({ force: true });
        
    }
}


