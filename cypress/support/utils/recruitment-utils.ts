import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IDeleteJobTitleRequest } from "../api/payload/delete-job-title";
import { IDeleteVacancyRequest } from "../api/payload/delete-vacancy";
import { JOB_DETAILS, VACANCY_DETAILS } from "../constants/test-data-constants";
import { StatusCode } from "../enum/http";
import { EmployeeInfo } from "../enum/system-info-enums";
import { CommonHelper } from "../helpers/common-helper";
import { EmployeeHelper } from "../helpers/employee-helper";
import { JobHelper } from "../helpers/job-helper";
import { RecruitmentHelper } from "../helpers/recruitment-helper";
import { Vacancy } from "../interfaces/vacancy-interface";
import AddVacancyPage from "../pages/recruitment/add-vacancy-page";


export interface PreparedVacancyData {
    employeeData: { empNumber: number; fullName: string };
    jobData: { id: number; title: string };
    vacancyData: { id: number; name: string };
}

export function prepareVacancy(): Cypress.Chainable<PreparedVacancyData> {
    const empReq: IAddEmployeeRequest = {
        firstName: EmployeeInfo.FIRST_NAME,
        middleName: EmployeeInfo.MIDDLE_NAME,
        lastName: EmployeeInfo.LAST_NAME,
    };

    return EmployeeHelper.addEmployee(empReq).then((empResp) => {
        expect(empResp.status).to.eq(StatusCode.OK);
        const empNumber = empResp.body.data.empNumber;
        const fullName = `${empReq.firstName} ${empReq.middleName} ${empReq.lastName}`.trim();

        return JobHelper.addJob({
            title: `${JOB_DETAILS.JOB_TITLE.name}`,
            description: "",
            specification: null,
            note: ""
        }).then((jobResp) => {
            CommonHelper.logResponseBody(jobResp)
            const jobId = jobResp.body.data.id;
            const vacancy: Vacancy = {
                name: VACANCY_DETAILS.name,
                jobTitle: JOB_DETAILS.JOB_TITLE.name,
                hiringManager: fullName
            };

            AddVacancyPage.visit()
            AddVacancyPage.isLoaded()

            cy.addNewVacancy(vacancy)
            AddVacancyPage.assertTitle()

            return cy.url().then((url) => {
                const vacancyId = Number(url.split("/").pop());
                expect(vacancyId).to.be.a("number");

                return {
                    employeeData: { empNumber, fullName },
                    jobData: { id: jobId, title: JOB_DETAILS.JOB_TITLE.name },
                    vacancyData: { id: vacancyId, name: vacancy.name },
                };
            });
        });
    });
}

export function cleanupEntities(
    empNumber: number,
    vacancyId: number,
    jobId: number,
): Cypress.Chainable<any> {
    let chain: Cypress.Chainable<any> = cy.then(() => { });

    if (vacancyId) {
        const req: IDeleteVacancyRequest = { ids: [vacancyId] };
        chain = chain.then(() =>
            RecruitmentHelper.deleteVacancy(req).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            })
        );
    }

    if (jobId) {
        const jobReq: IDeleteJobTitleRequest = { ids: [jobId] };
        chain = chain.then(() =>
            JobHelper.deleteJob(jobReq).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            })
        );
    }

    if (empNumber) {
        const empReq: IDeleteEmployeeRequest = { ids: [empNumber] };
        chain = chain.then(() =>
            EmployeeHelper.deleteEmployee(empReq).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            })
        );
    }

    return chain;
}