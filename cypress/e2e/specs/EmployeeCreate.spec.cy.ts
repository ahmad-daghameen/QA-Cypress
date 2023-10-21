import EmployeeDetails from "../page-objects/EmployeeDetails";
import LoginPage from "../page-objects/LoginPage"
import addEmployee from "../page-objects/addEmployee"



const loginObj: LoginPage = new LoginPage();
const EmpDetailsObj: EmployeeDetails = new EmployeeDetails();
const baseUrl = Cypress.config('baseUrl');
var CUID: number; // Employee Number


const addEmpobj: addEmployee = new addEmployee();
const time: string = addEmpobj.getCurrentTime();
const fName: string = `Tes${time}`;
describe('Login to the Home page', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123');

    })

    it('Test Add Employee', () => {

        CUID = EmpDetailsObj.addEmployeeAPI2();


    })

    // after('Delete Employee', () => {
    //     EmpDetailsObj.deleteEmployee(CUID)
    // })











})
