import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IDeleteJobTitleRequest } from "../api/payload/delete-job-title";
import { JOB_DETAILS } from "../constants/test-data-constants";
import { StatusCode } from "../enum/http";
import { EmployeeInfo } from "../enum/system-info-enums";
import { CommonHelper } from "../helpers/common-helper";
import { EmployeeHelper } from "../helpers/employee-helper";
import { JobHelper } from "../helpers/job-helper";

export class JobUtils {
    static createdEmp: any;
    static createdJobTitle: { id: number; name: string } | null = null;

    static createEmployeeAndJob(): Cypress.Chainable {
        return JobHelper.addJob(
            {
                title: `${JOB_DETAILS.JOB_TITLE.name}`,
                description: "",
                specification: null,
                note: ""
            }
        ).then((resp) => {
            CommonHelper.logResponseBody(resp)
            expect(resp.status).to.eq(StatusCode.OK);

            JobUtils.createdJobTitle = {
                id: resp.body.data.id,
                name: JOB_DETAILS.JOB_TITLE.name,
            };

            const empReq: IAddEmployeeRequest = {
                firstName: EmployeeInfo.FIRST_NAME,
                middleName: EmployeeInfo.MIDDLE_NAME,
                lastName: EmployeeInfo.LAST_NAME,
            };

            return EmployeeHelper.addEmployee(empReq).then((resp) => {
                expect(resp.status).to.eq(StatusCode.OK);
                JobUtils.createdEmp = resp.body.data;
            });
        });
    }

    static cleanup(): Cypress.Chainable {
        if (JobUtils.createdEmp?.empNumber) {
            const empReq: IDeleteEmployeeRequest = { ids: [JobUtils.createdEmp.empNumber] };
            EmployeeHelper.deleteEmployee(empReq).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            });
        }

        if (JobUtils.createdJobTitle?.id) {
            const jobReq: IDeleteJobTitleRequest = { ids: [JobUtils.createdJobTitle.id] };
            return JobHelper.deleteJob(jobReq).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            });
        }

        return cy.wrap(null);
    }
}