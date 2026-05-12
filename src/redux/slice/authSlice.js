import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  token: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLogin = true;
      state.accessToken = action.payload.accessToken;
      state.user = {
        userId: action.payload.userId,
        userName: action.payload.userName,
        roleCode: action.payload.roleCode
      };
    },
    logout(state) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;