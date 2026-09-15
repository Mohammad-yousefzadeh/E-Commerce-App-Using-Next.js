import IdProductPage from "./IdProductPage";
import products from "../../../data/api.json"

interface IProductId {
    params : Promise<{id : string}>
    searchParams : Promise<unknown>
}

const ProductsId = async ({ params }: IProductId) => {
  const { id } = await params;

  const data = products;

  console.log("data:", data);

  return <IdProductPage data={data} id={id} />;
};
 
export default ProductsId;