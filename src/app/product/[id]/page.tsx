import axios from "axios";
import IdProductPage from "./IdProductPage";

interface IProductId {
    params : Promise<{id : string}>
    searchParams : Promise<{}>
}

const ProductsId = async(porps : IProductId) => {
    
    const {id} = await porps.params
    const {data} = await axios.get('http://localhost:8000/Products')

    return (
        <>
            <IdProductPage data={data} id={id} />
        </>
    );
}
 
export default ProductsId;