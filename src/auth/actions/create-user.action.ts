import type { UserFormData } from "@/admin/components/UserForm"
import { techStoreApi } from "@/api/techStoreApi"

export const createUserAction = async (
    payload: UserFormData) => {
    const { data } = await techStoreApi.post("auth/register", payload)
    return data
}