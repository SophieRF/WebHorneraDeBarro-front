import type { IProduct } from "../../types/product";
import { ProductCard } from "./ProductCard";
import { useCartStore } from "../../store/useCartStore";

interface ProductListProps {
  products: IProduct[];
}

export const ProductsList: React.FC<ProductListProps> = ({ products }) => {

  const { products: cartProducts, addToCart } = useCartStore();

  const cart = { products: cartProducts };
  const sortedProducts = [...products].sort((a, b) => {
    if (a.available === b.available) return 0;

    return a.available ? -1 : 1;
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-6 mx-20 mb-10">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
            cart={cart} />
        ))}
      </div>
    </>
  )
}
