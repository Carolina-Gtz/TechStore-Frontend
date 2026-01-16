import { techStoreApi } from "@/api/techStoreApi"
import type { ProductsResponse } from "@/interfaces/products.response"

export const getProductByIdAction = async (id: string): Promise<ProductsResponse> => {

    const { data } = await techStoreApi.get<ProductsResponse>(`/products/${id}`)

    return {
        ...data,
        imagen: `${import.meta.env.VITE_ASSETS_URL}${data.imagen}`
    }
}
