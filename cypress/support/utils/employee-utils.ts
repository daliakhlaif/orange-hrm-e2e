import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { StatusCode } from "../enum/http";
import { EmployeeInfo } from "../enum/system-info-enums";
import { EmployeeHelper } from "../helpers/employee-helper";

export function prepareEmployee(): Cypress.Chainable<{
  createdEmpNumber: number;
  createdEmployeeName: string;
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
    return cy.wrap({ createdEmpNumber, createdEmployeeName });
  });
}

export function cleanupEmployee(empNumber: number | null): Cypress.Chainable<any> {
  if (!empNumber) return cy.wrap(null);

  const req: IDeleteEmployeeRequest = { ids: [empNumber] };
  return EmployeeHelper.deleteEmployee(req).then((resp) => {
    expect([StatusCode.OK, StatusCode.NO_CONTENT]).to.include(resp.status);
  });
}

export function captureEmployeeNumber(): Cypress.Chainable<number> {
  return cy
    .url()
    .should("include", "/pim/viewPersonalDetails/empNumber/")
    .then((url) => {
      const match = url.match(/empNumber\/(\d+)/);
      expect(match).to.not.be.null;

      const empNumber = Number(match![1]);
      cy.log("Captured Employee Number: " + empNumber);
      return cy.wrap(empNumber);
    });
}

