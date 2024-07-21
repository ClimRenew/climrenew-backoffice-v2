import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog, fetchBlogs } from "@/redux/services/blogApi.service";

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

export const getBlogs = createAsyncThunk<
  Blog[],
  void,
  { rejectValue: string }
>(
  "blogs/getBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchBlogs();
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return response.data.posts;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogSlice.reducer;
