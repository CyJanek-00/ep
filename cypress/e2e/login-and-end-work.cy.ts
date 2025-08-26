import {LoginPage} from "../support/employee-portal/page-objects/login/LoginPage";
import {DashboardPage} from "../support/employee-portal/page-objects/dashboard/DashboardPage";
import {EnvEnum} from "../support/employee-portal/enum/EnvEnum";

describe('login-and-start-work', () => {
    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()

    before('login', function () {
        cy.visit(EnvEnum.BASE_URL);
    })

    it('login and start work', () => {

        loginPage
            .typeCadValue(EnvEnum.JCN)
            .clickNextButton()
            .typePassword(EnvEnum.JPD)
            .clickLoginButton()
        dashboardPage
            .clickOnEndWorkAction()
    })
})