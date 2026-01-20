import { techStoreApi } from "@/api/techStoreApi"
import type { UsersResponse } from "../interfaces/users.response";

interface Options {
    role?: string[];
    query?: string;
}

export const getUsersAction = async (option: Options): Promise<UsersResponse[]> => {

    const { role, query } = option
    const { data } = await techStoreApi.get<UsersResponse[]>
        ('/auth', { params: { role, query }, })

    return data

}