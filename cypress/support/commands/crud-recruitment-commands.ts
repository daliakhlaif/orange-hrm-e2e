import { IDeleteVacancyRequest } from "../api/payload/delete-vacancy";
import { IDeleteVacancyResponse } from "../api/response/delete-vacancy";
import { HttpMethod } from "../enum/http";
import { Vacancy } from "../interfaces/vacancy-interface";
import AddVacancyPage from "../pages/add-vacancy-page";

declare global {
  namespace Cypress {
    interface Chainable {
      deleteVacancyAPI(
        url: string,
        body: IDeleteVacancyRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IDeleteVacancyResponse>>;

      addNewVacancy(
        vacancy: Vacancy
      ): Chainable<void>
    }
  }
}

Cypress.Commands.add(
  "deleteVacancyAPI",
  (url: string, body: IDeleteVacancyRequest, headers?: Record<string, string>) => {
    return cy.request<IDeleteVacancyResponse>({
      method: HttpMethod.DELETE,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add("addNewVacancy", (vacancy: Vacancy) => {
  AddVacancyPage.typeVacancyName(vacancy.name)
  AddVacancyPage.selectJobTitle(vacancy.jobTitle)
  AddVacancyPage.typeHiringManager(vacancy.hiringManager)
  AddVacancyPage.save()
})