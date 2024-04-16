import './Description.css'

interface Props {
    productDetails: Array<productDetail>,
}
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

const Description: React.FC<Props> = ({productDetails}) => {

    const product = productDetails[0];

    return (
        <div className='description-container'>
            <div className='product-info-container'>
                <img src={product.image} alt={product.title} />
                <h3 className='product-name'>{product.title}</h3>
                <p>{product.subtitle}</p>
            </div>
            <div className='tag-container'>
                {
                    product.tags.map((tag: string, i) => {
                        return(
                            <div className='tag' key={i} >{tag}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Description;