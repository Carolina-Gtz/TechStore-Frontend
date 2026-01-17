import { techStoreApi } from "@/api/techStoreApi"
import type { ProductsResponse } from "@/interfaces/products.response";

export const getBestSellingProductsAction = async (): Promise<ProductsResponse[]> => {
    const { data } = await techStoreApi.get<ProductsResponse[]>('/products/filter/mas-vendidos')
    const productosConURL = data.map(product => ({
        ...product,
        imagen: `${import.meta.env.VITE_ASSETS_URL}${product.imagen}`
    }))
    console.log(data)
    return productosConURL

}
