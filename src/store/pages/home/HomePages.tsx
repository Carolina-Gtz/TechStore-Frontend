import { CustomHeader } from "@/shared/components/CustomHeader";
import { CustomBanner } from "@/store/components/CustomBanner"
import { CustomJumbotron } from "@/store/components/CustomJumbotron"
import { CustomProductCard } from "@/store/components/CustomProductCard";
import { useProducts } from "@/store/hooks/useProducts";
import { useSearchParams } from "react-router";

export const HomePages = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const { data } = useProducts();

    const showResults = query.trim().length > 0;

    return (
        <>
            <CustomHeader />

            {!showResults && (
                <>
                    <CustomJumbotron description="Todo lo que necesitas" />
                    <CustomBanner />
                </>
            )}

            {showResults && (
                <CustomProductCard
                    title={``}
                    description=""
                    products={data ?? []}
                />
            )}
        </>
    );
};