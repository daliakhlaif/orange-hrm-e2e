import { APPLY_LEAVE_PAGE_LOCATORS } from "../constants/locators-constants"
import { MESSAGES } from "../constants/messages-constants"
import { PAGE_URLS } from "../enum/modules-enum"
import webElementHandler from "../handlers/web-element-handler"

const APPLY_LEAVE_TEXT = {
  title: "Apply Leave",
}
class ApplyLeavePage {
  visit() {
    cy.visit(PAGE_URLS.APPLY_LEAVE)
  }

  isLoaded() {
    webElementHandler.assertContains(
      APPLY_LEAVE_PAGE_LOCATORS.titleApplyLeave,
      APPLY_LEAVE_TEXT.title
    )
  }

  setLeaveType(type: string) {
    webElementHandler.click(APPLY_LEAVE_PAGE_LOCATORS.leaveTypeDropdown)
    cy.contains(APPLY_LEAVE_PAGE_LOCATORS.leaveTypeOption, type).click()
  }

  setFromDate(date: string) {
    webElementHandler.type(APPLY_LEAVE_PAGE_LOCATORS.fromDateInput, date)
  }

  setToDate(date: string) {
    webElementHandler.type(APPLY_LEAVE_PAGE_LOCATORS.toDateInput, date)
  }

  setComment(comment: string) {
    webElementHandler.type(APPLY_LEAVE_PAGE_LOCATORS.commentsTextArea, comment)
  }

  apply() {
    webElementHandler.click(APPLY_LEAVE_PAGE_LOCATORS.applyBtn)
  }

  verifyApplied() {
    webElementHandler.assertContains(
      APPLY_LEAVE_PAGE_LOCATORS.toastMsg,
      MESSAGES.successfullySaved
    )
  }
}

export default new ApplyLeavePage()