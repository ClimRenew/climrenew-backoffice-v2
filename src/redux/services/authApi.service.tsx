import { apiRequest } from "../helper/apiHelper";

interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse { // Exporting AuthResponse
  status: boolean;
  message: string;
  token?: string;
  admin?: {
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
}

export interface AuthError { // Exporting AuthError
  status: boolean;
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export async function login(credentials: LoginCredentials): Promise<AuthResponse | AuthError> {
  const url = `https://v2.climrenew.com/api/v2/admin/auth/login`;
  const response = await apiRequest<AuthResponse>(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (!response.status) {
    throw new Error(response.message);
  }

  return response;
}
