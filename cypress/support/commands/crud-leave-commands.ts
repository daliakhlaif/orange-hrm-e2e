import { Entitlement } from "../interfaces/entitlement-interface";
import { LeaveRequest } from "../interfaces/leave-interface";
import AddEntitlementPage from "../pages/leave/add-entitlement-page";
import ApplyLeavePage from "../pages/leave/apply-leave-page";
import LeaveListPage from "../pages/leave/leave-list-page";

declare global {
  namespace Cypress {
    interface Chainable {
      approveLeaveRequest(
        employeeName: string
      ): Chainable<void>

      applyLeave(
        leave: LeaveRequest
      ): Chainable<void>

      assignEntitlement(
        entitlement: Entitlement
      ): Chainable<void>

    }
  }
}

Cypress.Commands.add("approveLeaveRequest", (employeeName: string) => {
  LeaveListPage.searchRequest(employeeName)
  LeaveListPage.approveRequest(employeeName)
  LeaveListPage.verifyApproved()
})

Cypress.Commands.add("applyLeave", (leave: LeaveRequest) => {
  ApplyLeavePage.setLeaveType(leave.leaveType)
  ApplyLeavePage.setFromDate(leave.fromDate)
  ApplyLeavePage.setToDate(leave.toDate)
  if (leave.comment) {
    ApplyLeavePage.setComment(leave.comment)
  }
  ApplyLeavePage.apply()
  ApplyLeavePage.verifyApplied()
})

Cypress.Commands.add("assignEntitlement", (entitlement: Entitlement) => {
  AddEntitlementPage.visit()
  AddEntitlementPage.isLoaded()
  AddEntitlementPage.selectEmployeeType(entitlement.employeeType)

  if (entitlement.employeeType === 'Individual' && entitlement.employeeName) {
    AddEntitlementPage.setEmployee(entitlement.employeeName)
  }

  AddEntitlementPage.setLeaveType(entitlement.leaveType)
  AddEntitlementPage.setEntitlement(entitlement.entitlementValue)
  AddEntitlementPage.saveAndConfirm()
  AddEntitlementPage.verifySaved()
})
