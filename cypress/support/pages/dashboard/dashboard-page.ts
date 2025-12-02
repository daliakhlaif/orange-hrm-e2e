import { MODULE_URL_FREG } from "../../enum/modules-enum"

class DashboardPage {
    isLoaded() {
        cy.url().should('include', MODULE_URL_FREG.DASHBOARD)
    }
}

export default new DashboardPage()