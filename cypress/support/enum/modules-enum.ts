export enum APP_MODULES {
  ADMIN = "Admin",
  PIM = "PIM",
  LEAVE = "Leave",
  TIME = "Time",
  RECRUITMENT = "Recruitment",
  MY_INFO = "PIM",
  PERFORMANCE = "Performance",
  DASHBOARD = "Dashboard",
  DIRECTORY = "Directory",
  MAINTENANCE = "Maintenance",
  CLAIM = "Claim",
  BUZZ = "Buzz"
};

export enum MODULE_URL_FREG {
  ADMIN = "/admin",
  PIM = "/pim",
  LEAVE = "/leave",
  TIME = "/time",
  RECRUITMENT = "/recruitment",
  MY_INFO = "/pim/viewPersonalDetails",
  PERFORMANCE = "/performance",
  DASHBOARD = "/dashboard",
  DIRECTORY = "/directory",
  MAINTENANCE = "/maintenance",
  CLAIM = "/claim",
  BUZZ = "/buzz"
};

export enum PAGE_URLS {
  ADD_CANDIDATE = `${MODULE_URL_FREG.RECRUITMENT}/addCandidate`,
  VIEW_CANDIDATES = `${MODULE_URL_FREG.RECRUITMENT}/viewCandidates`,
  ADD_VACANCY = `${MODULE_URL_FREG.RECRUITMENT}/addJobVacancy`,
  LEAVE_LIST = `${MODULE_URL_FREG.LEAVE}/viewLeaveList`,
  MY_LEAVE_LIST = `${MODULE_URL_FREG.LEAVE}/viewMyLeaveList`,
  ADD_EMPLOYEE = `${MODULE_URL_FREG.PIM}/addEmployee`,
  APPLY_LEAVE = `${MODULE_URL_FREG.LEAVE}/applyLeave`,
  ADD_ENTITLEMENT = `${MODULE_URL_FREG.LEAVE}/addLeaveEntitlement`,
  ADD_USER = `${MODULE_URL_FREG.ADMIN}/saveSystemUser`,
  USERS = `${MODULE_URL_FREG.ADMIN}/viewSystemUsers`,
  EMPLOYEE_LIST = `${MODULE_URL_FREG.PIM}/viewEmployeeList`
}