import LoginPage from "../../support/pages/login-page";
import DashboardPage from "../../support/pages/dashboard-page";
import AdminPage from "../../support/pages/admin-page";
import { APP_MODULES } from "../../support/enum/modules-enum";
import WebElementHandler from "../../support/handlers/web-element-handler";
import { MESSAGES } from "../../support/constants/messages-constants";
import { ADD_USER_PAGE_LOCATORS, USER_PAGE_LOCATORS } from "../../support/constants/locators-constants";
import WebTableHandler from "../../support/handlers/web-table-handler";
import EditUserPage from "../../support/pages/edit-user-page";
import { Methods } from "../../support/utils/generic-methods";
import { Roles, Status, UserCredentials, UserInfo } from "../../support/enum/system-info-enums";
import UserManagementPage from "../../support/pages/user-page";
import { prepareUser, cleanupUser } from "../../support/utils/user-utils";

describe("Admin - User Management CRUD Test Cases", () => {
  let createdEmpNumber: number;
  let createdEmployeeName: string;
  let createdUsername: string;
  let createdUserId: number;

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.isLoaded();
    cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
    DashboardPage.isLoaded();
    AdminPage.openFromMenu(APP_MODULES.ADMIN);

    prepareUser().then((data) => {
      createdEmpNumber = data.createdEmpNumber;
      createdEmployeeName = data.createdEmployeeName;
      createdUsername = data.createdUsername;
      createdUserId = data.createdUserId;
    });
  });

  afterEach(() => {
    cleanupUser(createdEmpNumber, createdUserId);
  });

  it("TC12: Should search user by username, role, name and status", () => {
    UserManagementPage.setUsername(createdUsername);
    UserManagementPage.setRole(UserInfo.ROLE);
    UserManagementPage.setStatus(UserInfo.STATUS);
    UserManagementPage.setEmployeeName(createdEmployeeName);
    UserManagementPage.search();

    WebTableHandler.assertRowContains(
      USER_PAGE_LOCATORS.usersTable,
      createdUsername,
      UserInfo.ROLE,
      UserInfo.STATUS,
      `${createdEmployeeName.split(" ")[0]} ${createdEmployeeName.split(" ").slice(-1)}`
    );
  });

  it("TC13: Should edit User Role and status", () => {
    UserManagementPage.searchUser(createdUsername);
    UserManagementPage.clickEditUserAction(createdUsername);

    EditUserPage.editRole(Roles.ESS);
    EditUserPage.editStatus(Status.DISABLED);
    EditUserPage.saveChanges();

    WebElementHandler.assertContains(
      ADD_USER_PAGE_LOCATORS.toastMsg,
      MESSAGES.successfullyUpdated
    );

    UserManagementPage.validateUserInTable(
      createdUsername,
      Roles.ESS,
      Status.DISABLED,
      `${createdEmployeeName.split(" ")[0]} ${createdEmployeeName.split(" ").slice(-1)}`
    );
  });

  it("TC14: Should delete User from the system", () => {
    UserManagementPage.setUsername(createdUsername);
    UserManagementPage.setRole(UserInfo.ROLE);
    UserManagementPage.setStatus(UserInfo.STATUS);
    UserManagementPage.search();

    cy.contains(USER_PAGE_LOCATORS.usersTable, createdUsername).should("exist");
    UserManagementPage.clickDeleteUserAction(createdUsername);
    Methods.confirmDeleteDialog();

    WebElementHandler.assertContains(
      ADD_USER_PAGE_LOCATORS.toastMsg,
      MESSAGES.noRecordsFound
    );
    UserManagementPage.searchUser(createdUsername);
    WebElementHandler.assertContains(
      USER_PAGE_LOCATORS.spanMsg,
      MESSAGES.noRecordsFound
    );

    createdUserId = null
  });
});