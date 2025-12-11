import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action"
import { useParams } from "react-router"

export const useProducts = () => {
    const { category } = useParams();

    console.log({ category })

    return useQuery({
        queryKey: ['products', { category }],
        queryFn: () => getProductsAction({ category }),
        staleTime: 1000 * 60 * 5,
    })
}
