import { CONFIRM_DIALOG_LOCATORS } from "../../constants/generic-locators-constants"
import { MESSAGES } from "../../constants/messages-constants"
import { PAGE_URLS } from "../../enum/modules-enum"
import webElementHandler from "../../handlers/web-element-handler"
import { ADD_ENTITLEMENT_PAGE } from "./leave-locators"

const ADD_ENTITLEMENT_TEXT = {
    title: "Add Leave Entitlement",
}

class AddEntitlementPage {
    visit() {
        cy.visit(PAGE_URLS.ADD_ENTITLEMENT)
    }

    isLoaded() {
        webElementHandler.assertContains(ADD_ENTITLEMENT_PAGE.AddLeaveEntText, ADD_ENTITLEMENT_TEXT.title)
    }

    selectEmployeeType(type: 'Individual' | 'Multiple') {
        cy.contains(ADD_ENTITLEMENT_PAGE.employeeTypeOption, type).click()
    }

    setEmployee(name: string) {
        webElementHandler.type(ADD_ENTITLEMENT_PAGE.employeeNameInput, name)
        cy.contains(ADD_ENTITLEMENT_PAGE.autComplete, name).click()
    }

    setLeaveType(type: string) {
        webElementHandler.click(ADD_ENTITLEMENT_PAGE.leaveTypeDropdown)
        cy.contains(ADD_ENTITLEMENT_PAGE.leaveTypeOption, type).click()
    }

    setLeavePeriod(period: string) {
        webElementHandler.getText(ADD_ENTITLEMENT_PAGE.leavePeriodDropdown).then((currentText: string) => {
            if (currentText.trim() !== period.trim()) {
                webElementHandler.click(ADD_ENTITLEMENT_PAGE.leavePeriodDropdown)
                cy.contains(ADD_ENTITLEMENT_PAGE.leavePeriodOption, period).click()
            }
        })
    }

    setEntitlement(value: string) {
        webElementHandler.type(ADD_ENTITLEMENT_PAGE.entitlementInput, value)
    }

    confirmDialog() {
        webElementHandler.click(CONFIRM_DIALOG_LOCATORS.confirmBtn)
    }

    save() {
        webElementHandler.click(ADD_ENTITLEMENT_PAGE.saveBtn)
    }

    saveAndConfirm() {
        this.save()
        this.confirmDialog()
    }

    verifySaved() {
        webElementHandler.assertContains(ADD_ENTITLEMENT_PAGE.toastMsg, MESSAGES.successfullySaved)
    }
}

export default new AddEntitlementPage()