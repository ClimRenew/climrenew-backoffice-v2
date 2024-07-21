import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog, fetchBlogs, createBlog } from "@/redux/services/blogApi.service";

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

export const createPost = createAsyncThunk<
  Blog,
  FormData,
  { rejectValue: string }
>(
  "blogs/createPost",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createBlog(formData);
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return response.data;
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
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogSlice.reducer;