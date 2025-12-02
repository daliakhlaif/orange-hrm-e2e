import { MESSAGES } from "../../support/constants/messages-constants";
import { Employee } from "../../support/interfaces/employee-interface";
import AddEmployeePage from "../../support/pages/employees/add-employee-page";
import DashboardPage from "../../support/pages/dashboard/dashboard-page";
import LoginPage from "../../support/pages/login/login-page";
import WebElementHandler from "../../support/handlers/web-element-handler";
import { EmployeeInfo, UserCredentials } from "../../support/enum/system-info-enums";
import { captureEmployeeNumber, cleanupEmployee } from "../../support/utils/employee-utils";
import { ADD_EMPLOYEE_PAGE_LOCATORS } from "../../support/pages/employees/employees-locators";

describe('PIM - Employee Test Cases', () => {
  let createdEmployeeNum: number | null = null;

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.isLoaded();

    cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
    DashboardPage.isLoaded();
  });

  afterEach(() => {
    cleanupEmployee(createdEmployeeNum);
    createdEmployeeNum = null;
  });

  it("TC15: Should successfully add a new employee without login details", () => {
    AddEmployeePage.visit();
    AddEmployeePage.isLoaded();

    const employee: Employee = {
      id: EmployeeInfo.ID,
      firstName: EmployeeInfo.FIRST_NAME,
      middleName: EmployeeInfo.MIDDLE_NAME,
      lastName: EmployeeInfo.LAST_NAME,
    };

    cy.addNewEmployee(employee)
    AddEmployeePage.assertEmployeeCreated();
    captureEmployeeNumber().then((empNum) => {
      createdEmployeeNum = empNum;
    });
  });

  it("TC16: Should successfully add a new employee with photo & login details", () => {
    const employee: Employee = {
      id: EmployeeInfo.ID,
      firstName: EmployeeInfo.FIRST_NAME,
      middleName: EmployeeInfo.MIDDLE_NAME,
      lastName: EmployeeInfo.LAST_NAME,
      image: EmployeeInfo.PHOTO_VALID,
      username: EmployeeInfo.USERNAME,
      password: EmployeeInfo.PASSWORD
    };

    AddEmployeePage.visit();
    AddEmployeePage.isLoaded();
    cy.addNewEmployee(employee, true);
    AddEmployeePage.assertEmployeeCreated();
    AddEmployeePage.assertEmployeePhotoAdded();
    captureEmployeeNumber().then((empNum) => {
      createdEmployeeNum = empNum;
    });
    AddEmployeePage.assertEmployeeInList(EmployeeInfo.ID, EmployeeInfo.FIRST_NAME, EmployeeInfo.LAST_NAME)
  });

  it("TC17: Should show error messages for empty first name, wrong file type, and short password", () => {
    AddEmployeePage.visit();
    AddEmployeePage.isLoaded();

    WebElementHandler.clearInput(ADD_EMPLOYEE_PAGE_LOCATORS.firstName)
    AddEmployeePage.typeMiddleName(EmployeeInfo.MIDDLE_NAME);
    AddEmployeePage.typeLastName(EmployeeInfo.LAST_NAME);
    AddEmployeePage.save()
    WebElementHandler.assertContains(ADD_EMPLOYEE_PAGE_LOCATORS.firstNameError, MESSAGES.required);
    AddEmployeePage.typeFirstName(EmployeeInfo.FIRST_NAME)

    AddEmployeePage.uploadPhoto(EmployeeInfo.PHOTO_INVALID);
    WebElementHandler.assertContains(ADD_EMPLOYEE_PAGE_LOCATORS.fileError, MESSAGES.invalidFile);

    AddEmployeePage.enableCreateLoginDetailsSwitch();
    AddEmployeePage.typeUsername(EmployeeInfo.USERNAME);
    AddEmployeePage.typePassword(EmployeeInfo.PASSWORD_SHORT);
    WebElementHandler.assertContains(ADD_EMPLOYEE_PAGE_LOCATORS.passwordError, MESSAGES.shortPassword);
    AddEmployeePage.save()

  });
});
