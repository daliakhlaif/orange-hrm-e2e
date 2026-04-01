export interface IAddEmployeeResponse {
  data: {
    empNumber: number;
    employeeId: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    photo?: string;
    loginDetails?: {
      username: string;
      status: string;
    };
  };
  message?: string;
  status?: string;
}