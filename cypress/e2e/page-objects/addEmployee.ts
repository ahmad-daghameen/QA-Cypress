class addEmployee{

    emplID :string = "";

elements ={

    PIM_MainMenueItem: () => cy.get(".oxd-main-menu-item"),
    addEmpBtn: () => cy.get(".oxd-button--secondary"),
    EmployeeInputfNme: () =>cy.get(".orangehrm-firstname"),
    EmployeeInputmNme: () =>cy.get(".orangehrm-middlename"),
    EmployeeInputlNme: () =>cy.get(".orangehrm-lastname"),
    savenewEmployee : () =>cy.get('button[type="submit"]'),
    oxSwitch: () => cy.get('.oxd-switch-input'),
    userName: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input'),
    password: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input'),
    confirmPassword: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input'),
    emplyeeListSearchName: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input"),
    emplyeeListSearchSaveBtn: () => cy.get("button.orangehrm-left-space"),
    employeeIDInSearch : () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > input"),
    addEmployeeId: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input"),
    searchHaeader: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-header > div.oxd-table-filter-header-title > h5"),
}


newEmployee(fName: string, mName: string, lName: string){
    const pass: string = `${fName}@1234`;
    this.elements.PIM_MainMenueItem().contains('PIM').click();
    this.elements.addEmpBtn().eq(1).click();
    this.elements.EmployeeInputfNme().type(fName);
    this.elements.EmployeeInputmNme().type(mName);
    this.elements.EmployeeInputlNme().type(lName);
    this.elements.EmployeeInputlNme().get
    this.elements.oxSwitch().click();
    this.elements.addEmployeeId().invoke('val').then((value) => {
        // Do something with the value
        this.emplID = value !== undefined ? value.toString() : "";
        cy.log(this.emplID);
    });
    this.elements. userName().type(fName);
    this.elements. password().type(pass);
    this.elements. confirmPassword().type(pass);
    this.elements.savenewEmployee().click();



}
checkEmployee(fName: string, mName: string, lName: string){
    this.elements.employeeIDInSearch().type(this.emplID ).blur();
    cy.wait(4000);
    this.elements.searchHaeader().click();
    this.elements.emplyeeListSearchSaveBtn().focus().click();
}

getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const formattedHours = (hours < 10) ? '0' + hours : hours;
    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    const formattedSeconds = (seconds < 10) ? '0' + seconds : seconds;
  
    return `${formattedMinutes}${formattedSeconds}`;
  }


}

export default addEmployee;