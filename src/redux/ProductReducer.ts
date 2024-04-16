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
        loadProduct: (state) => {
            state.product = {"name": "data goes here"};
        }
    }
})

export const { loadProduct } = productSlice.actions

export default productSlice.reducer