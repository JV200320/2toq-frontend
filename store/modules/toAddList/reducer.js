import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice({
  name: 'productList',
  initialState: [],
  reducers: {
    addToList(state, action) {
      return [...state, action.payload]
    },
    removeFromList: (state, action) => {
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    },
    clearList() {
      return [];
    }
  }
})

export const { addToList, clearList, removeFromList } = ListSlice.actions;
export default ListSlice.reducer;