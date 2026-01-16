import { AdminTitle } from "@/admin/components/AdminTitle"
import { Button } from "@/components/ui/button"
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useDeleteProduct } from "@/store/hooks/useDeleteProduct"
import { useProducts } from "@/store/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {

    const { data: products, isLoading } = useProducts()
    const deleteProduct = useDeleteProduct()

    if (isLoading) {
        return <p>Cargando productos...</p>
    }

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <AdminTitle
                    title="Productos"
                    subtitle="Administra tus productos"
                />

                <Link to="/admin/products/new">
                    <Button>
                        <PlusIcon className="mr-2" />
                        Nuevo producto
                    </Button>
                </Link>
            </div>

            <Table className="bg-white shadow-xs border border-gray-200">
                <TableCaption>Listado de productos</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>

                            <TableCell>
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </TableCell>

                            <TableCell>{product.nombre}</TableCell>
                            <TableCell>${product.precio}</TableCell>
                            <TableCell>{product.categoria}</TableCell>
                            <TableCell>
                                {product.stock ?? 0}
                            </TableCell>

                            <TableCell className="text-right space-x-3">
                                <Link
                                    to={`/admin/products/${product.id}/edit`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Editar
                                </Link>

                                <button
                                    onClick={() => {
                                        const confirmDelete = confirm(
                                            `¿Estás seguro de eliminar el producto "${product.nombre}"?`
                                        )

                                        if (confirmDelete) {
                                            deleteProduct.mutate(product.id)
                                        }
                                    }}
                                    className="text-red-600 hover:underline"
                                >
                                    Eliminar
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}