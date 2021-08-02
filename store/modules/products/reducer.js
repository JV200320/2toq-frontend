import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null
  },
  reducers: {
    setProducts(state, action) {
      state.products = [...action.payload]
    },
    clearProducts(state, action) {
      state.products = null
    }
  }
})

export const { setProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;