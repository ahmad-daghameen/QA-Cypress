
import buzz from "../page-objects/Buzz";
import LoginPage from "../page-objects/LoginPage"

const loginObj: LoginPage = new LoginPage();
const buzzObj: buzz = new buzz;
describe('Time Sheet Management', () => {
    beforeEach(function () {
        loginObj.login('Admin', 'admin123');
        
    })
    
    it('C0001: Test Add Employee and new user', () => {

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz");
       
        buzzObj.fillPost();
        
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz");
       buzzObj.validateText();
       
        

    })

   







})
