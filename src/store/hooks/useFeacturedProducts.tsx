import { useQuery } from "@tanstack/react-query"
import { getFeaturedProductsAction } from "../actions/get-featuredProducts.action"

export const useFeacturedProducts = () => {

    return useQuery({
        queryKey: ['featuredProducts'],
        queryFn: getFeaturedProductsAction,
        staleTime: 1000 * 60 * 5,
    })
}
