import {createSlice} from '@reduxjs/toolkit';

interface salesData {
    weekEnding: string
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface DatatableStateInterface {
    tableData: Array<salesData>;
}

const initialState: DatatableStateInterface = {
    tableData: [],
}

export const datatableSlice = createSlice({
    name: 'datatable',
    initialState,
    reducers: {
        updateDatatable: (state, newState) => {
            state.tableData = newState.payload;
        },
    }
})

export const { updateDatatable } = datatableSlice.actions

export default datatableSlice.reducer