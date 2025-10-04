import { EDIT_USER_PAGE_LOCATORS, USER_PAGE_LOCATORS } from "../constants/locators-constants";
import webElementHandler from "../handlers/web-element-handler";
import WebTableHandler from "../handlers/web-table-handler";

class EditUserPage {


    editRole(role: string) {
        webElementHandler.selectFromDropdown(
            EDIT_USER_PAGE_LOCATORS.roleDropdown,
            EDIT_USER_PAGE_LOCATORS.roleOption,
            role)
    }

    editStatus(status: string) {
        webElementHandler.selectFromDropdown(
            EDIT_USER_PAGE_LOCATORS.statusDropdown,
            EDIT_USER_PAGE_LOCATORS.statusOption,
            status)
    }

    saveChanges() {
        webElementHandler.click(EDIT_USER_PAGE_LOCATORS.saveBtn)
    }

    validateUserInTable(username: string, role: string, status: string) {
        WebTableHandler.searchAndValidate(
            USER_PAGE_LOCATORS.usernameInput,
            USER_PAGE_LOCATORS.searchBtn,
            username,
            USER_PAGE_LOCATORS.usersTable,
            username,
            role,
            status
        );
    }
}

export default new EditUserPage();