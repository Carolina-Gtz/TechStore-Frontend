import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CustomProductCard } from "./CustomProductCard";
import { promotionalSlides } from '../../data/products.data';
import { useFeacturedProducts } from "../hooks/useFeacturedProducts";
import { useBestSellingProducts } from "../hooks/useBestSellingProducts";
import { CustomCategoriesMenu } from "./CustomCategoriesMenu";

export function CustomBanner() {
    const [activeSlide, setActiveSlide] = useState(0);

    const { data: featuredProducts } = useFeacturedProducts();
    const { data: bestSellingProducts } = useBestSellingProducts();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % promotionalSlides.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="px-4 md:px-10 py-6">
            {/* Categorías */}
            <CustomCategoriesMenu />

            {/* Banner Slider */}
            <section className="relative w-full h-56 md:h-72 lg:h-96 overflow-hidden rounded-2xl shadow-lg mb-10">
                {promotionalSlides.map((s, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeSlide === index ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={s.img}
                            alt={s.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                                {s.title}
                            </h1>
                        </div>
                    </motion.div>
                ))}
            </section>


            {/* Productos Destacados */}
            <CustomProductCard title={"Productos Destacados"} description={""} products={featuredProducts ?? []} />

            {/* Más vendidos */}
            {/* <CustomProductCard title={"Mas vendidos"} description={""} products={featuredProducts} /> */}
            <CustomProductCard title={"Mas vendidos"} description={""} products={bestSellingProducts ?? []} />

        </main>
    );
}
