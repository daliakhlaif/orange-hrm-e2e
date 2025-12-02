import { PAGE_URLS } from "../../enum/modules-enum"
import webElementHandler from "../../handlers/web-element-handler"
import { MY_LEAVE_PAGE_LOCATORS } from "./leave-locators"

const MY_LEAVE_TEXT = {
  title: "My Leave",
  statusScheduled: "Scheduled"
}
class MyLeavePage {
  visit() {
    cy.visit(PAGE_URLS.MY_LEAVE_LIST)
  }

  isLoaded() {
    cy.get(MY_LEAVE_PAGE_LOCATORS.header).should('contain.text', MY_LEAVE_TEXT.title)
  }

  searchLeaveRecord(leaveType: string) {
    webElementHandler.click(MY_LEAVE_PAGE_LOCATORS.leaveTypeDropdown)
    cy.contains(MY_LEAVE_PAGE_LOCATORS.leaveTypeOption, leaveType).click()
    webElementHandler.click(MY_LEAVE_PAGE_LOCATORS.searchBtn)
  }

  verifyLeaveRecordVisible(leaveType: string) {
    cy.contains(MY_LEAVE_PAGE_LOCATORS.leaveRow, leaveType)
  }

  verifyStatusApproved() {
    cy.contains(MY_LEAVE_PAGE_LOCATORS.statusValue, MY_LEAVE_TEXT.statusScheduled)
  }

  verifyLeaveBalance(expectedBalance: number) {
    cy.get(MY_LEAVE_PAGE_LOCATORS.balance).invoke('text').then((text: string) => {
      const balance = parseFloat(text.trim())
      expect(balance).to.eq(expectedBalance)
    })
  }
}

export default new MyLeavePage()