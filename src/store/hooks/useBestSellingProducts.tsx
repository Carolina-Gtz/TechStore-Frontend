import { useQuery } from "@tanstack/react-query"
import { getBestSellingProductsAction } from "../actions/get-bestSellingProducts.action"

export const useBestSellingProducts = () => {

    return useQuery({
        queryKey: ['bestProducts'],
        queryFn: getBestSellingProductsAction,
        staleTime: 1000 * 60 * 5,
    })
}
