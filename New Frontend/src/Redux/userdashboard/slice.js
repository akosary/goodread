import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseURL = "http://localhost:3500";
const nestedRoute = "/rates";
const authToken = localStorage.getItem("authToken");
const user_id = localStorage.getItem("user_id");
const queryParams = new URLSearchParams({ user_id }).toString();

export const fetchApiData = createAsyncThunk("userDashboard/fetchData", async () => {
  console.log("from fetch data");
  console.log(user_id);
  console.log(authToken);
  try {
    const response = await fetch(`${baseURL}${nestedRoute}?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const updateRateOrStatus = createAsyncThunk("userDashboard/update", async (data) => {
  try {
    const { id, rate, status, user, book } = data;
    const response = await fetch(`${baseURL}${nestedRoute}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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
        console.log("Done Data User");
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
