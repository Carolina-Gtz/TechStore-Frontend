import { useParams } from "react-router"
import { AdminProductUpdatePage } from "./AdminProductUpdatePage"
import { AdminProductCreatePage } from "./AdminProductCreatePage"

export const AdminProductPage = () => {
    const { id } = useParams<{ id: string }>()

    const isEdit = !!id

    return (
        <>
            {isEdit ? (
                <AdminProductUpdatePage />
            ) : (
                <AdminProductCreatePage />
            )}
        </>
    )
}
