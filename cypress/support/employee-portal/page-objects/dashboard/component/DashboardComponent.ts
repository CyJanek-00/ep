export class DashboardComponent {

    public getGivenActionButton(action: string): Cypress.Chainable {
        return cy.contains('p', action)
            .scrollIntoView().should('be.visible')
    }
}