import { apiRequest } from "../helper/apiHelper";

export interface AdminProfileResponse {
  status: boolean;
  message: string;
  data: {
    name: string;
    email: string;
    role: string;
    photo: string | null;
    admin:any;
  };
  errors: { [key: string]: string[] };
}

export async function fetchAdminProfile(): Promise<AdminProfileResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/profile/account`;
  return await apiRequest<AdminProfileResponse>(url, {
    method: 'POST',
  });
}
