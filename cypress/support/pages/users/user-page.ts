import { PAGE_URLS } from "../../enum/modules-enum";
import WebElementHandler from "../../handlers/web-element-handler";
import WebTableHandler from "../../handlers/web-table-handler";
import { USER_PAGE_LOCATORS } from "./users-locators";

const USER_MANAGEMENT_TEXT = {
    title: "User Management"
}
class UserManagementPage {
    visit() {
        cy.visit(PAGE_URLS.USERS);
    }

    isLoaded() {
        cy.get(USER_PAGE_LOCATORS.headerAddUser).contains(USER_MANAGEMENT_TEXT.title).should('be.visible');
    }

    setRole(role: string) {
        WebElementHandler.selectFromDropdown(
            USER_PAGE_LOCATORS.roleDropdown,
            USER_PAGE_LOCATORS.roleOption,
            role,
        );
    }

    setEmployeeName(name: string) {
        WebElementHandler.type(USER_PAGE_LOCATORS.employeeNameInput, name)
        cy.contains(USER_PAGE_LOCATORS.autComplete, name).click();
    }

    setUsername(username: string) {
        WebElementHandler.type(USER_PAGE_LOCATORS.usernameInput, username)
    }

    setStatus(status: string) {
        WebElementHandler.selectFromDropdown(
            USER_PAGE_LOCATORS.statusDropdown,
            USER_PAGE_LOCATORS.statusOption,
            status)
    }

    search() {
        cy.get(USER_PAGE_LOCATORS.searchBtn).click();
    }

    clickEditUserAction(username: string) {
        WebTableHandler.clickActionInRow(
            USER_PAGE_LOCATORS.usersTable,
            USER_PAGE_LOCATORS.row,
            USER_PAGE_LOCATORS.cell,
            username,
            USER_PAGE_LOCATORS.editIcon
        );
    }

    clickDeleteUserAction(username: string) {
        WebTableHandler.clickActionInRow(
            USER_PAGE_LOCATORS.usersTable,
            USER_PAGE_LOCATORS.row,
            USER_PAGE_LOCATORS.cell,
            username,
            USER_PAGE_LOCATORS.deleteIcon
        );
    }

    searchUser(username: string) {
        WebTableHandler.search(
            USER_PAGE_LOCATORS.usernameInput,
            USER_PAGE_LOCATORS.searchBtn,
            username
        );
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

export default new UserManagementPage()