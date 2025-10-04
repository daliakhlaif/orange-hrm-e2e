import { IAddJobTitleRequest } from "../api/payload/add-job-title";
import { IDeleteJobTitleRequest } from "../api/payload/delete-job-title";
import { IAddJobTitleResponse } from "../api/response/add-job-title";
import { IDeleteJobTitleResponse } from "../api/response/delete-job-title";
import { HttpMethod } from "../enum/http";

declare global {
  namespace Cypress {
    interface Chainable {
      addJobTitleAPI(
        url: string,
        body: IAddJobTitleRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IAddJobTitleResponse>>;

      deleteJobTitleAPI(
        url: string,
        body: IDeleteJobTitleRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IDeleteJobTitleResponse>>;

      
    }
  }
}


Cypress.Commands.add(
  "addJobTitleAPI",
  (url: string, body: IAddJobTitleRequest, headers?: Record<string, string>) => {
    return cy.request<IAddJobTitleResponse>({
      method: HttpMethod.POST,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add(
  "deleteJobTitleAPI",
  (url: string, body: IDeleteJobTitleRequest, headers?: Record<string, string>) => {
    return cy.request<IDeleteJobTitleResponse>({
      method: HttpMethod.DELETE,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);