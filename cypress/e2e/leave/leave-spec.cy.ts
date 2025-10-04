import { UserCredentials, UserInfo, LeaveData, EntitlementData } from "../../support/enum/system-info-enums";
import DashboardPage from "../../support/pages/dashboard-page";
import LoginPage from "../../support/pages/login-page";
import ApplyLeavePage from "../../support/pages/apply-leave-page";
import LeaveListPage from "../../support/pages/leave-list-page";
import MyLeavePage from "../../support/pages/my-leave-page";
import { Methods } from "../../support/utils/generic-methods";
import { LeaveUtils } from "../../support/utils/leave-utils";

describe("Leave - Test Cases", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.isLoaded();
    cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
    DashboardPage.isLoaded();

    LeaveUtils.createEmployeeAndUser().then(() => {
      LeaveUtils.assignEntitlement();
    });
    Methods.logout();
  });

  afterEach(() => {
    Methods.logout();
    cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
    LeaveUtils.cleanup();
  });

  it("TC17: Should allow employee to apply for leave, admin approves it, and employee checks status", () => {
    cy.login(LeaveUtils.createdUser.userName, LeaveUtils.createdUser.password || UserInfo.PASSWORD);
    ApplyLeavePage.visit();
    ApplyLeavePage.isLoaded();
    cy.applyLeave({
      leaveType: LeaveData.LEAVE_TYPE,
      fromDate: LeaveData.FROM_DATE,
      toDate: LeaveData.TO_DATE,
    });

    Methods.logout();
    cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
    LeaveListPage.visit();
    LeaveListPage.isLoaded();
    cy.approveLeaveRequest(UserInfo.EMPLOYEE_NAME);

    Methods.logout();
    cy.login(LeaveUtils.createdUser.userName, UserInfo.PASSWORD);
    MyLeavePage.visit();
    MyLeavePage.isLoaded();

    MyLeavePage.searchLeaveRecord(LeaveData.LEAVE_TYPE);
    MyLeavePage.verifyLeaveRecordVisible(LeaveData.LEAVE_TYPE);
    MyLeavePage.verifyStatusApproved();
    const expectedBalance = Number(EntitlementData.ENTITLEMENT_VALUE) - 1;
    MyLeavePage.verifyLeaveBalance(expectedBalance);
  });
});
