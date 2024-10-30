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
   errors: { [key: string]: string[] };

}

export interface AuthError {
  status: boolean;
  message: string;
  errors: {
    [key: string]: string[];
  };
}


export interface ForgotPasswordResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    key: number;
  };
   errors: { [key: string]: string[] };

}
export interface VerifyCodeResponse {
  status: boolean;
  message: string;
  data: any;
   errors: { [key: string]: string[] };

}

export interface ResetPasswordResponse {
  status: boolean;
  message: string;
  data: any;
   errors: { [key: string]: string[] };

}

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const url = `https://climrenew.com/api/v2/admin/auth/login`;
  const response = await apiRequest<AuthResponse>(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (response.status) {
    localStorage.setItem('token', response.data.token); // Ensure token is stored correctly
  }
  return response;
}

export async function forgotPassword(email: string): Promise<ForgotPasswordResponse> {
  const url = `https://climrenew.com/api/v2/admin/auth/password/forgot`;
  return await apiRequest<ForgotPasswordResponse>(url, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

export async function verifyCode(token: string, key: number, code: string): Promise<VerifyCodeResponse> {
  const url = `https://climrenew.com/api/v2/admin/auth/password/code/verify`;
  return await apiRequest<VerifyCodeResponse>(url, {
    method: 'POST',
    body: JSON.stringify({ token, key, code }),
  });
}

export async function resetPassword(token: string, key: number, password: string, confirmPassword: string): Promise<ResetPasswordResponse> {
  const url = `https://climrenew.com/api/v2/admin/auth/password/reset`;
  return await apiRequest<ResetPasswordResponse>(url, {
    method: 'POST',
    body: JSON.stringify({ token, key, password, password_confirmation: confirmPassword }),
  });
}

