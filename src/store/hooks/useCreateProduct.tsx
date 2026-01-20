import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProductAction } from "../actions/create-product.action"
import { useNavigate } from "react-router"

export const useCreateProduct = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: createProductAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
            navigate("/admin/products")
        }
    })
}
