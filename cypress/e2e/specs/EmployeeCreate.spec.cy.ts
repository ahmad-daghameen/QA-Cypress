import { faker } from "@faker-js/faker";
import EmployeeDetails from "../page-objects/EmployeeDetails";
import LoginPage from "../page-objects/LoginPage"
import addEmployee from "../page-objects/addEmployee"



const loginObj: LoginPage = new LoginPage();
const EmpDetailsObj: EmployeeDetails = new EmployeeDetails();
const baseUrl = Cypress.config('baseUrl');
let CUID: number; // Employee Number


const addEmpobj: addEmployee = new addEmployee();
const time: string = addEmpobj.getCurrentTime();
const fName: string = `Tes${time}`;


let username = faker.internet.userName();
let password = faker.internet.password();


describe('Login to the Home page', () => {


    beforeEach(function () {
        
    })
    
    it('Test Add Employee and User', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123');

        CUID = EmpDetailsObj.addEmployeeAPI2();

        EmpDetailsObj.addUser2(username, password, CUID);

        // EmpDetailsObj.logout();
        

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // loginObj.login(username, password);


    })

   

})
