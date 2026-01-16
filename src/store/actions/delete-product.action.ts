import { techStoreApi } from "@/api/techStoreApi"

export const deleteProductAction = async (id: string) => {
    const { data } = await techStoreApi.delete(`/products/${id}`)
    return data
}