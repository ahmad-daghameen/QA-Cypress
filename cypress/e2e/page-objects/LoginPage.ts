import { BASE_URL } from "../../support/Constants";

class LoginPage {

    elements =
        {
            userName: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
            password: () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
            loginBtn: () => cy.get('button'),
            LoginRequiredInth1: () => cy.get(':nth-child(2) > .oxd-input-group > .oxd-text'),
            LoginRequiredInth2: () => cy.get(':nth-child(3) > .oxd-input-group > .oxd-text'),
            LoginRequired: () => cy.get('.oxd-input-group > .oxd-text'),
            Dashbord:() => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
            invalidCredintials:() => cy.get('.oxd-alert-content'),
        }

    forgottPasswordElements =
        {
            // reset password
            forgotPasswordInHomePageBtn: () => cy.get('.orangehrm-login-forgot-header'),
            resetPasswordBtn: () => cy.get('.oxd-button--secondary'),
            notifyResetPassword: () => cy.get('.orangehrm-card-container')

        }

    isPassword() {
        this.elements.password().should('have.attr', 'type', 'password');
    }
    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);

        this.elements.loginBtn().click();
    }

    loginSuccess(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);

        this.elements.loginBtn().click();
        this.elements.Dashbord().contains("Dashboard");
    }
    loginFailedInvalidCredintials(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);

        this.elements.loginBtn().click();
        this.elements.invalidCredintials().should('exist').and('contain.text', 'Invalid credentials');
    }
    loginFailedRequiredBoth(userName: string, password: string) {
        this.elements.loginBtn().click();
        this.elements.LoginRequiredInth1().should('exist').and('contain.text', 'Required');
        this.elements.LoginRequiredInth2().should('exist').and('contain.text', 'Required');
        
    }
    loginFailedRequiredOne(userName: string, password: string) {
        if (userName.length == 0) {
            this.elements.password().type(password);
        }
        else if (password.length == 0) {
            this.elements.userName().type(userName);
        }
        this.elements.loginBtn().click();
        this.elements.LoginRequired().should('exist').and('contain.text', 'Required');
    }
    forgottPassword(userName: string) {
        this.forgottPasswordElements.forgotPasswordInHomePageBtn().click();
        cy.url().should('eq', BASE_URL + '/web/index.php/auth/requestPasswordResetCode');

        this.elements.userName().type(userName);
        this.forgottPasswordElements.resetPasswordBtn().click();

        cy.url().should('eq', BASE_URL + '/web/index.php/auth/sendPasswordReset');
        this.forgottPasswordElements.notifyResetPassword().contains('Reset Password link sent successfully');

    }
}

export default LoginPage;