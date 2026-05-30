import { useEffect } from "react";
import { ProductsList } from "../components/ProductFiles/ProductsList";
import { useCategoryStore } from "../store/useCategoryStore";
import { useProductStore } from "../store/useProductStore";
import { useParams } from "react-router";

export const CategoryScreen = () => {

  const { _id } = useParams();
  const categoryId = _id || "all";

  const { categories, fetchCategories } = useCategoryStore();
  const { products, fetchProducts, getProductsByCategory } = useProductStore();

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  if (categoryId === "all") {
    return (
      <div className="overflow-visible">
        <div className="text-center text-4xl font-rubik font-[340] mb-16 mt-10">
          Todos los productos
        </div>

        <ProductsList products={products} />
      </div>
    );
  }

  const category = categories.find(c => c._id === categoryId);
  const categoryProducts = getProductsByCategory(categoryId);

  return (
    <div className="overflow-visible">
      <div className="text-center text-4xl font-rubik font-[340] mb-16 mt-10">
        {category?.name}
      </div>

      {category?.products && (
        <ProductsList products={categoryProducts} />
      )}
    </div>
  );
};

export default CategoryScreen;
