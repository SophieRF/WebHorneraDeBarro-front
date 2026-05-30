import { useState } from "react";

export const SearchingBar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Buscar:", search);
    };

    return (
        <div className="w-full flex bg-white items-center pl-7 lg:pl-11">
            <form
                onSubmit={handleSearch}
                className="md:w-96 max-w-xl pb-2 flex items-center bg-white overflow-hidden"
            >
                {/* Icono */}
                <div>
                    <span className=" material-symbols-outlined px-3 text-gray-500">
                        search
                    </span>
                </div>

                {/* Input */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-60 lg:w-72 h-8 border-b border-r border-solid border-gray-300 py-2 pr-4 outline-none text-gray-700 cursor-pointer"
                />
            </form>
        </div>
    );
};