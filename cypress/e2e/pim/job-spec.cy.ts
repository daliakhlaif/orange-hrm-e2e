import DashboardPage from "../../support/pages/dashboard-page";
import LoginPage from "../../support/pages/login-page";
import webElementHandler from "../../support/handlers/web-element-handler";
import webTableHandler from "../../support/handlers/web-table-handler";
import { EMPLOYEE_LIST_PAGE_LOCATORS } from "../../support/constants/locators-constants";
import { PAGE_URLS } from "../../support/enum/modules-enum";
import { JOB_DETAILS } from "../../support/constants/test-data-constants";
import { UserCredentials } from "../../support/enum/system-info-enums";
import { JobHelper } from "../../support/helpers/job-helper";
import { JobUtils } from "../../support/utils/job-utils";

describe("PIM - Job Test Cases", () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.isLoaded();
        cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);
        DashboardPage.isLoaded();

        JobUtils.createEmployeeAndJob();
    });

    afterEach(() => {
        JobUtils.cleanup();
    });

    it("TC20: Should assign job details for employee", () => {
        JobHelper.assignJob(JobUtils.createdEmp.empNumber, {
            joinedDate: JOB_DETAILS.JOINED_DATE,
            jobTitleId: JobUtils.createdJobTitle.id,
            empStatusId: JOB_DETAILS.EMPLOYMENT_STATUS.id,
            jobCategoryId: JOB_DETAILS.CATEGORY.id,
            subunitId: JOB_DETAILS.SUB_UNIT.id,
            locationId: JOB_DETAILS.LOCATION.id,
        }).then((resp) => {
            expect(resp.body.data.jobTitle.id).to.eq(JobUtils.createdJobTitle.id);
            expect(resp.body.data.subunit.id).to.eq(JOB_DETAILS.SUB_UNIT.id);
        });

        cy.visit(PAGE_URLS.EMPLOYEE_LIST);
        webElementHandler.selectFromDropdown(
            EMPLOYEE_LIST_PAGE_LOCATORS.jobTitleDropdown,
            EMPLOYEE_LIST_PAGE_LOCATORS.jobTitleOption,
            JobUtils.createdJobTitle.name
        );
        webElementHandler.selectFromDropdown(
            EMPLOYEE_LIST_PAGE_LOCATORS.subUnitDropdown,
            EMPLOYEE_LIST_PAGE_LOCATORS.subUnitOption,
            JOB_DETAILS.SUB_UNIT.name
        );
        webElementHandler.click(EMPLOYEE_LIST_PAGE_LOCATORS.searchBtn);

        webTableHandler.assertRowContains(
            EMPLOYEE_LIST_PAGE_LOCATORS.usersTable,
            `${JobUtils.createdEmp.firstName} ${JobUtils.createdEmp.middleName}`,
            JobUtils.createdJobTitle.name,
            JOB_DETAILS.SUB_UNIT.name
        );
    });
});
