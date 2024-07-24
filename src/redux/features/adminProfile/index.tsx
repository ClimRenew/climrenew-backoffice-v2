import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAdminProfile, AdminProfileResponse } from "@/redux/services/adminProfileApi.service";

interface AdminProfileState {
  loading: boolean;
  error: string | null;
  profile: {
    admin: any;
    name: string;
    email: string;
    role: string;
    photo: string | null;
  } | null;
}

const initialState: AdminProfileState = {
  loading: false,
  error: null,
  profile: null,
};

export const getAdminProfile = createAsyncThunk<
  AdminProfileResponse,
  void,
  { rejectValue: { message: string; errors: { [key: string]: string[] } } }
>(
  "admin/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAdminProfile();
      if (!response.status) {
        return rejectWithValue({ message: response.message, errors: response.errors });
      }
      return response;
    } catch (error) {
      return rejectWithValue({ message: error instanceof Error ? error.message : "An unknown error occurred", errors: {} });
    }
  }
);

const adminProfileSlice = createSlice({
  name: "adminProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAdminProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(getAdminProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "An error occurred";
      });
  },
});

export default adminProfileSlice.reducer;
