import { useEffect, useRef, useState } from "react";
import { useProductStore } from "../../store/useProductStore";
import { FeaturedProductCard } from "./FeaturedProductCard";

export const FeaturedProductList = () => {

    const { products, fetchProducts } = useProductStore();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hasOverflow, setHasOverflow] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        checkOverflow();

        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [products]);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const scrollAmount = 300;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const checkOverflow = () => {
        if (!scrollRef.current) return;

        const el = scrollRef.current;

        setHasOverflow(el.scrollWidth > el.clientWidth);
    }

    return (
        <div className="relative">

            {hasOverflow &&
                (<button
                    onClick={() => scroll("left")}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-10
    w-10 h-10
    flex items-center justify-center
    hover:scale-110 text-white transition duration-300"
                >
                    <span className="material-symbols-outlined text-3xl leading-none ml-[2px] font-bold">
                        arrow_back_ios
                    </span>
                </button>)}

            {/* Carrusel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar py-4
                    snap-x snap-mandatory
                    scroll-smooth"
            >
                {products
                    .filter(p => p.isFeatured)
                    .map(product => (
                        <FeaturedProductCard key={product._id} product={product} />
                    ))}
            </div>

            {hasOverflow && (<button
                onClick={() => scroll("right")}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10
    w-10 h-10
    flex items-center justify-center text-white
    hover:scale-110 transition duration-300"
            >
                <span className="material-symbols-outlined text-3xl leading-none mr-[2px] font-bold">
                    arrow_forward_ios
                </span>
            </button>)}
        </div>
    );
};