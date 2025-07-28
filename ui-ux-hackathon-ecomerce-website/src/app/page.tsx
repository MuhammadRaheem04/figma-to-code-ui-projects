import Blog from "@/components/home/blog";
import Hero from "@/components/home/hero";
import Insta from "@/components/home/insta";
import MoreProducts from "@/components/home/moreProducts";
import NewArrivals from "@/components/home/newArrivals";
import Products from "@/components/home/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <MoreProducts />
      <Products />
      <NewArrivals />
      <Blog />
      <Insta />
    </div>
  );
}
