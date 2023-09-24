class EmployeeDetails {

    emplID: string = "";
    menuSelector = (index: number) => `:nth-child(${index}) > .orangehrm-tabs-item`;

    elements = {

        EmployeeNameHeader: () => cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        //#region Menue Items
        personalDetailsMenu: () => cy.get(this.menuSelector(1)),
        contactDetailsMenu: () => cy.get(this.menuSelector(2)),
        emergencyContactsMenu: () => cy.get(this.menuSelector(3)),
        DependantsMenu: () => cy.get(this.menuSelector(4)),
        immigrationMenu: () => cy.get(this.menuSelector(5)),
        jobMenu: () => cy.get(this.menuSelector(6)),
        sallaryMenu: () => cy.get(this.menuSelector(7)),
        TaxExemptionsMenu: () => cy.get(this.menuSelector(8)),
        Report_ToMenu: () => cy.get(this.menuSelector(9)),
        qualificationsMenu: () => cy.get(this.menuSelector(10)),
        membershipsMenu: () => cy.get(this.menuSelector(11)),
        //#endregion

        //#region Personal Details Input Selectors
        fName: () => cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
        sName: () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
        lName: () => cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
        nickName: () => cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        emplID: () => cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        otherId: () => cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        driverLicenseNumber: () => cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        licenseExpDate: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input[placeholder="yyyy-mm-dd"]'),
        ssn: () => cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        sin: () => cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        nationality: () => cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        maritalStatus: () =>  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        dateOfBirth: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input[placeholder="yyyy-mm-dd"]'),
        genderMale: () => cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
        genderFemale: () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label'),
        militaryService: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        smoker: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        bloodType: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),

        personalDetailsSaveBtn: () => cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'),
        customDetailsSaveBtn: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'),
        //#endregion


        //#region Contact Details Input Selectors
        address1: () => cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        address2: () => cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        city: () => cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        state: () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        zipCode: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        country: () => cy.get('.oxd-select-text-input'),
        homePhone: () => cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        mbilePhone: () => cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        workPhone: () => cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        workEmail: () => cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        otherEmail: () => cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),

        contactsDetailsSaveBtn: () => cy.get('.oxd-form-actions > .oxd-button'),
        //#endregion

    }

    AddEmpelements = {

        PIM_MainMenueItem: () => cy.get(".oxd-main-menu-item"),
        addNewEmployeeSaveBtn: () => cy.get(".oxd-button--secondary"),
        addnewEmployeeFName: () => cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
        addNewEmployeeMName: () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
        addNewEmployeeLName: () => cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
        saveNewEmployeeBtn: () => cy.get('.oxd-button--secondary'),
        CreateLoginDetailsSwitch: () => cy.get('.oxd-switch-input'),
        userName: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        password: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPassword: () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        addEmployeeId: () => cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
    }


    FillEmployeeDetails(empidt: string) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/18`);
        cy.fixture('employeeDetails').as('employeeDetails');
        cy.get('@employeeDetails').then((data: any) => {
            //this.elements.fName().type(data.FirstName);
            //this.elements.sName().type(data.MiddleName);
            //this.elements.lName().type(data.LastName); 
            this.elements.nickName().type(data.NickName);
            //this.elements.emplID().type(data.FirstName);
            //this.elements.otherId().type(data.FirstName); 
            this.elements.driverLicenseNumber().clear().type(data.DriverLicenseNumber);
            this.elements.licenseExpDate().invoke('val', data.LicenseExpiaryDate).trigger('change');
            this.elements.ssn().type(data.SSN);
            this.elements.sin().type(data.SIN);
            //#region Nationality
            this.elements.nationality().click();
            cy.contains('div', data.Nationality).click({ force: true });
            this.elements.EmployeeNameHeader().click({ force: true });
            //#endregion

            //#region maritalStatus
           this.elements.maritalStatus().click();
            cy.contains('div', data.MaritalStatus).click({ force: true });
            this.elements.EmployeeNameHeader().click({ force: true });
            //#endregion


            this.elements.dateOfBirth().clear()
                .type('2023-09-23');

            if (data.Gender == "M") {
                this.elements.genderMale().click({ force: true });
            }
            else {
                this.elements.genderFemale().click({ force: true });
            }

            this.elements.militaryService().type(data.Millitaryservice);
            this.elements.smoker().type(data.Smoker);
            this.elements.bloodType().type(data.BloodType);
            this.elements.EmployeeNameHeader().click({ force: true });

        });


    }

    addNewEmployee() {
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            this.AddEmpelements.PIM_MainMenueItem().contains('PIM').click();
            this.AddEmpelements.addNewEmployeeSaveBtn().eq(1).click();
            this.AddEmpelements.addnewEmployeeFName().type(data.FirstName);
            this.AddEmpelements.addNewEmployeeMName().type(data.MiddleName);
            this.AddEmpelements.addNewEmployeeLName().type(data.LastName);
            this.AddEmpelements.CreateLoginDetailsSwitch().click();
            this.AddEmpelements.addEmployeeId().invoke('val').then((value) => {
                // Do something with the value
                this.emplID = value !== undefined ? value.toString() : "";
                cy.log(this.emplID);
            });
            this.AddEmpelements.userName().type(data.FirstName);
            this.AddEmpelements.password().type(data.Password);
            this.AddEmpelements.confirmPassword().type(data.Password);
            this.AddEmpelements.saveNewEmployeeBtn().click();
        });


    }

    deleteEmployee() {
        cy.request(
            {
                method: 'DELETE',
                url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
                body:
                {
                    "ids": [this.emplID],

                }
            }
        ).then((response) => {

            expect(response).property('status').to.equal(200)
        }
        )
    }


    deleteuser(id: number) {
        cy.request(
            {
                method: 'DELETE',
                url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
                body:
                {
                    "ids": [id],

                }
            }
        ).then((response) => {

            expect(response).property('status').to.equal(200)
        }
        )
    }





}

export default EmployeeDetails;