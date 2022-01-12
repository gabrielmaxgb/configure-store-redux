import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
  loading: false,
  error: null,
  user: {},
};

export const fetchRandomUser = createAsyncThunk('auth/fetchRandomUser', async () => {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data.results[0];
  }
  catch(error) {
    throw Error(error);
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { // use this for conventional sync actions
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: { // this handles async actions. Ex: fetchRandomUser
    [fetchRandomUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRandomUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [fetchRandomUser.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
