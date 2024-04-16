import { useSelector } from "react-redux"
import { useAppDispatch, RootState, AppDispatch } from "../../redux/index";
import { loadProduct } from '../../redux/ProductReducer';
import Header from "../Header/Header";
import Description from "../Description/Description";
import Graph from "../Graph/Graph";
import Datatable from "../Datatable/Datatable";
import './Homepage.css'


const Homepage = () => {

    const dispatch: AppDispatch = useAppDispatch();

    
    dispatch(loadProduct())
      

    const productData = useSelector((state: RootState) => state.product);
    console.log('productData: ', productData)
    return (<>
        <Header />
        <div className="body-container">
            <Description />
            <div className="vertical-column">
                <Graph />
                <Datatable />
            </div>
        </div>
    </>
    )
}

export default Homepage;