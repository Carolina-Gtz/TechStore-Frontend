import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CustomProductCard } from "./CustomProductCard";
import { featuredProducts, products, promotionalSlides } from '../../data/products.data';

export function CustomBanner() {
    const [activeSlide, setActiveSlide] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % promotionalSlides.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="px-4 md:px-10 py-6">
            {/* Categorías */}
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Categorías </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {["Tecnología", "Accesorios", "Hogar", "Moda", "Salud"].map(
                        (cat, i) => (
                            <Card
                                key={i}
                                className="cursor-pointer hover:shadow-md transition border p-4 text-center font-medium"
                            >
                                {cat}
                            </Card>
                        )
                    )}
                </div>
            </section>
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
            <CustomProductCard title={"Productos Destacados"} description={""} products={products} />

            {/* Más vendidos */}
            <CustomProductCard title={"Mas vendidos"} description={""} products={featuredProducts} />

        </main>
    );
}
