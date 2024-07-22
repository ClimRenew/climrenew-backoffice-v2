import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog, fetchBlogs, createBlog, deleteBlog } from "@/redux/services/blogApi.service";

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
      return response.data.post; // Adjusted to match the correct response structure
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

export const deletePost = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
  "blogs/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteBlog(id);
      if (!response.status) {
        return rejectWithValue(response.message);
      }
      return id;
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
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default blogSlice.reducer;
