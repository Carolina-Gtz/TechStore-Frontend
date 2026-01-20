import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUserAction } from "../actions/delete-user.action"

export const useDeleteUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteUserAction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] })
        }
    })
}
