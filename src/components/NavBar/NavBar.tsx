import { useEffect, useState } from "react";
import { MenuProductos } from "./MenuProductos";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useCategoryStore } from "../../store/useCategoryStore";
import { useProductStore } from "../../store/useProductStore";
// import { SearchingBar } from "./SearchingBar";

export const NavBar = () => {

  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false)

  const { categories, fetchCategories } = useCategoryStore();
  const { fetchProducts } = useProductStore();
  const { getTotalProducts } = useCartStore();

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full h-28 bg-[#fff] z-[50]">
      <div className="flex items-center justify-between h-full font-medium px-6 lg:px-10">
        <div className="z-50 md:w-auto w-full flex justify-between items-center h-full px-5">         <Link
          to={"/"}
        >
          <p
            className="font-dancing text-[38px] ">
            Hornera de Barro
          </p>
        </Link>
          {/*Menú desplegable */}
          <div className="hover:cursor-pointer text-3xl md:hidden z-[10000]"
            onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </div>
        </div>
        <ul
          className="md:flex hidden items-center gap-6 lg:gap-10 font-rubik font-normal">
          <li>
            <Link
              className="uppercase transition-all duration-300"
              to="/">
              Inicio
            </Link>
          </li>

          <li
            className="text-left md:cursor-pointer"
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}>
            <div className="flex items-center">
              <button
                className="py-7 uppercase transition-all duration-300 ease-in-out">
                Productos
              </button>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
            <div className="flex justify-start md:justify-center ">
              <MenuProductos
                categories={categories}
                visible={showProducts}
                onClose={() => {
                  setShowProducts(false);
                  setOpen(false);
                }}
              />
            </div>
          </li>

          <li className="text-left md:cursor-pointer">
            <button
              className="uppercase transition-all duration-300 ease-in-out"
              onClick={() => navigate("/about")}>
              Sobre mi
            </button>
          </li>
        </ul>

        {/*Botón Carrito*/}
        <Link
          to="/cart">
          <div
            className="relative w-10 h-10 flex justify-center items-center">
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
            <span
              className={`
              absolute top-2/4 right-1/2
            bg-red-500 text-white text-sm w-5 h-5 rounded-full
              flex justify-center items-center
              transition-all duration-500 ease-in-out
              ${getTotalProducts() > 0 ? "opacity-100 scale-100" : "opacity-0 scale-0"}
            `}
            >
              {getTotalProducts() > 0 ? getTotalProducts() : ""}
            </span>
          </div>
        </Link>

        {/*MOBILE NAV*/}
        <ul
          className={`
        md:hidden bg-white absolute w-full h-screen top-0
        py-36 pl-4 transition-left duration-300 font-rubik font-normal
        ${open ? "left-0" : "-left-full"}
        overflow-y-scroll scrollbar-none z-[40]`}
        >

          <li>
            <Link
              to={"/"}
              className="py-7 px-3 inline-block uppercase"
              onClick={() => {
                setShowProducts(false);
                setOpen(false);
              }}
            >
              Inicio
            </Link>
          </li>

          <li
            className="px-3 text-left md:cursor-pointer">
            <button
              className="py-7 uppercase"
              onClick={() => setShowProducts((prev) => !prev)}>
              Productos
            </button>
            <div>
              <div>
                <MenuProductos
                  categories={categories}
                  visible={showProducts}
                  onClose={() => {
                    setShowProducts(false);
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </li>

          <li className="px-3 text-left md:cursor-pointer">
            <button
              className="py-7 uppercase"
              onClick={() => navigate("/about")}>
              Sobre mi
            </button>
          </li>
        </ul>
      </div>
      {/* Barra de búsqueda*/}
      {/*<div>
        <SearchingBar />
      </div> */}
    </nav>
  )
}
