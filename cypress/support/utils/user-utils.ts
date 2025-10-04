import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IDeleteUserRequest } from "../api/payload/delete-user";
import { EmployeeHelper } from "../helpers/employee-helper";
import { UserHelper } from "../helpers/user-helper";
import { StatusCode } from "../enum/http";
import { EmployeeInfo, RolesApi, UserInfo } from "../enum/system-info-enums";

export function prepareUser(): Cypress.Chainable<{
    createdEmpNumber: number;
    createdEmployeeName: string;
    createdUsername: string;
    createdUserId: number;
}> {
    const empReq: IAddEmployeeRequest = {
        firstName: EmployeeInfo.FIRST_NAME,
        middleName: EmployeeInfo.MIDDLE_NAME,
        lastName: EmployeeInfo.LAST_NAME,
    };

    return EmployeeHelper.addEmployee(empReq).then((empResp) => {
        expect(empResp.status).to.eq(StatusCode.OK);
        const createdEmpNumber = empResp.body.data.empNumber;
        const createdEmployeeName = `${empReq.firstName} ${empReq.middleName} ${empReq.lastName}`;

        const userReq = {
            username: String(UserInfo.USERNAME),
            password: String(UserInfo.PASSWORD),
            status: true,
            userRoleId: RolesApi.ADMIN,
            empNumber: createdEmpNumber,
        };

        return UserHelper.addUser(userReq).then((userResp) => {
            expect(userResp.status).to.eq(StatusCode.OK);
            const createdUsername = userResp.body.data.userName;
            const createdUserId = userResp.body.data.id;


            return { createdEmpNumber, createdEmployeeName, createdUsername, createdUserId };
        });
    });
}

export function cleanupUser(createdEmpNumber?: number | null, createdUserId?: number | null): void {

    if (createdUserId) {
        const req: IDeleteUserRequest = { ids: [createdUserId] };
        UserHelper.deleteUser(req).then((resp) => {
            expect(resp.status).to.eq(StatusCode.OK);
            expect(resp.body.data).to.include(String(createdUserId));
        });
    }

    if (createdEmpNumber) {
        const req: IDeleteEmployeeRequest = { ids: [createdEmpNumber] };
        EmployeeHelper.deleteEmployee(req).then((resp) => {
            expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
        });
    }
}
