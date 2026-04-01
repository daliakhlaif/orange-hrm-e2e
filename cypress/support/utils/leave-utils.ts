import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IDeleteUserRequest } from "../api/payload/delete-user";
import { StatusCode } from "../enum/http";
import { EmployeeInfo, EntitlementData, UserInfo } from "../enum/system-info-enums";
import { EmployeeHelper } from "../helpers/employee-helper";
import { UserHelper } from "../helpers/user-helper";
import { Entitlement } from "../interfaces/entitlement-interface";

export class LeaveUtils {
    static createdEmp: any;
    static createdUser: any;

    static createEmployeeAndUser(): Cypress.Chainable {
        const empReq: IAddEmployeeRequest = {
            firstName: EmployeeInfo.FIRST_NAME,
            middleName: EmployeeInfo.MIDDLE_NAME,
            lastName: EmployeeInfo.LAST_NAME,
        };

        return EmployeeHelper.addEmployee(empReq).then((resp) => {
            expect(resp.status).to.eq(StatusCode.OK);
            LeaveUtils.createdEmp = resp.body.data;

            const userReq = {
                username: UserInfo.USERNAME,
                password: UserInfo.PASSWORD,
                status: true,
                userRoleId: 2,
                empNumber: LeaveUtils.createdEmp.empNumber,
            };

            return UserHelper.addUser(userReq).then((resp) => {
                expect(resp.status).to.eq(StatusCode.OK);
                LeaveUtils.createdUser = resp.body.data;
            });
        });
    }

    static assignEntitlement(): Cypress.Chainable {
        const entitlement: Entitlement = {
            employeeType: EntitlementData.EMPLOYEE_TYPE,
            employeeName: UserInfo.EMPLOYEE_NAME,
            leaveType: EntitlementData.LEAVE_TYPE,
            leavePeriod: EntitlementData.LEAVE_PERIOD,
            entitlementValue: EntitlementData.ENTITLEMENT_VALUE,
        };
        return cy.assignEntitlement(entitlement);
    }

    static cleanup(): Cypress.Chainable {
        if (LeaveUtils.createdUser?.id) {
            const req: IDeleteUserRequest = { ids: [LeaveUtils.createdUser.id] };
            UserHelper.deleteUser(req).then((resp) => {
                expect(resp.status).to.eq(StatusCode.OK);
            });
        }

        if (LeaveUtils.createdEmp?.empNumber) {
            const req: IDeleteEmployeeRequest = { ids: [LeaveUtils.createdEmp.empNumber] };
            return EmployeeHelper.deleteEmployee(req).then((resp) => {
                expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
            });
        }

        return cy.wrap(null);
    }
}
