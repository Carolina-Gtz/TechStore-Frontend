import { AdminTitle } from "@/admin/components/AdminTitle"
import { ProductForm } from "@/admin/components/ProductForm"
import { useCreateProduct } from "@/store/hooks/useCreateProduct"

export const AdminProductCreatePage = () => {
    const createProduct = useCreateProduct()

    return (
        <>
            <AdminTitle
                title="Nuevo producto"
                subtitle="Crea un nuevo producto"
            />

            <ProductForm
                onSubmit={(data) => createProduct.mutate(data)}
            />
        </>
    )
}
