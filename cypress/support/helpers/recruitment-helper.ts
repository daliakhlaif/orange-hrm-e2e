import { IDeleteVacancyRequest } from "../api/payload/delete-vacancy";
import { API_URLS } from "../constants/api-endpoints-constants";

export class RecruitmentHelper {

  static deleteVacancy(body: IDeleteVacancyRequest) {
    return cy.deleteVacancyAPI(API_URLS.recruitment.vacancies, body);
  }
}
