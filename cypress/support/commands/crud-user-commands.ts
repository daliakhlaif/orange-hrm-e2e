import { HttpMethod } from "../enum/http"
import { IAddUserRequest } from "../api/payload/add-user"
import { IAddUserResponse } from "../api/response/add-user"
import { IDeleteUserRequest } from "../api/payload/delete-user";
import { IDeleteUserResponse } from "../api/response/delete-user";
import LoginPage from "../pages/login-page";
import AddUserPage from "../pages/add-user-page";
import { User } from "../interfaces/user-interface";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      addNewUser(user: User): Chainable<void>
      addUserAPI(
        url: string,
        body: IAddUserRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IAddUserResponse>>;

      deleteUserAPI(
        url: string,
        body: IDeleteUserRequest,
        headers?: Record<string, string>
      ): Chainable<Cypress.Response<IDeleteUserResponse>>;
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {

  LoginPage.typeUsername(username)
  LoginPage.typePassword(password)
  LoginPage.submit()

})

Cypress.Commands.add('addNewUser', (user: User) => {
  AddUserPage.selectRole(user.role);
  AddUserPage.typeEmployeeName(user.employeeName)
  AddUserPage.selectStatus(user.status)
  AddUserPage.typeUsername(user.username)
  AddUserPage.typePassword(user.password)
  AddUserPage.typeConfirmPassword(user.password)
  AddUserPage.save()
})

Cypress.Commands.add(
  "addUserAPI",
  (url: string, body: IAddUserRequest, headers?: Record<string, string>) => {
    return cy.request<IAddUserResponse>({
      method: HttpMethod.POST,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

Cypress.Commands.add(
  "deleteUserAPI",
  (url: string, body: IDeleteUserRequest, headers?: Record<string, string>) => {
    return cy.request<IDeleteUserResponse>({
      method: HttpMethod.DELETE,
      url,
      body,
      headers,
      failOnStatusCode: false,
    });
  }
);

