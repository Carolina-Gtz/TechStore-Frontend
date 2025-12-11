import { techStoreApi } from "@/api/techStoreApi"
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    category?: string;
}

export const getProductsAction = async (
    option: Options
): Promise<ProductsResponse[]> => {

    console.log("URL usada:", techStoreApi.defaults.baseURL);

    const { category } = option
    console.log({ category });

    const { data } = await techStoreApi.get<ProductsResponse[]>
        ('/products', { params: { category }, })


    const productosConURL = data.map(product => ({
        ...product,
        imagen: `${import.meta.env.VITE_API_URL}${product.imagen}`
    }))
    console.log(data)
    return productosConURL

}
