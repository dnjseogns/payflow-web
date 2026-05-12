import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuList: []
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {

    setMenuList: (state, action) => {
      state.menuList = action.payload;
    },

    clearMenu: (state) => {
      state.menuList = [];
    }

  }
});

export const {
  setMenuList,
  clearMenu
} = menuSlice.actions;

export default menuSlice.reducer;