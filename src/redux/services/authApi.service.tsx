import { apiRequest } from "../helper/apiHelper";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/auth/login`;
  const response = await apiRequest<AuthResponse>(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
  return response;
}
