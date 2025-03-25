import HomeSlider from "../Components/HomeSlider";
import HomeCards from "../Components/HomeCards/HomeCards";
import HomeCallAction from "../Components/CallAction";
import HomeContact from "../Components/HomeContact/Contact";
import HomeFooter from "../Components/HomeFooter";
import FamousProducts from "../Components/Products/FamousProducts";

export default async function Home() {
  
  return (
    <>
      <HomeSlider />
      <FamousProducts />
      <HomeCards />
      <HomeCallAction />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
