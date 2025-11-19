import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Product } from '../../data/products.data';


export interface Props {
    title: string;
    description?: string;
    products: Product[];
}

export function CustomProductCard({ products, title }: Props) {
    return (
        <div className="w-full py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                {products.map((product) => (
                    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition p-3">
                        <CardHeader>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <CardTitle className="mt-4 text-xl">{product.name}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">
                                {product.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex flex-col gap-3 mt-3">
                            <p className="font-semibold text-lg">${product.price.toLocaleString()}</p>
                            <Button className="w-full">Agregar al carrito</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
