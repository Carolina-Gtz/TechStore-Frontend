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
    imagen,
    ...payload
}: UpdateProductPayload) => {

    const normalizedImage = imagen
        ? new URL(imagen).pathname
        : undefined

    const { data } = await techStoreApi.patch(`/products/${id}`,
        {
            ...payload,
            imagen: normalizedImage
        }
    )
    return data

}
