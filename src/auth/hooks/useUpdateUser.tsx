import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { updateUserAction } from "../actions/update-user.action"

export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: updateUserAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] })
            navigate("/admin/users")
        }
    })
}
