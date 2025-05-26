
import Hero from "./components/hero";
import Sale from "./components/sale";
import Products from "./components/products";
import MoreProducts from "./components/moreProducts";
import Catagory from "./components/catagory";
import Music from "./components/music";


export default function Home() {
  return (
    <div>
      <Hero/> 
      <Sale/>
      <Catagory/>
      <Products/> 
      <Music/>
      <MoreProducts/>
    </div>
  );
}
