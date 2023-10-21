import { faker } from "@faker-js/faker";
import adduser from "../../support/helpers/signupHelper";
import LoginPage from "./LoginPage";

const loginObj: LoginPage = new LoginPage();
class EmployeeDetails {

    emplID: string = "";
    userID: string = "";
    empNumber: number = -1;
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
        maritalStatus: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
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

        //#region 
        emplyeeListSearchSaveBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        employeeIDInSearch: () => cy.get(':nth-child(2) > .oxd-input'),
        addEmployeeId: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input"),
        searchHaeader: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-header > div.oxd-table-filter-header-title > h5"),
        //#endregion



    }

    tableElements = {
        fRow: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row'),
        idCol: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div'),
        fnameCol: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div'),
        lanameCol: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(4) > div'),

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


    FillEmployeeDetails() {
        //cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/`);
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
            this.elements.personalDetailsSaveBtn().click({ force: true });

        });


    }

    addNewEmployeeUI() {
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

    addEmployeeAPI() {
        var x: number = -1;
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            cy.request(
                {
                    method: 'POST',
                    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
                    body:
                    {
                        "firstName": data.FirstName,
                        "middleName": data.MiddleName,
                        "lastName": data.LastName,
                        "empPicture": null,
                        "employeeId": data.EmployeeId
                    }

                }
            ).then((response) => {

                expect(response).property('status').to.equal(200);
                response.body.data.empNumber;
                x = response.body.data.empNumber;
                cy.log(JSON.stringify(response.body.data));
                this.addUser(response.body.data.empNumber);
            }
            )
        });
    }


    


    addEmployeeAPI2() {
        var x: number = -1;
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            cy.api(
                {
                    method: 'POST',
                    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
                    body:
                    {
                        "firstName": data.FirstName,
                        "middleName": data.MiddleName,
                        "lastName": data.LastName,
                        "empPicture": null,
                        "employeeId": data.EmployeeId
                    }
                }
            ).then((response) => {

                expect(response).property('status').to.equal(200);
                response.body.data.empNumber;
                x = response.body.data.empNumber;
                cy.log(JSON.stringify(response.body.data));
                this.addUser2(response.body.data.employeeId);
            }
            )
        });
        return x;
    }

    addUser2(empID: number) : object{
        cy.log(`EmpNumber is ${empID}`)
        var prom ={};
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            cy.api(
                {
                    method: 'POST',
                    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
                    body:
                    {
                        "username": `${faker.internet.userName}`,
                        "password": `${faker.internet.password}`,
                        "status": true,
                        "userRoleId": 2,
                        "empNumber": empID
                    }
                }
            ).then((response) => {

                expect(response).property('status').to.equal(200);
                this.userID = response.body.data.id;
                cy.log(JSON.stringify(response.body));
                prom = response;

                loginObj.login(response.body.data.username, response.body.data.password);

            }
            )
        });
        return prom;
    }






    checkEmployee() {
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            //this.elements.employeeIDInSearch().type(this.emplID ).blur();
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
            cy.request(
                {
                    method: 'GET',
                    url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=${data.EmployeeId}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,

                }
            ).then((response) => {

                cy.log(response.body.meta.total);
                expect(response.body.meta.total).to.above(0);
                cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/${response.body.data[0].empNumber}`);
                this.FillEmployeeDetails();
            });
        });




        // this.elements.searchHaeader().click();
        // this.elements.emplyeeListSearchSaveBtn().focus().click();
    }

    checkEmployeeInTable() {
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

            this.elements.employeeIDInSearch().type(data.EmployeeId).blur();
            this.elements.searchHaeader().click({ force: true });
            this.elements.emplyeeListSearchSaveBtn().focus().click({ force: true });

            this.tableElements.idCol().should('exist').and('contain.text', `${data.EmployeeId}`);
            this.tableElements.fnameCol().should('exist').and('contain.text', `${data.FirstName} ${data.MiddleName}`);
            this.tableElements.lanameCol().should('exist').and('contain.text', `${data.LastName}`);

            // cy.request(
            //     {
            //         method: 'GET',
            //         url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=${data.EmployeeId}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,

            //     }
            // ).then((response) => {

            //     cy.log(response.body.meta.total);
            //     expect(response.body.meta.total).to.above(0);

            //     this.tableElements.idCol().should('exist').and('contain.text', `${data.EmployeeId}`);
            //     this.tableElements.fnameCol().should('exist').and('contain.text', `${data.FirstName}${data.MiddleName}`);
            //     this.tableElements.lanameCol().should('exist').and('contain.text', `${data.LastName}`);


            // });

        });
    }




    addUser(empID: number) {
        cy.fixture('employeeDetails').as('employeeDetails');

        cy.get('@employeeDetails').then((data: any) => {
            cy.request(
                {
                    method: 'POST',
                    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
                    body:
                    {
                        "username": `${data.FirstName}.${data.LastName}`,
                        "password": data.Password,
                        "status": true,
                        "userRoleId": 2,
                        "empNumber": empID
                    }
                }
            ).then((response) => {

                expect(response).property('status').to.equal(200);
                this.userID = response.body.data.id;
                cy.log(JSON.stringify(response.body));
            }
            )
        });
    }



    deleteEmployee(ID: Number) {
        cy.request(
            {
                method: 'DELETE',
                url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
                body:
                {
                    "ids": [ID],

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
                    "ids": [
                        this.empNumber
                    ]
                }
            }
        ).then((response) => {

            expect(response).property('status').to.equal(200)
        }
        )
    }





}

export default EmployeeDetails;