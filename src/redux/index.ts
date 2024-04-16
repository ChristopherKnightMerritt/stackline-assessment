import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProductReducer from "./ProductReducer";


export const store = configureStore({
    reducer: {
        product: ProductReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()