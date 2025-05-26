import Blog from "@/components/home/blog";
import Hero from "@/components/home/hero";
import Insta from "@/components/home/insta";
import MoreProducts from "@/components/home/moreProducts";
import Navbar1 from "@/components/home/navbar1";
import NewArrivals from "@/components/home/newArrivals";
import Products from "@/components/home/products";





export default function Home() {
  return (
    <div>
        <Hero />
       <MoreProducts/>
        <Products/>
       <NewArrivals/>
       <Blog/>
      <Insta/> 
    </div>
  );
}