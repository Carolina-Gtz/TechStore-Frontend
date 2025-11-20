import { products } from "@/data/products.data"
import { CustomHeader } from "@/shared/components/CustomHeader"
import { CustomJumbotron } from "@/store/components/CustomJumbotron"
import { CustomProductCard } from "@/store/components/CustomProductCard"

export const ProductPage = () => {
    return (
        <>
            <CustomHeader />
            <CustomJumbotron description="Los mejores productos al mejor precio" />
            <CustomProductCard title={"Productos"} description={""} products={products} />
        </>
    )
}
