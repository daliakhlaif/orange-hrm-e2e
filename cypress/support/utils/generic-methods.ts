import { CONFIRM_DELETE_DIALOG_LOCATORS, LOGOUT_PAGE_LOCATORS } from "../constants/generic-locators-constants";
import WebElementHandler from "../handlers/web-element-handler";
import LoginPage from "../pages/login/login-page";

export class Methods {

  static confirmDeleteDialog() {
    cy.get(CONFIRM_DELETE_DIALOG_LOCATORS.msgContainer)
      .should('be.visible')
      .within(() => {
        cy.get(CONFIRM_DELETE_DIALOG_LOCATORS.delete).click();
      });
  }

  static generateRandomString(length = 6): string {
    return Math.random().toString(36).substring(2, 2 + length);
  }

  static logout() {
    WebElementHandler.click(LOGOUT_PAGE_LOCATORS.profileDropdown);
    WebElementHandler.click(LOGOUT_PAGE_LOCATORS.logoutBtn);
    LoginPage.isLoaded()
  }

}

