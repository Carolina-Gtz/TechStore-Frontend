import { techStoreApi } from "@/api/techStoreApi"

export interface UpdateProductPayload {
    id: string
    nombre: string
    precio: number
    descripcion?: string
    imagen?: string
    stock?: number
    categoria: string
}

export const updateProductAction = async ({
    id,
    ...payload
}: UpdateProductPayload) => {
    const { data } = await techStoreApi.patch(`/products/${id}`, payload)
    return data
}
