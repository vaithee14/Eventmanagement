import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchupcomingEvents = createAsyncThunk(
  "upcoming/fetchupcomingEvents",
  async () => {
    const response = await axios.get(
      "http://localhost:4050/upcomingEvent/api/get/upcomingevents"
    );
    return response.data;
  }
);

// User Registration
export const emailRegistration = createAsyncThunk(
  "upcoming/emailRegistration",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4050/userRegistration/registration",
        userData
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// User Login
export const loginRegistration = createAsyncThunk(
  "upcoming/emailLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4050/userRegistration/login",
        userData
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);



const upcomingEventsSlice = createSlice({
  name: "upcoming",
  initialState: {
    upcomingEvents: [],
    status: "idle",
    error: null,
    authMessage: null,
  },
  reducers: {
    clearAuthMessage: (state) => {
      state.authMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchupcomingEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchupcomingEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.upcomingEvents = action.payload;
      })
      .addCase(fetchupcomingEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(emailRegistration.fulfilled, (state, action) => {
        state.authMessage = action.payload;
      })
      .addCase(emailRegistration.rejected, (state, action) => {
        state.authMessage = action.payload;
      })
      .addCase(loginRegistration.fulfilled, (state, action) => {
        state.authMessage = action.payload;
      })
      .addCase(loginRegistration.rejected, (state, action) => {
        state.authMessage = action.payload;
      });
  },
});

export const { clearAuthMessage } = upcomingEventsSlice.actions;
export default upcomingEventsSlice.reducer;
