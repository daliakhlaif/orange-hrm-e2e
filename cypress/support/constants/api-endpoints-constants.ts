export const BASE_API = "/api/v2";

export const API_MODULES = {
  PIM: `${BASE_API}/pim`,
  ADMIN: `${BASE_API}/admin`,
  LEAVE: `${BASE_API}/leave`,
  RECRUITMENT: `${BASE_API}/recruitment`
};

export const API_URLS = {
  employees: {
    base: `${API_MODULES.PIM}/employees`,
    jobDetails: (empNumber: number) => `${API_MODULES.PIM}/employees/${empNumber}/job-details`,
  },
  jobTitles: `${API_MODULES.ADMIN}/job-titles`,
  leave: {
    assignEntitlement: `${API_MODULES.LEAVE}/employees/leave-entitlements`,
    applyLeave: `${API_MODULES.LEAVE}/`,
  },
  recruitment: {
    vacancies: `${API_MODULES.RECRUITMENT}/vacancies`,
  },
  users: `${API_MODULES.ADMIN}/users`,
};