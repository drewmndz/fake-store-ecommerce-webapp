import ShopCategories from "../ShopCategories/ShopCategories";
import ProductGrid from "../../../components/ProductGrid/ProductGrid";
import { useProducts } from "../../../store/productStore";
import GridLoader from "react-spinners/GridLoader";

export default function Jewelery() {
  const jeweleryProducts = useProducts((state) => state.products).filter(
    (product) => product.category === "jewelery"
  );
  const isLoading = useProducts((state) => state.isLoading);

  return (
    <>
      <ShopCategories />
      {isLoading ? (
        <div className="loading">
          <GridLoader size={15} color="black" />
        </div>
      ) : (
        <ProductGrid products={jeweleryProducts} />
      )}
    </>
  );
}