class Selector{

 SelectSpan(){
    return cy.contains('p','Time at Work').parents().eq(2).contains('span','Today');
}

    
}

export default Selector;