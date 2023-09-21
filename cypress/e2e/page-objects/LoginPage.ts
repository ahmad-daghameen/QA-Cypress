import { BASE_URL } from "../../support/Constants";

class LoginPage {

    elements=
    {
        userName: () => cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input'),
        password: () => cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input'),
        loginBtn: () => cy.get('button')
    }

    forgottPasswordElements=
    {
        // reset password
        forgotPasswordInHomePageBtn: () => cy.get('.orangehrm-login-forgot-header'),
        resetPasswordBtn: () => cy.get('.oxd-button--secondary'),
        notifyResetPassword: () => cy.get('.orangehrm-card-container')

    }

    login(userName: string, password:string)
    {
        this.elements.userName().type(userName);
        this.elements.password().type(password);

        this.elements.loginBtn().click();
    }

    forgottPassword(userName: string)
    {   
        this.forgottPasswordElements.forgotPasswordInHomePageBtn().click();
        cy.url().should('eq', BASE_URL + '/web/index.php/auth/requestPasswordResetCode');

        this.elements.userName().type(userName);
        this.forgottPasswordElements.resetPasswordBtn().click();

        cy.url().should('eq', BASE_URL + '/web/index.php/auth/sendPasswordReset');
        this.forgottPasswordElements.notifyResetPassword().contains('Reset Password link sent successfully');

    }
}

export default LoginPage;