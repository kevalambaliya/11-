import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import API from "../../config/Api";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, { rejectWithValue }) => {
    try {
      let res = await API.post("/users", user);
      Cookies.set("user", JSON.stringify(res.data), { expires: 1 });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
const intialState = {
  user: userData ? userData : {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: intialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
