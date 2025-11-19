import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";



export const CustomSearchBox = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí conectas tu buscador real
        console.log("Buscando:", query);

    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-30"
            >
                <Card className="backdrop-blur-sm bg-white/95 border-white/60 shadow-2xl rounded-2xl">
                    <CardContent className="p-6 space-y-4">
                        <form onSubmit={handleSearch} className="space-y-4">
                            <label className="text-sm font-medium text-gray-700">
                                ¿Qué estás buscando?
                            </label>

                            <div className="flex gap-2">
                                <Input
                                    type="search"
                                    placeholder="Busca productos, marcas o categorías"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 py-3"
                                />
                                <Button type="submit" className="px-5 py-3 bg-amber-400 text-black">
                                    <Search className="w-5 h-5" />
                                </Button>
                            </div>

                            <p className="text-xs text-gray-500">
                                Ej: "celular", "silla de oficina", "tv 4k"
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>

        </>
    )
}
