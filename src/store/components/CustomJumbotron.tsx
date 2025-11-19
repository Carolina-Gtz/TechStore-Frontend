import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";


export interface Props {
    description: string,
}

export function CustomJumbotron({ description }: Props) {
    return (
        <header className="relative bg-white overflow-hidden h-[400px]">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                // src="/src/assets/product/bannerPromocionalMinimalista.png"
                // className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90  to-black/70" />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/85  to-black/40" /> */}
            </div>

            {/* <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> */}
            {/* <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> */}

            <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> */}

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white max-w-xl"
                >
                    <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Envíos a todo el país • Miles de productos
                    </p>

                    <h1
                        // className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
                        className="mt-6 text-3xl sm:text-2xl lg:text-3xl xl:text-6xl font-extrabold leading-tight"
                    >
                        {description},
                        <span className="text-amber-400">
                            {'en un solo lugar'}
                        </span>
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl text-white/90">
                        Electrónica, moda, hogar, juguetes y mucho más. Encuentra ofertas diarias y envíos rápidos.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button className="bg-amber-400 text-black hover:bg-amber-500 px-6 py-3 font-semibold rounded-xl shadow-lg">
                            <Link to='/product/:idSlug'>
                                Comprar ahora
                            </Link>
                        </Button>
                    </div>
                </motion.div>
                {/* <CustomSearchBox /> */}
            </div >



            {/* Wave */}
            < div className="absolute bottom-0 left-0 right-0 pointer-events-none" >
                <svg viewBox="0 0 1440 80" className="w-full h-20" preserveAspectRatio="none" fill="white">
                    <path d="M0 0 C360 80 1080 0 1440 80 L1440 80 L0 80 Z" />
                </svg>
            </div >
        </header >
    );
}
