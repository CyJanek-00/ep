import {LoginComponent} from "./component/LoginComponent";

export class LoginPage {
    private element: LoginComponent = new LoginComponent()

    public typeCadValue(cardNumber: string): LoginPage {
        this.element.getCardNumberInput().type(cardNumber)
        return this;
    }

    public clickNextButton(): LoginPage {
        this.element.getNextButton().click()
        return this;
    }

    public typePassword(password: string): LoginPage {
        this.element.getPasswordInput().type(password)
        return this;
    }

    public clickLoginButton(): LoginPage {
        this.element.getLoginButton().click()
        cy.url().should('contain', '/dashboard')
        cy.get('mat-spinner').should('not.exist')
        return this;
    }
}