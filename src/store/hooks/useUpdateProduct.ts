import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProductAction } from "../actions/update-product.action"
import { useNavigate } from "react-router"

export const useUpdateProduct = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: updateProductAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
            navigate("/admin/products")
        }
    })
}
