interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
  ip_address?: string;
  cc?: string;
  country?: string;
  birthdate?: string;
  registration_dttm?: string;
  salary?: number;
  title?: string;
  comments?: string;
}

interface GetUsersParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortColumn?: string;
  sortOrder?: "asc" | "desc";
  registrationDate?: string;
  gender?: string;
  country?: string;
  minSalary?: number;
  birthdate?: string;
}

interface PagedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
