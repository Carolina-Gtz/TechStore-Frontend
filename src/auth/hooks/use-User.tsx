import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { getUserByIdAction } from "../actions/getUserByIdAction"

export const useUser = () => {
    const { id } = useParams<{ id: string }>()

    return useQuery({
        queryKey: ["users", id],
        queryFn: () => getUserByIdAction(id!),
        enabled: !!id
    })
}
