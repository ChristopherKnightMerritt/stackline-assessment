import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { loadProduct } from '../redux/ProductReducer';

const Homepage = () => {

    const dispatch: AppDispatch = useAppDispatch();

    
    dispatch(loadProduct())
      

    const productData = useSelector((state: RootState) => state.product);
    console.log('productData: ', productData)
    return (
        <div>hello 2</div>
    )
}

export default Homepage;