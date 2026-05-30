import type { FC } from "react"
import type { IProduct } from "../../types/product"
import { Link } from "react-router";

interface FeaturedProductCardProps {
    product: IProduct
}

export const FeaturedProductCard: FC<FeaturedProductCardProps> = ({ product }) => {

    const imageUrl = product.images?.[0]?.url ?? "/placeholder.png";

    return (
        <Link
            to={`/products/${product._id}`}
            className="
                min-w-[280px] max-w-[250px]
                flex-shrink-0
                snap-start
                group
            "
        >
            <div className="overflow-hidden bg-white shadow-md shadow-zinc-500">
                {/* Imagen */}
                <img
                    className="w-full h-80 object-cover hover:scale-110 transition-all duration-500"
                    src={imageUrl}
                    alt={product.name}
                />
            </div>

        </Link>
    );
};
