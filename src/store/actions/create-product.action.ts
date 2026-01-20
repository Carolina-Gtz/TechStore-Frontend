import type { ProductFormData } from "@/admin/components/ProductForm"
import { techStoreApi } from "@/api/techStoreApi"

export const createProductAction = async (
    payload: ProductFormData) => {
    const { data } = await techStoreApi.post("/products", payload)
    return data
}
