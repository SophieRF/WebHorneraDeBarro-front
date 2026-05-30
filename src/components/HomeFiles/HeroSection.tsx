export const HeroSection = () => {
    return (
        <section className="relative bg-white -mx-10 px-10 py-14 flex flex-col items-center overflow-hidden">

            {/* Líneas top y base */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4956a] to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4956a] to-transparent" />

            {/*CONTENIDO */}
            <div className="flex flex-col items-center gap-6 max-w-2xl md:max-w-[46rem] w-full text-center">

                <div className="flex items-center gap-3">
                    <span className="w-9 h-px bg-[#c4956a] opacity-70" />
                    <span className="font-rubik text-[0.6rem] md:text-[0.6rem] font-light tracking-[0.38em] uppercase text-[#63452d]">
                        Cerámica ancestral · Mendoza
                    </span>
                    <span className="w-9 h-px bg-[#c4956a] opacity-70" />
                </div>

                {/* Título */}
                <h1 className="font-cormorant italic font-[400] text-[#362717] leading-[1.1] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
                    Formas que nacen<br />
                    de la{" "}
                    <em className="italic font-normal text-[#8b5a2b]">
                        tierra y el fuego
                    </em>
                </h1>

                {/* Divisor */}
                <div className="flex items-center gap-2 w-full max-w-[280px]">
                    <div className="flex-1 h-px bg-[#e0d0bf]" />
                    <div className="w-[5px] h-[5px] border border-[#c4956a] rotate-45 shrink-0" />
                    <div className="flex-1 h-px bg-[#e0d0bf]" />
                </div>

                {/* Descripción */}
                <p className="font-rubik font-light  text-[#3f3227] text-sm sm:text-base lg:text-lg leading-loose tracking-wide max-w-[24rem] sm:max-w-[30rem] lg:max-w-7xl">
                    Todas las piezas que creo son resultado de un proceso artesanal en el que busco vincularme permanentemente con la naturaleza. Utilizo barro rojo, engobes realizados con óxidos naturales, están bruñidas con piedra pulida para darle brillo e impermeabilizar la superficie, quemadas a leña en horno de barro y finalmente curadas con cera de abejas.
                </p>

                {/* Atributos */}
                <div className="flex flex-wrap justify-center mt-1">
                    {["Barro rojo", "Óxidos naturales", "Bruñido a piedra", "Horno de leña", "Cera de abejas"].map((attr, i) => (
                        <span
                            key={attr}
                            className="font-rubik font-light text-[0.58rem] tracking-[0.3em] uppercase text-[#5f432c] px-3 relative
                [&:not(:first-child)]:before:content-[''] [&:not(:first-child)]:before:absolute
                [&:not(:first-child)]:before:left-0 [&:not(:first-child)]:before:top-1/2
                [&:not(:first-child)]:before:-translate-y-1/2 [&:not(:first-child)]:before:w-px
                [&:not(:first-child)]:before:h-2.5 [&:not(:first-child)]:before:bg-[#c4956a55]"
                        >
                            {attr}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};