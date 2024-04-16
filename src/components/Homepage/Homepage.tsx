import { useSelector } from "react-redux"
import { useAppDispatch, RootState, AppDispatch } from "../../redux/index";
import { loadProduct } from '../../redux/ProductReducer';
import Header from "../Header/Header";
import Description from "../Description/Description";
import Graph from "../Graph/Graph";
import Datatable from "../Datatable/Datatable";
import './Homepage.css'

interface productDetail {
    brand: string,
    details: Array<string>,
    id: string,
    image: string,
    retailer: string,
    tags: Array<string>,
    title: string,
    subtitle: string
}

const Homepage = () => {

    const dispatch: AppDispatch = useAppDispatch();
    dispatch(loadProduct())
      
    const allProductData = useSelector((state: RootState) => state.product);
    const productData = allProductData['product']
    const productDetail = productData as productDetail[]

    return (<>
        <Header />
        <div className="body-container">
            <Description productDetails= {productDetail}/>
            <div className="vertical-column">
                <Graph />
                <Datatable />
            </div>
        </div>
    </>
    )
}

export default Homepage;