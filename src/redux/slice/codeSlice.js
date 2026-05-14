import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  codeList: {}
};

const codeSlice = createSlice({
  name: 'code',

  initialState,

  reducers: {

    setCodeList: (state, action) => {

      const map = {};

      action.payload.forEach(group => {
        map[group.codeGroup] = group.codes;
      });

      state.codeList = map;
    },

    clearCode: (state) => {
      state.codeList = {};
    }

  }
});

export const {
  setCodeList,
  clearCode
} = codeSlice.actions;

export default codeSlice.reducer;