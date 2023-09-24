import EmployeeDetails from "../page-objects/EmployeeDetails";
import LoginPage from "../page-objects/LoginPage"
import addEmployee from "../page-objects/addEmployee"



const loginObj: LoginPage = new LoginPage();
const EmpDetailsObj: EmployeeDetails = new EmployeeDetails();
const baseUrl = Cypress.config('baseUrl');
var CUID: number;


const addEmpobj: addEmployee = new addEmployee();
const time: string = addEmpobj.getCurrentTime();
const fName: string = `Tes${time}`;
describe('Login to the Home page', () => {


    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123');

    })

    it.only('Test Add Employee', () => {
        //EmpDetailsObj.addNewEmployee();

        EmpDetailsObj.addEmployeeAPI();
        //EmpDetailsObj.deleteEmployee();

        //EmpDetailsObj.FillEmployeeDetails();
    })



    it('Update Employee Details', () => {
        EmpDetailsObj.checkEmployee();

        //EmpDetailsObj.FillEmployeeDetails();
    });




    after('Delete Employee', () => {
        //EmpDetailsObj.deleteEmployee()
    })







})
