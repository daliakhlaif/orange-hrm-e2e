export enum UserCredentials {
  USERNAME = 'Admin',
  PASSWORD = 'admin123'
}

export enum EmployeeInfo {
  ID = "600",
  FIRST_NAME = "John",
  MIDDLE_NAME = "Watson",
  LAST_NAME = "Doe",
  USERNAME = "john_81",
  PASSWORD = "Password@123",
  PASSWORD_SHORT = " 123",
  PHOTO_VALID = "cypress/fixtures/images/profile.jpg",
  PHOTO_INVALID = "cypress/fixtures/files/invalid-file.exe"
}


export enum Roles {
  ESS = "ESS",
  ADMIN = "Admin"
}

export enum Status {
  ENABLED = "Enabled",
  DISABLED = "Disabled"
}

export enum RolesApi {
  ESS = 2,
  ADMIN = 1
}

export enum EntitlementData {
  EMPLOYEE_TYPE = 'Individual',
  LEAVE_TYPE = 'Personal',
  LEAVE_PERIOD = '2025-01-01 - 2025-12-31',
  ENTITLEMENT_VALUE = '10',
}

export enum LeaveData {
  LEAVE_TYPE = 'Personal',
  FROM_DATE = '2025-05-10',
  TO_DATE = '2025-06-10',
}

export enum UserInfo {
  EMPLOYEE_NAME = `${EmployeeInfo.FIRST_NAME} ${EmployeeInfo.MIDDLE_NAME} ${EmployeeInfo.LAST_NAME}`,
  USERNAME = `${EmployeeInfo.USERNAME}`,
  PASSWORD = `${EmployeeInfo.PASSWORD}`,
  ROLE = `${Roles.ADMIN}`,
  STATUS = `${Status.ENABLED}`
}

export enum Actions {
  DELETE = "delete",
  EDIT = "edit",
}



