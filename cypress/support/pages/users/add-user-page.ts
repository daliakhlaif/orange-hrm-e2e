import { PAGE_URLS } from "../../enum/modules-enum";
import WebTableHandler from "../../handlers/web-table-handler";
import { ADD_USER_PAGE_LOCATORS, USER_PAGE_LOCATORS } from "./users-locators";

const ADD_USER_TEXT = {
    title: "Add User"
}
class AddUserPage {
    visit() {
        cy.visit(PAGE_URLS.ADD_USER);
    }

    isLoaded() {
        cy.get(ADD_USER_PAGE_LOCATORS.headerAddUser).contains(ADD_USER_TEXT.title).should('be.visible');
    }

    selectRole(role: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.roleDropdown).click();
        cy.contains(ADD_USER_PAGE_LOCATORS.roleOption, role).click();
    }

    typeEmployeeName(name: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.employeeNameInput).type(name);
        cy.contains(ADD_USER_PAGE_LOCATORS.autComplete, name).click();
    }

    typeUsername(username: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.usernameInput).type(username);
    }

    typePassword(password: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.passwordInput).type(password);
    }

    typeConfirmPassword(password: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.confirmPasswordInput).type(password);
    }

    selectStatus(status: string) {
        cy.get(ADD_USER_PAGE_LOCATORS.statusDropdown).click();
        cy.contains(ADD_USER_PAGE_LOCATORS.statusOption, status).click();
    }

    save() {
        cy.get(ADD_USER_PAGE_LOCATORS.saveBtn).click();
    }

    validateUserInTable(username: string, role: string, status: string, employeeName: string) {
        WebTableHandler.searchAndValidate(
            USER_PAGE_LOCATORS.usernameInput,
            USER_PAGE_LOCATORS.searchBtn,
            username,
            USER_PAGE_LOCATORS.usersTable
        );
        WebTableHandler.assertRowContains(
            USER_PAGE_LOCATORS.usersTable,
            username,
            role,
            status,
            employeeName
        );
    }

}

export default new AddUserPage()