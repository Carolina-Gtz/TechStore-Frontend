
import { useProducts } from "@/store/hooks/useProducts";
import { CustomProductCard } from "@/store/components/CustomProductCard";
import { CustomHeader } from "@/shared/components/CustomHeader";
import { CustomCategoriesMenu } from "@/store/components/CustomCategoriesMenu";
import { useParams } from "react-router";

export function CategoryPage() {

    const { category } = useParams();
    const { data: products } = useProducts();

    return (
        <>
            <CustomHeader />
            <CustomCategoriesMenu />

            <main className="px-4 md:px-25 ">
                <CustomProductCard
                    title={`${category?.toLocaleUpperCase()} `}
                    description={""}
                    products={products ?? []}
                />
            </main>
        </>
    );
}
