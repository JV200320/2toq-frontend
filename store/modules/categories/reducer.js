import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: null
  },
  reducers: {
    setCategories(state, action) {
      state.categories = [...action.payload]
    },
    clearCategories(state, action) {
      state.categories = null
    }
  }
})

export const { setCategories, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;