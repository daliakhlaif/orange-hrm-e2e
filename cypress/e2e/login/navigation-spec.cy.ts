import { APP_MODULES, MODULE_URL_FREG } from "../../support/enum/modules-enum";
import AdminPage from "../../support/pages/admin-page";
import DashboardPage from "../../support/pages/dashboard-page";
import LoginPage from "../../support/pages/login-page";


describe("Validate module URLs and headers for all pages", () => {

    beforeEach(() => {
        cy.fixture('users').as('users')
        cy.fixture('messages').as('messages')
        LoginPage.visit()
        LoginPage.isLoaded()

        cy.get('@users').then((users: any) => {
            cy.login(users.valid.username, users.valid.password)
        })
    });

    it('Should open Admin Page and validate URL and header', () => {
        AdminPage.openFromMenu(APP_MODULES.ADMIN);
        AdminPage.validateURL(MODULE_URL_FREG.ADMIN);
        AdminPage.validateHeader(APP_MODULES.ADMIN);
    })

})