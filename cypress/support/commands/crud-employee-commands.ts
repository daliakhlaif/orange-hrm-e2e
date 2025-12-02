import { IAddEmployeeRequest } from "../api/payload/add-employee";
import { IAssignJobRequest } from "../api/payload/assign-job";
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { IAddEmployeeResponse } from "../api/response/add-employee";
import { IAssignJobResponse } from "../api/response/assign-job";
import { IDeleteEmployeeResponse } from "../api/response/delete-employee";
import { HeaderValues, HttpMethod } from "../enum/http";
import { Employee } from "../interfaces/employee-interface";
import AddEmployeePage from "../pages/employees/add-employee-page";

declare global {
  namespace Cypress {
    interface Chainable {
      addNewEmployee(
        employee: Employee,
        withLoginDetails?: boolean
      ): Chainable<void>

      addEmployeeAPI(
        url: string,
        body: IAddEmployeeRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IAddEmployeeResponse>>;

      deleteEmployeeAPI(
        url: string,
        body: IDeleteEmployeeRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IDeleteEmployeeResponse>>;

      assignJobDetailsAPI(
        url: string,
        body: IAssignJobRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IAssignJobResponse>>;
    }
  }
}

Cypress.Commands.add(
  'addNewEmployee',
  (employee: Employee, withLoginDetails: boolean = false) => {
    AddEmployeePage.typeFirstName(employee.firstName);
    if (employee.middleName) AddEmployeePage.typeMiddleName(employee.middleName);
    AddEmployeePage.typeLastName(employee.lastName);
    AddEmployeePage.typeEmployeeId(employee.id);

    if (employee.image) {
      AddEmployeePage.uploadPhoto(employee.image);
    }

    if (withLoginDetails) {
      AddEmployeePage.enableCreateLoginDetailsSwitch();
      if (employee.username) AddEmployeePage.typeUsername(employee.username);
      if (employee.password) {
        AddEmployeePage.typePassword(employee.password);
        AddEmployeePage.typeConfirmPassword(employee.password);
      }
    }

    return AddEmployeePage.save();
  }
);

Cypress.Commands.add(
  "addEmployeeAPI",
  (url: string, body: IAddEmployeeRequest, headers?: Record<string, string>) => {
    return cy.request<IAddEmployeeResponse>({
      method: HttpMethod.POST,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add(
  "deleteEmployeeAPI",
  (url: string, body: IDeleteEmployeeRequest, headers?: Record<string, string>) => {
    return cy.request<IDeleteEmployeeResponse>({
      method: HttpMethod.DELETE,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add(
  "assignJobDetailsAPI",
  (
    url: string,
    body: IAssignJobRequest,
    headers?: Record<string, string>
  ): Cypress.Chainable<Cypress.Response<IAssignJobResponse>> => {
    return cy.request<IAssignJobResponse>({
      method: HttpMethod.PUT,
      url,
      body,
      headers: {
        accept: HeaderValues.CONTENT_TYPE,
        ...headers,
      },
      failOnStatusCode: false,
    });
  }
);

