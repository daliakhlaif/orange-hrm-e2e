import { APP_MODULES, MODULE_URL_FREG } from "../../support/enum/modules-enum";
import { UsersFixture } from "../../support/interfaces/users-fixture-interface";
import AdminPage from "../../support/pages/admin/admin-page";
import LoginPage from "../../support/pages/login/login-page";


describe("Validate module URLs and headers for all pages", () => {

    beforeEach(() => {
        cy.fixture<UsersFixture>('users').as('users')
        LoginPage.visit()
        LoginPage.isLoaded()

        cy.get<UsersFixture>('@users').then((users) => {
            cy.login(users.valid.username, users.valid.password)
        })
    });

    it('TC22: Should open Admin Page and validate URL and header', () => {
        AdminPage.openFromMenu(APP_MODULES.ADMIN);
        AdminPage.validateURL(MODULE_URL_FREG.ADMIN);
        AdminPage.validateHeader(APP_MODULES.ADMIN);
    })

})