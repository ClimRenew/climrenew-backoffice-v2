import { apiRequest } from "../helper/apiHelper";

interface AddAdminRequest {
  name: string;
  role: string;
  email: string;
}

export interface AddAdminResponse {
  status: boolean;
  message: string;
  data: any;
  errors: { [key: string]: string[] };
}

export async function addAdministrator(admin: AddAdminRequest): Promise<AddAdminResponse> {
  const url = `https://climrenew.com/api/v2/admin/administration/invitation`;
  return await apiRequest<AddAdminResponse>(url, {
    method: 'POST',
    body: JSON.stringify(admin),
  });
}
