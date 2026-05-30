// import imagenHome from "../assets/imagenHome.png";
import { CategoryList } from "../components/CategoyFiles/CategoryList";
import { HeroSection } from "../components/HomeFiles/HeroSection";
import { FeaturedProductList } from "../components/ProductFiles/FeaturedProductList";

export const Home = () => {

  return (
    <>
      <div className="bg-[#fff] mb-12 mx-10 text-neutral-900">

        {/*Info General */}
        <HeroSection />

        {/*Destacados y Categorías */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mt-16 mb-2">
            <h2 className="font-rubik font-[350] text-4xl">
              Novedades
            </h2>
            <span className="material-symbols-outlined text-3xl relative top-[2px]">
              sentiment_satisfied
            </span>
          </div>

          <FeaturedProductList />
        </div>

        <div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#c4956a] to-transparent" />
          <h3 className="font-cormorant italic font-normal text-[#20170c] leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-5xl text-center py-10">
            Antes de ser tuya, fue{" "}
            <em className="italic font-[450] text-[#8b5a2b]">barro.</em>
            <br />
            Antes de ser{" "}
            <em className="italic font-[450] text-[#8b5a2b]">barro,</em>
            {" "}fue{" "}
            <em className="italic font-[450] text-[#586849]">tierra.</em>
          </h3>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c4956a] to-transparent" />

        </div>

        <div>
          <CategoryList />
        </div>

      </div>
    </>
  )
}
