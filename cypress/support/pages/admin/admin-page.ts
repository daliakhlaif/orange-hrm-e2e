import { APP_MODULES, MODULE_URL_FREG } from "../../enum/modules-enum"
import { ADMIN_PAGE_LOCATORS } from "./admin-page-locators"

class AdminPage {

  openFromMenu(item: APP_MODULES) {
    cy.contains(ADMIN_PAGE_LOCATORS.mainMenuItem, item).should('be.visible').click()
  }

  validateURL(url: MODULE_URL_FREG) {
    cy.url().should('include', url)
  }

  validateHeader(header: APP_MODULES) {
    cy.get(ADMIN_PAGE_LOCATORS.headeerH6).should('contain', header)
  }
}

export default new AdminPage()