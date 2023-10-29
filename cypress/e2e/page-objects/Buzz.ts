export default class buzz {

    elements = {
        posttext: () => cy.get('.oxd-buzz-post-input'),
        postsave: () => cy.get('.oxd-buzz-post-slot > .oxd-button'),
        postedText: () => cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-post-body-text'),
    }



    fillPost() {

        cy.fixture('Post').as('post');
        cy.get('@post').then((data: any) => {
            this.elements.posttext().type(data.text)
            this.elements.postsave().click({ force: true})

        });

    }

    validateText()
    {
        cy.fixture('Post').as('post');
        cy.get('@post').then((data: any) => {
            this.elements.postedText().should('contain.text', data.text)
            

            
        });
    }


}