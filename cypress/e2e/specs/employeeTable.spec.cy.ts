import { keys } from "cypress/types/lodash";
import employeeTable from "../page-objects/EmployeeTable";
import LoginPage from "../page-objects/LoginPage"


const loginObj:LoginPage = new LoginPage();
const employeeTableobj:employeeTable = new employeeTable();
describe('Login to the Home page', () => { 

   
    beforeEach(function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.login('Admin', 'admin123')

    })

    it('Search for Employee',() => { 
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

         employeeTableobj.checkSearch( [{key: 'ID', value: '0304A7'}, {key: 'Name', value: 'Aasha'}] );
    });


    



    

})
