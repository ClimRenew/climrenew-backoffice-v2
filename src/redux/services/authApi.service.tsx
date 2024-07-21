import { apiRequest } from "../helper/apiHelper";

interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    admin: {
      name: string;
      email: string;
      bio: string | null;
      email_verified: boolean;
      socials: {
        facebook: string | null;
        twitter: string | null;
        instagram: string | null;
        linkedIn: string | null;
        github: string | null;
      };
      role: string;
      photo: string | null;
    };
  };
  errors: any[];
}

export interface AuthError { // Exporting AuthError
  status: boolean;
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const url = `https://v2.climrenew.com/api/v2/admin/auth/login`;
  const response = await apiRequest<AuthResponse>(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (response.status) {
    localStorage.setItem('token', response.data.token); // Ensure token is stored correctly
  }

  return response;
}
