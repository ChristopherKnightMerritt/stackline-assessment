import {createSlice} from '@reduxjs/toolkit';
import productJson from '../stackline_frontend_assessment_data_2021.json';

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
            state.product = productJson;
        }
    }
})

export const { loadProduct } = productSlice.actions

export default productSlice.reducer