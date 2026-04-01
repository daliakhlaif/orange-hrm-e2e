import { MESSAGES } from "../../constants/messages-constants";
import { PAGE_URLS } from "../../enum/modules-enum";
import WebElementHandler from "../../handlers/web-element-handler";
import { ADD_VACANCY_PAGE_LOCATORS } from "./vacancies-locators";

const ADD_VACANCY_TEXT = {
  title: "Add Vacancy",
  editTitle: "Edit Vacancy",
}
class AddVacancyPage {
  visit() {
    cy.visit(PAGE_URLS.ADD_VACANCY)
  }

  isLoaded() {
    WebElementHandler.assertContains(ADD_VACANCY_PAGE_LOCATORS.title, ADD_VACANCY_TEXT.title)
  }

  typeVacancyName(value: string) {
    WebElementHandler.type(ADD_VACANCY_PAGE_LOCATORS.vacancyNameInput, value)
  }

  selectJobTitle(value: string) {
    WebElementHandler.selectFromDropdown(ADD_VACANCY_PAGE_LOCATORS.jobTitleDropdown, ADD_VACANCY_PAGE_LOCATORS.jobTitleOption, value)
  }

  typeHiringManager(value: string) {
    WebElementHandler.type(ADD_VACANCY_PAGE_LOCATORS.hiringManagerInput, value)
    cy.contains(ADD_VACANCY_PAGE_LOCATORS.autComplete, value).click();
  }

  save() {
    WebElementHandler.click(ADD_VACANCY_PAGE_LOCATORS.saveBtn)
  }

  assertSavedMessage() {
    WebElementHandler.assertContains(ADD_VACANCY_PAGE_LOCATORS.toastMsg, MESSAGES.successfullySaved)
  }

  assertTitle() {
    WebElementHandler.assertContains(ADD_VACANCY_PAGE_LOCATORS.editVacancyTitle, ADD_VACANCY_TEXT.editTitle)
  }
}

export default new AddVacancyPage()