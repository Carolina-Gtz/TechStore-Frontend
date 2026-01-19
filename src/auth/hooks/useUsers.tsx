import { useQuery } from "@tanstack/react-query"
import { useParams, useSearchParams } from "react-router"
import { getUsersAction } from "../actions/get-users.action";

export const useUsers = () => {
    const { role } = useParams();
    const roles = role ? [role] : undefined;

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    return useQuery({
        queryKey: ['users', { roles, query }],
        queryFn: () => getUsersAction({ role: roles, query }),
        staleTime: 1000 * 60 * 5,
    })
}
