import { useSelector } from "react-redux"
import { useAppDispatch, RootState, AppDispatch } from "../../redux/index";
import { loadProduct } from '../../redux/ProductReducer';
import Header from "../Header/Header";
import Description from "../Description/Description";
import Graph from "../Graph/Graph";
import Datatable from "../Datatable/Datatable";
import './Homepage.css'
import { updateDatatable } from '../../redux/DatatableReducer';



// export these interfaces?
interface productDetail {
    brand: string,
    details: Array<string>,
    id: string,
    image: string,
    retailer: string,
    tags: Array<string>,
    title: string,
    subtitle: string,
}

interface salesObject {
    sales: Array<salesData>
}

interface salesData {
    weekEnding: string
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

const Homepage = () => {

    const dispatch: AppDispatch = useAppDispatch();
    dispatch(loadProduct())
      
    const allProductData = useSelector((state: RootState) => state.product);
    const productData = allProductData['product']
    const productDetail = productData as productDetail[]

    const salesObject = productData as salesObject[]
    const salesData = salesObject[0].sales
    dispatch(updateDatatable(salesData))

    return (<>
        <Header />
        <div className="body-container">
            <Description productDetails= {productDetail}/>
            <div className="vertical-column">
                <Graph salesData={salesData}/>
                <Datatable salesData={salesData}/>
            </div>
        </div>
    </>
    )
}

export default Homepage;