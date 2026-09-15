import HomeSlider from "../Components/HomeSlider";
import HomeCards from "../Components/HomeCards/HomeCards";
import HomeCallAction from "../Components/CallAction";
import HomeContact from "../Components/HomeContact/Contact";
import FamousProducts from "../Components/Products/FamousProducts";

export default async function Home() {
  
  return (
    <div className="overflow-hidden">
      <HomeSlider />
      <FamousProducts />
      <HomeCards />
      <HomeCallAction />
      <HomeContact />
    </div>
  );
}
