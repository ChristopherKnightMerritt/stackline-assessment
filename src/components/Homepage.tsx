import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useAppDispatch, RootState, AppDispatch } from "../redux/index";
import { loadProduct } from '../redux/ProductReducer';
import Header from "./Header";
import Description from "./Description";
import Graph from "./Graph";
import Datatable from "./Datatable";


const Homepage = () => {

    const dispatch: AppDispatch = useAppDispatch();

    
    dispatch(loadProduct())
      

    const productData = useSelector((state: RootState) => state.product);
    console.log('productData: ', productData)
    return (<>
        <Header />
        <Description />
        <Graph />
        <Datatable />
    </>
    )
}

export default Homepage;