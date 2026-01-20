import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { createUserAction } from "../actions/create-user.action"

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: createUserAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] })
            navigate("/admin/users")
        }
    })
}
