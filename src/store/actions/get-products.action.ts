import { techStoreApi } from "@/api/techStoreApi"
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    category?: string;
    query?: string;
}

export const getProductsAction = async (option: Options): Promise<ProductsResponse[]> => {

    const { category, query } = option
    const { data } = await techStoreApi.get<ProductsResponse[]>
        ('/products', { params: { category, query }, })


    const productosConURL = data.map(product => ({
        ...product,
        imagen: `${import.meta.env.VITE_ASSETS_URL}${product.imagen}`
    }))

    return productosConURL

}