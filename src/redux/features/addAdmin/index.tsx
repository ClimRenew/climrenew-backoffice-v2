import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAdministrator, AddAdminResponse } from "@/redux/services/adminApi.service";

interface AdminState {
  loading: boolean;
  error: string | null;
  message: string | null;
  validationErrors: { [key: string]: string[] } | null;
}

const initialState: AdminState = {
  loading: false,
  error: null,
  message: null,
  validationErrors: null,
};

export const requestAddAdministrator = createAsyncThunk<
  AddAdminResponse,
  { name: string; role: string; email: string },
  { rejectValue: { message: string; errors: { [key: string]: string[] } } }
>(
  "admin/addAdministrator",
  async ({ name, role, email }, { rejectWithValue }) => {
    try {
      const response = await addAdministrator({ name, role, email });
      if (!response.status) {
        return rejectWithValue({ message: response.message, errors: response.errors });
      }
      return response;
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : "An unknown error occurred", errors: {} });
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestAddAdministrator.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.validationErrors = null;
      })
      .addCase(requestAddAdministrator.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(requestAddAdministrator.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "An error occurred";
        state.validationErrors = action.payload?.errors || null;
      });
  },
});

export default adminSlice.reducer;
