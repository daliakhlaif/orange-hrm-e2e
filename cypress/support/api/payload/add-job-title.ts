export interface IAddJobTitleRequest {
  title: string;
  description: string | null;
  specification: string | null;
  note: string | null;
}