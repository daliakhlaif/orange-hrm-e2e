import { IAddJobTitleRequest } from "../api/payload/add-job-title";
import { IAssignJobRequest } from "../api/payload/assign-job";
import { IDeleteJobTitleRequest } from "../api/payload/delete-job-title";
import { IAddJobTitleResponse } from "../api/response/add-job-title";
import { IAssignJobResponse } from "../api/response/assign-job";
import { IDeleteJobTitleResponse } from "../api/response/delete-job-title";
import { API_URLS } from "../constants/api-endpoints-constants";


export class JobHelper {
    static assignJob(
        empNumber: number,
        jobReq: IAssignJobRequest
    ): Cypress.Chainable<Cypress.Response<IAssignJobResponse>> {
        const url = API_URLS.employees.jobDetails(empNumber);
        return cy.assignJobDetailsAPI(url, jobReq).then((resp) => {
            expect(resp.status).to.eq(200);
            return resp;
        });
    }


    static addJob(
        jobReq: IAddJobTitleRequest
    ): Cypress.Chainable<Cypress.Response<IAddJobTitleResponse>> {
        return cy.addJobTitleAPI(API_URLS.jobTitles, jobReq).then((resp) => {
            return resp;
        });
    }


    static deleteJob(
        jobReq: IDeleteJobTitleRequest
    ): Cypress.Chainable<Cypress.Response<IDeleteJobTitleResponse>> {
        return cy.deleteJobTitleAPI(API_URLS.jobTitles, jobReq).then((resp) => {
            return resp;
        });
    }
}