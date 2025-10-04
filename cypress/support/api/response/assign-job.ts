export interface IAssignJobResponse {
  data: {
    empNumber: number;
    joinedDate: string | null;
    jobTitle: {
      id: number;
      title: string;
      isDeleted: boolean;
    };
    jobSpecificationAttachment: {
      id: number | null;
      filename: string | null;
    };
    empStatus: {
      id: number;
      name: string;
    };
    jobCategory: {
      id: number;
      name: string;
    };
    subunit: {
      id: number;
      name: string;
      unitId: string;
    };
    location: {
      id: number;
      name: string;
    };
    employeeTerminationRecord: {
      id: number | null;
      date: string | null;
    };
  };
  meta: any[];
  rels: any[];
}