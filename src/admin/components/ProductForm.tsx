import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"

export interface ProductFormData {
    nombre: string
    precio: number
    descripcion?: string
    imagen?: string
    stock?: number
    categoria: string
}

interface Props {
    defaultValues?: ProductFormData
    onSubmit: (data: ProductFormData) => void
}

export const ProductForm = ({ defaultValues, onSubmit }: Props) => {
    const { register, handleSubmit, formState: { errors }
    } = useForm<ProductFormData>({
        defaultValues
    })

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded shadow max-w-xl space-y-4"
        >
            <Input
                placeholder="Nombre"
                {...register("nombre", { required: 'El nombre es obligatorios' })}
            />
            {errors.nombre && (
                <p className="text-sm text-red-500">
                    {errors.nombre.message}
                </p>
            )}

            <Input
                type="number"
                placeholder="Precio"
                {...register("precio", {
                    required: "El precio es obligatorio",
                    valueAsNumber: true,
                    min: { value: 1, message: "Precio mínimo 1" }
                })}
            />
            {errors.precio && (
                <p className="text-sm text-red-500">
                    {errors.precio.message}
                </p>
            )}

            <Textarea
                placeholder="Descripción"
                {...register("descripcion")}
            />

            <Input
                placeholder="URL de imagen"
                {...register("imagen")}
            />

            <Input
                type="number"
                placeholder="Stock"
                {...register("stock", { valueAsNumber: true })}
            />

            <Input
                placeholder="Categoría"
                {...register("categoria", {
                    required: "La categoría es obligatoria",
                    minLength: { value: 1, message: "Categoría inválida" }
                })}
            />
            {errors.categoria && (
                <p className="text-sm text-red-500">
                    {errors.categoria.message}
                </p>
            )}

            <Button type="submit">
                {defaultValues ? "Actualizar producto" : "Crear producto"}
            </Button>
        </form>
    )
}