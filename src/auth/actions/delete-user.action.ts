import { techStoreApi } from "@/api/techStoreApi"

export const deleteUserAction = async (id: string) => {
    const { data } = await techStoreApi.delete(`/auth/${id}`)
    return data
}