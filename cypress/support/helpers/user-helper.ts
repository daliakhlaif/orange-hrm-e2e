import { IDeleteUserRequest } from "../api/payload/delete-user"
import { IAddUserRequest } from "../api/payload/add-user"
import { API_URLS } from "../constants/api-endpoints-constants"

export class UserHelper {
  static addUser(body: IAddUserRequest) {
    return cy.addUserAPI(API_URLS.users, body);
  }

  static deleteUser(body: IDeleteUserRequest) {
    return cy.deleteUserAPI(API_URLS.users, body);
  }
}
