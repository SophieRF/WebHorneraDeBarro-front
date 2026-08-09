import { useEffect, useState } from "react";
import { useProductStore } from "../store/useProductStore";
import { EditProductModal } from "../components/Modals/EditProductModal";

export const AdminProductsScreen = () => {
    const { fetchProducts, products } = useProductStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-8">
            <table className="w-full border-collapse">
                <thead>
                    {/* Título */}
                    <tr>
                        <th
                            colSpan={8}
                            className="border border-gray-400 p-4 text-xl font-bold text-center"
                        >
                            PRODUCTOS
                        </th>
                    </tr>

                    {/* Encabezados */}
                    <tr>
                        <th className="border border-gray-400 p-2">
                            Imagen
                        </th>

                        <th className="border border-gray-400 p-2">
                            Nombre
                        </th>

                        <th className="border border-gray-400 p-2">
                            Descripción
                        </th>

                        <th className="border border-gray-400 p-2">
                            Precio
                        </th>

                        <th className="border border-gray-400 p-2">
                            Categoría
                        </th>

                        <th className="border border-gray-400 p-2">
                            Disponible
                        </th>

                        <th className="border border-gray-400 p-2">
                            Destacado
                        </th>

                        <th className="border border-gray-400 p-2">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product._id}
                            className="hover:bg-gray-50"
                        >
                            {/* Imagen */}
                            <td className="border border-gray-400 p-2">
                                {product.images.length > 0 ? (
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={product.images[0].url}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-gray-500">
                                        Sin imagen
                                    </span>
                                )}
                            </td>

                            {/* Nombre */}
                            <td className="border border-gray-400 p-2">
                                {product.name}
                            </td>

                            {/* Descripción */}
                            <td className="border border-gray-400 p-2 max-w-xs">
                                <p className="truncate">
                                    {product.description}
                                </p>
                            </td>

                            {/* Precio */}
                            <td className="border border-gray-400 p-2 text-center">
                                ${product.price}
                            </td>

                            {/* Categoría */}
                            <td className="border border-gray-400 p-2 text-center">
                                {product.category.name}
                            </td>

                            {/* Disponible */}
                            <td className="border border-gray-400 p-2 text-center">
                                {product.available ? "✅" : "❌"}
                            </td>

                            {/* Destacado */}
                            <td className="border border-gray-400 p-2 text-center">
                                {product.isFeatured ? "⭐" : "-"}
                            </td>

                            {/* Acciones */}
                            <td className="border border-gray-400 p-2">
                                <div className="flex gap-2 justify-center">
                                    <button
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={() => setIsModalOpen(!isModalOpen)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {products.length === 0 && (
                        <tr>
                            <td
                                colSpan={8}
                                className="border border-gray-400 p-4 text-center"
                            >
                                No hay productos cargados
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

             {isModalOpen && (
        <EditProductModal
            onClose={() => setIsModalOpen(false)}
        />
    )}
        </div>

    );
};

/*import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";

export const AdminProductsScreen = () => {

    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="p-8">
                <table className="h-full w-full ">
                    <thead>
                        <tr>
                            <th
                            colSpan={7} 
                            className="w-full border border-gray-400 ">
                                PRODUCTOS
                            </th>
                        </tr>
                        <tr>
                            <th className="border border-gray-400 p-2">Nombre</th>
                            <th className="border border-gray-400 p-2">Descripción</th>
                            <th className="border border-gray-400 p-2">Precio</th>
                            <th className="border border-gray-400 p-2">Imagenes</th>
                            <th className="border border-gray-400 p-2">Categoría</th>
                            <th className="border border-gray-400 p-2">Disponible</th>
                            <th className="border border-gray-400 p-2">Destacado</th>

                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td className="border border-gray-400 p-2">
                                    {product.name}
                                </td>

                                <td className="border border-gray-400 p-2">
                                    {product.description}
                                </td>

                                <td className="border border-gray-400 p-2">
                                    {product.price}
                                </td>

                                <td className="border border-gray-400 p-2">
                                    {product.images}
                                </td>
                                <td className="border border-gray-400 p-2">
                                    {product.category.name}
                                </td>
                                <td className="border border-gray-400 p-2">
                                    {product.available ? "✅" : "❌"}
                                </td>
                                <td className="border border-gray-400 p-2">
                                    {product.isFeatured ? "⭐" : "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}*/