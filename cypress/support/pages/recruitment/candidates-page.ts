import { MESSAGES } from "../../constants/messages-constants"
import { PAGE_URLS } from "../../enum/modules-enum"
import webElementHandler from "../../handlers/web-element-handler"
import WebElementHandler from "../../handlers/web-element-handler"
import WebTableHandler from "../../handlers/web-table-handler"
import { SHORTLIST_CANDIDATE_PAGE, VIEW_CANDIDATES_PAGE } from "./vacancies-locators"

const CANDIDATES_TEXT = {
    title: "Candidates",
    statusPassed: "Passed"
}

class CandidatesPage {
    visit() {
        cy.visit(PAGE_URLS.VIEW_CANDIDATES)
    }

    isLoaded() {
        WebElementHandler.assertContains(VIEW_CANDIDATES_PAGE.title, CANDIDATES_TEXT.title)
    }

    typeName(value: string) {
        cy.get(VIEW_CANDIDATES_PAGE.name).type(value);
        cy.contains(VIEW_CANDIDATES_PAGE.autComplete, value).click();
    }

    search() {
        WebElementHandler.click(VIEW_CANDIDATES_PAGE.searchBtn)
    }

    assertCandidateRow(...expectedValues: string[]) {
        WebTableHandler.assertRowContains(VIEW_CANDIDATES_PAGE.table, ...expectedValues);
    }

    searchAndAssert(nameOrEmail: string, ...expectedValues: string[]) {
        WebTableHandler.searchAndValidate(
            VIEW_CANDIDATES_PAGE.name,
            VIEW_CANDIDATES_PAGE.searchBtn,
            nameOrEmail,
            VIEW_CANDIDATES_PAGE.table,
            ...expectedValues
        );
    }

    clickEyeIconForCandidate(name: string) {
        WebTableHandler.clickActionInRow(
            VIEW_CANDIDATES_PAGE.table,
            VIEW_CANDIDATES_PAGE.row,
            VIEW_CANDIDATES_PAGE.cell,
            name,
            VIEW_CANDIDATES_PAGE.eyeIcon
        );
    }

    shortlistCandidate() {
        WebElementHandler.click(SHORTLIST_CANDIDATE_PAGE.shortlistBtn)
    }


    addCommentAndSave(comment: string) {
        WebElementHandler.type(SHORTLIST_CANDIDATE_PAGE.commentTextArea, comment)
        WebElementHandler.click(SHORTLIST_CANDIDATE_PAGE.saveBtn)
        WebElementHandler.assertContains(SHORTLIST_CANDIDATE_PAGE.toastMsg, MESSAGES.successfullyUpdated)
    }

    scheduleInterview(name: string, title: string, date: string) {
        WebElementHandler.click(SHORTLIST_CANDIDATE_PAGE.scheduleInterviewBtn)
        WebElementHandler.type(SHORTLIST_CANDIDATE_PAGE.interviewTitle, title)
        cy.get(SHORTLIST_CANDIDATE_PAGE.interviewer).type(name);
        cy.contains(SHORTLIST_CANDIDATE_PAGE.autComplete, name).click();
        WebElementHandler.type(SHORTLIST_CANDIDATE_PAGE.date, date)
        webElementHandler.click(SHORTLIST_CANDIDATE_PAGE.saveBtn)
        webElementHandler.assertContains(SHORTLIST_CANDIDATE_PAGE.toastMsg, MESSAGES.successfullyUpdated)
    }

    markInterviewPassed() {
        WebElementHandler.click(SHORTLIST_CANDIDATE_PAGE.markPassed)
        WebElementHandler.click(SHORTLIST_CANDIDATE_PAGE.saveBtn)
        WebElementHandler.assertContains(SHORTLIST_CANDIDATE_PAGE.toastMsg, MESSAGES.successfullyUpdated)
        WebElementHandler.assertContains(SHORTLIST_CANDIDATE_PAGE.status, CANDIDATES_TEXT.statusPassed)
        WebElementHandler.assertVisible(SHORTLIST_CANDIDATE_PAGE.downloadFileIcon)
    }
}

export default new CandidatesPage()