export interface IAddUserResponse {
  data: {
    id: number;
    userName: string;
    deleted: boolean;
    status: boolean;
    employee: {
      empNumber: number;
      employeeId: string;
      firstName: string;
      middleName: string;
      lastName: string;
      terminationId: number | null;
    };
    userRole: {
      id: number;
      name: string;
      displayName: string;
    };
  };
  meta: any[];
  rels: any[];
}