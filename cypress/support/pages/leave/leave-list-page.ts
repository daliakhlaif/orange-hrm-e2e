import { MESSAGES } from "../../constants/messages-constants"
import { PAGE_URLS } from "../../enum/modules-enum"
import webElementHandler from "../../handlers/web-element-handler"
import { LEAVE_LIST_PAGE } from "./leave-locators"

const LEAVE_LIST_TEXT = {
    title: "Leave List"
}
class LeaveListPage {
    visit() {
        cy.visit(PAGE_URLS.LEAVE_LIST)
    }

    isLoaded() {
        webElementHandler.assertContains(LEAVE_LIST_PAGE.header, LEAVE_LIST_TEXT.title)
    }

    searchRequest(employee: string) {
        webElementHandler.type(LEAVE_LIST_PAGE.employeeNameInput, employee)
        cy.contains(LEAVE_LIST_PAGE.autCompleteOption, employee).click()
        webElementHandler.click(LEAVE_LIST_PAGE.searchBtn)
    }

    approveRequest(employee: string) {
        cy.contains(LEAVE_LIST_PAGE.leaveRow, employee).within(() => {
            webElementHandler.click(LEAVE_LIST_PAGE.approveBtn)
        })
    }

    verifyApproved() {
        webElementHandler.assertContains(LEAVE_LIST_PAGE.toastMsg, MESSAGES.successfullyUpdated)
    }
}

export default new LeaveListPage()