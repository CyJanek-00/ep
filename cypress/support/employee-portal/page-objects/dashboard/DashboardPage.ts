import {DashboardComponent} from "./component/DashboardComponent";

export class DashboardPage {
    private element: DashboardComponent = new DashboardComponent()

    public clickOnStartWorkAction(): DashboardPage {
        this.element.getGivenActionButton("Początek pracy").click()
        cy.get('.mat-simple-snackbar').contains('Zarejestrowano zdarzenie rozpoczęcia pracy').should('be.visible');
        return this;
    }

    public clickOnEndWorkAction(): DashboardPage {
        this.element.getGivenActionButton("Koniec pracy").click()
        cy.get('.mat-simple-snackbar').contains('Zarejestrowano zdarzenie zakończenia pracy').should('be.visible');
        return this;
    }
}