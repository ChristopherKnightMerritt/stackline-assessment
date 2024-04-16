import {createSlice} from '@reduxjs/toolkit';

export interface ProductStateInterface  {
    product: object;
}

const initialState: ProductStateInterface = {
    product: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state, data) => {
            state.product = data;
        }
    }
})

export const { loadProduct } = productSlice.actions

export default productSlice.reducer