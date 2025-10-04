import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IDeleteUserRequest } from "../api/payload/delete-user";
import { StatusCode } from "../enum/http";
import { EmployeeInfo, UserCredentials, UserInfo } from "../enum/system-info-enums";
import { EmployeeHelper } from "../helpers/employee-helper";
import { UserHelper } from "../helpers/user-helper";
import LoginPage from "../pages/login-page";
import { Methods } from "../utils/generic-methods";

export class BuzzUtils {
    static createdEmpNumber: number;
    static createdEmployeeName: string;
    static createdUsername: string;

    static createEmployeeAndUser(): Cypress.Chainable {
        const empReq: IAddEmployeeRequest = {
            firstName: EmployeeInfo.FIRST_NAME,
            middleName: EmployeeInfo.MIDDLE_NAME,
            lastName: EmployeeInfo.LAST_NAME,
        };

        return EmployeeHelper.addEmployee(empReq).then((resp) => {
            expect(resp.status).to.eq(StatusCode.OK);
            BuzzUtils.createdEmpNumber = resp.body.data.empNumber;
            BuzzUtils.createdEmployeeName = `${empReq.firstName} ${empReq.middleName} ${empReq.lastName}`;

            const userReq = {
                username: String(UserInfo.USERNAME),
                password: String(UserInfo.PASSWORD),
                status: true,
                userRoleId: 1,
                empNumber: BuzzUtils.createdEmpNumber,
            };

            return UserHelper.addUser(userReq).then((resp) => {
                expect(resp.status).to.eq(StatusCode.OK);
                BuzzUtils.createdUsername = resp.body.data.userName;
                Cypress.env("createdUserId", resp.body.data.id);

                Methods.logout();
                LoginPage.isLoaded();
                cy.login(UserInfo.USERNAME, UserInfo.PASSWORD);
            });
        });
    }

    static cleanup(): Cypress.Chainable {
        Methods.logout();
        LoginPage.isLoaded();
        cy.login(UserCredentials.USERNAME, UserCredentials.PASSWORD);

        const userId = Cypress.env("createdUserId");
        if (userId) {
            const req: IDeleteUserRequest = { ids: [userId] };
            UserHelper.deleteUser(req).then((resp) => {
                expect(resp.status).to.eq(StatusCode.OK);
                expect(resp.body.data).to.include(String(userId));
            });
        }

        if (BuzzUtils.createdEmpNumber) {
            const req: IDeleteEmployeeRequest = { ids: [BuzzUtils.createdEmpNumber] };
            EmployeeHelper.deleteEmployee(req).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            });
        }
        return cy.wrap(null);
    }
}
