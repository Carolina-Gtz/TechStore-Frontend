import { Card } from "@/components/ui/card"
import { toSlug } from "@/lib/utils"
import { Link } from "react-router"

export const CustomCategoriesMenu = () => {


    return (
        <>
            {/* Categorías */}
            <section className="mb-10">
                <div className="my-10 px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {["Tecnología", "Accesorios", "Hogar", "Moda", "Salud"].map(
                            (cat, i) => (
                                <Link key={i} to={`/categoria/${toSlug(cat)}`}>
                                    <Card
                                        key={i}
                                        className="cursor-pointer hover:shadow-md transition border p-4 text-center font-medium"
                                    >
                                        {cat}
                                    </Card>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
