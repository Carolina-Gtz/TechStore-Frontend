import { useParams } from "react-router"
import { AdminUserUpdatePage } from "./AdminUserUpdatePage"
import { AdminUserCreatePage } from "./AdminUserCreatePage"

export const AdminProductPage = () => {
    const { id } = useParams<{ id: string }>()

    const isEdit = !!id

    return (
        <>
            {isEdit ? (
                <AdminUserUpdatePage />
            ) : (
                <AdminUserCreatePage />
            )}
        </>
    )
}
