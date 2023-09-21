import KeyVal from "../../interfaces/KeyVal";





class employeeTable{

    emplID :string ="";

elements ={
    emplyeeListSearchName: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input"),
    emplyeeListSearchSaveBtn: () => cy.get("button.orangehrm-left-space"),
    employeeIDInSearch : () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > input"),
    addEmployeeId: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input"),
    searchHaeader: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-header > div.oxd-table-filter-header-title > h5"),
    emplyeeListSearchSupervisor: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(5) > div > div:nth-child(2) > div > div > input"),
    employeeGridHeaderCount: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div:nth-child(2) > div > span"),


}

checkSearch(arr: KeyVal[]): void {
  const actionMap = {
    'ID': () => this.elements.employeeIDInSearch(),
    'Name': () => this.elements.emplyeeListSearchName(),
    'Supervisor': () => this.elements.emplyeeListSearchSupervisor()
  };

  arr.filter(({ key }) => key in actionMap)
  .forEach(({ key, value }) => {
    const action = actionMap[key];  // TypeScript now knows that key can only be 'ID', 'Name', or 'Supervisor'
    action().type(value);
  });

  this.elements.emplyeeListSearchSaveBtn().focus().click({force:true});
  this.elements.employeeGridHeaderCount().should('contain', '(1) Record Found');
}


}

export default employeeTable;