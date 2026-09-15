import IdProductPage from "./IdProductPage";

interface IProductId {
    params : Promise<{id : string}>
    searchParams : Promise<unknown>
}

const ProductsId = async ({ params }: IProductId) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/api.json");
  const data = await res.json();

  console.log("data:", data);

  return <IdProductPage data={data} id={id} />;
};
 
export default ProductsId;