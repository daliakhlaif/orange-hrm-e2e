import { LOGIN_PAGE_LOCATORS } from '../constants/locators-constants';

class LoginPage {

    visit() {
        cy.visit('/');
    }
    isLoaded() {
        cy.get(LOGIN_PAGE_LOCATORS.username).should('be.visible')
    }

    typeUsername(username: string) {
        cy.get(LOGIN_PAGE_LOCATORS.username).type(username)
    }

    typePassword(password: string) {
        cy.get(LOGIN_PAGE_LOCATORS.password).type(password)
    }

    clearUsername() {
        cy.get(LOGIN_PAGE_LOCATORS.username).clear();
    }

    clearPassword() {
        cy.get(LOGIN_PAGE_LOCATORS.password).clear();
    }

    submit() {
        cy.get(LOGIN_PAGE_LOCATORS.submitBtn).click();
    }

    passwordShouldBeMasked() {
        cy.get(LOGIN_PAGE_LOCATORS.password).should('have.attr', 'type', 'password')
    }

    assertRquiredAt(index: number, text: string) {
        cy.get(LOGIN_PAGE_LOCATORS.requiredMsg).eq(index).should('contain', text)
    }

    assertInvalidCredential(text: string) {
        cy.contains(text).should('be.visible')
    }
}

export default new LoginPage()