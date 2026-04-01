import { MESSAGES } from "../../constants/messages-constants";
import { PAGE_URLS } from "../../enum/modules-enum";
import webElementHandler from "../../handlers/web-element-handler";
import { ADD_CANDIDATE_PAGE } from "./vacancies-locators";

const ADD_CANDIDATE_TEXT = {
    title: "Add Candidate"
}

class AddCandidatePage {
    visit() {
        cy.visit(PAGE_URLS.ADD_CANDIDATE)
    }

    isLoaded() {
        webElementHandler.assertContains(ADD_CANDIDATE_PAGE.title, ADD_CANDIDATE_TEXT.title)
    }

    typeFirstName(value: string) {
        webElementHandler.type(ADD_CANDIDATE_PAGE.firstName, value)
    }

    typeMiddleName(value: string) {
        webElementHandler.type(ADD_CANDIDATE_PAGE.middleName, value)
    }

    typeLastName(value: string) {
        webElementHandler.type(ADD_CANDIDATE_PAGE.lastName, value)
    }

    selectVacancy(value: string) {
        webElementHandler.selectFromDropdown(ADD_CANDIDATE_PAGE.vacancyDropdown, ADD_CANDIDATE_PAGE.vacancyOption, value)
    }

    typeEmail(value: string) {
        webElementHandler.type(ADD_CANDIDATE_PAGE.email, value)
    }

    uploadResume(resumeFile: string) {
        cy.get(ADD_CANDIDATE_PAGE.resumeFileInput).selectFile(resumeFile, { force: true });
    }

    save() {
        webElementHandler.click(ADD_CANDIDATE_PAGE.saveBtn)
    }

    assertCandidateSaved() {
        webElementHandler.assertContains(ADD_CANDIDATE_PAGE.toastMsg, MESSAGES.successfullySaved)
    }
}

export default new AddCandidatePage()