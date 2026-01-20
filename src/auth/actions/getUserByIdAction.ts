import { techStoreApi } from "@/api/techStoreApi"
import type { UsersResponse } from "../interfaces/users.response"

export const getUserByIdAction = async (id: string): Promise<UsersResponse> => {

    const { data } = await techStoreApi.get<UsersResponse>(`/auth/${id}`)

    return data
}
