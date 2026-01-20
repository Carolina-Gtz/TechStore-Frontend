import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { getProductByIdAction } from "../actions/get-product-by-id.action"

export const useProduct = () => {
    const { id } = useParams<{ id: string }>()

    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductByIdAction(id!),
        enabled: !!id
    })
}
