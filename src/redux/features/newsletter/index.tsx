import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { broadcastNewsletter } from '../../services/newsletterApi.service';

interface NewsletterState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsletterState = {
  status: 'idle',
  error: null,
};

interface BroadcastNewsletterData {
  name: string;
  replyTo: string;
  subject: string;
  message: string;
}

interface BroadcastNewsletterResponse {
  status: boolean;
  message: string;
  data: any;
  errors?: { replyTo?: string[] };
}

export const sendNewsletter = createAsyncThunk<
  BroadcastNewsletterResponse,
  BroadcastNewsletterData,
  { rejectValue: BroadcastNewsletterResponse }
>(
  'newsletter/sendNewsletter',
  async (data, { rejectWithValue }) => {
    try {
      const response = await broadcastNewsletter(data);
      if (!response.status) {
        return rejectWithValue(response);
      }
      return response;
    } catch (error) {
      return rejectWithValue({
        status: false,
        message: 'Failed to broadcast newsletter',
        data: null,
        errors: {},
      });
    }
  }
);

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendNewsletter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendNewsletter.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(sendNewsletter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to send newsletter';
      });
  },
});

export default newsletterSlice.reducer;
