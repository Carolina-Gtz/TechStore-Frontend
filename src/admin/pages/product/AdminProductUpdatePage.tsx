import { AdminTitle } from "@/admin/components/AdminTitle"
import { useParams } from "react-router"
import { useUpdateProduct } from "@/store/hooks/useUpdateProduct"
import { ProductForm, type ProductFormData } from "@/admin/components/ProductForm"
import { useProduct } from "@/store/hooks/use-Product"

export const AdminProductUpdatePage = () => {
    const { id } = useParams<{ id: string }>()

    const { data: product, isLoading } = useProduct()
    const updateProduct = useUpdateProduct()

    if (isLoading) {
        return <p>Cargando producto...</p>
    }

    return (
        <>
            <AdminTitle
                title="Editar producto"
                subtitle="Actualiza la información del producto"
            />

            <ProductForm
                defaultValues={{
                    nombre: product!.nombre,
                    precio: product!.precio,
                    descripcion: product!.descripcion,
                    imagen: product!.imagen,
                    stock: product!.stock,
                    categoria: product!.categoria
                }}
                onSubmit={(data: ProductFormData) =>
                    updateProduct.mutate({
                        id: id!,
                        ...data
                    })
                }
            />
        </>
    )
}
