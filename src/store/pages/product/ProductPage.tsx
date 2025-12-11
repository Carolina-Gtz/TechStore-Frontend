import { CustomHeader } from "@/shared/components/CustomHeader"
import { CustomCategoriesMenu } from "@/store/components/CustomCategoriesMenu"
// import { CustomJumbotron } from "@/store/components/CustomJumbotron"
import { CustomProductCard } from "@/store/components/CustomProductCard"
import { useProducts } from "@/store/hooks/useProducts"

export const ProductPage = () => {
    const { data } = useProducts();
    console.log(data)
    return (
        <>
            <CustomHeader />
            {/* <CustomJumbotron description="Los mejores productos al mejor precio" /> */}
            <CustomCategoriesMenu />
            <CustomProductCard title={"Productos"} description={""} products={data ?? []} />
        </>
    )
}
