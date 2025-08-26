export class LoginComponent {

    public getCardNumberInput(): Cypress.Chainable {
        return cy.get('[placeholder="Wprowadź numer karty RCP"]')
            .scrollIntoView().should('be.visible')
    }

    public getNextButton(): Cypress.Chainable {
        return cy.contains('button', 'Dalej')
            .scrollIntoView().should('be.visible')
    }

    public getPasswordInput(): Cypress.Chainable {
        return cy.get('[placeholder="Wprowadź hasło"]')
            .scrollIntoView().should('be.visible')
    }

    public getLoginButton(): Cypress.Chainable {
        return cy.contains('button', 'Zaloguj')
            .scrollIntoView().should('be.visible')
    }
}