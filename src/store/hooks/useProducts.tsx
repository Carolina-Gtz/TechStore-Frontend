import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"
import { useParams, useSearchParams } from "react-router"

export const useProducts = () => {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || undefined;

    console.log({ category })
    console.log({ query })

    return useQuery({
        queryKey: ['products', { category, query }],
        queryFn: () => getProductsAction({ category, query }),
        staleTime: 1000 * 60 * 5,
    })
}
