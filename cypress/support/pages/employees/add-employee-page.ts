import { MESSAGES } from "../../constants/messages-constants";
import { APP_MODULES, PAGE_URLS } from "../../enum/modules-enum";
import WebElementHandler from "../../handlers/web-element-handler";
import WebTableHandler from "../../handlers/web-table-handler";
import adminPage from "../admin/admin-page";
import { ADD_EMPLOYEE_PAGE_LOCATORS, EMPLOYEE_LIST_PAGE_LOCATORS } from "./employees-locators";

const ADD_EMPLOYEE_TEXT = {
  title: "Add Employee"
}

class AddEmployeePage {
  visit() {
    cy.visit(PAGE_URLS.ADD_EMPLOYEE);
  }

  isLoaded() {
    WebElementHandler.assertContains(ADD_EMPLOYEE_PAGE_LOCATORS.headerAddEmployee, ADD_EMPLOYEE_TEXT.title);
  }

  typeFirstName(name: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.firstName, name);
  }

  typeMiddleName(name: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.middleName, name);
  }

  typeLastName(name: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.lastName, name);
  }

  uploadPhoto(fileName: string) {
    cy.get(ADD_EMPLOYEE_PAGE_LOCATORS.photoInput).selectFile(fileName, { force: true });
  }

  typeEmployeeId(id: string) {
    cy.get(ADD_EMPLOYEE_PAGE_LOCATORS.employeeIdInput)
      .eq(3)
      .clear()
      .type(id);
  }

  enableCreateLoginDetailsSwitch() {
    WebElementHandler.click(ADD_EMPLOYEE_PAGE_LOCATORS.createLoginDetailsSwitch);
  }

  typeUsername(username: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.UsernameInput, username);
  }

  typePassword(password: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.passwordInput, password);
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.confirmPasswordInput, password);
  }

  typeConfirmPassword(confirmPassword: string) {
    WebElementHandler.type(ADD_EMPLOYEE_PAGE_LOCATORS.confirmPasswordInput, confirmPassword);
  }
  save() {
    return WebElementHandler.click(ADD_EMPLOYEE_PAGE_LOCATORS.saveButton);
  }

  assertEmployeeCreated() {
    WebElementHandler.assertContains(ADD_EMPLOYEE_PAGE_LOCATORS.toastMsg, MESSAGES.successfullySaved);
  }

  assertEmployeePhotoAdded() {
    WebElementHandler.assertHasAttr(ADD_EMPLOYEE_PAGE_LOCATORS.employeeImg, 'src', 'default.png');
  }

  assertEmployeeInList(employeeId: string, firstName: string, lastName: string) {
    adminPage.openFromMenu(APP_MODULES.PIM);
    WebTableHandler.searchAndValidate(
      EMPLOYEE_LIST_PAGE_LOCATORS.employeeIdInput,
      EMPLOYEE_LIST_PAGE_LOCATORS.searchBtn,
      employeeId,
      EMPLOYEE_LIST_PAGE_LOCATORS.tableRow
    );
    WebTableHandler.assertRowContains(
      EMPLOYEE_LIST_PAGE_LOCATORS.tableRow,
      firstName,
      lastName
    );
  }
}

export default new AddEmployeePage();
