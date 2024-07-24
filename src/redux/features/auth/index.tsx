import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, forgotPassword, verifyCode, resetPassword, AuthResponse,ResetPasswordResponse, VerifyCodeResponse, ForgotPasswordResponse } from "@/redux/services/authApi.service";


interface AuthState {
  token: string | null;
  loading: boolean;
  error: any | null;
  errors: any | null;

  message: string | null;
  validationErrors: any | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  errors: null,
  message: null,
  key: null,
  validationErrors: null
};

interface AuthState {
  token: string | null;
  key: number | null;
  loading: boolean;
  error: any | null;
}




export const authenticateUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);




export const requestForgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  { email: string },
  { rejectValue: string }
>(
  "auth/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await forgotPassword(email);
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

export const requestVerifyCode = createAsyncThunk<
  VerifyCodeResponse,
  { token: string, key: number, code: string },
  { rejectValue: string }
>(
  "auth/verifyCode",
  async ({ token, key, code }, { rejectWithValue }) => {
    try {
      const response = await verifyCode(token, key, code);
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

export const requestResetPassword = createAsyncThunk<
  ResetPasswordResponse,
  { token: string, key: number, password: string, confirmPassword: string },
  { rejectValue: { message: string, errors: { [key: string]: string[] } } }
>(
  "auth/resetPassword",
  async ({ token, key, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const response = await resetPassword(token, key, password, confirmPassword);
      if (!response.status) {
        return rejectWithValue({ message: response.message, errors: response.errors });
      }
      return response;
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : "An unknown error occurred", errors: {} });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestForgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestForgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.key = action.payload.data.key;
      })
      .addCase(requestForgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(requestVerifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestVerifyCode.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.token;
        state.key = action.payload.data.key;
        state.message = "Code verified successfully.";
      })
      .addCase(requestVerifyCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(requestResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.validationErrors = null;
      })
      .addCase(requestResetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Password reset successfully.";
      })
      .addCase(requestResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "An error occurred";
        state.validationErrors = action.payload?.errors || null;
      });
  },
});

export default authSlice.reducer;
