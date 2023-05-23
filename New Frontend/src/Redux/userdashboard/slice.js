import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseURL = "http://localhost:3500";
const nestedRoute = "/rates";

export const fetchApiData = createAsyncThunk("userDashboard/fetchData", async (Data) => {
  try {
    const { user } = Data;
    const response = await fetch(`${baseURL}${nestedRoute}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching user Dashboard data");
  }
});

export const updateRateOrStatus = createAsyncThunk("userDashboard/update", async (data) => {
  try {
    const { id, rate, status, user, book } = data;
    const response = await fetch(`${baseURL}${nestedRoute}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rate, status, user, book }),
    });
    // if (!response.ok) throw new Error("Error updating user Dashboard");
    const finalData = await response.json();
    return finalData;
  } catch (error) {
    throw new Error("Error in sending Data");
  }
});

const apiDataSlice = createSlice({
  name: "userDashboard",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    message: null,
  },
  reducers: {
    changeMessage(state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateRateOrStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(updateRateOrStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        console.log("fulfilled");
      })
      .addCase(updateRateOrStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.log("rejected");
      });
  },
});

export const { changeMessage } = apiDataSlice.actions;
export default apiDataSlice.reducer;
