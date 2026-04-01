import { IAddEmployeeRequest } from "../api/payload/add-employee"
import { IDeleteEmployeeRequest } from "../api/payload/delete-employee";
import { API_URLS } from "../constants/api-endpoints-constants";

export class EmployeeHelper {
  static addEmployee(body: IAddEmployeeRequest) {
    return cy.addEmployeeAPI(API_URLS.employees.base, body);
  }

  static deleteEmployee(body: IDeleteEmployeeRequest) {
    return cy.deleteEmployeeAPI(API_URLS.employees.base, body);
  }
}